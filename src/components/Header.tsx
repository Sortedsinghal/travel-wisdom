import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Phone, User, ChevronDown } from "lucide-react";
import NewCircleLogo from "@/assets/travel-wisdom-logo.png";

const createSlug = (text: string) => {
  return text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
};

const Header = () => {
  const [isUpcomingOpen, setIsUpcomingOpen] = React.useState(false);
  const [isDomesticOpen, setIsDomesticOpen] = React.useState(false);
  const [isWeekendOpen, setIsWeekendOpen] = React.useState(false);
  const [isBackpackingOpen, setIsBackpackingOpen] = React.useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = React.useState(false);

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
    { name: "Chopta Tungnath", path: "/trips/chopta-tungnath-deoriatal" },
    { name: "Manali Sissu", path: "/trips/manali-sissu" },
    { name: "Manali Sissu Kasol", path: "/trips/manali-sissu-kasol" },
    { name: "Jibhi & Tirthan Valley", path: "/trips/jibhi-tirthan-valley" },
    { name: "Kasol Kheerganga", path: "/trips/kasol-kheerganga-trek" },
    { name: "Mcleodganj Triund", path: "/trips/mcleodganj-triund-trek" },
  ];

  const backpackingTripsList = [
    { name: "Spiti Valley", path: "/spiti" },
    { name: "Leh & Ladakh", path: "/leh-ladakh" },
    { name: "Himachal Backpacking", path: "/himachal-backpacking-manali-kasol-jibhi" },
    { name: "Meghalaya", path: "/meghalaya-backpacking" },
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
                className="w-16 h-14 rounded-full mr-2.5 object-contain"
              />
              <span className="text-2xl font-bold text-[#000000] tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Travel Wisdom
              </span>
            </Link>

            {/* Right section */}
            <div className="flex items-center gap-8">
              {/* Navigation links */}
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/about-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">About Us</Link>
                <Link to="/blogs" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Blogs</Link>
                <Link to="/careers" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Careers</Link>
                <Link to="/contact-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Contact Us</Link>
              </nav>

              {/* Phone number */}
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <a href="tel:+919971545446" className="font-medium hover:text-[#0B3A55] transition-colors cursor-pointer">
                  +91 9971545446
                </a>
              </div>

              {/* User icon */}
              <Link to="/login" className="w-10 h-10 bg-[#0B3A55] rounded-full flex items-center justify-center hover:bg-[#0A2E44] transition-colors">
                <User className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="bg-[#0B3A55] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-4">
            {/* Upcoming Group Trips Dropdown */}
            <div onMouseLeave={() => setIsUpcomingOpen(false)}>
              <DropdownMenu open={isUpcomingOpen} onOpenChange={setIsUpcomingOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsUpcomingOpen(true)}>
                  <Link to="/upcoming-group-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Upcoming Group Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
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
            <div onMouseLeave={() => setIsDomesticOpen(false)}>
              <DropdownMenu open={isDomesticOpen} onOpenChange={setIsDomesticOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsDomesticOpen(true)}>
                  <Link to="/domestic-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Domestic Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
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
            <div onMouseLeave={() => setIsWeekendOpen(false)}>
              <DropdownMenu open={isWeekendOpen} onOpenChange={setIsWeekendOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsWeekendOpen(true)}>
                  <Link to="/weekend-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Weekend Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
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
            <div onMouseLeave={() => setIsBackpackingOpen(false)}>
              <DropdownMenu open={isBackpackingOpen} onOpenChange={setIsBackpackingOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsBackpackingOpen(true)}>
                  <Link to="/backpacking-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Backpacking Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
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
            <div onMouseLeave={() => setIsInternationalOpen(false)}>
              <DropdownMenu open={isInternationalOpen} onOpenChange={setIsInternationalOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsInternationalOpen(true)}>
                  <Link to="/international-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>International Trips</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
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
    </header>
  );
};

export default Header;