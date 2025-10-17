import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- COMPLETE DATA FOR ALL TRIP SECTIONS ---
const handpickedTrips = [
    { imageUrl: '/cloned_media/13464920240827063621.png', duration: '5 Days 4 Nights', title: 'Himachal Backpacking - Manali Kasol Jibhi', price: '₹12500', originalPrice: '₹14000', discount: '₹1,500' },
    { imageUrl: '/cloned_media/5274820240826124530.png', duration: '3 Nights 4 Days', title: 'Manali Sissu Kasol', price: '₹8000', originalPrice: '₹10000', discount: '₹2,000' },
    { imageUrl: '/cloned_media/22022520240827103638.png', duration: '5 Days 4 Nights', title: 'Manali Sissu Kasol Kheerganga', price: '₹12500', originalPrice: '₹14000', discount: '₹1,500' },
    { imageUrl: '/cloned_media/28089820240827101831.png', duration: '4 Days 3 Nights', title: 'Manali Kasol Kheerganga', price: '₹9999' },
    { imageUrl: '/cloned_media/31506520240827070428.png', duration: '4 Days 3 Nights', title: 'Mcleodganj Triund Bir', price: '₹9999' },
    { imageUrl: '/cloned_media/2790520241119110345.png', duration: '9 Days 8 Nights', title: 'Himachal Backpacking 9D8N', price: '₹35000' },
    { imageUrl: '/cloned_media/38286220250203102630.png', duration: '7 Days 6 Nights', title: 'Spiti Valley Circuit Trip', price: '₹20000' },
    { imageUrl: '/cloned_media/39542020240830061322.png', duration: '7 Days 6 Nights', title: 'Winter Spiti', price: '₹18000', originalPrice: '₹20000', discount: '₹2,000' },
    { imageUrl: '/cloned_media/11759320250218141443.png', duration: '5 Days 4 Nights', title: 'SM Himachal Backpacking', price: '₹17000' },
];

const honeymoonTrips = [
    { imageUrl: '/cloned_media/14516820240909124607.png', duration: '6 Days 5 Nights', title: 'Honeymoon Special- Shimla to Manali', price: '₹23000' },
    { imageUrl: '/cloned_media/10354320210311141256.png', duration: '6 Days 5 Nights', title: 'Manali Honeymoon Trip - 6 Days 5 Nights', price: '₹44500' },
    { imageUrl: '/cloned_media/18890920240907115537.png', duration: '5 Days 4 Nights', title: 'Honeymoon Special- Chandigarh Shimla Manali', price: '₹20000' },
    { imageUrl: '/cloned_media/37597320200416073327.png', duration: '4 Days 3 Nights', title: 'Manali Jibhi Honeymoon Trip', price: '₹28000' },
    { imageUrl: '/cloned_media/35355220200411161835.png', duration: '5 Days 4 Nights', title: 'Kasol Manali JIbhi Honeymoon Trip', price: '₹29999' },
    { imageUrl: '/cloned_media/37327320240213125520.png', duration: '9 Days 8 Nights', title: 'Honeymoon Special- Himachal Pardesh', price: '₹60000', originalPrice: '₹65000', discount: '₹5,000' },
];

const familyTours = [
    { imageUrl: '/cloned_media/25247020230513174156.png', duration: '6 Days 5 Nights', title: 'Shimla Manali 5 Days 4 Nights', price: '₹20300' },
    { imageUrl: '/cloned_media/21686720240907085543.png', duration: '10 Days 9 Nights', title: 'Shimla Manali McLeod Dalhousie Amritsar', price: '₹35500' },
    { imageUrl: '/cloned_media/2194520240905112914.png', duration: '5 Days 4 Nights', title: 'Shimla Manali Kasol 5 Days 4 Nights', price: '₹20200' },
    { imageUrl: '/cloned_media/37660920240906114644.png', duration: '8 Days 7 Nights', title: 'Shimla Manali Dharamshala', price: '₹27200' },
    { imageUrl: '/cloned_media/28415120240906132008.png', duration: '9 Days 8 Nights', title: 'Shimla Manali Dalhousie 8 Days 7 Nights', price: '₹31700' },
    { imageUrl: '/cloned_media/28710720240905123344.png', duration: '5 Days 4 Nights', title: 'Shimla Manali 4 Days 3 Nights', price: '₹16800' },
    { imageUrl: '/cloned_media/14053820240909055546.png', duration: '3 Days 2 Nights', title: 'Shimla 3 Days 2 Nights', price: '₹13500' },
];

const weekendTrips = [
    { imageUrl: '/cloned_media/20178120230702181449.png', duration: '3 Days 2 Nights', title: 'Manali Sissu', price: '₹6000', originalPrice: '₹7000', discount: '₹1,000' },
    { imageUrl: '/cloned_media/30341920250625101558.png', duration: '3 Days 2 Nights', title: 'Jibhi & Tirthan Valley', price: '₹6500', originalPrice: '₹7500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/957820240826103048.png', duration: '3 Days 2 Nights', title: 'Kasol Kheerganga Trek', price: '₹6500', originalPrice: '₹7500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/10765320240826121342.png', duration: '3 Days 2 Nights', title: 'Mcleodganj & Triund Trek', price: '₹6500', originalPrice: '₹7500', discount: '₹1,000' },
    { imageUrl: '/cloned_media/13283020240830082806.png', duration: '3 Days 2 Nights', title: 'Mcleodganj & Bir', price: '₹8000', originalPrice: '₹9000', discount: '₹1,000' },
];

const bestTreks = [
    { imageUrl: '/cloned_media/24319820250425070422.png', duration: '5 Days 4 Nights', title: 'Hampta Pass Trek', price: '₹7000' },
    { imageUrl: '/cloned_media/35323020250425054013.png', duration: '3 Days 2 Nights', title: 'Bhrigu Lake Trek', price: '₹5000' },
    { imageUrl: '/cloned_media/7436420250425134236.png', duration: '5 Days 4 Nights', title: 'Sar Pass Trek', price: '₹6500' },
    { imageUrl: '/cloned_media/22637220240516125326.png', duration: '3 Days 2 Nights', title: 'Kareri Lake Trek', price: '₹6999' },
    { imageUrl: '/cloned_media/29944620190923114625.png', duration: '3 Days 2 Nights', title: 'Kasol Grahan Trek', price: '₹6200' },
    { imageUrl: '/cloned_media/39414820200819141322.png', duration: '2 Days 1 Night', title: 'Prashar Lake Camping', price: '₹2500' },
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

const HimachalPradesh = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <section className="relative">
            <img src="/cloned_media/3465620240912110336.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Himachal Pradesh"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Himachal Pradesh Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Himachal Pradesh Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Just think about a place where you are surrounded by lush green forests, scenic views far away from the hustle bustle of the city, this is the majestic mountain land called Himachal Pradesh. So let's talk about our Himachal Pradesh tour Packages giving you an enriched experience of “Dev Bhoomi”- The Land of Gods. So if you are planning to visit the abode of god, then don't miss out, and add this tourist destination to your bucket list!</p>
                <p>This place is brimming with scenic views, adventure activities, stunning architecture that offers you a lifetime's worth of memory. This popular tourist destination is the gateway to the mighty Himalayas. Your trip to Himachal Pradesh will provide you the opportunity to explore local culture, and visit quaint hamlets full of history and diversity. Himachal Pradesh is known for its hospitality & amicable nature of locals towards travelers. This is a great location where a beautiful blend of adventure and leisure happens.</p>
                <h2>Best Places to Visit In Himachal Pradesh Tour</h2>
                <p><b>Manali:</b> The most famous destination of Himachal Pradesh. Manali is known as a paradise for backpackers and Couples looking for a romantic getaway by booking our Manali Honeymoon Tour. Manali is a stunning doorway for trekking in Parvati valley & skiing in Solang valley. If you are in Himachal for a spiritual tour then you can have a tour to Manali to visit the ancient temples & monasteries here. This enchanting destination stands tall at 6,730 feet of altitude above sea level, giving you a panoramic view.</p>
                <p><b>Places to visit in Manali:</b> Old Manali, Mall Road, Hadimba Temple, Solang Valley, Kullu, Vashitha Hot Springs, Bhrigu Lake Trek, Atal Tunnel.</p>
                <p><b>Tirthan Valley:</b> Himachal Pradesh Tour Packages are incomplete without adding Tirthan to them. Tirthan valley is famous for its beautiful and verdant meadows, stunning misty waterfalls, blooming orchids & cinematic mountains. A Trip to Himachal Pradesh is a boon for nature enthusiasts and those seeking adventures. This destination allows us to partake in various thrilling activities like Camping, Trekking & fishing. There is also some space for serenity & tranquility in the remarkable Tirthan valley, which carries a display of stunning local culture & tradition. The most famous trek in Tirthan -The trek of Serolsar Lake- takes you on an unforgettable expedition from Jalori Pass, and slides you through the lush green forest, scenic views & villages.</p>
                <p><b>Places to visit in Tirthan Valley:</b> Chhoie Waterfall, Jibhi Waterfall, Chehni Kothi, Great Himalayan National Park, Jalori Pass, Serolsar Lake.</p>
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
            <section><h2 className="text-4xl font-bold mb-6">Himachal Pradesh Honeymoon Trips</h2><TripSlider trips={honeymoonTrips} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Himachal Pradesh Family Tours</h2><TripSlider trips={familyTours} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Himachal Pradesh Weekend Trips</h2><TripSlider trips={weekendTrips} slidesToShow={4} /></section>
            <section><h2 className="text-4xl font-bold mb-6">Best Treks in Himachal Pradesh</h2><TripSlider trips={bestTreks} slidesToShow={4} /></section>
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

export default HimachalPradesh;