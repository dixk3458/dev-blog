'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBanner({
      message: '메일이 성공적으로 전송되었습니다.',
      status: 'success',
    });

    // setTimeout(() => {
    //   setBanner(null);
    // }, 3000);
  };
  return (
    <section className="w-full max-w-screen-sm">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={e => handleSubmit(e)}
        className="bg-blue-100 flex flex-col w-full gap-2 p-4 my-4 rounded-lg"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          autoFocus
          value={form.from}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="subject" className="font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          required
          onChange={e => handleChange(e)}
        />
        <button className="font-bold  bg-blue-400 p-2 rounded-md duration-200 hover:brightness-110">
          Submit
        </button>
      </form>
    </section>
  );
}
