import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  bookmarked: boolean;
};

export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

export async function getAllPosts(): Promise<Post[]> {
  // 모든 Posts를 읽어서 Post 배열을 반환해준다.

  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(data => JSON.parse(data))
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(slugPath: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', `${slugPath}.md`);

  const posts = await getAllPosts();

  const post = posts.find(post => post.path === slugPath);

  if (!post) {
    throw new Error(`No corresponding post were found.`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, 'utf-8');

  return { ...post, content, prev, next };
}
