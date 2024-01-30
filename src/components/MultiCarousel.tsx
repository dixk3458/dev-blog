import Carousel from 'react-multi-carousel';

type Props = {
  children: React.ReactNode;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      responsive={responsive}
      containerClass="w-full flex bg-indigo-100 gap-2 p-4 rounded-lg border-2 border-indigo-300"
    >
      {children}
    </Carousel>
  );
}
