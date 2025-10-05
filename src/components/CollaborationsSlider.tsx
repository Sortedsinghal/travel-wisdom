import React from "react";

const logos = [
  "/public/collabs/decathlon.webp",
  "/public/collabs/delhi-tourism.webp",
  "/public/collabs/deskers.webp",
  "/public/collabs/garage-society.webp",
  "/public/collabs/go-stops-footers.webp",
  "/public/collabs/gujrat-tourism.webp",
  "/public/collabs/hostler.webp",
  "/public/collabs/incredible-india.webp",
  "/public/collabs/j&k-tourism.webp",
  "/public/collabs/manipur-tourism.webp",
  "/public/collabs/mp-tourism.webp",
  "/public/collabs/msme.webp",
  "/public/collabs/nepal-tourism-board.webp",
  "/public/collabs/nidhi-up.webp",
  "/public/collabs/whoopers-hostel.webp",
  "/public/collabs/start-up-india.webp"
];

const CollaborationsSlider = () => {
    // Split logos into two sets for two rows
    const row1Logos = logos.slice(0, 8);
    const row2Logos = logos.slice(8, 16);

  // Set animation duration for a smooth, slow scroll
  const animationDuration = '40s';

  // Helper function to render a row (original content + duplicated content for seamless loop)
  const renderLogoRow = (logoSet, animationClass) => (
    // w-max ensures the combined content is wide enough to prevent wrapping
    <div className={`flex w-max ${animationClass} py-4`} style={{ animationDuration }}>
      {/* Original logos */}
      {logoSet.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Collaboration logo ${index + 1}`}
          // Increased horizontal margin from mx-4 to mx-8 for more space between logos
          className="h-12 sm:h-16 object-contain mx-8 transition-transform hover:scale-105"
        />
      ))}
      {/* Duplicate logos for seamless loop */}
      {logoSet.map((logo, index) => (
        <img
          key={`dup-${index}`}
          src={logo}
          alt={`Collaboration logo duplicate ${index + 1}`}
          // Increased horizontal margin from mx-4 to mx-8
          className="h-12 sm:h-16 object-contain mx-8 transition-transform hover:scale-105"
        />
      ))}
    </div>
  );

  return (
    <section className="py-12 sm:py-20 bg-white-50 dark:bg-white overflow-hidden font-inter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Proudly Collaborated & Recognized <span role="img" aria-label="thumbs up">👍</span>
        </h2>
        {/* Slider Container for both rows. Increased vertical gap from gap-4 to gap-8. */}
        <div className="flex flex-col gap-8">

          {/* Row 1: Slide Left (Standard animation) */}
          <div className="overflow-hidden">
            {renderLogoRow(row1Logos, 'animate-slide-loop')}
          </div>

          {/* Row 2: Slide Right (Reversed animation using the same keyframes) */}
          <div className="overflow-hidden">
            {renderLogoRow(row2Logos, 'animate-slide-loop-reverse')}
          </div>

        </div>
      </div>
      <style>{`
        /* This is crucial: ensures the content stays on a single line */
        .w-max {
            width: max-content;
        }

        /* Define the core animation: Slides Left (0% to -50%) */
        @keyframes slide-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Animation class for normal left slide */
        .animate-slide-loop {
          animation: slide-loop ${animationDuration} linear infinite;
        }
        
        /* Animation class for right slide (uses 'reverse' direction) */
        .animate-slide-loop-reverse {
          animation: slide-loop ${animationDuration} linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default CollaborationsSlider;
