import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
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
  const [mobileUpcomingOpen, setMobileUpcomingOpen] = React.useState(false);
  const [mobileDomesticOpen, setMobileDomesticOpen] = React.useState(false);
  const [mobileWeekendOpen, setMobileWeekendOpen] = React.useState(false);
  const [mobileBackpackingOpen, setMobileBackpackingOpen] = React.useState(false);
  const [mobileInternationalOpen, setMobileInternationalOpen] = React.useState(false);

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

              {/* Phone number */}
              <div className="hidden sm:flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <a href="tel:+919971545446" className="font-medium hover:text-[#0B3A55] transition-colors cursor-pointer text-sm md:text-base">
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
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between lg:justify-center py-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-8">
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
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {/* Main navigation links */}
            <Link to="/about-us" className="block text-gray-700 hover:text-[#0B3A55] transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/blogs" className="block text-gray-700 hover:text-[#0B3A55] transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
            <Link to="/contact-us" className="block text-gray-700 hover:text-[#0B3A55] transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            
            {/* Trip categories with dropdowns */}
            <div className="border-t pt-4">
              <div className="space-y-3">
                {/* Upcoming Group Trips */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link to="/upcoming-group-trips" className="text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Group Trips</Link>
                    <button onClick={() => setMobileUpcomingOpen(!mobileUpcomingOpen)} className="p-1">
                      <ChevronDown className={`h-4 w-4 text-[#0B3A55] transition-transform ${mobileUpcomingOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileUpcomingOpen && (
                    <div className="ml-4 space-y-2">
                      {upcomingTrips.map((month) => (
                        <Link key={month} to={`/upcoming-group-trips?month=${encodeURIComponent(month)}`} className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>
                          {month}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Domestic Trips */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link to="/domestic-trips" className="text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Domestic Trips</Link>
                    <button onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)} className="p-1">
                      <ChevronDown className={`h-4 w-4 text-[#0B3A55] transition-transform ${mobileDomesticOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileDomesticOpen && (
                    <div className="ml-4 space-y-2">
                      {domesticTrips.map((place) => (
                        <Link key={place.name} to={place.path} className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>
                          {place.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Weekend Trips */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link to="/weekend-trips" className="text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Weekend Trips</Link>
                    <button onClick={() => setMobileWeekendOpen(!mobileWeekendOpen)} className="p-1">
                      <ChevronDown className={`h-4 w-4 text-[#0B3A55] transition-transform ${mobileWeekendOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileWeekendOpen && (
                    <div className="ml-4 space-y-2">
                      {weekendTripsList.map((trip) => (
                        <Link key={trip.name} to={trip.path} className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Backpacking Trips */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link to="/backpacking-trips" className="text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Backpacking Trips</Link>
                    <button onClick={() => setMobileBackpackingOpen(!mobileBackpackingOpen)} className="p-1">
                      <ChevronDown className={`h-4 w-4 text-[#0B3A55] transition-transform ${mobileBackpackingOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileBackpackingOpen && (
                    <div className="ml-4 space-y-2">
                      {backpackingTripsList.map((trip) => (
                        <Link key={trip.name} to={trip.path} className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* International Trips */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link to="/international-trips" className="text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>International Trips</Link>
                    <button onClick={() => setMobileInternationalOpen(!mobileInternationalOpen)} className="p-1">
                      <ChevronDown className={`h-4 w-4 text-[#0B3A55] transition-transform ${mobileInternationalOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileInternationalOpen && (
                    <div className="ml-4 space-y-2">
                      {internationalTripsList.map((trip) => (
                        <Link key={trip.name} to={trip.path} className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Corporate Tours */}
                <Link to="/corporate-tours" className="block text-[#0B3A55] font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Corporate Tours</Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;