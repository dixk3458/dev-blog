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

export type PostData = Post & { content: string };

export async function getAllPosts(): Promise<Post[]> {
  // 모든 Posts를 읽어서 Post 배열을 반환해준다.

  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(data => JSON.parse(data))
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(
  category: string,
  fileName: string,
  subdivision?: string
): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    category,
    subdivision ?? '',
    `${fileName}.md`
  );
  console.log('fileasdfasdfasd,', filePath);

  const metadata = await getAllPosts().then(posts =>
    posts.find(post => post.path === `${category}/${subdivision}/${fileName}`)
  );

  if (!metadata) {
    throw new Error(`No corresponding post were found.`);
  }

  const content = await readFile(filePath, 'utf-8');

  return { ...metadata, content };
}
