// src/components/TripCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '@/data/trips'; // Import the main Trip interface

// Update props to include slug and match the Trip interface
interface TripCardProps extends Omit<Trip, 'destination' | 'overview' | 'itinerary' | 'inclusions' | 'exclusions'> {
  // We already get slug, title, duration, price, originalPrice, discount, imageUrl
  // from spreading the Trip object. No extra props needed if TripSlider passes the whole object.
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
  // No need to create slug here anymore

  return (
    // Ensure the outer div allows the card to grow vertically if needed
    <div className="px-2 pb-4 h-full">
      {/* Ensure flex container takes full height */}
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative mb-8">
          {/* Link the image to the detail page */}
          <Link to={`/trip/${slug}`}>
            <img
              alt={title}
              src={imageUrl}
              className="w-full h-52 sm:h-64 object-cover" // Adjusted height
              loading="lazy"
            />
          </Link>
          {discount && (
            <p className="absolute top-4 left-0 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-r-full flex items-center gap-2 shadow"> {/* Added shadow */}
              <img alt="pricetag" src="/cloned_media/pricetag.webp" className="w-4 h-4" /> {/* Slightly smaller icon */}
              <span>{discount} Off</span>
            </p>
          )}
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap shadow"> {/* Added shadow */}
            {duration}
          </p>
        </div>
        {/* Use flex-grow to push button section down */}
        <div className="flex flex-col justify-between flex-grow p-4 mt-1">
          <article>
            {/* Link the title to the detail page */}
            <Link to={`/trip/${slug}`}>
              {/* Ensure title area has enough height, use line-clamp */}
              <p className="text-base sm:text-lg font-semibold text-gray-800 h-12 line-clamp-2 hover:text-blue-700">{title}</p>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              {originalPrice && (
                <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
              )}
               {/* Display price prominently */}
              <p className="text-lg font-bold text-blue-700">{price}</p>
            </div>
             <p className="text-xs text-gray-500">per person</p>
          </article>
          {/* Button section */}
          <div className="flex items-center gap-2 mt-4">
            {/* Link the "Trip Details" button */}
            <Link to={`/trip/${slug}`} className="flex-1 text-center bg-blue-100 text-blue-800 font-semibold py-2 px-3 rounded-lg text-sm whitespace-nowrap hover:bg-blue-200 transition-colors">
              Trip Details
            </Link>
            {/* You might want Send Query to open a modal or link to contact page with prefill */}
            <button
               onClick={() => alert(`Query for: ${title}`)} // Placeholder action
              className="flex-1 text-center bg-[#0B3A55] text-white font-semibold py-2 px-3 rounded-lg text-sm whitespace-nowrap hover:bg-opacity-90 transition-colors">
              Send Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;