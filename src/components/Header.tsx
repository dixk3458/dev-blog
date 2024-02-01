'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-screen-2xl flex justify-between mx-auto p-4 ">
      <Link href="/">
        <h1 className="font-bold text-md md:text-lg lg:text-2xl">
          Jaewoong Blog
        </h1>
      </Link>
      <div>
        <Link
          href="/contact"
          className={`text-sm p-1 rounded-md duration-100  ${
            pathname === '/contact'
              ? 'border-2 border-indigo-300'
              : 'border-2 border-transparent'
          }  md:text-md lg:text-lg `}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
