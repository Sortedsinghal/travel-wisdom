import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Mic, MicOff } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { allTrips } from "@/data/trips";
import { useNavigate } from "react-router-dom";

const videos = [
  "/hero_videos/Black and Green Modern Paris Travel Video.mp4",
  "/hero_videos/Blue Minimalist Scenery Travel Vlog Thumbnail Youtube Intro.mp4",
  "/hero_videos/Blue Mountains Welcome To My Channel Youtube Intro.mp4",
  "/hero_videos/Blue Snowy Forest  Hello Winter Video.mp4",
  "/hero_videos/Green Simple Nature YouTube Video Ad.mp4",
  "/hero_videos/Orange Minimalist Aerial Landscape Fields Forest Travel Vlog Thumbnail Youtube Intro.mp4",
  "/hero_videos/Untitled design.mp4",
  "/hero_videos/White Minimalist Travel Vlog Youtube Intro.mp4",
  "/hero_videos/Yellow and Black Travel Collection Video.mp4"
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const recognitionRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const currentTabRef = useRef<string>("tripPackages"); // To store activeTab at voice start
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(new Array(videos.length).fill(false));

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
    const changeVideo = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const videoInterval = setInterval(changeVideo, 3000); // Change video every 3 seconds

    return () => clearInterval(videoInterval);
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      const playPromise = currentVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, which is fine
        });
      }
    }
    
    // Preload next video
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && nextVideo.readyState < 2) {
      nextVideo.load();
    }
  }, [currentVideoIndex]);

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



  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    return matrix[str2.length][str1.length];
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (activeTab === "tripPackages") {
      const searchTerms = ['shimla', 'manali', 'kashmir', 'kerala', 'rajasthan', 'himachal', 'uttarakhand', 'ladakh', 'rishikesh', 'corbett', 'spiti', 'kasol', 'dharamshala', 'mcleodganj', 'dubai', 'thailand', 'vietnam', 'bali', 'bhutan', 'kazakhstan', 'chopta', 'tungnath', 'kedarnath', 'badrinath', 'haridwar', 'dehradun', 'mussoorie', 'nainital'];
      
      const query = searchQuery.toLowerCase().trim();
      let bestMatch = query;
      let minDistance = Infinity;
      
      // Find closest match using Levenshtein distance
      searchTerms.forEach(term => {
        const distance = levenshteinDistance(query, term);
        if (distance < minDistance && distance <= Math.max(2, Math.floor(term.length * 0.4))) {
          minDistance = distance;
          bestMatch = term;
        }
      });

      navigate(`/search-results?q=${encodeURIComponent(bestMatch)}`);
    } else {
      navigate('/blogs');
    }
  };

  return (
    <section className="relative text-white min-h-[500px] md:min-h-[575px] flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={video}
            muted
            preload="metadata"
            playsInline
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadStart={() => {
              // Video started loading
            }}
            onCanPlay={() => {
              // Video can start playing
            }}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight relative h-[5rem] sm:h-[6rem] md:h-[8rem] overflow-visible">
            Book to Experience
            <br />
            <span
              key={currentTextIndex}
              className={`text-tropical absolute left-0 right-0 transition-transform duration-1000 ease-in-out ${
                isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
              style={{ top: "3rem", visibility: isAnimating ? "hidden" : "visible" }}
            >
              {texts[currentTextIndex]}
            </span>
            <span
              key={nextTextIndex}
              className={`text-tropical absolute left-0 right-0 transition-transform duration-1000 ease-in-out ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ top: "3rem", visibility: isAnimating ? "visible" : "hidden" }}
            >
              {texts[nextTextIndex]}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl mb-4 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Discover amazing destinations with Travel Wisdom. Your gateway to incredible adventures and lasting memories.
          </p>

          {/* Search form */}
          <div className="max-w-lg mx-auto px-4">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, packages & more..."
                className="pl-10 md:pl-12 pr-16 md:pr-20 h-10 md:h-12 text-sm md:text-base text-gray-600 rounded-lg w-full focus:ring-0 focus:border-white focus:shadow-none"
              />
              <button type="submit" className="absolute right-12 md:right-14 top-1/2 transform -translate-y-1/2 border-0 bg-transparent">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
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
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 border-0 bg-transparent"
                aria-label={isListening ? "Stop voice input" : "Start voice input"}
              >
                {isListening ? (
                  <MicOff className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                ) : (
                  <Mic className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                )}
              </button>
            </form>
          </div>
        </div>
        {/* Info section at bottom of hero */}
        <div className="mt-6 md:mt-12 px-4">
          {/* Mobile layout - 2x2 grid */}
          <div className="grid grid-cols-2 gap-2 md:hidden text-white text-center">
            <div className="flex flex-col items-center space-y-1 bg-black/20 rounded-lg p-2">
              <img src="/message_icon.png" alt="Reviews" className="h-6 w-6" />
              <div className="text-sm font-bold">1700+</div>
              <div className="text-xs leading-tight">Reviews</div>
            </div>
            <div className="flex flex-col items-center space-y-1 bg-black/20 rounded-lg p-2">
              <img src="/travelers.png" alt="Satisfied Travelers" className="h-6 w-6" />
              <div className="text-sm font-bold">17000+</div>
              <div className="text-xs leading-tight">Satisfied Travelers</div>
            </div>
            <div className="flex flex-col items-center space-y-1 bg-black/20 rounded-lg p-2">
              <img src="/destinations.png" alt="Destinations" className="h-6 w-6" />
              <div className="text-sm font-bold">40+</div>
              <div className="text-xs leading-tight">Destinations</div>
            </div>
            <div className="flex flex-col items-center space-y-1 bg-black/20 rounded-lg p-2">
              <img src="/experience.png" alt="Experience" className="h-8 w-6" />
              <div className="text-sm font-bold">5 Years+</div>
              <div className="text-xs leading-tight">Experience</div>
            </div>
          </div>
          
          {/* Desktop layout - horizontal */}
          <div className="hidden md:flex justify-center items-center text-white text-lg font-semibold space-x-6 lg:space-x-12 pt-4">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <img src="/message_icon.png" alt="Reviews" className="h-8 w-8 lg:h-10 lg:w-10" />
              <div>
                <div className="text-lg lg:text-2xl">1700+</div>
                <div className="text-xs lg:text-sm font-normal">Reviews</div>
              </div>
            </div>
            <div className="border-l border-white/20 h-8 lg:h-10" />
            <div className="flex items-center space-x-3 lg:space-x-4">
              <img src="/travelers.png" alt="Satisfied Travelers" className="h-8 w-8 lg:h-10 lg:w-10" />
              <div>
                <div className="text-lg lg:text-2xl">17000+</div>
                <div className="text-xs lg:text-sm font-normal">Satisfied Travelers</div>
              </div>
            </div>
            <div className="border-l border-white/20 h-8 lg:h-10" />
            <div className="flex items-center space-x-3 lg:space-x-4">
              <img src="/destinations.png" alt="Destinations" className="h-8 w-8 lg:h-10 lg:w-10" />
              <div>
                <div className="text-lg lg:text-2xl">40+</div>
                <div className="text-xs lg:text-sm font-normal">Destinations</div>
              </div>
            </div>
            <div className="border-l border-white/20 h-8 lg:h-10" />
            <div className="flex items-center space-x-3 lg:space-x-4">
              <img src="/experience.png" alt="Experience" className="h-10 w-8 lg:h-12 lg:w-10" />
              <div>
                <div className="text-lg lg:text-2xl">5 Years+</div>
                <div className="text-xs lg:text-sm font-normal">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
