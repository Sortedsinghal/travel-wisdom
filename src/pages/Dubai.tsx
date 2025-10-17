import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (DUBAI) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/23958420231018151140.png', duration: '6 Days 5 Nights', title: 'Dubai 6D5N with Adventure Activities', price: '₹80000' },
    { imageUrl: '/cloned_media/25318520231018150041.png', duration: '5 Days 4 Nights', title: 'Dubai 5D4N with Ferrari World', price: '₹55000' },
    { imageUrl: '/cloned_media/24856720230328075635.png', duration: '6 Days 5 Nights', title: 'Dubai - 6D5N', price: '₹64999', originalPrice: '₹69999', discount: '₹5,000' }
];

const familyTours = [
    { imageUrl: '/cloned_media/26941320231018151503.png', duration: '7 Days 6 Nights', title: 'Dubai 7D6N', price: '₹90000' },
    { imageUrl: '/cloned_media/24856720230328075635.png', duration: '6 Days 5 Nights', title: 'Dubai - 6D5N', price: '₹64999', originalPrice: '₹69999', discount: '₹5,000' },
    { imageUrl: '/cloned_media/35782520231018150638.png', duration: '5 Days 4 Nights', title: 'Dubai 5D4N', price: '₹55000' },
    { imageUrl: '/cloned_media/25294820231018145803.png', duration: '4 Days 3 Nights', title: 'Dubai-4D3N', price: '₹42000', originalPrice: '₹50000', discount: '₹8,000' },
    { imageUrl: '/cloned_media/25318520231018150041.png', duration: '5 Days 4 Nights', title: 'Dubai 5D4N with Ferrari World', price: '₹55000' }
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

const Dubai = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/24358320240921120300.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Dubai"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Dubai Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Dubai Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Dubai with Go4Explore</h2>
                <p>We all travel to places with beaches and mountains but how often have we seen prime destinations that not only have beaches or valleys but are also examples of futuristic worlds? Fame of UAE, Dubai is not just a marvel of modern engineering and architecture but also a model for luxurious lifestyle.</p>
                <p>Join Go4Explore through our <a href="/trip/dubai">Dubai Tour Packages</a> and unveil the beauty and thrill of the stunning city of UAE. From Dubai Adventure Trips to Dubai Honeymoon trips, Go4Explore has travel plans suitable to all so that you can have a laid back experience. With Soaring skyscrapers, and vast desserts Majestic city of gold awaits your arrival, so what are we waiting for? Get on board with Go4Explore and travel to your dream destination with us only to bring back home happy and unforgettable memories.</p>
                
                <h2>About Dubai Tour Packages</h2>
                <p>From starting off as a fishing village in 1833 to ending up as a major trading hub, Dubai has evolved in every sense in the last 3 centuries. Traveling to Dubai isn't just a wonderland of architectural marvels but also a center of a vibrant cultural scene. The city hosts major events like the Dubai World Cup (horse racing), Dubai Shopping Festival, and concerts by international artists. Dubai's climate is hot and sunny year-round, making it a popular beach destination.</p>
                <p>Dubai is not just a major place for sightseeing but also a hub for adventure activities like Hot Air Balloon Ride over the Desert to enjoy the panoramic views from above the dunes and Ski Dubai. With a combination of modern and ancient attractions, Dubai offers a diverse array of sightseeing opportunities. This glamorous city in the United Arab Emirates, is renowned for its breathtaking beauty and architectural marvels however beauty lies in its ability to blend tradition with modernity, creating a unique and captivating urban landscape that attracts tourists from around the world. While embracing modernity, Dubai hasn’t forgotten its cultural roots through its traditional souks, where the aroma of spices and the sparkling gold beckon helps travelers experience the city's rich heritage.</p>

                <h3>9 Best Places to visit during Dubai Tour</h3>
                <ul>
                    <li><strong>Burj Khalifa:</strong> This iconic skyscraper stands on the grounds of Dubai with a height of 2,717 ft, holding many records such as World’s highest occupied floor, World's tallest free structure, Elevator with the longest travel distance in the world etc. It was first restricted only for residents and then the 124th floor was opened as an observation deck for tourists.</li>
                    <li><strong>Dubai Frame:</strong> Providing an incredible view of the city, Dubai Frame is the world's largest picture frame that is placed such that one side of the frame gives a view of old town and the other side shows the sights of modern architecture.</li>
                    <li><strong>Dubai Mall:</strong> Located in downtown Dubai, Dubai mall is not just another mall but it has all the luxurious brands you can imagine and wish to shop from. Not only shopping but Dubai mall also offers direct entry to the underwater zoo, Dubai Ice Rink.</li>
                    <li><strong>Museum of the future:</strong> This Museum is quite different from usual ones because Museums usually are preservations of memories and artifacts from the past but Museum of Future shows AR and VR views of Dubai and the world in 2071 and also gives you a chance to explore life on a space station.</li>
                    <li><strong>Dubai Aquarium:</strong> Walk through the Aquarium while you are surrounded by aquatic marvels, seems unrealistic right? But Dubai Aquarium located within the Dubai Mall gives you a chance to walk into the underwater zoo and watch marine life while you are caged in a tunnel and they are free.</li>
                    <li><strong>Ferrari World:</strong> This is a Ferrari themed world featuring adrenaline- rush rides and the world’s fastest rollercoaster. From authentic Italian cuisine to racing events, concerts, luxury hotels etc Ferrari world is a different universe in itself.</li>
                    <li><strong>Dubai Fountain:</strong> Dubai fountain is located in the heart of Dubai mall and is displayed as colorful with illuminated jets and the fountain seems magical.</li>
                    <li><strong>Miracle Garden:</strong> With a heart shaped path <a href="https://en.wikipedia.org/wiki/Dubai_Miracle_Garden" style={{color:'blue'}} target="_blank" rel="noopener noreferrer">Miracle Garden</a> is the world's largest natural flower garden. A model of Emirates airplane is placed right in the center covered with around 5 lakh fresh flowers that elevates the beauty of the entire Miracle Garden.</li>
                    <li><strong>Atlantis Palm Hotel:</strong> This luxury Dubai hotel on the Palm Jumeirah and apart from the luxurious stay it also has Atlantis Waterpark with more than 30 around water rides that will give you a thrilling experience.</li>
                </ul>

                <h3>Top 10 Things to do in Dubai Trip</h3>
                <ul>
                    <li><strong>Desert rides in Dubai:</strong> First thing that will come to your mind when you visit the vast desert of Dubai is an Arabian Nights ambience where scenarios are perfectly synchronized under starry skies. Make your way through golden sand dunes of Dubai in vehicles for around 30-40 mins. Amidst dunes and tents explore the thrilling desert adventure. An Arabian Nights ambiance under starry skies.</li>
                    <li><strong>Skydiving over Palm Jumeirah:</strong> Feel the freedom while falling over stunning Palm Jumeirah landscape as this adrenaline-pumping sport will only leave you astonished by how life feels slow even when you are falling at fast pace. Skilled instructors ensure safety during this bucket-list adventure.</li>
                    <li><strong>Experience on Dhow Marina Cruise:</strong> Dhow cruise is a traditional wooden cruise that moves along Dubai Marina. With a lavish international buffet under perfect Dubai skies, enjoy breath holding sights of the city.</li>
                    <li><strong>Shopping in Dubai Mall:</strong> Dubai Mall is filled with 1400 leisure brands and various food outlets, everyone who travels to Dubai visits Dubai Mall without any fail.</li>
                    <li><strong>Adventure in Ferrari World:</strong> Ferrari World is an entirely Ferrari themed park where one can experience going on a thrilling drive in a Ferrari, do Go Karting, get a seat on world’s fastest rollercoaster and feel the chills while ziplining etc.</li>
                    <li><strong>Kite Beach:</strong> Kite beach is an artificial island that is more than 2.3km in length and popular for kitesurfing, wakeboarding, or stand-up paddleboarding. It is a perfect spot to chill by the beach side with your family and friends and enjoy serene sunset views.</li>
                    <li><strong>Enjoy Rides at IMG Worlds of Adventure:</strong> IMG Worlds of Adventure offers visitors with some of the most amazing and thrilling rides like Ride of Gumball, an interactive ride that lets you shoot at targets and score points, Adventure Time - The Ride of OOO with Finn & Jake, a rail ride to the Land of Ooo, and 5D cinema of Ben 10 5D Hero Time.</li>
                    <li><strong>Enjoy Skiing at Ski Dubai:</strong> Ski Dubai is an indoor Ski attraction for tourists who have immense love for skiing and want to get a chance to snowboard toboggan and experience a penguin encounter all inside Middle East’s first indoor Ski area, Ski Dubai.</li>
                    <li><strong>Day Out at Bollywood Parks:</strong> This is the Middle East’s first Bollywood theme park dedicated to the legendary romance, adventure, action, dance and stories that Hindi Cinema has given to the world. Along with 4D Bollywood Experiences it also has some rides that visitors can enjoy after diving into the world of Indian Cinema.</li>
                    <li><strong>Taste Arabian Food and Shisha:</strong> Shisha are famous in Dubai where people often visit to relax themselves with the fragrant smoke coming out of Shisha. Famous Shisha that you must visit are Pipes Shisha Lounge & Café, Smoky Beach, Shades, Al Sarab Rooftop Lounge, Shimmers, The Courtyards and Marbaiya Restaurant & Cafée etc.</li>
                </ul>

                <h3>What to Eat on a Dubai Tour?</h3>
                <ul>
                    <li><strong>Machboos:</strong> A traditional Emirati cuisine including spiced rice cooked, dried limes and with meat like chicken, lamb, or shrimp.</li>
                    <li><strong>Chami:</strong> This is another UAE special dish that is made of a flavorful curry-like stew made with meat, vegetables, and a blend of spices.</li>
                    <li><strong>Shawarma:</strong> Shawarma is a Middle Eastern Speciality dish that has fillings of thinly sliced meat (chicken/beef/ lamb) inside a flatbread with vegetables and sauces.</li>
                    <li><strong>Falafel:</strong> Deep-fried chickpea patties or balls, usually served in a sandwich or as a mezze.</li>
                    <li><strong>Seafood:</strong> Being a coastal city, Dubai offers fresh and delicious seafood options, such as grilled fish, shrimp, and seafood curries.</li>
                    <li><strong>Kunafa:</strong> Kunafa is a common cheese pastry soaked in sweet syrup, often filled with nuts or cream.</li>
                    <li><strong>Khubaiz:</strong> It is a street food Traditionally Emirati bread made with dates and cardamom.</li>
                    <li><strong>Beverages:</strong> One of the popular drinks, Jallab a drink made with dates, grape molasses, and rose water. Another interesting beverage that is famous around the world but here it is made with an Arabic touch. Dubai’s Arabic Coffee is Strong brewed coffee with the flavor of cardamom. Dubai’s popular Lemon Mint is yet another non-alcoholic beverage made with fresh mint, lemon, and sugar syrup.</li>
                </ul>

                <h3>How to get a Visa for Dubai?</h3>
                <p>The visa application for Dubai would take around 7-8 days and after you receive the visa it is valid for 30 days</p>
                <p>In case you have US, UK or any country of EU’s visa then you get an advantage of receiving 14 days visa on-arrival.</p>

                <h3>Best Time to reach Dubai</h3>
                <ul>
                    <li><strong>April to September:</strong> Dubai is considered as a hot region with dry winds due to deserts so it is advised to avoid these months.</li>
                    <li><strong>November to February:</strong> Though it is favorable to reach Dubai at all times, November to February is the best time to visit because of its pleasant weather. This calming weather only enhances your travel experience.</li>
                </ul>

                <h3>How To Reach Dubai from India?</h3>
                <ul>
                    <li><strong>Airways:</strong> It is preferable to take a 2-3 hours flight to Dubai because Dubai is well connected to all the major International airports of India.</li>
                    <li><strong>Roadways:</strong> If you want to reach Dubai by road then you have to first reach Oman, Abu Dhabi, Sharjah, Ajman, Masafi and from there take a bus or car to Dubai.</li>
                </ul>

                <h4>FAQ’s</h4>
                <p><strong>1. What is the best time to plan a Dubai tour?</strong></p>
                <p>November to February is the best time to plan a Dubai Tour.</p>
                <p><strong>2. Will I get a visa on arrival in Dubai?</strong></p>
                <p>If you have a US, Uk or any EU country’s visa, you get a 14 day visa for Dubai on arrival.</p>
                <p><strong>3. Do female travelers need a hijab in Dubai?</strong></p>
                <p>No, there is no need to wear a hijab in Dubai.</p>
                <p><strong>4. What are some of the activities to do during your Dubai tour?</strong></p>
                <p>SKi, Skydiving, Desert Safari, Paragliding, Party and many more activities can be done during Dubai Tour</p>
                <p>Explore our popular Dubai Tour Packages: <a href="https://go4explore.com/trips/dubai-5d4n-with-ferrari-world" style={{color:'blue'}}>Dubai Tour with Ferrari World</a>, <a href="https://go4explore.com/trips/dubai-6d5n-with-adventure-activities" style={{color:'blue'}}>Dubai Tour with Adventure Activities</a>, <a href="https://go4explore.com/trips/dubai-6d5n" style={{color:'blue'}}>Dubai Tour 6Days/5Nights</a></p>
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
              <h2 className="text-4xl font-bold mb-6">Dubai Family Tours</h2>
              <TripSlider trips={familyTours} slidesToShow={4} />
            </section>
            {/* The source code did not contain data for code3, code4, or code5, so those sections are omitted. */}
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

export default Dubai;