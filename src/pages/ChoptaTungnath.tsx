import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryForm } from '@/components/QueryForm';
import { Clock, MapPin, Star, ChevronDown, ChevronUp } from 'lucide-react';

const tripData = {
  title: 'Chopta Tungnath Trek - Mini Switzerland of India',
  duration: '3 Days 2 Nights',
  pickupDrop: 'Delhi-Delhi',
  category: 'Weekend Trips',
  pricing: {
    startPrice: '8,500',
    originalPriceQuad: '10,000',
    originalPriceTriple: '9,500',
    originalPriceDouble: '9,000',
    discount: '1,500',
    quad: '8,500',
    triple: '8,000',
    double: '7,500',
  },
  mainImageDesktop: '/trip/chopta.png',
  galleryImages: [
    '/trip/chopta.png',
    '/trip/tungnath.png',
    '/trip/kedarnath.png',
    '/trip/hampta.png',
  ],
  mobileGallery: [
    '/trip/chopta.png',
    '/trip/tungnath.png',
    '/trip/kedarnath.png',
    '/trip/hampta.png',
    '/trip/yulla.png',
    '/trip/kanatal.png',
  ],
  features: [
    { name: 'Stay', icon: '/cloned_media/21556120241021125642.png' },
    { name: 'Transfers', icon: '/cloned_media/41278020241021125603.png' },
    { name: 'Meals', icon: '/cloned_media/17264920241021125723.png' },
    { name: 'Explorations', icon: '/cloned_media/13075920241021125921.png' },
    { name: 'Trekking', icon: '/cloned_media/11999820241021130308.png' },
    { name: 'Photography', icon: '/assets/photography.png' },
  ],
  overview: `<p>Chopta, often called the "Mini Switzerland of India," is a picturesque hill station in Uttarakhand. This trek takes you to Tungnath Temple, the highest Shiva temple in the world at 3,680 meters, and further to Chandrashila Peak at 4,000 meters. Experience breathtaking views of Himalayan peaks including Nanda Devi, Trishul, and Chaukhamba. The trek offers stunning meadows, rhododendron forests, and an unforgettable sunrise from Chandrashila summit.</p>`,
  itinerary: [
    { day: "Day 0", title: "Delhi to Chopta | Overnight Journey", content: "<ul><li>Assemble at boarding point in Delhi and meet your Trip Captain.</li><li>Start overnight journey to Chopta in comfortable transport.</li><li>Enjoy the scenic drive through Haridwar and Rishikesh.</li></ul>" },
    { day: "Day 1", title: "Chopta Arrival | Tungnath Temple Trek", content: "<ul><li>Arrive in Chopta early morning and check-in to camps/hotel.</li><li>After breakfast, start trek to Tungnath Temple (3.5 km).</li><li>Visit the highest Shiva temple in the world.</li><li>Return to Chopta base camp for dinner and overnight stay.</li></ul>" },
    { day: "Day 2", title: "Chandrashila Summit | Return to Delhi", content: "<ul><li>Early morning trek to Chandrashila Peak (1.5 km from Tungnath).</li><li>Witness spectacular sunrise and 360-degree Himalayan views.</li><li>Return to base camp, have breakfast and check-out.</li><li>Start return journey to Delhi with packed lunch.</li></ul>" },
    { day: "Day 3", title: "Delhi Arrival | Trip Ends", content: "<ul><li>Reach Delhi early morning with amazing memories.</li><li>Trip ends with unforgettable experiences of the Himalayas.</li></ul>" }
  ],
  inclusions: `<ul><li>Transportation from Delhi to Delhi in comfortable vehicle.</li><li>2 Nights accommodation in camps/hotel on sharing basis.</li><li>All meals from Day 1 breakfast to Day 2 lunch.</li><li>Experienced trek guide and support staff.</li><li>All necessary permits and entry fees.</li><li>Basic first aid and safety equipment.</li></ul>`,
  exclusions: `<ul><li>Personal expenses and items of personal nature.</li><li>Travel insurance and medical expenses.</li><li>Any meals not mentioned in inclusions.</li><li>Tips for guide and support staff.</li><li>Any expenses due to natural calamities or unforeseen circumstances.</li><li>GST (5%) is applicable extra.</li></ul>`,
  thingsToPack: [
    { text: "Trekking shoes with good grip, warm clothes, and rain protection.", icon: '/cloned_media/7672820250825123523.png' },
    { text: "Backpack, water bottle, and energy snacks for the trek.", icon: '/cloned_media/5261020250821080750.png' },
    { text: "Warm jacket, gloves, and woolen cap for early morning summit.", icon: '/cloned_media/9170920250825123607.png' },
    { text: "Sunscreen, sunglasses, and personal medications.", icon: '/cloned_media/14435720250825123645.png' },
    { text: "Camera, power bank, and torch with extra batteries.", icon: '/cloned_media/7654520250825123857.png' }
  ],
  reviews: [
    { name: "Priya Sharma", rating: 5, comment: "Amazing trek with breathtaking views! The sunrise from Chandrashila was absolutely magical. Well organized trip with great guides.", image: '/cloned_media/profilepic.png' },
    { name: "Rahul Kumar", rating: 5, comment: "Perfect weekend getaway! The Tungnath temple trek was spiritual and the views were incredible. Highly recommend for nature lovers.", image: '/cloned_media/24894620230801111526.png' },
    { name: "Anjali Gupta", rating: 5, comment: "Mini Switzerland indeed! The meadows and mountain views were stunning. Great experience with Travel Wisdom team.", image: '/cloned_media/159420230801111701.png' }
  ],
  relatedTrips: [
    { title: 'Uttarakhand', price: '₹7,000', image: '/cloned_media/uttarakhand.webp' },
    { title: 'Himachal Pradesh', price: '₹7,000', image: '/cloned_media/himachal.webp' },
    { title: 'Kashmir', price: '₹15,000', image: '/cloned_media/kashmir.webp' },
    { title: 'Leh Ladakh', price: '₹20,000', image: '/cloned_media/ladakh.webp' }
  ]
};

const ItineraryItem = ({ item, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button onClick={onClick} className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{item.day}</span>
        <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.title}</h3>
      </div>
      {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
    </button>
    {isOpen && (
      <div className="p-4 border-t border-gray-200">
        <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    )}
  </div>
);

const BookingBox = ({ occupancy, setOccupancy, occupancyDetails, mobile = false, setShowQueryForm }) => (
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
            <button key={key} onClick={() => setOccupancy(key)} className={`px-3 py-1 border rounded-md text-xs font-semibold capitalize ${occupancy === key ? 'bg-[#0B3A55] text-white border-[#0B3A55]' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
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

    <button onClick={() => setShowQueryForm(true)} className="block w-full text-center bg-[#0B3A55] text-white font-bold py-3 mt-4 rounded-lg hover:bg-opacity-90 transition-colors">Book Now</button>
    <div className="flex gap-3 mt-3">
      <a href="https://api.whatsapp.com/send?phone=919971545446" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
        Whatsapp
      </a>
      <button className="flex-1 flex items-center justify-center text-sm w-full bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg hover:bg-gray-300 transition-colors">Get PDF Itinerary</button>
    </div>
  </div>
);

const ChoptaTungnath = () => {
  const [openItinerary, setOpenItinerary] = useState(0);
  const [occupancy, setOccupancy] = useState('double');
  const [showQueryForm, setShowQueryForm] = useState(false);

  const occupancyDetails = {
    quad: { price: tripData.pricing.quad, original: tripData.pricing.originalPriceQuad },
    triple: { price: tripData.pricing.triple, original: tripData.pricing.originalPriceTriple },
    double: { price: tripData.pricing.double, original: tripData.pricing.originalPriceDouble },
  };

  const navLinks = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'ThingsToPack', 'Reviews'];

  return (
    <div className="bg-gray-100 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
      <Header />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
        <div className="lg:hidden mb-4">
          <div className="overflow-x-auto snap-x snap-mandatory flex gap-2">
            {tripData.mobileGallery.map((img, i) => (
              <img key={i} src={img} className="snap-center flex-shrink-0 w-full h-64 object-cover rounded-lg shadow-md" alt={`Chopta scenery ${i+1}`} />
            ))}
          </div>
        </div>

        <header className="hidden lg:block mb-6">
          <div className="flex gap-2 h-[500px]">
            <div className="w-3/5">
              <img src={tripData.mainImageDesktop} className="w-full h-full object-cover rounded-l-2xl shadow-lg" alt="Main Chopta view"/>
            </div>
            <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
              {tripData.galleryImages.slice(0, 4).map((img, i) => (
                <img key={i} src={img} className={`w-full h-full object-cover shadow-lg ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`} alt={`Gallery image ${i+1}`}/>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:hidden mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{tripData.title}</h1>
              <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-t border-b border-gray-100">
                <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-[#0B3A55] mb-1"/>
                  <p className="text-xs text-gray-600">Trip Duration</p>
                  <p className="font-semibold text-sm">{tripData.duration}</p>
                </div>
                <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#0B3A55] mb-1"/>
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

            <div className="hidden lg:block border bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{tripData.title}</h1>
              <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <Clock className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                  <div>
                    <p className="text-sm text-gray-600">Trip Duration</p>
                    <p className="font-semibold">{tripData.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                  <div>
                    <p className="text-sm text-gray-600">Pickup & Drop</p>
                    <p className="font-semibold">{tripData.pickupDrop}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0B3A55] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
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

            <div className="hidden lg:block sticky top-20 z-30 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-6 p-2">
              <div className="flex justify-around">
                {navLinks.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-[#0B3A55] transition-colors px-3 py-2 rounded-lg text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div id="overview" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Overview</h2>
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: tripData.overview }} />
              </div>
              <div id="itinerary" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Itinerary</h2>
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
              <div id="reviews" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Reviews ⭐</h2>
                <div className="space-y-6">
                  {tripData.reviews.map((review, index) => (
                    <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover"/>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-sm">{review.name}</h4>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current"/>)}
                            {[...Array(5 - review.rating)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current"/>)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} mobile={true} setShowQueryForm={setShowQueryForm} />
            </div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <BookingBox occupancy={occupancy} setOccupancy={setOccupancy} occupancyDetails={occupancyDetails} setShowQueryForm={setShowQueryForm} />
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Related Trips For You 🗺️</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {tripData.relatedTrips.map((trip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img src={trip.image} alt={trip.title} className="w-full h-32 sm:h-40 object-cover"/>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800">{trip.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Starting Price <span className="font-bold text-[#0B3A55]">{trip.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200">
        <div className="flex justify-around items-center p-2">
          <a href="https://api.whatsapp.com/send?phone=919971545446" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-green-600 gap-0.5">
            <img src="/cloned_media/whatsapp.webp" alt="whatsapp" className="w-5 h-5"/>
            Whatsapp
          </a>
          <button onClick={() => setShowQueryForm(true)} className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5">
            <img src="/cloned_media/messenger.png" alt="query" className="w-5 h-5"/>
            Send Query
          </button>
          <a href="tel:+919971545446" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5">
            <img src="/cloned_media/phonecall.png" alt="call" className="w-5 h-5"/>
            Call
          </a>
        </div>
      </div>

      <Footer />
      <QueryForm 
        isOpen={showQueryForm} 
        onClose={() => setShowQueryForm(false)} 
        tripName={tripData.title}
      />
    </div>
  );
};

export default ChoptaTungnath;