import React from "react";

const reviews = [
  // From image_0.png
  {
    name: "kajal kumari",
    text: "Had an amazing time with Travel Wisdom. Everything was simple, smooth, and fun. The coordinators kept the group vibe lively, sightseeing was well managed, and food was served on time. Overall, a stress-free trip full of good memories.",
    rating: 5,
  },
  {
    name: "Laxman Kumar Ray",
    text: "I had a wonderful experience with Travel Wisdom. The entire trip was very well-planned and organized. Sightseeing and activities were smooth, without any unnecessary delays, and the coordinators were always supportive and approachable.",
    rating: 5,
  },
  {
    name: "Manan Kalra",
    text: "Travel Wisdom made our journey simple and stress-free. The coordinators kept everything on track, sightseeing was well balanced, and the meals were hygienic. It was a well-executed trip with lots of good memories.",
    rating: 5,
  },
  // From image_1.png
  {
    name: "Abhishek Meena",
    text: "I had a smooth experience with Travel Wisdom Agency. The team was responsive, transparent, and guided me well with bookings and documentation. Pricing was fair, and they kept me updated at every stage. Would definitely recommend them to others for stress-free travel planning.",
    rating: 5,
  },
  {
    name: "Ajay Kumar",
    text: "I recently visited Udaipur with Travel Wisdom and had an amazing experience! The trip was well-organized, with comfortable travel, great accommodation, and a perfectly planned itinerary. We explored all the major spots like City Palace, ...",
    rating: 5,
  },
  {
    name: "Abhishek Goyal",
    text: "exceeded my expectations – smooth planning, fun coordinators, great food, and relaxed sightseeing. Such a chill, enjoyable trip—I’d happily go again",
    rating: 5,
  },
  // From image_2.png
  {
    name: "Naresh Jangid",
    text: "Had the best time with Travel Wisdom in Nainital, Bhimtal, Naukuchiyatal & Sattal ✨ Everything was well managed, the team was super helpful, food was great, and the vibes were just amazing! Can’t wait for the next trip 💛",
    rating: 5,
  },
  {
    name: "ROHIT KUMAR",
    text: "Amazing trip, recently explored the nature's beauty. A well balanced trip, advise everyone to check out with these fellows.",
    rating: 5,
  },
  {
    name: "Suraj Mishra",
    text: "It was a wonderful experience and services were smooth",
    rating: 4,
  },
  // From image_3.png
  {
    name: "Bhawna Mittal",
    text: "Travel Wisdom made our Mukteshwar trip absolutely amazing! The coordinators were very friendly and kept the group engaged throughout. Sightseeing and activities were planned perfectly, giving us enough time to explore and enjoy without ...",
    rating: 5,
  },
  {
    name: "Mitika",
    text: "Our trip with Travel Wisdom covering Nainital, Bhimtal, Naukuchiyatal, and Sattal was truly memorable. The coordinators were very supportive and kept everything well organized. Sightseeing and activities were planned perfectly, giving us ...",
    rating: 5,
  },
  {
    name: "Mohammad Nadeem Idrisi",
    text: "Had a fun and comfortable trip with Travel Wisdom. The planning was neat, activities were engaging, and meals were on time. The coordinators were supportive and friendly which made the journey even better",
    rating: 5,
  },
  // From image_4.png
  {
    name: "Kanchan Yadav",
    text: "Our trip with Travel Wisdom was one of the best travel experiences I’ve had. Everything was so well coordinated – from the journey to the hotel stay. The sightseeing and activities were managed beautifully, with enough time to enjoy every ...",
    rating: 5,
  },
  {
    name: "Archana Malik",
    text: "Travel Wisdom handled the trip very well. Proper planning, smooth execution, and supportive staff made everything comfortable. The sightseeing and activities were enjoyable, and meals were served on time. A hassle-free and enjoyable trip.",
    rating: 5,
  },
  {
    name: "Kapil Dhakary",
    text: "Really impressed with how Travel Wisdom arranged the trip. Proper time for sightseeing, comfortable travel, and decent meals. The coordinators were helpful throughout. A very satisfying experience.",
    rating: 5,
  },
];

const ReviewCard = ({ review }) => (
  <div className="w-[350px] h-full flex flex-col bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 mx-4 transition-transform hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg mr-3 uppercase shrink-0">
        {review.name.charAt(0)}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={i < review.rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.77.77.326 1.163l-4.304 3.86a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.304-3.86a.562.562 0 01.326-1.163l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-5 flex-grow">
      "{review.text}"
    </p>
    {review.text.length > 180 && (
      <span className="text-blue-500 text-xs mt-2 block cursor-pointer hover:underline">
        Read more
      </span>
    )}
  </div>
);

const ReviewsSlider = () => {
  const midPoint = Math.ceil(reviews.length / 2);
  const row1Reviews = reviews.slice(0, midPoint);
  const row2Reviews = reviews.slice(midPoint);

  // Slower animation duration for readability
  const animationDuration = "60s";

  const renderReviewRow = (reviewSet, animationClass) => (
    <div
      className={`flex w-max ${animationClass} hover:pause`}
      style={{ animationDuration }}
    >
      {reviewSet.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      {/* Duplicate reviews for seamless loop */}
      {reviewSet.map((review, index) => (
        <ReviewCard key={`dup-${index}`} review={review} />
      ))}
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden font-inter">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          What Our Travelers Say
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover why our customers love their journeys with us. Read their
          experiences and start planning your own adventure.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {/* Row 1: Slide Left */}
        <div className="overflow-hidden mask-gradient py-4">
          {renderReviewRow(row1Reviews, "animate-slide-loop")}
        </div>

        {/* Row 2: Slide Right */}
        <div className="overflow-hidden mask-gradient py-4">
          {renderReviewRow(row2Reviews, "animate-slide-loop-reverse")}
        </div>
      </div>
      <style>{`
        .w-max {
            width: max-content;
        }

        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        @keyframes slide-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-slide-loop {
          animation: slide-loop ${animationDuration} linear infinite;
        }
        
        .animate-slide-loop-reverse {
          animation: slide-loop ${animationDuration} linear infinite reverse;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSlider;