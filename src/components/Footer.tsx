import { Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TravelWisdomLogo from "@/assets/travel-wisdom-logo.png";
import PaymentMode from "@/assets/paymentmode.webp";

const Footer = () => {
    // Content Data for the white bottom section
    const companyName = "Travel Wisdom";
    const tagline = "Pack Light But Right"; // Derived from the HTML logo image alt text
    const copyrightText = "2020-2025 Travel Wisdom Community Private Limited. All Rights Reserved.";
    
    // Links content derived from the provided HTML
    const companyLinks = [
        { name: "About us", href: "/about-us" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Our Blogs", href: "/Blogs" },
    ];
    const weekendTrips = [
        { name: "Chopta Tungnath", href: "/trip/chopta-tungnath-deoriatal" },
        { name: "Manali Sissu", href: "/trip/manali-sissu" },
        { name: "Manali Sissu Kasol", href: "/trip/manali-sissu-kasol" },
        { name: "Jibhi & Tirthan Valley", href: "/trip/jibhi-tirthan-valley" },
        { name: "Kasol Kheerganga", href: "/trip/kasol-kheerganga-trek" },
        { name: "Mcleodganj Triund", href: "/trip/mcleodganj-triund-trek" }
    ];
    const internationalTrips = [
        { name: "Vietnam", href: "/vietnam" },
        { name: "Thailand", href: "/thailand" },
        { name: "Kazakhstan", href: "/kazakhstan" },
        { name: "Bali", href: "/bali" },
        { name: "Dubai", href: "/dubai" },
        { name: "Bhutan", href: "/bhutan" }
    ];
    const quickLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-&-condition" },
        { name: "Cancellation & Refund Policy", href: "/Cancellation-and-Refund-Policy" },
        { name: "Reviews", href: "/reviews" }
    ];
    const backpackingTrips = [
        { name: "Spiti Valley", href: "/spiti" },
        { name: "Leh & Ladakh", href: "/leh-ladakh" },
        { name: "Himachal Backpacking", href: "/himachal-backpacking" },
        { name: "Meghalaya", href: "/meghalaya-backpacking" }
    ];
    const domesticTrips = [
        { name: "Himachal", href: "/himachal-pradesh" },
        { name: "Kashmir", href: "/kashmir" },
        { name: "Kerala", href: "/kerala" },
        { name: "Rajasthan", href: "/rajasthan" },
        { name: "Uttarakhand", href: "/uttarakhand" }
    ];
    const contactPhone = "+91-9917545446";
    const contactEmail = "info@travelwisdom.in";

    // Helper component for link columns
    const LinkColumn = ({ title, links }) => (
        <div>
            <h4 className="text-lg font-semibold mb-4 text-[#75AADB]">{title}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href} className="text-sm hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    // Helper component for quick links (which are structured differently in the HTML)
    const QuickLinkColumn = ({ title, links }) => (
        <div>
            <h4 className="text-lg font-semibold mb-4 text-[#75AADB]">{title}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href} className="text-sm hover:text-white transition-colors block">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

  return (
    // Main container set to the dark blue background color
    <footer className="bg-[#0B3A55] text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Mobile: Organized layout */}
        <div className="md:hidden">
            {/* Contact first on mobile */}
            <div className="mb-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-[#75AADB]">Contact Us</h4>
                <div className="space-y-2">
                    <a href={`tel:${contactPhone}`} className="block text-lg font-medium text-white hover:text-[#75AADB] transition-colors">
                        {contactPhone}
                    </a>
                    <a href={`mailto:${contactEmail}`} className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                        {contactEmail}
                    </a>
                </div>
            </div>
            
            {/* Links in 2-column grid */}
            <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                    <LinkColumn title="Company" links={companyLinks} />
                    <LinkColumn title="Domestic" links={domesticTrips} />
                    <QuickLinkColumn title="Quick Links" links={quickLinks} />
                </div>
                <div className="space-y-4">
                    <LinkColumn title="Weekend Trips" links={weekendTrips} />
                    <LinkColumn title="International" links={internationalTrips} />
                    <LinkColumn title="Backpacking" links={backpackingTrips} />
                </div>
            </div>
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden md:block">
            {/* TOP ROW OF LINKS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <LinkColumn title="Company" links={companyLinks} />
                <LinkColumn title="Weekend Trips" links={weekendTrips} />
                <LinkColumn title="International" links={internationalTrips} />
                <QuickLinkColumn title="Quick Links" links={quickLinks} />
            </div>

            {/* SECOND ROW OF LINKS & CONTACT INFO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                <LinkColumn title="Backpacking Trips" links={backpackingTrips} />
                <LinkColumn title="Domestic" links={domesticTrips} />
                <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold mb-4 text-[#75AADB]">Contact Us</h4>
                    <div className="space-y-3 text-sm text-primary-foreground/80">
                        <a href={`tel:${contactPhone}`} className="hover:text-white transition-colors block">
                            {contactPhone}
                        </a>
                        <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors block">
                            {contactEmail}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        {/* --- WHITE BOTTOM STRIP --- */}
        <div className="bg-white w-full rounded-lg mt-8 md:mt-12 py-4 md:py-6 px-4 md:px-8 shadow-2xl text-gray-800">
          <div className="flex flex-col space-y-4 text-sm">
            
            {/* Mobile: Compact layout */}
            <div className="md:hidden">
              {/* Top row: Logo and Social */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img 
                      src={TravelWisdomLogo} 
                      alt={companyName} 
                      className="w-12 h-10 object-contain"
                      loading="lazy"
                      decoding="async"
                  />
                  <div>
                    <p className="font-bold text-sm">{companyName}</p>
                    <p className="text-xs text-gray-600">{tagline}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button asChild size="sm" className="h-8 w-8 p-0 text-white bg-[#E4405F] hover:bg-[#E4405F]/90 rounded-full">
                    <a target="_blank" href="https://www.instagram.com/travelwisdom.in/"><Instagram className="h-3 w-3" /></a>
                  </Button>
                  <Button asChild size="sm" className="h-8 w-8 p-0 text-white bg-[#0077B5] hover:bg-[#0077B5]/90 rounded-full">
                    <a target="_blank" href="https://www.linkedin.com/in/travel-wisdom-034a45382/"><Linkedin className="h-3 w-3" /></a>
                  </Button>
                  <Button asChild size="sm" className="h-8 w-8 p-0 text-white bg-[#25D366] hover:bg-[#25D366]/90 rounded-full">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=919971545446"><MessageCircle className="h-3 w-3" /></a>
                  </Button>
                </div>
              </div>
              
              {/* Payment Icons */}
              <div className="flex justify-center mb-3">
                <img src={PaymentMode} alt="payment" className="max-w-[180px] h-auto" loading="lazy" decoding="async" />
              </div>
              
              {/* Copyright Text */}
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                  {copyrightText}
              </p>
            </div>
            
            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex justify-between items-center">
              {/* Logo & Tagline */}
              <div className="flex flex-col items-center">
                <img 
                    src={TravelWisdomLogo} 
                    alt={companyName} 
                    className="w-20 h-15 object-contain"
                    loading="lazy"
                    decoding="async"
                />
                <p className="font-bold text-sm">{companyName}</p>
                <p className="text-xs text-gray-600">{tagline}</p>
              </div>

              {/* Payment Icons & Copyright Text */}
              <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="border-b-2 border-gray-200 pb-2">
                    <img src={PaymentMode} alt="payment" loading="lazy" decoding="async" />
                  </div>
                  <p className="text-sm text-gray-600">
                      {copyrightText}
                  </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-2 justify-center">
                <Button asChild size="sm" className="h-9 w-9 p-0 text-white bg-[#E4405F] hover:bg-[#E4405F]/90 rounded-full">
                  <a target="_blank" href="https://www.instagram.com/travelwisdom.in/"><Instagram className="h-5 w-5" /></a>
                </Button>
                <Button asChild size="sm" className="h-9 w-9 p-0 text-white bg-[#0077B5] hover:bg-[#0077B5]/90 rounded-full">
                  <a target="_blank" href="https://www.linkedin.com/in/travel-wisdom-034a45382/"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button asChild size="sm" className="h-9 w-9 p-0 text-white bg-[#25D366] hover:bg-[#25D366]/90 rounded-full">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=919971545446"><MessageCircle className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;