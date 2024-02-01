import { EmailData } from './email';

export default async function sendContactEmail(email: EmailData) {
  // 사용하는곳에서 email데이터를 이용해 서버에 요청을한다.

  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // json 형태의 응답을 받아 오브젝트로 변환
  const data = await res.json();

  // 서버측에서 nodemailer를 이용해 메일 보내기를 시도를 했지만, 실패한경우
  if (!res.ok) {
    // 내가 설정한 data에 message가 있다면 사용하고 없다면,
    throw new Error(data.message || '서버 요청에 실패했습니다.😅');
  }

  return data;
}
