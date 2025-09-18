import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative text-white min-h-[600px] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://d2qa7a8q0vuocm.cloudfront.net/homepage/home-page-winter-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scrolling text banner */}
          <div className="mb-8 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-lg font-medium opacity-90">
              Book to Experience • New Friendships • Diverse Landscapes • Food & Culture • New Friendships • Diverse Landscapes • Food & Culture • New Friendships
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book to Experience
            <br />
            <span className="text-tropical">Unforgettable</span> Journeys
          </h1>

          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover amazing destinations with Travel Wisdom. Your gateway to incredible adventures and lasting memories.
          </p>

          {/* Search form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto hero-shadow">
            <div className="flex gap-4 mb-4">
              <Button variant="default" className="flex-1">
                Trip Packages
              </Button>
              <Button variant="outline" className="flex-1">
                Travel Guides
              </Button>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search destinations..."
                  className="pl-10 h-12 text-foreground"
                />
              </div>
              <Button size="lg" className="px-8 button-shadow">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;