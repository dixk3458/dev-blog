import Image from 'next/image';
import profileImagePath from '../../public/images/jjw.png';

type Props = {
  size: 'small' | 'medium' | 'large';
  highlight: boolean;
};

export default function Avatar({ size = 'medium', highlight = false }: Props) {
  return (
    <div>
      <Image src={profileImagePath} alt="Avatar Jaewoong" />
    </div>
  );
}
