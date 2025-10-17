// src/components/FeaturedTrips.tsx
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';
import { ArrowRight } from 'lucide-react';

// Define the shape of a single trip object
interface Trip {
  imageUrl: string;
  duration: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

// Define the props that this component will accept
interface FeaturedTripsProps {
  title: React.ReactNode;
  trips: Trip[];
  viewMoreLink: string;
}

const FeaturedTrips: React.FC<FeaturedTripsProps> = ({ title, trips, viewMoreLink }) => {
  const sliderSettings = {
    dots: false,
    infinite: trips.length > 3,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link
            to={viewMoreLink}
            className="flex items-center text-blue-700 font-semibold hover:underline"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Slider {...sliderSettings}>
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedTrips;