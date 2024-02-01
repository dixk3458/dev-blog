import AdjacentPost from '@/components/AdjacentPost';
import PostContent from '@/components/PostContent';
import TagSpan from '@/components/TagSpan';
import { getBookmarkedPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  // generateMetadata를 이용해서 dynamic 메타 데이터를 설정
  // params를 이용해 받아오는 데이터를 이용해 데이터 요청을하고 해당 post데이터를 활용
  const postData = await getPostData(slug.join('/'));

  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug.join('/'));
  const { prev, next } = postData;

  return (
    <article className=" flex flex-col max-w-screen-md mx-auto p-4 rounded-2xl bg-gray-100 shadow-lg my-4">
      <PostContent postData={postData} />
      <section className="flex  gap-4 mt-8">
        {prev && <AdjacentPost post={prev} type="prev" />}
        {next && <AdjacentPost post={next} type="next" />}
      </section>
    </article>
  );
}
