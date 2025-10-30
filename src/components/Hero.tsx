import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Mic, MicOff } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { allTrips } from "@/data/trips";
import { useNavigate } from "react-router-dom";

const images = [
  "https://d2qa7a8q0vuocm.cloudfront.net/images/1420620250217154705.png",
  "https://d2qa7a8q0vuocm.cloudfront.net/images/18009020230321103012.png",
  "https://d2qa7a8q0vuocm.cloudfront.net/images/37597320200416073327.png",
  "/cloned_media/15154220240717101812.png",
  "/cloned_media/6737420220907032145.png"
];

declare global {
  interface Window {
    SpeechRecognition: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState("tripPackages");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nextTextIndex, setNextTextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const recognitionRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const currentTabRef = useRef<string>("tripPackages"); // To store activeTab at voice start

  const texts = [
    "Unforgettable Journeys",
    "Diverse Landscapes",
    "New Friendships",
    "Food & Culture"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setNextTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 1000); // animation duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const transcript = event.results[0][0].transcript.trim();
        if (transcript) {
          setSearchQuery(transcript);
          setIsListening(false);
          // Automatically submit search after voice input
          setTimeout(() => {
            // Perform search logic directly
          }, 500);
        }
      };

      recognitionRef.current.onerror = (event: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onstart = () => {
        currentTabRef.current = activeTab; // Store the current activeTab at voice start
        // Set a timeout to stop listening if no input is received
        setTimeout(() => {
          if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
          }
        }, 5000); // 5 seconds timeout
      };
    }
  }, [isListening]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery(""); // reset search input on tab change
  };

  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (activeTab === "tripPackages") {
      // Search through trips
      const filteredTrips = allTrips.filter(trip => 
        trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.overview.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Navigate to search results or specific destination
      const query = searchQuery.toLowerCase();
      if (query.includes('dubai')) navigate('/dubai');
      else if (query.includes('rajasthan')) navigate('/rajasthan');
      else if (query.includes('kerala')) navigate('/kerala');
      else if (query.includes('bhutan')) navigate('/bhutan');
      else if (query.includes('leh') || query.includes('ladakh')) navigate('/leh-ladakh');
      else if (query.includes('bali')) navigate('/bali');
      else if (query.includes('kazakhstan')) navigate('/kazakhstan');
      else if (query.includes('himachal') || query.includes('manali') || query.includes('shimla')) navigate('/himachal-pradesh');
      else if (query.includes('kashmir')) navigate('/kashmir');
      else if (query.includes('spiti')) navigate('/spiti');
      else if (query.includes('uttarakhand') || query.includes('rishikesh')) navigate('/uttarakhand');
      else if (query.includes('thailand')) navigate('/thailand');
      else if (query.includes('vietnam')) navigate('/vietnam');
      else if (query.includes('domestic')) navigate('/domestic-trips');
      else if (query.includes('international')) navigate('/international-trips');
      else if (query.includes('backpack')) navigate('/backpacking-trips');
      else if (query.includes('weekend')) navigate('/weekend-trips');
      else if (query.includes('corporate')) navigate('/corporate-tours');
      else {
        // Default to domestic trips if no specific match
        navigate('/domestic-trips');
      }
    } else {
      // For travel guides, navigate to blogs
      navigate('/blogs');
    }
  };

  return (
    <section className="relative text-white min-h-[575px] flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative h-[8rem] overflow-visible">
            Book to Experience
            <br />
            <span
              key={currentTextIndex}
              className={`text-tropical absolute left-0 right-0 transition-transform duration-1000 ease-in-out ${
                isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
              style={{ top: "4rem",bottom: "8rem", visibility: isAnimating ? "hidden" : "visible" }}
            >
              {texts[currentTextIndex]}
            </span>
            <span
              key={nextTextIndex}
              className={`text-tropical absolute left-0 right-0 transition-transform duration-1000 ease-in-out ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ top: "4rem",bottom: "8rem", visibility: isAnimating ? "visible" : "hidden" }}
            >
              {texts[nextTextIndex]}
            </span>
          </h1>

          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover amazing destinations with Travel Wisdom. Your gateway to incredible adventures and lasting memories.
          </p>

          {/* Search form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pick Best Suitable Packages, Destinations & More For You"
                className="pl-10 h-12 text-gray-600 rounded-lg w-half focus:ring-0 focus:border-white focus:shadow-none"
              />
              <button type="submit" className="absolute right-10 top-1/2 transform -translate-y-1/2 border-0 bg-transparent">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isListening) {
                    recognitionRef.current?.stop();
                    setIsListening(false);
                  } else {
                    // Clear previous search query when starting new voice input
                    setSearchQuery("");
                    recognitionRef.current?.start();
                    setIsListening(true);
                  }
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 border-0 bg-transparent"
                aria-label={isListening ? "Stop voice input" : "Start voice input"}
              >
                {isListening ? (
                  <MicOff className="h-5 w-5 text-red-600" />
                ) : (
                  <Mic className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </form>
          </div>
        </div>
        {/* Info section at bottom of hero */}
        <div className="mt-12 flex justify-center items-center text-white text-2xl font-semibold space-x-20 pt-6">
          <div className="flex items-center space-x-6">
            <img src="/message_icon.png" alt="Reviews" className="h-16 w-16" />
            <div>
              <div className="text-4xl">8700+</div>
              <div className="text-base font-normal">Reviews</div>
            </div>
          </div>
          <div className="border-l border-white/20 h-14" />
          <div className="flex items-center space-x-6">
            <img src="/travelers.png" alt="Satisfied Travelers" className="h-16 w-16" />
            <div>
              <div className="text-4xl">56541+</div>
              <div className="text-base font-normal">Satisfied Travelers</div>
            </div>
          </div>
          <div className="border-l border-white/20 h-14" />
          <div className="flex items-center space-x-6">
            <img src="/destinations.png" alt="Destinations" className="h-16 w-16" />
            <div>
              <div className="text-4xl">50+</div>
              <div className="text-base font-normal">Destinations</div>
            </div>
          </div>
          <div className="border-l border-white/20 h-14" />
          <div className="flex items-center space-x-6">
            <img src="/experience.png" alt="Experience" className="h-20 w-16" />
            <div>
              <div className="text-4xl">5 Years+</div>
              <div className="text-base font-normal">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
