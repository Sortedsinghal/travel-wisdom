import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, User } from 'lucide-react';

const Reviews = () => {
  const [showMore, setShowMore] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);

  // Reviews data based on the HTML structure
  const reviews = [
    { id: 1, name: "Priya Sharma", rating: 5, comment: "Amazing experience with Travel Wisdom! The trip to Himachal was perfectly organized and the team was very supportive throughout." },
    { id: 2, name: "Rahul Kumar", rating: 5, comment: "Best travel company I've ever worked with. The Leh Ladakh trip was unforgettable. Highly recommended!" },
    { id: 3, name: "Sneha Patel", rating: 4, comment: "Great service and well-planned itinerary. The Kashmir trip exceeded my expectations. Will definitely book again!" },
    { id: 4, name: "Amit Singh", rating: 5, comment: "Professional team, excellent arrangements, and memorable experiences. The Spiti Valley trip was incredible!" },
    { id: 5, name: "Kavya Reddy", rating: 5, comment: "Outstanding service! The Kerala backwaters trip was beautifully organized. Thank you Travel Wisdom team!" },
    { id: 6, name: "Vikash Gupta", rating: 4, comment: "Good experience overall. The Rajasthan cultural tour was well-managed and informative." },
    { id: 7, name: "Anita Joshi", rating: 5, comment: "Fantastic trip to Uttarakhand! The team handled everything perfectly and made our journey memorable." },
    { id: 8, name: "Rohit Mehta", rating: 5, comment: "Excellent service and great value for money. The international trip to Thailand was amazing!" }
  ];

  const additionalReviews = [
    { id: 9, name: "Deepika Agarwal", rating: 5, comment: "Go4Explore made our dream vacation come true! The Bali trip was perfectly planned with amazing accommodations." },
    { id: 10, name: "Arjun Kapoor", rating: 4, comment: "Great experience with the Dubai tour. Everything was well-organized and the guide was very knowledgeable." },
    { id: 11, name: "Meera Nair", rating: 5, comment: "Wonderful experience! The Vietnam trip exceeded all expectations. Professional service and great value for money." },
    { id: 12, name: "Sanjay Verma", rating: 5, comment: "Excellent trip to Kazakhstan! Unique destinations and well-planned itinerary. Highly recommend Travel Wisdom." },
    { id: 13, name: "Pooja Malhotra", rating: 4, comment: "Amazing Bhutan tour! The cultural experiences were incredible and the team was very supportive throughout." },
    { id: 14, name: "Karan Sharma", rating: 5, comment: "Best backpacking experience in Meghalaya! The natural beauty and adventure activities were perfectly balanced." },
    { id: 15, name: "Ritu Gupta", rating: 5, comment: "Fantastic weekend getaway to Manali! Quick booking process and excellent arrangements. Will book again!" },
    { id: 16, name: "Naveen Kumar", rating: 4, comment: "Great corporate tour experience! Team building activities were well-planned and everyone enjoyed the trip." },
    { id: 17, name: "Swati Jain", rating: 5, comment: "Perfect honeymoon trip to Kerala! Romantic settings and beautiful locations. Thank you for making it special!" },
    { id: 18, name: "Rajesh Patel", rating: 5, comment: "Incredible Spiti Valley adventure! Raw beauty of the mountains and excellent local guides made it unforgettable." },
    { id: 19, name: "Nisha Reddy", rating: 4, comment: "Wonderful family trip to Rajasthan! Kids enjoyed the cultural shows and the heritage hotels were amazing." },
    { id: 20, name: "Varun Singh", rating: 5, comment: "Solo travel to Ladakh was life-changing! Safe, well-organized, and met amazing fellow travelers. Highly recommended!" },
    { id: 21, name: "Manish Agarwal", rating: 5, comment: "Outstanding service from start to finish! The Chopta Tungnath trek was well-organized with experienced guides." },
    { id: 22, name: "Priyanka Joshi", rating: 4, comment: "Great weekend trip to Kasol! Beautiful scenery and comfortable accommodations. Perfect for a quick getaway." },
    { id: 23, name: "Abhishek Sharma", rating: 5, comment: "Amazing Jibhi and Tirthan Valley experience! Peaceful locations and excellent hospitality. Highly recommended!" },
    { id: 24, name: "Neha Gupta", rating: 5, comment: "Fantastic McLeodganj Triund trek! Well-planned itinerary and supportive team throughout the journey." },
    { id: 25, name: "Rohit Agarwal", rating: 4, comment: "Good experience with the Manali Sissu trip! Scenic routes and comfortable travel arrangements." },
    { id: 26, name: "Divya Sharma", rating: 5, comment: "Excellent Georgia tour package! Unique culture and beautiful landscapes. Travel Wisdom handled everything perfectly." },
    { id: 27, name: "Akash Kumar", rating: 5, comment: "Incredible Azerbaijan trip! Off-beat destination with amazing experiences. Professional service throughout." },
    { id: 28, name: "Shreya Patel", rating: 4, comment: "Great Singapore Malaysia tour! Well-coordinated travel and good value for money. Enjoyed every moment." },
    { id: 29, name: "Vishal Singh", rating: 5, comment: "Perfect Japan tour experience! Cultural immersion and excellent local guides made it unforgettable." },
    { id: 30, name: "Kavita Reddy", rating: 5, comment: "Amazing Himachal backpacking trip! Adventure and comfort perfectly balanced. Great team support!" },
    { id: 31, name: "Ravi Kumar", rating: 4, comment: "Wonderful Uttarakhand tour! Beautiful hill stations and well-planned itinerary. Recommended for families." },
    { id: 32, name: "Sunita Jain", rating: 5, comment: "Excellent corporate tour to Goa! Team building activities were engaging and accommodations were top-notch." },
    { id: 33, name: "Gaurav Mehta", rating: 5, comment: "Outstanding Kedarnath Yatra experience! Spiritual journey with excellent arrangements and safety measures." },
    { id: 34, name: "Anjali Sharma", rating: 4, comment: "Great Rishikesh adventure trip! River rafting and yoga sessions were perfectly organized. Loved it!" },
    { id: 35, name: "Suresh Patel", rating: 5, comment: "Fantastic Char Dham Yatra! Spiritual and well-organized pilgrimage with comfortable travel arrangements." },
    { id: 36, name: "Rekha Singh", rating: 5, comment: "Amazing Kuari Pass trek! Breathtaking mountain views and professional trekking guides. Highly recommended!" },
    { id: 37, name: "Nitin Gupta", rating: 4, comment: "Good experience with Hampta Pass trek! Challenging yet rewarding adventure with excellent support team." },
    { id: 38, name: "Preeti Agarwal", rating: 5, comment: "Wonderful Auli skiing trip! Perfect winter adventure with good equipment and experienced instructors." },
    { id: 39, name: "Manoj Kumar", rating: 5, comment: "Excellent Valley of Flowers trek! Stunning natural beauty and well-managed trekking experience." },
    { id: 40, name: "Seema Sharma", rating: 4, comment: "Great Nainital Mussoorie tour! Beautiful hill stations with comfortable stays and scenic drives." },
    { id: 41, name: "Vikram Singh", rating: 5, comment: "Incredible Manali adventure! Snow activities and mountain views were breathtaking. Excellent service throughout." },
    { id: 42, name: "Rashmi Patel", rating: 4, comment: "Wonderful Goa beach holiday! Perfect blend of relaxation and adventure activities. Great accommodations." },
    { id: 43, name: "Aditya Kumar", rating: 5, comment: "Amazing Darjeeling Sikkim tour! Tea gardens and mountain railways were fascinating. Well-organized trip." },
    { id: 44, name: "Shweta Jain", rating: 5, comment: "Perfect Andaman honeymoon package! Crystal clear waters and romantic settings. Unforgettable experience!" },
    { id: 45, name: "Harish Gupta", rating: 4, comment: "Great Ooty Kodaikanal tour! Pleasant weather and beautiful landscapes. Good value for money." },
    { id: 46, name: "Madhuri Singh", rating: 5, comment: "Excellent Shimla Kullu Manali trip! Hill stations were gorgeous and arrangements were perfect." },
    { id: 47, name: "Ramesh Agarwal", rating: 5, comment: "Outstanding Corbett National Park safari! Wildlife sightings were amazing and guides were knowledgeable." },
    { id: 48, name: "Kaveri Reddy", rating: 4, comment: "Wonderful Munnar Thekkady tour! Spice plantations and tea estates were beautiful. Great experience." },
    { id: 49, name: "Sunil Sharma", rating: 5, comment: "Fantastic Agra Mathura Vrindavan pilgrimage! Spiritual journey with excellent arrangements and comfortable travel." },
    { id: 50, name: "Priyanka Mehta", rating: 5, comment: "Amazing Jaipur Udaipur Jodhpur tour! Royal palaces and cultural heritage were magnificent. Highly recommended!" },
    { id: 51, name: "Deepak Kumar", rating: 4, comment: "Great Haridwar Rishikesh spiritual tour! Ganga Aarti and yoga sessions were peaceful and rejuvenating." },
    { id: 52, name: "Sunita Agarwal", rating: 5, comment: "Excellent Amritsar Golden Temple visit! Spiritual experience with great hospitality and local cuisine." },
    { id: 53, name: "Ajay Singh", rating: 5, comment: "Incredible Varanasi Allahabad tour! Ancient temples and spiritual atmosphere were deeply moving." },
    { id: 54, name: "Meena Patel", rating: 4, comment: "Wonderful Pushkar Ajmer pilgrimage! Sacred lakes and dargah visit were spiritually enriching." },
    { id: 55, name: "Rohit Jain", rating: 5, comment: "Amazing Badrinath Kedarnath Yatra! Challenging yet rewarding pilgrimage with excellent support team." },
    { id: 56, name: "Shalini Gupta", rating: 5, comment: "Perfect Tirupati Tirumala darshan! Well-organized temple visit with comfortable accommodations." },
    { id: 57, name: "Manoj Sharma", rating: 4, comment: "Great Shirdi Nashik tour! Sai Baba temple visit was peaceful and arrangements were good." },
    { id: 58, name: "Renu Singh", rating: 5, comment: "Excellent Dwarka Somnath pilgrimage! Coastal temples and spiritual atmosphere were divine." },
    { id: 59, name: "Ashok Kumar", rating: 5, comment: "Outstanding Kanyakumari Rameshwaram tour! Southern tip of India with beautiful temples and ocean views." },
    { id: 60, name: "Geeta Agarwal", rating: 4, comment: "Wonderful Madurai Thanjavur temple tour! Ancient architecture and cultural heritage were impressive." }
  ];

  const displayedReviews = showMore ? [...reviews, ...additionalReviews] : reviews.slice(0, 12);

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unfiltered adventures, told by travellers like you
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Read what our Happy Customers have to say
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#0B3A55] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0B3A55] hover:border-2 hover:border-[#0B3A55] transition-colors font-medium"
            >
              {showMore ? 'View Less Reviews' : 'View More Reviews'}
            </button>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Select To Travel With Us? 🎉
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue_bed.webp" alt="accommodation" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Handpicked Stays with Friendly Hosts</h3>
                <p className="text-sm text-[#0B3A55]">All our accommodations are verified, pre-checked for quality and hygiene.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue_plane.webp" alt="trips" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">2500+ Trips Hosted PAN India & Abroad</h3>
                <p className="text-sm text-[#0B3A55]">From group trips to custom tours exploring diverse landscapes, cultures & lots more.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-walking-man.webp" alt="solo travel" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Solo Travel Friendly Trips for All</h3>
                <p className="text-sm text-[#0B3A55]">We provide absolutely safe and comfortable environment for solo travellers.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-mountain.webp" alt="itinerary" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Trip Itineraries Curated with Love</h3>
                <p className="text-sm text-[#0B3A55]">Trip plans handcrafted by destination experts for hassle-free travel experience.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-thumbs-up.webp" alt="experience" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">8 Years of On-Ground Experience</h3>
                <p className="text-sm text-[#0B3A55]">Being in Tourism industry for last 8 years, we put our heart in planning your trips.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-thumbs-up.webp" alt="rating" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Rated 4.8 Stars on Google Reviews</h3>
                <p className="text-sm text-[#0B3A55]">Our growth lies in the memorable travel experiences we provide to our travellers.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-mobile.webp" alt="booking" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Hassle-Free Booking Process</h3>
                <p className="text-sm text-[#0B3A55]">Seamless booking process on all our trips with the help of our travel experts.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/men_searching.webp" alt="filtering" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Filtering Like-Minded Travellers</h3>
                <p className="text-sm text-[#0B3A55]">We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.</p>
              </div>
              
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4">
                  <img src="/cloned_media/blue-male-group.webp" alt="captains" className="w-12 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A55] mb-2">Experienced & Cool Trip Captains</h3>
                <p className="text-sm text-[#0B3A55]">We appoint friendly trip leaders with strong leadership qualities & high spirit!</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us Travel Wisdom?</h2>
            <hr className="mb-4" />
            <div className="space-y-4 text-gray-700">
              <p>
                Travel Wisdom takes pride in curating meticulous tour packages that ensure a thrilling and serene experience. We believe that travelling evolves you, the adventure transforms you and the journey traverses through every sense to form the tapestry of the NEW YOU!
              </p>
              <p>
                Whether you are a solo traveller, or planning to book holiday packages with your friends or family — our tailor made packages are created with detail, attention, care and a passion for travel. Let us take you through the Majestic snow-capped mountains, Pristine beaches and bustling lanes of cosmopolitan cities...
              </p>
              {showFullAbout && (
                <>
                  <p>
                    Travel Wisdom has an abundance of International packages to alluring and magnetic destinations like Kazakhstan, Dubai, Bali, Vietnam, Thailand, Singapore, Azerbaijan and Georgia to provide you utmost thrill with the least worry. For those adventure and nature lovers, we got you covered too!
                  </p>
                  <p>
                    Our expert teams are full of local insights and passion for travel, that diligently curate itineraries to help you in turning your dream destination into a reality. We carry years of on-ground experience and knowledge in our pockets, to create polished and immaculate affordable travel packages that make your trip a bit more memorable and under budget.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Backpacking Trips -</strong> Imagine walking through lush verdant valleys surrounded by majestic mountain views and a meandering river. Far away from the hustle-bustle of city life, disappear in nature's lap.</li>
                    <li><strong>Weekend Trips -</strong> Experience a swift trip, ideal for those who have less time, offering a quick weekend getaway with like-minded travellers.</li>
                    <li><strong>Corporate Tours -</strong> Beyond the four walled cubicle office, a whole new world awaits you with fun activities and adventure. Get closer with your office mates and elevate your team performance.</li>
                    <li><strong>Honeymoon Trips -</strong> Wander through the charming lanes, bask in the romantic experience of candlelight dinners. Our honeymoon packages create a magical journey to draw you closer to your loved ones.</li>
                    <li><strong>Family Tours -</strong> Planning a trip with kids can be stressful on your own. Leave your worries to us, we curate tailor made packages to ensure your family tour is an enjoyable one.</li>
                    <li><strong>Group Tours -</strong> Whether you are a solo traveller who wishes to share your journey with other kindred spirits or a bunch of friends wishing to expand your travel circle, our group tours help you to venture seamlessly to adventures.</li>
                    <li><strong>Adventure Treks -</strong> Explore thrilling trekking trails with Travel Wisdom into the Himalayas and other parts of India, and disappear in the mystical land, tracing every brook and meadow.</li>
                  </ul>
                  <p>
                    The core of Travel Wisdom travel community is our dedication to travel, and to infect you as much with the travel bug as we have been infected. Let us ignite within you the same passion for travel and get you to accompany us on adventure trips. Join us to discover the magic of travel with our Handcrafted Tour packages to locations that will leave you spellbound. Create lifelong memories with Travel Wisdom, and travel to places you have never been to before.
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowFullAbout(!showFullAbout)}
                className="text-[#0B3A55] font-medium hover:underline"
              >
                {showFullAbout ? 'View Less' : 'View More'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reviews;