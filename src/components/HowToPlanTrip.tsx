import React from 'react';

const steps = [
  {
    title: 'Choose Your Travel Destination',
    description: 'From a buffet of trip itineraries handcrafted by our travel experts.',
    imageUrl: '/public/image4.png',
  },
  {
    title: 'Ask Queries & Book Your Trip!',
    description: 'Connect with us over a call, solve your queries and book your trip.',
    imageUrl: '/public/image3.png',
  },
  {
    title: 'Ohai, Your Trip Day Has Arrived',
    description: 'Keep your adventure spirit high and pack your bags for a lifetime experience.',
    imageUrl: '/public/image2.png',
  },
  {
    title: 'Share #InstaPerfect Memories...',
    description: 'Flaunt your memorable travel memories over social media with your dear ones.',
    imageUrl: '/public/image1.png',
  },
];

const HowToPlanTrip = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12">How To Plan Your Stress Free Trip <span role="img" aria-label="sunglasses">😎</span></h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 max-w-8xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative flex justify-center items-center rounded-lg shadow-lg overflow-hidden" style={{height: '300px', width: '110%'}}>
            <img src={step.imageUrl} alt={step.title} className="absolute inset-0 w-full h-full object-cover rounded-lg z-50" />
            <div className="absolute inset-0 bg-yellow-400 opacity-0 rounded-lg z-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToPlanTrip;
