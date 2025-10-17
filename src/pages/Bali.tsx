import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (BALI) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/12586020220805080100.png', duration: '6 Days 5 Nights', title: 'Bali Backpacking', price: '₹34999' },
    { imageUrl: '/cloned_media/13569520240211131131.png', duration: '7 Days 6 Nights', title: 'Bali & Singapore', price: '₹60000' },
    { imageUrl: '/cloned_media/37586820240127171448.png', duration: '7 Days 6 Nights', title: 'Bali - Ultimate 7 Days', price: '₹49999' },
    { imageUrl: '/cloned_media/30531120240211130306.png', duration: '7 Days 6 Nights', title: 'Bali & Malaysia', price: '₹85000' }
];

const honeymoonTrips = [
    { imageUrl: '/cloned_media/35865920250528074655.png', duration: '7 Days 6 Nights', title: 'Romantic Escape to Bali - Couple Special', price: 'Customization Available' },
    { imageUrl: '/cloned_media/8336920250528080622.png', duration: '5 Days 4 Nights', title: 'Romantic Bali Vacation - Couple Special', price: 'Customization Available' },
    { imageUrl: '/cloned_media/2244920231028132025.png', duration: '6 Days 5 Nights', title: 'Bali with Nusa Penida- Honeymoon Special', price: '₹45000' },
    { imageUrl: '/cloned_media/3283720230323071307.png', duration: '7 Days 6 Nights', title: 'Bali - Water Villa Stay', price: '₹80000' },
    { imageUrl: '/cloned_media/6308820231028130935.png', duration: '6 Days 5 Nights', title: '6 Days tour Bali with Balinese Spa', price: '₹36500' },
    { imageUrl: '/cloned_media/37586820240127171448.png', duration: '7 Days 6 Nights', title: 'Bali - Ultimate 7 Days', price: '₹49999' },
    { imageUrl: '/cloned_media/30531120240211130306.png', duration: '7 Days 6 Nights', title: 'Bali & Malaysia', price: '₹85000' }
];

const holidayTours = [
    { imageUrl: '/cloned_media/16982620250528074223.png', duration: '8 Days 7 Nights', title: 'Discover Best of Bali', price: 'Customization Available' },
    { imageUrl: '/cloned_media/34321720250528075636.png', duration: '6 Days 5 Nights', title: 'Joyful Treasures of Bali', price: 'Customization Available' },
    { imageUrl: '/cloned_media/37178320220812091449.png', duration: '10 Days 9 Nights', title: 'Bali Backpacking 10D9N', price: '₹54999' },
    { imageUrl: '/cloned_media/12586020220805080100.png', duration: '6 Days 5 Nights', title: 'Bali Backpacking', price: '₹34999' },
    { imageUrl: '/cloned_media/37586820240127171448.png', duration: '7 Days 6 Nights', title: 'Bali - Ultimate 7 Days', price: '₹49999' },
    { imageUrl: '/cloned_media/30531120240211130306.png', duration: '7 Days 6 Nights', title: 'Bali & Malaysia', price: '₹85000' },
    { imageUrl: '/cloned_media/40482320231026081450.png', duration: '7 Days 6 Nights', title: 'Bali New Year Special', price: '₹99999', originalPrice: '₹109999', discount: '₹10,000' },
    { imageUrl: '/cloned_media/25064020241022070910.png', duration: '7 Days 6 Nights', title: 'Adventure Bali Trip Package', price: 'Customization Available' },
    { imageUrl: '/cloned_media/17819120241022065418.png', duration: '7 Days 6 Nights', title: 'Best of Bali', price: 'Customization Available' }
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

const Bali = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/1441520240529120015.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Bali"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Bali Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Bali Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Bali with Go4Explore</h2>
                <p>Last two decades has seen increased tourism to an Indonesian Island that is a perfect blend of beaches, rocky coastlines, relaxing spas, crazy nightlife and alot more activities to do. Yes this paradise is none other than, your favourite, Bali. If your dream destination also looks like Bali then what are we even waiting for? Book your seats right now with the Go4Explore Bali tour packages where you get to be a part of the most incredible journey to Bali. With 7 years of experience Go4Explore has travel expertise in international trips like our Bali Tour packages offers travelers with handcrafted Bali packages varying from Bali Adventure trips to Bali honeymoon trips.</p>
                
                <h2>About Bali Tour Packages</h2>
                <p>Known as “The Island of Gods” among folks, Bali is not only famous for its sparkling crystal blue waters and pristine beaches but also for magnificent temples, historical sites and other adventure activities like paragliding, snorkeling and many more such thrilling sports. Every traveler seeks for a unique experience from every trip that they plan and Bali wouldn’t upset you because it awaits with breath holding adventures, picturesque landscape and jaw dropping ancient structures. Bali is not only home to unique and fascinating sites but has one of the best beaches of asia. An interesting fact about Bali is that the world's most expensive coffee comes from this exotic paradise made from the poop of a civet cat. For nature lovers and explorers it is a paradise to relax and chill and for adventure enthusiasts Bali has so many sports and activities to keep you engaged, with a perfect blend of peace and thrill Bali Tour Package is suitable for all.</p>

                <h3>Best Places to visit in Bali Tour</h3>
                <ul>
                    <li><strong>Keilking Beach:</strong> On the west coast of Bali, you reach Keilking beach by descending 800 steps where you can witness calm winds, crystal blue water, and a cliff that resembles a tyrannosaurus.</li>
                    <li><strong>Tanah Lot Temple:</strong> It is a unique landmark situated on a rock ,dedicated to worship the god of sea. If you are interested and curious about the ancient history of the temple that is related to Hindu mythology then you must visit Tanah Lot temple in Beraban village.</li>
                    <li><strong>Gates of Heaven:</strong> Also known as Pura Luhur Lempuyang it is also a viral Insta photo spot and revered as Island’s oldest temple. Though it is a complex of 7 different temples, Gates of heaven is the most visited one.</li>
                    <li><strong>Uluwatu Temple:</strong> Uluwatu has an incredible shoreline, aesthetic cliffs and various beach bars that you can hop into. Rent a motorbike and explore the area. Head on to the infamous Uluwatu temple situated at the top of a cliff that is around 70 m above sea level. Experience a spiritually engrossed sunset which you will definitely love.</li>
                    <li><strong>Ubud:</strong> If you want to learn about Balinese culture and gain some spiritual connection with nature Ubud might be the perfect place to do so. Ubud is also known for its museums, spa centers, yoga and health and wellness centers. Ubud is home to the incredibly spiritual place.</li>
                    <li><strong>Holy water Goddess Dew Danu:</strong> This popular temple of Bali is devoted to Holy water Goddess Dew Danu who has been worshiped for years as locals believe that she is the protector of fisherman and fertility goddess too. The majestic temple is situated on a lakeside surrounded by cliffs, you must visit this temple and experience spirituality in the region.</li>
                    <li><strong>Tegalalang Rice Terraces & Waterfall:</strong> At a distance of about 30 kms from Ubud, A stunning Tegalalang waterfall and rice terraces are in Tegalalang village. Tegalalang rice terrace is stunningly beautiful as it is surrounded by scenic landscapes, sacred temples and majestic water bodies.</li>
                    <li><strong>Mount Batur:</strong> Even though Mount Batur is an active volcano which had last erupted in 1847, it is a hotspot for hikers who hike upto 1700m to witness a breathtaking sunrise and the most gorgeous landscapes. Also known as Kintamani Volcano, it is often on the list of couples who are on Bali Honeymoon packages as it can turn out to be the most romantic sunrise of your life too.</li>
                    <li><strong>Nusa Penida:</strong> Nusa Lembongan, Nusa Ceningan, Nusa Penida together are called Nusa Islands but Nusa Penida is the most gorgeous among the three with fantastic sightseeing and stunning creations of nature.</li>
                    <li><strong>Kuta Beach:</strong> Kuta beach that lies in the heat of Kuta district was earlier known as the fishing village of Bali, in today’s time this urbana village is popular for its beach resorts, beautiful stay homes with perfect crystal clear what that just adds on to the beauty of the place.</li>
                    <li><strong>Ubud Monkey Forest:</strong> With around 1000 monkeys living inside the <a style={{color:'blue'}} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Ubud_Monkey_Forest">Ubud Monkey Forest</a>, it is home to 14th CE Hindu temple placed in the heart of the forest. Inside the forest you can find moss covered statues and it is quite different from zoos because here monkeys are allowed to freely jump around and it is their natural habitat.</li>
                </ul>

                <h3>Top Things to do in Bali Trip</h3>
                <ul>
                    <li><strong>Bali swing in Ubud:</strong> The most viral attraction of Bali trip is Bali Swing, it simply gives you a chance to enjoy swing and try to sink in the memorable experience of swinging amidst serene beauty. Swings are present in very locality but what makes Bali swings different is that this Swing is placed over the canyon that gives you a chance to swing over water and feel the main character vibrate.</li>
                    <li><strong>Trekking on Mount Batur:</strong> Trekking is one of the most demanded activities and What can be more beautiful than trekking upon Mount Batur and witnessing one of the most beautiful sunsets of your life? Situated at the height of 5,633 ft above sea level, immerse yourself in the scenic beauty of Bali.</li>
                    <li><strong>Wildlife safari at Gianyar:</strong> If you have been interested in wildlife and curious about aquatic animals then Bali is the perfect place where some endangered species like Bali Starling bird, Komodo Dragon etc reside.</li>
                    <li><strong>Pilgrimage:</strong> Bali is home to many temples like Pura Taman Saraswati Temple, Tirta Empul Temple, Pura Luhur Lempuyang etc which holds significance of its own. One of the unique and 1000 year old ancient temples of Bali is Besakih temple which is also known as Bali’s mother temple. To experience the real Bali it is important to pay a visit to all temples and immerse in the positivity that surrounds those temples.</li>
                    <li><strong>Adventure activities and sports:</strong> Bali is a perfect blend of calmness and craziness as one side of Bali will give you peace the other side of Bali where you can enjoy the thrill of Bungee jumping, Paragliding, Snorkeling, Surfing, canyoning etc.</li>
                    <li><strong>A balinese massage to relax:</strong> Balinese massage is a therapeutic massage that is a traditional wellness treatment which will give relief to your mind and soul. After a relaxing Balinese massage you will be rejuvenated and bring positivity in your life.</li>
                    <li><strong>Watch dolphins:</strong> Dolphins are considered as cutest water mammals and every year lakhs of tourists visit Lovina beach, Amed to watch fun filled dolphins going in and out of the water like a wave.</li>
                    <li><strong>Visit Monkey Forest in Ubud:</strong> Monkey Forest Sanctuary is a natural reserve consisting of Dragon bridge, Holy sprint Temple and many such wonderful attractions. Monkeys in the Forest left to roam around free and not caged even though tourists visit.</li>
                </ul>

                <h3>What to Eat on a Bali Tour?</h3>
                <p>We talk about Italian, Mexican, Chinese food but how often do we talk about Indonesian food? One of the unique features in Indonesian food is that as we change the places the taste and flavors of food also changes like in Java has more of a sweet taste and Balinese food has a blend of spicy and salty flavours in it.</p>
                <ul>
                    <li><strong>Lawar:</strong> As Bali is an island there is a much greater use of coconuts compared to other regions. Lawar is a starter type coconut based dish that has coconut gratings, minced jackfruit, bits of chicken skin, chilies, and coconut milk and is served in banana leaf.</li>
                    <li><strong>Baba Guiling:</strong> There is a unique way of preparing this soup dish where the pork is sealed with fillings of spices and then steamed till it turns smoky red. This soup has Chunks of pork with hint of green onions and cilantro and is served with rice, Lawar, Pork skin etc.</li>
                    <li><strong>Fish head soup:</strong> The whole fish is cooked and is boiled in a broth further to which cucumber is also added. This is one of the most popular fish dishes of Bali.</li>
                    <li><strong>Nasi Goreng:</strong> Nasi Goreng is a delicious fried rice which is a combination of fully marinated chicken and meat pieces added to boiled rice mixed in a thick paste of spices.</li>
                    <li><strong>Be Lindung:</strong> It is one of the unique Balinese dishes that consists of deeply fried eels. These fried eels are then mixed with roasted coconut gratings and served with rice and sambal.</li>
                    <li><strong>Klepon:</strong> People’s favorite sweet dish Klepon is a savory sweet dish that consists of boiled rice cakes filled with palm sugar and covered in coconut gratings.</li>
                    <li><strong>Es Dalumen:</strong> This signature drink is said to be effective for people with hypertension and digestion issues. It consists of coconut milk and palm sugar with jelly, made from Dalumen leaves.</li>
                </ul>

                <h3>How to get a visa for Bali?</h3>
                <p>Before you take up any international trip it is important to learn about the visa system of the country you are traveling to. Here's good news: if you're traveling to Bali from India for not more than 30 days, then you do not require any visa. However you are restricted from indulging in any kind of paid work or business work. If you want to further extend your stay in Bali then go on to the Indonesia portal and apply for your e-Visa before the 30 days period ends.</p>
                
                <h3>Best Time to visit Bali</h3>
                <p><strong>Dry season:</strong> Dry season is considered as the best time to visit Bali which lasts from April to October. This is the ideal time because dry and sunny weather allows tourists to do different adventure activities including water sports and explore the cultural sites freely because the rainfall is minimal during these times.</p>
                <p><strong>Wet season:</strong> Wet season lasts from November to March, when it rains in Bali though it doesn't last long it is not the peak season and thus you will find less crowd and cheaper prices. If you want to enjoy the nightlife, vibe and comparatively less crowded beaches in peace then this may be the best time for you to visit.</p>
                
                <h3>How To Reach Bali</h3>
                <p><strong>Airways:</strong> Until last year it was kind of a hustle to travel to Bali because there were no direct flights but now Vistara has started direct flights from major cities of India like Delhi, Mumbai, Kolkata and Chennai to the Ngurah Rai International Airport, Densapar in Bali.</p>
                
                <h4>FAQ’s</h4>
                <p><strong>1. Do Indians need a visa for Bali?</strong></p>
                <p>No, Indians do not need a visa for a maximum 30 days visit to Bali. Beyond 30 days you need an e-Visa to extend the period.</p>
                <p><strong>2. Which season is best to visit Bali?</strong></p>
                <p>Dry season, which is between April to October, is the best time to visit Bali.</p>
                <p><strong>3. Which is the best place to shop in Bali?</strong></p>
                <p>Markets in Bali are so vibrant that it attracts tourists in large numbers like Sea Gypsy- where jewelry lovers must shop from, Drifter Surf Shop & Café- this can be your source for skateboard and surfing equipment. Some popular boutiques include Bamboo Blonde, Magali Pascal, and Biasa; you can also visit Seminyak Village and Seminyak Square shopping malls for brands. There are some famous art markets like Kuta Art Market, Ubud Art Market etc.</p>
                <p><strong>4. What kind of activities does Bali offer to travelers?</strong></p>
                <p>You can opt for relaxing spas, or thrilling adventure activities like Bungee Jumping, Paragliding, Snorkeling are some of the most popular activities in Bali.</p>
                <p>Explore our popular Bali Tour Packages: <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/bali-water-villa-stay">Bali Water Villa Stay</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/bali-with-nusa-penida-honeymoon-special">Bali with Nusa Pendia</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/bali-ultimate-7-days">Bali 7 Days Trip</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/bali-singapore">Bali Singapore</a>, and <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/bali-malaysia">Bali Malaysia</a></p>
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
              <h2 className="text-4xl font-bold mb-6">Bali Honeymoon Trips</h2>
              <TripSlider trips={honeymoonTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Bali Best Holiday Tours</h2>
              <TripSlider trips={holidayTours} slidesToShow={4} />
            </section>
            {/* The source code did not contain data for code4 or code5, so those sections are omitted. */}
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

export default Bali;