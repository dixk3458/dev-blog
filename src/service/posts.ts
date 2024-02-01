import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

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

// fetch는 Nextjs가 동일한 요청에 대해서 중복요청을 제거해준다.
// 하지만 fetch를 사용하지 않는경우 불필요한 중복요청(파일 읽거나, 데이터 베이스 접근)이 발생하면
// 자원낭비

// 표현식으로 만들고 React에서 제공하는 cache를 사용
// 그 안에 함수 정의

// cache로 감싸주면, 동일한 인자요청에 대해서는 cache된 값을 사용해준다.
// 서버가 동작하는 모든 시간에 대해서 cache된 값을 사용하는것이 아니라
// , 한번 렌더링되는 사이클에 한해서 cache된 데이터를 사용해준다.
export const getAllPosts = cache(async () => {
  // 모든 Posts를 읽어서 Post 배열을 반환해준다.

  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(data => JSON.parse(data))
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getBookmarkedPosts(): Promise<Post[]> {
  return getAllPosts().then(posts =>
    posts.filter(post => post.bookmarked === true)
  );
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
