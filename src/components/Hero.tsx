import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Mic, MicOff } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here based on activeTab and searchQuery
    alert(`Searching for "${searchQuery}" in ${activeTab === "tripPackages" ? "Trip Packages" : "Travel Guides"}`);
  };

  return (
    <section className="relative text-white min-h-[575px] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
        >
          <source src="https://d2qa7a8q0vuocm.cloudfront.net/homepage/home-page-winter-video.mp4" type="video/mp4" />
        </video>
        
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
            <div className="flex gap-4">
              <Button
                variant={activeTab === "tripPackages" ? "default" : undefined}
                onClick={() => handleTabClick("tripPackages")}
                className={activeTab === "tripPackages" ? "bg-[#0B3A55] text-white hover:bg-white hover:text-[#0B3A55] rounded-t-lg rounded-b-none" : "bg-white text-[#0B3A55] hover:bg-[#0B3A55] hover:text-white rounded-t-lg rounded-b-none"}
              >
                Trip Packages
              </Button>
              <Button
                variant={activeTab === "travelGuides" ? "default" : undefined}
                onClick={() => handleTabClick("travelGuides")}
                className={activeTab === "travelGuides" ? "bg-[#0B3A55] text-white hover:bg-white hover:text-[#0B3A55] rounded-t-lg rounded-b-none" : "bg-white text-[#0B3A55] hover:bg-[#0B3A55] hover:text-white rounded-t-lg rounded-b-none"}
              >
                Travel Guides
              </Button>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pick Best Suitable Packages, Destinations & More For You"
                className="pl-10 h-12 text-gray-600 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg w-half focus:ring-0 focus:border-white focus:shadow-none"
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
