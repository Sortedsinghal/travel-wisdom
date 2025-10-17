import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (THAILAND) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/11104120240831072441.png', duration: '7 Days 6 Nights', title: 'Thailand Full Moon Party', price: '₹44999' },
    { imageUrl: '/cloned_media/6093520220627222939.png', duration: '6 Days 5 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 5N6D', price: '₹45000', originalPrice: '₹55000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25623320220627223345.png', duration: '7 Days 6 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 6N7D', price: '₹47999' },
    { imageUrl: '/cloned_media/25431020220425093432.png', duration: '5 Days 4 Nights', title: 'Thailand (Phuket, Phi Phi Island) 4N5D', price: '₹39999' }
];

const honeymoonTrips = [
    { imageUrl: '/cloned_media/7931820250527104428.png', duration: '6 Days 5 Nights', title: 'Majestic Thailand - Flights Inclusive', price: 'Customization Available' },
    { imageUrl: '/cloned_media/12371020230715105158.png', duration: '6 Days 5 Nights', title: 'Thailand - 6D5N', price: '₹42500' },
    { imageUrl: '/cloned_media/17720240209120346.png', duration: '6 Nights 7 Days', title: 'Honeymoon Special Phuket Krabi', price: '₹45000', originalPrice: '₹55000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/3048220231104223616.png', duration: '5 Days 4 Nights', title: 'Honeymoon Special - Phuket Krabi', price: '₹48000' },
    { imageUrl: '/cloned_media/2479920240209115545.png', duration: '6 days 5 nights', title: 'Phuket Krabi 5N6D', price: '₹40000', originalPrice: '₹50000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25895220231104224046.png', duration: '6 Days 5 Nights', title: 'Phuket Krabi Honeymoon Trip', price: '₹58000' }
];

const familyTours = [
    { imageUrl: '/cloned_media/6093520220627222939.png', duration: '6 Days 5 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 5N6D', price: '₹45000', originalPrice: '₹55000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/27844520231104222013.png', duration: '8 Days 7 Nights', title: 'Bangkok Krabi Phuket 7N8D', price: '₹80000' },
    { imageUrl: '/cloned_media/2479920240209115545.png', duration: '6 days 5 nights', title: 'Phuket Krabi 5N6D', price: '₹40000', originalPrice: '₹50000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25623320220627223345.png', duration: '7 Days 6 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 6N7D', price: '₹47999' },
    { imageUrl: '/cloned_media/15156320220627224541.png', duration: '5 Days 4 Nights', title: 'Thailand (Bangkok & Pattaya) 4N5D', price: '₹24999' },
    { imageUrl: '/cloned_media/25431020220425093432.png', duration: '5 Days 4 Nights', title: 'Thailand (Phuket, Phi Phi Island) 4N5D', price: '₹39999' }
];

const discoverTours = [
    { imageUrl: '/cloned_media/14238820250527102215.png', duration: '8 Days 7 Nights', title: 'Explore Wonders of Thailand', price: 'Customization Available' },
    { imageUrl: '/cloned_media/5466120250527100054.png', duration: '9 Days 8 Nights', title: 'Unforgettable Thailand Romantic Getaway', price: 'Customization Available' },
    { imageUrl: '/cloned_media/15156320220627224541.png', duration: '5 Days 4 Nights', title: 'Thailand (Bangkok & Pattaya) 4N5D', price: '₹24999' },
    { imageUrl: '/cloned_media/27844520231104222013.png', duration: '8 Days 7 Nights', title: 'Bangkok Krabi Phuket 7N8D', price: '₹80000' },
    { imageUrl: '/cloned_media/6093520220627222939.png', duration: '6 Days 5 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 5N6D', price: '₹45000', originalPrice: '₹55000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25623320220627223345.png', duration: '7 Days 6 Nights', title: 'Thailand (Phuket Krabi Phi Phi) 6N7D', price: '₹47999' },
    { imageUrl: '/cloned_media/25431020220425093432.png', duration: '5 Days 4 Nights', title: 'Thailand (Phuket, Phi Phi Island) 4N5D', price: '₹39999' },
    { imageUrl: '/cloned_media/2479920240209115545.png', duration: '6 days 5 nights', title: 'Phuket Krabi 5N6D', price: '₹40000', originalPrice: '₹50000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/41637120231104223052.png', duration: '10 Days 9 Nights', title: 'Thailand Explorer - Bangkok Pattaya Krabi Phuket', price: '₹85000', originalPrice: '₹98000', discount: '₹13,000' }
];

const explorerTours = [
    { imageUrl: '/cloned_media/20721320240209123146.png', duration: '9 Days 8 Nights', title: 'Thailand 9D8N', price: '₹55000', originalPrice: '₹65000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/41637120231104223052.png', duration: '10 Days 9 Nights', title: 'Thailand Explorer - Bangkok Pattaya Krabi Phuket', price: '₹85000', originalPrice: '₹98000', discount: '₹13,000' },
    { imageUrl: '/cloned_media/4871320240209130304.png', duration: '6 Nights 7 Days', title: 'Phuket explorer 6N7D', price: '₹49999' }
];

const reasons = [
  { icon: <Bed className="w-10 h-10 text-blue-700" />, title: 'Handpicked Stays with Friendly Hosts', description: 'All our accommodations are verified, pre-checked for quality and hygiene.'},
  { icon: <Airplay className="w-10 h-10 text-blue-700" />, title: '2500+ Trips Hosted PAN India & Abroad', description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.'},
  { icon: <Mountain className="w-10 h-10 text-blue-700" />, title: 'Solo Travel Friendly Trips for All', description: 'We provide absolutely safe and comfortable environment for solo travellers.'},
  { icon: <Award className="w-10 h-10 text-blue-700" />, title: 'Trip Itineraries Curated with Love', description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.'},
  { icon: <Users className="w-10 h-10 text-blue-700" />, title: '8 Years of On-Ground Experience', description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.'},
  { icon: <ThumbsUp className="w-10 h-10 text-blue-700" />, title: 'Rated 4.8 Stars on Google Reviews', description: 'Our growth lies in the memorable travel experiences we provide to our travellers.'},
  { icon: <CreditCard className="w-10 h-10 text-blue-700" />, title: 'Hassle-Free Booking Process', description: 'Seamless booking process on all our trips with the help of our travel experts.'},
  { icon: <UserCheck className="w-10 h-10 text-blue-700" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.'},
  { icon: <Zap className="w-10 h-10 text-blue-700" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!'},
];

const Thailand = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/10448920240125155607.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Thailand"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Thailand Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Thailand Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Thailand with Go4Explore</h2>
                <p>Searching for a perfect island nation to spend your holidays in? Why not plan a trip to Thailand, with one of the world’s most serene beaches and sparkling blue water bodies, it has jaw dropping sceneries to witness. It may become a headache to plan an international trip all by yourself, but Congratulations because you have landed on the right page, Go4Explore will make it all easy for you with its Thailand Tour packages.</p>
                <p>Our Thailand Tour packages will get you on board to a mesmerizing journey like the one you have always dreamt of with a bunch of overwhelming moments to live. Dive in with Go4Explore Thailand Tour package to explore the hidden and feel the unsaid.</p>
                
                <h2>About Thailand Tour Packages</h2>
                <p>On flipping the pages of History, we can see that this Southeast Asian country was actually never colonized by Europeans but has seen many transitions between Monarchs and Military coups. Thailand is a collage of serene islands that consist of bustling modern cities crowded with Buddhist temples, hill tribes, lush landscapes with traditional farming and stunning collages, gorgeous beaches and blue lagoons. The captivating beauty of Thailand will make you fall in love with the place and also the locals.</p>
                <p>Thailand Tour package will take you on an incredible journey where you can admire the islands and mountains sharing the same space, blend of modernization and Thai culture without compromising with its richness. Thailand also beholds many adventure activities and sports that will leave you with an adrenaline-rush, from diving into the sea to chilling on the beachside, Thailand Tour Package offers you a perfect and fascinating trip package ensuring that you have a great time in Thailand.</p>
                <p>Explore our Thailand Tour Package: <a href="https://go4explore.com/trips/thailand-full-moon-party">Thailand Full Moon Party</a>, <a href="https://go4explore.com/trips/thailand-phuket-krabi-phi-phi-5n6d" style={{color:'blue'}}>Thailand Phuket Krabi Phi Phi Trip</a>, <a href="https://go4explore.com/trips/phuket-krabi-5n6d" style={{color:'blue'}}>Phuket Krabi 5N/6D</a>, <a href="https://go4explore.com/trips/thailand-explorer-bangkok-pattaya-krabi-phuket" style={{color:'blue'}}>Thailand Explorer</a>, <a href="https://go4explore.com/trips/honeymoon-special-phuket-krabi" style={{color:'blue'}}>Phuket Krabi Honeymoon Package</a></p>
                
                <h3>Best Places to visit in Thailand Tour</h3>
                <p><strong>Phuket:</strong> Phuket is a beautiful place with streets that have so much to give to the tourists from beautiful beach side to vibrant local markets. Our Phuket trip Package will leave you speechless with its beauty. Phuket’s most attractive Bangla walking street gives you a chance to hop into different bars and enjoy the nightlife in Phuket.</p>
                <p><strong>Bangkok:</strong> Bangkok is not only the capital city of Thailand but also the most populated city too. Bangkok has some unique architectural style where you can witness the combination of ancient Buddhist Monasteries and modern building designs. You can also explore the floating market of Bangkok.</p>
                <p><strong>Krabi Ao Nang:</strong> A hub to all adventure activities and shopping you can also get the taste of Thailand from here.</p>
                <p><strong>Phi Phi Island:</strong> Get ready to witness the best sunsets of your trip so far from a cliff and after the party hop on to beach bars and have a crazy night in Phi Phi Island. After witnessing the most amazing sunset of your life, enjoy the most famous pool party in Thailand “Ibiza Pool Party”.</p>
                <p><strong>Koh Samui:</strong> Locals recognize this as the Largest inhabited Island of Thailand, with dazzling blue water and sparkling white sand beaches inviting you to relax and chill.</p>
                <p><strong>Erawan National Park:</strong> Erawan National Park has earned fame from its special 7 level waterfall and this beautiful national park which has borrowed its name from a three-headed elephant from Hindu culture. Here you get a chance to feel the extensive clear and pure water bodies, and if you want it to be prolonged you can also stay in the tents available there.</p>
                <p><strong>Sukhothai National Park:</strong> This place provides rich knowledge of Thailand’s culture and history, as declared by UNESCO World heritage it has preservatives from past kingdoms. The lake temple present in this region has a majestic temple surrounded by lotus flower and sparkling pond where the festival of Loy Krathong is also celebrated.</p>
                <p><strong>Chiang Mai:</strong> With a perfect blend of culture, history, adventure and food variety Chiang Mai is a major attraction of the country. Elephants are a significant part of this city and to preserve them they also have an amazing Elephant Jungle Sanctuary. Here you also get to feed elephants or bathe them with your own hands.</p>
                <p><strong>Pattaya:</strong> Thailand is a major hub for watersports and activities, seaside massages and as the sunsets and night arrives, you can feel crazy party vibes from beach side bars and clubs. Pattaya remains vibrant at all times and is worth visiting once.</p>
                <p><strong>Koh Phangan</strong>: Koh Phangan is a small island famous for Thailand Full Moon Party when the beach sees wild parties, cheap alcohol, neon paints, fire activities and many more such joyful events.</p>
                
                <h3>Top Things to do in Thailand Trip</h3>
                <p><strong>Shop in Bangkok’s Floating Market:</strong> How amazing would it be to shop while you are sitting on a boat. In the Floating market of Thailand, you will find vendors selling their items on a boat and this is altogether a different experience of shopping that every traveler should have.</p>
                <p><strong>Pamper yourself with Spas & Massage:</strong> When you are out on a vacation to Thailand you must relax and chill and what’s better than spa and massage centers. Thailand is famous for the massage and relaxation centers that help you rejuvenate and feel the positivity in your mind and soul.</p>
                <p><strong>Loy Krathong:</strong> If you're lucky enough to visit Thailand during the Loy Krathong festival, which translates to the festival of light or floating lantern festival, you must attend this festival as it refreshes you with happiness, joy and engulfment in the different lights of life. It is not just a festival of lights but Thais believe that it was first started to  thank the Goddess of Water and River, Goddess Khongkha.</p>
                <p><strong>Island Hopping:</strong> Experience the wonderland by hopping onto different islands like Maya Bay, Bamboo Island, Monkey Island & Viking Cave by speedboats.</p>
                <p><strong>Explore Krabi’s Cafes & Bars:</strong> There are many cafes and bars with perfect ambience and great taste of food in Krabi. Hop onto the different cafes while enjoying the nightlife of Krabi to the fullest. You get to taste a variety of items and have a crazy night on the island.</p>
                <p><strong>Water Sports & Adventure Activities:</strong> From snorkeling to ATV rides, from deep diving into oceans to Fun adventure activities on beaches, You have a chance to experience all the crazy and adventurous moments of your life here.</p>
                <p><strong>Thailand’s Full Moon Party: </strong>Thailand Full Moon Party takes place every month in Koh Phangan Island of Thailand, where people gather around the place with bottles to vibe with music and dance like no one’s watching under the bright moonlight. Though it had started off as a small celebration it eventually gained popularity worldwide and now it is a part of every party bug’s bucket list.</p>
                
                <h3>What to Eat in Thailand Tour?</h3>
                <p>One of the most interesting facts about traveling is that you get to try different varieties of food. There are some popular Thai restaurants like White Jai, Paebanrimnam restaurant, Kaiyang Buatong, Budsi’s Place etc. Some of the must-try food items of Thailand are:</p>
                <p><strong>Tom Yum Goong:</strong> This exotic dish is a spicy shrimp soup that has a unique combination of ingredients like fragrant lemon grass, lime juice, fish sauce, chillies and prawn. The perfect balance of flavors makes this dish popular among folks.</p>
                <p><strong>Guay Tiew Reua:</strong> Guay Tiew Reua owes its name from ancient times when noodles were served from boats. It is a delicious noodle soup cooked with a meat broth in special Thai Flavours and spices which enhances the taste.</p>
                <p><strong>Gaeng Daeng Gai: </strong>Red curry with large amounts of spices and chillies with garlic, lemongrass and many more such flavors including chicken, eggplant is firmly mixed with coconut milk. This curry is usually served along with steamed jasmine rice.</p>
                <p><strong>Khao Pad Sapparod:</strong> Popularly known as Pineapple fried rice, Khao Pad Sapparod is a perfect combination of Thai jasmine rice, fresh shrimps, and pineapple. Sauces like shrimp sauce, oyster sauce and fish sauce strikes the right balance of flavors and elevates the taste of fried rice.</p>
                <p><strong>Pad Kra Pao Moo:</strong> It is the most popular dish where a variety of flavours and items are served in a single plate inThailand restaurants. Minced pork is stir fried with Thai basil leaves, served with steamed rice, sauce and cucumber. You also get an option to have an egg or not.</p>
                <p><strong>Gai Pad Med Ma Muang:</strong> The hero ingredients of this menu item are cashew nuts and chicken, stir fried with garlic, onions, mushrooms and chillies. This dish spicy, sweet, crispy and chewy will only elevate your experience of Thai foods.</p>
                
                <h3>Best Time to reach Thailand</h3>
                <p><strong>November- March:</strong> Dry seasons are the best time to land on an island country or beach side. The time between November and March is considered the best time to visit Thailand as due to dry and cool weather you can experience and engulf in adventure activities outdoors, chill by the beach side and have crazy nightlife in Thailand.</p>
                
                <h3>How To Reach Thailand</h3>
                <p><strong>Airways:</strong> International airports across the countries worldwide including India have been well connected to  Bangkok’s international airport. From Bangkok you can board a flight to your respective destination or get a cab to the first place you want to visit too.</p>
                <p><strong>Roadways:</strong> There is no direct road to reach Thailand from some other country but after you land at the airport you can take a bus/cab to travel to your respective place.</p>
                <p><strong>Railways:</strong> After you reach Bangkok you can take a train from Bangkok railway station to your travel destination and from there take a bus or take a ferry if you have to travel to some other Island.</p>
                <p><strong>Waterways:</strong> If you want to reach Thailand directly through cruise or ship there cruise services from Hong Kong, Europe and Australia which will leave you at Phuket and Bangkok. There are many ferries that connect islands of Thailand and thus you can travel to different Islands through inland waterways too. </p>
                
                <h3>FAQS:</h3>
                <p><strong>Which season is best to visit Thailand?</strong></p>
                <p>The best time to visit Thailand is during the dry season from November to April.</p>
                <p><strong>Is a Thailand visa free for Indians?</strong></p>
                <p>No, Thailand is not visa free for Indians, though getting Visa for Thailand is comparatively easier than many other countries. You can also apply for e-visa on arrival that will also simplify your whole process.</p>
                <p><strong>What is the cheapest time to travel to Thailand?</strong></p>
                <p>The cheapest time to travel to Thailand lasts from May to October, which is the time when its less crowded and cheap due to the rainfall season in Thailand.</p>
                <p><strong>Which part of Thailand is best to stay?</strong></p>
                <p>Chiang Mai, part of Thailand has one of the best places to stay for tourists and travelers.</p>
              </div>
            </ExpandableText>
          </section>
          
          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <TripSlider trips={handpickedTrips} slidesToShow={3} />
              </div>
              <aside className="lg:col-span-4">
                <div className="border bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-center mb-1">Let's plan your next trip</h3>
                  <p className="text-center text-sm text-gray-600 mb-6">Make your move, fill out your details now!</p>
                  <ContactForm />
                </div>
              </aside>
            </div>
          </section>

          <div className="space-y-20 mt-20">
            <section>
              <h2 className="text-4xl font-bold mb-6">Thailand Honeymoon Trips – Romantic Escape Awaits!</h2>
              <TripSlider trips={honeymoonTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Thailand Family Trips – Fun, Adventure & Memories!</h2>
              <TripSlider trips={familyTours} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Discover Tours – Explore Bangkok & Phuket!</h2>
              <TripSlider trips={discoverTours} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Thailand Explorer Edition Tours</h2>
              <TripSlider trips={explorerTours} slidesToShow={3} />
            </section>
          </div>

          <section className="py-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12">Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4 inline-block bg-blue-100 p-4 rounded-full">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-[#0B3A55] mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thailand;