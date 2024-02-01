import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

// 외부에서 Transport를 이용해 메일을 보내는 함수를 생성

export async function sendEmail({ from, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[Jaewoong Blog] ${subject}`,
    from: from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
