import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (UTTARAKHAND) ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/13159420240830104817.png', duration: '4 Nights 5 Days', title: 'Uttarakhand Backpacking- Rishikesh Auli Chopta', price: '₹13500', originalPrice: '₹15000', discount: '₹1,500' },
    { imageUrl: '/cloned_media/9518720240826103510.png', duration: '3 Days 2 Nights', title: 'Chopta-Tungnath-Deoriatal', price: '₹6000', originalPrice: '₹7000', discount: '₹1,000' },
    { imageUrl: '/cloned_media/4619220240827083456.png', duration: '4 Days 3 Nights', title: 'Rishikesh Chopta Tungnath', price: '₹10000' }
];

const familyTours = [
    { imageUrl: '/cloned_media/42312820230316110103.png', duration: '10 Days 9 Nights', title: 'Char Dham Yatra Ex Haridwar-Dehradun', price: '₹32000' },
    { imageUrl: '/cloned_media/13159420240830104817.png', duration: '4 Nights 5 Days', title: 'Uttarakhand Backpacking- Rishikesh Auli Chopta', price: '₹13500', originalPrice: '₹15000', discount: '₹1,500' },
    { imageUrl: '/cloned_media/36941120190611050808.png', duration: '2 Days 1 Night', title: 'Rishikesh Rafting Trip', price: '₹5999' },
    { imageUrl: '/cloned_media/315020200213143326.png', duration: '2 Days 1 Night', title: 'Jim Corbett  - 2D1N', price: '₹3600' },
    { imageUrl: '/cloned_media/31981120240211121011.png', duration: '4 Days 3 Nights', title: 'Jim Corbett Ranikhet', price: '₹9999' },
    { imageUrl: '/cloned_media/34512320250505063944.png', duration: '6 Days 5 Nights', title: 'Do Dham Yatra - Kedarnath Badrinath', price: '₹16500' }
];

const weekendTrips = [
    { imageUrl: '/cloned_media/9518720240826103510.png', duration: '3 Days 2 Nights', title: 'Chopta-Tungnath-Deoriatal', price: '₹6000', originalPrice: '₹7000', discount: '₹1,000' },
    { imageUrl: '/cloned_media/4619220240827083456.png', duration: '4 Days 3 Nights', title: 'Rishikesh Chopta Tungnath', price: '₹10000' },
    { imageUrl: '/cloned_media/30858820240830093243.png', duration: '3 Days 2 Nights', title: 'Auli & Joshimath', price: '₹6500', originalPrice: '₹7500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/40053320250328133241.png', duration: '4 Days 3 Nights', title: 'Kedarnath Dham', price: '₹11000' },
    { imageUrl: '/cloned_media/30933820250401114006.png', duration: '5 Days 4 Nights', title: 'Tungnath Kedarnath 5D4N', price: '₹14000' }
];

const backpackingTrips = [
    { imageUrl: '/cloned_media/13159420240830104817.png', duration: '4 Nights 5 Days', title: 'Uttarakhand Backpacking- Rishikesh Auli Chopta', price: '₹13500', originalPrice: '₹15000', discount: '₹1,500' },
    { imageUrl: '/cloned_media/6779420220907061852.png', duration: '7 Days 6 Nights', title: 'Uttarakhand Backpacking 7D6N', price: '₹29999' },
    { imageUrl: '/cloned_media/6737420220907032145.png', duration: '10 Days 9 Nights', title: 'Uttarakhand Backpacking 10D9N', price: '₹38000' },
    { imageUrl: '/cloned_media/7348020200327104220.png', duration: '5 Days 4 Nights', title: 'Uttarakhand Backpacking - Chopta Edition', price: '₹11999' },
    { imageUrl: '/cloned_media/1584220241021095902.png', duration: '5 Days 4 Nights', title: 'NY Uttarakhand Backpacking', price: '₹17500', originalPrice: '₹20000', discount: '₹2,500' }
];

const bestTreks = [
    { imageUrl: '/cloned_media/3791220250428070430.png', duration: '6 Days 5 Nights', title: 'Valley of Flowers Trek', price: '₹9000' },
    { imageUrl: '/cloned_media/7041420250916132944.png', duration: '5 Days 4 Nights', title: 'Kedarkantha Trek', price: '₹6000', originalPrice: '₹7000', discount: '₹1,000' },
    { imageUrl: '/cloned_media/21998220211024062700.png', duration: '5 Days 4 Nights', title: 'Brahmatal Trek', price: '₹7500', originalPrice: '₹8500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/23271820200308124911.png', duration: '7 Days 6 Nights', title: 'Har Ki Doon Trek', price: '₹11500' },
    { imageUrl: '/cloned_media/9093220230330080238.png', duration: '6 Days 5 Nights', title: 'Ali Bedni Bughyal', price: '₹10000' },
    { imageUrl: '/cloned_media/24783120200329182312.png', duration: '4 Days 3 Nights', title: 'Dayara Bugyal Trek', price: '₹9000' },
    { imageUrl: '/cloned_media/38976020191128160341.png', duration: '2 Days 1 Night', title: 'Nag Tibba Trek', price: '₹6000' },
    { imageUrl: '/cloned_media/8354620210223115034.png', duration: '3 Days 2 Nights', title: 'Madmaheshwar Trek', price: '₹8499' },
    { imageUrl: '/cloned_media/35515420240916115136.png', duration: '8 Days 7 Nights', title: 'Roopkund Trek', price: '₹15000' },
    { imageUrl: '/cloned_media/1008520200329152159.png', duration: '6 Days 5 Nights', title: 'Kedartal Trek', price: '₹14000' }
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

const Uttarakhand = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/24975420240912123304.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Uttarakhand"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Uttarakhand Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Uttarakhand Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Listen to the whispers of the Himalayas calling out to thee. A land where ancient myths dance with modern-day adventures, you get a chance to witness stunning views and breathe the pious air with our Uttarakhand tour packages. Picture yourself on top of a mountain peak, in front of you lies an entire living tapestry of emerald forests and silver rivers. Our Uttarakhand Tour Packages are not holidays, but rather gateways to transform your living experience.</p>
                <p>Our expertly designed Uttarakhand trip packages take all the hassles out so that you can experience the best of this mystical land. We have thought of everything, right from comfortable accommodation in the mountain retreats to guided trips with locals who have plenty of experience. Don't forget the cuisine, let the unique flavors of Garhwali and Kumaoni dishes savour your palates and warm your soul. Follow our Uttarakhand travel packages to unveil the secrets of Himalayas.</p>
                <p>Don't just visit Uttarakhand, let it become a part of you. Book Uttarakhand Holiday Packages now and embark on a journey that will rejuvenate your body, mind, and spirit.</p>

                <h2>Best Places To Visit In Your Uttarakhand Packages</h2>
                <p><b>Rishikesh:</b> Situated at the foothills of the Himalaya, Rishikesh is the capital city of yoga in the world. It is a spiritual town sprawled across the holy Ganges, offering a unique blend of serenity and adventure to the visitor. Wander through their bustling and tiny lanes to explore ancient ashrams, participate in meditation sessions, indulge in mouth-watering delicacy inspired by the local cuisine. For adventure junkies, white-water rafting is an adrenaline rushing activity, or simply trek to a nearby waterfall. Take a stroll and soak in the spiritual atmosphere with the mesmerizing evening aarti at Triveni Ghat.</p>
                <p><b>Nainital:</b> This beautiful hill station is built around a pear-shaped Naini Lake and structured with architectural works from the colonial period. Nestled amidst the breathtaking views of the Himalayas, this destination offers serene boat rides on its tranquil lake, charming shopping experiences at Mall Road, and a ropeway journey to Snow View Point for commanding vistas of the stunning landscape. With perfect weather year-round, it remains an inviting escape for visitors at any time.</p>
                <p><b>Mussoorie:</b> Known as the "Queen of Hill Stations," Mussoorie offers a stunning view of the Doon Valley and snow-capped peaks of the Himalayas. Stroll through the lively lanes of Mall Road, historic Landour; and places of attraction such as Kempty Falls and Gun Hill. Nature lovers can explore trails with scenic beauty, while history enthusiasts may delve into its rich colonial past. The best of both the worlds in your Uttarakhand tour!</p>
                <p><b>Haridwar:</b> One of the ancient cities, this sacred place holds a dear significance in the life of pilgrims seeking spiritual purification. The alluring aarti at Har Ki Pauri Ghat draws countless travelers. The city's ancient temples, ashrams, and serene ambiance blend seamlessly, evoking a timeless charm that underscores its significance as a vital hub of Hindu spirituality. The most-visited revered site in an Uttarakhand trip.</p>
                <p><b>Auli:</b> From a pristine ski resort, Auli changes colors with the seasons. During winters, it is a paradise for skiing and snowboarding with some of the finest slopes in Asia. On the arrival of summers, these slopes turn into lush green meadows, perfect for trekking. Draped with stunning and picturesque views of Nanda Devi that would leave one spellbound. The Auli Ropeway exhibits wonderful views all year round. To make the most out of your Uttarakhand trip Packages, do not miss out on the wonderland called Auli.</p>
                <p><b>Jim Corbett National Park:</b> One of the oldest national parks in India, Jim Corbett is internationally recognized as the land of the Bengal tiger because of its rich and varied ecosystem. Probably the most famous spot in your Uttarakhand holiday package’s bucket list, this place is paradise for nature enthusiasts.</p>
                <p>Jeep safaris, elephant rides, and stays in forested guesthouses provide inspiring wild-life experiences within the national park. The landscape varies from grasslands and sal forests to riverine belts, which together support a wide variety of flora and fauna.</p>
                <p><b>Valley of Flowers:</b> One of the UNESCO World Heritage sites in the Himalayas is the Valley of Flowers. The valley is home to a variety of alpine flowers, turning into a colorful carpet during the monsoon season. Let this nature’s wonder wrap you under its spell in your Uttarakhand Tour Packages. An ideal location for trekkers and nature lovers.</p>
                <p><b>Kedarnath:</b> One of the holiest and sacred Hindu shrines, the famous Kedarnath, is seated amidst the majestic Garhwal Himalayas. It is an ancient temple dedicated to Lord Shiva and it is one of the most revered Jyotirlingas in our country. The journey is spiritually rejuvenating but requires you to undertake a challenging trek. This enhances allure for both pilgrims and adventurers.</p>
                <p><b>Badrinath:</b> Another major pilgrimage center in the Char Dham circuit is Badrinath, located in the Garhwal hills. This town offers great mountain scenery. Mana village, also renowned as India's first village, along with the sacred Badrinath Temple are the major attractions of this place. Many pilgrims book the Uttarakhand Tour Package just to experience the holiness and piousness that devbhoomi offers.</p>
                <p><b>Dehradun:</b> The state capital, Dehradun, is a perfect fusion of modernity draped in natural beauty. It is a gateway to numerous destinations across Uttarakhand. Popular spots here include Robber's Cave, Mindrolling Monastery, Sahastradhara, Tapkeshwar Mandir and the Forest Research Institute. This is the heart of your Uttarakhand vacation packages.</p>

                <h2>Top Things To Do In Your Uttarakhand Packages</h2>
                <p><b>Yoga and Meditation:</b> Devbhoomi is the abode of not only sacred temples, but also to various ashrams. Create a deeper affinity to god and with your own body by practising ancient yoga techniques and meditation. Discover the magical power of stillness and tranquility in your Uttarakhand Tour Package.</p>
                <p><b>Rafting:</b> Experience the thrill of river rafting on the Ganges. Navigate through the intense highs and lows of the mighty river. This adrenaline-pumping activity offers a unique perspective of Uttarakhand's river valleys. A must do on your Uttarakhand trip!</p>
                <p><b>Trekking:</b> Embark on numerous trekking routes suitable for all experience levels. From day hikes to multiple day expeditions, explore alpine meadows, dense forests, and high-altitude lakes. Popular treks include Roopkund, Kedarkantha, and Valley of Flowers.</p>
                <p><b>Wildlife Safari:</b> Go on jeep or elephant safaris in national parks like Jim Corbett. Spot diverse wildlife including tigers, elephants, and hundreds of bird species.</p>
                <p><b>Paragliding:</b> Soar above the Kumaon hills and enjoy breathtaking aerial views of the Himalayan range and lush valleys below. Popular places where you can try your hand on Paragliding are at Mussoorie, Dehradun, Tehri, Pithoragarh and Nainital.</p>
                <p><b>Skiing and Snowboarding:</b> Glide through the slopes of Auli during winter months. If you enjoy skiing or snowboarding then this resort is the place for you! Take lessons from certified instructors in case you're a beginner or simply enjoy the snowy landscape.</p>
                <p><b>Attend Spiritual Festivals:</b> Participate in vibrant spiritual festivals like the Kumbh Mela in Haridwar or the International Yoga Festival in Rishikesh. These festivities allow us to experience firsthand the culture and devotion that runs profoundly in the lanes of Rishikesh.</p>
                <p><b>Ayurvedic Treatments:</b> Indulge in traditional Ayurvedic treatments and therapies. Under the guidance of expert practitioners, experience massages that relieve you. Let your Uttarakhand tour transform your mind, health and spirituality.</p>
                <p><b>Rock Climbing:</b> The land of Uttarakhand holds a special place in the heart of adventurers. If you want to try your hand on this new escapade, then Rishikesh, Mussoorie, Pithoragarh and Nainital are your destinations.</p>
                <p><b>Bungee Jumping:</b> Imagine jumping through one of India’s highest platforms that overlooks a picturesque view of turquoise river and verdant mountains. Experience the thrill of bungee jumping in Rishikesh and take back home courageous reminders of your Uttarakhand tour.</p>
                <p><b>River Camping:</b> Put together a camp near the river bank, enjoy bonfire and spooky stories under a starry sky.</p>
                <p><b>Photography:</b> Capture Uttarakhand's diverse landscapes and culture on your camera! Uttarakhand packages offer a perfect sanctuary for nature enthusiasts and photographers who wish to capture the beauty this holy land offers.</p>
                <p><b>Hot Air Ballooning:</b> Experience the thrill of hot air ballooning in Dehradun. Float gently over the Doon Valley, enjoying panoramic views of the surrounding Himalayan foothills and the city below. This unique perspective offers an unforgettable experience.</p>
                <p><b>Try Local Cuisine:</b> Sample authentic Garhwali and Kumaoni dishes like Kafuli, Bhang ki Chutney, Gahat ki Dal, and Bal Mithai. You should not miss out on the local Jhangora ki kheer for dessert.</p>
                <p><b>Visit Local Markets:</b> Explore vibrant bazaars like Paltan Bazaar in Dehradun or Mall Road in Nainital. Shop for traditional Himalayan crafts, woolen items, local spices, and unique souvenirs. Tibetan Market in Dehradun is great for Buddhist artifacts and winter wear.</p>
                <p><b>Handicraft Shopping:</b> Buy traditional handicrafts like Ringal bamboo crafts, Aipan art (folk paintings), and woolen shawls from Uttarakhand Handloom centers. These make for authentic souvenirs and support local artisans.</p>

                <h2>Food to Try in Uttarakhand Trip</h2>
                <p><b>Kafuli:</b> Kafuli is a staple Pahadi food. It is a dish made from local green spinach and fenugreek leaves, which is then slowly cooked with rice flour and spices. You can relish this creamy and nutritious dish with either rice or roti.</p>
                <p><b>Bhang ki Chutney:</b> Bhang ki Chutney is another unique dish found in the valleys of Himalayas, it comes infused with a nutty taste and a smooth texture. This is usually served as a side dish.</p>
                <p><b>Gahat ki Dal:</b> Gahat ki dal is a comfort food in winters. The key ingredient in this super dish is Horse Lentil Grams. It is very nutritious and delightful in taste.</p>
                <p><b>Bal Mithai:</b> It is a famous sweet from Almora. Bal Mithai is chocolate-like fudge prepared from roasted khoya reduced milk solids, which is coated with white sugar balls. Its unique texture and rich taste make it very popular as a souvenir. Almora’s Kheem Singh Mohan Singh Rautela sweets is a popular shop known for its Bal Mithai.</p>
                <p><b>Jhangora ki Kheer:</b> This is a very delicious dessert prepared with the barnyard millet, milk, and sugar. The pudding has cardamom flavor and is garnished with nuts. It's much healthier than the traditional rice kheer and it is made up of locally available ingredients.</p>
                <p>Your Uttarakhand trip is incomplete without having a taste of these delicacies. Enrich your tour to Uttarakhand by trying out local Pahadi cuisine.</p>

                <h2>Best Places to Shop at in your Uttarakhand Tour</h2>
                <p><b>Paltan Bazaar-</b> This is probably one of the most famous bazaars located in Dehradun. It is a congested and busy area where you can shop and eat till your heart’s content. The heart and soul of Uttarakhand tours can be discovered here.</p>
                <p><b>Moti Bazaar-</b> Moti Bazaar is located near Har ki Pauri, in Haridwar. You can shop for puja items and everyday essentials here. It becomes especially beautiful at night time.</p>
                <p><b>Bara Bazaar-</b> Shopping in Nainital is a beautiful experience, this famous market near the infamous Naini Lake provides you with opportunities to take home locally crafted souvenirs. This vibrant market is lined with multiple restaurants and shops for clothes, footwear, handicrafts etc.</p>
                <p><b>Bhotia Market-</b> This bazaar is also called Tibetan Market. It is another popular hub for shopping in Nainital.</p>
                <p><b>The Mall Road-</b> The heart of Mussoorie lies in Mall Road. You can stroll around here, shop and take in the picturesque views.</p>

                <h2>How to Reach For Your Uttarakhand Tours</h2>
                <p><b>By Air:</b> Fly to Dehradun's Jolly Grant Airport, Uttarakhand's main gateway. Pantnagar and Pithoragarh airports serve specific regions. Regular flights connect from major Indian cities, offering quick access to the state's diverse landscapes and major attraction points.</p>
                <p><b>By Train:</b> Railways provide a comfortable journey to Uttarakhand. Key stations include Dehradun, Haridwar, Kathgodam, and Nainital. Railways connect from various Indian cities, offering scenic routes as you approach the Himalayan foothills.</p>
                <p><b>By Road:</b> Drive at your own expense or take a bus to Uttarakhand via well-connected highways. This option provides flexibility and scenic views. Regular bus services, both government and private, operate from nearby states, especially Delhi.</p>

                <h2>Best Time to Visit Uttarakhand</h2>
                <p><b>Spring (March to April):</b> The weather is pleasant with 15-25°C temperatures. Outdoor sports and sightseeing are ideal. Rhododendrons are in bloom, painting picture postcard landscapes. It is the perfect time for visiting wildlife sanctuaries and trekking.</p>
                <p><b>Summer (May to June):</b> Temperatures range from 20-35°C. It is during this season that plains folk flock to the hills to escape the heat. This is an ideal time to visit places like Mussoorie and Nainital. Pre Monsoon showers may occur at some places.</p>
                <p><b>Monsoon (July to September):</b> Heavy rainfall with occasional landslides. Lush green landscapes, flowing waterfalls, and clear visibility make it a photographer's dream come true. Some places may not be accessible due to travel restrictions from time to time in view of weather conditions.</p>
                <p><b>Autumn (October to November):</b> The skies are clear with a comfortable temperature at 10-20°C and so it's perfect for trekking and outdoors. The autumn color palette enhances the scenic beauty. This is the ideal time to visit religious places, and join in festival celebrations.</p>
                <p><b>Winter (December to February):</b> Cold temperatures, usually below freezing at higher altitudes. Snowfall reigns in most parts, making it ideal for winter sports enthusiasts. Perfect time to experience a Himalayan winter. Some passes and roads may close because of heavy snowfall.</p>

                <h2>FAQ's</h2>
                <p><b>1. What is the best time to visit Uttarakhand?</b></p>
                <p>That depends on your preferences. Other than the monsoon season, Uttarakhand has different activities in store for everyone. If you want to witness snowfall then winter is your best bet. But the peak tourist season is during summers.</p>
                <p><b>2. What local cuisines of Uttarakhand should we try on your Uttarakhand tour?</b></p>
                <p>Try Kafuli, Bhatt ki Chudkani, aloo ke gutke and don’t forget to relish the sweet Treat-Bal Mithai.</p>
                <p><b>3. What are some popular treks in Uttarakhand?</b></p>
                <p>Nag Tibba, Kedar Tal, Pindari Glacier, Valley of flower trek, Roop Kund, and Dayara Bugyal are some popular treks of Uttarakhand.</p>
                <p><b>4. What are some top tourist spots in Uttarakhand?</b></p>
                <p>Nainital, Mussoorie, Rishikesh and Jim Corbett are the most popular tourist spots you should include in your Uttarakhand vacation packages.</p>
                <p><b>5. What is Uttarakhand most famous for?</b></p>
                <p>Uttarakhand is most famous for its Char Dham yatra of Yamunotri, Gangotri, Kedarnath, Badrinath.</p>
                <p><b>6. What are some adventure activities to do in Uttarakhand?</b></p>
                <p>You can relish in bungee jumping, river rafting, trekking and cable car riding in your Uttarakhand group tour.</p>
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
              <h2 className="text-4xl font-bold mb-6">Uttarakhand Family Tours</h2>
              <TripSlider trips={familyTours} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Uttarakhand Weekend Trips</h2>
              <TripSlider trips={weekendTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Uttarakhand Backpacking Trips</h2>
              <TripSlider trips={backpackingTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Best Treks in Uttarakhand</h2>
              <TripSlider trips={bestTreks} slidesToShow={4} />
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

export default Uttarakhand;