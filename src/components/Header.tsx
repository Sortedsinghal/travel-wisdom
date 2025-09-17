import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import TravelWisdomLogo from "@/assets/travel-wisdom-logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+918076602635" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="h-4 w-4" />
              +91 8076602635
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              <MessageCircle className="h-4 w-4" />
              Send Query
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>About Us</span>
            <span>Blogs</span>
            <span>Careers</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={TravelWisdomLogo} 
              alt="Travel Wisdom Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">Travel Wisdom</h1>
              <span className="text-xs text-muted-foreground">Since 2020</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Upcoming Group Trips</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">International Trips</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Domestic Trips</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Weekend Trips</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Backpacking Trips</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Corporate Tours</a>
          </nav>

          <Button variant="default" className="hidden md:block">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;