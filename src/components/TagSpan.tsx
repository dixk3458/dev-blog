type TagSize = 'small' | 'medium' | 'large';

type Props = {
  category: string;
  size?: TagSize;
  filter?: string;
  onFilter?: (category: string) => void;
};

export default function TagSpan({
  category,
  size = 'medium',
  filter,
  onFilter,
}: Props) {
  return (
    <span
      onClick={() => onFilter && onFilter(category)}
      className={`${filter === category && 'border-indigo-300'} ${getTagStyle(
        size
      )}`}
    >
      {category}
    </span>
  );
}

function getTagStyle(size: TagSize): string {
  const baseStyle =
    'bg-gray-50 px-2 text-indigo-700 font-semibold rounded-lg border-2 shadow-md cursor-pointer';

  switch (size) {
    case 'small':
      return `${baseStyle} text-xs`;
    case 'medium':
      return `${baseStyle} text-base`;
    case 'small':
      return `${baseStyle} text-lg`;
    default:
      throw new Error(`Unsupported Size : ${size}`);
  }
}
