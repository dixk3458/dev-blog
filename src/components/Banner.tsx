export type BannerData = {
  message: string;
  status: 'success' | 'error';
};

type Props = {
  banner: BannerData;
};

export default function Banner({ banner: { message, status } }: Props) {
  const isSuccess = status === 'success';
  const icon = isSuccess ? '✅' : '❌';

  return (
    <p className={`mt-4 p-2 font-semibold w-full text-center  rounded-md ${isSuccess ? 'bg-blue-300' : 'bg-red-300'}`}>
      {`${icon} ${message}`}
    </p>
  );
}
