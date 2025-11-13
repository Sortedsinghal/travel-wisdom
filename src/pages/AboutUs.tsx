import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripCategories from "@/components/TripCategories";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Video Section */}
      <div className="w-100 position-relative" style={{ height: '600px' }}>
        <video 
          className="w-full h-full object-cover" 
          muted 
          loop 
          autoPlay 
          playsInline
          preload="auto"
          width={7680}
          height={4320}

          onLoadStart={() => console.log('Video loading started')}
        >
          <source src="/hero_videos/Yellow and Black Travel Collection Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center">
            <div className="animate-pulse">
              <span>Pack Light </span>
              <span className="text-yellow-400">But Right</span>
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
                Travel Wisdom is a community of passionate travellers who believe that every journey has a story to tell. <br /> We create memorable travel experiences that blend comfort, adventure, and connection — just the way you like it. <br /> <br />
                Whether it’s a group trip, a girls-only escape, a corporate getaway, a romantic honeymoon, <br /> or an offbeat trekking expedition — we curate trips that match your interests, vibe, and comfort. <br /> <br />
                Our team of travel enthusiasts ensures every itinerary is well-planned, budget-friendly, and full of unforgettable moments. <br /> From serene mountains to lively beaches, from spiritual retreats to adventure trails — Travel Wisdom turns every trip <br /> into a soulful experience. 
                Because for us, travel isn’t just about destinations — it’s about discovering yourself along the way.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-4 justify-center items-end">
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon1.png" alt="Trips Hosted" className="w-12 h-12 mb-3 mt-3" loading="lazy" decoding="async" fetchpriority="low" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    1100+ Trips Hosted PAN India & Abroad
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon2.png" alt="Countries" className="w-12 h-12 mb-3 mt-3" loading="lazy" decoding="async" fetchpriority="low" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Proudly operating in 17+ countries
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon3.png" alt="Happy Travelers" className="w-12 h-12 mb-3 mt-3" loading="lazy" decoding="async" fetchpriority="low" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    17,000+ Happy Travellers
                  </p>
                </div>
                <div className="flex flex-col items-center h-full">
                  <img src="/who-we-are icon4.png" alt="Travel Enthusiasts" className="w-12 h-12 mb-3 mt-3" loading="lazy" decoding="async" fetchpriority="low" />
                  <p className="text-sm text-white font-semibold font-poppins mb-0 mt-2 text-center">
                    Team of 70+ Travel Enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TripCategories />

      {/* Meet the Founder Section */}
      <section className="overflow-hidden py-16">
        <div className="relative bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="font-poppins text-3xl font-semibold capitalize text-black relative mb-4 text-center">
                Meet the Founder
              </h3>
              <article className="flex items-end justify-center mb-6">
                <p className="font-bold text-lg inline-block p-1 rounded-lg font-poppins text-white bg-[#0B3A55] mb-4 mr-4">
                  Hoor
                </p>
                <p className="mb-4 font-semibold text-sm text-black font-poppins">
                  CEO, Founder
                </p>
              </article>
              <p className="font-normal text-sm font-poppins text-black leading-relaxed text-center">
              In 2020, Ms. Hoor began her journey of turning her deep love for travel into a meaningful purpose. What started as a simple passion for exploring new places soon transformed into Travel Wisdom — a community-driven platform that brings together people who dream to explore, connect, and celebrate life through travel. <br /> <br />
Hoor has explored diverse landscapes across India — From the snow-clad peaks of the Himalayas to the golden sands of Rajasthan, from the lush backwaters of Kerala to the pristine valleys of the Northeast, and the vibrant coastlines of Goa to the spiritual heart of Varanasi — she has explored the soul of India in its truest form. Her focus has always been on creating well-planned, comfortable, experiences that allow travelers to truly enjoy every moment.<br /><br />
By combining her experience in the travel industry and her passion for exploring new places, she has built Travel Wisdom into a trusted brand that promotes responsible tourism and authentic experiences. Guided by her belief that “Travel is not just about places, but about discovering yourself,” Hoor continues to design trips that inspire happiness, friendship, and unforgettable memories. 💛
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Life at Travel Wisdom Section - 5 Image Grid */}
<section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center w-full mb-12">
            <h2 className="font-poppins text-3xl font-semibold capitalize text-black text-center">
              Life at Travel Wisdom
            </h2>
          </div>

          {/* 5-Image Responsive Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-fr">
            {/* Image 1: Takes full width on small screens, half on medium, and a single column on large/xl */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img 
                alt="party" 
                className="rounded-lg w-full h-full object-cover min-h-[200px]" 
                src="/Life1.jpeg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            
            {/* Image 2: Standard size, takes one column */}
            <div className="lg:col-span-1">
              <img 
                alt="grid_6" 
                className="rounded-lg w-full h-full object-cover min-h-[200px]" 
                src="/Life2.jpeg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>

            {/* Image 3: Standard size, takes one column */}
            <div className="lg:col-span-1">
              <img 
                alt="grid_2" 
                className="rounded-lg w-full h-full object-cover min-h-[200px]" 
                src="/Life3.jpeg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            
            {/* Image 4: Standard size, takes one column */}
            <div className="lg:col-span-1">
              <img 
                alt="grid_5" 
                className="rounded-lg w-full h-full object-cover min-h-[200px]" 
                src="/Life4.jpeg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            
            {/* Image 5: Takes full width on small screens, half on medium, and a single column on large/xl (to complete the 5-image row) */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img 
                alt="grid_4" 
                className="rounded-lg w-full h-full object-cover min-h-[200px]" 
                src="/Life5.jpeg"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
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