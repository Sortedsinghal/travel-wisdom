import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (LEH LADAKH) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/22840620250217141818.png', duration: '8 Days 7 Nights', title: 'Manali Leh Backpacking Bike Trip', price: '₹30000' },
    { imageUrl: '/cloned_media/36526420250217143451.png', duration: '6 Days 5 Nights', title: 'Leh Ladakh Backpacking Bike Trip', price: '₹21000' },
    { imageUrl: '/cloned_media/34294120250217145015.png', duration: '7 Days 6 Nights', title: 'Leh Ladakh with Turtuk', price: '₹23000' },
    { imageUrl: '/cloned_media/24468820250217151702.png', duration: '10 Days 9 Nights', title: 'Manali Leh Srinagar', price: '₹32000' }
];

const delhiTrips = [
    { imageUrl: '/cloned_media/22840620250217141818.png', duration: '8 Days 7 Nights', title: 'Manali Leh Backpacking Bike Trip', price: '₹30000' },
    { imageUrl: '/cloned_media/24468820250217151702.png', duration: '10 Days 9 Nights', title: 'Manali Leh Srinagar', price: '₹32000' },
    { imageUrl: '/cloned_media/722620230331052335.png', duration: '9 Days 8 Nights', title: 'All Girls Manali Leh Trip', price: 'Customization Available' },
    { imageUrl: '/cloned_media/33122620250219135706.png', duration: '10 Days 9 Nights', title: 'Manali Leh Srinagar Backpacking Bike Trip', price: 'Customization Available' },
    { imageUrl: '/cloned_media/8691320250217153005.png', duration: '10 Days 9 Nights', title: 'Srinagar Leh Manali', price: '₹32000' }
];

const lehToLehTrips = [
    { imageUrl: '/cloned_media/36526420250217143451.png', duration: '6 Days 5 Nights', title: 'Leh Ladakh Backpacking Bike Trip', price: '₹21000' },
    { imageUrl: '/cloned_media/34294120250217145015.png', duration: '7 Days 6 Nights', title: 'Leh Ladakh with Turtuk', price: '₹23000' },
    { imageUrl: '/cloned_media/20011020250217145838.png', duration: '8 Days 7 Nights', title: 'Leh Ladakh With Umlingla & Hanle', price: '₹31500' },
    { imageUrl: '/cloned_media/41654520230330173328.png', duration: '8 Days 7 Nights', title: 'Leh Ladakh with Tso Moriri & Turtuk', price: 'Customization Available' },
    { imageUrl: '/cloned_media/37953920230331053627.png', duration: '7 Days 6 Nights', title: 'All Girls Ladakh Trip with Turtuk', price: 'Customization Available' }
];

const srinagarTrips = [
    { imageUrl: '/cloned_media/24468820250217151702.png', duration: '10 Days 9 Nights', title: 'Manali Leh Srinagar', price: '₹32000' },
    { imageUrl: '/cloned_media/8691320250217153005.png', duration: '10 Days 9 Nights', title: 'Srinagar Leh Manali', price: '₹32000' },
    { imageUrl: '/cloned_media/38552720250308073455.png', duration: '12 Days 11 Nights', title: 'Manali Leh Srinagar With Umlingla & Hanle', price: '₹38000' },
    { imageUrl: '/cloned_media/25238920250308075453.png', duration: '12 Days 11 Nights', title: 'Srinagar Leh Manali With Umlingla & Hanle', price: '₹38000' },
    { imageUrl: '/cloned_media/33122620250219135706.png', duration: '10 Days 9 Nights', title: 'Manali Leh Srinagar Backpacking Bike Trip', price: 'Customization Available' }
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

const LehLadakh = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/21836720250219134110.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Leh Ladakh"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Leh Ladakh Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Leh Ladakh Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>It’s your time to hit the road for ‘The Land of High Passes’, decorated with majestic landscapes and deep pristine valleys, this destination will help you escape the monotony of city life! Here we, at Go4Explore, are offering incredible Leh Ladakh Tour Packages to explore one of the most stunning regions nestled in the Indian Himalayas.</p>
                <p>With 7 years of experience, our travel experts utilize all the expertise in crafting best-suitable Leh Ladakh tour packages from Delhi, Bangalore, Hyderabad, Chennai, Mumbai, Ahmedabad, Vadodara, Kolkata or any city in India to fuel your wanderlust spirit.</p>
                <p>Whether you’re looking for a bike trip to Ladakh or you just wish to embark on a Ladakh expedition in a backpacker’s way, travel with like-minded people. Go4Explore provides Leh Ladakh holiday packages for every kind of explorer soul, as per your preferences.</p>
                <p>Book your <a href="https://go4explore.com/trip/leh-ladakh-tour-packages" target="_blank" style={{color: 'blue'}}>Leh Ladakh tour packages</a> with Go4Explore for a mind-blowing travel experience. accomplish your dream bucketlist road trip and take back home some unforgettable memories!</p>

                <h2>Leh Ladakh Tour Packages – Explore the Land of High Passes</h2>
                <p>Just close your eyes &amp; feel the chilly air caressing your hair. When you open up your eyes a new world awaits you, full of pristine blue-hued rivers, rugged mountain terrains and a sky so heavenly you will not wish to take your gaze away from. This world is “ The Land of High Passes” - Ladakh.</p>
                <p>If you want to witness attractive views &amp; experience mind-bending adventures at one place, then pack your bags, and book a Ladakh Tour Trip at <a href="https://go4explore.com/" target="_blank" style={{color: 'blue'}}>Go4Explore</a>. Leh Ladakh is a beautiful blend of adventure as well as leisure. Ladakh means the “Land of High Passes” and it is situated at altitudes of around 2,800 meters to 4,500 meters above sea level. It has the highest motorable pass of the world which is at 19,000 ft from the sea level.</p>
                <p>Leh is the capital of Ladakh, it is located at the height of 11,000 ft above sea level. It is from here that we will kick-start our Leh Ladakh Tour. The tour contains various places we can explore like Magnetic Hill, Leh Palace, Shanti Stupa etc.</p>
                <p><b>Explore our popular Leh Ladakh Tour Packages:</b> <a href="https://go4explore.com/trip/leh-ladakh-bike-trip-package" style={{color: 'blue'}}>Leh Ladakh Bike Trip Packages</a>, <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk" style={{color: 'blue'}}>Leh Ladakh With Turtuk</a>, <a href="https://go4explore.com/trips/leh-ladakh-backpacking-bike-trip" style={{color: 'blue'}}>Leh Ladakh Backpacking Bike Trip</a>, <a href="https://go4explore.com/trips/manali-leh-srinagar-backpacking-bike-trip" style={{color: 'blue'}}>Manali Leh Srinagar Backpacking Bike Trip</a>, and <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip" style={{color: 'blue'}}>Manali to Leh Backpacking Bike Trip</a></p>

                <h2>Best Places to Visit in Leh Ladakh Trip</h2>
                <p><strong>Shanti Stupa:</strong> A structure in Ladakh which was built by a Japanese Buddhist Bikshu in 1991. It is a white domed stupa illustrating the beauty of Buddhist culture. It contains the relics of Buddha in its base, which was preserved by the 14th Dalai Lama.</p>
                <ul><li><b>Location:</b> Shanti Stupa Road, Leh</li><li><b>Timings:</b> 5AM to 9PM</li><li><b>Best time to visit:</b> July to September</li></ul>
                <p><strong>Magnetic Hill:</strong> Located 30 km away from Leh. Magnetic hills have a unique mystery that defies gravity. The area of the magnetic hill &amp; the slopes create an optical illusion of a ‘hill’. The phenomenon continues to intrigue travelers from all across the world.</p>
                <ul><li><b>Location:</b> Srinagar-Leh Road, Ladakh</li><li><b>Timings:</b> 24x7</li><li><b>Best time to visit:</b> June to October</li></ul>
                <p><strong>Leh Palace:</strong> It is a fort in Ladakh which is also known as ‘Lachen Palkar Palace’. From the palace we can have a panoramic view of the city of Leh. It was built by King Singay Namgyal in 1600, but was relinquished when the Dogra forces took control of Ladakh. On special occasions, like the Galdan Namchot festival, locals gather around the palace to celebrate, illuminating it with more charm. This is an essential in your Leh Ladakh trip, as it offers you an astounding opportunity to witness Tibetan Culture.</p>
                <ul><li><b>Location:</b> Namgyal Hill, Leh</li><li><b>Timings:</b> 8AM to 5PM</li><li><b>Best time to visit:</b> June to September</li></ul>
                <p><strong>Pathar Sahib Gurudwara:</strong> It is a sikh pilgrimage place located in Ladakh. This destination is located at high altitude offering scenic views. This gurudwara was created to commemorate Guru Nanak Ji’s visit to Ladakh. According to a legend, Guruji encountered a cruel demon. The demon, in an attempt to kill him, threw a patthar. The stone, however, turned into wax. After defeating the demon, guruji summoned him to serve humanity and live peacefully.</p>
                <ul><li><b>Location:</b> Leh-Kargil Highway, Ladakh</li><li><b>Timings:</b> 4:15 AM to 8:30 PM</li><li><b>Best time to visit:</b> May to September</li></ul>
                <p><strong>Pangong Tso:</strong> This destination is on the bucket list of every traveler. The magnificent views here are unmatched. It is a gem for your overall Leh Ladakh trip. Consider your trip to be a waste if you skip this popular destination. <a href="https://go4explore.com/trips/leh-ladakh-with-tso-moriri-turtuk" target="_blank" style={{color: 'blue'}}>Pangong Tso</a> is the highest brackish water lake in the world. This lake changes color at varied points, turning into different shades of blue, green and red.</p>
                <ul><li><b>Location:</b> Leh district, Ladakh</li><li><b>Timings:</b> 24x7</li><li><b>Best time to visit:</b> May to September</li></ul>
                <p><strong>Turtuk:</strong> The northernmost village of India, this destination is also one of the gateways to Siachen glacier. It is in close proximity to the Line of Control between India and Pakistan. This village is inhabited by the Balti people, and is renowned for apricots. Now starting to garner attention from travelers, include this hidden gem of a location in your Ladakh travel packages to enjoy the picturesque views from the Shyok Valley.</p>
                <ul><li><b>Location:</b> Nubra, Leh district, Ladakh</li><li><b>Timings:</b> 24x7</li><li><b>Best time to visit:</b> April to September</li></ul>
                <p><strong>Tso Moriri:</strong> It lies in the Changthang plateau of Ladakh. This lake is at the altitude of 4,522 Meters, making it the highest Ramsar site in the world. It is less crowded, providing you with tranquility and picturesque sights.</p>
                <ul><li><b>Location:</b> Changthang Region, Ladakh</li><li><b>Timings:</b> 24x7</li><li><b>Best time to visit:</b> June, July and August</li></ul>
                <p><strong>Mandatory Requirement:</strong> An Inner Line Permit is required to visit this place.</p>
                <p><strong>Diskit Monastery:</strong> Also known as a Diskit Gompa, it is the oldest and largest Buddhist monastery in Diskit, Nubra Valley of Ladakh. Founded in the 14th century, this monastery is situated at a stunning location. A huge statue of Buddha is erected at 33 meters in height. In February, every year the festival of dosmoche is celebrated here. It is also known as the festival of scapegoat, relishing in the celebration of the triumph of good over evil.</p>
                <ul><li><b>Location:</b> Diskit, Leh district, Ladakh</li><li><b>Timings:</b> 7AM to 1PM and 2PM to 7PM (All Days)</li><li><b>Best time to visit:</b> May to October</li><li><b>Entry Fee:</b> INR 30</li></ul>
                <p><strong>Hall of Fame Museum:</strong> It was made by the Indian army to pay tribute to the fallen soldiers in the Indo-Pak Wars. It is just 4 Km away from the city of Leh. A must-visit for history lovers in your Ladakh vacation packages to feel pride in the sacrifices of our soldiers.</p>
                <ul><li><b>Location:</b> Leh-Kargil Road, Leh</li><li><b>Timings:</b> 9AM to 1PM and 2PM to 7PM; Tuesday to Sunday (Monday Closed)</li><li><b>Best time to visit:</b> July to September</li><li><b>Entry Fee:</b> Rs. 25 per person</li></ul>
                <p><strong>Hunder:</strong> This off-beat village in the Nubra tehsil of Leh, is the highest desert in the world.  Hunder is famous for its stunning Sand Dunes &amp; Bactrian Camels. There are several ruined buildings &amp; many other things including a visit to Panamik hot spring, the last village of Nubra valley, Yarab tso lake and <a href="https://en.wikipedia.org/wiki/Diskit_Monastery" style={{color:'blue'}} rel="noopener noreferrer" target="_blank">Diskit Monastery</a>.</p>
                <ul><li><b>Location:</b> Nubra, Leh district, Ladakh</li><li><b>Timings:</b> 24x7</li><li><b>Best time to visit:</b> July to September</li></ul>

                <h2>Adventure Activities to do in Leh Ladakh Trip</h2>
                <p><strong>Trekking:</strong> Ladakh is a mountainous region,it is the highest altitude plateau region in India. There are many trekking options in Ladakh, offering panoramic views of snow-clad mountains and stunning sunsets. Make the best of your Leh Ladakh tour packages by embarking on the pleasant Himalayan journey.</p>
                <ul><li><b>Best time to do treks in Ladakh:</b> Summer months from May to September</li><li><b>Trek Difficulty:</b> Level 1 to Level 5</li></ul>
                <p><strong>Quad Biking:</strong> When someone is in the Adventure valley AKA Nubra Valley. So how can we miss quad biking? It is an adrenaline fueled activity for the adventure lover.</p>
                <ul><li><b>Duration:</b> 45 Minutes to 1 Hour</li><li><b>Best months to do it:</b> June to September</li><li><b>Cost:</b> Approx Rs 1,000 to Rs 1,200 per person</li></ul>
                <p><strong>SUV Expedition:</strong> SUV Expedition in Ladakh offers a singular fusion of heart-pounding excitement and breathtaking beauty, set in the magnificence of the Himalayas.</p>
                <ul><li><b>Duration:</b> Overall Trip</li><li><b>Best months to do it:</b> June to September</li></ul>
                <p><strong>Bike Expedition:</strong> Bike Expedition allows you to freely traverse through this Himalayan gem. This <a href="https://go4explore.com/trips/leh-ladakh-backpacking-bike-trip" target="_blank" style={{color: 'blue'}}>Bike Expedition in Ladakh</a> is more than just a trip; it’s an encounter that will live with you forever. For first timers, book Go4Explore’s Leh Trip packages for an effortless journey into the Himalayas.</p>
                <ul><li><b>Duration:</b> Overall Trip</li><li><b>Best months to do it:</b> June to September</li></ul>
                <p><strong>Double Hump Camel Safari:</strong> The specialty of Hunder Village in Nubra Valley lies in its ancient ruins, marvellous sand dunes and Bactrian Camels.</p>
                <ul><li><b>Speciality:</b> The double hump camel ride in Ladakh gives you a serene experience and the opportunity to cherish the breathtaking views of the landscape.</li> <li><b>Best months to do it:</b> The best time to do a double hump camel ride in Ladakh is during the summer months of June to September.</li><li><b>Cost:</b> Approx INR 750 to INR 1400 per person</li><li><b>Location:</b> Hunder, Nubra Valley</li></ul>
                <p><strong>River Rafting:</strong> How is it possible that in a land brimming with adventures, river rafting is not there? Our Leh Ladakh tour packages provide various options of rivers on which you can attempt rafting like Zanskar stream, Padum and Nimu.</p>
                <ul><li><b>Speciality:</b> The cold breeze, the gushing waters, and the majestic mountains surrounding the water bodies, the river rafting escapade in Ladakh is a once in a lifetime experience that just cannot be missed.</li><li><b>Best time to do it:</b> The best time to do river rafting in your Leh Ladakh trip is during the months of June to August.</li><li><b>Cost:</b> Approx Rs. 2,000 to Rs. 3,500 per person</li><li><b>Location:</b> Zanskar, Padum and Nimu</li></ul>
                <p><strong>Discover our Leh Ladakh Tour Packages along with similar exciting options:</strong> <a href="https://go4explore.com/trips/manali-leh-srinagar-with-umlingla-hanle" target="_blank" style={{color: 'blue'}}>Manali Leh Srinagar With Umlingla &amp; Hanle</a>, <a href="https://go4explore.com/trips/srinagar-leh-manali-with-umlingla-hanle" target="_blank" style={{color: 'blue'}}>Srinagar Leh Manali With Umlingla &amp; Hanle</a>, <a href="https://go4explore.com/trips/leh-ladakh-with-umlingla-hanle" target="_blank" style={{color: 'blue'}}>Leh Ladakh With Umlingla &amp; Hanle</a>, <a href="https://go4explore.com/trips/all-girls-ladakh-trip-with-turtuk" target="_blank" style={{color: 'blue'}}>All Girls Ladakh Trip with Turtuk</a>, <a href="https://go4explore.com/trips/all-girls-manali-leh-trip" target="_blank" style={{color: 'blue'}}>All Girls Manali Leh Trip</a>, <a href="https://go4explore.com/trips/winter-leh-ladakh" target="_blank" style={{color: 'blue'}}>Winter Leh Ladakh</a></p>
                
                <h2>Best Places to Eat in a Leh Ladakh Trip</h2>
                <p><strong>The Tibetan Kitchen:</strong> The Tibetan Kitchen is a comfortable and charming eatery located  in the bustling town of Leh. Famous for their delicious Tibetan cuisine, this place is the oldest and best place to eat in Leh. For the best experience, try to book your table in advance.</p>
                <ul><li><b>Must Try:</b> Mariani, Naan, Gyakok Lunch, Noodles, Rice, Mutton and Cheesy Chicken Momo.</li><li><b>Cuisine:</b> Indian, Tibetan, Chinese, Thai</li><li><b>Location:</b> Fort Road, Near Hotel Ladakh Villa, Leh</li><li><b>Timings:</b> 11AM to 11PM</li></ul>
                <p><strong>Gesmo Restaurant:</strong>  Visiting the Gesmo Restaurant would undoubtedly be your best bet. Being one of the popular eatery joints, it is known for offering a wide array of cuisine including mouth-watering cookies and cakes along with paranthas, pizzas, momos, and Thenthuk. It is recommended to book a table in advance and then relish in the flavours of Leh.</p>
                <ul><li><b>Must Try:</b> Freshly Baked Goodies, Apricot Jam and Pies, Yummiest Burger, Yak Cheese Pizza.</li><li><b>Cuisine:</b> Italian, Indian, Asian, Tibetan, Pizza and Fast Food</li><li><b>Location:</b> Fort Road, Leh</li><li><b>Timings:</b> 8AM to 8PM</li></ul>
                <p><strong>Chopsticks Noodle Bar:</strong> When it comes to eating at good restaurants in Leh, Chopsticks Noodle Bar makes for an ideal choice. You can have your meal under the  sky or in the restaurant as you wish. The ambiance of the restaurant is lively and warm. Vegetables are freshly sourced from their farms.</p>
                <ul><li><b>Must Try:</b> Pad Thai Noodles, Spring Rolls, Crispy Chilli Potato, and Wonton Soup.</li><li><b>Cuisine:</b> Asian, Indonesian, Tibetan, Chinese, Indian, and Fusion</li><li><b>Location:</b> Raku Complex, Fort Road, Leh</li><li><b>Timings:</b> 12 Noon to 11PM</li></ul>
                <p><strong>Lamayuru Restaurant:</strong> The Lamayuru is also a good vegetarian restaurant. Located near the main market, this restaurant is another place to ravish Tibetan cuisine.</p>
                <ul><li><b>Must Try:</b> Fresh Fruit Juices, Thupkas, Israeli Lafa, Pastas, and Momos.</li><li><b>Cuisine:</b> Asian, Tibetan, International and Indian</li><li><b>Location:</b> Fort Road, Opposite Hotel Yak Tail, Leh</li><li><b>Timings:</b> 7AM to 10:30PM</li></ul>
                <p><strong>Lehvenda Cafe:</strong> Decorated with a great ambience to relax, good music, and mouth-watering food, Lehvenda Cafe in Leh town has everything that you look for. From oh-so-amazing varieties of aromatic coffees to delicious pizza and waffles, this is a place where you can sit for hours talking to your friends while enjoying the delightful food.</p>
                <ul><li><b>Must Try:</b> Mochas, Coffee, Momos, Pizzas.</li><li><b>Cuisine:</b> Cafe, Vegetarian Friendly, Vegan Options</li><li><b>Location:</b> Near Jama Masjid Mosque, Leh</li><li><b>Timings:</b> 10AM to 8PM</li></ul>
                
                <h2>Best Places to Shop in Leh Ladakh Tour</h2>
                <p><strong>Moti Market:</strong> It is the oldest market in Ladakh. In Moti Market we can buy high quality Tibetan Handicrafts. It is famous for the Tibetan artifacts, garments &amp; various types of food special to Ladakh region.</p>
                <ul><li><b>Location:</b> Leh Town</li><li><b>Timings:</b> 9:30AM to 8PM</li></ul>
                <p><strong>Zanskar Valley Market:</strong> It is the hub of authentic Ladakhi culture. <a href="https://go4explore.com/trips/manali-zanskar-leh-bike-trip" target="_blank" style={{color: 'blue'}}>Zanskar valley</a> market is a market from where you can buy everything related to the culture of Leh Ladakh.</p>
                <ul><li><b>Location:</b> Padum, Ladakh</li><li><b>Timings:</b> 9AM to 5PM</li></ul>
                <p><strong>Main Bazaar:</strong> It lies in the region of Leh, Ladakh. This market is not only popular among tourists, but also frequented by locals. All types of traditional dresses of Ladakh, and day to day items can be bought from Main Bazaar.</p>
                <ul><li><b>Location:</b> Leh Town</li><li><b>Timings:</b> 9AM to 8PM</li></ul>
                <p><strong>Tibetan Handicraft Emporium:</strong> This place is run by Tibetan refugees. It is famous for carpets, jewelry, clothing, old paintings, rare books and artifacts. It is located in the Main Bazar.</p>
                <ul><li><b>Location:</b> Main Bazaar Road, Leh</li><li><b>Timings:</b> 9AM to 6PM</li></ul>
                
                <h2>How to reach Leh Ladakh?</h2>
                <ul>
                    <li><strong>By Air:</strong> The most convenient and quickest way to reach Ladakh. The airport is well-connected to other cities like Delhi, Mumbai, Jammu, Srinagar etc. The prices of tickets can increase exponentially during peak season.</li>
                    <li><strong>By Road:</strong> The popular choice among travellers is to travel by roads, as it helps to acclimatize better and gives you stunning views. There 3 routes you can take to reach Leh Ladakh-</li>
                    <li><a href="https://go4explore.com/trips/srinagar-leh-manali" target="_blank" style={{color: 'blue'}}>Srinagar to Leh</a> Highway-  It is 434 km which goes via Srinagar, Drass, Kargil, and then Leh.</li>
                </ul>
                <p>The Srinagar-Leh pass remains open from May to November/December.</p>
                <ul><li><a href="https://go4explore.com/trips/manali-leh-srinagar" target="_blank" style={{color: 'blue'}}>Manali to Leh</a> Highway-  There are two passes on this route. One is via</li></ul>
                <p>Manali→ Rohtang Keylong→  Baralacha-la→   Lachung-La→ Taglang-la→ Leh</p>
                <p>Manali→  Keylong→  Darcha→  Zanskar→  Nimoo→  Leh</p>
                <p>The Manali to Leh Pass remains open from may/june to september/ october every year.</p>
                <ul><li><strong>By Train:</strong> The nearest station to Ladakh is Jammu Tawi which is well-connected to the major cities in India like Delhi, Mumbai and Kolkata or catch a train from your nearest railway station to Delhi and from Delhi take a bus or cab to Manali. From Manali take a cab or bus to Ladakh.</li></ul>
                
                <h2>Important Tips to remember in your Leh Ladakh Trip</h2>
                <ul>
                    <li><b>Best-Suited Bike (according to the requirements):</b> We must choose the best bike for Leh Ladakh Trip because the roads are very steep at some point &amp; it becomes hard for every bike to cover it.</li>
                    <li><b>Riding Gears:</b> Riding gears are most important for Leh Ladakh Trip. These gears will give you a sense of security on the <a href="https://go4explore.com/trip/leh-ladakh-bike-trip-package" target="_blank" style={{color: 'blue'}}>Leh Ladakh Bike Tour Package</a>. For ex: Helmet, Jacket, Riding Gloves &amp; etc.</li>
                    <li><b>Inner Line Permit (if required):</b> At some point of Ladakh you have to take a permit to visit.</li>
                    <li><b>Accessories/Tools of Bikes:</b> When you are on Bike Tour Leh Ladakh then you must have all the accessories of the bike which is used to fix the bike if it breaks down anywhere.</li>
                    <li><b>Power Bank:</b> It is also an important part of your Leh Ladakh trip because at some places in Ladakh there is no electricity.</li>
                    <li><b>Extra Fuel:</b> Carry extra fuel on the tour because at some points there are no fuel stations in Ladakh. On a Biking Trip to Leh Ladakh, fuel is the most important part.</li>
                    <li><b>Extra Tires:</b> To change our tires in case of a mishap.</li>
                    <li><b>Cash (according to your needs):</b> The network condition of Ladakh is not good.  So you all must carry enough cash in your Leh Ladakh trip</li>
                    <li><b>Photography Gear:</b> To help you capture the cherishable moments of your Leh Ladakh bike trip.</li>
                    <li><b>Warm Clothes:</b> It is cold on the overall bike trip so you all must have warm clothes with you.</li>
                </ul>

                <h2>Best time to book Leh Packages</h2>
                <ul>
                    <li><b>Summer season:</b> July to September is the peak season for Leh Ladakh travelers, as the temperature remains normal during the day and drops down to around 10 degrees at night. River Rafting is a very popular activity during summers and Leh Ladakh also sees a vibrant energy during this season because of various Monastery festivals.</li>
                    <li><b>Autumn season:</b> If you want a comparatively peaceful experience with a lesser crowd, then October to December is the best time for you to visit. With pleasant weather in autumn season it only enhances your experience of <a href="https://go4explore.com/trip/leh-ladakh-tour-packages" target="_blank" style={{color: 'blue'}}>Leh Ladakh tour</a>.</li>
                    <li><b>Winter season:</b> Though the average temperature of Leh in daytime is -3°C day and -15°C during the night, months from January to March can be a ideal time to visit Leh Ladakh if you want to watch serene Himalayan landscapes covered with snow and experience the adventurous walk on frozen lake.</li>
                </ul>

                <h2>FAQ’S</h2>
                <p><b>1. What is the best time to visit Leh &amp; Ladakh?</b></p>
                <p>The ideal time to go on a Leh Ladakh tour is during summer months, from April to mid-September.</p>
                <p><b>2. How long does it take to get acclimatized at high altitudes?</b></p>
                <p>It can take 1-3 days to get acclimatized in Ladakh, as it is situated at an elevation of 11,480 ft.</p>
                <p><b>3. What documents should be carried on a Leh &amp; ladakh tour?</b></p>
                <p>It is recommended to carry essentials Identification documents with you, like-</p>
                <ul>
                    <li>Driving License,or any other government issued ID like passport, Aadhar Card or Passport.</li>
                    <li>Inner Line Permits (ILP) for Indian Citizens, and Protected Areas Permits (PAP) for foreign nationals.</li>
                    <li>A few passport size photographs.</li>
                    <li>Flight ticket Copy and Hotel Reservations.</li>
                </ul>
                <p><b>4. How long does it take to explore Leh &amp; Ladakh?</b></p>
                <p>For those who are exploring Leh &amp; Ladakh on a bike, it can take 5 to 10 days to cover major attraction points.</p>
                <p><b>5. What clothes should we bring on a Leh Ladakh tour?</b></p>
                <p>Bring warm woolen clothes as it gets chilly in the evening and night. During daytime, you can wear comfortable light clothes.</p>
                <p><b>6. Are there any ATMs  there?</b></p>
                <p>Yes, there are 4 ATMs in Leh of State Bank of India, Punjab National Bank, Jammu &amp; Kashmir Bank and Axis Bank. It is recommended to carry adequate cash with you and not rely on ATMs.</p>
                <p><b>Explore Our Most Popular Himalayan Treks:</b> <a href="https://go4explore.com/trips/hampta-pass-trek" target="_blank" style={{color: 'blue'}}>Hampta Pass Trek</a>, <a href="https://go4explore.com/trips/bhrigu-lake-trek" target="_blank" style={{color: 'blue'}}>Bhrigu Lake Trek</a>, <a href="https://go4explore.com/trips/sar-pass-trek" target="_blank" style={{color: 'blue'}}>Sar Pass Trek</a>, <a href="https://go4explore.com/trips/kashmir-great-lakes-trek" target="_blank" style={{color: 'blue'}}>Kashmir Great Lakes Trek</a>, <a href="https://go4explore.com/trips/valley-of-flowers-trek" target="_blank" style={{color: 'blue'}}>Valley of Flowers Trek</a>, <a href="https://go4explore.com/trips/kedarkantha-trek" target="_blank" style={{color: 'blue'}}>Kedarkantha Trek</a>, <a href="https://go4explore.com/trips/brahmatal-trek" target="_blank" style={{color: 'blue'}}>Brahmatal Trek</a>, <a href="https://go4explore.com/trips/har-ki-doon-trek" target="_blank" style={{color: 'blue'}}>Har Ki Doon Trek</a></p>
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
              <h2 className="text-4xl font-bold mb-6">Leh Ladakh Trips from Delhi</h2>
              <TripSlider trips={delhiTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Leh to Leh Trips</h2>
              <TripSlider trips={lehToLehTrips} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Leh Ladakh Trips with Srinagar</h2>
              <TripSlider trips={srinagarTrips} slidesToShow={4} />
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

export default LehLadakh;