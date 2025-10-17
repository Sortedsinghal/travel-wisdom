import React from 'react';
import Slider from 'react-slick';
import TripCard from './TripCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Trip {
  imageUrl: string;
  duration: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

interface TripSliderProps {
  trips: Trip[];
  slidesToShow?: number;
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} slick-arrow-custom`} onClick={onClick} style={{ ...style }}>
      <ChevronRight color="white" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} slick-arrow-custom`} onClick={onClick} style={{ ...style }}>
      <ChevronLeft color="white" />
    </div>
  );
};

const TripSlider: React.FC<TripSliderProps> = ({ trips, slidesToShow = 4 }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative pb-10">
      <Slider {...sliderSettings}>
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </Slider>
    </div>
  );
};

export default TripSlider;