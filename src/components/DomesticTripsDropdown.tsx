import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const DomesticTripsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = [
    {
      name: 'Himalayan',
      destinations: [
        { name: 'Himachal Pradesh', path: '/himachal-pradesh' },
        { name: 'Uttarakhand', path: '/uttarakhand' },
        { name: 'Kashmir', path: '/kashmir' },
        { name: 'Ladakh', path: '/ladakh' },
        { name: 'Sikkim', path: '/sikkim' },
        { name: 'Arunachal Pradesh', path: '/arunachal-pradesh' }
      ]
    },
    {
      name: 'North East',
      destinations: [
        { name: 'Meghalaya', path: '/meghalaya' },
        { name: 'Assam', path: '/assam' },
        { name: 'Nagaland', path: '/nagaland' },
        { name: 'Manipur', path: '/manipur' },
        { name: 'Mizoram', path: '/mizoram' },
        { name: 'Tripura', path: '/tripura' },
        { name: 'Arunachal Pradesh', path: '/arunachal-pradesh' }
      ]
    },
    {
      name: 'South',
      destinations: [
        { name: 'Kerala', path: '/kerala' },
        { name: 'Karnataka', path: '/karnataka' },
        { name: 'Tamil Nadu', path: '/tamil-nadu' },
        { name: 'Andhra Pradesh', path: '/andhra-pradesh' },
        { name: 'Telangana', path: '/telangana' },
        { name: 'Pondicherry', path: '/pondicherry' }
      ]
    },
    {
      name: 'West',
      destinations: [
        { name: 'Rajasthan', path: '/rajasthan' },
        { name: 'Gujarat', path: '/gujarat' },
        { name: 'Maharashtra', path: '/maharashtra' },
        { name: 'Goa', path: '/goa' },
        { name: 'Madhya Pradesh', path: '/madhya-pradesh' }
      ]
    },
    {
      name: 'East',
      destinations: [
        { name: 'West Bengal', path: '/west-bengal' },
        { name: 'Odisha', path: '/odisha' },
        { name: 'Jharkhand', path: '/jharkhand' },
        { name: 'Bihar', path: '/bihar' }
      ]
    },
    {
      name: 'Central',
      destinations: [
        { name: 'Uttar Pradesh', path: '/uttar-pradesh' },
        { name: 'Chhattisgarh', path: '/chhattisgarh' },
        { name: 'Madhya Pradesh', path: '/madhya-pradesh' }
      ]
    }
  ];

  return (
    <div className="relative" onMouseLeave={() => {
      setIsOpen(false);
      setActiveRegion(null);
    }}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild onMouseEnter={() => setIsOpen(true)}>
          <div className="flex items-center gap-1 px-3 py-2 rounded transition-colors cursor-pointer hover:bg-[#0a2e44] outline-none">
            <span>Domestic Trips</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-[800px] p-0 bg-white shadow-lg rounded-b-lg border-t-2 border-[#0B3A55]"
          onMouseLeave={() => setActiveRegion(null)}
        >
          <div className="flex">
            {/* Region List */}
            <div className="w-1/3 bg-gray-50 border-r">
              {regions.map((region) => (
                <div 
                  key={region.name}
                  className={`px-4 py-3 cursor-pointer ${activeRegion === region.name ? 'bg-white text-[#0B3A55] font-medium' : 'hover:bg-gray-100'}`}
                  onMouseEnter={() => setActiveRegion(region.name)}
                >
                  {region.name}
                </div>
              ))}
            </div>
            
            {/* Destinations */}
            <div className="w-2/3 p-4">
              {activeRegion ? (
                <div className="grid grid-cols-2 gap-2">
                  {regions.find(r => r.name === activeRegion)?.destinations.map((dest) => (
                    <DropdownMenuItem key={dest.path} asChild className="p-0">
                      <Link 
                        to={dest.path} 
                        className="block px-3 py-2 text-sm rounded hover:bg-gray-100 w-full text-left"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveRegion(null);
                        }}
                      >
                        {dest.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-sm p-4">
                  Hover over a region to see destinations
                </div>
              )}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DomesticTripsDropdown;
