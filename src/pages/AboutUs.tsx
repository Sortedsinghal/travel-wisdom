import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripCategories from "@/components/TripCategories";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Video Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <video 
          className="w-full h-full object-cover" 
          muted 
          loop 
          autoPlay 
          playsInline
          preload="metadata"
        >
          <source src="/hero_videos/Yellow and Black Travel Collection Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center">
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
          className="relative py-8 md:py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="font-semibold text-2xl md:text-3xl text-center text-yellow-400 mb-4 md:mb-6">
                Who We Are?
              </p>
              <p className="text-sm md:text-base mx-auto text-white text-center leading-relaxed max-w-4xl mb-6 md:mb-8">
                Travel Wisdom is a community of passionate travellers who believe that every journey has a story to tell. We create memorable travel experiences that blend comfort, adventure, and connection — just the way you like it.
                <br /><br />
                Whether it's a group trip, a girls-only escape, a corporate getaway, a romantic honeymoon, or an offbeat trekking expedition — we curate trips that match your interests, vibe, and comfort.
                <br /><br />
                Our team of travel enthusiasts ensures every itinerary is well-planned, budget-friendly, and full of unforgettable moments. From serene mountains to lively beaches, from spiritual retreats to adventure trails — Travel Wisdom turns every trip into a soulful experience. Because for us, travel isn't just about destinations — it's about discovering yourself along the way.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="flex flex-col items-center text-center">
                  <img src="/who-we-are icon1.png" alt="Trips Hosted" className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3" loading="lazy" decoding="async" />
                  <p className="text-xs md:text-sm text-white font-semibold leading-tight">
                    1100+ Trips Hosted PAN India & Abroad
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src="/who-we-are icon2.png" alt="Countries" className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3" loading="lazy" decoding="async" />
                  <p className="text-xs md:text-sm text-white font-semibold leading-tight">
                    Proudly operating in 17+ countries
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src="/who-we-are icon3.png" alt="Happy Travelers" className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3" loading="lazy" decoding="async" />
                  <p className="text-xs md:text-sm text-white font-semibold leading-tight">
                    17,000+ Happy Travellers
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src="/who-we-are icon4.png" alt="Travel Enthusiasts" className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3" loading="lazy" decoding="async" />
                  <p className="text-xs md:text-sm text-white font-semibold leading-tight">
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
      <section className="py-8 md:py-16">
        <div className="bg-gray-50 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 md:mb-6 text-center">
                Meet the Founder
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6 gap-2">
                <p className="font-bold text-base md:text-lg px-3 py-1 rounded-lg text-white bg-[#0B3A55]">
                  Hoor
                </p>
                <p className="font-semibold text-sm md:text-base text-black">
                  CEO, Founder
                </p>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed text-center">
              In 2020, Ms. Hoor began her journey of turning her deep love for travel into a meaningful purpose. What started as a simple passion for exploring new places soon transformed into Travel Wisdom — a community-driven platform that brings together people who dream to explore, connect, and celebrate life through travel.
              <br /><br />
              Hoor has explored diverse landscapes across India — From the snow-clad peaks of the Himalayas to the golden sands of Rajasthan, from the lush backwaters of Kerala to the pristine valleys of the Northeast, and the vibrant coastlines of Goa to the spiritual heart of Varanasi — she has explored the soul of India in its truest form. Her focus has always been on creating well-planned, comfortable, experiences that allow travelers to truly enjoy every moment.
              <br /><br />
              By combining her experience in the travel industry and her passion for exploring new places, she has built Travel Wisdom into a trusted brand that promotes responsible tourism and authentic experiences. Guided by her belief that "Travel is not just about places, but about discovering yourself," Hoor continues to design trips that inspire happiness, friendship, and unforgettable memories. 💛
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Life at Travel Wisdom Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-6 md:mb-8">
            Life at Travel Wisdom
          </h2>

          {/* Mobile: 2-column grid, Desktop: 5-column */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-1">
              <img 
                alt="Travel Wisdom Life" 
                className="rounded-lg w-full h-32 md:h-48 object-cover" 
                src="/Life1.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:col-span-1">
              <img 
                alt="Travel Wisdom Life" 
                className="rounded-lg w-full h-32 md:h-48 object-cover" 
                src="/Life2.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:col-span-1">
              <img 
                alt="Travel Wisdom Life" 
                className="rounded-lg w-full h-32 md:h-48 object-cover" 
                src="/Life3.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:col-span-1">
              <img 
                alt="Travel Wisdom Life" 
                className="rounded-lg w-full h-32 md:h-48 object-cover" 
                src="/Life4.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img 
                alt="Travel Wisdom Life" 
                className="rounded-lg w-full h-32 md:h-48 object-cover" 
                src="/Life5.jpeg"
                loading="lazy"
                decoding="async"
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