import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full max-w-screen-2xl flex justify-between mx-auto p-4 ">
      <Link href="/">
        <h1 className="font-bold text-md md:text-lg lg:text-2xl">
          Jaewoong Blog
        </h1>
      </Link>
      <div>
        <Link href="/contact" className="text-sm md:text-md lg:text-lg">
          Contact
        </Link>
        <button className="ml-4">✨</button>
      </div>
    </header>
  );
}
