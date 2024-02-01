import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { ImSection } from 'react-icons/im';

export const metadata: Metadata = {
  title: 'Contact Jaewoong',
  description: '프론트엔드 개발자 정재웅 Contact Page',
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center w-full max-w-screen-md mx-auto py-4 grow">
      <h2 className="text-xl lg:text-4xl">Contact Me</h2>
      <p className="text-lg mt-4 lg:tet-xl">dixk3458@naver.com</p>
      <ContactForm />
    </section>
  );
}
