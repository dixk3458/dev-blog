import AdjacentPost from '@/components/AdjacentPost';
import PostContent from '@/components/PostContent';
import TagSpan from '@/components/TagSpan';
import { getPostData } from '@/service/posts';


type Props = {
  params: { slug: string[] };
};

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
