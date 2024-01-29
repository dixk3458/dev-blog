import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';

const links = [
  {
    href: 'https://www.notion.so/Frontend-Engineer-d484da4e05da443da11ede6879ca21ee?pvs=4',
    title: 'Resume',
  },
  {
    href: 'https://github.com/dixk3458',
    title: 'Github',
  },
];

export default function UserCard() {
  return (
    <>
      <Avatar size="medium" highlight={false} />
      <div>
        <h2>
          <a href="https://www.notion.so/Frontend-Engineer-d484da4e05da443da11ede6879ca21ee?pvs=4">
            @정재웅
          </a>
        </h2>
        <p>
          저는 주변 사람들에게 도움을 주는 것에 큰 노력을 합니다. 사용자와
          기억에 남는 상호작용하는 것, 복잡한 것을 풀어내간단하게 만드는 것을
          좋아합니다. 현재 꿈을 코딩하고 있습니다.
        </p>
        <nav>
          <ul>
            {links.map(({ href, title }) => {
              return (
                <li key={title}>
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
