import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (KASHMIR) ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/22506020241120124643.png', duration: '6 Days 5 Nights', title: 'Kashmir Backpacking', price: '₹23000' },
    { imageUrl: '/cloned_media/39805720230316074814.png', duration: '6 Days 5 Nights', title: 'Kashmir Backpacking Winter Edition', price: '₹19999' },
    { imageUrl: '/cloned_media/28690420220120075604.png', duration: '6 Days 5 Nights', title: 'Kashmir 6 Days 5 Nights', price: '₹19999' },
    { imageUrl: '/cloned_media/28940120240911061449.png', duration: '5 Days 4 Nights', title: 'Kashmir Family Special', price: '₹19000' },
    { imageUrl: '/cloned_media/16958320240720114616.png', duration: '5 Days 4 Nights', title: 'Jannat-e-Kashmir 4N5D', price: '₹17000' }
];

const honeymoonTrips = [
    { imageUrl: '/cloned_media/40680720240911061608.png', duration: '8 Days 7 Nights', title: 'Kashmir Honeymoon Special', price: '₹32700' },
    { imageUrl: '/cloned_media/34186420240720083327.png', duration: '5 Days 4 Nights', title: 'Romantic Kashmir 4N5D', price: '₹17000' },
    { imageUrl: '/cloned_media/19158420240918064946.png', duration: '6 Days 5 Nights', title: 'Kashmir Honeymoon Romantic Retreat', price: '₹21000' },
    { imageUrl: '/cloned_media/4202420210311124328.png', duration: '7 Days 6 Nights', title: 'Kashmir Honeymoon Package 7 Days 6 Nights', price: '₹38500' },
    { imageUrl: '/cloned_media/21146020240917132333.png', duration: '6 Days 5 Nights', title: 'Kashmir Family Getaway', price: '₹22300' },
    { imageUrl: '/cloned_media/28940120240911061449.png', duration: '5 Days 4 Nights', title: 'Kashmir Family Special', price: '₹19000' },
    { imageUrl: '/cloned_media/4101220240307113619.png', duration: '6 Days 5 Nights', title: 'Magic Of Srinagar Family Tour Package', price: 'Customization Available' }
];

const familyTours = [
    { imageUrl: '/cloned_media/15639520230720175534.png', duration: '6 Days 5 Nights', title: 'Kashmir Backpacking Summer Edition', price: '₹25999' },
    { imageUrl: '/cloned_media/20612420220720035621.png', duration: '7 Days 6 Nights', title: 'Kashmir & Gurez Backpacking', price: '₹29999' },
    { imageUrl: '/cloned_media/15843420240719124212.png', duration: '4 Days 3 Nights', title: 'Best of Kashmir 3N4D', price: '₹13500' },
    { imageUrl: '/cloned_media/22506020241120124643.png', duration: '6 Days 5 Nights', title: 'Kashmir Backpacking', price: '₹23000' },
    { imageUrl: '/cloned_media/1995920240917081639.png', duration: '10 Days 9 Nights', title: 'Blissful Kashmir Holiday', price: '₹40500' },
    { imageUrl: '/cloned_media/39805720230316074814.png', duration: '6 Days 5 Nights', title: 'Kashmir Backpacking Winter Edition', price: '₹19999' },
    { imageUrl: '/cloned_media/38438020240917113910.png', duration: '5 Days 4 Nights', title: 'Picturesque Kashmir Vacation', price: '₹18800' },
    { imageUrl: '/cloned_media/21146020240917132333.png', duration: '6 Days 5 Nights', title: 'Kashmir Family Getaway', price: '₹22300' },
    { imageUrl: '/cloned_media/23171220240918075456.png', duration: '6 Days 5 Nights', title: 'Unforgettable Kashmir Paradise Tour', price: '₹24500' },
    { imageUrl: '/cloned_media/37202720240918104911.png', duration: '7 Days 6 Nights', title: 'Captivating Kashmir Tour', price: '₹27000' },
    { imageUrl: '/cloned_media/35972520240918133537.png', duration: '7 Days 6 Nights', title: 'Majestic Kashmir Holiday', price: '₹25500' },
    { imageUrl: '/cloned_media/36667020240919121751.png', duration: '7 Days 6 Nights', title: 'Charismatic Kashmir Tour', price: '₹28000' },
    { imageUrl: '/cloned_media/3588420240920071738.png', duration: '8 Days 7 Nights', title: 'Delightful Kashmir Getaway', price: '₹29000' },
    { imageUrl: '/cloned_media/4101220240307113619.png', duration: '6 Days 5 Nights', title: 'Magic Of Srinagar Family Tour Package', price: 'Customization Available' }
];

const jammuKashmirTours = [
    { imageUrl: '/cloned_media/26533720240917110529.png', duration: '8 Days 7 Nights', title: 'Kashmir with Vaishno Devi Temple Tour', price: '₹30000' },
    { imageUrl: '/cloned_media/26604720240720075657.png', duration: '4 Days 3 Nights', title: 'Vaishno Devi & Shiv Khori Spiritual Tour 3N4D', price: '₹16000' },
    { imageUrl: '/cloned_media/16958320240720114616.png', duration: '5 Days 4 Nights', title: 'Jannat-e-Kashmir 4N5D', price: '₹17000' },
    { imageUrl: '/cloned_media/1995920240917081639.png', duration: '10 Days 9 Nights', title: 'Blissful Kashmir Holiday', price: '₹40500' },
    { imageUrl: '/cloned_media/2458920240920103415.png', duration: '9 Days 8 Nights', title: 'Kashmir Holiday with Vaishnodevi Darshan', price: '₹36000' },
    { imageUrl: '/cloned_media/32312720240920122225.png', duration: '10 Days 9 Nights', title: 'Vaishnodevi with Delightful Kashmir Tour', price: '₹41500' },
    { imageUrl: '/cloned_media/729320240920083235.png', duration: '9 Days 8 Nights', title: 'Kashmir with Vaishno Devi and Shiv Khori Tour', price: '₹35500' },
    { imageUrl: '/cloned_media/21146020240917132333.png', duration: '6 Days 5 Nights', title: 'Kashmir Family Getaway', price: '₹22300' },
    { imageUrl: '/cloned_media/23171220240918075456.png', duration: '6 Days 5 Nights', title: 'Unforgettable Kashmir Paradise Tour', price: '₹24500' },
    { imageUrl: '/cloned_media/37202720240918104911.png', duration: '7 Days 6 Nights', title: 'Captivating Kashmir Tour', price: '₹27000' },
    { imageUrl: '/cloned_media/19266120240919103004.png', duration: '7 Days 6 Nights', title: 'Magical Escape To Kashmir', price: '₹27500' }
];

const bestTreks = [
    { imageUrl: '/cloned_media/37367320220517062227.png', duration: '8 Days 7 Nights', title: 'Kashmir Great Lakes Trek', price: '₹15000', originalPrice: '₹16000', discount: '₹1,000' },
    { imageUrl: '/cloned_media/21008820230706083615.png', duration: '7 Days 6 Nights', title: 'Tarsar Marsar Trek', price: '₹13750', originalPrice: '₹14250', discount: '₹500' },
    { imageUrl: '/cloned_media/27524020220120050859.png', duration: '5 Days 4 Nights', title: 'Alpather Lake Trek', price: '₹12999' },
    { imageUrl: '/cloned_media/40475620220120050538.png', duration: '4 Days 3 Nights', title: 'Kausar Nag Lake Trek', price: '₹9999' },
    { imageUrl: '/cloned_media/9886420220120050240.png', duration: '3 Days 2 Nights', title: 'Sheshnag Lake Trek', price: '₹7999' }
];

const reasons = [
  { icon: <Bed className="w-10 h-10 text-blue-700" />, title: 'Handpicked Stays with Friendly Hosts', description: 'All our accommodations are verified, pre-checked for quality and hygiene.'},
  { icon: <Airplay className="w-10 h-10 text-blue-700" />, title: '2500+ Trips Hosted PAN India & Abroad', description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.'},
  { icon: <Mountain className="w-10 h-10 text-blue-700" />, title: 'Solo Travel Friendly Trips for All', description: 'We provide absolutely safe and comfortable environment for solo travellers.'},
  { icon: <Award className="w-10 h-10 text-blue-700" />, title: 'Trip Itineraries Curated with Love', description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.'},
  { icon: <Users className="w-10 h-10 text-blue-700" />, title: '8 Years of On-Ground Experience', description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.'},
  { icon: <ThumbsUp className="w-10 h-10 text-blue-700" />, title: 'Rated 4.8 Stars on Google Reviews', description: 'Our growth lies in the memorable travel experiences we provide to our travellers.'},
  { icon: <CreditCard className="w-10 h-10 text-blue-700" />, title: 'Hassle-Free Booking Process', description: 'Seamless booking process on all our trips with the help of our travel experts.'},
  { icon: <UserCheck className="w-1H-10 text-blue-700" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.'},
  { icon: <Zap className="w-10 h-10 text-blue-700" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!'},
];

const Kashmir = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            <img src="/cloned_media/34336120240912063512.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kashmir"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Kashmir Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Kashmir Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Go4Explore provides special Kashmir tour packages and Kashmir honeymoon packages, offering best in-class accommodations, complete local sightseeing tours, delightful meals during the stay, thrilling adventure activities and a memorable travel experience. Decorated with the beauty of snow-clad Himalayas, Jannat-e-Kashmir is more than just a hill station and a perfect amalgamation of beauty, serenity and tranquility.</p>
                <p>Explore our popular Kashmir Holiday packages: <a href="/trips/kashmir-gurez-backpacking">Kashmir & Gurez Backpacking Tour</a>, <a href="/trips/kashmir-honeymoon-package-7-days-6-nights">7 days Kashmir Honeymoon Package</a>, <a href="/trips/kashmir-great-lakes-trek">Kashmir Great Lakes Trek</a>.</p>
                
                <h2>About Kashmir Tour Package</h2>
                <p>Hi explorers, do you want to grasp a glimpse of ‘Heaven on the Earth', so let’s take you to Jannat-e-Kashmir with Go4Explore. Our travel experts leave no stone unturned in curating memorable Kashmir tour packages from Delhi, Bangalore, Hyderabad, Chennai, Mumbai, Ahmedabad, Vadodara, Kolkata or any city in India to quench your wanderlust soul. Trip in Kashmir, there are various places which are known for their ultimate beauty & different activities.</p>
                <p>Some places of Kashmir which are well known are Pahalgam, Srinagar, Gulmarg, Sonmarg & etc. Srinagar is the capital of Jammu & Kashmir. It is very beautiful with many viewpoints in it, some of them are Hazratbal, Dal Lake, World famous Mughal Garden & many more. This Kashmir Tour Package tailored by Go4Explore will help you to reach your expectation for Kashmir.</p>
                
                <h3>Jannat-e-Kashmir: Paradise on Earth</h3>
                <p>Kashmir is also called “Jannat”. Do you know why? Let us tell you, Kashmir has the best landscapes ever known in this world. It has the green valleys, snow covered mountains, natural lakes, waterfalls, enchanting meadows, welcoming locals & mouth-watering flavours etc. It is not just about the scenic beauty, the cuisine is also the best cuisine. So that’s the reason we can say that Kashmir is “Paradise on Earth”.</p>
                
                <h3>Best places to visit in Kashmir</h3>
                <p><b>Srinagar:</b> It is the capital of Jammu & Kashmir, with the beauty of Srinagar it becomes the must visit destination in Kashmir. It has many attractions which are so fabulous. It is the biggest city of Kashmir.</p>
                <p><b>Gulmarg:</b> The “Meadow of Flowers” is another name of Gulmarg. It is the most romantic destination of Kashmir where you are going to have spectacular views which will make you feel romantic. Gulmarg is at the elevation of 2377 meters above sea level. It is also a major destination for skiing and many adventure sports. Gulmarg is a must visit place in your Kashmir Holiday Packages.</p>
                <p><b>Sonmarg:</b> In english we say “Meadow of Gold” which lies 80 km away in the North-East of Srinagar. This place is mainly known for its snow- clad fields, majestic glaciers & beautiful river. It is at 2800 meters above sea level. Betaab Valley: Formerly known as Hagan valley but in 1983 a hit movie “Betaab” gave it a name that is Betaab Valley. The Betaab valley had the most glorious views due to which it became more popular among the tourists.</p>
                <p><b>Pahalgam:</b> It lies in the Anantnag district of Kashmir and has an elevation of 2740 meters. It is located about 90 km away from Srinagar. In Pahalgam we had a breathtaking view of snow-clad mountain, banks of rivers. It is also a hub for the adventure enthusiast. It is the best place for adventurous travel in Kashmir.</p>
                <p><b>Mughal Garden:</b> The celebrated Mughal gardens of Kashmir owe their grandeur primarily to Emperor Jahangir who had an undaunted love for Kashmir, and his son Shah Jahan.</p>
                <p><b>Dal Lake:</b> It is a lake present in Kashmir. This lake has a spectacular view with the floating market in it. While having a shikara boat ride you have a visit to that floating market & also purchase from there.</p>
                <p><b>Indira Gandhi Tulip Garden:</b> The Indira Gandhi Garden holds a large variety of tulips in it. Which is very well organized in the garden. These tulips are displayed at the time of Tulip festival of Kashmir.</p>
                <p><b>Aru Valley:</b> Aru is a village which is also Tourist spot. It is 12 km away from Pahelgam. It is mainly famous for the scenic meadows of Kashmir.</p>
                <p><b>Zojila Pass:</b> It is the pass which connects Kashmir to Ladakh. This pass is the best way to go to Ladakh from Srinagar. While driving on this you will cross Kargil & the scenic views of Kashmir which will hold your eyes at one point.</p>
                <p><b>Doodhpathri:</b> It means the Valley of Milk. It is said that once a personality of islam was searching for water in that valley after offering namaz he asked Allah for water so he scratched the land with a stick so the milk came out from that point. Doodhpathri also has scenic views which offer your eyes a great relief and enjoy a picnic in your family trip to Kashmir.</p>

                <h3>Best things to do in Kashmir Tour</h3>
                <p><b>1. Shikara Ride on Dal Lake:</b> This ride is so mesmerizing due to the serenity & beauty of the Dal lake. This ride will help you to get deep in love with Kashmir because of the beauty which you ill get to watch on the ride & the people will also come to you & show you all different products which they will sell. It is a must do activity in Kashmir Trip Package.</p>
                <p><b>Cost for Shikara Ride:</b> Rs. 150 to 500 pp (approx.)</p>
                <p><b>Open Hours:</b> 6:00 am to 5:00 pm (throughout the week)</p>
                <p><b>Ride duration:</b> 1 hour to 2 hour</p>
                <p><b>2. Stay in a Houseboat:</b> If you are visiting Kashmir & don’t take a stay in a houseboat then your journey is not complete. These houseboats are beautifully made of wood. These houseboats are a part of the kashmiri culture due to which if you don't stay in this then your trip is not complete.</p>
                <p><b>Lakes for stay:</b> Dal Lake & Nagin Lake in Srinagar</p>
                <p><b>Best time to stay:</b> Overall Year</p>
                <p><b>Cost for a houseboat stay:</b> Rs. 2000 to 15,000 for a night (approx.)</p>
                <p><b>3. Gondola Ride:</b> It’s an awesome ride which takes place in Gulmarg, Kashmir. If any of you want to experience exceptional beauty from your naked eyes, then it's the chance to get that in our Kashmir package from Srinagar..</p>
                <p>The Gondola ride takes place in three phases:</p>
                <p><b>Phase 1:</b> Gulmarg to Kungdoor</p>
                <p><b>Phase 2:</b> Kongdori to Apharwat Peak</p>
                <p><b>Phase 3:</b> Kongdoori to Mary Shoulder (Chairlift)</p>
                <p><b>Cost per person:</b> Rs. 700 (phase I), Rs. 900 (phase II and Rs. 300 (chairlift)</p>
                <p><b><i>Things to Remember:</i></b> Wear good woolens and shoes, and carry gloves as it is extremely cold in winter.</p>
                <p><b>4. Explore Mughal Gardens:</b> These Mughal Gardens are made by the mughal emperor Jahangir due to his extreme love for Kashmir. All these mughal gardens have its extreme beauty in it when attracting tourists towards them.</p>
                <p><b>5. Pony Ride to Thajiwas Glacier:</b> You will have a marvelous ride on ponies with mesmerizing views of the Sonmarg on the route. The pony ride will be the best ride you will have on the tour.</p>
                <p><b>6. Explore Tulip Garden:</b> This garden is placed between the Zabarwan hills & Dal Lake. The total area which it occupies is 30 hectares. Just roam around the more than 30 lakh tulips is the best experience for life.</p>
                <p><b>7. Skiing in Gulmarg:</b> It will also become a nice experience in your life which will create a good impression on your life. Adventure sport which will make you so thrilled after doing it. From the snow-clad mountain you will ride on two flaps with the help of two roads.</p>
                
                <h3>Local dishes to try During Kashmir Trip</h3>
                <p><b>Modur Pulao:</b> As we can understand by the name “Modur pulao” it is a sweetened rice made in Kashmir. This local dish is so delicious & it will leave a good impression on the tourists.</p>
                <p><b>Matschgand:</b> Let's feel the aroma of the local cuisine of Kashmir. It is a dish for meat eaters. It is usually a dish in which meatballs are present which increase the taste of the overall dish.</p>
                <p><b>Yakhni or Yoghurt Lamb Curry:</b> Yakhni is the authentic dish of kashmir. It is made from the mawal flowers, green cardamom etc. It is the best dish of Kashmir which has not changed in centuries.</p>
                <p><b>Dum Olav:</b> Let's go with one of the vegetarian dishes of Kashmir. This dish is also known as the Dum aloo. This dish is cooked with ginger powder, yogurt, fennel & other hot spices.</p>
                <p><b>Kashmiri Muji Gaad:</b> This dish is mostly served on special occasions. This dish is just made by the fish which are named as radish or nadur. It is also a delicious dish which is made in Kashmir.</p>
                <p><b>Aab Gosht:</b> If you are a mutton lover then this dish is just for you. Aab gosht is a dish which is made by mutton by adding milk & the several spices in it.</p>
                <p><b>Goshtaba:</b> It is a delicious dish which is also a traditional delicacy of kashmir. It is made with minced mutton cooked with some spices & yogurt. Delicious!</p>
                <p><b>Wazwan:</b> It is the most famous dish of Kashmir. In this dish there are more than dishes which are made of meat. Some dishes are yakhni, Rogan Josh & etc.</p>

                <h3>Best time to visit Kashmir</h3>
                <p>Kashmir is a destination which have different speciality in different season: </p>
                <p><b>Kashmir Winters (December to February):</b> It is the peak season of kashmir when winters begin. At this time tourists can see the snowfall due to the low temperature.</p>
                <p><b>Kashmir Summer (March to May):</b> It is also quite good to go kashmir in summer because you are going to have fun in very good weather because this time the weather is neither too hot nor too cold.</p>
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
            <section><h2 className="text-4xl font-bold mb-6">Kashmir Honeymoon Trips</h2><TripSlider trips={honeymoonTrips} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Kashmir Family Tours</h2><TripSlider trips={familyTours} slidesToShow={4} /></section>
Read 138 remaining paragraphs...
            <section><h2 className="text-4xl font-bold mb-6">Jammu & Kashmir Holiday Tours</h2><TripSlider trips={jammuKashmirTours} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Best Treks in Kashmir</h2><TripSlider trips={bestTreks} slidesToShow={4} /></section>
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

export default Kashmir;