import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS (BHUTAN) ---

const handpickedTrips = [
    { imageUrl: '/cloned_media/36969020250619061302.png', duration: '7 Days 6 Nights', title: 'Bhutan Backpacking 7D6N', price: '₹35000' },
    { imageUrl: '/cloned_media/12684520250619062221.png', duration: '8 Days 7 Nights', title: 'Bhutan Backpacking - 8D7N', price: '₹45000' }
];

const bhutanTours = [
    { imageUrl: '/cloned_media/42181520250527062231.png', duration: '9 Days 8 Nights', title: 'Wonders of Bhutan', price: '₹49350' },
    { imageUrl: '/cloned_media/30294720250527073739.png', duration: '8 Days 7 Nights', title: 'Discover Best of Bhutan', price: '₹42735' },
    { imageUrl: '/cloned_media/18237020250527074633.png', duration: '7 Days 6 Nights', title: 'Joyful Escape to Bhutan', price: '₹35490' },
    { imageUrl: '/cloned_media/12164220250527075548.png', duration: '6 Days 5 Nights', title: 'Unforgettable Bhutan Getaway', price: '₹35490' }
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

const Bhutan = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/25777920250619062452.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Bhutan"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Bhutan Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Bhutan Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Bhutan with Go4Explore</h2>
                <p>Looking for the perfect way to experience all that Bhutan has to offer? Look no further than Go4Explore! We've crafted meticulously planned <b>Bhutan Tour Packages</b> that cater to every type of traveler. Whether you're a culture enthusiast, nature lover, or adventure seeker, we've got you covered. Our expert local guides will take you off the beaten path, ensuring you don't miss any hidden gems. We handle all the details, so you can focus on creating unforgettable memories.</p>
                <p>Don't just visit Bhutan, truly experience it with Go4Explore. Our <a href="https://go4explore.com/trip/bhutan-tour-packages" style={{color:'blue'}}>Bhutan Package</a> offers the perfect balance of must-see attractions and authentic local experiences. We understand that every traveler is unique, which is why we offer customizable itineraries to suit your preferences and pace. Plus, our competitive pricing means you get the best value for your money without compromising on quality.</p>

                <h2>About Bhutan Tour Package</h2>
                <p>Bhutan, the Land of Thunder Dragon, is a beautiful country in the Eastern Himalayas. This last place on Earth that can be called Paradise offers a blend of tradition and contemporary city that is truly unique, all being set among the beauty of nature. From the awe-inspiring Tiger's Nest Monastery built on the edge of a cliff to the serene Punakha Dzong spanning two rivers, Bhutan's architectural splendors are absolutely amazing. The country's dedication to Gross National Happiness is visible in the survival of the culture, beautiful landscapes, and the ever-present smiles of the locals.</p>
                <p>Traveling through Bhutan means crossing infinite valleys, climbing up and down the high mountain passes, and visiting lovely towns that seem to have survived the passage of time. Engage in the thrills of archery, Bhutan's national sport, or be intertwined with the brilliant colors and spiritual vibrations of the popular festival. Trek the gorgeous rhododendron forests, see the rare black-necked cranes in Phobjikha Valley, and relish the unique tastes of Bhutanese cuisine. For instance, you can test your tastebuds with the hot pepper preparation Ema Datshi.</p>
                <p>Ready to embark on the journey of a lifetime? Contact Go4Explore today and let us turn your Bhutan dreams into reality. Our friendly team is just a call or click away, eager to help you plan your perfect Bhutanese Tour Package. Don't wait - spaces are filling up fast for this season's tours. Book now and get ready to discover the magic of Bhutan with Go4Explore!</p>

                <h3>Best Places to Visit in Bhutan Tour</h3>
                <ul>
                    <li><strong>Paro:</strong> This beautiful valley houses the Nazhoen Pelri in which one of Bhutan's most famous religious site is located, i.e., the Tiger's Nest Monastery or Taktsang Finally, located on the edge of a cliff 900 meters above the valley floor, it is also a sacred site that commands panoramic views and spiritual vibes. Paro is also known for the striking Rinpung Dzong, a fortress-monastery with views of Bhutanese traditional architecture, and the National Museum, in an old watchtower, which offers information on local history and culture.</li>
                    <li><strong>Thimphu:</strong> The capital blends modern with traditional. The big Buddha Dordenma statue overlooks the city and has great views. Tashichho Dzong, the seat of government, is impressive. The weekend market is lively and gives you a glimpse into local life. The Folk Heritage Museum and Textile Museum show Bhutanese crafts and traditions. And don’t miss the weird Motithang Takin Preserve, home to Bhutan’s national animal.</li>
                    <li><strong>Punakha:</strong> Known for its mild climate, Punakha has the majestic Punakha Dzong at the confluence of two rivers. This is the winter residence of Bhutan’s central monastic body. Nearby is the Chimi Lhakhang, the fertility temple of the “Divine Madman” Drukpa Kunley. The valley is also one of the most beautiful regions of Bhutan with its rice fields and fruit orchards.</li>
                    <li><strong>Bumthang:</strong> Bumthang is often called the spiritual heart of Bhutan. It has four main valleys and some of the oldest temples and monasteries in the country including Jambay Lhakhang and Kurje Lhakhang. It’s known for its unique architecture, Red Panda beer and high quality honey. Bumthang is a must visit place for its serene landscapes and spiritual atmosphere.</li>
                    <li><strong>Phobjikha Valley:</strong> This wide glacial valley is famous for its beauty and as the winter home of the black-necked cranes. The 17th century Gangtey Monastery overlooks the valley and has great views. Nature lovers can hike and visit the Black-Necked Crane Information Centre to learn about these rare birds and conservation efforts in the area.</li>
                    <li><strong>Trongsa:</strong> In central Bhutan, <a href="https://en.wikipedia.org/wiki/Trongsa" style={{color:'blue'}} rel="noopener noreferrer" target="_blank">Trongsa</a> is all about the big dzong, the largest in the country. This architectural marvel seems to float above the Mangde Chhu gorge. The Tower of Trongsa Museum in the watchtower above the dzong gives you a glimpse into Bhutan’s monarchy. Trongsa was the most important place in Bhutan’s history and still is an important administrative center.</li>
                    <li><strong>Haa Valley:</strong> Haa Valley is famous for one of the barely ever-trod parts of the country, and a visitor can have a firsthand look at the way life is untouched in the countryside. There is an ancient place called Lhakhang Nagpo (Black Temple) and Lhakhang Karpo (White Temple), which have hundreds of legendary stories about them among the local people. The area is considered to be a nature reserve because of the astonishing pristine natural beauty which is enhanced by thick woods and clear running mountain water. Visitors have a chance of trekking, they can meet very friendly locals, and also, they can taste the traditional Bhutanese dishes which are served in an off-the-beaten-path destination.</li>
                    <li><strong>Gangtey:</strong> Gangtey, another shelter where the monastery was constructed between 1600 AD to 1900 AD, is standing in the picturesque Phobjikha Valley. Gangtey Goemba is quite well known as a nature center in Bhutan where the conservation of the black-necked cranes including bird watching, and other recreational activities like nature walks are happening. It is said that the Gangtey Nature Trail is under you and is giving you a chance to have a mental transfusion, by having a view of the valley from the top. As for the winters, the place becomes a really great spot for the migrating birds that flock there and create a spectacle.</li>
                    <li><strong>Wangdue Phodrang:</strong> Regarded to be a dramatic dzong, this can be found in the pelvis of the mountains in Wangdue Phodrang, between the confluence of the Punakha Chhu and the Pho Chhu River. While the very first dzong was destroyed by fire, the reconstruction reveals the traditional craftsmanship of the local inhabitants. The area is well-known for bamboo products, slate carvings as well as stone carvings in the art world. Part of the district, the Phobjikha Valley area is highly recommended due to its beauty of nature and a lot of wildlife beside it.</li>
                    <li><strong>Trashigang:</strong> Centered in the east of Bhutan, Trashigang is not only the largest town but also is the foremost city of visiting this side. The Trashigang Dzong, thus, "is the Blessed Hill House," is the main site in the area and gives visitors a widespread view which they carry with them. The enticement of the place lies in its very colorfulness as it consists of different ethnic groups such as half, half settling Merak and Sakteng. On the way down, the Gom Kora is seen under the branch of a small but holy river, the reason for why Kashmiri Buddhists do their pilgrimages here.</li>
                    <li><strong>Jakar:</strong> The main town in Bumthang District, Jakar is often dubbed the doorway to the eastern region of Bhutan. The Jakar Dzong which is noted for the 'Fortress of the White bird' is located in Jakar and also offers breathtaking views of the Chokhor Valley. In the proximity of the town are found the important Buddhist sites and the place is very known for the honey, cheese, and fruit brandies. The nearby Wangdicholing Palace is not available to the public; however, it is historically important for being the place where Bhutanese monarchy was established.</li>
                    <li><strong>Dochula Pass:</strong> Leading to Punakha from Thimphu, Dochula Pass as an attraction point is indeed one of the fantastic public places in Bhutan. On those days of the year when the weather has cleared, it offers people a very nice panoramic view of all the Himalayas that lie away. The site is also known among the Bhutanese soldiers as the 108 chortens (stupas) of the "Druk Wangyal Chortens". Royal Botanical Park (RBP) is the leading nature reserve in Bhutan built to preserve the flora and fauna of the country. The spot on top of the mountain path between two destinations is not only a have-to-pass place but a place where you may find hills to bring your photo cameras for an unforgettable experience for all photography lovers.</li>
                </ul>

                <h3>Things to do in Bhutan Trip</h3>
                <p><strong>1. Hike to Tiger's Nest Monastery:</strong> This challenging but rewarding trek takes you to Bhutan's most famous landmark. The 900m ascent offers breathtaking views of the Paro Valley. The monastery itself, perched precariously on a cliff, is a marvel of architecture and spirituality. Inside, you'll find intricate murals and a serene atmosphere that makes the climb worthwhile.</p>
                <p><strong>2. Attend a Tshechu Festival:</strong> These colorful festivals, held annually in various dzongs and monasteries, are the highlight of Bhutan's cultural calendar. Witness elaborate masked dances that depict Buddhist teachings and legends. The atmosphere is festive, with locals dressed in their finest traditional attire. It's an excellent opportunity to experience Bhutanese community spirit and religious devotion.</p>
                <p><strong>3. Try Bhutanese Cuisine:</strong> Bhutanese food is unique and flavorful. Ema datshi, a spicy dish of chili peppers and cheese, is the national dish. Try buckwheat noodles in eastern Bhutan or red rice in the west. Don't miss out on momos (dumplings) and ara (local rice wine). Many restaurants offer cooking classes where you can learn to prepare these dishes.</p>
                <p><strong>4. Visit Dzongs:</strong> These ancient fortress-monasteries are architectural marvels that still serve administrative and religious functions. Punakha Dzong, with its strategic location at the confluence of two rivers, is particularly impressive. Explore the courtyards, temples, and administrative offices within these massive structures, each with its own unique history and design.</p>
                <p><strong>5. Practice Archery:</strong> Archery is more than just a sport in Bhutan; it's a social event. Traditional bows are made of bamboo, and targets are placed 145 meters away. Competitions are often accompanied by singing, dancing, and friendly taunting. Many hotels and tour operators can arrange for you to try your hand at this challenging sport.</p>
                <p><strong>6. Take a Hot Stone Bath:</strong> This traditional therapy involves river rocks heated over a fire and placed in wooden tubs filled with water and medicinal herbs. The heat releases minerals from the stones, creating a therapeutic bath believed to help with joint pain and skin problems. It's a relaxing experience after a day of trekking.</p>
                <p><strong>7. Trek in the Himalayas:</strong> Bhutan offers treks ranging from easy day hikes to challenging multi-week expeditions. The Druk Path trek between Paro and Thimphu is popular for its beautiful scenery and cultural sites. For a more challenging experience, the Snowman Trek is considered one of the most difficult in the world, traversing the remote Lunana region.</p>
                <p><strong>8. Visit Local Markets:</strong> Weekend markets in Thimphu and Paro are bustling affairs where locals trade everything from fresh produce to traditional textiles. It's a great place to buy souvenirs like handwoven fabrics, wooden crafts, and Bhutanese stamps. The markets also offer a glimpse into everyday Bhutanese life and social interactions.</p>

                <h3>Foods to Try in Bhutan Tour</h3>
                <ul>
                    <li><strong>Ema Datshi:</strong> The flavors of Bhutan can be summed up in Ema Datshi, the national dish which is a spicy hot chili cheese preparation. It is perhaps the closest thing that Bhutan can be said to have its own version of mac and cheese except that there would be spices added to it possibly in a soupy form. This dish is served most of the time during the meal, and it represents the spiciness that is much loved in Bhutan.</li>
                    <li><strong>Momos:</strong> These delicacies have an overriding likeness with the Tibetan-style dumplings that are now well-admired in Bhutan. These are dumplings that traditionally contain the minced meat, preferably pork or beef or vegetables and steamed, accompanied by the spicy sauce. Momos are eaten as a snack or an appetizer/in between meals or before dinner or together with rice and curry, etc.</li>
                    <li><strong>Phaksha Paa:</strong> The spicy red chili and radish stir-fried well with the belly of pork makes it rich and hearty. The pork is normally prepared with some fat; as a result it produces a highly flam taste. It is usually accompanied by rice and can effectively be relied upon to make a complete meal.</li>
                    <li><strong>Jasha Maru:</strong> This chicken dish is prepared by mincing chicken, tomatoes, and chilies, and is also hot. It has a taste of ginger and garlic added to it which makes the dish unique. Jasha maru is mainly eaten with rice and is very popular with the people from the region as well as tourists who visit the region for various reasons.</li>
                    <li><strong>Shakam Paa:</strong> It is made from dried beef that is softened in water and then cooked with dried chili. Pé Fam is chewy which is popular among the Fante people, Kente-Asaw people and others in the south. It is a traditional meal from Bhutan which also demonstrates Bhutan's history of preservation.</li>
                    <li><strong>Red Rice:</strong> This rice is unique from other rice products: nutty and faintly sweet, and is produced only at the altitude of high mountains in Bhutan. Compared to the former it is less refined and has more nutrients locked in it than the utter whiteness of rice. Rice is also eaten with most meals and is preferred as a somewhat healthier option to white rice.</li>
                    <li><strong>Goep (Tripe):</strong> Similar to Bhatmas in Tibet, Goep is a popular dish prepared from cow or yak’s stomach and is often prepared by stir fry with chillies and other spices. Bhutanese people love to consume it because of its taste and texture of the grain for which the dish is special.</li>
                    <li><strong>Suja (Butter Tea):</strong> This authentic drink is prepared using tea, butter, and salt derived from the processed yak fat. It incorporates nuts, is rich, savory and serves as a perfect meal accompaniment for the cold climate that is experienced in Bhutan. This is a traditional Bhutanese beverage made from wheat and is an essential component of the warm welcomes offered to guests in the country.</li>
                    <li><strong>Ara:</strong> A type of rice wine that originated from a particular region in Africa is known as Ara and it is usually prepared to be served hot. The beer is very flavourful and has a higher rate of alcoholic content than most beers. Ara is also consumed in social gatherings as well as performed in religious activities in Bhutan.</li>
                </ul>

                <h3>Bhutan Visa Requirement</h3>
                <p>Indian citizens can enter Bhutan without a visa, but they must obtain an entry permit. This permit is issued at the entry point upon presenting a valid passport or voter ID card. For visits beyond Phuentsholing, Paro, and Thimphu, an additional special permit is required. These permits are free of charge and typically valid for 7 days, also its important.</p>
                
                <h3>How to Reach Bhutan from India</h3>
                <p>Reaching Bhutan from India is convenient by air or land. Fly directly to Paro International Airport from Delhi, Kolkata, or Guwahati via Druk Air or Bhutan Airlines. Alternatively, enter by road through Phuentsholing (from West Bengal), Samdrup Jongkhar, or Gelephu (both from Assam).</p>
                
                <h3>Best Time to Visit Bhutan</h3>
                <p><strong>1. Spring (March to May):</strong> One of the best seasons to visit Bhutan. The weather is mild and pleasant, with clear skies offering stunning mountain views. Rhododendrons and other wildflowers bloom, painting the landscape in vibrant colors. It's an ideal time for trekking and outdoor activities. Several festivals, including the popular Paro Tshechu, take place during this season.</p>
                <p><strong>2. Summer (June to August):</strong> This is the monsoon season in Bhutan. While rainfall can be heavy, causing occasional landslides and travel disruptions, the lush green landscapes are breathtaking. It's a great time for budget travelers as there are fewer tourists and potentially lower prices. The Haa Summer Festival in July showcases the culture of the nomadic herders.</p>
                <p><strong>3. Autumn (September to November):</strong> Considered the peak tourist season in Bhutan. The weather is clear and crisp, with blue skies providing excellent visibility for mountain views. It's the perfect time for trekking and outdoor activities. The famous Black-Necked Crane Festival in Phobjikha Valley takes place in November. Fall foliage adds beautiful colors to the landscape.</p>
                <p><strong>4. Winter (December to February):</strong> While colder, especially at higher altitudes, winter offers clear skies and spectacular mountain views. It's an excellent time for bird watching in the Phobjikha Valley and visiting lower-altitude areas. The Punakha Drubchen and Tshechu festivals occur in February. Tourist numbers are lower, allowing for a more intimate experience of Bhutan.</p>
                
                <h4>FAQ’s</h4>
                <p><strong>1. What is the best time to visit Bhutan?</strong></p>
                <p>Spring and Autumn are considered as the peak tourist season for exploring Bhutan.</p>
                <p><strong>2. Is Bhutan visa free for Indians?</strong></p>
                <p>Bhutan is visa free for Indian citizens but they must obtain an entry permit.</p>
                <p><strong>3. Is Bhutan a friendly place for tourists?</strong></p>
                <p>Yes, Bhutan is a very friendly place for tourists.</p>
              </div>
            </ExpandableText>
          </section>
          
          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <TripSlider trips={handpickedTrips} slidesToShow={2} />
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
              <h2 className="text-4xl font-bold mb-6">Bhutan Tour Packages</h2>
              <TripSlider trips={bhutanTours} slidesToShow={4} />
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

export default Bhutan;