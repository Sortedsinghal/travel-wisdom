import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (SPITI VALLEY) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/39542020240830061322.png', duration: '7 Days 6 Nights', title: 'Winter Spiti', price: '₹18000', originalPrice: '₹20000', discount: '₹2,000' },
    { imageUrl: '/cloned_media/7956720250203104119.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip with Manali', price: '₹20000' },
    { imageUrl: '/cloned_media/38286220250203102630.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip', price: '₹20000' },
    { imageUrl: '/cloned_media/9191320250203134935.png', duration: '5 Days 4 Nights', title: 'Spiti Valley- Manali Edition', price: '₹15000' }
];

const circuitTrips = [
    { imageUrl: '/cloned_media/39542020240830061322.png', duration: '7 Days 6 Nights', title: 'Winter Spiti', price: '₹18000', originalPrice: '₹20000', discount: '₹2,000' },
    { imageUrl: '/cloned_media/38286220250203102630.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip', price: '₹20000' },
    { imageUrl: '/cloned_media/7956720250203104119.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip with Manali', price: '₹20000' },
    { imageUrl: '/cloned_media/10602120240210055925.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip Manali to Shimla', price: '₹24999' },
    { imageUrl: '/cloned_media/13017620240210061613.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip From Chandigarh', price: '₹25000' }
];

const chandigarhTrips = [
    { imageUrl: '/cloned_media/31067820240210063828.png', duration: '5 Days 4 Nights', title: 'Spiti Valley Trip From Chandigarh - Manali Edition', price: '₹22000' },
    { imageUrl: '/cloned_media/13017620240210061613.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip From Chandigarh', price: '₹25000' },
    { imageUrl: '/cloned_media/17027820240211112306.png', duration: '11 Days 10 Nights', title: 'Spiti Valley Explorer Edition', price: '₹35000', originalPrice: '₹38000', discount: '₹3,000' }
];

const exploreTrips = [
    { imageUrl: '/cloned_media/1420620250217154705.png', duration: '8 Days 7 Nights', title: 'Spiti Valley - Biking Edition', price: '₹30000' },
    { imageUrl: '/cloned_media/786720240210060450.png', duration: '9 Days 8 Nights', title: 'All Girls Spiti Valley Trip', price: '₹29999', originalPrice: '₹34999', discount: '₹5,000' },
    { imageUrl: '/cloned_media/16800620210605120557.png', duration: '7 Days 6 Nights', title: 'Spiti Valley - Jibhi Edition', price: '₹22999' }
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

const Spiti = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/21811920241009114909.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Spiti Valley"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Spiti Valley Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Spiti Valley Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Escape the urban madness and soak in the charm of the Himalayas with Go4Explore’s best-suited Spiti Valley Tour Packages to explore one of the most stunning regions nestled in the mighty Himalayas.</p>
                <p>With 7 years of experience, our travel experts leave no stone unturned in curating memorable Spiti Valley tour packages from Delhi, Bangalore, Hyderabad, Chennai, Mumbai, Ahmedabad, Vadodara, Kolkata, or any city in India to quench your wanderlust soul.</p>
                <p>From adventure seekers, and solo nomads to backpackers, Go4Explore provides Lahaul Spiti trip packages for every kind of traveller.</p>
                <p>Embark on a beautiful journey with Go4Explore, here the prices are light and memories are limitless. A trip to Spiti Valley Tour Packages from Delhi calls for guidance, therefore Go4Explore brings you the Spiti Valley Tour Packages that involves an experienced Trip Captain.</p>
                <p>Book your Spiti Valley Trip and venture into a Spiti adventure tour with Go4Explore for an incredible travel experience and take back home some unforgettable memories and a nomadic Instagram feed!</p>
                
                <h2>Spiti Valley Tour Packages: Your Ultimate Adventure</h2>
                <p>Situated at an average elevation of 12,500 feet above sea level, Spiti Valley is characterised by its rugged, high-altitude terrain, adorned by charming villages and ancient monasteries. Lahaul Spiti Valley Tour Packages offer everything a tourist wants to explore in their dream destination.</p>
                <p>Our Spiti Valley tour packages offer the chance to experience the local culture of Buddhist and Tibetan communities, in addition to stunning natural surroundings. Explore UNESCO World Heritage Site Tabo Monastery, which is over a thousand years old, during your Spiti Valley trip.</p>
                <p><b>Explore our Spiti Valley travel packages offered by different Indian cities: <a href="https://go4explore.com/trips/Spiti-Valley-Biking-Edition" target="_blank" style={{color: 'blue'}}>Spiti Valley Bike trip from Manali</a>, <a href="https://go4explore.com/trips/Spiti-Valley-Circuit-Trip-From-Chandigarh" target="_blank" style={{color: 'blue'}}>Spiti Valley Circuit Trip From Chandigarh</a>, <a href="https://go4explore.com/trips/Spiti-Valley-Circuit-Trip-Manali-to-Shimla" target="_blank" style={{color: 'blue'}}>Spiti Valley Circuit Trip Manali to Shimla</a>.</b></p>
                
                <h2>Best Places to Visit in Your Spiti Valley Trip</h2>
                <p>Go4Explore’s Spiti Valley Tour Packages have almost all of the amazing places covered up!</p>
                <p><b>Chandratal Lake -</b> One of the world's most beautiful lakes is Chandratal. Driving through the alluring landscape amidst the Himalayas, you’ll reach the mighty Kunzum Pass. The road to the lake from the Kunzum Pass is quite challenging. These roads need an expert mountain driver to navigate through the rough terrain. There is a trek of around 1 km to reach the lake. The best time to go is early morning when the reflection of the snow-peaked Himalayas falls on this pristine glacial lake. No Spiti Valley Trip seems complete without visiting Chandratal!</p>
                <p><b>Key Monastery -</b> If you are planning a <a href="https://go4explore.com/trips/Spiti-Valley-Circuit-Trip" target="_blank" style={{color: 'blue'}}>Spiti Valley Circuit trip</a>, allow us to take you to the iconic Key Monastery in your Spiti Valley Tour Packages. Key Monastery is the biggest monastery and a prominent religious training center for lamas. An 11 kms drive from Kaza takes you to the gompa, which is perched on the top of a hill at an altitude of 13,668 ft. Experience moments of tranquility while standing on the rooftop of the monastery- being one with the mighty Himalayas.</p>
                <p><b>Pin Valley National Park -</b> Nestled in <a href="https://go4explore.com/trip/himachal-pradesh-tour-packages" target="_blank" style={{color: 'blue'}}>Himachal Pradesh</a>, Pin Valley National Park lies in the cold desert area. A perfect haven for wildlife enthusiasts to elevate your Spiti Valley Trip. It offers various trekking opportunities. You can choose between the famous Pin-Parvati Pass Trek and the <a href="https://go4explore.com/trips/pin-bhaba-pass" target="_blank" style={{color: 'blue'}}>Pin-Bhaba Pass Trek</a>.</p>
                <p><b>Tabo Monastery -</b> Popular for its marvellous murals, Tabo Monastery is an ancient marvel to behold in your Spiti Valley Trip. Resting at 3,050 metres above sea level, this monastery offers a glimpse into Tibetan culture with its wide range of Buddhist temples, stupas, sculptures of Bodhisattvas. The best time to visit Tabo Monastery during a Spiti Valley trip is from May to October.</p>
                <p><b>Kunzum Pass -</b> Also known as Kunzum La, this is one of India’s high altitude motorable mountain passes. Situated at 14,931ft above sea level, Kunzum Pass offers enchanting vistas of Bara-Sigri known as the second longest glacier in the world. Plethora of travellers and nature lovers come to this region to enjoy the most thrilling ride across Kunzum Pass’s beautiful landscape, connecting Lahaul and Spiti valleys.</p>
                <p><b>Kaza -</b> The town of Kaza is categorised into two parts: New Kaza and Old Kaza. Old Kaza is famous for the king’s palace, while New Kaza contains several government offices. Kaza attracts adventure tourists with its mountain trekking and hiking, along with its picturesque landscape views. The best time to visit Kaza during a <a href="https://go4explore.com/trip/spiti-valley-tour-packages" target="_blank" style={{color: 'blue'}}>Spiti Valley tour</a> is from June to October.</p>
                <p><b>Dhankar Monastery -</b> Built at the highest location in Spiti Valley at around the 17th century, Dhankar Monastery was once the capital of the Spiti region. When you look at it from a distance, it seems to hang on the cliffside. The beautiful Dhankar Village is one of the most stunning attractions in Lahual and Spiti Valley, home to the most beautiful and awe-inspiring Dhankar Monastery.</p>
                <p><b>Kibber -</b> Kibber is a high altitude village in Spiti Valley and also the second-highest motorable village in the world. The view of this offbeat Himalayan village is captivating. Kibber is the natural habitat of magnificent snow leopards.</p>
                <p><b>Nako Lake -</b> Located on the slopes of the Reo Purgyil mountain of the Shrikhand range in the Himalayas, this lake has been attracting travellers all over the world for its pristine and sacred qualities. Nako Lake is surrounded by Buddhist temples and monasteries, offering amazing views of the wonderland called Himalaya. April to October are the best times to explore Nako Lake during your Spiti Valley Trip.</p>
                <p><b>Tabo Caves -</b> At an altitude of 10,760 feet, this ancient monastery has been hollowed out by several caves that serve as dwellings for monks during the harsh winters of the Himalayas.</p>
                <p><b>Hikkim Post Office -</b> Situated at an elevation of 14,567 feet above sea level, Hikkim’s post office is said to be among the highest post offices in the world. It has become a magnet for tourists, pulling them in to send postcards home. Established in 1983, this post office is frequently used by the monks and farmers of the village. The best time to send your loved one’s a postcard bragging about your adventures during the Spiti Valley trip is from April to October.</p>
                <p><b>Komik -</b> Located at 18,000 feet above sea level, one of the highlights of Komic Village is the well-known 14th century Lundup Tsemo Gompa. The monastery is famous for Maitreya Buddha. The Komic Village is home to the highest motorable road in the world, frequently visited by avid bike riders and travellers. </p>
                <p><b>Chicham Bridge -</b> The highest bridge in Asia that stands at an elevation of 13,596 ft. This is truly an engineering marvel that connects 2 isolated villages of Chicham and Kibber</p>
                
                <h2>Things to Do in Your Spiti Valley Trip</h2>
                <p>Experience the best of Spiti Valley Tour with Go4Explore’s Spiti Valley Tour Packages, packed with exciting activities.</p>
                <p><b>Nako Village Walk -</b> Himachal Pradesh's Nako Village provides tranquility amid historic monasteries, traditional homes, and stunning vistas of snow-capped hills. Discover the serene Nako Lake, indulge in regional cuisine, and converse with amiable people.</p>
                <p><b>Mummy in Gue Village -</b> It is home to a 500-year-old mummy, and is the country’s only known naturally preserved mummy. Situated in Gue Village, this mummy is believed to be of a local Buddhist monk namely Sangha Tenzin, who died in the 1500s. This mummified body of the Buddhist monk was found when the tomb was opened during an earthquake in 1975. The mummy is in a temple with teeth intact and hollow eyes, symbolizing the living Buddha.</p>
                <p><b>Sending Postcards from Hikkim -</b> Known as the world's highest post office, it has become a popular attractive spot. The Hikkim Post Office started its operations in 1983, and Rinchen Chhering has been its postmaster since then. This post office is used by locals and Tibetan monks from the nearby Komic Monastery to receive their passports for undertaking overseas pilgrims. Savour in nostalgia by including Hikkim’s post office in your Spiti Valley Itinerary.</p>
                <p><b>Stargaze in Spiti -</b> Stargazing is one of the best things to do on a Spiti Valley trip. You can just sit and look up at heaven and spot a zillion stars right away. And if fortune favours you at that time, you might also spot a shooting star.</p>
                <p><b>Interact With The Locals -</b> The Spiti Valley town in Himachal Pradesh is home to locals who are a delight to interact with. Experience the enchanting charm of Spiti through the warmth of its people and their genuine hospitality. You can learn about its lifestyle like never before, making it another must-do on your Spiti Valley trip.</p>
                <p><b>Treat your tastebuds with Local Flavours -</b> Be it lunching in a Buddhist monastery or indulging in local delicacies at a local cafe, the Spiti Valley trip has a lot of surprises in store for its foodie tourists. Spiti's famous momo, thukpas, butter-tea vegetables, and bread such as tingmo are like a staple cuisine served across the valley. It is enough to relish the taste admired in the local culture.</p>
                <p><b>Buddhist Monasteries Hopping -</b> Spiti is a religious and cultural centre for Tibetans, and that is another reason which makes it such a famous tourist attraction. With so many Tibetan monasteries set up along the valley, you could visit each or any of them for a peaceful time. From the architecture of Tibetan monasteries to the ancient murals inside, every sight will leave you mesmerized.</p>
                <p><b>Sit & Relax along Spiti River -</b> On your way to Spiti, stop at a place where the road meets the river and sit leisurely. Just soak up the beauty of nature, relax and unwind. It’s a mesmerising experience, making it one of the top things to do on a Spiti Valley trip.</p>
                <p><b>Capture the frozen waterfall of Spiti -</b> The Lingti waterfall freezes in the winter months from November to February. The best time to witness the beauty of this Spitian wonder is in the summer months. Due to its remote location and limited access options, this destination remains an offbeat adventure.</p>
                <p>These activities turn into events when you travel with like minded people. So book your seat now and choose the Spiti Valley Package that suits you.</p>

                <h2>Types of Spiti Valley Tour Packages</h2>
                <p>Go4Explore comprises thrilling activities in its Spiti Valley Tour Packages for the ultimate travel experience. There are several options to reach your favorite destination, Spiti Valley</p>
                <p><b>Bike Trip/Road Trip-</b> A bike trip through Spiti Valley will be your best bet for a Spiti adventure tour. Spiti bike expedition is a thrilling adventure for motorcycle enthusiasts. Riders navigate challenging terrains, including rocky paths, steep ascents, and river crossings making it a test of both skill and endurance. The journey offers unparalleled freedom and the chance to freely interact with the natural surroundings. The journey includes mesmerizing drives through high mountain passes like Kunzum Pass, visits to remote villages such as Langza village known for its fossils, and stays in homestays or guesthouses that offer insights into local culture and traditions.</p>
                <p>A road trip to Spiti Valley by Car or SUV is perfect for those seeking adventure with added comfort and flexibility. Travelers can cover larger distances more comfortably and carry additional supplies making it a suitable Spiti road trip for families and groups.</p>
                <p><b>Group Tours/Trips-</b> Traveling to Spiti Valley with strangers offers one of the most exhilarating and wonderful experiences. These tours led by experienced guides cover major attractions and hidden gems ensuring a comprehensive travel experience.</p>
                <p>A Spiti group tour with unknown travellers provides added convenience and safety, with all logistics handled by the tour operator. On a Spiti valley group tour, one can enjoy activities like visiting ancient monasteries, exploring high altitude villages, and participating in cultural performances together. The all inclusive packages simplify budgeting and ensure a hassle-free adventure for all ages.</p>
                <p><b>Spiti Valley Circuit Trips-</b> Spiti Valley Circuit Trip offers an immersive experience through the breathtaking landscapes of the Himalayas. These trips typically start from Manali or Shimla, taking you through high altitude passes like Rohtang and Kunzum, remote villages of Spiti Kinnaur and ancient Tibetan monasteries. The Spiti Circuit trip includes must see destinations such as Kaza, Tabo, Nako, Chicham Bridge and Chandratal lake, providing a mix of cultural insights and natural beauty. Whether by car, bike or guided tour, a <a href="/trips/spiti-valley-circuit-trip" target="_blank" style={{color: 'blue'}}>Spiti Valley Circuit Trip</a> promises adventure and unforgettable scenery.</p>
                <p>Choose the Spiti Valley Package that suits you and your comfort from the multiple Spiti Valley Tour Packages that Go4Explore has to offer. </p>
                
                <h2>Best Places to Eat at in Your Spiti Valley Trip</h2>
                <p>Taste the flavors of Spiti Valley with Go4Explore’s handpicked selection of must-try foods for our Spiti Valley Tour Packages.</p>
                <p><b>The Himalayan Café Kaza -</b> This café has a different type of service, like a dining experience. This restaurant has a collection of books and board games, with a menu that includes a unique Israeli salad and diverse options like Pad Thai noodles and vegetarian and chicken pizza.</p>
                <p><b>Café Kunzum Top -</b> Café Kunzum Top situated near Tabo Monastery, is one of the most happening cafes in town. This café serves Tibetan traditional food that is delicious in taste, which you must try when you visit Spiti Valley. The homestay garners widespread praise from tourists, lauded for its immaculate rooms and welcoming service.</p>
                <p><b>Yak Café Kaza -</b> Yak Café in Kaza serves delicious food that can satisfy all food cravings. The strategic location of the café allows tourists and locals to commute with ease. This place serves different types of cuisines, like Continental, Tibetan, and Chinese cuisines, and has earned the title of the most renowned cafe in the area for its flavorful food.</p>
                <p><b>Taste of Spiti -</b> One of the best Italian restaurants in Kaza, Taste of Spiti, is a pizzeria highly in demand. If you are a vegetarian, we recommend you visit, and there are a lot of options in this cafe. The sandwiches and burgers are made from local bread and have a unique flavour. The staff is warm and interactive.</p>
                <p><b>Cafe Zomsa -</b> Cafe Zomsa serves Indian and Italian cuisines. The quality of the food is great. The place carries a warmth that brings in tourists from far and beyond. The live music plays an important role, and the lively atmosphere would urge you to stay forever. Guests are drawn by the delicious cuisine, and they depart mesmerized by the ethereal atmosphere that surrounds them.</p>
                <p><b>Thukpa -</b> A tasty noodle soup mixed with vegetables and sometimes pieces of meat, flavoured with local spices. This local dish cooked by locals in Spiti Valley is quite popular, tummy-filling and nourishing.</p>
                <p><b>Momos -</b> Steamed or fried dumplings stuffed with vegetables filled with spinach, cheese, or potatoes or minced meat. Momo are widely popular and a must-have quick food item when travelling in Spiti Valley.</p>
                <p><b>Chiltas -</b> Pan-fried bread made from buckwheat or barley flour, resembling pancakes, is often eaten with locally made apricot jam.</p>
                <p><b>Thentuk -</b> A variant of thukpa, Thentuk is a flat noodle soup with mixed vegetables, providing a warm and comforting meal.</p>
                <p><b>Skyu -</b> A traditional pasta-like dish made from wheat dough and cooked with root vegetables and sometimes greens bear a resemblance to Italian gnocchi.</p>
                <p>Book your Spiti Valley Tour Packages with us now for your next adventure getaway!</p>

                <h2>Best Places to Shop in Your Spiti Valley Tour</h2>
                <p>Discover the top shopping spots in Spiti Valley with Go4Explore’s carefully curated recommendations for our Spiti Valley Tour Packages.</p>
                <p><b>Tibetan Heritage Products -</b> Take home Tibetan handicrafts as souvenirs from your Spiti Valley trip. Explore the cultural treasures of Spiti Valley with a delightful array of Buddhist handicrafts including prayer wheels, flags, beads, masks, bamboo baby cradles, work baskets, and much more.</p>
                <p><b>Spiti Jewelry -</b> A rich collection of amulets, anklets, bangles, rings, and neckpieces in Tibetan and Pahari tribal styles are available here. Names like BichwasToora, Boomani, Mendukmala, Nathni, Sikkamala, Chalai, Ghungroo Mala, Kangnu, Chandrahar, and Guthi evoke an air of exoticism and intrigue.</p>
                <p><b>The Metalwork -</b> The metalwork heritage in the Spiti Valley dates back centuries. The artisans here are skilled at resurrecting dead metals to life, whether it's brass, silver, gold, or copper. These metal products make excellent gifts for friends and family who want a taste of Himachal Pradesh. Lamps, burners, canopies, incense burners, bells, low settees, flasks, and candlesticks are among the best-sellers.</p>
                <p><b>Tibetan Thangkas -</b> These intricately painted, eye-catching pieces are ideal for hanging on the wall. Gazing at these can help you meditate by lulling your mind into a peaceful state. This list doesn’t end here. There is plenty of stuff that one can explore and buy here. In your Spiti Valley Trip, you get the wonderful chance to experience local life and experience culture firsthand.</p>
                <p><b>Discover our Spiti Valley Tour Packages along with similar exciting options: <a href="https://go4explore.com/trips/winter-spiti" target="_blank" style={{color: 'blue'}}>Winter Spiti</a>, <a href="https://go4explore.com/trips/spiti-valley-circuit-trip" target="_blank" style={{color: 'blue'}}>Spiti Valley Circuit Trip</a>, <a href="https://go4explore.com/trips/spiti-valley-manali-edition" target="_blank" style={{color: 'blue'}}>Spiti Valley Manali Edition</a>, <a href="https://go4explore.com/trips/all-girls-spiti-valley-trip" target="_blank" style={{color: 'blue'}}>Girls Spiti Valley Trip</a>, <a href="https://go4explore.com/trips/spiti-valley-explorer-edition" target="_blank" style={{color: 'blue'}}>Spiti Valley Explorer Edition</a>, <a href="https://go4explore.com/trips/spiti-valley-biking-edition" target="_blank" style={{color: 'blue'}}>Spiti Valley Biking Edition</a></b></p>
                
                <h2>How to Reach Spiti Valley?</h2>
                <p>The Spiti Valley route can be divided into two parts: Manali to the Kaza section and Shimla to the Kaza section.</p>
                <p>The Manali to Kaza section is approximately 200 kilometers long and takes you through the famous <a href="https://go4explore.com/trips/manali-rohtang-pass" target="_blank" style={{color: 'blue'}}>Rohtang Pass</a>. Rohtang Pass is open for tourists from May to October. The best time to take the Manali to Spiti Valley via the Kaza route is between July and September.</p>
                <p>The Shimla to Kaza stretch spans approximately 400 kilometers, showcasing breathtaking views of the Spiti River, high mountain passes, and remote villages.</p>
                <h6>Route from Manali to Kaza</h6>
                <p>➤ Manali to Rohtang Pass/Atal Tunnel: Start your journey from Manali and head towards Rohtang Pass/Atal Tunnel, traversing scenic landscapes and breathtaking views.</p>
                <p>➤ Rohtang Pass/Atal Tunel to Gramphu: From Rohtang Pass/Atal Tunnel descend towards Gramphu which is a small village in Lahaul valley.</p>
                <p>➤ Gramphu to Chhatru: Drive through rough roads from Gramphu to Chhatru where you can take a short break and soak up the beauty of the surroundings.</p>
                <p>➤ Chhatru to Batal: The journey from Chhatru to Batal is adventurous, with steep climbs and plenty of sharp turns.</p>
                <p>➤ Batal to Kunzum Pass: Enjoy a scenic drive from Batal to Kunzum Pass, which is one of the highest mountain passes in India.</p>
                <p>➤ Kunzum Pass to Losar: This stretch offers a scenic journey through the charming villages of Spiti Valley.</p>
                <p>➤ Losar to Kaza: The last leg of the Manali to Kaza route takes you from Losar to Kaza, the capital of the Spiti Valley.</p>
                <h6>Route from Shimla to Kaza</h6>
                <p>➤ Shimla to Sarahan: Shimla route takes you from Shimla to Sarahan, the Gateway to Kinnaur district and home to the famous Bhimakali Temple.</p>
                <p>➤ Sarahan to Kalpa: Take a scenic drive from Sarahan to Kalpa, offering the best views of Kinnaur Kailash.</p>
                <p>➤ Kalpa to Nako: From Kalpa proceed towards Nako, a picturesque village on the lake shore.</p>
                <p>➤ Nako to Tabo: Ride from Nako towards Tabo and enter Spiti Valley.</p>
                <p>➤ Tabo to Kaza: The last leg of the journey takes you from Tabo to Kaza.</p>
                
                <h2>Best Time to Visit Spiti Valley</h2>
                <p>Our Spiti Valley Holiday Packages and Winter Spiti Packages have been carefully curated to make the most of Spiti in every season.</p>
                <p><b>March to June (14°C to 20°C):</b> The best time to have a Spiti holiday adventure is between March and June when the weather is great for outdoor activities including riding, trekking, camping, and sightseeing.</p>
                <p><b>July to September (13°C to 27°C):</b> Due to the monsoon season in Spiti, which lasts from July to September, there is an increased risk of landslides. This is not a good time to visit Spiti Valley. Due to the risks involved, the majority of highways have also become unreachable.</p>
                <p><b>October to February (-4°C to -20°C):</b> Winter lasts from October to February, and if you want to experience Spiti Valley in Winter, then this is the season. However, temperatures in Spiti can drop to minus 40 degrees Celsius, making for extremely difficult weather conditions.</p>
                <p>All our Spiti Valley Tour Packages help you discover the beauty of Spiti in every season.</p>
                
                <h2>FAQS</h2>
                <p><b>1. How is the climate of Spiti Valley?</b></p>
                <p>Since, Spiti Valley is a cold desert area the summers are mild and shorter in duration and winters are harsh with heavy snowfall. Therefore, the ideal time to visit Spiti Valley is from June to October.</p>
                <p><b>2. What is the elevation of Spiti Valley?</b></p>
                <p>It is situated at a height of 12,500 ft.</p>
                <p><b>3. How to reach Spiti Valley?</b></p>
                <p>You can reach Spiti either through <a href="https://go4explore.com/tours/shimla-manali" target="_blank" style={{color: 'blue'}}>Manali or Shimla</a>. The Manali to Spiti Valley route is approximately 200 km long and goes via Rohtang Pass, which is open from May to October for tourists. The Shimla route is open all year round but stretches for 400 km.</p>
                <p><b>4. What is the best time to visit Spiti Valley?</b></p>
                <p>The best time for a Spiti adventure tour is from June to September</p>
                <p><b>5. Do we need a permit to visit Spiti Valley?</b></p>
                <p>Yes, for Indian nationals you need to get an Inner Line Permit (ILP) and for foreigners a Protected Area Permit (PAP) is required. </p>
                <p><b>6. Is Spiti Valley safe for tourists?</b></p>
                <p>Yes, Spiti Valley is generally safe for tourists venturing on a Spiti Valley Circuit.</p>
                <p><b>7. What precautions should I take to prevent AMS?</b></p>
                <p>AMS stands for Altitude Mountain Sickness, it is a very common phenomenon when travelling to high altitudes. You acclimatize gradually, drink plenty of water and take adequate rest. Carry medicine like Diamox.</p>
                <p><b>8. What are the key attraction points in Spiti Valley?</b></p>
                <p>Key Monastery, Tabo Monastery, Dhankar Monastery, Kaza, Pin Valley are must visit locations.</p>
                <p><b>9. How can I book a Spiti Valley Trip?</b></p>
                <p>You can send us a query and our team will get to you shortly to assist you with the Spiti Valley Trip Packages.</p>
                <p><b>Explore Our Most Popular Himalayan Treks: <a href="https://go4explore.com/trips/hampta-pass-trek" target="_blank" style={{color: 'blue'}}>Hampta Pass Trek</a>, <a href="https://go4explore.com/trips/bhrigu-lake-trek" target="_blank" style={{color: 'blue'}}>Bhrigu Lake Trek</a>, <a href="https://go4explore.com/trips/sar-pass-trek" target="_blank" style={{color: 'blue'}}>Sar Pass Trek</a>, <a href="https://go4explore.com/trips/kashmir-great-lakes-trek" target="_blank" style={{color: 'blue'}}>Kashmir Great Lakes Trek</a>, <a href="https://go4explore.com/trips/valley-of-flowers-trek" target="_blank" style={{color: 'blue'}}>Valley of Flowers Trek</a>, <a href="https://go4explore.com/trips/kedarkantha-trek" target="_blank" style={{color: 'blue'}}>Kedarkantha Trek</a>, <a href="https://go4explore.com/trips/brahmatal-trek" target="_blank" style={{color: 'blue'}}>Brahmatal Trek</a>, <a href="https://go4explore.com/trips/har-ki-doon-trek" target="_blank" style={{color: 'blue'}}>Har Ki Doon Trek</a></b></p>
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
              <h2 className="text-4xl font-bold mb-6">Spiti Valley Circuit Trips</h2>
              <TripSlider trips={circuitTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Spiti Valley Trips From Chandigarh</h2>
              <TripSlider trips={chandigarhTrips} slidesToShow={3} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Let’s Explore Spiti Valley Packages</h2>
              <TripSlider trips={exploreTrips} slidesToShow={3} />
            </section>
            {/* The source code did not contain data for code5, so that section is omitted. */}
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

export default Spiti;