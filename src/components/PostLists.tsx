import { Post } from '@/service/posts';
import TagSpan from './TagSpan';
import Link from 'next/link';
import { MutableRefObject } from 'react';
import { BeatLoader } from 'react-spinners';

type Props = {
  posts: Post[];
  observerRef: MutableRefObject<null>;
  isLoading: boolean;
};

export default function PostLists({ posts, observerRef, isLoading }: Props) {
  return (
    <section className="mt-8">
      <ul>
        {posts.map(({ title, description, category, date, path }) => {
          return (
            <li
              key={path}
              className="my-8 py-4 px-2 rounded-lg hover:bg-indigo-100 duration-300"
            >
              <Link href={`/post/${path}`}>
                <p className="text-base text-indigo-700 font-bold  md:text-lg lg:text-xl">
                  {title}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <time className="text-xs text-gray-400">{date}</time>
                  <TagSpan category={category} size="small" />
                </div>
                <p className="text-sm font-bold mt-2 md:text-base">
                  {description}
                </p>
              </Link>
            </li>
          );
        })}
        <div ref={observerRef}></div>
      </ul>
      {isLoading && (
        <div className="text-center">
          <BeatLoader color="#82C0FC" />
        </div>
      )}
    </section>
  );
}
