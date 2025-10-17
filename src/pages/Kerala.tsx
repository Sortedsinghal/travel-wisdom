import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (KERALA) ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/16514620250619134346.png', duration: '5 Days 4 Nights', title: 'Kerala Backpacking 4N5D', price: '₹15000', originalPrice: '₹16500', discount: '₹1,500' },
    { imageUrl: '/cloned_media/40386720240717080101.png', duration: '3 Days 2 Nights', title: 'Weekend Escape to Kerala 3D2N', price: '₹8750' },
    { imageUrl: '/cloned_media/26901420240717095829.png', duration: '4 Days 3 Nights', title: 'Vibrant Kerala Retreat 4D3N', price: '₹14700' },
    { imageUrl: '/cloned_media/15154220240717101812.png', duration: '5 Days 4 Nights', title: 'Mesmerizing Kerala Getaway 4N5D', price: '₹17200' },
    { imageUrl: '/cloned_media/2193820220831123359.png', duration: '7 Days 6 Nights', title: 'Kerala Backpacking', price: '₹27500' }
];

const familyTours = [
    { imageUrl: '/cloned_media/26901420240717095829.png', duration: '4 Days 3 Nights', title: 'Vibrant Kerala Retreat 4D3N', price: '₹14700' },
    { imageUrl: '/cloned_media/15154220240717101812.png', duration: '5 Days 4 Nights', title: 'Mesmerizing Kerala Getaway 4N5D', price: '₹17200' },
    { imageUrl: '/cloned_media/31979820240717110038.png', duration: '6 Days 5 Nights', title: 'Blissful Kerala Tour 5N6D', price: '₹25400' },
    { imageUrl: '/cloned_media/16930020240717111059.png', duration: '7 Days 6 Nights', title: 'Enchanting Expedition of Kerala 6N7D', price: '₹28600' },
    { imageUrl: '/cloned_media/2193820220831123359.png', duration: '7 Days 6 Nights', title: 'Kerala Backpacking', price: '₹27500' }
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

const Kerala = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/4566720240912074442.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kerala"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Kerala Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Kerala Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Kerala with Go4Explore</h2>
                <p>Are you curious about one of the top tourist attractions in Southern India? I think by now you have heard enough about the majestic beauty of Kerala and now it is time to visit and experience the scenery yourself. Go4Explore is here to help you out plan your trip to Kerala, the godly city and take you on an incredible journey of discovering the hidden gems of the state.</p>
                <p>Book a thoroughly crafted Kerala backpacking trip with Go4Explore and bring home unforgettable memories from one of the most beautiful states of India. Our Kerala Tour packages will guide you on your travel journey to this beautiful southern state of India that has scenic landscapes, valleys, hill stations, tea plantations, endangered flora and fauna, exotic food varieties and a lot more to offer that awaits your arrival.</p>
                
                <h2>About Kerala Tour Packages</h2>
                <p>God’s own country Kerala is not only famous for its lush greenery, tropical vegetation but also because of its golden beaches and serene backwaters. Undoubtedly Kerala is attractive because of the popular backwaters in Alleppey and plantations in Munnar but what makes it more attractive? The diversity you find in the landscapes from mountains to beaches, while everything is co-existing flawlessly, this state is a wholesome package of nature.</p>
                <p>From Mouth watering Malabar cuisine to mind-blowing cultural traditions and performances, Kerala will leave you captivated and engrossed in its alluring beauty. While this wonderland is filled with numerous tales and mythological stories, it is also home to various ancient temples that act as a supporting factor to these stories. Apart from providing visitors with charming sites and breathtaking landscapes, Kerala is also regarded as the hub of ancient healing methods like Ayurveda and meditation techniques that are actively practiced and promoted here and a <a href="https://go4explore.com/trip/kerala-family-tour-packages">family trip to kerala</a> will leave your and your family spellbound because of its beauty and the peace it provides.</p>
                <p>The locals of Kerala and people who visit Kerala majorly make up the highest among the average number of people who believe in Ayurvedic treatments and follow the same. This God’s own country truly has the ability to rejuvenate you with immense joy and happiness, which makes it a must- visit place in your bucket list.</p>
                
                <h3>Best Places to visit in Kerala Tour</h3>
                <p>Now you must be wondering about how you can invest your time in the right places and majorly significant destinations so that you utilize your time righteously. Here are some of the best places to visit in Kerala Tour Package:</p>
                <ul>
                    <li><strong>Varkala:</strong> A wonder in itself, Varkala is one of the few regions that sees cliffs just beside the waterbody of Arabian sea. It is not only known for rejoicing one with spas, ayurvedic treatments and meditation centers but also for being one of the spiritual centers because it is home to an ancient temple that can be dated back to around 2000 years ago.</li>
                    <li><strong>Munnar:</strong> Embark to the trail of green paradise and when it is so pristine up in the mountains in the morning it feels like you are sitting on clouds.</li>
                    <li><strong>Wayanad:</strong> Kerala is home to a major portion of wildlife in India but majorly elephants. Elephants are decorated and idols of the temples sit on the back of elephants and travel throughout the city as a sign of respect. In a pollution free environment, tourists get an opportunity to witness such occasions which are unique to Kerala.</li><li><strong>Kochi:</strong> Kochi is one of the biggest cities of Kerala striking a balance between modern establishments and traditional notions which can be seen in Fort Kochi region.</li>
                    <li><strong>Thekkady:</strong> <a href="https://en.wikipedia.org/wiki/Thekkady" style={{color:'blue'}} target="_blank" rel="noopener noreferrer">Thekkady</a> that is popular for trading of spices is also a hub of spice farms. You can also visit these spice farms and enrich yourself with the knowledge of spices and their cultivation.</li>
                    <li><strong>Trivandrum:</strong> This is the capital city of Kerala, Thiruvananthapuram which is a famous port city dating back to the times when trades happened through the Mediterranean sea all the way to the Middle East.</li>
                    <li><strong>Kozhikode:</strong> Kozhikode that is also known as Calicut, has been a major trading town in the past and now it is popular in the label of city of spices. Kozhikode has one of the best sights of waterfalls, temples, rivers, hills and wildlife and is the best escape route for those who are looking for a peaceful environment to spend their holidays.</li>
                    <li><strong>Kovalam:</strong> Kovalam is a renowned beach town famous for its crescent-shaped beaches and water sports like surfing, swimming, sunbathing, and catamaran cruising. Kovalam is also known for its Ayurvedic centers offering authentic Ayurvedic treatments and yoga programs.</li>
                    <li><strong>Periyar National Park:</strong> It is One of the most popular wildlife reserves in India. Majorly for its population of elephants, sambar deer, bison, and Bengal tigers, you can also try bamboo rafting.</li>
                    <li><strong>Nilambur:</strong> Famous for its production of high-quality teak wood and teak plantations and forests, also best for nature lovers, trekkers, and adventure enthusiasts.</li>
                    <li><strong>Kannur:</strong> It is known for its pristine beaches, traditional handloom industry and local attractions like Arippara Waterfalls, Edakkal Caves, and Ezhimala Hill Station.</li>
                </ul>

                <h3>Top Things to do in Kerala Trip</h3>
                <ul>
                    <li><strong>Traditional Fishing in Fort Kochi:</strong> One of the top things to experience as a tourist is you are allowed to do fishing using traditional chinese nets in Vasco da gama square of Fort Kochi.</li>
                    <li><strong>Walk through Tea Plantations in Munnar:</strong> Plantations in Munnar add on to the beauty and lush greenery of Kerala. You cannot only drive through the roads of Munnar and see tea and coffee plantations but also touch them, visit factories and watch the processing too.</li>
                    <li><strong>Explore Spice Farms in Thekkady:</strong> Thekkady is well known for its spices trade to the world around and visiting spice farms where these spices actually grow helps you learn not only about different spices but also their methods of cultivation.</li>
                    <li><strong>Boating in Periyar Lake:</strong> Periyar Lake of Kerala that is situated in Thekkady regions provides the traveler with the most amazing opportunity of boating and feeling the calmness in the air.</li>
                    <li><strong>Staycation in Houseboats of Alleppey:</strong> On the backwaters of Alleppey explore the sights of greenery through Houseboats that are a prime attraction for the tourists.</li>
                    <li><strong>Cuisines of Kerala:</strong> Kerala which is a coastal region of India is famous for its Malabar cuisine, with spicy food dishes and special sea food items that will rejoice your mind and soul.</li>
                    <li><strong>Backwaters of Poovar:</strong> There are nearly 34 backwaters in Kerala, one of them being Backwaters in Poovar. The serene beauty of this place will surely act as an escape for tourists and travelers who seek a peaceful environment and calmness in the air.</li>
                </ul>

                <h3>What to Eat on a Kerala Tour?</h3>
                <p>Kerala shares its coastal border with Arabian Sea and thus the influence of seafood and use of coconut oil in their food items is in a great amount.</p>
                <ul>
                    <li><strong>Appam and Kadala curry in Kochi:</strong> Appam is a steam cooked dish and no oil is used while cooking while Kadala curry which is a black chickpeas dish, when served with coconut milk enhances the taste of the entire dish.</li>
                    <li><strong>Idiyappam with curry:</strong> A savory dish of South India where the dough that is made of rice flour water and salt is made into soft strands of noodles, when it is served with complimentary curry the dish tastes amazing.</li>
                    <li><strong>Chakka Pradhaman:</strong> It is a Kerala style fruit pudding which is made of jackfruit, jaggery and coconut milk. There is also a dish called Ada Pradhaman which is made of rice. These are must try sweet dishes of Kerala.</li>
                    <li><strong>Masala Oysters:</strong> As it is in the coastline area, seafood is one of the favorites for the people who live there. Masala oysters are a perfect combination of spices and oyster’s sweet and salt taste.</li>
                    <li><strong>Indian Caviar:</strong> Caviar is basically fish eggs and seen as a very expensive dish, here we have a suggestion of where you can taste the best Indian Caviar, in Kochi’s Vella Kanthari which is an eatery run only by women.</li>
                    <li><strong>Cheenavala’s Banana leaf cooked fish:</strong> In Kerala, locals also cook fish by covering it in Banana leaves and then cook them thoroughly which results in a deliciously cooked fish dish.</li>
                    <li><strong>Kerala Paratha:</strong> Kerala Paratha is also known as flaky ribbon pancake which is the only type of parathas locals eat, these are made of Maida.</li>
                </ul>

                <h3>Top things to buy in Kerala</h3>
                <ul>
                    <li><strong>Spices from Thekkady:</strong> Spices like black pepper, cardamom, cloves, ginger etc are popularly traded from this area to different regions of the world. The aroma of spices will surely pull you towards them. Take home some spices and cook some delicious food for you and your loved ones!</li>
                    <li><strong>Kasavu Sarees:</strong> During festival seasons women from Kerala usually choose to wear white sarees with golden borders. There is an interesting fact about these Kasavu sarees that the color of the blouse they wear shows their marital status too! If a woman is wearing a green blouse it represents that she is unmarried and if she is wearing red then she is considered as married.</li>
                    <li><strong>Nettur petti (caskets):</strong> These caskets are traditional jewellery boxes made up of rosewood fully handcrafted. The prices for these royal-look caskets are not very expensive and thus affordable to buy.</li>
                    <li><strong>Products made up of Coir:</strong> Coir is an extraction from fibrous outer shell of coconuts to create items like rope, rugs and brushes, wall hangings and carpets.</li>
                    <li><strong>Elephant figurines:</strong> Kerala is a land of elephants and the popular figurines sold in Kerala’s markets are of elephants decorated with clothes and sawaris.</li>
                    <li><strong>Nilavilakku:</strong> Kerala which is also a home to thousands of ancient temples, typically use traditional oil lamps, Nilavilakku, lighting which is considered auspicious. There is a tradition followed in most of the Kerala temples that they only use these huge oil lamp and diyas to lighten up the mandir and no tube light or electricity is consumed in temples.</li>
                    <li><strong>Chundan Vallam:</strong> Kerala is well known in the world because of its unique boat races that have been a part of their tradition since ancient times. The speciality of the race is not just that they use boats for the same but they use snake shaped boats. Local markets sell models of these snake shaped boats which you must carry back home as a signature from Kerala.</li>
                    <li><strong>Tea and coffee:</strong> How can we forget to bring back coffee beans and tea leaves directly from the plantations that are rich in aroma and the flavors of these authentic tea and coffee will leave you mesmerized for a very long time.</li>
                </ul>

                <h3>Best Time to Reach Kerala</h3>
                <p>Localites of Kerala state that Kerala only sees two kinds of seasons that are Summer season and Monsoon season.</p>
                <ul>
                    <li><strong>April to June:</strong> These months are the best months to explore outdoor activities in Kerala and travel in the mountains which are relatively colder than other places at that time.</li>
                    <li><strong>October to March:</strong> With moderate temperatures these months are the best time for beach lovers, wildlife explorers, and for those who are visiting for mediation, ayurvedic treatments etc.</li>
                </ul>

                <h3>How To Reach Kerala</h3>
                <p>To reach your destination that is also known as “Venice of the east” there are three modes of transportation you can opt for:</p>
                <ul>
                    <li><strong>Airways:</strong> Major cities of India like Delhi, Mumbai, Kolkata, Chennai are connected to airports of Trivandrum, Kochi, Kannur and Calicut. After reaching your respective airport you can take a cab or a bus to your desired destination.</li>
                    <li><strong>Roadways:</strong> Kerala is well connected through roads to major tourist attraction sites of the state, You can take a cab or board a bus from whichever place you first reach in Kerala.</li>
                    <li><strong>Railways:</strong> Trains are connected to almost all parts of Kerala but major cities of India mainly have set trails to stations namely Kollam, Thrissur, Trivandrum and Calicut. From your respective station take a cab or a bus to your dream destination.</li>
                </ul>

                <h4>FAQ’s</h4>
                <p><strong>1. Which month is best to visit Kerala?</strong></p>
                <p>October to March are seen as the best months to visit Kerala.</p>
                <p><strong>2. Is a Kerala trip expensive?</strong></p>
                <p>No, Kerala trip is not expensive in fact it is considered as one of the most affordable trip of the country.</p>
                <p><strong>3. What are the best things to buy in Kerala?</strong></p>
                <p>Tea, coffee, Elephant figurines, Coir handicrafts, spices are some of the best things to buy in Kerala.</p>
                <p><strong>4. How many days should I plan for Kerala?</strong></p>
                <p>8-9 days are enough to plan for the Kerala Tour Package.</p>
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
            {/* Note: Source code only provided data for "Bestselling" (Handpicked) and "Family Tours". Other categories were empty. */}
            <section><h2 className="text-4xl font-bold mb-6">Kerala Family Tours</h2><TripSlider trips={familyTours} slidesToShow={4} /></section>
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

export default Kerala;