import Image from 'next/image';
import profileImagePath from '../../public/images/jjw.png';
import { getImageSize } from 'next/dist/server/image-optimizer';

type AvatarSize = 'small' | 'medium' | 'large';

type SizeStyle = {
  container: string;
  avatar: string;
};

type Props = {
  size: AvatarSize;
  highlight: boolean;
};

export default function Avatar({ size = 'medium', highlight = false }: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <Image
        src={profileImagePath}
        alt="Avatar Jaewoong"
        className={`bg-white object-cover rounded-full ${
          getSizeStyle(size).avatar
        }`}
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  // Image를 감싸는 div요소에 대한 스타일
  const baseStyle =
    ' relative flex justify-center items-center rounded-full aspect-square';
  const highlightStyle = `${
    highlight
      ? 'bg-gradient-to-bl from-sky-300 via-sky-600 to-blue-600 p-[1.2px]'
      : ''
  }`;

  const { container } = getSizeStyle(size);

  return `${baseStyle} ${highlightStyle} ${container}`;
}

function getSizeStyle(size: AvatarSize): SizeStyle {
  switch (size) {
    case 'small':
      return {
        container: 'w-12 h-12 ',
        avatar: 'w-[46px] h-[46px] p-[0.2px] ',
      };
    case 'medium':
      return { container: 'w-16 h-16', avatar: 'w-[60px] h-[60px] p-[0.2px]' };
    case 'large':
      return { container: 'w-24 h-24', avatar: 'w-[90px] h-[90px] p-[0.4px]' };
    default:
      throw new Error(`Unsupported Size: ${size}`);
  }
}
