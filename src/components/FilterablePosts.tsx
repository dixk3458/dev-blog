'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import Categories from './Categories';
import PostLists from './PostLists';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL = 'ALL';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL);
  const filtered =
    selected === ALL ? posts : posts.filter(post => post.category === selected);

  const handleClick = (selected: string) => {
    setSelected(selected);
  };

  return (
    <section>
      <Categories
        categories={categories}
        selected={selected}
        onClick={handleClick}
      />
      <PostLists posts={filtered} />
    </section>
  );
}
