import { Button } from "@/components/ui/button";
import { Phone, User, ChevronDown } from "lucide-react";
import TravelWisdomLogo from "@/Untitled-removebg-preview.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top navigation bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <img 
                  src={TravelWisdomLogo} 
                  alt="Go4Explore" 
                  className="h-8 w-8 object-contain text-white"
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">Go4Explore</span>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-8">
              {/* Navigation links */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blogs</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Careers</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
              </nav>

              {/* Phone number */}
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 8076602635</span>
              </div>

              {/* User icon */}
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-4">
            <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Upcoming Group Trips</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>International Trips</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Domestic Trips</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Weekend Trips</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Backpacking Trips</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Corporate Tours</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;