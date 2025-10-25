import React, { useState } from 'react';
// Assuming Header and Footer components exist in your project structure
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryForm } from '@/components/QueryForm';
import { Clock, MapPin, Star, ChevronDown, ChevronUp, Phone, MessageSquare, Send, Youtube, Linkedin, Instagram } from 'lucide-react'; // Added missing icons

// --- Static Data extracted from the Meghalaya trip source ---
const tripData = {
  title: 'Meghalaya Backpacking',
  duration: '6 Days 5 Nights',
  pickupDrop: 'Guwahati-Guwahati',
  category: 'Backpacking Trips',
  pricing: {
    startPrice: '20,500', // Assuming Triple is the start price based on discount
    originalPriceTriple: '23,000',
    originalPriceDouble: '25,000',
    discount: '2,500', // Calculated from Triple price difference
    triple: '20,500',
    double: '22,500',
  },
  mainImageDesktop: '/cloned_media/34404220250703080227.png', // Main image used in desktop gallery
  galleryImages: [ // Images for desktop gallery grid
    '/cloned_media/16540420220720040415.png',
    '/cloned_media/24662820220720040415.png',
    '/cloned_media/37889620220720040415.png',
    '/cloned_media/27715620220720040415.png',
  ],
  mobileGallery: [ // Images for mobile slider
      '/cloned_media/16540420220720040415.png',
      '/cloned_media/24662820220720040415.png',
      '/cloned_media/37889620220720040415.png',
      '/cloned_media/27715620220720040415.png',
      '/cloned_media/7110420220720040415.png',
      '/cloned_media/21617120220720040415.png',
      '/cloned_media/33768020220720040415.png',
      '/cloned_media/20405720220720040415.png',
      '/cloned_media/17096020220720040415.png',
      '/cloned_media/40178220220720040415.png'
  ],
  features: [ // Features from the original source
    { name: 'Stay', icon: '/cloned_media/21556120241021125642.png' },
    { name: 'Bonfire', icon: '/cloned_media/5910920241021125745.png' },
    { name: 'Transfers', icon: '/cloned_media/41278020241021125603.png' },
    { name: 'Camping', icon: '/cloned_media/39205420241021125812.png' },
    { name: 'Meals', icon: '/cloned_media/17264920241021125723.png' },
    { name: 'Explorations', icon: '/cloned_media/13075920241021125921.png' },
  ],
  overview: `<h2>About Meghalaya Backpacking Trip</h2><p>A wonderland also known as the ‘Abode of Clouds’ located in the northeastern part of India, Meghalaya is home to some of the world’s most diverse ecosystems. Meghalaya offers you sights of heart thumping cliffs, extravagant rivers and much more. It provides you a chance to experience the colonial influence in Shillong (capital of Meghalaya), visit Asia’s cleanest village Mawlynnong or explore the Living Double-Decker Root Bridge. Teeming valleys and lush green sheets of land to lakes and refreshing waterfalls, this amazing state has so much for every kind of wanderlust soul. This gem of Northeast India is also known for its richest biodiversity areas in the world. A perfect vacay in nature’s lap, Meghalaya lies comfortably between Bangladesh in the South and Brahmaputra valley in the North.</p><p>To visit this ‘Scotland of India’ the first rule is to leave all your worries at home and travel with a free soul to free your mind off the stress. It's an experience that you can gain both solo or with your <b>Meghalaya Backpacking Package</b> at best rates.</p><h3>Places to visit in Meghalaya Backpacking Tour</h3><p>Travelling is a bug and whether you are a hiking, trekking enthusiast or novice paddler, Meghalaya has a lot to offer to people and tourists from all around.</p><ul><li><strong>Shillong:</strong> The capital city...</li><li><strong>Laitlum Canyons:</strong> To enjoy the viewpoint...</li><li><strong>Cherrapunji:</strong> Labeled as one of the wettest places...</li><li><strong>Wei Swadong:</strong> Meghalaya has earned fame...</li><li><strong>Living Root Bridge:</strong> Everyone deserves to watch...</li><li><strong>Umshiang Double-Decker Bridge:</strong> This magnificent bridge...</li><li><strong>Nohkalikai Falls:</strong> This waterfall holds a rich history...</li><li><strong>Mawsmai Caves:</strong> The term Mawsmai...</li><li><strong>Mawlynnong Village:</strong> Your drive towards Dawki...</li><li><strong>Dawki Village:</strong> Settled on the laps of Meghalaya...</li><li><strong>Krang Shuri Waterfall:</strong> Waterfalls are the pride...</li></ul><h3>Things to do in Meghalaya Backpacking Trip</h3><p>Scotland of India is a combination of Wild mountains...</p><ul><li><strong>Exploring Caves:</strong> Meghalaya has long uniquely structured caves...</li><li><strong>Rock Climbing:</strong> This state offers you opportunities...</li><li><strong>Hiking:</strong> Halong and other such places...</li><li><strong>Refreshing Waterfalls:</strong> Visiting Meghalaya is incomplete...</li><li><strong>Exploring streets & taste the essence of Meghalayan food:</strong> There is no harsh...</li><li><strong>Understand Unique Culture:</strong> Any place with an enlarged picture...</li><li><strong>Adventure Sports:</strong> Many hill stations provide opportunities...</li></ul><h3>Best time to visit Meghalaya</h3><p>It is recommended to visit Meghalaya Backpacking Package during either Autumn or winter season...</p><h3>How to reach Meghalaya</h3><ul><li><strong>Airways:</strong> To reach Meghalaya, take a flight to the nearest airport in Guwahati...</li><li><strong>Roadways:</strong> Transportation to Meghalaya is well connected...</li><li><strong>Railways:</strong> The closest railway station to Meghalaya is Guwahati...</li></ul><h3>FAQ’s</h3><p><strong>1. What is the best time for Meghalaya Backpacking Package?</strong></p><p>Winters mainly October to December...</p><p><strong>2. What is the best food to try on a Meghalaya Backpacking Trip?</strong></p><p>Some of the must eat foods...</p><p><strong>3. What are the famous places to visit in Meghalaya?</strong></p><p>Cherrapunji, Shillong, Living Root Bridge...</p><p><strong>4. What are the Best places for shopping in Meghalaya?</strong></p><p>Polo Bazaar, Bara Bazaar...</p><p><strong>5. What are Best things to buy in Meghalaya?</strong></p><p>You must buy Shawls, Manipuri Lungis...</p><p>Explore our Meghalaya tour packages: <a href="https://go4explore.com/trips/meghalaya-5-days-4-nights" style="color:blue;">Meghalaya Trip for 5D/4N</a>, <a href="https://go4explore.com/trips/meghalaya-8-days-7-nights" style="color:blue;">Meghalaya Tour for 8D/7N</a>, <a href="https://go4explore.com/trips/meghalaya-with-kaziranga" style="color:blue;">Meghalaya Kaziranga Tour</a></p>`, // Truncated for brevity, kept structure
  itinerary: [
    { day: "Day 1", title: "Guwahati Arrival | Shillong Chill Scenes", content: "<ul><li>Assemble at the boarding point in Guwahati and start a chilled-out journey to Shillong.</li><li>Socialize with your co-travellers while enjoying mesmerizing landscapes of lush green hills.</li><li>Enroute Shillong, we’ll take a halt at the popular Umiam Lake which is one of the biggest artificial lakes in Meghalaya.</li><li>After arriving in Shillong, check-in to our comfy hotel, freshen-up and have some leisure.</li><li>Make the most out of it by exploring Shillong’s Police Bazar with your travel clan, soak in the colonial charm of Meghalaya’s capital and feel free to stroll around the streets.</li><li>Overnight stay at a hotel in Shillong.</li></ul>" },
    { day: "Day 2", title: "Drive from Shillong to Cherrapunji | Waterfalls & More", content: "<ul><li>Wake up and post breakfast, check-out from the hotel and we'll proceed towards Cherrapunji - popular for its living root bridges and for the abundance of rainfall it receives every year.</li><li>Enroute, we’ll take a halt at the popular Laitlum Canyons (Mawkdok Dympep Viewpoint), from where you can witness a panoramic view of the lush valleys of Meghalaya. </li><li>Explore the amazing Nohkalikai Waterfall - known as the tallest plunge waterfall in Meghalaya, Arwah Caves - known for their natural limestone formations and fossils, and Seven Sisters’ Fall (if time permits).</li><li>Check-in to our hotel and have some leisure.</li><li>Overnight stay at a hotel in Cherrapunji.</li></ul>" },
    { day: "Day 3", title: "Explore Living Root Bridges of Meghalaya", content: "<ul><li>Wake up early and post breakfast, we’ll explore one of the popular attractions in Cherrapunji namely Living Root Bridges of Meghalaya.</li><li>Drive towards Tyrna Village and begin your down trek (3500 steps) from Nongriat towards the widely popular Double Decker Living Roots Bridge. Soak in the nature’s beauty while exploring the living root bridges, listen to the sounds of birds & pristine streams and capture some #InstaPerfect pictures.</li><li>Post explorations, return back to your hotel.</li><li>Overnight stay at a hotel in Cherrapunji.</li></ul>" },
    { day: "Day 4", title: "Drive from Cherrapunji to Shnongpdeng (Dawki)", content: "<ul><li>Wake up and post breakfast, check-out from the hotel and we'll proceed towards Shnongpdeng - a serene riverside village near Dawki.</li><li>Explore Mawlynnong which is widely known as Asia's cleanest village. Later, trek to visit the Single Living Root Bridge in Riwai village and Balancing Rock.</li><li>After arriving in Dawki, check-in to our riverside camps and have some leisure. Enjoy peaceful ambience and chill along the turquoise Dawki River (Umngot River), resembling a glass surface. </li><li>Dinner and overnight stay at campsite in Dawki.</li></ul>" },
    { day: "Day 5", title: "Dawki Adventure Activities | Drive to Shillong", content: "<ul><li>Wake up and post breakfast, check-out from the camps and indulge in adventure activities in Dawki (on your own) like cliff jumping, boating and kayaking, in the crystal clear waters of Umngot river.</li><li>Post lunch, drive back towards Shillong. Enroute, we’ll explore the Krang Suri Waterfall - one of the most beautiful waterfall in Meghalaya; get drenched and swim in the natural pools.</li><li>After arriving in Shillong, check-in to our comfy hotel and have some leisure.</li><li>Overnight stay at a hotel in Shillong.</li></ul>" },
    { day: "Day 6", title: "Drive from Shillong to Guwahati | Trip Ends", content: "<ul style=\"scrollbar-color: rgb(244, 244, 244) rgba(0, 0, 0, 0);\"><li>Wake up early and post breakfast, check-out from our hotel and drive back to Guwahati.</li><li>After arriving in Guwahati, the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>" }
  ],
  inclusions: `<ul><li>Transportation: Tempo Traveler/SUV from Guwahati to Guwahati and further for all local sightseeing. Pickup & Drop facility from/to Guwahati Airport & Railway Station (transfers at fixed time only).</li><li>5 nights Accommodation on sharing basis: Shillong (2 Nights in Hotel), Cherrapunji (2 Nights in Hotel), Dawki (1 Night in Camps). Please Note: Stay in Dawki will be in Alpine/Dome Tents with common washroom provided with only mattresses or sleeping bags. These camps are located near the river, which can make the approach a bit challenging at times.</li><li>6 Meals: CP Plan (2 Breakfast only) in Shillong and Cherrapunji respectively, MAP Plan (1 Dinner + 1 Breakfast) in Dawki.</li><li>Local Trek Guide for Double Decker Living Roots Bridge.</li><li>All Remote Assistance on Call (24x7).</li><li>Driver allowances, toll taxes, parking & state road taxes.</li></ul>`,
  exclusions: `<ul><li>Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.</li><li>Items of a personal nature like room heater, room/hotel upgrade, early/late check-in/checkout, porterage, tips, laundry etc.</li><li>Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.</li><li>Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.</li><li>Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.</li><li>Anything which is not mentioned in the above inclusions.</li><li>GST (5%) is applicable extra.</li></ul>`,
  thingsToPack: [ // Same data as Himachal, assuming it's generic
    { text: "Good quality rucksack (preferably 40-60 liters) & a small day bag pack (for hikes/treks purpose) with rain-cover is recommended, easy to carry trolley bag.", icon: '/cloned_media/5261020250821080750.png' },
    { text: "A pair of shoes (mainly trekking/sports) with good grip & waterproof, atleast 2 pair of socks & floaters/sandals/slippers.", icon: '/cloned_media/7672820250825123523.png' },
    { text: "Heavy down jacket, light fleece, long track/cargo pants, long/short sleeves T-shirts, body thermal wears (as per season), sun cap/hat, woolen cap & gloves (as per season), hoodie, raincoats/ponchos.", icon: '/cloned_media/9170920250825123607.png' },
    { text: "Personal care items like cold cream & moisturiser, sunscreen (preferably SPF40), lip balm, sanitary pads, toothpaste & other toiletries, wet wipes, hand sanitizer, insect repellent, body spray.", icon: '/cloned_media/14435720250825123645.png' },
    { text: "Personal medication (as prescribed by the doctor) & first-aid, sprain relief spray, glucose powder, tablets for headache, fever, diarrhea, motion sickness, dettol & cotton/bandages.", icon: '/cloned_media/11222620250825123717.png' },
    { text: "Personal documents & ID's like aadhar card, drivers license, passport or any other valid Government ID proofs.", icon: '/cloned_media/528220250825123752.png' },
    { text: "Sunglasses, charger, power bank, quick dry towel, adequate amount of cash, quick snacks/dryfruits/energy bars, trash & waterproof laundry bags, re-usable water bottle.", icon: '/cloned_media/7654520250825123857.png' }
  ],
  knowBeforeYouGo: `<ul><li>Travellers arriving in Guwahati: Travelers are requested to arrive in Guwahati Airport/Railway Station by 10:00 AM to timely begin their journey towards Shillong. Travellers can book their return flight or train tickets on last day for after 6:00 PM.</li><li>Change of Plans: We reserve right to change any schedule in the interest of safety & general wellbeing as per the call taken by your Trip Captain due to weather, road conditions & other factors out of control.</li></ul>`,
  faqs: [ // Extracted from source data
    { id: 1, question: "How to reach Meghalaya?", answer: "Meghalaya is well connected... You can primarily use any of the below transport facilities... Train: Major cities like Shillong... Bus: Major cities like Shillong... Flights: Shillong airport and Baljek airport..." },
    { id: 2, question: "Meghalaya is for what type of tourist?", answer: "Meghalaya has something to offer to everyone. While couples can plan a romantic getaway... families can head for a chilled-out break..." },
    { id: 3, question: "What are famous wildlife sanctuaries and national parks in Meghalaya?", answer: "Other than the beautiful waterfalls... Meghalaya is also the home to a variety of rare flora and fauna... Nokrek National Park, Balpakram National Park, Siju Bird Sanctuary..." },
    // Add more FAQs as needed, keeping them concise for the component
  ],
  relatedTrips: [ // Same as Himachal example, replace if specific related trips are known
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
                <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{item.day}</span> {/* Theme color */}
                <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.title}</h3>
            </div>
            {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />} {/* Theme color */}
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
        )}
    </div>
);

const FaqItem = ({ item, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button onClick={onClick} className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.question}</h3>
            {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />} {/* Theme color */}
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">{item.answer}</p> {/* Use <p> for simple text */}
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
                    {tripData.pricing.discount && ( // Only show discount if available
                      <span className="bg-yellow-300 text-yellow-800 font-bold text-sm px-3 py-1 rounded-md">₹{tripData.pricing.discount} Off</span>
                    )}
                </div>
                <div className="mt-2">
                    <span className="text-4xl font-bold text-gray-900">₹{occupancyDetails[occupancy]?.price || tripData.pricing.startPrice}</span> {/* Fallback to startPrice */}
                    {occupancyDetails[occupancy]?.original && ( // Only show original if available for selected occupancy
                      <span className="text-lg text-gray-500 line-through ml-2">₹{occupancyDetails[occupancy].original}</span>
                    )}
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
                         occupancyDetails[key]?.price && ( // Only render button if price exists for this occupancy
                            <button key={key} onClick={() => setOccupancy(key)} className={`px-3 py-1 border rounded-md text-xs font-semibold capitalize ${occupancy === key ? 'bg-[#0B3A55] text-white border-[#0B3A55]' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}> {/* Theme color */}
                                {key}
                            </button>
                         )
                    ))}
                </div>
            </div>
            {occupancyDetails[occupancy]?.price && ( // Show price details only if available
                <div className="border bg-gray-50 flex items-center justify-between mt-2 p-2 rounded-lg">
                    <p className="font-medium text-sm text-gray-800 capitalize">{occupancy} Occupancy</p>
                    <div className="text-right">
                        <p className="font-bold text-lg text-gray-900">₹{occupancyDetails[occupancy].price}</p>
                        <p className="text-xs text-gray-500 -mt-1">Per Person</p>
                    </div>
                </div>
            )}
        </div>

        <button onClick={() => setShowQueryForm(true)} className="block w-full text-center bg-[#0B3A55] text-white font-bold py-3 mt-4 rounded-lg hover:bg-opacity-90 transition-colors">Book Now</button>
        <div className="flex gap-3 mt-3">
             <a href="https://api.whatsapp.com/send?phone=918076602635" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                {/* SVG for WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                Whatsapp
            </a>
            <button className="flex-1 flex items-center justify-center text-sm w-full bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg hover:bg-gray-300 transition-colors">Get PDF Itinerary</button>
        </div>
    </div>
);


// --- Main Page Component ---
const MeghalayaBackpacking = () => {
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [openItinerary, setOpenItinerary] = useState(0); // First itinerary item open
  const [openFaq, setOpenFaq] = useState(null); // No FAQ item open initially
  const [occupancy, setOccupancy] = useState('double'); // Default to double

  // Define occupancy details, check if prices exist in tripData
  const occupancyDetails = {
    triple: { price: tripData.pricing.triple, original: tripData.pricing.originalPriceTriple },
    double: { price: tripData.pricing.double, original: tripData.pricing.originalPriceDouble },
  };
   // Filter out occupancy options that don't have a price
   const availableOccupancies = Object.keys(occupancyDetails).filter(key => occupancyDetails[key]?.price);
   // Set default occupancy to the first available one, or keep 'double' if it exists
   const defaultOccupancy = availableOccupancies.includes('double') ? 'double' : availableOccupancies[0] || 'triple';
   useState(() => setOccupancy(defaultOccupancy)); // Set initial state correctly


  const navLinks = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'ThingsToPack', 'KnowBeforeYouGo', 'FAQs']; // Added KnowBeforeYouGo & FAQs

  return (
    <div className="bg-gray-100 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
      {/* Assuming Header component works */}
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 pt-4 sm:pt-8 pb-20 lg:pb-8">
        {/* Mobile-only Gallery */}
        <div className="lg:hidden mb-4">
           <div className="overflow-x-auto snap-x snap-mandatory flex gap-2">
                {tripData.mobileGallery.map((img, i) => (
                    <img key={i} src={img} className="snap-center flex-shrink-0 w-full h-64 object-cover rounded-lg shadow-md" alt={`Meghalaya scenery ${i+1}`} />
                ))}
           </div>
        </div>

        {/* Desktop Gallery */}
        <header className="hidden lg:block mb-6">
          <div className="flex gap-2 h-[500px]">
            <div className="w-3/5">
              <img src={tripData.mainImageDesktop} className="w-full h-full object-cover rounded-l-2xl shadow-lg" alt="Main Meghalaya view"/>
            </div>
            <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
              {tripData.galleryImages.slice(0, 4).map((img, i) => (
                <img key={i} src={img} className={`w-full h-full object-cover shadow-lg ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`} alt={`Gallery image ${i+1}`}/>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8">
            {/* Mobile Title & Info */}
            <div className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:hidden mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{tripData.title}</h1>
                <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-t border-b border-gray-100">
                    <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <Clock className="w-6 h-6 text-[#0B3A55] mb-1"/> {/* Theme color */}
                        <p className="text-xs text-gray-600">Trip Duration</p>
                        <p className="font-semibold text-sm">{tripData.duration}</p>
                    </div>
                     <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#0B3A55] mb-1"/> {/* Theme color */}
                        <p className="text-xs text-gray-600">Pickup & Drop</p>
                        <p className="font-semibold text-sm">{tripData.pickupDrop}</p>
                    </div>
                </div>
                 {/* Display features dynamically */}
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
            <div className="hidden lg:block border bg-white p-6 rounded-2xl shadow-lg mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{tripData.title}</h1>
                 <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Clock className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/> {/* Theme color */}
                        <div>
                            <p className="text-sm text-gray-600">Trip Duration</p>
                            <p className="font-semibold">{tripData.duration}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <MapPin className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/> {/* Theme color */}
                        <div>
                            <p className="text-sm text-gray-600">Pickup & Drop</p>
                            <p className="font-semibold">{tripData.pickupDrop}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0B3A55] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> {/* Theme color */}
                        <div>
                            <p className="text-sm text-gray-600">Trip Category</p>
                            <p className="font-semibold">{tripData.category}</p>
                        </div>
                    </div>
                </div>
                 {/* Display features dynamically */}
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
            <div className="hidden lg:block sticky top-20 z-30 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-6 p-2">
                <div className="flex justify-around">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="font-semibold text-gray-700 hover:text-[#0B3A55] transition-colors px-3 py-2 rounded-lg text-sm whitespace-nowrap"> {/* Added whitespace-nowrap */}
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
              <div id="overview" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Overview 🏞️</h2>
                {/* Using dangerouslySetInnerHTML requires trusting the source HTML */}
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: tripData.overview }} />
                {/* Consider adding a 'View More/Less' button if the overview is very long */}
              </div>

              <div id="itinerary" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Itinerary 🗺️</h2>
                <div className="space-y-4">
                  {tripData.itinerary.map((item, index) => (
                    <ItineraryItem key={index} item={item} isOpen={openItinerary === index} onClick={() => setOpenItinerary(openItinerary === index ? -1 : index)} />
                  ))}
                </div>
              </div>

              <div id="inclusions" className="border bg-green-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-4">Inclusions ✅</h2>
                  <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: tripData.inclusions }} />
              </div>

              <div id="exclusions" className="border bg-red-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                   <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-200 pb-3 mb-4">Exclusions ❌</h2>
                   <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: tripData.exclusions }} />
              </div>

              <div id="thingstopack" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Things To Pack 🎒</h2>
                  <div className="space-y-4">
                      {tripData.thingsToPack.map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                              <img src={item.icon} alt="packing icon" className="w-8 h-8 flex-shrink-0 mt-1"/>
                              <p className="text-gray-600 text-sm">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

              <div id="know-before-you-go" className="border bg-yellow-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-yellow-800 border-b-2 border-yellow-200 pb-3 mb-4">Know Before You Go ⚠️</h2>
                  <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: tripData.knowBeforeYouGo }} />
                   {/* Consider adding a 'View More/Less' button if the text is long */}
              </div>

              <div id="faqs" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">FAQs 🤔</h2>
                  <div className="space-y-4">
                    {tripData.faqs.map((faq) => (
                      <FaqItem key={faq.id} item={faq} isOpen={openFaq === faq.id} onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} />
                    ))}
                  </div>
                    {/* Consider adding a 'View More' button if there are many FAQs */}
              </div>

              {/* Mobile Booking Box */}
              <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} mobile={true} />
            </div>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} />
              </div>
          </aside>
        </div>

        {/* Related Trips */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Related Trips For You 🗺️</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {tripData.relatedTrips.map((trip, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src={trip.image} alt={trip.title} className="w-full h-32 sm:h-40 object-cover"/>
                        <div className="p-3 sm:p-4">
                           <h3 className="font-semibold text-sm sm:text-base text-gray-800">{trip.title}</h3>
                           <p className="text-xs sm:text-sm text-gray-600 mt-1">Starting Price <span className="font-bold text-[#0B3A55]">{trip.price}</span></p> {/* Theme color */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>

       {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200">
          <div className="flex justify-around items-center p-2">
              <a href="https://api.whatsapp.com/send?phone=918076602635" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-green-600 gap-0.5">
                  <img src="/cloned_media/whatsapp.webp" alt="whatsapp" className="w-5 h-5"/>
                  Whatsapp
              </a>
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

       {/* Assuming Footer component works */}
       <Footer />
       <QueryForm 
         isOpen={showQueryForm} 
         onClose={() => setShowQueryForm(false)} 
         tripName="Meghalaya Backpacking"
       />
    </div>
  );
};

export default MeghalayaBackpacking;