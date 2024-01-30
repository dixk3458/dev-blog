import TagSpan from './TagSpan';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="mt-8">
      <ul className="flex bg-indigo-100 gap-2 p-4 rounded-lg border-2 border-indigo-300">
        {categories.map(category => {
          return (
            <li key={category} onClick={() => onClick(category)}>
              <TagSpan category={category} size="medium" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
