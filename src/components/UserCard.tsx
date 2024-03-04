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
    <section className="flex items-center gap-4">
      <Avatar size="medium" highlight={true} />
      <div>
        <h2 className="inline-block bg-sky-100 rounded-md px-1 font-bold">
          <a href="https://www.notion.so/Frontend-Engineer-d484da4e05da443da11ede6879ca21ee?pvs=4">
            @정재웅
          </a>
        </h2>
        <p className="mt-2 text-xs  text-gray-400">
          저는 서비스를 제공하고 개선하는 과정에서 희열을 느낍니다. TTV 와 TTI를
          고려한 부드러운 UX 제공을 지향합니다. 현재 꿈을 코딩하고 있습니다.
        </p>
        <nav>
          <ul className="flex gap-2 mt-2 ">
            {links.map(({ href, title }) => {
              return (
                <li
                  key={title}
                  className="text-xs text-blue-600 font-bold hover:brightness-150"
                >
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
