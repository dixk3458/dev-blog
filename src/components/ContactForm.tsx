'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="from">Your Email</label>
        <input
          type="email"
          id="from"
          name="from"
          autoFocus
          value={form.from}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          required
          onChange={e => handleChange(e)}
        />
        <label htmlFor="subject">Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          required
          onChange={e => handleChange(e)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
