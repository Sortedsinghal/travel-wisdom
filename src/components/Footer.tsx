import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import TravelWisdomLogo from "@/travel-wisdom-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={TravelWisdomLogo} 
                alt="Travel Wisdom" 
                className="h-20 object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted travel companion for unforgettable journeys. Explore the world with confidence and create memories that last a lifetime.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-tropical transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Trip Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Trip Categories</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-tropical transition-colors">Backpacking Trips</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Weekend Getaways</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">International Tours</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Adventure Treks</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Honeymoon Packages</a></li>
              <li><a href="#" className="hover:text-tropical transition-colors">Corporate Tours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-8 w-8 text-tropical" />
                <span className="text-sm">Plot No 157, Sectror 28, Part-2, Bamnoli, Sector 28 Dwarka, Dwarka, New Delhi, Delhi, 110077</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-tropical" />
                <a href="tel:+918076602635" className="text-sm hover:text-tropical transition-colors">
                  +91 9971545446
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-tropical" />
                <a href="mailto:info@travelwisdom.com" className="text-sm hover:text-tropical transition-colors">
                  info@travelwisdom.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; 2024 Travel Wisdom. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;