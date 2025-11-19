import React, { useEffect } from 'react';
import Slider from 'react-slick';
import TripCard from './TripCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Trip } from '@/data/trips';

interface ArrowProps {
  onClick?: () => void;
}

interface TripSliderProps {
  trips: Trip[];
  slidesToShow?: number;
}

// Base class for consistent arrow style
const ArrowBase =
  'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 ' +
  'hover:bg-[#002C2F] hover:text-white transition-all duration-200 ease-in-out cursor-pointer';

// Next Arrow (right side)
const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${ArrowBase} right-[-22px]`} // aligns neatly to card edge
    style={{ transform: 'translateY(-50%)' }}
  >
    <ChevronRight size={20} />
  </button>
);

// Previous Arrow (left side)
const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${ArrowBase} left-[-22px]`}
    style={{ transform: 'translateY(-50%)' }}
  >
    <ChevronLeft size={20} />
  </button>
);

const TripSlider: React.FC<TripSliderProps> = ({ trips, slidesToShow = 4 }) => {
  // Inject styles for active dots
  useEffect(() => {
    const sliderStyles = `
      .slick-dots li.slick-active .slick-dot-custom {
        background-color: #374151 !important;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.textContent = sliderStyles;
    document.head.appendChild(styleSheet);
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  const actualSlidesToShow = Math.min(slidesToShow, trips.length || 1);

  const sliderSettings = {
    dots: true,
    infinite: trips.length > actualSlidesToShow,
    speed: 500,
    slidesToShow: actualSlidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(actualSlidesToShow, 3),
          infinite: trips.length > Math.min(actualSlidesToShow, 3),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(actualSlidesToShow, 2),
          infinite: trips.length > Math.min(actualSlidesToShow, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: trips.length > 1,
          arrows: false,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-40px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 slick-dot-custom transition-colors duration-200"></div>
    ),
  };

  if (!trips || trips.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No trips available for this category yet.
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-none px-6 pb-12">
      <Slider {...sliderSettings}>
        {trips.map((trip) => (
          <TripCard key={trip.slug} {...trip} />
        ))}
      </Slider>
    </div>
  );
};

export default TripSlider;
