import React, { useState } from 'react';
// Assuming Header and Footer components exist in your project structure
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryForm } from '@/components/QueryForm';
import { Clock, MapPin, Star, ChevronDown, ChevronUp, Phone, MessageSquare, Send, Youtube, Linkedin, Instagram } from 'lucide-react';

// --- Static Data extracted from the Himachal trip source ---
// This data remains unchanged from your provided code
const tripData = {
  title: 'Himachal Backpacking - Manali Kasol Jibhi',
  duration: '5 Days 4 Nights',
  pickupDrop: 'Delhi-Delhi',
  category: 'Backpacking Trips',
  pricing: {
    startPrice: '12,500',
    originalPriceQuad: '14,000',
    originalPriceTriple: '15,000',
    originalPriceDouble: '17,000',
    discount: '1,500',
    quad: '12,500',
    triple: '13,500',
    double: '15,000',
  },
  mainImageDesktop: '/cloned_media/13464920240827063621.png',
  galleryImages: [
    '/cloned_media/20559820230315061806.png',
    '/cloned_media/42136120230315061806.png',
    '/cloned_media/20903920230315061806.png',
    '/cloned_media/38986820230315061806.png',
  ],
  mobileGallery: [
      '/cloned_media/20559820230315061806.png',
      '/cloned_media/42136120230315061806.png',
      '/cloned_media/20903920230315061806.png',
      '/cloned_media/38986820230315061806.png',
      '/cloned_media/9820920230315061806.png',
      '/cloned_media/2153920230705060501.png',
      '/cloned_media/37298820230705060501.png',
  ],
  features: [
    { name: 'Stay', icon: '/cloned_media/21556120241021125642.png' },
    { name: 'Transfers', icon: '/cloned_media/41278020241021125603.png' },
    { name: 'Meals', icon: '/cloned_media/17264920241021125723.png' },
    { name: 'Explorations', icon: '/cloned_media/13075920241021125921.png' },
    { name: 'Trekking', icon: '/cloned_media/11999820241021130308.png' },
    { name: 'River Rafting', icon: '/cloned_media/37869120241022084208.png' },
  ],
  overview: `<p>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass. The town of Manali is just a starting point for our trip - we explore the nearby hills, valleys and hidden gems of Himachal Pradesh. There's so much to see and do here!</p>`,
  itinerary: [
    { day: "Day 0", title: "Delhi to Manali | Overnight Journey", content: "<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain.</li><li>Start an overnight journey to Manali and socialize with your co-travellers.</li></ul>" },
    { day: "Day 1", title: "Manali Arrival | Local Exploration & Cafe Hopping", content: "<ul><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>Post leisure, head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees. Take a walk into the woods at Van Vihar and treat yourself with mouthwatering dishes at various themed cafes in Old Manali. In the evening, visit Manali’s Mall Road and spend time there by enjoying street food and shopping souvenirs.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>" },
    { day: "Day 2", title: "Drive to Sissu via Atal Tunnel & Solang Valley", content: "<ul><li>Wake up to a beautiful mountain morning and post breakfast, drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>" },
    { day: "Day 3", title: "Manali to Kasol | Kasol Arrival & Cafe Hopping", content: "<ul><li>Wake up early in the morning and post breakfast, check out from the hotel and drive towards Kasol from Manali.</li><li>Enroute Kasol, you can indulge in adventure activities like paragliding at Kullu (by your own).</li><li>After arriving in Kasol, check-in to our hotel/campsite & freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Kasol.</li></ul>" },
    { day: "Day 4", title: "Manikaran Hot Springs | Jibhi Arrival", content: "<ul><li>Wake up early in the morning and post breakfast, check out from the hotel/campsite and say goodbye to our lovely host.</li><li>Drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara & Shiva Temple.</li><li>Enroute Jibhi, you can indulge in river rafting adventure activity.</li><li>After arriving in Jibhi, check-in to our cozy homestay/hotel and quickly head out to visit the beautiful Jibhi waterfall and soak in the soothing surroundings of the place.</li><li>Savour home-style cooked dinner and overnight stay in a homestay/hotel in Jibhi/Banjar.</li></ul>" },
    { day: "Day 5", title: "Trek to Serolsar Lake | Depart for Delhi", content: "<ul><li>Wake up early in the morning and post breakfast, check out from the homestay/hotel and drive to Jalori Pass situated at 10,800 feet.</li><li>Hike to 360° Himalayan view point and get mesmerized by the stunning landscape of snow-clad Himalayas (if weather permits).</li><li>Trek further to the beautiful Serolsar Lake surrounded by lush forest cover and pay homage at Budhi Nagin Temple (if weather permits).</li><li>Post lunch, gather for an #InstaPerfect group picture, trek back to Jalori Pass and drive back to Aut.</li><li>In the evening, start-off your overnight journey to Delhi from Jibhi.</li></ul>" },
    { day: "Day 6", title: "Delhi Arrival | Trip Ends", content: "<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>" }
  ],
  inclusions: `<ul><li>Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.</li><li>4 Nights Accommodation on Sharing Basis: 2 Nights in Hotel (Manali), 1 Night in Hotel/Campsite (Kasol) & 1 Night in Hotel/Homestay (Jibhi/Banjar).</li><li>8 Meals: Manali (2 Breakfasts+2 Dinners), Kasol (Breakfast+Dinner) Jibhi (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 5.</li><li>Bonfire (if weather permits) & music only on any 3 Nights and local explorations as per itinerary.</li><li>Experienced and cool Trip Captain/Trek Guide.</li><li>River Rafting Adventure Activity on Day 4.</li><li>Driver allowances, toll taxes, parking, state taxes.</li></ul>`,
  exclusions: `<ul><li>Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.</li><li>Travel Insurance, items of a personal nature like porterage, tips, laundry etc.</li><li>Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.</li><li>Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.</li><li>Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.</li><li>Anything which is not mentioned in the above inclusions.</li><li>GST (5%) is applicable extra.</li></ul>`,
  thingsToPack: [
    { text: "Good quality rucksack (preferably 40-60 liters) & a small day bag pack (for hikes/treks purpose) with rain-cover is recommended, easy to carry trolley bag.", icon: '/cloned_media/5261020250821080750.png' },
    { text: "A pair of shoes (mainly trekking/sports) with good grip & waterproof, atleast 2 pair of socks & floaters/sandals/slippers.", icon: '/cloned_media/7672820250825123523.png' },
    { text: "Heavy down jacket, light fleece, long track/cargo pants, long/short sleeves T-shirts, body thermal wears (as per season), sun cap/hat, woolen cap & gloves (as per season), hoodie, raincoats/ponchos.", icon: '/cloned_media/9170920250825123607.png' },
    { text: "Personal care items like cold cream & moisturiser, sunscreen (preferably SPF40), lip balm, sanitary pads, toothpaste & other toiletries, wet wipes, hand sanitizer, insect repellent, body spray.", icon: '/cloned_media/14435720250825123645.png' },
    { text: "Personal medication (as prescribed by the doctor) & first-aid, sprain relief spray, glucose powder, tablets for headache, fever, diarrhea, motion sickness, dettol & cotton/bandages.", icon: '/cloned_media/11222620250825123717.png' },
    { text: "Personal documents & ID's like aadhar card, drivers license, passport or any other valid Government ID proofs.", icon: '/cloned_media/528220250825123752.png' },
    { text: "Sunglasses, charger, power bank, quick dry towel, adequate amount of cash, quick snacks/dryfruits/energy bars, trash & waterproof laundry bags, re-usable water bottle.", icon: '/cloned_media/7654520250825123857.png' }
  ],
  reviews: [
      { name: "Satyam Srivastava", rating: 5, comment: "Many thanks for making such a trip possible. The organisation, the effectiveness, the planning and on top the driver were just perfect. I felt so comfortable although being so far from home...", image: '/cloned_media/profilepic.png' },
      { name: "Aditya Bhatt", rating: 5, comment: "After a lot of research, we choose G4E for our Himachal backpacking trip. We had an awesome experience. The trip started with a group of strangers and by the end there was mixed emotions...", image: '/cloned_media/24894620230801111526.png' },
      { name: "Akash Wadhwa", rating: 5, comment: "\"*Himachal Backpacking Trip* Probably Yes! this will go as one of the best trips of our life without any doubt, a big shout out to Go4explore community for setting up an amazing trip at nominal prices...", image: '/cloned_media/159420230801111701.png' }
  ],
  relatedTrips: [
      { title: 'Himachal Pradesh', price: '₹7,000', image: '/cloned_media/himachal.webp' },
      { title: 'Uttarakhand', price: '₹7,000', image: '/cloned_media/uttarakhand.webp' },
      { title: 'Kashmir', price: '₹15,000', image: '/cloned_media/kashmir.webp' },
      { title: 'Bhutan', price: '₹25,000', image: '/cloned_media/bhutan.webp' }
  ]
};


// --- Helper & UI Components ---

const ItineraryItem = ({ item, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button onClick={onClick} className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
                <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{item.day}</span> {/* Updated color */}
                <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.title}</h3>
            </div>
            {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />} {/* Updated color */}
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
        )}
    </div>
);

const BookingBox = ({ occupancy, setOccupancy, occupancyDetails, mobile = false }) => (
    <div className={`border bg-white p-4 sm:p-6 rounded-2xl shadow-lg ${mobile ? 'lg:hidden' : 'hidden lg:block'}`}>
        {!mobile && (
            <>
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">Starting Price</p>
                    <span className="bg-yellow-300 text-yellow-800 font-bold text-sm px-3 py-1 rounded-md">₹{tripData.pricing.discount} Off</span>
                </div>
                <div className="mt-2">
                    <span className="text-4xl font-bold text-gray-900">₹{occupancyDetails[occupancy].price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹{occupancyDetails[occupancy].original}</span>
                </div>
                 <p className="text-sm text-gray-600 capitalize mb-6">{occupancy} Sharing Occupancy</p>
            </>
        )}

        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">Price Summary</h3>
        <div>
            <div className="flex items-center justify-between">
                <p className="font-medium text-gray-700">Occupancy</p>
                <div className="flex gap-2">
                    {Object.keys(occupancyDetails).map(key => (
                        <button key={key} onClick={() => setOccupancy(key)} className={`px-3 py-1 border rounded-md text-xs font-semibold capitalize ${occupancy === key ? 'bg-[#0B3A55] text-white border-[#0B3A55]' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}> {/* Updated color */}
                            {key}
                        </button>
                    ))}
                </div>
            </div>
            <div className="border bg-gray-50 flex items-center justify-between mt-2 p-2 rounded-lg">
                <p className="font-medium text-sm text-gray-800 capitalize">{occupancy} Occupancy</p>
                <div className="text-right">
                    <p className="font-bold text-lg text-gray-900">₹{occupancyDetails[occupancy].price}</p>
                    <p className="text-xs text-gray-500 -mt-1">Per Person</p>
                </div>
            </div>
        </div>

        <a href="#" className="block w-full text-center bg-[#0B3A55] text-white font-bold py-3 mt-4 rounded-lg hover:bg-opacity-90 transition-colors">Book Now</a> {/* Updated color */}
        <div className="flex gap-3 mt-3">
             <a href="https://api.whatsapp.com/send?phone=918076602635" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                {/* SVG for WhatsApp icon - lucide-react doesn't have a direct one */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                Whatsapp
            </a>
            <button className="flex-1 flex items-center justify-center text-sm w-full bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg hover:bg-gray-300 transition-colors">Get PDF Itinerary</button>
        </div>
    </div>
);

// --- Main Page Component ---
const HimachalBackpacking = () => {
  const [openItinerary, setOpenItinerary] = useState(0); // Initialize with the first item open
  const [occupancy, setOccupancy] = useState('double'); // Default to double occupancy
  const [showQueryForm, setShowQueryForm] = useState(false);

  const occupancyDetails = {
    quad: { price: tripData.pricing.quad, original: tripData.pricing.originalPriceQuad },
    triple: { price: tripData.pricing.triple, original: tripData.pricing.originalPriceTriple },
    double: { price: tripData.pricing.double, original: tripData.pricing.originalPriceDouble },
  };

  const navLinks = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'ThingsToPack', 'Reviews'];

  return (
    <div className="bg-gray-100 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
      {/* Assuming Header component is correctly imported and works */}
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 pt-4 sm:pt-8 pb-20 lg:pb-8">
        {/* Mobile-only Gallery */}
        <div className="lg:hidden mb-4">
           <div className="overflow-x-auto snap-x snap-mandatory flex gap-2">
                {tripData.mobileGallery.map((img, i) => (
                    <img key={i} src={img} className="snap-center flex-shrink-0 w-full h-64 object-cover rounded-lg shadow-md" alt={`Himachal scenery ${i+1}`} /> // Added shadow
                ))}
           </div>
        </div>

        {/* Desktop Gallery */}
        <header className="hidden lg:block mb-6">
          <div className="flex gap-2 h-[500px]">
            <div className="w-3/5">
              <img src={tripData.mainImageDesktop} className="w-full h-full object-cover rounded-l-2xl shadow-lg" alt="Main Himachal view"/> {/* Added shadow */}
            </div>
            <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
              {tripData.galleryImages.slice(0, 4).map((img, i) => (
                <img key={i} src={img} className={`w-full h-full object-cover shadow-lg ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`} alt={`Gallery image ${i+1}`}/> // Added shadow
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8">
            <div className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:hidden mb-6"> {/* Updated shadow */}
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{tripData.title}</h1>
                <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-t border-b border-gray-100">
                    <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <Clock className="w-6 h-6 text-[#0B3A55] mb-1"/> {/* Updated color */}
                        <p className="text-xs text-gray-600">Trip Duration</p>
                        <p className="font-semibold text-sm">{tripData.duration}</p>
                    </div>
                     <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#0B3A55] mb-1"/> {/* Updated color */}
                        <p className="text-xs text-gray-600">Pickup & Drop</p>
                        <p className="font-semibold text-sm">{tripData.pickupDrop}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {tripData.features.map(feature => (
                        <div key={feature.name} className="flex flex-col items-center text-center">
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6"/>
                            <span className="text-xs font-medium text-gray-700 mt-1">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Title & Info */}
            <div className="hidden lg:block border bg-white p-6 rounded-2xl shadow-lg mb-6"> {/* Updated shadow */}
                <h1 className="text-3xl font-bold text-gray-900">{tripData.title}</h1>
                 <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Clock className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/> {/* Updated color */}
                        <div>
                            <p className="text-sm text-gray-600">Trip Duration</p>
                            <p className="font-semibold">{tripData.duration}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <MapPin className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/> {/* Updated color */}
                        <div>
                            <p className="text-sm text-gray-600">Pickup & Drop</p>
                            <p className="font-semibold">{tripData.pickupDrop}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0B3A55] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> {/* Updated color */}
                        <div>
                            <p className="text-sm text-gray-600">Trip Category</p>
                            <p className="font-semibold">{tripData.category}</p>
                        </div>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6 pt-4 border-t border-gray-100">
                    {tripData.features.map(feature => (
                        <div key={feature.name} className="flex items-center gap-2">
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6"/>
                            <span className="font-medium text-gray-700">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Navigation */}
            <div className="hidden lg:block sticky top-20 z-30 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-6 p-2"> {/* Adjusted top value, bg, shadow */}
                <div className="flex justify-around"> {/* Use justify-around for better spacing */}
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-[#0B3A55] transition-colors px-3 py-2 rounded-lg text-sm"> {/* Adjusted padding */}
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
              <div id="overview" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt */}
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Overview</h2>
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: tripData.overview }} />
              </div>
              <div id="itinerary" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt */}
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {tripData.itinerary.map((item, index) => (
                    <ItineraryItem key={index} item={item} isOpen={openItinerary === index} onClick={() => setOpenItinerary(openItinerary === index ? -1 : index)} />
                  ))}
                </div>
              </div>
              <div id="inclusions" className="border bg-green-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt, color */}
                  <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-4">Inclusions ✅</h2> {/* Added color, icon */}
                  <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: tripData.inclusions }} />
              </div>
              <div id="exclusions" className="border bg-red-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt, color */}
                   <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-200 pb-3 mb-4">Exclusions ❌</h2> {/* Added color, icon */}
                   <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: tripData.exclusions }} />
              </div>
              <div id="thingstopack" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt */}
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Things To Pack 🎒</h2> {/* Added icon */}
                  <div className="space-y-4">
                      {tripData.thingsToPack.map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                              <img src={item.icon} alt="packing icon" className="w-8 h-8 flex-shrink-0 mt-1"/>
                              <p className="text-gray-600 text-sm">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div id="reviews" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24"> {/* Adjusted scroll-mt */}
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Reviews ⭐</h2> {/* Added icon */}
                  <div className="space-y-6">
                      {tripData.reviews.map((review, index) => (
                          <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                              <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover"/> {/* Added object-cover */}
                              <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1"> {/* Added margin */}
                                      <h4 className="font-semibold text-sm">{review.name}</h4>
                                      <div className="flex">
                                          {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current"/>)}
                                          {[...Array(5 - review.rating)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current"/>)} {/* Added empty stars */}
                                      </div>
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              {/* Mobile Booking Box (appears at the bottom in mobile view) */}
              <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} mobile={true} />
            </div>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24"> {/* Adjusted top value */}
                <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} />
              </div>
          </aside>
        </div>

        {/* Related Trips */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Related Trips For You 🗺️</h2> {/* Increased margin, added icon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {tripData.relatedTrips.map((trip, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl"> {/* Added shadow, hover effect */}
                        <img src={trip.image} alt={trip.title} className="w-full h-32 sm:h-40 object-cover"/> {/* Removed group-hover scale here, added to parent */}
                        <div className="p-3 sm:p-4">
                           <h3 className="font-semibold text-sm sm:text-base text-gray-800">{trip.title}</h3>
                           <p className="text-xs sm:text-sm text-gray-600 mt-1">Starting Price <span className="font-bold text-[#0B3A55]">{trip.price}</span></p> {/* Updated color */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>

       {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200"> {/* Added border */}
          <div className="flex justify-around items-center p-2">
              <a href="https://api.whatsapp.com/send?phone=918076602635" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-green-600 gap-0.5">
                  <img src="/cloned_media/whatsapp.webp" alt="whatsapp" className="w-5 h-5"/>
                  Whatsapp
              </a>
              {/* Send Query Button - Needs functionality (e.g., open modal) */}
              <button
                onClick={() => setShowQueryForm(true)}
                className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5"
              >
                  <img src="/cloned_media/messenger.png" alt="query" className="w-5 h-5"/>
                  Send Query
              </button>
              <a href="tel:+918076602635" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5">
                  <img src="/cloned_media/phonecall.png" alt="call" className="w-5 h-5"/>
                  Call
              </a>
          </div>
      </div>

       {/* Assuming Footer component is correctly imported and works */}
       <Footer />
       <QueryForm 
         isOpen={showQueryForm} 
         onClose={() => setShowQueryForm(false)} 
         tripName={tripData.title}
       />
    </div>
  );
};

export default HimachalBackpacking;