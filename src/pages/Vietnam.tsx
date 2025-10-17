import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (VIETNAM) ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/38391920240919072750.png', duration: '8 Days 7 Nights', title: 'Vietnam Backpacking', price: '₹59999' },
    { imageUrl: '/cloned_media/5980220230801183603.png', duration: '7 Days 6 Nights', title: 'Vietnam Trip with Flights', price: '₹79999' },
    { imageUrl: '/cloned_media/396320230630111014.png', duration: '10 Days 9 Nights', title: 'Vietnam Signature - 10D9N', price: '₹70000', originalPrice: '₹75000', discount: '₹5,000' },
    { imageUrl: '/cloned_media/23211120230630105031.png', duration: '8 Days 7 Nights', title: 'Vietnam Explorer 8D7N', price: '₹60000', originalPrice: '₹65000', discount: '₹5,000' }
];

const leisureTrips = [
    { imageUrl: '/cloned_media/9944320250527113431.png', duration: '10 Days 9 Nights', title: 'Unforgettable Vietnam Odyssey', price: 'Customization Available' },
    { imageUrl: '/cloned_media/14260120250527131710.png', duration: '7 Days 6 Nights', title: 'Enchanting Escape to Vietnam', price: 'Customization Available' },
    { imageUrl: '/cloned_media/31021120230326032607.png', duration: '6 Days 5 Nights', title: 'Vietnam - DaNang Ho Chi Minh 6D5N', price: '₹36500' },
    { imageUrl: '/cloned_media/19946620230326031410.png', duration: '6 Days 5 Nights', title: 'Vietnam- Danang Hanoi 6D5N', price: '₹36500' },
    { imageUrl: '/cloned_media/41438420220627214651.png', duration: '10 Days 9 Nights', title: 'Vietnam 9N10D', price: '₹64999' },
    { imageUrl: '/cloned_media/3632920220627220226.png', duration: '5 Days 4 Nights', title: 'Vietnam North', price: '₹32000' },
    { imageUrl: '/cloned_media/37887720240212133944.png', duration: '6 Days 5 Nights', title: 'Ho Chi Minh & Hanoi 6D5N', price: '₹39999' }
];

const honeymoonTrips = [
    { imageUrl: '/cloned_media/40202220250527130511.png', duration: '7 Days 6 Nights', title: 'Gems of Vietnam - Couple Exclusive', price: 'Customization Available' },
    { imageUrl: '/cloned_media/28216720250527114658.png', duration: '8 Days 7 Nights', title: 'Romantic Vietnam Vacation', price: 'Customization Available' },
    { imageUrl: '/cloned_media/15190920231027220349.png', duration: '8 Days 7 Nights', title: 'Vietnam Explorer- Honeymoon Edition', price: '₹85000' },
    { imageUrl: '/cloned_media/5212320231027215055.png', duration: '7 Days 6 Nights', title: 'Vietnam Honeymoon Trip - Hanoi & Da Nang', price: '₹65000' },
    { imageUrl: '/cloned_media/7280420231027214631.png', duration: '5 Days 4 Nights', title: 'Southern Vietnam - Honeymoon Special', price: '₹40000' },
    { imageUrl: '/cloned_media/6447920231027213843.png', duration: '5 Days 4 Nights', title: 'Northern Vietnam - Honeymoon Special', price: '₹40000' },
    { imageUrl: '/cloned_media/396320230630111014.png', duration: '10 Days 9 Nights', title: 'Vietnam Signature - 10D9N', price: '₹70000', originalPrice: '₹75000', discount: '₹5,000' }
];

const groupTrips = [
    { imageUrl: '/cloned_media/38391920240919072750.png', duration: '8 Days 7 Nights', title: 'Vietnam Backpacking', price: '₹59999' },
    { imageUrl: '/cloned_media/5980220230801183603.png', duration: '7 Days 6 Nights', title: 'Vietnam Trip with Flights', price: '₹79999' },
    { imageUrl: '/cloned_media/23211120230630105031.png', duration: '8 Days 7 Nights', title: 'Vietnam Explorer 8D7N', price: '₹60000', originalPrice: '₹65000', discount: '₹5,000' }
];

const startHoChiMinhTrips = [
    { imageUrl: '/cloned_media/38391920240919072750.png', duration: '8 Days 7 Nights', title: 'Vietnam Backpacking', price: '₹59999' },
    { imageUrl: '/cloned_media/396320230630111014.png', duration: '10 Days 9 Nights', title: 'Vietnam Signature - 10D9N', price: '₹70000', originalPrice: '₹75000', discount: '₹5,000' },
    { imageUrl: '/cloned_media/23211120230630105031.png', duration: '8 Days 7 Nights', title: 'Vietnam Explorer 8D7N', price: '₹60000', originalPrice: '₹65000', discount: '₹5,000' },
    { imageUrl: '/cloned_media/31021120230326032607.png', duration: '6 Days 5 Nights', title: 'Vietnam - DaNang Ho Chi Minh 6D5N', price: '₹36500' },
    { imageUrl: '/cloned_media/41438420220627214651.png', duration: '10 Days 9 Nights', title: 'Vietnam 9N10D', price: '₹64999' },
    { imageUrl: '/cloned_media/37887720240212133944.png', duration: '6 Days 5 Nights', title: 'Ho Chi Minh & Hanoi 6D5N', price: '₹39999' },
    { imageUrl: '/cloned_media/15190920231027220349.png', duration: '8 Days 7 Nights', title: 'Vietnam Explorer- Honeymoon Edition', price: '₹85000' },
    { imageUrl: '/cloned_media/7280420231027214631.png', duration: '5 Days 4 Nights', title: 'Southern Vietnam - Honeymoon Special', price: '₹40000' }
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

const Vietnam = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/18409920240105072501.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Vietnam"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Vietnam Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Vietnam Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <h2>Explore Vietnam with Go4Explore</h2>
                  <p>Have you ever dreamt of taking international trips? Well, then you have landed on the right page Go4Explore will turn your dreams to reality. Where one moment you were scrolling youtube and watching videos about Vietnam and Vietnamese culture, next moment you will find yourself hovering in the streets of Hanoi, Halong Bay and walking through the largest Cave Ecosystem. Vietnam is not just a place of exceptionally beautiful cities but also a place to experience hospitality by warm and welcoming locals.</p>
                  <p>Vietnam is a land of intricate beauty that will leave you captivated, Go4Explore gives you an opportunity to board with us on our handcrafted Vietnam Tour Packages from Delhi, Bangalore, Hyderabad, Chennai, Mumbai, Ahmedabad, Vadodara, Kolkata and visit the famous cities and cherish their rich culture and heritage.</p>

                  <h2>About Vietnam Tour Packages</h2>
                  <p>Vietnam, a country located in the Southeast of Asia contributing to the enhancement of the region's diversity. Vietnam’s History plays a crucial role in how it functions today. It has impacted people, their lifestyle and the value system they hold which passes on from generation to generation but not as a burden rather it is carried as a wealth. Vietnam is a land of stunning landscapes with each local carrying their own unique stories, each city offers a unique adventure while bustling streets of Vietnam are fueled with mouth watering food and beverages. Country has the perfect blend of modern developments and structures standing hand in hand with Ancient cultural styles, it gracefully carries modern hustle while holding on to the roots of Vietnamese culture and heritage. Here mountains meet the sea, skies meet the ground thus offering each and everyone with thrilling and at the same time relaxing environment to be surrounded by.</p>
                  <p>This paradise proposes you with transitions of environment as you change location. Go4Explore takes you on a journey through lush rice terraces to striking mountains to highlands to colonial towns and so on and so forth.</p>

                  <h3>Best Places to visit during Vietnam Tour</h3>
                  <ul>
                      <li><strong>Hanoi City:</strong> Capital of Vietnam sees the pristine blend of ancient traditions with modern life. Stroll through the bustling markets and streets in the Old Quarter, mystic temples, and street vendors offering you with exotic fruits. Hanoi city is home to the iconic Turtle Tower and holds St. Joseph’s Cathedral as the testament of Hanoi’s colonial past reminding people of their struggle and to always respect their heritage.</li>
                      <li><strong>Halong Bay:</strong> Everyone has heard about this popular UNESCO World Heritage site, but what you might not be knowing is that Halong Bay literally means “descending dragons”. Vietnamese believe that dragons from heaven had made this place to protect Vietnamese. It grounds Limestone Islands and is also home to lagoons that hover around the mystic caves of Halong Bay.</li>
                      <li><strong>Nin Binh:</strong> Uncover the hidden gem Nin Binh which holds ancient temples, stunning landscapes. Along with witnessing such sights feel the joy of Tam Coc Boat ride through rice paddies and limestone rocks.</li>
                      <li><strong>Da Nang:</strong> It's the coastal city of Vietnam where you can find golden sands of My Khe beach to chill, the sparkling beauty of Dragon bridge at night and explore sacred caves of Marble Mountain.</li>
                      <li><strong>Hoi An:</strong> The charming town of Hoi An, well known as a UNESCO world Heritage site, is a city with well preserved ancient architecture.</li>
                      <li><strong>Golden Hand Bridge:</strong> Walk through a 150 m long bridge held up by a mountain god which is made up of steel mesh and fireglass.</li>
                      <li><strong>Ba Na Hills:</strong> Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li>
                      <li><strong>Ho Chi Minh:</strong> Filled with positive vibration is this metropolitan city of Southern Vietnam formerly known as Saigon. Ho Chi Minh encapsulates a bulk of different experiences with skyscrapers touching skies, to grounding and humble personalities of locals promoting ancient culture and historical significance. Being the hub of commerce and culture, <a href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" style={{color:'blue'}} rel="noopener noreferrer" target="_blank">Ho Chi Minh</a> holds greater significance than one can imagine.</li>
                      <li><strong>Mekong Delta:</strong> Mekong Delta provides you with the chance to cruise over the channels of waterways on the mighty river Mekong, explore floating markets and unique lifestyles of Delta inhabitants.</li>
                      <li><strong>Cu Chi Tunnels:</strong> Get a chance to travel to Vietnam's Guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour.</li>
                  </ul>

                  <h3>Top Things to do during Vietnam Trip</h3>
                  <p>There are dozens of incredible things to do when you visit Vietnam, here is a list of things you must try on you Vietnam Tour Package:</p>
                  <ul>
                      <li><strong>Hiking:</strong> Hiking on the hills will surely be an adventurous experience with scenic landscapes all around you.</li>
                      <li><strong>Landscape Photography:</strong> To all photographic enthusiasts, it offers you a perfect place to capture nature’s beauty.</li>
                      <li><strong>Scooter ride around Nin Binh:</strong> Surrounded by massive limestone cliffs, take a scooter ride to explore the real countryside of Vietnam.</li>
                      <li><strong>Explore streets:</strong> Walk around and explore Vietnamese lifestyle, culture and specially the street foods of all varieties with different street vendors selling exotic fruits.</li>
                      <li><strong>Hoi A Lanterns:</strong> A city with beautiful lanterns hanging around all over the place adding to the charm of the streets that has the power to turn people photogenic with its attractive elements. It is majorly famous for the lanterns that illuminate the whole city, hundreds of lanterns floating in the river radiate the real beauty of nature.</li>
                      <li><strong>Island Cave:</strong> Halong Bay has island caves where you can walk through and have an incredible experience.</li>
                      <li><strong>History of Vietnam through the walls of Saigon architecture:</strong> It’s the largest city and this place holds special significance because this is the place where the long painful Vietnam war ended.</li>
                  </ul>

                  <h3>What to Eat in Vietnam Tour?</h3>
                  <p>Known for fresh ingredients with a striking balance of sour, sweet, spicy and salty, Vietnamese food awaits your arrival in every street of Vietnam. Walking under the vibrant city lights experience the Taste of Vietnamese mouth watering cuisines, to help you better in tasting the yummiest foods of Vietnam. Here is a list of Must eat food items and dishes:</p>
                  <ul>
                      <li><strong>Pho:</strong> Most popular dish worldwide, Pho is in the bucket list of every food traveller. It's a soup with broth made of chicken or beef bones as its hero ingredient and with perfect garnishing it enhances the taste of the dish.</li>
                      <li><strong>Banh Mi:</strong> An iconics Vietnamese sandwich which is the hero of streets in the country. It reflects the past of Vietnamese because of its French influence.</li>
                      <li><strong>Bun Cha:</strong> Grilled patties or seasonal pork marinated with fish sauce and spices are loved by tourists and locals alike due to its smoky flavor. Interesting fact is that it is the favourite Vietnamese food of former U.S President Obama.</li>
                      <li><strong>Goi Cuon:</strong> Fresh spring rolls popularly used as Appetizers. Often accompanied by dipping sauce consisting of peanuts. It is a perfect starter for warm weather.</li>
                      <li><strong>Band Xeo:</strong> Vietnamese favourite crispy pancake, is served with lettuce leaves, wrapped in rice paper.</li>
                  </ul>
                  <p>There are many more such delicious foods which you can taste yourself!</p>

                  <h3>Best Time to Visit Vietnam</h3>
                  <p>Best time to visit Vietnam if you want it to be less crowded can be May to October if you want to visit the north, September to May if you would like to explore the central part, and May to September if you want to travel to the southern part of the country. If we try to figure out the best months to visit in terms of weather then February and March are the best times to fly to this country.</p>

                  <h3>How To Reach Vietnam</h3>
                  <p><strong>Airways:</strong> From India board a flight to Vietnam which has connecting flights to three international airports Hanoi, Ho Chi Minh City, and Danang and it will take around 7-12 hours to reach your dream destination.</p>
                  <p>You can Explore more Vietnam Tour Packages: <a href="https://go4explore.com/trips/vietnam-north" style={{color:'blue'}}>Vietnam Hanoi Tour Packages</a>, <a href="https://go4explore.com/trips/vietnam-explorer-8d7n" style={{color:'blue'}}>Vietnam Explorer 8D/7N</a>, <a href="https://go4explore.com/trips/vietnam-signature-10d9n" style={{color:'blue'}}>Vietnam Signature 10D/9N</a>, <a href="https://go4explore.com/trips/vietnam-trip-with-flights" style={{color:'blue'}}>Vietnam Trip With Flights</a></p>
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
              <h2 className="text-4xl font-bold mb-6">Vietnam Leisure Trips – Relax & Explore!</h2>
              <TripSlider trips={leisureTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Vietnam Honeymoon – Romantic Getaway!</h2>
              <TripSlider trips={honeymoonTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Vietnam Group Trips – Adventure Together!</h2>
              <TripSlider trips={groupTrips} slidesToShow={3} />
            </section>
             <section>
              <h2 className="text-4xl font-bold mb-6">Vietnam Tours – Start from Ho Chi Minh!</h2>
              <TripSlider trips={startHoChiMinhTrips} slidesToShow={4} />
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

export default Vietnam;