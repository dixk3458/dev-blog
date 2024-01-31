import MarkdownViewer from '@/components/MarkdownViewer';
import TagSpan from '@/components/TagSpan';
import { getPostData } from '@/service/posts';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = {
  params: { slug: string[] };
};

export default async function AlgorithmPage({ params: { slug } }: Props) {
  // slug를 이용해 데이터를 md 파일을 가져와야한다.
  // algorithm/slug.join('/')
  const [subdivision, fileName] = slug;
  const { title, description, date, category, bookmarked, content } =
    await getPostData('algorithm', fileName, subdivision);

  return (
    <article className="flex flex-col max-w-screen-md mx-auto p-4 rounded-2xl bg-gray-100 shadow-lg my-4">
      <div>
        <h2 className="text-lg font-bold line-clamp-1 lg:text-2xl">
          {description}
        </h2>
        <div className="flex items-center text-blue-400 my-4">
          <FaRegCalendarAlt />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        {bookmarked ? (
          <span className="bg-indigo-100  rounded-md p-2  font-semibold">
            복습필수🚩
          </span>
        ) : (
          <span className="bg-indigo-100 rounded-md  p-2 font-semibold">
            복습완료✅
          </span>
        )}
      </div>
      <div className="w-44 border-2 border-blue-400 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </article>
  );
}
