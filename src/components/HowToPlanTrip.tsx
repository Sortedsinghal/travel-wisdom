import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Choose Your Travel Destination',
    description: 'From a buffet of trip itineraries handcrafted by our travel experts.',
    imageUrl: '/location-pin.webp', 
  },
  {
    title: 'Ask Queries & Book Your Trip!',
    description: 'Connect with us over a call, solve your queries and book your trip.',
    imageUrl: '/msg-query.webp', 
  },
  {
    title: 'Ohai, Your Trip Day Has Arrived',
    description: 'Keep your adventure spirit high and pack your bags for a lifetime experience.',
    imageUrl: '/traveling-van.webp', 
  },
  {
    title: 'Share #InstaPerfect Memories...',
    description: 'Flaunt your memorable travel memories over social media with your dear ones.',
    imageUrl: '/announcement.webp', 
  },
];

// Define the custom dark blue color for consistency
const DARK_BLUE = '#0B3A55'; 

const HowToPlanTrip = () => {
  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
    >
      <ChevronLeft className="w-5 h-5 text-[#0B3A55]" />
    </button>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
    >
      <ChevronRight className="w-5 h-5 text-[#0B3A55]" />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const renderCard = (step: typeof steps[0], index: number) => (
    <div key={index} className="px-4">
      <div 
        className="relative p-0 h-96 rounded-xl flex items-start justify-start"
        style={{ 
          boxShadow: `0.5rem 0.5rem 0 ${DARK_BLUE}`, 
          border: `2px solid ${DARK_BLUE}`, 
        }}
      >
      {/* Background Texture (yellow-paper-bg) */}
      <div 
        className="absolute inset-0 rounded-lg overflow-hidden z-0"
        style={{ 
          backgroundImage: 'url("/yellow-paper-bg.webp")',
          backgroundSize: 'cover',
          backgroundColor: '#FFD700',
        }}
      ></div>

      {/* Content Container (Padding and layout) */}
      <div className="relative p-6 z-10 w-full h-full flex flex-col items-start justify-start">
        
        {/* Text Block */}
        <div className="text-left mb-4" style={{ color: DARK_BLUE }}> 
          <h3 className="text-xl font-extrabold mb-1 leading-snug">
            {step.title}
          </h3>
          <p className="text-sm font-medium leading-normal" style={{ color: '#333333' }}>
            {step.description}
          </p>
        </div>

        {/* Icon section - Positioned at the bottom left */}
        <div className="absolute bottom-6 left-6 w-24 h-24 sm:w-28 sm:h-28">
           <img 
              src={step.imageUrl} 
              alt={step.title} 
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
           />
        </div>

        {/* Corner Pattern (box-cornering.webp) - Positioned at the bottom right */}
        <img 
            src="/box-cornering.webp" 
            alt="Decorative pattern" 
            className="absolute bottom-0 right-0 w-20 h-20 opacity-90 object-cover"
            loading="lazy"
            decoding="async"
        />
      </div>
    </div>
    </div>
  );

  return (
    <section className="py-8 md:py-16 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-20 px-4">
        How To Plan Your Stress Free Trip <span role="img" aria-label="sunglasses">😎</span>
      </h2>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Mobile Slider */}
        <div className="md:hidden relative px-8">
          <Slider {...sliderSettings}>
            {steps.map((step, index) => renderCard(step, index))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          {/* --- Segmented Wavy Line Implementation --- */}
          <div className="absolute top-[-40px] left-0 right-0 z-30 flex justify-between">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`h-10`} style={{ 
                  width: `calc(25% + 1.5rem)`, 
                  transform: 'translateX(calc(12.5% + 0.75rem))',
                  marginLeft: i > 0 ? '-1.5rem' : '0',
              }}>
                  <img 
                      src="/line.webp" 
                      alt="Decorative connecting line" 
                      className="w-full h-full object-contain object-bottom"
                      loading="lazy"
                      decoding="async"
                  />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => renderCard(step, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlanTrip;