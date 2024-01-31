import { getPostData } from '@/service/posts';

type Props = {
  params: { slug: string[] };
};

export default async function AlgorithmPage({ params: { slug } }: Props) {
  // slug를 이용해 데이터를 md 파일을 가져와야한다.
  // algorithm/slug.join('/')
  const [subdivision, fileName] = slug;
  console.log(subdivision, fileName);
  const postData = await getPostData('algorithm', fileName, subdivision);

  return (
    <>
      <p>{postData.content}</p>
    </>
  );
}
