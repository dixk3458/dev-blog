'use client';

import { useState } from 'react';
import TagSpan from './TagSpan';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  const [filter, setFilter] = useState(categories[0]);

  return (
    <section className="mt-8">
      <ul
        id="category__container"
        className="flex bg-indigo-100 gap-2 p-4 rounded-lg border-2 border-indigo-300 overflow-auto"
      >
        {categories.map(category => {
          return (
            <li key={category} onClick={() => onClick(category)}>
              <TagSpan
                category={category}
                size="medium"
                filter={filter}
                onFilter={() => setFilter(category)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
