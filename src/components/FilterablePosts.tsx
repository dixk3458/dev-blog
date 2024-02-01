'use client';

import { Post } from '@/service/posts';
import { ChangeEvent, useState } from 'react';
import Categories from './Categories';
import PostLists from './PostLists';
import SearchBar from './SearchBar';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL = 'All';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL);
  const [text, setText] = useState('');

  const filtered =
    selected === ALL && !text
      ? posts
      : selected === ALL && text
      ? posts.filter(post => post.title.includes(text.trim()))
      : text
      ? posts.filter(
          post => post.category === selected && post.title.includes(text.trim())
        )
      : posts.filter(post => post.category === selected);

  const handleClick = (selected: string) => {
    setSelected(selected);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section>
      <Categories
        categories={[ALL, ...categories]}
        selected={selected}
        onClick={handleClick}
      />
      <SearchBar text={text} onChange={handleChange} filtered={filtered} />
      <PostLists posts={filtered} />
    </section>
  );
}
