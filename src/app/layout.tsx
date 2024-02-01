import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Jaewoong Dev Blog',
    template: 'Jaewoong Dev Blog | %s',
  },
  description: '프론트엔드 개발자 정재웅의 기술 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body className="flex flex-col w-full h-full">
        <div className="fixed top-0  z-50 bg-blue-100 w-full  ">
          <Header />
        </div>
        <main className="grow flex flex-col w-full max-w-screen-2xl mx-auto mt-16">
          {children}
        </main>
        <div className="w-full max-w-screen-2xl mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
