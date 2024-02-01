import { Post } from '@/service/posts';
import { ChangeEvent } from 'react';
import { CiSearch } from 'react-icons/ci';

type Props = {
  text: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  filtered: Post[];
};

export default function SearchBar({ text, onChange, filtered }: Props) {
  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex justify-between border-b border-indigo-100">
        <input
          className="grow text-sm font-semibold p-4 outline-none"
          type="text"
          value={text}
          onChange={e => onChange(e)}
          placeholder="제목을 입력해주세요"
        />
        <button className="text-2xl text-gray-400">
          <CiSearch />
        </button>
      </div>
      <p className="self-end mt-4 text-xs font-semibold text-gray-400">
        {`총 ${filtered.length}개의 게시글`}
      </p>
    </div>
  );
}
