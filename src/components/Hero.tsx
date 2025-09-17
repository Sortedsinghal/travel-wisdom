import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative hero-gradient text-white min-h-[500px] flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500" />
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