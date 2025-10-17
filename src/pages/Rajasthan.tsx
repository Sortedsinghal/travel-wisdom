import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (RAJASTHAN) ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/36156220250913134901.png', duration: '8 Days 7 Nights', title: 'Rajasthan Explorer - Jaipur Udaipur Jodhpur Jaisalmer', price: '₹24000', originalPrice: '₹28000', discount: '₹4,000' },
    { imageUrl: '/cloned_media/29769220240826125805.png', duration: '3 Days 2 Nights', title: 'Udaipur & Kumbhalgarh', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/15931420240830095731.png', duration: '3 Days 2 Nights', title: 'Jaisalmer and Longewala', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/18890720240830122755.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer', price: '₹22000' }
];

const weekendTrips = [
    { imageUrl: '/cloned_media/29769220240826125805.png', duration: '3 Days 2 Nights', title: 'Udaipur & Kumbhalgarh', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/15931420240830095731.png', duration: '3 Days 2 Nights', title: 'Jaisalmer and Longewala', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/10269820250204094556.png', duration: '2 Days 1 Night', title: 'Pushkar Holi Special', price: '₹6999' },
    { imageUrl: '/cloned_media/2774120230716155320.png', duration: '4 Days 3 Nights', title: 'Udaipur & Mount Abu Trip From Delhi', price: '₹11999' },
    { imageUrl: '/cloned_media/18890720240830122755.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer', price: '₹22000' }
];

const udaipurTours = [
    { imageUrl: '/cloned_media/29769220240826125805.png', duration: '3 Days 2 Nights', title: 'Udaipur & Kumbhalgarh', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/2774120230716155320.png', duration: '4 Days 3 Nights', title: 'Udaipur & Mount Abu Trip From Delhi', price: '₹11999' },
    { imageUrl: '/cloned_media/29224320230701062448.png', duration: '3 Days 2 Nights', title: 'Udaipur', price: '₹7999', originalPrice: '₹8999', discount: '₹1,000' }
];

const familyTours = [
    { imageUrl: '/cloned_media/18890720240830122755.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer', price: '₹22000' },
    { imageUrl: '/cloned_media/15931420240830095731.png', duration: '3 Days 2 Nights', title: 'Jaisalmer and Longewala', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/29769220240826125805.png', duration: '3 Days 2 Nights', title: 'Udaipur & Kumbhalgarh', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/2774120230716155320.png', duration: '4 Days 3 Nights', title: 'Udaipur & Mount Abu Trip From Delhi', price: '₹11999' },
    { imageUrl: '/cloned_media/37210520230716153323.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking From Delhi - Udaipur-Jodhpur-Jaisalmer', price: '₹29999' }
];

const backpackingTrips = [
    { imageUrl: '/cloned_media/36156220250913134901.png', duration: '8 Days 7 Nights', title: 'Rajasthan Explorer - Jaipur Udaipur Jodhpur Jaisalmer', price: '₹24000', originalPrice: '₹28000', discount: '₹4,000' },
    { imageUrl: '/cloned_media/18890720240830122755.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer', price: '₹22000' },
    { imageUrl: '/cloned_media/31962220230716154259.png', duration: '6 Days 5 Nights', title: 'Rajasthan Backpacking - Pushkar-Udaipur-Bikaner', price: '₹22000' },
    { imageUrl: '/cloned_media/37210520230716153323.png', duration: '5 Days 4 Nights', title: 'Rajasthan Backpacking From Delhi - Udaipur-Jodhpur-Jaisalmer', price: '₹29999' }
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

const Rajasthan = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/14997820240912094546.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Rajasthan"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Rajasthan Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Rajasthan Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                 <p>Discover the enchanting land of Rajasthan, where the grandeur of royal palaces, majestic forts and vibrant culture awaits you! Step into the world of opulence and tradition as you explore the pink-hued streets of Jaipur, romantic lakes of Udaipur, and golden sands of Jaisalmer. Experience the regal hospitality, indulge in mouth watering delicacies and witness the colorful festivals that bring this desert state to vibrant life. Book your Rajasthan Tour with Go4Explore today and journey through India’s most captivating and mesmerizing state, where every corner tells a story of its glorious past. Don’t miss the chance to explore the heart of royal India - reserve your adventure now!</p>
                <h2>Colors And Castles- Exploring The Regal Jewel Of Rajasthan Tour</h2>
                <p>By booking a Rajasthan tour package with Go4Explore you can travel back in time and experience the regal life of emperors. Explore the humongous and breathtaking forts of Jaipur (Pink City) with your family and create lifelong memories to cherish forever. Your Rajasthan tour package is not limited to just the capital city, Udaipur (The City of Lakes) offers rich surroundings, tranquility and captivates you with its serene lakes and the grandeur of City Palace, Jaisalmer provides a unique experience of Desert and Camel Safaris and promises an adventure like no other. Every nook and corner of Rajasthan offers historical insights, quite similar to turning the pages of a historical novel. Every new page offers a fresh adventure. Crafting the finest experiences for every traveler and history lover in your Rajasthan trip.</p>
                <p>For travelers and history explorers especially, Rajasthan trip is a memoir that will fill your essence with different colors, the same colors that adorn the beauty of this state. It is indeed an empire brimming with royalty, providing everything a traveler would want to explore- from, regal ambiance, traditional attires draped in culture, to famous delicacies, cultural folk dances and a lot more. Rajasthan trip is in the heart of every traveler, be it with family or solo. It's Recommended to visit this popular location during winter season.</p>
                
                <h3>Best Places To Visit In Your Rajasthan Tour Package</h3>
                <p><b>Jaipur (Pink City):</b> Jaipur is the capital city of Rajasthan, popular for its grand palaces, forts, and vibrant and bustling markets. The Amber Fort offers stunning views and historical insights, while the Hawa Mahal's unique architecture makes this venue a must-see in your Rajasthan trip. Don't miss the City Palace and the astronomical instruments crafted at Jantar Mantar.</p>
                <p><b>Udaipur (City of Lakes):</b> Udaipur is famous for its picturesque and serene lakes, including Lake Pichola, and the majestic City Palace from where you can overlook the most beautiful sunsets. Charming spots like Jag Mandir and Lake Palace add to its romantic appeal, making it a popular destination for weddings and honeymoon. Truly, the heart of your Rajasthan Tour Package lies in Udaipur.</p>
                <p><b>Jodhpur (Blue City):</b> Dominated by the Majestic Mehrangarh Fort, Jodhpur also features the beautiful Umaid Bhawan Palace and the vibrant, blue-hued houses of the old city. The bustling Sardar Market near the iconic clock tower is a great spot to shop for local crafts.</p>
                <p><b>Jaisalmer (Golden City):</b> It is located in the heart of Thar Desert. Don't forget to cruise over sprawling golden-hued sand in your Rajasthan trip. The giant Jaisalmer Fort, made of yellow sandstone contains havelis, shops and a royal palace. The Patwon Ki Haveli showcases intricate carvings. Enjoy your Rajasthan Tour package to the fullest by indulging in thrilling activities like Dune bashing or quad biking in a sports utility vehicle, taking in the adrenaline rush.</p>
                <p><b>Pushkar:</b> This small town is famous for the sacred Pushkar Lake surrounded by Ghats and Temples, including the unique Brahma Temple. The annual Pushkar Camel Fair attracts visitors from all around the world for its cultural events and camel trading. Pushkar offers a serene experience, and helps you get out of the cosmopolitan discord.</p>
                <p><b>Ranthambore National Park:</b> A premier wildlife destination, Ranthambore is known for its population of Bengal tigers. The park's diverse flora and fauna, along with the Ranthambore Fort and ancient temples, create a fascinating addition to your Rajasthan Trip Package.</p>
                <p><b>Bikaner:</b> This city boasts the impressive Junagarh Fort with its rich museum, unique Karni Mata Temple where rats are revered, and the largest camel breeding farm in Asia.</p>
                <p><b>Mount Abu:</b> Rajasthan’s only hill station, Mount Abu is known for its cool climate, the serene Nakki Lake, and the exquisitely carved Dilwara Temples, a significant pilgrimage site for Jains.</p>
                <p><b>Chittorgarh:</b> The massive Chittorgarh Fort stands as a symbol of Rajput valor and romance. Key attractions within the fort include the Tower of Victory (Vijay Stambh) and the Padmini Palace.</p>
                <p><b>Bundi:</b> This lesser-known gem features the Bundi Palace adorned with beautiful murals, the Taragarh Fort offering panoramic views, and countless step wells like Raniji ki Baori, showcasing intricate designs.</p>
                <p><b>Shekhawati Region:</b> Famous for its elaborately painted havelis, the Shekhawati region, particularly Mandawa and Nawalgarh, is an open-air art gallery with murals depicting mythological, historical, and folk themes.</p>
                <p><b>Ajmer:</b> Known for the Ajmer Sharif Dargah, a major Sufi shrine and the beautiful Ana Sagar Lake. Ajmer is also close to Pushkar, allowing visitors to explore both cities conveniently. This pilgrim site offers serenity, even when the qawwalis echo in the air. By visiting this site, you can enrich your Rajasthani trip.</p>
                <p><b>Alwar:</b> Features the historic Bala Quila Fort, the City Palace Museum, and the Sariska Tiger Reserve. Alwar is a blend of natural beauty and historical significance.</p>
                <p><b>Bharatpur:</b> Home to the Keoladeo National Park, a UNESCO World Heritage site. Bharatpur is renowned for its birdwatching opportunities, particularly during the winter migratory season. You cannot miss this place if you are a nature lover or a photographer.</p>
                <p><b>Kota:</b> Known for the Kota Barrage, Jagmandir Palace, and the scenic Chambal Garden. Kota is also famous for its distinctive style of painting and Dussehra festival celebrations.</p>
                <p><b>Sawai Madhopur:</b> Gateway to Ranthambore National Park and Fort. The town itself offers insights into rural Rajasthani life and culture. If Want to explore an offbeat location that lets you enjoy the simple laid-back rural lifestyle, then include this destination in your Rajasthani Trip Package.</p>
                <p><b>Neemrana:</b> Famous for the Neemrana Fort Palace, a converted hotel that offers a blend of history, luxury, and adventure activities like zip-lining. Experience regal luxury like never before. If you truly wish to experience opulence, grandiose and royalty, add this destination to your Rajasthan trip package.</p>
                <p><b>Barmer:</b> Known for its rich handicrafts, wood carvings, and the Barmer Fort. The town comes alive during the Barmer Thar Festival, showcasing local music and dance.</p>

                <h3>Things To Do In Your Rajasthan Tour Package</h3>
                <p>Explore the Majestic Forts and Palaces- Rajasthan is home to numerous forts and palaces that reflect its royal heritage. Visiting these architectural marvels is non-negotiable during your Rajasthan trip. In Jaipur, take a jeep ride up to the Amber Fort, a majestic structure known for its artistic Hindu style elements. In Udaipur, explore the City Palace, a complex of palaces with museums and gardens, and take a boat ride on Lake Pichola. In Jodhpur, the Mehrangarh Fort offers a museum and panoramic views of the Blue City. Meanwhile, Jaisalmer Fort allows you to wander through ancient havelis and narrow streets.</p>
                <p><b>Wildlife Safaris-</b> For our nature enthusiasts, Rajasthan offers thrilling wildlife safaris in its national parks and wildlife sanctuaries. Ranthambore National Park is famous for its tiger safaris and the ancient Ranthambore Fort. Sariska Tiger Reserve provides jeep safaris for spotting tigers and other wildlife. Keoladeo National Park in Bharatpur, a UNESCO World Heritage Site, is a paradise for bird watchers, offering sightings of numerous bird species.</p>
                <p><b>Experience the Desert-</b> The Thar Desert offers unique experiences that shouldn’t be missed. In Jaisalmer, Bikaner, and Pushkar, you can embark on camel safaris through the sand dunes and enjoy traditional Rajasthani dinners under the stars. Desert camping in Jaisalmer allows you to stay in luxurious tented camps and enjoy cultural performances. For a more adventurous experience, take a jeep safari to explore the dunes and remote villages. Indulge in adrenaline rushing activities in your Rajasthan tour package.</p>
                <p><b>Cultural Performances-</b> Immerse yourself in Rajasthani culture through various performances. In cities like Jaipur, Udaipur, and Jaisalmer, you can enjoy traditional folk music and dance shows, including Ghoomar and Kalbeliya dances. Puppet shows are also a popular cultural attraction, showcasing the traditional art of puppetry and telling stories of Rajasthan’s history and folklore.</p>
                <p><b>Festivals and Fairs-</b> Participate in vibrant festivals and fairs to experience Rajasthan’s cultural richness. The Pushkar Camel Fair is a major event where you can witness the trading of camels and livestock, along with cultural events and competitions. The Desert Festival in Jaisalmer is celebrated with music, dance, camel races, and other traditional activities. In Jaipur, the Teej Festival marks the monsoon with colorful processions and rituals.</p>
                <p><b>Culinary Experiences-</b> Consider your Rajasthan tour package to be a waste, if you don't stop by to relish in the local delicacies. Taste the rich and diverse flavors of Rajasthani cuisine. Join cooking classes in Jaipur or Udaipur to learn how to prepare traditional dishes like Dal Baati Churma and Laal Maas. Explore local markets on food tours to try street food such as kachoris, samosas, and sweets like Ghewar.</p>
                <p><b>Shopping-</b> Rajasthan is a shopper’s paradise, known for its handicrafts, textiles, and jewelry. Visit local markets in Jaipur, Jodhpur, and Udaipur to shop for traditional attire, blue pottery, block-printed fabrics, and silver jewelry. Explore handicraft villages like Bagru for block printing and Bishnoi Village for terracotta and weaving.</p>
                <p><b>Adventure Activities-</b> For thrill-seekers, Rajasthan offers a range of adventure activities. Experience hot air ballooning in Jaipur, Pushkar, and Ranthambore for a bird’s eye view of the landscapes and historical sites. Trekking trails in the Aravalli Range, including Mount Abu and Kumbhalgarh, offer scenic adventures. Zip lining over Mehrangarh Fort and Neemrana Fort provides an exhilarating experience with stunning views.</p>
                <p><b>Wellness and Relaxation-</b> Unwind and rejuvenate with wellness activities in Rajasthan. Indulge in traditional Ayurvedic treatments and massages at Ayurvedic spas and wellness centers in Jaipur and Udaipur. Join yoga retreats in Pushkar and other serene locations to practice yoga and meditation amidst beautiful surroundings.</p>
                <p><b>Exploring Offbeat Destinations-</b> Discover lesser-known yet captivating spots in Rajasthan. Bundi is home to the Taragarh Fort, Baoris (step wells), and intricate murals. The Shekhawati Region, including towns like Mandawa and Nawalgarh, is famous for its beautifully painted havelis. Chittorgarh offers the massive Chittorgarh Fort with a rich history and significant landmarks like Vijay Stambh and Kirti Stambh.</p>
                <p><b>Boat Rides and Lakeside Relaxation-</b> Enjoy the tranquil lakes and scenic boat rides in Rajasthan. Take a boat ride on Lake Pichola in Udaipur to admire the stunning views of the City Palace and Jag Mandir. Unwind by Fateh Sagar Lake, and visit the nearby Nehru Garden. In Mount Abu, paddle a boat on Nakki Lake and enjoy the surrounding hills and gardens.</p>
                <p><b>Exploring Heritage and Historical Sites-</b> Dive deep into the history and heritage of Rajasthan. Visit the Albert Hall Museum in Jaipur to explore its extensive collection of artifacts and exhibits. Walk along the second longest wall in the world at Kumbhalgarh Fort and enjoy the panoramic views of the surrounding landscape.</p>
                <p><b>Participating in Local Workshops-</b> Engage in local arts and crafts through workshops in Rajasthan. Learn the traditional art of block printing in Bagru, near Jaipur. Try your hand at pottery making in places like Pokhran and Molela, where you can create your own terracotta pieces.</p>

                <h3>How to Reach Rajasthan</h3>
                <p><strong>By Air-</strong> Reaching Rajasthan by air is the most convenient option for many travelers. The state is well-connected by several airports, with the primary ones being Jaipur International Airport (JAI), Udaipur’s Maharana Pratap Airport (UDR), and Jodhpur Airport (JDH). Jaipur International Airport, located around 13 kilometers from the city center, serves both domestic and international flights, making it the busiest and most accessible. Udaipur and Jodhpur airports mainly handle domestic flights, connecting Rajasthan to major Indian cities such as Delhi, Mumbai, Bangalore, and Hyderabad. Once you arrive at these airports, you can hire taxis, use ride-sharing services, or take buses to reach your destination within Rajasthan.</p>
                <p><strong>By Train-</strong> Rajasthan has an extensive railway network that connects it to major cities across India, making train travel a popular choice. The state is home to some of the most famous railway stations, including Jaipur, Udaipur, Jodhpur, and Bikaner. Trains like the Palace on Wheels, a luxury tourist train, offer a unique and regal experience. Regular express trains such as the Shatabdi and Rajdhani also provide efficient and comfortable service. Jaipur, being a central hub, has frequent trains from Delhi, Mumbai, and Kolkata. Train travel in Rajasthan not only offers convenience but also provides scenic views of the countryside.</p>
                <p><strong>By Road-</strong> Traveling by road to Rajasthan can be an exciting journey, offering the flexibility to explore various attractions along the way. The state is well-connected by a network of national and state highways. Major cities like Delhi, Mumbai, Ahmedabad, and Agra are linked to Rajasthan through well-maintained roads. The Golden Quadrilateral and the North-South-East-West Corridor pass through the state, ensuring smooth connectivity. You can opt for state-run buses, private bus services, or drive your own vehicle. Rajasthan State Road Transport Corporation (RSRTC) operates regular bus services, including deluxe and air-conditioned options, connecting Rajasthan to neighboring states.</p>
                <p><strong>By Car-</strong> Driving to Rajasthan offers the freedom to travel at your own pace and explore offbeat destinations. From Delhi, you can take the NH48 to Jaipur, which is approximately a 5-6 hour drive. From Mumbai, the journey to Udaipur via NH48 and NH58 takes around 11-12 hours. The roads are generally in good condition, with ample facilities like rest stops, petrol stations, and eateries along the way. Renting a car is also an option if you prefer not to drive your own vehicle.</p>
                <p><strong>By Bus-</strong> For those who prefer bus travel, Rajasthan is well-served by an extensive network of both government and private bus operators. The Rajasthan State Road Transport Corporation (RSRTC) offers a variety of services, including Volvo, deluxe, and semi-deluxe buses. These buses connect Rajasthan to major cities in neighboring states. Private operators such as RedBus and VRL Travels provide additional options, often with more comfortable amenities. Buses are a budget-friendly way to reach Rajasthan, with frequent departures from cities like Delhi, Ahmedabad, and Chandigarh.</p>
                
                <h3>Best Time to Visit Rajasthan</h3>
                <p><strong>Winter (October to March)-</strong> The best time to visit Rajasthan is during the winter months, from October to March. The weather is pleasant and perfect for sightseeing, with daytime temperatures ranging from 10°C to 27°C. This is the peak tourist season, and you can comfortably explore the forts, palaces, and markets without the oppressive heat. The winter season also brings vibrant festivals like the Pushkar Camel Fair, Jaipur Literature Festival, and Desert Festival in Jaisalmer, which offer a glimpse into the rich cultural heritage of the region. Winter is perfect for outdoor activities such as desert safaris, hot air ballooning, and wildlife safaris in places like Ranthambore and Sariska.</p>
                <p><strong>Summer (April to June)-</strong> Visiting Rajasthan during the summer months from April to June is less popular due to the extreme heat, with temperatures often soaring above 40°C. However, if you can tolerate the heat, this period offers several advantages. Tourist attractions are less crowded, and you may find better deals on accommodation and travel. Some destinations, like Mount Abu, the only hill station in Rajasthan, provide a cool respite from the heat. Early morning and late evening visits to forts and palaces can still be enjoyable, and indoor activities such as exploring museums and heritage hotels are more comfortable during the hottest parts of the day.</p>
                <p><strong>Monsoon (July to September)-</strong> The monsoon season in Rajasthan, from July to September, brings a welcome relief from the scorching summer heat, with temperatures ranging from 25°C to 35°C. The state receives moderate rainfall, transforming the arid landscape into a more verdant and picturesque setting. This season is ideal for those who prefer fewer tourists and lower prices. Udaipur, often referred to as the "City of Lakes," becomes particularly enchanting with its filled lakes and lush surroundings. Monsoon is also a great time to visit the hill station of Mount Abu. However, be prepared for occasional heavy rains that might affect travel plans, and always check weather forecasts before setting out.</p>
                <p><strong>Post-Monsoon (September to October)-</strong> The post-monsoon period, from September to early October, is also a good time to visit Rajasthan. The weather is gradually cooling down, and the landscape is still lush from the recent rains. This transitional period offers a mix of the monsoon’s beauty and the upcoming winter’s pleasant weather. Tourist spots are less crowded compared to the peak winter season, allowing for a more relaxed exploration of the state’s attractions. This is an excellent time for photography, as the skies are clear and the natural light enhances the beauty of the forts, palaces, and rural landscapes.</p>
                
                <h4>FAQ’s</h4>
                <p><strong>1. What is Rajasthan famous for?</strong></p>
                <p>Rajasthan is famous for its cultural heritage, history, folk dance, Rajasthani cuisines and a lot more.</p>
                <p><strong>2. What are the famous adventure activities to do on the Rajasthan tour packages?</strong></p>
                <p>There are numerous popular adventure activities in Rajasthan such as camel safaris, desert safari, hot air balloon rides, camping, water sports, zip lining and a lot more.</p>
                <p><strong>3. What is the best time to visit on the Rajasthan tour?</strong></p>
                <p>Best time to visit Rajasthan is during winter months, summers are not ideal because of extreme heat and high temperature.</p>
                <p><strong>4. What are the best dishes of Rajasthan?</strong></p>
                <p>Some of the best dishes to try in Rajasthan are Gatte ki Sabzi, Laal Maas, Dal Baati Churma, Panchkoota, Rajasthani Kadhi, Pyaaz Kachori and many more.</p>
                <p>Explore our popular Rajasthan Packages: <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer">Rajasthan Backpacking to Udaipur, Jodhpur, Jaisalmer</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/udaipur-kumbhalgarh">Udaipur Kumbhalgarh</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/udaipur-mount-abu-trip-from-delhi">Udaipur Mount Abu</a>, <a style={{color:'blue'}} target="_blank" href="https://go4explore.com/trips/jaisalmer-and-longewala">Jaisalmer Longewala</a></p>
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
            <section><h2 className="text-4xl font-bold mb-6">Rajasthan Weekend Trips</h2><TripSlider trips={weekendTrips} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Udaipur Tour Packages</h2><TripSlider trips={udaipurTours} slidesToShow={3} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Rajasthan Family Tour Packages</h2><TripSlider trips={familyTours} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Rajasthan Backpacking Trips</h2><TripSlider trips={backpackingTrips} slidesToShow={4} /></section>
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

export default Rajasthan;