// src/components/TripCard.tsx
import React from 'react';

interface TripCardProps {
  imageUrl: string;
  duration: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

const TripCard: React.FC<TripCardProps> = ({ imageUrl, duration, title, price, originalPrice, discount }) => {
  return (
    <div className="px-2 pb-4 h-full">
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-2">
        <div className="relative mb-8">
          <a href="#">
            <img 
              alt={title} 
              src={imageUrl} 
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </a>
          {discount && (
            <p className="absolute top-4 left-0 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-r-full flex items-center gap-2">
              <img alt="pricetag" src="/cloned_media/pricetag.webp" className="w-5 h-5" />
              <span>Discount: {discount} Off</span>
            </p>
          )}
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap">
            {duration}
          </p>
        </div>
        <div className="flex flex-col justify-between flex-grow p-4 mt-2">
          <article>
            <a href="#">
              <p className="text-lg font-semibold text-black h-14 line-clamp-2">{title}</p>
            </a>
            <div className="flex items-center gap-2 mt-1">
              {originalPrice && (
                <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
              )}
              <p className="text-sm font-medium text-black">{price} per person</p>
            </div>
          </article>
          <div className="flex items-center gap-2 mt-4">
            <a href="#" className="flex-1 text-center bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg text-sm whitespace-nowrap hover:bg-blue-200">
              Trip Details
            </a>
            <button className="flex-1 text-center bg-[#0B3A55] text-white font-semibold py-2 px-4 rounded-lg text-sm whitespace-nowrap hover:bg-blue-900">
              Send Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;