import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          style={{ backgroundColor: '#1a365d' }} 
          className="relative py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mt-5">
              <p className="font-semibold text-3xl text-center font-poppins text-yellow-400 mb-2">
                Who We Are?
              </p>
              <p className="font-normal text-sm mx-auto font-poppins text-white text-center mt-0 mb-4 max-w-4xl">
                Go4Explore is a community of avid travellers badly bitten by the travel bug thus providing you an unmatched travel experience as per your interest and comfort. Using our & experience.We curate personalized and fun-filled trips to unexplored Himalayan destinations. Choose the destination which you want to explore and you're done. Our enthusiastic community of wanderers create journeys that will exceed your expectations. From being an experience promoter to provider, who knows travel better than us? We design well-planned trip itineraries, trekking & camping activities without exceeding your budget.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-4 justify-center">
                <div className="flex flex-col items-center justify-between">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3 mt-3">
                    <span className="text-2xl">🚐</span>
                  </div>
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    2500+ Trips Hosted PAN India & Abroad
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3 mt-3">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Proudly operating in 15+ countries
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3 mt-3">
                    <span className="text-2xl">😊</span>
                  </div>
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    30,000+ Happy Travelers
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3 mt-3">
                    <span className="text-2xl">👍</span>
                  </div>
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Team of 100+ Travel Enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12 w-full">
            <h2 className="font-poppins text-3xl font-semibold capitalize text-black text-center">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="van" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/van.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                Fixed-<br />Departures
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="rest-table" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/rest-table.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                Customized<br />Packages
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="plane" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/icons/plane.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                International<br />Trips
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="trekking" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/icons/traveling.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                Trekking
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="bike" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/bike.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                Bike Trips
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img 
                  alt="handshake" 
                  width="70" 
                  height="70" 
                  className="w-16 h-auto" 
                  src="https://d2qa7a8q0vuocm.cloudfront.net/static/icons/handshake.webp" 
                />
              </div>
              <p className="mb-0 font-poppins text-sm font-semibold text-black text-center">
                Corporate<br />Trips
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Our Core Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins mb-8 text-3xl font-semibold capitalize text-black text-center">
            Our Core Team
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="sahil" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/sahilsingh.90e4b98e.webp" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Sahil Singh
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Business Dev. Manager
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="tanya" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/tanyakochhar.3935461b.webp" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Tanya Kochhar
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Head of Sales
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="amit" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/amit.f48b8fd0.webp" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Amit Aggarwal
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Head of Operations
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="priyanka" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/priyankajindal.4ac24dc0.webp" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Priyanka Jindal
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Head of Finance
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="pankaj" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/PankajVerma.6a27517d.webp" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Pankaj Verma
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Senior Sales Executive
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img 
                  alt="kartikey_sharma" 
                  width="96" 
                  height="96" 
                  className="w-full h-full object-cover" 
                  src="/cloned_media/kartikey_sharma.2942a633.jpg" 
                />
              </div>
              <p className="py-1 px-4 rounded-full bg-blue-600 text-center font-semibold text-sm text-white font-poppins mb-2">
                Kartikey Sharma
              </p>
              <p className="font-medium text-xs text-black text-center font-poppins mb-0">
                Deputy Sales Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Captains Section */}
      <section>
        <div 
          style={{ 
            backgroundImage: "url('https://d2qa7a8q0vuocm.cloudfront.net/static/assets/backgrounds/captionbg.webp')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#1a365d'
          }} 
          className="pt-8"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center gap-8">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <p className="mb-0 text-sm text-white font-poppins font-normal">
                  We at Go4Explore are proud to boast that we have a team of over{" "}
                  <span className="text-yellow-400 font-semibold">50+ strong & coolest Trip Captains</span>{" "}
                  who don't just have profound knowledge of the destination but also are committed to providing the best travel experience to our dear travellers.
                </p>
              </div>
              <div className="lg:col-span-3 order-3 lg:order-2 flex justify-center">
                <img 
                  className="w-full max-w-xs" 
                  src="/cloned_media/trip-captain%20img.png" 
                  alt="captain_img" 
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="lg:col-span-5 order-1 lg:order-3">
                <p className="mb-0 text-3xl text-white font-poppins font-semibold">
                  <span className="text-6xl text-yellow-400">50+</span> on-ground & coolest
                </p>
                <p className="mb-0 text-6xl text-yellow-400 font-poppins">
                  Trip Captains
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team Section */}
        <div 
          style={{ 
            backgroundColor: '#2d3748',
            height: '600px'
          }}
        >
          <div className="h-full flex flex-col justify-end items-center text-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <p className="font-semibold text-lg font-poppins text-white mb-6">
              Here at <span className="text-yellow-400">Go4Explore</span>, we welcome your creativity, hard work and dedication you'll bring to the table.
            </p>
            <article>
              <a 
                className="text-blue-600 bg-white font-poppins font-medium text-lg py-3 px-6 rounded-lg inline-block text-center no-underline hover:bg-gray-100 transition-colors" 
                href="/careers"
              >
                Join Our Team
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Life at Go4Explore Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center w-full mb-12">
            <h2 className="font-poppins text-3xl font-semibold capitalize text-black text-center">
              Life at Go4Explore
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

      {/* AIM Night Section */}
      <section 
        className="py-16" 
        style={{ 
          backgroundColor: '#1a202c'
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl font-semibold capitalize text-white text-center mb-8">
            Go4Explore's AIM Night
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-white text-sm mb-8">
                <span className="text-yellow-400 font-semibold">AIM Night 2025</span> – the annual general meeting (AGM) and award ceremony of Go4Explore, brought together the company's core team members, employees, business vendors and distinguished guests to review the company's performance, discuss future strategies, and recognize outstanding contributions in the company's growth.
              </p>
              <div>
                <img 
                  src="/cloned_media/aim-night-1.jpg" 
                  alt="Group Image" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/cloned_media/aim-night-2.jpg" 
                  alt="Event 1" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="/cloned_media/aim-night-3.jpg" 
                  alt="Event 2" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="/cloned_media/aim-night-4.jpg" 
                  alt="Event 3" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="/cloned_media/aim-night-5.jpg" 
                  alt="Event 4" 
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <a 
                href="https://www.instagram.com/go4explore.community/reel/DBxrM5Xp5XZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    alt="Reel - Diwali 2024" 
                    className="w-full h-80 object-cover rounded-lg transform hover:scale-105 transition-transform" 
                    src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/reels/diwali_reel.webp" 
                  />
                  <span className="absolute bottom-4 left-4">
                    <img 
                      alt="Play Button" 
                      width="60" 
                      height="60" 
                      className="w-12 h-12" 
                      src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/play_btn.webp" 
                    />
                  </span>
                </div>
              </a>
            </div>

            <div className="relative">
              <a 
                href="https://www.instagram.com/reel/DHn-rajp06m/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    alt="Reel - Holi Celebration" 
                    className="w-full h-80 object-cover rounded-lg transform hover:scale-105 transition-transform" 
                    src="/assets/about/reel-section 2.jpg" 
                  />
                  <span className="absolute bottom-4 left-4">
                    <img 
                      alt="Play Button" 
                      width="60" 
                      height="60" 
                      className="w-12 h-12" 
                      src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/play_btn.webp" 
                    />
                  </span>
                </div>
              </a>
            </div>

            <div className="relative">
              <a 
                href="https://www.instagram.com/go4explore.community/reel/DHyPbUqpzE7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    alt="Reel - Seventh Anniversary" 
                    className="w-full h-80 object-cover rounded-lg transform hover:scale-105 transition-transform" 
                    src="/assets/about/reel-section 3.jpg" 
                  />
                  <span className="absolute bottom-4 left-4">
                    <img 
                      alt="Play Button" 
                      width="60" 
                      height="60" 
                      className="w-12 h-12" 
                      src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/play_btn.webp" 
                    />
                  </span>
                </div>
              </a>
            </div>

            <div className="relative">
              <a 
                href="https://www.instagram.com/go4explore.community/reel/DJ6sohUJ0o9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    alt="Reel - Funday" 
                    className="w-full h-80 object-cover rounded-lg transform hover:scale-105 transition-transform" 
                    src="/assets/about/reel-section 4.jpg" 
                  />
                  <span className="absolute bottom-4 left-4">
                    <img 
                      alt="Play Button" 
                      width="60" 
                      height="60" 
                      className="w-12 h-12" 
                      src="https://d2qa7a8q0vuocm.cloudfront.net/static/assets/icons/play_btn.webp" 
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;