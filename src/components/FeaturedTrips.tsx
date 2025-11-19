// src/components/FeaturedTrips.tsx
import React, { useState, useEffect } from 'react';
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
  slug: string;
}

// Define the props that this component will accept
interface FeaturedTripsProps {
  title: React.ReactNode;
  trips: Trip[];
  viewMoreLink: string;
}

const FeaturedTrips: React.FC<FeaturedTripsProps> = ({ title, trips, viewMoreLink }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const mobileSettings = {
    dots: false,
    infinite: trips.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const desktopSettings = {
    dots: false,
    infinite: trips.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const sliderSettings = isMobile ? mobileSettings : desktopSettings;

  return (
    <section className="py-6 md:py-12 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-3xl font-bold">{title}</h2>
          <Link
            to={viewMoreLink}
            className="flex items-center text-blue-700 font-semibold hover:underline text-sm md:text-base"
          >
            View All <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
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