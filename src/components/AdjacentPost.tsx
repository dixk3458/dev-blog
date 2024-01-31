import { Post } from '@/service/posts';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

const ICON_CLASS = 'text-4xl text-blue-600 m-4 group-hover:scale-x-110';
export default function AdjacentPost({ post, type }: Props) {
  const { path, title } = post;

  // /를 안붙이면 현재 경로를 기준으로 src를 추가해준다.
  return (
    <Link
      href={`/post/${path}`}
      className="group  p-8 flex w-full justify-around items-center rounded-lg bg-indigo-100 max-h-56 duration-200 hover:scale-105"
    >
      {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
      <h3 className="w-full text-center text-2xl font-bold line-clamp-1">
        {title}
      </h3>
      {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
    </Link>
  );
}
