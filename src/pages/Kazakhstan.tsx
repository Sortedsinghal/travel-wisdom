import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (KAZAKHSTAN) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/13989620240831074222.png', duration: '6 Days 5 Nights', title: 'Kazakhstan Backpacking', price: '₹49999' },
    { imageUrl: '/cloned_media/10635320231113122348.png', duration: '5 Days 4 Nights', title: 'Kazakhstan- 5D4N', price: '₹45000' },
    { imageUrl: '/cloned_media/20043320240211074955.png', duration: '8 Days 7 Nights', title: 'Kazakhstan & Uzbekistan', price: '₹110000', originalPrice: '₹120000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25789620240219080516.png', duration: '5 Days 4 Nights', title: 'Almaty 5D4N Kazakhstan', price: '₹39999' }
];

const leisureTours = [
    { imageUrl: '/cloned_media/25789620240219080516.png', duration: '5 Days 4 Nights', title: 'Almaty 5D4N Kazakhstan', price: '₹39999' },
    { imageUrl: '/cloned_media/20043320240211074955.png', duration: '8 Days 7 Nights', title: 'Kazakhstan & Uzbekistan', price: '₹110000', originalPrice: '₹120000', discount: '₹10,000' },
    { imageUrl: '/cloned_media/10635320231113122348.png', duration: '5 Days 4 Nights', title: 'Kazakhstan- 5D4N', price: '₹45000' }
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

const Kazakhstan = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/24133320240919113959.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kazakhstan"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Kazakhstan Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Kazakhstan Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Kazakhstan with Go4Explore</h2>
                <p>Get on board on a flight to Kazakhstan with Go4Explore, the largest landlocked country in the world, decorated with gorgeous landscapes, vibrant cities and rich cultural heritage. Our Kazakhstan Tour Packages have so much to offer for a unique and unforgettable travel experience, exploring a Central Asian wonder that blends modernity with untouched natural beauty and rich history.</p>
                <p>Get a chance to explore Kazakhstan with Go4Explore’s hand crafted Kazakhstan Holiday Packages and visit the famous city of Almaty. From exploring natural wonders to indulging in thrilling adventure activities and cultural tours, have a look at our wide range of Kazakhstan travel Packages with exciting offers at Go4Explore for a memorable trip to Kazakhstan from Delhi, Bangalore, Hyderabad, Chennai, Mumbai, Ahmedabad, Vadodara, Kolkata or any city in India and create long-lasting travel memories amidst the wonderful landscapes ranging from deserts to mountains.</p>
                
                <h2>About Kazakhstan Tour Packages</h2>
                <p>Embarking on a Kazakhstan Tour promises an unforgettable journey through a land of diverse landscapes, rich ancient history and vibrant culture. With its gliding mountains, expansive steppes, and buzzing cities, Kazakhstan Offers a wealth of experiences for travelers seeking adventure, discovery and relaxation.</p>
                <p>The tour generally begins in Almaty, Kazakhstan’s largest city and cultural hub, where travelers can explore a blend of modernity and tradition. Highlights include the Central State Museum offering perception into Kazakhstan’s rich history and heritage, and the bustling Green Bazaar, where one can shop for remembrance and try local Delicacies.</p>
                <p>From Almaty, Visitors venture into the stunning natural landscapes that define Kazakhstan’s appeal. Charyn Canyon, often compared to the Grand Canyon, mesmerizes with its dramatic rock formations and hiking trails, while the picturesque beauty of Big Almaty Lake offers a serene escape in Tien Shan Mountains.</p>
                <p>As the tour advances, Visitors travel to Nur Sultan (Formerly Astana), the futuristic capital city known for its avant-garde architecture and cultural landmarks. Must see attractions include the Baiterek Tower, offering mesmerizing views of the city and The Palace of Peace and Reconciliation, A symbol of Kazakhstan’s commitment to Global Harmony.</p>
                <p>Exploring Kazakhstan’s ancient Silk Road Heritage is another highlight of the tour. With visits to historic cities like Turkestan, home to architectural gems like the Mausoleum of Khoja Ahmed Yasawi. Travelers can delve into the region’s rich history, cultural exchanges and architectural wonders, gaining insights into Kazakhstan’s pivotal role in trade and civilization along the silk road.</p>
                <p>Outdoor enthusiasts will find ample opportunities for adventure in Kazakhstan’s vast wilderness area. From skiing in the Tien Shan Mountains to trekking through national parks like Altyn Emel and Kolsai Lakes there are activities to suit every interest and skill level.</p>
                <p>Throughout the tour, sampling Kazakh Cuisine is culinary pleasure not to be missed. From Hearty Dishes like Beshbark and Plov to relishing treats like shashlik and manty, each meal offers a taste of Kazakhstan’s Culinary Heritage.</p>
                <p>Regardless, exploring the vibrant city life, marveling at natural wonders or immersing oneself in cultural traditions, This Kazakhstan Tour Package promises an unforgettable journey marked by diversity, beauty and hospitality.</p>

                <h3>Best Places To Visit in Kazakhstan Tour Packages</h3>
                <p>Planning Kazakhstan Tour Package with Go4Explore will make you admire the Country’s essence in true sense, with exploring a diverse array of attractions and destinations on the way, you’ll find yourself lost in the beauty of Kazakhstan. Here are some of the must visit attractions:-</p>
                <ul>
                    <li><strong>Almaty-</strong> Begin your journey with Kazakhstan’s biggest city Almaty, offering a combination of modernity and natural beauty. Explore the Central State Museum to learn more about Kazakhstan's ancient history, visit the Vibrant Green Bazar and take a cable car ride to Kok Tobe Hill for breathtaking views of the city.</li>
                    <li><strong>Charyn Canyon-</strong> Charyn National Park is nestled in the Almaty region of Kazakhstan. This wonder world offers wide ranges of flora and fauna, with wildlife spotting like wild boars, roe deer, hares, foxes, wolves, badgers, rock ptarmigans (partridges) etc. Charyn also provides a view to the historic canyon Monument which is formed with nature and sedimentary rocks, and is aged more than 12 billion years.</li>
                    <li><strong>Astana (Nur sultan)-</strong> Astana also known as Nur Sultan is the capital city of Kazakhstan, a futuristic metropolis with impressive architecture. Explore various iconic landmarks like the Baiterek Tower, Khan Shatyr, Entertainment Center and The Palace of Peace and Reconciliation. This city is also popular for its site of the Parliament House, Supreme Court, Ak Orda Presidential Palace and numerous government departments and agencies.</li>
                    <li><strong>Lake Kaindy-</strong> This mesmerizing Lake, located in the Tien Shan Mountains near Almaty. It is famous for its submerged forests. Travelers can go hiking, camping, or even scuba diving in its crystal clear waters.</li>
                    <li><strong>Kazakh Traditional Villages-</strong> Visit Kazakh’s traditional villages like Saty and Shonzy and experience authentic Kazakh culture, hospitality, and cuisine, take part in cultural activities, interact with locals and know more about their traditions and festivals, stay in a yurt and explore more around the villages.</li>
                    <li><strong>Turkestan-</strong> Delve into Kazakhstan’s rich history by visiting <a href="https://en.wikipedia.org/wiki/Turkestan" rel="noopener noreferrer" target="_blank" style={{color:'blue'}}>Turkestan</a>, an ancient city with architectural gems like Mausoleum of Khoja Ahmed Yasawi, a UNESCO World Heritage Site.</li>
                </ul>

                <h3>Top Things to do in Kazakhstan Tour</h3>
                <ul>
                    <li><strong>Hiking and Trekking-</strong> Lace up your hiking boots and explore Kazakhstan’s diverse landscapes on foot. Whether you are trekking in the Tien Shan Mountains, exploring the rugged terrain of Charyn Canyon or hiking to remote mountain lakes, there are streams suited for all levels of trekkers.</li>
                    <li><strong>Rock Climbing-</strong> Dare yourself to Rock Climbing adventures in Kazakhstan’s breathtaking areas. The Tien Shan Mountains offer excellent opportunities for Rock Climbing for both Novice and Experienced Climbers, with routes ranging from easy to challenging.</li>
                    <li><strong>White Water Rafting-</strong> Feel the adrenaline rush of rafting in white waters of Kazakhstan's rivers. The Chilik, Charyn, Ili Rivers offer thrilling rapids and mesmerizing views for rafting enthusiasts.</li>
                    <li><strong>Attend Cultural Festivals-</strong> If your visit occurs simultaneously with a cultural festival or event such as Nauryz (Kazakh New Year) or Kurban Ait (Eid-AL-Adha) engross yourself in the festivities. Experience traditional dance, food, music and rituals firsthand.</li>
                    <li><strong>Witness a Rocket Launch-</strong> If possible, arrange a visit to the Baikonur Cosmodrome, The World’s First and Largest operational space launch facility. Be a spectator to the awe-inspiring sight of a Rocket Launch into space and experience that only few travelers get to witness.</li>
                    <li><strong>Skiing in Tien Shan Mountains-</strong> While visiting in Winter Months, hit the slopes at one of Kazakhstan's ski resorts in the Tien Shan Mountains. Experience world class skiing, snowboarding, and winter sports surrounded by stunning mountain scenery.</li>
                    <li><strong>Camel Trekking-</strong> Participate in the ancient modes of transportation by embarking on Camel Trek across the vast Kazakh Steppe or desert regions like Mangystau Peninsula. Enjoy the rhythmic sway of the camel’s gait as you travel through breathtaking Landscapes.</li>
                    <li><strong>Biking Expeditions-</strong> Embark on the Biking Expeditions across Kazakhstan’s diverse rocky terrains, from mountain trails to desert tracks. Cycle through pristine valleys along scenic riverbanks and past ancient ruins for an unforgettable adventure.</li>
                    <li><strong>Wildlife Safaris-</strong> Join Wildlife Safaris to perceive to Kazakhstan’s diverse fauna in their natural habitats, spot rare species like snow leopard, siberian ibex and saiga antelope in protected areas such as Altyn Emel National Park, and the Aksu Zhabagly Nature Reserve.</li>
                    <li><strong>Sample Kazakh Cuisine-</strong> Indulge in the flavors of Kazakh cuisine by trying traditional dishes like Beshbarmak (meat and noodles), Plov (rice pilaf), and Shashlik (grilled meat skewers). Visit local restaurants and markets to savor authentic Kazakh Flavors.</li>
                </ul>

                <h3>What to Eat in Kazakhstan Tour?</h3>
                <p>While indulging in the Kazakhstan Holiday Package, you'll come across a rich dosser of flavors, that mirrors the country’s diverse culinary heritage. Here are some must try dishes to savor during your trip:-</p>
                <ul>
                    <li><strong>Beshbarmak-</strong> A conventional Kazakh Dish, Beshbarmak renders it “five fingers” and typically consists of boiled meat (often lamb or horse meat) served over thin noodles and accompanied by onions and broth. It's a hearty and flavorful dish that holds significant cultural importance in Kazakhstan.</li>
                    <li><strong>Plov (Pilaf)-</strong> Plov is a rice dish, found throughout Central Asia including Kazakhstan. It consists of meat (usually lamb or beef), carrots, onions and several spices. Every region has its own variation of plov, but it's universally loved for aromatic flavors and comforting appeal.</li>
                    <li><strong>Shashlik-</strong> Shashlik is a famous meat grilled dish, it attributes skewered cubes of marinated meat (often lamb, beef or chicken) grilled over an open flame. The meat is classically seasoned with spices and served with flatbread (naan) and pickled vegetables.</li>
                    <li><strong>Manty-</strong> Steamed dumplings filled with seasoned meat (such as lamb, beef, or horse meat) and onions. Manty can be found in a plethora of sizes and shapes and they are often served with dollops of sour cream or a spicy dipping sauce.</li>
                    <li><strong>Kazy-</strong> Kazy is a type of traditional kazakh sausage made from horse meat, typically seasoned with garlic, pepper, and other spices. It's often served thinly sliced as an appetizer alongside other meat dishes.</li>
                    <li><strong>Lagman-</strong> It is an exuberant noodle soup featuring hand pulled noodles, chunks of meat usually (lamb or beef) and a richly flavored broth with vegetables such as carrots, onions and bell peppers. It's a comforting and pleasing dish especially during winter months.</li>
                    <li><strong>Borscht-</strong> While borscht is normally associated with Russian Cuisine, it's also enjoyed a lot in Kazakhstan, this hearty soup features beets, cabbage, potatoes and sometimes meat all stewed together to create a favorable and nourishing dish.</li>
                    <li><strong>Baursaki-</strong> It's a deep fried dough ball, almost similar to doughnuts but less sweet. Baursaki are often served as a snack or dessert, sprinkled with powdered sugar or dipped in honey.</li>
                    <li><strong>Kumis-</strong> if you want a unique culinary experience, try Kumis, a traditional fermented dairy beverage made from mare’s milk. It has a slightly sour taste and is believed to have health benefits. Kumis is often chilled, especially during summer months.</li>
                    <li><strong>Tea with Jam and Sweets-</strong> Tea holds a special place in Kazakh culture, often served with a variety of jam, preservers and sweets. Enjoy a leisurely tea ceremony with a selection of traditional Kazakh sweets like zhent (fruit and nut confections) or chak chak fried dough coated in honey.</li>
                </ul>

                <h3>Best Time To Visit Kazakhstan</h3>
                <p>Kazakhstan experiences four clear cut seasons, each providing its own unique charm and opportunities for exploration.</p>
                <p>Spring ushers sense renewal as temperatures begin to warm and the landscape awakens with vibrant blossoms and lush greenery. It's a perfect time for outdoor activities like hiking through breathtaking valleys, exploring national parks and indulging yourself in the rich cultural heritage of the region, with festivals such as Nauryz marking the Kazakh New Year.</p>
                <p>Summer sees the country come alive with long days and warm temperatures, making it a peak tourist season. From June to August, visitors can enjoy wide range of outdoor activities including trekking in the majestic Tien Shan Mountains, camping under the starry skies and experience the lively atmosphere of traditional Kazakh festivals.</p>
                <p>As Autumn arrives, Kazakhstan is mutated by the tapestry of rich colors as the leaves change, creating a pristine backdrop for its exploration. September to November offers comfortable temperatures and is perfect for hiking amidst the mesmerizing fall foliage, wildlife spotting in picturesque national parks and participating in harvest festivals celebrating the bounty of the season.</p>
                <p>Winter wraps Kazakhstan in snow, especially in the northern and mountainous regions, creating a magical paradise for winter sports enthusiasts and cultural enthusiasts alike. December to February is the best time for skiing, snowboarding and ice skating in resorts like Shymbulak, during traditional Kazakh customs and celebrations associated with the holiday season and New Year add a special warmth to the colder months.</p>
                <p>Throughout the year, Kazakh offers different experiences, something unique and memorable, whether it's the natural beauty of mesmerizing landscapes, the richness of its cultural heritage or the warmth of its stability.</p>
                
                <h3>How to reach for Kazakhstan Tour</h3>
                <p>The most convenient and fastest way to reach Kazakhstan is via flights from India. Several Airlines operate direct and connecting flights between major Indian cities like Delhi and Mumbai and Kazakh cities such as Almaty and Nur Sultan (Astana). The main airports in Kazakhstan are Almaty International Airport (ALA) and Nursultan Nazarbayev International Airport (NQZ). Flight durations can vary depending upon the route and layovers, but direct flights typically take around 4 to 6 hours.</p>
                <p>You can Explore more Kazakhstan Tour Packages: <a href="https://go4explore.com/trips/kazakhstan-5d4n" style={{color:'blue'}}>Kazakhstan 5D/4N</a>, <a href="https://go4explore.com/trips/kazakhstan-backpacking" style={{color:'blue'}}>Kazakhstan Backpacking</a>, <a href="https://go4explore.com/trips/kazakhstan-uzbekistan" style={{color:'blue'}}>Kazakhstan Uzbekistan Trip</a>, <a href="https://go4explore.com/trips/almaty-5d4n-kazakhstan" style={{color:'blue'}}>Almaty Kazakhstan 5D/4N</a></p>
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
              <h2 className="text-4xl font-bold mb-6">Kazakhstan Leisure Tours</h2>
              <TripSlider trips={leisureTours} slidesToShow={3} />
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

export default Kazakhstan;