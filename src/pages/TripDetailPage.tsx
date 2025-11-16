// src/pages/TripDetailPage.tsx
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { allTrips, Trip } from '@/data/trips'; // Import your centralized data and Trip type
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm'; // Assuming you have this
import { QueryForm } from '@/components/QueryForm';
import PopupForm from '@/components/PopupForm';
import NotFound from './NotFound'; // Import your 404 page
import { Clock, MapPin, Star, ChevronDown, ChevronUp, Phone, MessageSquare, Send, Youtube, Linkedin, Instagram, X, FileText } from 'lucide-react'; // <-- IMPORTED X and FileText icons

// --- Reusable UI Components (Adapted from HimachalBackpacking.tsx) ---

// Itinerary Item Component (Slightly adapted to check for content)
const ItineraryItem: React.FC<{ item: { day: number | string; title: string; content?: string; description?: string }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    // Use item.content primarily, fallback to item.description if needed (like from trips.ts initial structure)
    const displayContent = item.content || item.description || '<p>Details coming soon.</p>'; // Ensure there's always some content

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button onClick={onClick} className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                    <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{typeof item.day === 'number' ? `Day ${item.day}` : item.day}</span>
                    <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.title}</h3>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200">
                    <div className="content-display max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: displayContent }} />
                </div>
            )}
        </div>
    );
};


// Booking Box with occupancy pricing - FINALIZED TO MATCH ALL SCREENSHOTS
const BookingBox: React.FC<{ trip: Trip; onShowPopupForm: () => void }> = ({ trip, onShowPopupForm }) => {
    // Set default to Quad to match the screenshot's selected tab, but restore functionality
    const [selectedOccupancy, setSelectedOccupancy] = useState<'double' | 'triple' | 'Quad'>('Quad'); 
    
    // Check if trip is international (Vietnam, Thailand, etc.)
    const isInternational = ['Vietnam', 'Thailand', 'Dubai', 'Bali', 'Singapore', 'Malaysia', 'Kazakhstan', 'Bhutan', 'Georgia'].includes(trip.destination);
    
    // Extract numeric price from trip.price (assuming format like "₹25,999")
    const numericPrice = parseInt(trip.price.replace(/[^0-9]/g, ''));
    
    // Keep the original pricing logic based on the generic price in `trip.price` (assumed to be the highest/default)
    const doubleOccupancyPrice = numericPrice;
    const tripleOccupancyPrice = numericPrice - 500; 
    const QuadOccupancyPrice = numericPrice - 1000; 
    
    const formatPrice = (price: number) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };
    
    // --- Dynamic Price Calculations for Both Boxes ---
    
    // 1. Calculate the price for the currently selected occupancy (for Price Summary table)
    let currentPrice: number;
    let currentOriginalPrice: number;
    let currentOccupancyName: string;

    if (selectedOccupancy === 'double') {
        currentPrice = doubleOccupancyPrice;
        currentOriginalPrice = doubleOccupancyPrice + 500; 
        currentOccupancyName = 'Double Occupancy';
    } else if (selectedOccupancy === 'triple') {
        currentPrice = tripleOccupancyPrice;
        currentOriginalPrice = tripleOccupancyPrice + 500;
        currentOccupancyName = 'Triple Occupancy';
    } else { // Quad is the default/screenshot mode
        currentPrice = QuadOccupancyPrice;
        currentOriginalPrice = QuadOccupancyPrice + 500;
        currentOccupancyName = 'Quad Occupancy';
    }

    // 2. Calculate the price specifically for the Starting Price box (fixed to Quad Sharing visually)
    const topBoxPrice = formatPrice(QuadOccupancyPrice);
    const topBoxOriginalPrice = formatPrice(QuadOccupancyPrice + 500); // Apply the fixed discount logic

    return (
        <div className="sticky top-24">
            
            {/* --- START: Section 1 (Starting Price) - MATCHES SCREENSHOT (Top Box) --- */}
            <div className={`border bg-white p-6 rounded-2xl shadow-xl mb-6`}>
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xl font-bold">Starting Price</p>
                    {/* Hardcoded discount value to match screenshot */}
                </div>
                
                <div className="mt-2 mb-4 flex items-baseline">
                    {/* Use dynamically calculated Quad prices for consistency */}
                    <span className="text-4xl font-bold text-gray-900 mr-2">
                        {topBoxPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                        {topBoxOriginalPrice}
                    </span>
                </div>
                
                <p className="text-base text-gray-700 font-medium mb-6">Per Person on Quad Sharing Occupancy</p>

                {/* Send Query Here Button */}
                <button 
                   className="mt-2 flex items-center justify-center gap-2 text-base w-full bg-[#0B3A55] text-white font-bold py-3 rounded-xl hover:bg-[#5B92A7] transition-colors shadow-lg"
                   onClick={onShowPopupForm} 
                >
                    Send Query Here
                </button>
            </div>
            {/* --- END: Section 1 --- */}

            {/* --- START: Section 2 (Price Summary) - MATCHES SCREENSHOT (Bottom Box) --- */}
            <div className={`border bg-white p-6 rounded-2xl shadow-xl`}>
                {/* Price Summary Header */}
                {/* NOTE: Adjusting spacing here to match the screenshot's precise margin/padding */}
                <h3 className="text-xl font-bold text-gray-900 pb-2 mb-2">Price Summary</h3>
                <div className="border-b border-gray-200 mb-4" /> 
                
                {/* Occupancy Header Row - MATCHES SCREENSHOT BORDERS AND ALIGNMENT */}
                <div className="flex justify-start items-center text-sm font-semibold text-gray-500 pb-2">
                    {/* Occupancy Label */}
                    <span className="w-1/2 text-gray-900">Occupancy</span>
                    
                    {/* Interactive Tabs */}
                    <div className="flex justify-start gap-4 w-1/2">
                        {/* Quad Button */}
                        <button
                            onClick={() => setSelectedOccupancy('Quad')}
                            className={`font-semibold text-sm pb-1 transition-colors ${
                                selectedOccupancy === 'Quad' ? 'text-[#0B3A55] border-b-2 border-[#0B3A55]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Quad
                        </button>
                        {/* Triple Button */}
                        <button
                            onClick={() => setSelectedOccupancy('triple')}
                            className={`font-semibold text-sm pb-1 transition-colors ${
                                selectedOccupancy === 'triple' ? 'text-[#0B3A55] border-b-2 border-[#0B3A55]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Triple
                        </button>
                        {/* Double Button */}
                        <button
                            onClick={() => setSelectedOccupancy('double')}
                            className={`font-semibold text-sm pb-1 transition-colors ${
                                selectedOccupancy === 'double' ? 'text-[#0B3A55] border-b-2 border-[#0B3A55]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Double
                        </button>
                    </div>
                </div>
                {/* Thin line below the occupancy tabs matching the screenshot */}
                <div className="border-b border-gray-200 mb-4" />


                {/* Price Row (Dynamic) - Wrapped in container with specific borders */}
                {/* NOTE: Adjusted margins/padding to better match the tight spacing of the screenshot's Quad Occupancy box */}
                <div className="border border-gray-300 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-700">{currentOccupancyName}</p>
                        <div className="text-right">
                            {/* Dynamic Original Price */}
                            <span className="text-sm text-gray-500 line-through block">{formatPrice(currentOriginalPrice)}</span>
                             {/* Dynamic Current Price */}
                            <span className="text-xl font-bold text-gray-900 block">{formatPrice(currentPrice)}</span>
                            <span className="text-xs text-gray-600 block">Per Person</span>
                        </div>
                    </div>
                </div>

                {/* REMOVED: Book Now Button (as per latest request) */}
                
                {/* Contact Buttons (Secondary Style) - Adjusted mt-6 to mt-4 for tighter spacing */}
                 <div className="flex gap-3 mt-4">
                    {/* Whatsapp Button */}
                    <a 
                        href="https://api.whatsapp.com/send?phone=919971545446&text=Hi" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-white text-gray-800 font-bold py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp text-green-500" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                        Whatsapp
                    </a>
                    {/* Get PDF Button */}
                    <button 
                        onClick={onShowPopupForm} 
                        className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-white text-gray-800 font-bold py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        <FileText className="w-4 h-4 text-[#0B3A55]" />
                        Get PDF Itinerary
                    </button>
                </div>
            </div>
            {/* --- END: Section 2 --- */}
        </div>
    );
};

// --- NEW GALLERY MODAL COMPONENT (Defined in-file) ---
interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      
      <div 
        className="relative w-full max-w-4xl max-h-full bg-white rounded-lg shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <div className="p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Trip Gallery</h2>
            <div className="space-y-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto object-contain rounded-lg shadow-md max-h-[80vh]"
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
// --- END GALLERY MODAL ---


// --- Main Page Component ---
const TripDetailPage = () => {
  const { tripSlug } = useParams<{ tripSlug: string }>();
  const [openItinerary, setOpenItinerary] = useState(0); // Open Day 0 by default
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false); // <-- STATE FOR OVERVIEW
  const [showGalleryModal, setShowGalleryModal] = useState(false); // <-- STATE FOR GALLERY MODAL
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // <-- STATE FOR CURRENT IMAGE

  // Find the trip based on the slug
  const trip: Trip | undefined = tripSlug ? allTrips.find(t => t.slug === tripSlug) : undefined;

  // Handle trip not found
  if (!trip) {
    return <NotFound />;
  }

  // --- UPDATED GALLERY LOGIC ---
  // desktopGridImages uses the first 4 from the gallery array, or fallback
  const desktopGridImages = (trip.gallery && trip.gallery.length >= 4
          ? trip.gallery.slice(0, 4) // Use first 4 from the new gallery array
          : [trip.imageUrl, trip.imageUrl, trip.imageUrl, trip.imageUrl]); // Fallback

  // allGalleryImages is used for the mobile slider AND the modal
  const allGalleryImages = [
      trip.imageUrl,
      ...(trip.gallery && trip.gallery.length > 0 ? trip.gallery : [trip.imageUrl, trip.imageUrl, trip.imageUrl])
  ];
  // --- END UPDATED GALLERY LOGIC ---


   // Dynamic features based on trip category - always 6 features total
    const getFeatures = () => {
        const standardFeatures = [
            { name: 'Explorations', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/13075920241021125921.png' },
            { name: 'Bonfire', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/5910920241021125745.png' },
            { name: 'Transfers', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/41278020241021125603.png' },
            { name: 'Meals', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/17264920241021125723.png' },
            { name: 'Stay', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/21556120241021125642.png' }
        ];
        
        const dynamicFeatures = [];
        const categoryText = (trip.category || trip.title).toLowerCase();
        
        // Add camping for most outdoor/nature trips
        if (categoryText.includes('camping') || categoryText.includes('backpacking') || 
            categoryText.includes('desert') || categoryText.includes('safari') || 
            categoryText.includes('adventure') || categoryText.includes('outdoor') ||
            categoryText.includes('rajasthan') || categoryText.includes('jaisalmer') ||
            categoryText.includes('pushkar') || categoryText.includes('nature') ||
            categoryText.includes('wildlife') || categoryText.includes('forest')) {
            dynamicFeatures.push({ name: 'Camping', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/39205420241021125812.png' });
        }
        
        // Add trekking for most mountain/nature/adventure destinations
        if (categoryText.includes('trek') || categoryText.includes('mountain') || 
            categoryText.includes('hill') || categoryText.includes('hiking') || 
            categoryText.includes('adventure') || categoryText.includes('himachal') || 
            categoryText.includes('uttarakhand') || categoryText.includes('kashmir') || 
            categoryText.includes('spiti') || categoryText.includes('ladakh') ||
            categoryText.includes('munnar') || categoryText.includes('kerala') ||
            categoryText.includes('meghalaya') || categoryText.includes('bhutan') ||
            categoryText.includes('nature') || categoryText.includes('explorer') ||
            categoryText.includes('retreat') || categoryText.includes('escape')) {
            dynamicFeatures.push({ name: 'Trekking', icon: 'https://d2qa7a8q0vuocm.cloudfront.net/images/11999820241021130308.png' });
        }
        
        return [...standardFeatures, ...dynamicFeatures].slice(0, 6);
    };
    
    const features = getFeatures();

    // Placeholder Things to Pack (Using original placeholder, assuming trips.ts data uses simple strings)
    const thingsToPack = [
        { text: "Good quality rucksack & day bag with rain-cover.", icon: '/cloned_media/5261020250821080750.png' },
        { text: "Trekking/sports shoes with good grip, socks & floaters.", icon: '/cloned_media/7672820250825123523.png' },
        { text: "Appropriate clothing layers (jacket, fleece, thermals etc.) based on destination & season.", icon: '/cloned_media/9170920250825123607.png' },
        { text: "Personal care items (sunscreen, lip balm, toiletries).", icon: '/cloned_media/14435720250825123645.png' },
        { text: "Personal medication & basic first-aid kit.", icon: '/cloned_media/11222620250825123717.png' },
        { text: "Valid Government ID proofs.", icon: '/cloned_media/528220250825123752.png' },
        { text: "Sunglasses, charger, power bank, quick dry towel, cash, snacks, water bottle.", icon: '/cloned_media/7654520250825123857.png' }
      ];



     // Placeholder Related Trips (Fetch dynamically based on destination/category later)
     const relatedTrips = allTrips
        .filter(related => related.destination === trip.destination && related.slug !== trip.slug)
        .slice(0, 4); // Show up to 4 related trips from the same destination

     const navLinks = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'ThingsToPack'];


  return (
    <div className="bg-gray-100 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 pt-4 sm:pt-8 pb-20 lg:pb-8">
        {/* Mobile-only Gallery */}
        <div className="lg:hidden mb-4 relative"> {/* <-- ADDED relative */}
           <div className="overflow-x-auto snap-x snap-mandatory flex gap-2" 
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const imageWidth = e.currentTarget.scrollWidth / allGalleryImages.length;
                  const newIndex = Math.round(scrollLeft / imageWidth);
                  setCurrentImageIndex(newIndex);
                }}>
                {allGalleryImages.map((img, i) => ( // Use allGalleryImages
                    <img key={i} src={img} className="snap-center flex-shrink-0 w-full h-64 object-cover rounded-lg shadow-md" alt={`${trip.title} scenery ${i+1}`} />
                ))}
           </div>
           
           {/* Chevron Navigation */}
           <button
             onClick={() => {
               const newIndex = Math.max(0, currentImageIndex - 1);
               setCurrentImageIndex(newIndex);
               document.querySelector('.overflow-x-auto')?.scrollTo({ left: newIndex * window.innerWidth, behavior: 'smooth' });
             }}
             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-md"
           >
             <ChevronDown className="w-4 h-4 rotate-90" />
           </button>
           <button
             onClick={() => {
               const newIndex = Math.min(allGalleryImages.length - 1, currentImageIndex + 1);
               setCurrentImageIndex(newIndex);
               document.querySelector('.overflow-x-auto')?.scrollTo({ left: newIndex * window.innerWidth, behavior: 'smooth' });
             }}
             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-md"
           >
             <ChevronDown className="w-4 h-4 -rotate-90" />
           </button>
           
           {/* Dots Indicator */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
             {allGalleryImages.map((_, i) => (
               <button
                 key={i}
                 onClick={() => {
                   setCurrentImageIndex(i);
                   document.querySelector('.overflow-x-auto')?.scrollTo({ left: i * window.innerWidth, behavior: 'smooth' });
                 }}
                 className={`w-2 h-2 rounded-full transition-colors ${
                   i === currentImageIndex ? 'bg-gray-800' : 'bg-white/60'
                 }`}
               />
             ))}
           </div>
           
           {/* --- ADDED MOBILE "SEE ALL" BUTTON --- */}
           <button
             onClick={() => setShowGalleryModal(true)}
             className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold py-1 px-3 rounded-lg shadow-md text-sm"
           >
             See All
           </button>
        </div>

        {/* Desktop Gallery */}
        <header className="hidden lg:block mb-6">
          <div className="flex gap-2 h-[500px]">
            <div className="w-3/5">
              <img src={trip.imageUrl} className="w-full h-full object-cover rounded-l-2xl shadow-lg" alt={`Main view of ${trip.title}`}/>
            </div>
            {/* --- UPDATED DESKTOP GALLERY GRID --- */}
            <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
              {desktopGridImages.map((img, i) => ( // Use desktopGridImages
                <div key={i} className="relative w-full h-full"> {/* Wrapper */}
                  <img
                    src={img}
                    className={`w-full h-full object-cover shadow-lg ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`} // Corrected rounding
                    alt={`${trip.title} gallery image ${i + 1}`}
                  />
                  {i === 3 && ( // Overlay on the 4th image (index 3)
                    <button
                      onClick={() => setShowGalleryModal(true)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50 text-white font-bold text-lg hover:bg-black/70 transition-colors rounded-br-2xl"
                    >
                      See All
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </header>

         <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8">
             {/* --- Mobile Title & Info Box --- */}
            <div className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:hidden mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{trip.title}</h1>
                <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-t border-b border-gray-100">
                    <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <Clock className="w-6 h-6 text-[#0B3A55] mb-1"/>
                        <p className="text-xs text-gray-600">Trip Duration</p>
                        <p className="font-semibold text-sm">{trip.duration}</p>
                    </div>
                     <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#0B3A55] mb-1"/>
                         {/* Assuming pickupDrop is not in Trip interface yet, using Destination */}
                        <p className="text-xs text-gray-600">Destination</p>
                        <p className="font-semibold text-sm">{trip.destination}</p>
                    </div>
                </div>
                 {/* Mobile Features Display - MATCHES SCREENSHOT 1 */}
                 <div className="grid grid-cols-3 gap-2 mt-4">
                    {features.map(feature => ( 
                        <div key={feature.name} className="flex items-center text-left">
                            {/* NOTE: Using img tag with source from page source/screenshot data */}
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6 mr-2"/>
                            <span className="text-sm font-medium text-gray-800">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Desktop Title & Info Box --- */}
            <div className="hidden lg:block border bg-white p-6 rounded-2xl shadow-lg mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{trip.title}</h1>
                 <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Clock className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                        <div>
                            <p className="text-sm text-gray-600">Trip Duration</p>
                            <p className="font-semibold">{trip.duration}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <MapPin className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                        <div>
                           {/* Assuming pickupDrop is not in Trip interface yet, using Destination */}
                            <p className="text-sm text-gray-600">Destination</p>
                            <p className="font-semibold">{trip.destination}</p>
                        </div>
                    </div>
                    {/* Placeholder Category - Ideally add to trips.ts */}
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0B3A55] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        <div>
                            <p className="text-sm text-gray-600">Trip Category</p>
                            <p className="font-semibold">Backpacking / Leisure</p>
                        </div>
                    </div>
                </div>
                 {/* Desktop Features Display - MATCHES SCREENSHOT 1 (Desktop layout uses flex wrap with gap) */}
                 <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6 pt-4 border-t border-gray-100">
                    {features.map(feature => ( 
                        <div key={feature.name} className="flex items-center gap-2">
                            {/* NOTE: Using img tag with source from page source/screenshot data */}
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6"/>
                            <span className="font-medium text-gray-800">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Sticky Navigation --- */}
             <div className="hidden lg:block sticky top-20 z-30 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-6 p-2">
                <div className="flex justify-around">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-[#0B3A55] transition-colors px-3 py-2 rounded-lg text-sm">
                            {link.replace(/([A-Z])/g, ' $1').trim()} {/* Add space before capital letters */}
                        </a>
                    ))}
                </div>
            </div>

            {/* --- Content Sections --- */}
            <div className="space-y-6">
              {/* --- UPDATED OVERVIEW SECTION --- */}
              <div id="overview" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Overview</h2>
                <div className={`relative ${isOverviewExpanded ? '' : 'max-h-64 overflow-hidden'}`}>
                  <div 
                    className="content-display max-w-none text-gray-600" 
                    dangerouslySetInnerHTML={{ __html: trip.overview || '<p>Detailed overview coming soon.</p>' }} 
                  />
                  {!isOverviewExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>
                <button
                  onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                  className="text-sm font-semibold text-[#0B3A55] hover:underline mt-4"
                >
                  {isOverviewExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>

              <div id="itinerary" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {trip.itinerary && trip.itinerary.length > 0 && trip.itinerary[0].title !== 'Trip Details' && trip.itinerary[0].title !== 'Placeholder Title' ? (
                     trip.itinerary.map((item, index) => (
                      <ItineraryItem
                        key={index}
                        // Pass the correct structure expected by ItineraryItem
                        item={{ day: item.day, title: item.title, description: item.description }}
                        isOpen={openItinerary === index}
                        onClick={() => setOpenItinerary(openItinerary === index ? -1 : index)}
                      />
                    ))
                  ) : (
                     <p className="text-gray-600 italic">Detailed itinerary coming soon. Contact us for more details!</p>
                  )}
                </div>
              </div>

              {/* --- REVERTED INCLUSIONS SECTION --- */}
              <div id="inclusions" className="border bg-green-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-4">Inclusions ✅</h2>
                  {trip.inclusions && trip.inclusions.length > 0 ? (
                    // Reverted to mapping the string[]
                    <ul className="content-display max-w-none text-gray-700 list-disc pl-5 space-y-1">
                        {trip.inclusions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className="text-gray-600 italic">Details coming soon.</p>
                  )}
              </div>

              {/* --- REVERTED EXCLUSIONS SECTION --- */}
              <div id="exclusions" className="border bg-red-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                   <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-200 pb-3 mb-4">Exclusions ❌</h2>
                   {trip.exclusions && trip.exclusions.length > 0 ? (
                       // Reverted to mapping the string[]
                       <ul className="content-display max-w-none text-gray-600 list-disc pl-5 space-y-1">
                           {trip.exclusions.map((item, index) => <li key={index}>{item}</li>)}
                       </ul>
                   ) : (
                      <p className="text-gray-600 italic">Details coming soon.</p>
                   )}
              </div>

               <div id="thingstopack" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Things To Pack 🎒</h2>
                  <div className="space-y-4">
                      {thingsToPack.map((item, index) => ( // Using placeholder thingsToPack
                          <div key={index} className="flex items-start gap-4">
                              <img src={item.icon} alt="packing icon" className="w-8 h-8 flex-shrink-0 mt-1"/>
                              <p className="text-gray-600 text-sm">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>


            </div>
          </div>

          {/* --- Sticky Sidebar (Right Column) --- */}
          <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <BookingBox trip={trip} onShowPopupForm={() => setShowPopupForm(true)} />
              </div>
          </aside>
        </div>

        {/* --- Related Trips --- */}
        {relatedTrips.length > 0 && (
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">More Trips in {trip.destination} 🗺️</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {relatedTrips.map((relatedTrip, index) => (
                        <Link to={`/trip/${relatedTrip.slug}`} key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl block">
                            <img src={relatedTrip.imageUrl} alt={relatedTrip.title} className="w-full h-32 sm:h-40 object-cover"/>
                            <div className="p-3 sm:p-4">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-2 min-h-[3rem] leading-relaxed">{relatedTrip.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">Starting <span className="font-bold text-[#0B3A55]">{relatedTrip.price}</span></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
      </main>



       <Footer />
       <QueryForm 
         isOpen={showQueryForm} 
         onClose={() => setShowQueryForm(false)} 
         tripName={trip.title}
       />
       <PopupForm 
         isOpen={showPopupForm} 
         onClose={() => setShowPopupForm(false)}
         trip={trip}
       />

       {/* --- ADDED GALLERY MODAL --- */}
       <GalleryModal
          isOpen={showGalleryModal}
          onClose={() => setShowGalleryModal(false)}
          images={allGalleryImages} // Pass all images to the modal
       />
    </div>
  );
};

export default TripDetailPage;