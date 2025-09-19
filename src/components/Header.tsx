import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Phone, User, ChevronDown } from "lucide-react";
import NewCircleLogo from "@/assets/logo_circle.png";

const Header = () => {
  const [isUpcomingOpen, setIsUpcomingOpen] = React.useState(false);
  const [isDomesticOpen, setIsDomesticOpen] = React.useState(false);
  const [isWeekendOpen, setIsWeekendOpen] = React.useState(false);
  const [isBackpackingOpen, setIsBackpackingOpen] = React.useState(false);

  const upcomingTrips = [
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
    "January 2026",
    "February 2026",
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top navigation bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={NewCircleLogo}
                alt="Travel Wisdom Circle"
                className="w-12 h-12 rounded-full mr-2 object-contain"
              />
              <span className="text-2xl font- text-[#000000] tracking-wide" style={{ fontFamily: 'Montserrat' }}>Travel Wisdom</span>
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
                <span className="font-medium">+91 9971545446</span>
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
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-4">
            <div onMouseLeave={() => setIsUpcomingOpen(false)}>
              <DropdownMenu open={isUpcomingOpen} onOpenChange={setIsUpcomingOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsUpcomingOpen(true)}>
                  <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors outline-none">
                    <span>Upcoming Group Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[220px]">
                  {upcomingTrips.map((trip) => (
                    <DropdownMenuItem key={trip} className="flex justify-center">{trip}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div onMouseLeave={() => setIsDomesticOpen(false)}>
              <DropdownMenu open={isDomesticOpen} onOpenChange={setIsDomesticOpen}>
                <DropdownMenuTrigger asChild onMouseEnter={() => setIsDomesticOpen(true)}>
                  <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors outline-none">
                    <span>Domestic Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </a>
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
                  <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors outline-none">
                    <span>Weekend Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </a>
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
                  <a href="#" className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded transition-colors outline-none">
                    <span>Backpacking Trips</span>
                    <ChevronDown className="h-4 w-12" />
                  </a>
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
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Corporate Tours</span>
            </a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              <span>Customise Trip</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
