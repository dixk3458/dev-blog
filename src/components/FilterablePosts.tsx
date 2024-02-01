'use client';

import { Post } from '@/service/posts';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Categories from './Categories';
import PostLists from './PostLists';
import SearchBar from './SearchBar';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL = 'All';

const PAGE_SIZE = 10;

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL);
  const [text, setText] = useState('');
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const currentObserver = observerRef.current; // Store the current value
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && hasMore) {
            const nextData = posts.slice(
              visiblePosts.length,
              visiblePosts.length + PAGE_SIZE
            );
            if (nextData.length > 0) {
              setVisiblePosts(prev => [...prev, ...nextData]);
              setIsLoading(false);
            } else {
              // No more data to load
              setHasMore(false);
              setIsLoading(false);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (currentObserver) {
      observer.observe(currentObserver);
    }
    setIsLoading(false);

    return () => {
      // Use the stored value in the cleanup function
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [visiblePosts, hasMore, posts]);

  const filtered =
    selected === ALL && !text
      ? visiblePosts
      : selected === ALL && text
      ? visiblePosts.filter(post => post.title.includes(text.trim()))
      : text
      ? visiblePosts.filter(
          post => post.category === selected && post.title.includes(text.trim())
        )
      : visiblePosts.filter(post => post.category === selected);

  const handleClick = (selected: string) => {
    setSelected(selected);
    setIsLoading(false);
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
      <SearchBar length={posts.length} text={text} onChange={handleChange} />
      <PostLists
        posts={filtered}
        observerRef={observerRef}
        isLoading={isLoading}
      />
    </section>
  );
}
