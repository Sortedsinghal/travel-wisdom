import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripCategories from "@/components/TripCategories";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Video Section */}
      <div className="w-100 position-relative" style={{ height: '580px' }}>
        <video 
          style={{ opacity: 0.9 }} 
          className="w-full h-full object-cover" 
          muted 
          loop 
          autoPlay 
          playsInline
        >
          <source src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/about/about_us_thumbnail.mp4" type="video/mp4" />
        </video>
        <div 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} 
          className="absolute top-0 left-0 bottom-0 right-0 w-full"
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center overflow-hidden">
            <div className="animate-pulse">
              <span>We </span>
              <span className="text-yellow-400">Hustle Together</span>
            </div>
          </h1>
        </div>
      </div>

      {/* Who We Are Section */}
      <section>
        <div 
          style={{ backgroundColor: '#0B3A55' }} 
          className="relative py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mt-5">
              <p className="font-semibold text-3xl text-center font-poppins text-yellow-400 mb-2">
                Who We Are?
              </p>
              <p className="font-normal text-sm mx-auto font-poppins text-white text-center mt-0 mb-4 max-w-4xl">
                Travel Wisdom is a community of passionate travellers who believe that every journey has a story to tell. We create memorable travel experiences that blend comfort, adventure, and connection — just the way you like it.
                Whether it’s a group trip, a girls-only escape, a corporate getaway, a romantic honeymoon, or an offbeat trekking expedition — we curate trips that match your interests, vibe, and comfort.
                Our team of travel enthusiasts ensures every itinerary is well-planned, budget-friendly, and full of unforgettable moments. From serene mountains to lively beaches, from spiritual retreats to adventure trails — Travel Wisdom turns every trip into a soulful experience.
                Because for us, travel isn’t just about destinations — it’s about discovering yourself along the way.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-4 justify-center items-end">
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon1.png" alt="Trips Hosted" className="w-12 h-12 mb-3 mt-3" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    2500+ Trips Hosted PAN India & Abroad
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon2.png" alt="Countries" className="w-12 h-12 mb-3 mt-3" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Proudly operating in 15+ countries
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon3.png" alt="Happy Travelers" className="w-12 h-12 mb-3 mt-3" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    30,000+ Happy Travellers
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon4.png" alt="Travel Enthusiasts" className="w-12 h-12 mb-3 mt-3" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Team of 100+ Travel Enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TripCategories />

      {/* Our Journey So Far Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12 w-full">
            <h2 className="font-poppins text-3xl font-semibold capitalize text-black text-center">
              Our Journey So Far
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2017</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-700">On 19th May, We started our journey to explore</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-700">Collaborated With Nepal Tourism Board for Himalayan Travel Mart</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2018</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2019</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-700">Successfully summited mt. Friendship Peak near Manali</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-700">Invited by Honorable tourism minister of India to discuss post-covid scenario</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2020</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2021</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-700">Hosted travellers on our first ever International trip</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-700">Managed travel ops of india Ice Hockey team (under 20) at Asia & Oceania Championship</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2022</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2023</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-700">Expended our travel oprations in 11+ countries</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-gray-700">Invited by Meta for Asia-Pacific Travel Summit in Singapore Headquarters</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2025</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-gray-700">Here we are spreading happiness through travel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <section className="overflow-hidden py-16">
        <div className="relative bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="max-w-4xl">
                  <h3 className="font-poppins text-3xl font-semibold capitalize text-black relative mb-8">
                    Meet the Founder
                  </h3>
                  <article className="flex items-end mb-6">
                    <p className="font-bold text-lg inline-block p-2 rounded-lg font-poppins text-white bg-black mb-0 mr-4">
                      Jony Jindal
                    </p>
                    <p className="mb-0 font-semibold text-sm text-black font-poppins">
                      CEO, Founder
                    </p>
                  </article>
                  <p className="font-normal text-sm font-poppins text-black leading-relaxed">
                    In 2017, Mr Jony Jindal started his journey and went on his solo trip from Kashmir to Kanyakumari & further Amritsar to Manipur at the age of 19. He has successfully done some amazing high altitude treks like Mount Everest base camp, Gokyo Lake trek, Alpather Lake trek, climbed Mount Friendship Peak and many more. 
                    <br /><br />
                    He combined his passion for traveling and skills of digital marketing to create a platform helping out people who want to travel in a budget-friendly manner with like-minded people. and solving the problem of traveling in Himalayan regions by organizing group trips to offbeat and untouched places. 
                    <br /><br />
                    He worked with various tourism boards and hospitality brands like Incredible India, Nepal Tourism, Manipur Tourism, Madhya Pradesh Tourism, Delhi Tourism and Sterling Holidays to name a few. Recently He got invited by the Ministry of Tourism to discuss the "future of travel industry" with the Tourism Minister of India. Mr Jony Jindal also managed the Indian Ice Hockey team in the Asian Championship at Bangkok.
                  </p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="flex justify-center">
                  <img 
                    alt="founder_img" 
                    width="350" 
                    height="500" 
                    className="rounded-lg shadow-lg" 
                    src="/cloned_media/founder-jony.png" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Life at Travel Wisdom Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center w-full mb-12">
            <h2 className="font-poppins text-3xl font-semibold capitalize text-black text-center">
              Life at Travel Wisdom
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden xl:block py-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <img 
                  alt="party" 
                  className="rounded-lg w-full h-full object-cover" 
                  src="/cloned_media/IMG_1062.jpg" 
                />
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="col-span-3">
                    <img 
                      alt="grid_6" 
                      className="rounded-lg w-full h-56 object-cover" 
                      src="/cloned_media/gallery-02.webp" 
                    />
                  </div>
                  <div className="col-span-1">
                    <img 
                      alt="grid_2" 
                      className="rounded-lg w-full h-56 object-cover" 
                      src="/cloned_media/1729176641565-9.jpg" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <img 
                      alt="grid_5" 
                      className="rounded-lg w-full h-48 object-cover" 
                      src="/cloned_media/IMG_5134.jpg" 
                    />
                  </div>
                  <div>
                    <img 
                      alt="grid_4" 
                      className="rounded-lg w-full h-48 object-cover" 
                      src="/cloned_media/3A5A0899.jpg" 
                    />
                  </div>
                  <div>
                    <img 
                      alt="grid_1" 
                      className="rounded-lg w-full h-48 object-cover" 
                      src="/cloned_media/IMG_1200.jpg" 
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <img 
                  alt="grid_3" 
                  className="rounded-lg w-full h-full object-cover" 
                  src="/cloned_media/1747116983507.jpg" 
                />
              </div>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 xl:hidden">
            <div>
              <img 
                alt="party" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/IMG_1062.jpg" 
              />
            </div>
            <div>
              <img 
                alt="grid_6" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/IMG_20250320_162620.jpg" 
              />
            </div>
            <div>
              <img 
                alt="grid_5" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/1729176641565-9.jpg" 
              />
            </div>
            <div>
              <img 
                alt="grid_4" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/IMG_5134.jpg" 
              />
            </div>
            <div>
              <img 
                alt="grid_3" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/3A5A0899.jpg" 
              />
            </div>
            <div>
              <img 
                alt="grid_2" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/IMG_1200.jpg" 
              />
            </div>
            <div className="col-span-2">
              <img 
                alt="grid_1" 
                className="rounded-lg w-full h-48 object-cover" 
                src="/cloned_media/1747116983507.jpg" 
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default AboutUs;