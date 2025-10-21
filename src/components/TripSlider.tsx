import React from 'react';
import Slider from 'react-slick';
import TripCard from './TripCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Trip } from '@/data/trips'; // Import the CORRECT Trip interface from your central data file

// Remove the local Trip interface definition, use the imported one

interface TripSliderProps {
  trips: Trip[]; // Use the imported Trip interface
  slidesToShow?: number;
}

// NextArrow and PrevArrow remain the same
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  // Add some basic styling or ensure your global CSS handles slick-arrow-custom
  return (
    <div
      className={`${className} slick-arrow-custom right-[-25px] before:content-none z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70`} // Example styling
      onClick={onClick}
      style={{ ...style, display: 'flex' }} // Ensure display is flex for centering icon
    >
      <ChevronRight color="white" size={20} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow-custom left-[-25px] before:content-none z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70`} // Example styling
      onClick={onClick}
      style={{ ...style, display: 'flex' }} // Ensure display is flex for centering icon
    >
      <ChevronLeft color="white" size={20} />
    </div>
  );
};


const TripSlider: React.FC<TripSliderProps> = ({ trips, slidesToShow = 4 }) => {
  // Handle case where slidesToShow might be larger than the number of trips
  const actualSlidesToShow = Math.min(slidesToShow, trips.length || 1);

  const sliderSettings = {
    dots: true,
    infinite: trips.length > actualSlidesToShow, // Only infinite if enough slides
    speed: 500,
    slidesToShow: actualSlidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: Math.min(actualSlidesToShow, 3),
           infinite: trips.length > Math.min(actualSlidesToShow, 3),
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: Math.min(actualSlidesToShow, 2),
           infinite: trips.length > Math.min(actualSlidesToShow, 2),
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          infinite: trips.length > 1,
          arrows: false, // Keep arrows false for mobile maybe?
        },
      },
       {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          infinite: trips.length > 1,
          arrows: false,
        },
      },
    ],
     appendDots: (dots: React.ReactNode) => ( // Custom dots container
      <div style={{ bottom: "-25px" }}> {/* Adjust position */}
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => ( // Custom dot style
      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 slick-dot-custom"></div>
    )
  };

  // Handle case with no trips gracefully
  if (!trips || trips.length === 0) {
    return <div className="text-center text-gray-500 py-8">No trips available for this category yet.</div>;
  }

  return (
    // Add some margin if arrows are outside, pb-10 for dots
    <div className="relative mx-auto max-w-none px-6 pb-12"> {/* Added horizontal padding */}
      <Slider {...sliderSettings}>
        {trips.map((trip) => (
          // Pass the entire trip object, which now includes the 'slug'
          // TripCard expects 'slug' along with other props
          <TripCard key={trip.slug} {...trip} />
        ))}
      </Slider>
    </div>
  );
};

export default TripSlider;