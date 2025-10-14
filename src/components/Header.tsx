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

const Header = () => {
  const [isUpcomingOpen, setIsUpcomingOpen] = React.useState(false);
  const [isDomesticOpen, setIsDomesticOpen] = React.useState(false);
  const [isWeekendOpen, setIsWeekendOpen] = React.useState(false);
  const [isBackpackingOpen, setIsBackpackingOpen] = React.useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = React.useState(false);

  const upcomingTrips = [
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
    "January 2026",
    "February 2026",
  ];

  const internationalTrips = [
    "Vietnam",
    "Thailand",
    "Kazakhstan",
    "Bali",
    "Dubai",
    "Bhutan"
  ];

  return (
    <header className="bg-white shadow-sm">
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
              <span className="text-2xl font- text-[#000000] bold tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>Travel Wisdom</span>
            </Link>

            {/* Right section */}
            <div className="flex items-center gap-8">
              {/* Navigation links */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="/about-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">About Us</a>
                <a href="/blogs" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Blogs</a>
                <a href="/careers" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Careers</a>
                <a href="/contact-us" className="text-gray-700 hover:text-[#0B3A55] transition-colors">Contact Us</a>
              </nav>

              {/* Phone number */}
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <a href="tel:+919971545446" className="font-medium hover:text-[#0B3A55] transition-colors cursor-pointer">+91 9971545446</a>
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
            <div onMouseLeave={() => setIsUpcomingOpen(false)}>
              <DropdownMenu open={isUpcomingOpen} onOpenChange={setIsUpcomingOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsUpcomingOpen(true)}>
                  <Link to="/upcoming-group-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Upcoming Group Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {upcomingTrips.map((trip) => (
                    <DropdownMenuItem key={trip} asChild>
                      <Link to={`/upcoming-group-trips?month=${encodeURIComponent(trip)}`} className="flex justify-center w-full">
                        {trip}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div onMouseLeave={() => setIsDomesticOpen(false)}>
              <DropdownMenu open={isDomesticOpen} onOpenChange={setIsDomesticOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsDomesticOpen(true)}>
                  <Link to="/domestic-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Domestic Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {["Himachal", "Kashmir", "Kerala", "Uttarakhand", "Rajasthan"].map((place) => (
                    <DropdownMenuItem key={place} className="flex justify-center">{place}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div onMouseLeave={() => setIsWeekendOpen(false)}>
              <DropdownMenu open={isWeekendOpen} onOpenChange={setIsWeekendOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsWeekendOpen(true)}>
                  <Link to="/weekend-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Weekend Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {[
                    "Chopta Tungnath",
                    "Manali Sissu",
                    "Manali Sissu Kasol",
                    "Jibhi & Tirthan Valley",
                    "Kasol Kheerganga",
                    "Mcleodganj Triund",
                  ].map((place) => (
                    <DropdownMenuItem key={place} className="flex justify-center">{place}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div onMouseLeave={() => setIsBackpackingOpen(false)}>
              <DropdownMenu open={isBackpackingOpen} onOpenChange={setIsBackpackingOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsBackpackingOpen(true)}>
                  <Link to="/backpacking-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>Backpacking Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {[
                    "Spiti Valley",
                    "Leh & Ladakh",
                    "Himachal Backpacking",
                    "Meghalaya",
                  ].map((place) => (
                    <DropdownMenuItem key={place} className="flex justify-center">{place}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div onMouseLeave={() => setIsInternationalOpen(false)}>
              <DropdownMenu open={isInternationalOpen} onOpenChange={setIsInternationalOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsInternationalOpen(true)}>
                  <Link to="/international-trips" className="flex items-center gap-1 px-3 py-2 rounded transition-colors outline-none">
                    <span>International Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {internationalTrips.map((place) => (
                    <DropdownMenuItem key={place} className="flex justify-center">{place}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/corporate-tours" className=" px-3 py-2 rounded transition-colors">
              <span>Corporate Tours</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
