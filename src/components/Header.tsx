import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Phone, User, ChevronDown, Menu, X } from "lucide-react";
import NewCircleLogo from "@/assets/travel-wisdom-logo.png";

const createSlug = (text: string) => {
  return text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
};

const dropdownContentClasses = 
  "w-[220px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 duration-200 fade-in-0";

const Header = () => {
  const [isUpcomingOpen, setIsUpcomingOpen] = React.useState(false);
  const [isDomesticOpen, setIsDomesticOpen] = React.useState(false);
  const [isWeekendOpen, setIsWeekendOpen] = React.useState(false);
  const [isBackpackingOpen, setIsBackpackingOpen] = React.useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const upcomingTrips = [
    "October 2025",
    "November 2025",
    "December 2025",
    "January 2026",
    "February 2026",
    "March 2026",
  ];

  const domesticTrips = [
    { name: "Himachal", path: "/himachal-pradesh" },
    { name: "Kashmir", path: "/kashmir" },
    { name: "Kerala", path: "/kerala" },
    { name: "Rajasthan", path: "/rajasthan" },
    { name: "Uttarakhand", path: "/uttarakhand" },
  ];

  const weekendTripsList = [
    { name: "Chopta Tungnath", path: "/trip/chopta-tungnath-deoriatal" },
    { name: "Manali Sissu", path: "/trip/manali-sissu" },
    { name: "Manali Sissu Kasol", path: "/trip/manali-sissu-kasol" },
    { name: "Jibhi & Tirthan Valley", path: "/trip/jibhi-tirthan-valley" },
    { name: "Kasol Kheerganga", path: "/trip/kasol-kheerganga-trek" },
    { name: "Mcleodganj Triund", path: "/trip/mcleodganj-triund-trek" },
  ];

  const backpackingTripsList = [
    { name: "Spiti Valley", path: "/spiti" },
    { name: "Leh & Ladakh", path: "/leh-ladakh" },
    { name: "Himachal Backpacking", path: "/trip/himachal-backpacking-manali-kasol-jibhi" },
    { name: "Meghalaya", path: "/trip/meghalaya-backpacking" },
  ];

  const internationalTripsList = [
    { name: "Vietnam", path: "/vietnam" },
    { name: "Thailand", path: "/thailand" },
    { name: "Kazakhstan", path: "/kazakhstan" },
    { name: "Bali", path: "/bali" },
    { name: "Dubai", path: "/dubai" },
    { name: "Bhutan", path: "/bhutan" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top navigation bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center transition-opacity">
              <img
                src={NewCircleLogo}
                alt="Travel Wisdom Circle"
                className="w-12 h-10 md:w-16 md:h-14 rounded-full mr-2 md:mr-2.5 object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="text-lg md:text-2xl font-black text-[#000000]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '900' }}>
                Travel Wisdom
              </span>
            </Link>

            {/* Right section */}
            <div className="flex items-center gap-2 md:gap-8">
              {/* Navigation links - Desktop */}
              <nav className="hidden lg:flex items-center gap-6">
                <Link to="/about-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">About Us</Link>
                <Link to="/blogs" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Blogs</Link>
                <Link to="/contact-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Contact Us</Link>
              </nav>

              {/* Phone number - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <a href="tel:+919971545446" className="font-medium hover:text-[#0B3A55] transition-colors cursor-pointer text-sm lg:text-base">
                  +91 9971545446
                </a>
              </div>

              {/* User icon */}
              <Link to="/login" className="w-8 h-8 md:w-10 md:h-10 bg-[#0B3A55] rounded-full flex items-center justify-center hover:bg-[#0A2E44] transition-colors">
                <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </Link>


            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="bg-[#0B3A55] text-white">
        <div className="container mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-center gap-8 py-4">
            {/* Upcoming Group Trips Dropdown */}
            <div 
              onMouseEnter={() => setIsUpcomingOpen(true)}
              onMouseLeave={() => setIsUpcomingOpen(false)}
            >
              <DropdownMenu open={isUpcomingOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/upcoming-group-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Upcoming Group Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={dropdownContentClasses}>
                  {upcomingTrips.map((month) => (
                    <DropdownMenuItem key={month} asChild>
                      <Link to={`/upcoming-group-trips?month=${encodeURIComponent(month)}`} className="flex justify-center w-full">
                        {month}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Domestic Trips Dropdown */}
            <div 
              onMouseEnter={() => setIsDomesticOpen(true)}
              onMouseLeave={() => setIsDomesticOpen(false)}
            >
              <DropdownMenu open={isDomesticOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/domestic-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Domestic Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={dropdownContentClasses}>
                  {domesticTrips.map((place) => (
                    <DropdownMenuItem key={place.name} asChild>
                      <Link to={place.path} className="flex justify-center w-full">
                        {place.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Weekend Trips Dropdown */}
            <div 
              onMouseEnter={() => setIsWeekendOpen(true)}
              onMouseLeave={() => setIsWeekendOpen(false)}
            >
              <DropdownMenu open={isWeekendOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/weekend-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Weekend Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={dropdownContentClasses}>
                  {weekendTripsList.map((trip) => (
                    <DropdownMenuItem key={trip.name} asChild>
                      <Link to={trip.path} className="flex justify-center w-full text-center">
                        {trip.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Backpacking Trips Dropdown */}
            <div 
              onMouseEnter={() => setIsBackpackingOpen(true)}
              onMouseLeave={() => setIsBackpackingOpen(false)}
            >
              <DropdownMenu open={isBackpackingOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/backpacking-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Backpacking Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={dropdownContentClasses}>
                  {backpackingTripsList.map((trip) => (
                    <DropdownMenuItem key={trip.name} asChild>
                      <Link to={trip.path} className="flex justify-center w-full text-center">
                        {trip.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* International Trips Dropdown */}
            <div 
              onMouseEnter={() => setIsInternationalOpen(true)}
              onMouseLeave={() => setIsInternationalOpen(false)}
            >
              <DropdownMenu open={isInternationalOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/international-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>International Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={dropdownContentClasses}>
                  {internationalTripsList.map((trip) => (
                    <DropdownMenuItem key={trip.name} asChild>
                      <Link to={trip.path} className="w-full flex justify-center">
                        {trip.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Corporate Tours Link */}
            <Link to="/corporate-tours" className="px-3 py-2 rounded transition-colors hover:bg-white/10">
              Corporate Tours
            </Link>
          </nav>
          
          {/* Mobile bottom navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center py-3">
              {/* Mobile menu trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-white/15 backdrop-blur-sm rounded-full hover:bg-white/25 transition-all duration-200 shadow-lg border border-white/20">
                    <Menu className="h-4 w-4 text-white" />
                    <span className="text-white font-medium text-sm">Browse Trips</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Trip Categories */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Trip Categories</h3>
                      <Link to="/upcoming-group-trips" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Group Trips</Link>
                      <Link to="/domestic-trips" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Domestic Trips</Link>
                      <Link to="/weekend-trips" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Weekend Trips</Link>
                      <Link to="/backpacking-trips" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Backpacking Trips</Link>
                      <Link to="/international-trips" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>International Trips</Link>
                      <Link to="/corporate-tours" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Corporate Tours</Link>
                    </div>
                    
                    {/* Other Pages */}
                    <div className="space-y-3 pt-4 border-t">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">More</h3>
                      <Link to="/about-us" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                      <Link to="/blogs" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                      <Link to="/contact-us" className="text-base font-medium block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex items-center gap-2 text-gray-700 pt-4 border-t">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+919971545446" className="font-medium">
                        +91 9971545446
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;