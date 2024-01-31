import { PostData } from '@/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = {
  postData: PostData;
};

export default function PostContent({ postData }: Props) {
  const { description, content, date, bookmarked } = postData;
  return (
    <>
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
    </>
  );
}
