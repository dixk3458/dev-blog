import { sendEmail } from '@/service/email';
import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: NextRequest) {
  // 서버측에서 요청을 받으면 그 요청을 처리하고 응답을 해주면된다.
  // 서버측에서 요청의 유효성을 검사

  // req는 ReadableStream이다. 이것을 JSON형태로 바꿔줘야한다.
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new NextResponse(
      JSON.stringify({ message: '메일 전송에 실패했습니다.' }),
      { status: 400 }
    );
  }

  return sendEmail(body)
    .then(() => {
      return new NextResponse(
        JSON.stringify({ message: '메일을 성공적으로 보냈습니다.' }),
        { status: 200 }
      );
    })
    .catch(() => {
      return new NextResponse(
        JSON.stringify({ message: '메일 전송에 실패했습니다.' }),
        { status: 500 }
      );
    });
}
