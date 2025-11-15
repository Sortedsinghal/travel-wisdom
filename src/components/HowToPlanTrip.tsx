import React from 'react';

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
  return (
    <section className="py-8 md:py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 md:mb-12 lg:mb-20 px-4">
        How To Plan Your Stress Free Trip <span role="img" aria-label="sunglasses">😎</span>
      </h2>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* --- Segmented Wavy Line Implementation - Hidden on mobile --- */}
        <div className="hidden md:block absolute top-[-40px] left-0 right-0 z-30">
          <div className="flex justify-between">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            // Main Card Container with Shadow Effect
            <div 
              key={index} 
              className="relative p-0 h-80 md:h-96 rounded-xl flex items-start justify-start mx-2 sm:mx-0"
              style={{ 
                boxShadow: `0.3rem 0.3rem 0 ${DARK_BLUE}`, 
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
              <div className="relative p-4 md:p-6 z-10 w-full h-full flex flex-col items-start justify-start">
                
                {/* Text Block */}
                <div className="text-left mb-3 md:mb-4" style={{ color: DARK_BLUE }}> 
                  <h3 className="text-lg md:text-xl font-extrabold mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium leading-normal" style={{ color: '#333333' }}>
                    {step.description}
                  </p>
                </div>

                {/* Icon section - Positioned at the bottom left */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
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
                    className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 opacity-90 object-cover"
                    loading="lazy"
                    decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlanTrip;