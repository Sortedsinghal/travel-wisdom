// src/components/TripCard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '@/data/trips'; // Import the main Trip interface
import { QueryForm } from './QueryForm';


// Update props to include slug and match the Trip interface
interface TripCardProps {
  slug: string;
  title: string;
  duration: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  imageUrl: string;
}

// Remove the createTripSlug function - we get slug directly from data

const TripCard: React.FC<TripCardProps> = ({
  slug, // Receive the slug prop
  imageUrl,
  duration,
  title,
  price,
  originalPrice,
  discount
}) => {
  const [showQueryForm, setShowQueryForm] = useState(false);

  return (
    // Ensure the outer div allows the card to grow vertically if needed
    <div className="px-1 md:px-2 pb-2 md:pb-4 h-full">
      {/* Ensure flex container takes full height */}
      <div className="flex flex-col h-full bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative mb-4 md:mb-8">
          {/* Link the image to the detail page */}
          <Link to={`/trip/${slug}`}>
            <img
              alt={title}
              src={imageUrl}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              decoding="async"
            />
          </Link>
          {discount && (
            <p className="absolute top-2 md:top-4 left-0 bg-red-600 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-r-full flex items-center gap-1 md:gap-2 shadow">
              <img alt="pricetag" src="/cloned_media/pricetag.webp" className="w-3 h-3 md:w-4 md:h-4" />
              <span>{discount} Off</span>
            </p>
          )}
          <p className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-medium px-2 md:px-3 py-1 rounded-lg whitespace-nowrap shadow">
            {duration}
          </p>
        </div>
        {/* Use flex-grow to push button section down */}
        <div className="flex flex-col justify-between flex-grow p-2 md:p-4 mt-1">
          <article>
            {/* Link the title to the detail page */}
            <Link to={`/trip/${slug}`}>
              {/* Ensure title area has enough height, use line-clamp */}
              <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 min-h-[2.5rem] md:min-h-[3rem] line-clamp-2 leading-relaxed hover:text-blue-700">{title}</p>
            </Link>
            <div className="flex items-center gap-1 md:gap-2 mt-1">
              {originalPrice && (
                <p className="text-xs md:text-sm text-gray-500 line-through">{originalPrice}</p>
              )}
               {/* Display price prominently */}
              <p className="text-sm md:text-lg font-bold text-blue-700">{price}</p>
            </div>
             <p className="text-xs text-gray-500">per person</p>
          </article>
          {/* Button section */}
          <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-4">
            {/* Link the "Trip Details" button */}
            <Link to={`/trip/${slug}`} className="flex-1 text-center bg-blue-100 text-blue-800 font-semibold py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm whitespace-nowrap hover:bg-blue-200 transition-colors">
              Details
            </Link>
            <button
               onClick={() => setShowQueryForm(true)}
              className="flex-1 text-center bg-[#0B3A55] text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm whitespace-nowrap hover:bg-opacity-90 transition-colors">
              Query
            </button>
          </div>
        </div>
      </div>
      <QueryForm 
        isOpen={showQueryForm} 
        onClose={() => setShowQueryForm(false)} 
        tripName={title}
      />
    </div>
  );
};

export default TripCard;