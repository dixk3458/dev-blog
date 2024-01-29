import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Jaewoong Blog</h1>
      </Link>
      <div>
        <Link href="/contact">Contact</Link>
        <button>✨</button>
      </div>
    </header>
  );
}
