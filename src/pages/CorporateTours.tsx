import React, { useState, useEffect, useCallback, useMemo } from 'react';
// NOTE: Assuming these imports resolve correctly in your actual project structure.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Clock, Shield, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import CollaborationsSlider from '@/components/CollaborationsSlider';


// --- Data for Corporate Clients Carousel (Existing) ---
const tripData = [
  { location: "Ranthambore", people: "hosted 90 people", company: "Shyam Construction", logoPath: "/src/assets/Shyam_Construction_logo.jpg", imagePath: "/src/assets/Shyam_Construction.jpg", key: 'sc' },
  { location: "Jim Corbett", people: "hosted 35 people", company: "EY - Ernst & Young", logoPath: "/src/assets/ey_logo.jpg", imagePath: "/src/assets/EY_corporate.jpeg", key: 'ey' },
  { location: "Jim Corbett", people: "hosted 60+ people", company: "Airtel Payments Bank", logoPath: "/src/assets/airtel-payments-bank-logo.webp", imagePath: "/src/assets/airtel-payments-bank.webp", key: 'apb' },
  { location: "Dalhousie", people: "hosted 120+ people", company: "SNVA Finance", logoPath: "/src/assets/snva_logo_corporate.jpg", imagePath: "/src/assets/snva_finance.jpg", key: 'snva' },
  { location: "Jim Corbett", people: "hosted 60+ people", company: "Sigfig", logoPath: "/src/assets/sigfig-logo.jpg", imagePath: "/src/assets/sigfig.jpg", key: 'sigfig' },
  { location: "Jibhi Tirthan", people: "hosted 45+ people", company: "New Vision Digital", logoPath: "/src/assets/new_vision_digital_logo.jpg", imagePath: "/src/assets/new_vision_digital.jpg", key: 'nvd' },
  { location: "Jim Corbett", people: "hosted 60+ people", company: "Cache Digitech", logoPath: "/src/assets/cache_digitech_logo.jpg", imagePath: "/src/assets/cache_digitech.jpg", key: 'cd' },
];
const MAX_VISIBLE_CLIENT_CARDS = 3;

// The TripCarousel component (Corporate Clients) - unchanged
const TripCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? tripData.length - MAX_VISIBLE_CLIENT_CARDS : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex + MAX_VISIBLE_CLIENT_CARDS > tripData.length ? 0 : newIndex;
    });
  };

  const visibleCards = tripData.slice(startIndex, startIndex + MAX_VISIBLE_CLIENT_CARDS);
  
  const TripCard = ({ location, people, company, imagePath, logoPath, key }) => (
    <div key={key} className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] min-w-[400px]">
      <div className="relative">
        <div 
          className="w-full h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imagePath})` }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-start justify-center p-4">
            <h3 className="font-bold text-white text-xl text-center mb-2 drop-shadow-lg">
              {location} | {people}
            </h3>
          </div>
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 p-1 bg-white rounded-full shadow-lg">
            <img 
              src={logoPath} 
              alt={`${company} logo`} 
              className="w-16 h-16 rounded-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="p-4 pt-8 text-center">
        <span className="text- bold font-medium text-gray-800">{company}</span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden p-4">
      <button 
        onClick={handlePrev} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 p-3 ml-1 bg-white rounded-full shadow-xl opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Previous trip cards"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <div className="flex justify-start gap-6 transition-transform duration-500 ease-in-out">
        {visibleCards.map((trip) => (
          <TripCard key={trip.key} {...trip} />
        ))}
      </div>
      <button 
        onClick={handleNext} 
        className="absolute right-9 top-1/2 transform -translate-y-1/2 z-20 p-3 mr-2 bg-white rounded-full shadow-xl opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Next trip cards"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

// --- Data for Domestic Corporate Plans Carousel ---
const domesticPlansData = [
  {
    location: "Rishikesh",
    tag: "River Rafting",
    image: "/src/assets/rishikesh.png", // Placeholder
    tagColor: 'bg-teal-500', 
    key: 'rishi'
  },
  {
    location: "Jibhi",
    tag: "Offbeat Escape",
    image: "/src/assets/jibhi.png", // Placeholder
    tagColor: 'bg-yellow-500', 
    key: 'jibhi'
  },
  {
    location: "Manali",
    tag: "Weekend Escape",
    image: "/src/assets/manali.png", // Placeholder
    tagColor: 'bg-blue-500', 
    key: 'manali'
  },
  {
    location: "Kanatal",
    tag: "Offbeat Escape",
    image: "/src/assets/kanatal.png", // Placeholder
    tagColor: 'bg-green-700', 
    key: 'kanatal'
  },
  {
    location: "Jim Corbett",
    tag: "Jungle Safari",
    image: "/src/assets/jimcorbett.png", // Placeholder
    tagColor: 'bg-orange-500', 
    key: 'corbett'
  },
];
const VISIBLE_PLANS = 4;
const CARD_GAP = 24; // Tailwind's gap-6 is 1.5rem or 24px

// --- Domestic Plans Carousel Component (New) ---
const DomesticPlansCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = domesticPlansData.length;
  const slideDuration = 3500; // Auto-slide every 3.5 seconds

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards) ? 0 : prevIndex + 1);
  }, [totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0) ? totalCards - 1 : prevIndex - 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= totalCards ? 0 : nextIndex;
        });
    }, slideDuration);
    return () => clearInterval(interval);
  }, [slideDuration, totalCards]);


  // Prepare the data array for looping (duplicate the first few cards)
  const loopData = useMemo(() => {
    return [...domesticPlansData, ...domesticPlansData.slice(0, VISIBLE_PLANS)];
  }, []);

  // Calculate the offset to translate the carousel track
  const cardWidthPercentage = 100 / VISIBLE_PLANS;
  const translateXValue = `calc(${-currentIndex * cardWidthPercentage}% - ${currentIndex * CARD_GAP}px)`;

  const PlanCard = ({ location, tag, image, tagColor, key }) => (
    <div 
      key={key} 
      className="bg-white rounded-2xl overflow-hidden shadow-xl flex-shrink-0" 
      style={{ width: `calc(100% / ${VISIBLE_PLANS} - ${((VISIBLE_PLANS - 1) * CARD_GAP) / VISIBLE_PLANS}px)` }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={location} 
          className="w-full h-60 object-cover" 
        />
        <div className="absolute top-4 left-4">
          <span className={`${tagColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}>
            {tag}
          </span>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{location}</h3>
        <button className="bg-[#0B3A55] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full font-medium shadow-md">
          Send Query
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow ml-2"
        aria-label="Previous destination"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={handleNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow mr-2"
        aria-label="Next destination"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Cards Container - Uses translate X for the slide effect */}
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ 
          transform: `translateX(${translateXValue})`,
          gap: `${CARD_GAP}px`
        }}
      >
        {loopData.map((plan, index) => (
          <PlanCard key={index} {...plan} /> 
        ))}
      </div>
    </div>
  );
};

// --- Data for International Corporate Plans Carousel (New) ---
const internationalPlansData = [
    {
        location: "Dubai",
        tag: "Luxury Experience",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop", 
        tagColor: 'bg-red-600', 
        key: 'dubai'
    },
    {
        location: "Singapore",
        tag: "Business Hub",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop", 
        tagColor: 'bg-green-600', 
        key: 'singapore'
    },
    {
        location: "Thailand",
        tag: "Beach Retreat",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", 
        tagColor: 'bg-orange-600', 
        key: 'thailand'
    },
    {
        location: "Bali",
        tag: "Tropical Paradise",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop", 
        tagColor: 'bg-blue-600', 
        key: 'bali'
    },
    {
        location: "Maldives",
        tag: "Luxury Resort",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", 
        tagColor: 'bg-pink-600', 
        key: 'maldives'
    },
];

// --- International Plans Carousel Component (New) ---
const InternationalPlansCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = internationalPlansData.length;
    const slideDuration = 3500; 
  
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === totalCards) ? 0 : prevIndex + 1);
    }, [totalCards]);
  
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0) ? totalCards - 1 : prevIndex - 1);
    };
  
    // Auto-slide effect
    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
              const nextIndex = prevIndex + 1;
              return nextIndex >= totalCards ? 0 : nextIndex;
          });
      }, slideDuration);
      return () => clearInterval(interval);
    }, [slideDuration, totalCards]);
  
  
    // Prepare the data array for looping
    const loopData = useMemo(() => {
      return [...internationalPlansData, ...internationalPlansData.slice(0, VISIBLE_PLANS)];
    }, []);
  
    // Calculate the offset to translate the carousel track
    const cardWidthPercentage = 100 / VISIBLE_PLANS;
    const translateXValue = `calc(${-currentIndex * cardWidthPercentage}% - ${currentIndex * CARD_GAP}px)`;
  
    const PlanCard = ({ location, tag, image, tagColor, key }) => (
      <div 
        key={key} 
        className="bg-white rounded-2xl overflow-hidden shadow-xl flex-shrink-0" 
        style={{ width: `calc(100% / ${VISIBLE_PLANS} - ${((VISIBLE_PLANS - 1) * CARD_GAP) / VISIBLE_PLANS}px)` }}
      >
        <div className="relative">
          <img 
            src={image} 
            alt={location} 
            className="w-full h-60 object-cover" 
          />
          <div className="absolute top-4 left-4">
            <span className={`${tagColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}>
              {tag}
            </span>
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">{location}</h3>
          <button className="bg-[#0B3A55] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full font-medium shadow-md">
            Send Query
          </button>
        </div>
      </div>
    );
  
    return (
      <div className="relative w-full overflow-hidden">
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow ml-2"
          aria-label="Previous destination"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={handleNext} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow mr-2"
          aria-label="Next destination"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Cards Container - Uses translate X for the slide effect */}
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ 
            transform: `translateX(${translateXValue})`,
            gap: `${CARD_GAP}px`
          }}
        >
          {loopData.map((plan, index) => (
            <PlanCard key={index} {...plan} /> 
          ))}
        </div>
      </div>
    );
  };

// --- GALLERY SECTION (Existing) ---
const GallerySection = () => {
    // Data defining the complex 4-column CSS Grid structure
    // NOTE: Replace the src URLs with your actual image file paths!
    const galleryImages = [
        // 1. Leftmost Portrait (1 col, 2 rows)
        { id: 1, src: "/src/assets/gallery1.webp", alt: "Team Portrait on Grass", 
          style: { gridArea: '1 / 1 / 3 / 2' } }, 
        
        // 2. Middle-Left Top (Group by Bus) - Col 2, Row 1
        { id: 2, src: "/src/assets/gallery2.webp", alt: "Large Group Posing by Bus", 
          style: { gridArea: '1 / 2 / 2 / 3' } },
        
        // 3. Middle-Left Bottom (Meeting) - Col 2, Row 2
        { id: 3, src: "/src/assets/gallery3.webp", alt: "Meeting Session Indoors", 
          style: { gridArea: '2 / 2 / 3 / 3' } },
        
        // 4. Middle-Right Top (Group by Wooden House) - Col 3, Row 1
        { id: 4, src: "/src/assets/gallery4.webp", alt: "Group by Wooden House", 
          style: { gridArea: '1 / 3 / 2 / 4' } },
        
        // 5. Middle-Right Bottom (Small Group) - Col 3, Row 2
        { id: 5, src: "/src/assets/gallery5.webp", alt: "Small Group Photo", 
          style: { gridArea: '2 / 3 / 3 / 4' } },

        // 6. Rightmost Group (Group by Lodge) - Col 4, Rows 1-2
        { id: 6, src: "/src/assets/gallery6.webp", alt: "Right Main Group Photo", 
          style: { gridArea: '1 / 4 / 3 / 5' } },
    ];

    return (
      <div id="well-memories-gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Well Memories : Faces & Places 📸
            </h2>
          </div>
  
          <div 
            className="max-w-7xl mx-auto grid gap-4 p-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, minmax(250px, 1fr))', 
            }}
          >
            {galleryImages.map((item) => (
              <div 
                key={item.id}
                className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.01] cursor-pointer" 
                style={item.style}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


// --- DETAILED CONTACT FORM COMPONENT (NEW) ---
const DetailedContactForm = () => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xl w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Have Doubts? Talk To Our Travel Experts!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                we would <span className="text-red-600">❤️</span> to craft a trip just for you.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <input 
                    type="number" 
                    placeholder="No. of Travellers" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <select
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] appearance-none cursor-pointer col-span-1"
                    defaultValue="Month of Travel"
                >
                    <option disabled>Month of Travel</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    {/* Add remaining months */}
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Destination Suggestion" 
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] col-span-1"
                />
                <textarea 
                    placeholder="Remarks" 
                    rows="1"
                    className="p-3 border border-gray-300 rounded-lg focus:ring-[#0B3A55] focus:border-[#0B3A55] resize-none col-span-1"
                ></textarea>
                
                <button 
                    type="submit" 
                    className="w-full bg-[#0B3A55] text-white p-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors col-span-full mt-4"
                >
                    Request Callback
                </button>
            </form>
        </div>
    );
};

// --- QUERY CONTACT SECTION (NEWLY ADDED) ---
const QueryContactSection = () => {
    return (
        <div 
            className="relative w-full py-20 flex justify-center items-center overflow-hidden"
            style={{
                backgroundImage: "url('/src/assets/query-section2.jpg')", // Use the provided background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Optional: adds a nice parallax effect
                minHeight: '600px'
            }}
        >
            {/* Blue Overlay to match the design's color tint */}
            <div className="absolute inset-0 bg-[#0B3A55] opacity-70"></div>
            
            <div className="relative z-10 w-full flex justify-center px-4">
                <DetailedContactForm />
            </div>
        </div>
    );
}

// --- FAQ SECTION (NEW) ---
const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "I want to book a trip but how can I trust Go4Explore before paying?",
            answer: "Go4Explore is a registered travel company under the name Wander N Explore Pvt. Ltd. and a MSME registered organization. You can simply have a look about the same on the official MSME government website. We have been operational for more than 5 years and thus have a strong backend and ground team to provide a hassle-free and amazing travel experience. Our web presence is quite strong in terms of our website and social media platforms like Instagram & Facebook. Feel free to do a thorough research about our travel community and read reviews before booking your travel. Also, when you're proceeding ahead with the trip bookings, you're paying in the brand's current bank account and not in the savings account."
        },
        {
            id: 2,
            question: "Once I book a trip, how will I receive the confirmation of the payment?",
            answer: "Firstly, your payments are absolutely secure. Once we receive the payment, we send you a payment receipt/booking confirmation mail of the same within 24 hours of paying the amount. You need to share the screenshot of the payment with your respective sales team representative and he/she will further communicate with the finance department."
        },
        {
            id: 3,
            question: "What if the trip I booked gets cancelled? What is the refund policy?",
            answer: "In case of trip cancellation from our end, we provide full refund or alternative trip options. For customer cancellations, refund depends on the timing - cancellations made 30+ days before departure get 80% refund, 15-30 days get 50% refund, and less than 15 days get 25% refund."
        }
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Go4Explore Corporate Tours FAQs</h2>
                    <hr className="w-24 h-1 bg-gray-300 mx-auto" />
                </div>
                
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border border-gray-200 rounded-lg">
                            <button 
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                <svg 
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openFAQ === faq.id && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- CORPORATE PACKAGES SECTION (NEW) ---
const CorporatePackagesSection = () => {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-gray-100 p-6 rounded-lg max-w-8xl mx-auto text-left">
                    <h2 className="text-2xl font-bold mb-8">About Corporate Tours</h2>
                    <hr />
                    <div className="mb-6">
                        <p className="mb-4">
                            Our expertise at Travel Wisdom lies in organizing tailor-made corporate tour packages which are the most suitable to the firms concerned with the team's unforgettable and ideal trip. From luxurious corporate travel and business travel packages to customized business trips, we provide you with the answer that you are looking for the demand of your company.
                        </p>
                        
                        {showFullText ? (
                            <>
                                <p className="mb-4">
                                    The different packages that we have can be described as corporate retreat packages, MICE travel - Meetings, Incentives, Conferences, and Exhibitions, as well as team-building tours and <a href="#" className="text-blue-600 hover:underline">corporate adventure trips</a> depicting a stronger relationship between employees. We also specialize in incentive tours to boost employee engagement as well as executive retreats to develop the leadership skills of the exceptional employees.
                                </p>
                                
                                <p className="mb-4">
                                    No matter whether you are planning a company offsite, annual corporate trip, or corporate group travel, we offer the best solution to make your event unforgettable. Additionally, we have <a href="#" className="text-blue-600 hover:underline">corporate holiday packages</a> for those who want to combine work with pleasure, such as team outing options in India and other international countries, business holiday travel, and company retreats.
                                </p>

                                <h2 className="text-2xl font-bold mb-4">Domestic Corporate Tour Packages</h2>
                                <p className="mb-4">
                                    Discover beautiful Indian locations such as Jim Corbett, Ranthambore, Rishikesh, Jibhi and Manali this summer. Very ideal for corporate retreat, team building, and incentive travel, these places not only provide adventure but also the most relaxing and beautiful scenery to revive you physically.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <p className="mb-4">
                                        <strong>Jim Corbett:</strong> There is the quite beautiful nature reserve called <a href="#" className="text-blue-600 hover:underline">Jim Corbett</a>, a perfect location for both corporate team hikers and companies searching for sick leave venues. We are one of the leading companies providing software for conductive practices in distributed hash tables using distributed technology. Plus, nice accommodation and the right amount of leisure shall no doubt make your trip relaxing and enjoyable.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Ranthambore:</strong> If you want to feel like a king, go to Ranthambore which is the land of tigers and their sanctuary. This resort features a list of the most interesting executive retreats and incentive trips ever held in the corporate world. Other than this the given site provides lodging and meeting space which is ideal for hosting leadership retreats and incentive trips.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Rishikesh:</strong> Rishikesh excites spiritually and adventures outdoors as the perfect team destination for a walk in the woods. <a href="#" className="text-blue-600 hover:underline">Rafting</a>, yoga, and trekking are some of the activities that you can do during the visit to <a href="#" className="text-blue-600 hover:underline">Rishikesh</a>. Focus on team engagements and wellness thus make this place attractive to businesses.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Jibhi:</strong> A retreat in Jibhi gives a chance to be close to nature and that's why <a href="#" className="text-blue-600 hover:underline">Jibhi</a> is a perfect place for a company offsite or a business retreat. The scenic view above the town, through the river walks and fresh air will your journey be the best as you and your team bond together.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Manali:</strong> A widely known site in Manali usually has both adventure and leisure to offer all types of visitors. Here you will get the perfect places for company meetings and the most enjoyable team-building trips in the green valleys of <a href="#" className="text-blue-600 hover:underline">Manali</a>.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold mb-4">International Corporate Tour Packages</h2>
                                <p className="mb-4">
                                    You may choose your corporate leisure abroad from the choices like Dubai, <a href="#" className="text-blue-600 hover:underline">Singapore</a> & Malaysia, Thailand, Baku, and Vietnam. It doesn't matter if you are searching for luxury, culture experiences, or team-building activities; these places are the best for executive retreats, MICE travel, and corporate incentives.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <p className="mb-4">
                                        <strong>Dubai:</strong> If you want to have an exciting experience in a very unique and wealthy city then <a href="#" className="text-blue-600 hover:underline">Dubai</a> is the best place for you. It has the world's best facilities and a friendly environment for business people, so it is perfect for executive retreats, MICE travel, and corporate incentives as well. Dubai is the perfect place for team building while experiencing desert fun, cultural exploring, and inclusive packages of leisure such as shopping and dining.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Singapore & Malaysia:</strong> This package can be used in collaboration with two countries for business purposes as each of them has a striking difference. Marina Bay Sands is among the list of places with deluxe meeting spaces and luxurious resort facilities. The beautiful gardens are ideal for team-building activities. Such a package is good for both corporate group travel and leadership retreats.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Thailand:</strong> A visit to <a href="#" className="text-blue-600 hover:underline">Thailand</a> would sum up an outdoor tropical experience, an array of cultural activities, and much business in bustling town centers. Plus, rafting is added to the mix too. By going to temples and resorts, guests have lovely relaxation murals as a first choice.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Baku:</strong> Baku citizens and residents are already familiar with this splendid new corporate travel trend going on the rise as the <a href="#" className="text-blue-600 hover:underline">Azerbaijan</a> capital city hosts retreat and executive travel. MICE and corporate retreat are the common event occurrences in the city. That is why <a href="#" className="text-blue-600 hover:underline">Baku</a> is the right place for open-air events nowadays.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Vietnam:</strong> Vietnam is a stunningly beautiful country with the ideal mix of business centers, history, and welcoming and open spirit, making it accessible for travelers and entrepreneurs alike. A trip to the cities <a href="#" className="text-blue-600 hover:underline">Hanoi and Ho Chi Minh</a> City, cruising in Ha Long Bay, and visiting different nature reserves are some of the amazing activities offered in <a href="#" className="text-blue-600 hover:underline">Vietnam</a>.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold mb-4">Why Choose Travel Wisdom?</h2>
                                <div className="space-y-4 mb-6">
                                    <p className="mb-4">
                                        <strong>Customized Packages:</strong> We make sure each corporate tour is planned in a way that meets your specific organization's needs and brings out your goals and interests before anything else is thought of.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Expert Planning:</strong> We have a dedicated team, which is experienced in all elements of the project from travel logistics and accommodations to event planning and team-building activities.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Global Destinations:</strong> Looking for the scenic beauty of India or the cosmopolitan atmosphere of Dubai? We provide both <a href="#" className="text-blue-600 hover:underline">domestic</a> and <a href="#" className="text-blue-600 hover:underline">international</a> options for your next corporate event.
                                    </p>
                                    
                                    <p className="mb-4">
                                        <strong>Focus on Team Building & Employee Engagement:</strong> Activities that focus on collaboration, sharpen leadership skills, and create remarkable moments for your team are integrated in our packages.
                                    </p>
                                    
                                    <p className="mb-4">
                                        Allow <a href="#" className="text-blue-600 hover:underline">Travel Wisdom</a> to be your reliable and dependable employee for the planning of corporate tours that are splendid retreats, and wonderful events that have a lasting effect on your team's success and morale.
                                    </p>
                                </div>
                                
                                <button
                                    onClick={() => setShowFullText(false)}
                                    className="text-[#0B3A55] font-bold mt-4 hover:underline"
                                >
                                    View Less
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="mb-4">
                                    The different packages that we have can be described as corporate retreat packages, MICE travel - Meetings, Incentives, Conferences, and Exhibitions, as well as team-building tours and corporate adventure trips depicting a stronger relationship between employees...
                                </p>
                                <button
                                    onClick={() => setShowFullText(true)}
                                    className="text-[#0B3A55] font-bold mt-4 hover:underline"
                                >
                                    View More
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


// Main Component
const CorporateTours = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const words = React.useMemo(() => ['Vibe', 'Culture', 'Experience', 'Journey', 'Adventure'], []);
  const baseText = 'Redefine Your ';
  const highlightText = 'CORPORATE ';

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/src/assets/corporate-homepage-website.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block">{baseText}</span>
            <span className="text-yellow-300">{highlightText}</span>
            <span className="inline-block min-w-[200px] text-left">
              {displayText}
              <span className={`inline-block w-1 h-16 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </span>
          </h1>
        </div>
      </div>

      {/* Exceptional Corporate Experiences Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exceptional <span className="text-[#0B3A55]">Corporate</span> Experiences <span role="img" aria-label="smile">😊</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/corporate-trips-icon.webp" alt="Corporate Trips" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Trips</h3>
              <p className="text-gray-600 text-sm">
                Bring your work crew together on a trip to elevate team spirit & performances
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/team-incentive-travel-icon.webp" alt="Team Incentive Travel" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Incentive Travel</h3>
              <p className="text-gray-600 text-sm">
                Travel experiences designed to foster team bonding & enjoyment outside office
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/business-travel-icon.webp" alt="Business Travel" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Travel</h3>
              <p className="text-gray-600 text-sm">
                Trips facilitating collaborations, networking & expansion opportunities
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/MICE-icon.webp" alt="MICE" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MICE</h3>
              <p className="text-gray-600 text-sm">
                Transform ordinary Meetings, Incentives, Conferences & Events into extraordinary
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/vendor-incentive-plan-icon.webp" alt="Vendor Incentive Plan" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vendor Incentive Plan</h3>
              <p className="text-gray-600 text-sm">
                Experiences designed to motivate & reward vendors, suppliers or channel partner
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <section
        className="rounded-lg max-w-7xl mx-auto text-left mt-10 mb-10 p-6 flex flex-col md:flex-row items-center"
        style={{
          backgroundImage: "url('src/assets/blue-crumpled-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 px-6">
          <div className="inline-block mb-2">
            <img src="/customer-service.png" alt="Contact Icon" className="mx-auto w-20 h-20" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Have Doubts? Talk To Our Travel Experts!</h3>
          <p className="text-lg text-white">
            we would <span className="text-red-700">❤️</span> to craft a trip just for you.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md px-6">
          <ContactForm />
        </div>
      </section>
      
      {/* Associate With Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Associate With Us <span role="img" aria-label="sunglasses">😎</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Group Bonding Activities</h3>
                  <p className="text-gray-600 text-sm">
                    Fun-filled team engaging games & ice-breaking sessions, improving team's strength & productivity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">All Inclusive Itineraries</h3>
                  <p className="text-gray-600 text-sm">
                    From meals to explorations, we plan all-inclusive travel packages, with handpicked stays & transportation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Team Award & Recognitions</h3>
                  <p className="text-gray-600 text-sm">
                    Acknowledging team's achievements, celebrating efforts, improves retention & boost morale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">DJ Night & Galla Dinner</h3>
                  <p className="text-gray-600 text-sm">
                    An unforgettable evening of entertainment, team celebrations & and networking with dine & dance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">International Summit</h3>
                  <p className="text-gray-600 text-sm">
                    Your one stop business travel assistance for VISA, flights, hotels, local transfers & sightseeing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Advertising Trips</h3>
                  <p className="text-gray-600 text-sm">
                    Outshine with your product by choosing the travel destination & let us do the arrangements for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Clients Section */}
      <div 
        className="py-16 relative"
        style={{
          backgroundImage: "url('/src/assets/corporate-clients-section.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Corporate Experiences Crafted with 💛
            </h2>
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
              Our handcrafted corporate tour packages allow working professionals to come together and 
              have a fun-filled travel experience out of their cubicles & mundane routine, spend quality 
              time with each other, build interpersonal skills and indulge in team building activities.
            </p>
          </div>
          
          <TripCarousel />

        </div>
      </div>

      {/* Domestic Corporate Plans Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Domestic Corporate Plans
            </h2>
          </div>
          
          <DomesticPlansCarousel />
        </div>
      </div>

      {/* International Corporate Plans Section (UPDATED) */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              International Corporate Plans
            </h2>
          </div>
          
          <InternationalPlansCarousel />
          
        </div>
      </div>

      {/* --- GALLERY SECTION (Previously added) --- */}
      <GallerySection />
      {/* --- END GALLERY SECTION --- */}

      {/* --- NEW QUERY CONTACT SECTION (Previously added) --- */}
      <QueryContactSection />
      {/* --- END NEW QUERY CONTACT SECTION --- */}

      {/* --- COLLABORATIONS SLIDER (Placed before Services) --- */}
      <CollaborationsSlider /> 
      {/* --- END COLLABORATIONS SLIDER --- */}

      {/* Corporate Tour Packages Information Section */}
      <CorporatePackagesSection />

      <FAQSection />

      <Footer />
    </div>
  );
};

export default CorporateTours;