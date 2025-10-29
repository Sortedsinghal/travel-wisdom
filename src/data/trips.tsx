// src/data/trips.ts

/**
 * Defines the complete structure for a single trip,
 * including summary data (for cards) and detailed data (for trip pages).
 */
export interface Trip {
  // --- Core identifying information ---
  slug: string; // The URL-friendly unique identifier
  title: string;
  destination: 'Dubai' | 'Rajasthan' | 'Kerala' | 'Bhutan' | 'Leh Ladakh' | 'Bali' | 'Kazakhstan' | 'Himachal' | 'Kashmir' | 'Spiti' | 'Uttarakhand' | 'Thailand' | 'Vietnam';

  // --- Data for Trip Cards ---
  duration: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  imageUrl: string;
  
  // --- NEW: Data for Trip Detail Page ---
  overview: string;
  itinerary: {
    day: number; // Day 0 will be treated as a number
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  gallery?: string[]; // <-- ADDED THIS
}

// --- Helper function to create placeholder itinerary ---
const createItinerary = (durationString: string): { day: number; title: string; description: string; }[] => {
  // Handles "X Days Y Nights" or "X Nights Y Days"
  const days = parseInt(durationString.split(' ')[0], 10);
  if (isNaN(days)) {
    return [{ day: 1, title: 'Trip Details', description: 'Detailed itinerary coming soon.' }];
  }
  return Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    title: `Day ${i + 1}: Placeholder Title`,
    description: 'Detailed description for this day is coming soon.',
  }));
};

/**
 * The new centralized "single source of truth" for ALL trips on the website.
 * Contains all unique trips from all location files.
 */
export const allTrips: Trip[] = [
  //==========================================================================
  // DESTINATION: Dubai (from Dubai.tsx)
  //==========================================================================
 {
    slug: 'dubai-6d5n-with-adventure-activities',
    title: 'Dubai 6D5N with Adventure Activities',
    destination: 'Dubai',
    duration: '6 Days 5 Nights',
    price: '₹80000',
    imageUrl: '/cloned_media/23958420231018151140.png',
    gallery: [
      '/cloned_media/39041520231018151140.png',
      '/cloned_media/7920220231018151140.png',
      '/cloned_media/29595020231018151140.png',
      '/cloned_media/3374720231018151140.png',
      '/cloned_media/5536120231018151140.png',
      '/cloned_media/36505420231018151140.png',
      '/cloned_media/18498320231018151140.png',
      '/cloned_media/26992520231018151140.png',
      '/cloned_media/1165720231018151140.png',
      '/cloned_media/1285320231018151140.png',
      '/cloned_media/19078620231018151140.png'
    ],
    overview: '<h2>About Dubai Adventure Tour Package</h2><p>How about gaining a euphoric experience in the city of contrasts amidst ultra Modern skyscrapers, incredible skylines, giant shopping malls, serene artificial beach and crystal clear water, all at once? <a href="/trip/dubai" style="color:blue;">Dubai Tour Package</a> offers you a lifetime opportunity to Travel around Dubai, the futuristic city in the United Arab Emirates that offers a treasure trove of tourist attractions to visitors, and while you are embracing liberal views of the city immerse yourself in the taste of unique Arabic cuisine. From the breathtaking green waters of Dubai Marina, encompassed by breathtaking architectural feats, to the Burj Khalifa, which is a global symbol and an evidence of how ambitious this city is, it always leaves one in awe.</p><p>After completing a 25 year journey of transformation, from a vast desert with a few tiny villages to an emerging global city, Dubai is a dream turned reality. This glamorous city of the United Arab Emirates is known for its festivals and concerts by international artists. While embracing modernity, Dubai hasn’t forgotten its cultural roots through its traditional souks, where the aroma of spices and the sparkling gold beckon helps travelers experience the city\'s rich heritage.</p><p>But Dubai is not just a city for travelers who love scenic experiences, it also welcomes adventure enthusiasts with its energy fueled rides in the Ferrari world that will boost your adrenaline rush. From feeling like the characters of fast and furious in the Ferrari world to skydiving from soaring heights of the building and erasing your fears forever, Dubai is a true adventure land.</p> <p>After reaching Dubai don\'t hesitate to take a dose of high energy and hop on to the Zipline next to Burj Khalifa, do flyboarding, take a close look at sharks while skydiving and the list doesn’t stop here because you can also get a chance to ride across the desert of Dubai in Hot Air Balloon. It\'s time for you to put a check mark across Dubai on your bucket list while Go4Explore’s Dubai Tour Package awaits your arrival.</p><h3>Top attractions to visit During Dubai Adventure Tour</h3><ul><li><strong>Dubai Frame:</strong> The Dubai Frame is a famous landmark located in Zabeel Park, Dubai, United Arab Emirates. Opened in January 2018, it is an impressive architectural structure that resembles a giant picture frame.</li><li><strong>Miracle Garden:</strong> The Dubai Miracle Garden is a stunning botanical garden located in the district of Dubailand, Dubai, United Arab Emirates. It is the world\'s largest natural flower garden, featuring over 50 million flowers and 250 million plants.</li><li><strong>Burj Al Arab:</strong> The very luxurious Burj Al Arab is found in Dubai that is one of the tallest hotels worldwide with its underwater dining experiences and rides on Rolls-Royce. The Mall of Emirates at Ski Dubai—the Middle East’s foremost indoor skiing center—is a shopper’s paradise as it has over 630 retail outlets, restaurants and entertainment facilities.</li><li><strong>Dubai Aquarium:</strong> At the Dubai Aquarium, one of the biggest suspended aquariums globally, technology and nature come together as over 33 thousand sea creatures are placed in its ten million liter tank enabling visitors to explore an underwater zoo as well. The biggest picture frame ever made called Dubai Frame allows people to see both the old town and modern skyline of this city.</li><li><strong>Abu Dhabi:</strong> The capital city also offers equally stunning architectural masterpieces, luxurious ways of life as well religiously significant mosques. From being a paradise to dessert lovers to offering a chance to treat your eyes with extraordinarily stunning deluxe and sights of the city.</li><li><strong>Ferrari World:</strong> An <a href="/trips/dubai-6d5n-with-adventure-activities" style="color:blue;">Dubai adventure tour</a> through the inaugural theme park operated under the Ferrari brand name opening its doors in 2010. This place is also home to Formula Rossa which is rated as the world\'s fastest roller coaster and Flying Aces regarded as the highest roller coaster loop under a space frame roof.</li></ul><h3>Adventurous Things to do in Dubai</h3><ul><li>The Burj Khalifa is the world’s tallest building from which one can have breathtaking panoramic views of the city and be amazed by its stunning skyline.</li><li>If you want to go to some of the biggest shopping centers in the world, then you must visit the Dubai Mall which is like a maze where people can hang out, eat their meals or even see an aquarium, go ice-skating as well as visit indoor theme parks.</li><li>When going for desert safari, you will get thrilled during dune bashing, camel riding or sandboarding and then take a traditional Arabic dinner under the stars at a Bedouin-style camp. Make your way through golden sand dunes of Dubai in vehicles for around 30-40 mins. Amidst dunes and tents explore the thrilling desert adventure. An Arabian Nights ambiance under starry skies.</li><li><a href="https://en.wikipedia.org/wiki/IMG_Worlds_of_Adventure" style="color:blue;" rel="noopener noreferrer" target="_blank">IMG Worlds of Adventure</a> offers visitors with some of the most amazing and thrilling rides like Ride of Gumball, an interactive ride that lets you shoot at targets and score points, Adventure Time - The Ride of OOO with Finn &amp; Jake, a rail ride to the Land of Ooo, and 5D cinema of Ben 10 5D Hero Time.</li><li>World’s largest natural flower garden The Dubai Miracle Garden has over 50 million flowers arranged into unique designs and patterns using over 250 million plants.</li><li>Go to the Gold Souk that is famous for all of gold, silver and precious stone jewelry; try bargaining for a keepsake too.</li><li>Find out how Al Fahidi Fort was transformed into Dubai Museum; learn more about this transformation among others when you visit through this ancient fort in the whole city of Dubai.</li></ul><h3>How to reach Dubai from India</h3><ul><li><strong>Airways:</strong> Flights for Dubai prominently fly from International airports of India and it takes around 2 to 3 hours to reach your dream destination.</li><li><strong>Roadways:</strong> After reaching Oman, Abu Dhabi, Sharjah, Ajman, Masafi you board a car or bus and reach Dubai, the futuristic city.</li></ul><h3>Best time to visit Dubai</h3><ul><li><strong>April to September:</strong> Dubai is considered as a hot region with dry winds due to deserts so it is advised to avoid these months.</li><li><strong>November to February:</strong> Though it is favorable to reach Dubai at all times, November to February is the best time to visit because of its pleasant weather. This calming weather only enhances your travel experience.</li></ul><p>Explore our popular Dubai Tour Packages: <a href="/trips/dubai-5d4n-with-ferrari-world" style="color:blue;">Dubai Abu Dhabi City Tour with Ferrari World</a>, <a href="/trips/dubai-7d6n" style="color:blue;">Dubai 7 Days Tour</a>, and <a href="/trips/dubai-4d3n" style="color:blue;">Dubai 4 Days Tours</a></p>',

    itinerary: [
      { 
        day: 0, 
        title: 'Journey Begins | Dubai Arrival', 
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Dubai and say goodbye to India.</li><li>After landing in Dubai and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to our comfy hotel and have some leisure.</li><li>In the evening (around 7:00 pm), we’ll pick you up from the hotel and take you out to Marina Cruise. Experience 2hrs cruising in Dubai Marina and chill with welcome drinks on arrival, Arabic sweets, fresh fruits, unlimited soft drinks, juice, tea/coffee and much more. The lower deck of this cruise is fully air conditioned and the upper deck is open air.</li><li>Relish upon scrumptious buffet dinner (both veg &amp; non-veg dishes) along with live music and entertaining dance shows.</li><li>Post a leisure filled cruise experience, you’ll be dropped off at your hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 1, 
        title: 'Dubai City Tour | Desert Safari with BBQ Dinner', 
        description: '<ul><li>Wake up early in the morning and post breakfast, hop on to your vehicle for an exciting Dubai city tour (half-day).</li><li>This exploratory city tour will start from the cultural landmark of Dubai, the Jumeirah Mosque, further taking you through the Jumeirah Beach Road.</li><li>Visit other major attractions in Dubai namely Burj Al Arab, Souq Madinat, Mall of the Emirates. You will travel down the Sheikh Zayed Road.</li><li>In the evening (around 3:00 pm), we’ll pick you up for Dubai’s famous desert safari. Head out for a thrilling desert safari in Arabian sandy desert and watch a super amazing belly dance show with tantra and fire show.</li><li>Relish upon a scrumptious buffet dinner and drive back to our hotel. Overnight stay at the hotel.</li></ul>' 
      },
      { 
        day: 2, 
        title: 'Burj Khalifa 124th Floor with Dubai Aquarium & Underwater Zoo', 
        description: '<ul><li>Post a delightful breakfast, drive towards Burj Khalifa and ride up to the 124th floor observation deck in a high-speed elevator. With the help of telescopes watch Dubai\'s major attraction fountain show.</li><li>Stroll through the Dubai Aquarium to see interesting marine life with over 10 million different marine animals such as 300+ sharks and rays. This aquarium is a 48-meter tunnel that gives you a fascinating 270-degree view of the massive aquarium.</li><li>Drive back to our hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 3, 
        title: 'Abu Dhabi City Tour - Grand Mosque + Ferrari World', 
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, we will head out for the Abu Dhabi city tour.</li><li>Visit Sheikh Zayed Grand Mosque, recognised as one of the world’s largest mosques and an architectural masterpiece that beautifully combines Islamic architecture and design.</li><li>Post city tour we will move towards Ferrari World. Ferrari World transports you to a world of high-speed drifting supercars. The Family, F1, Adventure, Italian, and Welcome Zones are among the five spectacular zones with over 40 breathtaking rides and experiences.</li><li>Drive back to our hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 4, 
        title: 'Atlantis Aquaventure Water Park & Lost Chamber', 
        // This is the one from your screenshot, now with bullet points
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, we will head out for Atlantis Aquaventure Water Park &amp; Lost Chamber.</li><li>Indulge in various exciting activities such as a 90-foot slide, rafting through the ship tunnel, and much more.</li><li>Inside the Lost Chambers Aquarium, get to know about the mythical city of the Lost City of Atlantis. Witness sharks, stingrays, piranhas, lobsters, and seahorses as you walk through a network of underwater glass tunnels.</li><li>Post a great exploratory day, return to your hotel followed by an overnight stay.</li></ul>' 
      },
      { 
        day: 5, 
        title: 'Goodbye Dubai | Depart for Homeland', 
        description: '<ul><li>Wake up in the morning and post breakfast, check-out from our hotel and depart for the Dubai Future Museum tour.</li><li>Drive towards the airport and flyback to your respective destinations with the mesmerizing views and memories to cherish forever.</li></ul>' 
      }
    ],
    // --- This remains a string[] to match the interface ---
    inclusions: [
      'Accommodation in a 3 star Hotel for 5 Nights.',
      'Daily buffet Breakfast at Hotel & 2 Dinners.',
      'Dubai airport to Hotel transfers on Pvt basis and vice versa.',
      'Half-day Dubai guided city tour on SIC basis.',
      'Dubai cruise with Dinner and transfers on SIC basis',
      'Desert safari with BBQ Dinner & live shows.',
      'Burj Khalifa 124th floor non prime time with transfers on SIC basis.',
      'Abu Dhabi city tour + Ferrari World visit.',
      'Atlantis Aquaventure Water Park & Lost Chambers',
      'Museum of the Future and Dubai Frame (only visit)',
      'Visa assistance.'
    ],
    // --- This remains a string[] to match the interface ---
    exclusions: [
      'Any kind of personal expense.',
      'Anything (meals, transport & services) that are not mentioned in the above ‘Inclusions’ section.',
      'Museum/Monument entry fee/city tax.',
      'Travel Insurance.',
      '5% GST & 5% TCS (TCS can be claimed in full in your ITR).'
    ],
  },
  {
    slug: 'dubai-5d4n-with-ferrari-world',
    title: 'Dubai 5D4N with Ferrari World',
    destination: 'Dubai',
    duration: '5 Days 4 Nights',
    price: '₹55000', // Updated price from HTML
    imageUrl: '/cloned_media/25318520231018150041.png', // Updated main image from HTML
    gallery: [ // Added gallery from HTML
      '/cloned_media/24093020231018150041.png',
      '/cloned_media/39155620231018150041.png',
      '/cloned_media/15107120231018150041.png',
      '/cloned_media/39311320231018150041.png',
      '/cloned_media/16661120231018150041.png',
      '/cloned_media/37830820231018150041.png',
      '/cloned_media/6615420231018150041.png',
      '/cloned_media/18893720231018150041.png',
      '/cloned_media/14715320231018150041.png',
      '/cloned_media/38351420231018150041.png',
      '/cloned_media/27333920231018150041.png'
    ],
    overview: '<h2>About Ferrari World Dubai Tour Package 5 Days 4 Nights</h2><p>Fuel your wanderlust and get ready to experience the ultimate fusion of luxury, thrill, and Arabian grandeur on our spectacular Dubai 5D4N with Ferrari World Tour Package! This meticulously crafted adventure promises to leave you spellbound from the moment you set foot in this dazzling desert metropolis.</p><p>Try to picture how it would be to wake up in one of the posh hotels in Dubai with iconic towers and structures standing majestically all over. You will feel like the belle of the ball, experiencing the charm of the city and the luxuries of the five-star treatment and the shiniest attractions, as if moved from a fairy tale.</p><p>But that’s not all, it cannot get any better as the next stop in the tour is Ferrari World! Fasten your seat belts for a quite thrilling ride as Eight Acres is all set to have the world’s largest indoor theme park where fans can experience the awesome Italian supercar. Enticing heart-recoiling outer space like rollercoasters to ultimate car lover experiences through myriad displays on Ferrari’s glorious past, this is a real treat.</p><p>Try yourself behind the wheel, let a professional guide drive you and enjoy the sand rush along with the astonishing view of the sunset on the sand dunes. In the evening after sunset, you are welcomed to the medium of Cultural live show, Delicious Arabic Dinner and Warm Hospitality of Bedouin King Size Tent.</p><p>Don\'t miss this once in a lifetime opportunity to catch a glimpse of the over the top luxury that <a href="/trip/dubai" style="color:blue;">Dubai Tour Package</a> has to offer and the amazing desert adventures and the deep rooted cultural heritage. Don’t miss this opportunity to be part of the “Dubai 5D4N with Ferrari World Tour Package so that you can be part of the moment to cherish for some time to come!</p><h3>Best Places to Visit in Dubai with Ferrari World Tour Package</h3><ul><li><strong>Grand Mosque:</strong> The Sheikh Zayed Grand Mosque is undoubtedly one of the most stunning architectural resources, and one of the major attractions in Abu Dhabi. This exquisite mosque is known as Sheikh Zayed bin Sultan Al Nahyan mosque and it is a perfect example of the Islamic architecture.</li><li><strong>Ferrari World:</strong> Ferrari World located at Yas Island of Abu Dhabi, is a Land of Legends that is wholly devoted to Ferrari’s sports cars. It is an enclosed structure that houses some of the tallest and fastest that will appeal to visitors seeking exciting experiences as well as the car lovers.</li><li><strong>Abu Dhabi City:</strong> This city is different for its contrast between oil industry references and cutting-edge architecture: it is the capital city of the United Arab Emirates. When you are roaming around the city, you are going to note that it has large elegant buildings that are complemented by towering skyscrapers and remarkable landmarks.</li><li><strong>Dubai Desert Safari:</strong> Head for Desert to enjoy Dune Bashing and also for sand boarding, Camel Riding and after all of this to enjoy the Authentic Arabian Barbeque Dinner under the stars.</li><li><strong>Dubai Aquarium and Underwater Zoo:</strong> Situated in the ever-distinguished Dubai Mall, Dubai Aquarium brings into reality the presence of thousands of global fish species, some of which include sharks, stingrays and many more. One of the sites; it even provides a walk-through tunnel that will give the guests an excellent view of the sea creatures.</li><li><strong>Burj Khalifa:</strong> It is an awesome structure with Standing Height: 828 meters and that makes it the tallest structure globally. On the 124th floor as well as the 148th floor you may go to the observation decks, which offer splendid views of the skyline of the city.</li><li><strong>Dubai Mall:</strong> A visit to the Dubai Mall will reveal that this is one of biggest shopping malls in the entire globe. It offers a stunning number of outlets, an Oceanarium, the Dubai Rink, an Ice- Skating Rink as well as the fabulous Dubai Fountain – the world’s largest dancing water fountain system, which is accompanied by music every evening.</li><li><strong>Dubai Museum:</strong> Located in the Al Fahidi Fort, this <a href="https://en.wikipedia.org/wiki/Dubai_Museum" style="color:blue;" rel="noopener noreferrer" target="_blank">Dubai Museum</a> provides a great view over the city’s historical and cultural development. For history lovers, you can check out the pre-oil era of the UAE with an Emirati-style village, architecture, and even artifacts explaining the development of the country from pearl diversity to an iconic city we know today.</li><li><strong>Dubai Desert Safari:</strong> Be adventurous by going for a dune bashing and follow this by sand boarding, camel riding with a chance to enjoy a ‘shawarma’ Arabia styled barbeque dinner.</li><li><strong>Dubai Aquarium and Underwater Zoo:</strong> The Dubai Mall Aquarium is another fascinating attraction that will take your breath away when you set your eyes on it. This is the largest aquarium with thousands of fish, sharks, stingrays and so on. If you want, you can spend some time in an underwater tunnel, where you can meet the locals from a really close distance.</li></ul><h3>Top Things to do in Dubai Tour</h3><p><strong>1. Desert Safari:</strong> Experience the thrills of sand dune bashing with others that include sand boarding, camel riding along with having a delicious Barbeque Arabic cuisine dinner under the light of the star.</p><p><strong>2. Skydiving:</strong> You potentially release endorphins for the biggest of leaps and feel the free fall as you go skydiving over the Palm Jumeirah or over the Dubai desert.</p><p><strong>3. Dubai Fountain Show:</strong> Take a tour around the city and behold the light and water show where water sprouts from the fountain in sync with the tunes and glow from the creativity of Dubai.</p><p><strong>4. Ski Dubai:</strong> Have a fun and unique experience of skiing and snowboarding in the interior, with actual snow and an opportunity to meet with and take pictures with a group of penguins.</p><p><strong>5. Dhow Cruise Dinner:</strong> Savor an Arabic dinner onboard a wooden boat or dhow – The wooden boats or dhows that you can rent are designed in Arabic style, and you can take them for a ride along the Dubai Creek or the Marina while having a traditional Arabic buffet meal.</p><p><strong>6. Burj Khalifa At The Top:</strong> Go up to the 124th and the 148 observational floors of the Burj Khalifa Tower to get a broad view of the city.</p><p><strong>7. Dubai Aquarium and Underwater Zoo:</strong> Experience the unusual atmosphere of the water-filled kingdom and enjoy the walk through the underwater tunnel in the Dubai Aquarium.</p><p><strong>8. Dubai Shopping Festival:</strong> Benefit from great offers and promotions as well as being entertained during the Dubai Shopping Festival annually.</p><p><strong>9. Dubai Miracle Garden:</strong> Visit this fascinating garden which features the region’s nurseries showcasing their beautiful flower arrangements and legally-required for weddings manifestations – lifelike floral creations meant for marriage ceremonies.</p><p><strong>10. Dubai Marina Yacht Tour: </strong>Try taking a private yacht rental or a water taxi service to get the gorgeous view of Dubai Marina, as well as the skyline.</p><p><strong>11. Dubai Parks and Resorts:</strong> Propose a day trip to one of the many fun filled amusement places in Dubai eg. Dubai Parks and Resorts which consists of Motiongate, Bollywood Parks, Legoland and more.</p><p><strong>12. Cooking Classes:</strong> Discover the beauty and enigma of Arabic and learn the delicacies of Emirates with a personal cooking class with local meals.</p><p><strong>13. Desert Camping:</strong> The glamorous camping where you will be taken back to the ancient Bedouin life with lots of actions, including dinner round the fire, music or even stars gazing.</p><p><strong>14. Helicopter Tour:</strong> Feel free to explore the city in a helicopter and experience the sightseeing of Dubai’s achievements and magnificent panoramas.</p><p><strong>15. Hot Air Balloon Ride:</strong> Take a hot air balloon tour in the morning to evening to appreciate the mesmerizing beauty of Dubai skyline or the sand dunes.</p><h3>How to Reach Dubai from India</h3><p><strong>By Air:</strong> This is the most convenient and fastest way to reach Dubai from India. Currently, the Leading Airlines operating within the region have scheduled daily flights that connect major Indian cities such as Delhi, Mumbai, Bengaluru, Chennai, and Hyderabad to Dubai. The main line carries passengers, some of the numerous airlines include Emirates airlines, Air India, Indigo, Spice Jet, Vistara among others. The length of a flight spans from 3 to 4 hours based on the city of takeoff and the destination area.</p><h3>Best Time to Visit Dubai</h3><p><strong>Peak Season (November to March):</strong> Dubai\'s peak tourist season offers comfortable temperatures between 20°C-28°C. It\'s ideal for outdoor activities, beach days, and sightseeing without extreme heat. However, expect higher hotel rates and crowds during this popular winter period.</p><p><strong>Off-Peak Season (June to August):</strong> Summer in Dubai is scorchingly hot, with temperatures exceeding 40°C. While not suitable for outdoor exploration, it\'s a great time to find discounted hotels and flights. Indoor attractions like malls and theme parks are popular escapes from the heat.</p><p>Other related tour packages: <a href="/trips/dubai-6d5n-with-adventure-activities" style="color:blue;">Dubai Adventure Tour Packages</a>, <a href="/trips/dubai-4d3n" style="color:blue;">Dubai 4 Days Tour Package </a>, <a href="/trips/dubai-5d4n" style="color:blue;">Dubai 5 Days Tour Package </a>, <a href="/trips/dubai-6d5n" style="color:blue;">Dubai 6 Days Tour Package </a>, <a href="/trips/dubai-7d6n" style="color:blue;">Dubai 7 Days Tour Package </a></p>',
    itinerary: [ // Updated itinerary with HTML formatting
      { 
        day: 0, 
        title: 'Journey Begins | Dubai Arrival', 
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Dubai and say goodbye to India.</li><li>After landing in Dubai and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to our comfy hotel and have some leisure.</li><li>In the evening (around 7:00 pm), we’ll pick you up from the hotel and take you out to Marina Cruise. Experience 2hrs cruising in Dubai Marina and chill with welcome drinks on arrival, Arabic sweets, fresh fruits, unlimited soft drinks, juice, tea/coffee and much more. The lower deck of this cruise is fully air conditioned and the upper deck is open air.</li><li>Relish upon scrumptious buffet dinner (both veg &amp; non-veg dishes) along with live music and entertaining dance shows.</li><li>Post a leisure filled cruise experience, you’ll be dropped off at your hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 1, 
        title: 'Dubai City Tour | Desert Safari with BBQ Dinner', 
        description: '<ul><li>Wake up early in the morning and post breakfast, hop on to your vehicle for an exciting Dubai city tour (half-day).</li><li>This exploratory city tour will start from the cultural landmark of Dubai, the Jumeirah Mosque, further taking you through the Jumeirah Beach Road.</li><li>Visit other major attractions in Dubai namely Burj Al Arab, Souq Madinat, Mall of the Emirates. You will travel down the Sheikh Zayed Road.</li><li>In the evening (around 3:00 pm), we’ll pick you up for Dubai’s famous desert safari. Head out for a thrilling desert safari in Arabian sandy desert and watch a super amazing belly dance show with tantra and fire show.</li><li>Relish upon a scrumptious buffet dinner and drive back to our hotel. Overnight stay at the hotel.</li></ul>' 
      },
      { 
        day: 2, 
        title: 'Burj Khalifa 124th Floor with Dubai Aquarium & Underwater Zoo', 
        description: '<ul><li>Post a delightful breakfast, drive towards Burj Khalifa and ride up to the 124th floor observation deck in a high speed elevator. With the help of telescopes watch Dubai\'s major attraction fountain show.</li><li>Stroll through the Dubai Aquarium to see interesting marine life with over 10 million different marine animals such as 300+ sharks and rays. This aquarium is a 48 meter tunnel that gives you a fascinating 270 degree view of the massive aquarium.</li><li>Drive back to our hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 3, 
        title: 'Abu Dhabi City Tour - Grand Mosque + Ferrari World', 
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, we will head out for the Abu Dhabi city tour.</li><li>Visit Sheikh Zayed Grand Mosque, recognised as one of the world’s largest mosques and an architectural masterpiece that beautifully combines Islamic architecture and design.</li><li>Post city tour we will move towards Ferrari World. Ferrari World transports you to a world of high-speed drifting supercars. The Family, F1, Adventure, Italian, and Welcome Zones are among the five spectacular zones with over 40 breathtaking rides and experiences.</li><li>Drive back to our hotel followed by a much-needed overnight stay.</li></ul>' 
      },
      { 
        day: 4, 
        title: 'Goodbye Dubai | Depart for Homeland', 
        description: '<ul><li>Wake up in the morning and post breakfast, check-out from our hotel and depart for the Dubai Future Museum tour.</li><li>Drive towards the airport and flyback to your respective destinations with the mesmerizing views and memories to cherish forever.</li></ul>' 
      }
    ],
    inclusions: [ // Kept as string[]
      'Accommodation in a 3 star Hotel for 4 Nights.',
      'Daily buffet Breakfast at Hotel & 2 Dinners.',
      'Dubai airport to Hotel transfers on Pvt basis and vice versa.',
      'Half-day Dubai guided city tour on SIC basis.',
      'Dubai cruise with Dinner and transfers on SIC basis',
      'Desert safari with BBQ Dinner & live shows.',
      'Burj Khalifa 124th floor non prime time with transfers on SIC basis.',
      'Abu Dhabi city tour + Ferrari World visit.',
      'Dubai Aquarium + Underwater Zoo on SIC basis.',
      'Visa assistance.'
    ],
    exclusions: [ // Kept as string[]
      'Any kind of personal expense.',
      'Anything (meals, transport & services) that are not mentioned in the above ‘Inclusions’ section.',
      'Museum/Monument entry fee/city tax.',
      'Travel Insurance.',
      '5% GST & 5% TCS (TCS can be claimed in full in your ITR).'
    ],
  },
  {
    slug: 'dubai-6d5n',
    title: 'Dubai - 6D5N',
    destination: 'Dubai',
    duration: '6 Days 5 Nights',
    price: '₹64999',
    originalPrice: '₹69999',
    discount: '₹5,000',
    imageUrl: '/cloned_media/24856720230328075635.png',
    overview: 'Discover the highlights of Dubai in this comprehensive 6-day tour, from the Burj Khalifa to traditional souks.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Burj Khalifa Ticket', 'Dhow Cruise'],
    exclusions: ['Flights', 'Visa Fees', 'Personal Expenses'],
  },
  {
    slug: 'dubai-7d6n',
    title: 'Dubai 7D6N',
    destination: 'Dubai',
    duration: '7 Days 6 Nights',
    price: '₹90000',
    imageUrl: '/cloned_media/26941320231018151503.png',
    overview: 'An extended 7-day journey to explore Dubai and its surroundings, including a day trip to Abu Dhabi.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Abu Dhabi Day Trip', 'Desert Safari'],
    exclusions: ['Flights', 'Visa Fees', 'Personal Expenses'],
  },
  {
    slug: 'dubai-5d4n',
    title: 'Dubai 5D4N',
    destination: 'Dubai',
    duration: '5 Days 4 Nights',
    price: '₹55000',
    imageUrl: '/cloned_media/35782520231018150638.png',
    overview: 'A classic 5-day Dubai experience, perfect for first-time visitors looking to see the city\'s main attractions.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'City Tour', 'Dhow Cruise'],
    exclusions: ['Flights', 'Visa Fees', 'Personal Expenses'],
  },
  {
    slug: 'dubai-4d3n',
    title: 'Dubai-4D3N',
    destination: 'Dubai',
    duration: '4 Days 3 Nights',
    price: '₹42000',
    originalPrice: '₹50000',
    discount: '₹8,000',
    imageUrl: '/cloned_media/25294820231018145803.png',
    overview: 'A quick 4-day getaway to experience the best of Dubai, ideal for a long weekend.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'City Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Personal Expenses'],
  },

  //==========================================================================
  // DESTINATION: Rajasthan (from Rajasthan.tsx)
  //==========================================================================
  {
    slug: 'rajasthan-explorer-jaipur-udaipur-jodhpur-jaisalmer',
    title: 'Rajasthan Explorer - Jaipur Udaipur Jodhpur Jaisalmer',
    destination: 'Rajasthan',
    duration: '8 Days 7 Nights',
    price: '₹24000',
    originalPrice: '₹28000',
    discount: '₹4,000',
    imageUrl: '/cloned_media/36156220250913134901.png',
    overview: 'A grand tour of Rajasthan\'s most iconic cities. Experience the culture of Jaipur, the lakes of Udaipur, the blue city of Jodhpur, and the desert of Jaisalmer.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Accommodation', 'Intercity Transfers', 'Sightseeing as per itinerary'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'udaipur-kumbhalgarh',
    title: 'Udaipur & Kumbhalgarh',
    destination: 'Rajasthan',
    duration: '3 Days 2 Nights',
    price: '₹7500',
    originalPrice: '₹8500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/29769220240826125805.png',
    overview: 'A short trip to the city of lakes, Udaipur, and a visit to the majestic Kumbhalgarh Fort, a UNESCO World Heritage Site.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Hotel Stay', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'jaisalmer-and-longewala',
    title: 'Jaisalmer and Longewala',
    destination: 'Rajasthan',
    duration: '3 Days 2 Nights',
    price: '₹7500',
    originalPrice: '₹8500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/15931420240830095731.png',
    overview: 'Experience the Golden City of Jaisalmer, enjoy a desert safari, and pay respects at the historic Longewala border post.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Camp Stay', 'Hotel Stay', 'Transfers', 'Desert Safari'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'rajasthan-backpacking-udaipur-jodhpur-jaisalmer',
    title: 'Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer',
    destination: 'Rajasthan',
    duration: '5 Days 4 Nights',
    price: '₹22000',
    imageUrl: '/cloned_media/18890720240830122755.png',
    overview: 'A backpacking adventure through three of Rajasthan\'s most captivating cities: Udaipur, Jodhpur, and Jaisalmer.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Intercity Bus Tickets', 'Guided Tours'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'pushkar-holi-special',
    title: 'Pushkar Holi Special',
    destination: 'Rajasthan',
    duration: '2 Days 1 Night',
    price: '₹6999',
    imageUrl: '/cloned_media/10269820250204094556.png',
    overview: 'Experience the vibrant and unique Holi celebrations in the holy city of Pushkar. A trip filled with colors, music, and culture.',
    itinerary: createItinerary('2 Days 1 Night'),
    inclusions: ['Camp/Hotel Stay', 'Transfers from Jaipur/Delhi', 'Holi Celebration Entry'],
    exclusions: ['Meals', 'Personal Expenses'],
  },
  {
    slug: 'udaipur-mount-abu-trip-from-delhi',
    title: 'Udaipur & Mount Abu Trip From Delhi',
    destination: 'Rajasthan',
    duration: '4 Days 3 Nights',
    price: '₹11999',
    imageUrl: '/cloned_media/2774120230716155320.png',
    overview: 'A refreshing journey from Delhi to the city of lakes, Udaipur, and Rajasthan\'s only hill station, Mount Abu.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Transfers from Delhi', 'Hotel Stay', 'Sightseeing'],
    exclusions: ['Entry Fees', 'Meals'],
  },
  {
    slug: 'udaipur',
    title: 'Udaipur',
    destination: 'Rajasthan',
    duration: '3 Days 2 Nights',
    price: '₹7999',
    originalPrice: '₹8999',
    discount: '₹1,000',
    imageUrl: '/cloned_media/29224320230701062448.png',
    overview: 'A quick weekend escape to the romantic city of Udaipur. Explore its palaces, lakes, and vibrant markets.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Hotel Stay', 'Sightseeing', 'Airport/Station Transfers'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer',
    title: 'Rajasthan Backpacking From Delhi - Udaipur-Jodhpur-Jaisalmer',
    destination: 'Rajasthan',
    duration: '5 Days 4 Nights',
    price: '₹29999',
    imageUrl: '/cloned_media/37210520230716153323.png',
    overview: 'An all-inclusive backpacking trip from Delhi covering the essential trio of Udaipur, Jodhpur, and Jaisalmer.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Transfers from Delhi', 'Hostel/Guesthouse Stay', 'Guided Tours'],
    exclusions: ['Entry Fees', 'Meals'],
  },
  {
    slug: 'rajasthan-backpacking-pushkar-udaipur-bikaner',
    title: 'Rajasthan Backpacking - Pushkar-Udaipur-Bikaner',
    destination: 'Rajasthan',
    duration: '6 Days 5 Nights',
    price: '₹22000',
    imageUrl: '/cloned_media/31962220230716154259.png',
    overview: 'Explore a different circuit of Rajasthan, from the holy city of Pushkar to the lakes of Udaipur and the desert city of Bikaner.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Intercity Bus Tickets', 'Sightseeing'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },

  //==========================================================================
  // DESTINATION: Kerala (from Kerala.tsx)
  //==========================================================================
  {
    slug: 'kerala-backpacking-4n5d',
    title: 'Kerala Backpacking 4N5D',
    destination: 'Kerala',
    duration: '5 Days 4 Nights',
    price: '₹15000',
    originalPrice: '₹16500',
    discount: '₹1,500',
    imageUrl: '/cloned_media/16514620250619134346.png',
    overview: 'A backpacker\'s dream trip through God\'s Own Country. Explore Kochi, Munnar, and the backwaters of Alleppey.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Transfers', 'Houseboat Stay (1 Night)'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'weekend-escape-to-kerala-3d2n',
    title: 'Weekend Escape to Kerala 3D2N',
    destination: 'Kerala',
    duration: '3 Days 2 Nights',
    price: '₹8750',
    imageUrl: '/cloned_media/40386720240717080101.png',
    overview: 'A short and sweet weekend getaway to experience the essence of Kerala, perfect for a quick refresh.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Sightseeing in Kochi/Munnar'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'vibrant-kerala-retreat-4d3n',
    title: 'Vibrant Kerala Retreat 4D3N',
    destination: 'Kerala',
    duration: '4 Days 3 Nights',
    price: '₹14700',
    imageUrl: '/cloned_media/26901420240717095829.png',
    overview: 'A 4-day retreat to explore the vibrant culture, lush tea gardens, and serene backwaters of Kerala.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'All Transfers', 'Breakfast'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Lunches and Dinners'],
  },
  {
    slug: 'mesmerizing-kerala-getaway-4n5d',
    title: 'Mesmerizing Kerala Getaway 4N5D',
    destination: 'Kerala',
    duration: '5 Days 4 Nights',
    price: '₹17200',
    imageUrl: '/cloned_media/15154220240717101812.png',
    overview: 'A mesmerizing 5-day getaway covering the hills of Munnar, the wildlife of Thekkady, and the backwaters of Alleppey.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'All Transfers', 'Breakfast'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Lunches and Dinners'],
  },
  {
    slug: 'kerala-backpacking',
    title: 'Kerala Backpacking',
    destination: 'Kerala',
    duration: '7 Days 6 Nights',
    price: '₹27500',
    imageUrl: '/cloned_media/2193820220831123359.png',
    overview: 'A week-long backpacking adventure across Kerala, from the beaches of Varkala to the tea estates of Munnar.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Intercity Transfers', 'Houseboat Stay'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Meals'],
  },
  {
    slug: 'blissful-kerala-tour-5n6d',
    title: 'Blissful Kerala Tour 5N6D',
    destination: 'Kerala',
    duration: '6 Days 5 Nights',
    price: '₹25400',
    imageUrl: '/cloned_media/31979820240717110038.png',
    overview: 'A blissful 6-day tour designed for relaxation and rejuvenation, covering Kerala\'s most peaceful spots.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Resort/Hotel Stay', 'Houseboat Stay', 'All Transfers', 'Breakfast'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Lunches and Dinners'],
  },
  {
    slug: 'enchanting-expedition-of-kerala-6n7d',
    title: 'Enchanting Expedition of Kerala 6N7D',
    destination: 'Kerala',
    duration: '7 Days 6 Nights',
    price: '₹28600',
    imageUrl: '/cloned_media/16930020240717111059.png',
    overview: 'An enchanting 7-day expedition to explore the depths of Kerala\'s culture, nature, and cuisine.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'All Transfers', 'Breakfast', 'Cultural Show'],
    exclusions: ['Flights/Trains', 'Entry Fees', 'Lunches and Dinners'],
  },

  //==========================================================================
  // DESTINATION: Bhutan (from Bhutan.tsx)
  //==========================================================================
  {
    slug: 'bhutan-backpacking-7d6n',
    title: 'Bhutan Backpacking 7D6N',
    destination: 'Bhutan',
    duration: '7 Days 6 Nights',
    price: '₹35000',
    imageUrl: '/cloned_media/36969020250619061302.png',
    overview: 'A 7-day backpacking trip to the Land of the Thunder Dragon. Explore Paro, Thimphu, and Punakha on a budget.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Accommodation', 'Transfers', 'Permits (SDF)', 'Guided Tours'],
    exclusions: ['Flights', 'Meals', 'Entry Fees'],
  },
  {
    slug: 'bhutan-backpacking-8d7n',
    title: 'Bhutan Backpacking - 8D7N',
    destination: 'Bhutan',
    duration: '8 Days 7 Nights',
    price: '₹45000',
    imageUrl: '/cloned_media/12684520250619062221.png',
    overview: 'An extended 8-day backpacking journey to discover more of Bhutan\'s hidden gems, including the Phobjikha Valley.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Accommodation', 'Transfers', 'Permits (SDF)', 'Guided Tours'],
    exclusions: ['Flights', 'Meals', 'Entry Fees'],
  },
  {
    slug: 'wonders-of-bhutan',
    title: 'Wonders of Bhutan',
    destination: 'Bhutan',
    duration: '9 Days 8 Nights',
    price: '₹49350',
    imageUrl: '/cloned_media/42181520250527062231.png',
    overview: 'A 9-day tour to experience all the wonders of Bhutan, from the Tiger\'s Nest to the serene valleys.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hotel Stay', 'All Transfers', 'Permits (SDF)', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'discover-best-of-bhutan',
    title: 'Discover Best of Bhutan',
    destination: 'Bhutan',
    duration: '8 Days 7 Nights',
    price: '₹42735',
    imageUrl: '/cloned_media/30294720250527073739.png',
    overview: 'Discover the very best of Bhutan in this 8-day comprehensive tour, balancing culture, nature, and comfort.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'All Transfers', 'Permits (SDF)', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'joyful-escape-to-bhutan',
    title: 'Joyful Escape to Bhutan',
    destination: 'Bhutan',
    duration: '7 Days 6 Nights',
    price: '₹35490',
    imageUrl: '/cloned_media/18237020250527074633.png',
    overview: 'A joyful 7-day escape to Bhutan, focusing on the cultural highlights of Paro, Thimphu, and Punakha.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'All Transfers', 'Permits (SDF)', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'unforgettable-bhutan-getaway',
    title: 'Unforgettable Bhutan Getaway',
    destination: 'Bhutan',
    duration: '6 Days 5 Nights',
    price: '₹35490',
    imageUrl: '/cloned_media/12164220250527075548.png',
    overview: 'A 6-day getaway to create unforgettable memories in the magical kingdom of Bhutan.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'All Transfers', 'Permits (SDF)', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },

  //==========================================================================
  // DESTINATION: Leh Ladakh (from LehLadakh.tsx)
  //==========================================================================
  {
    slug: 'manali-leh-backpacking-bike-trip',
    title: 'Manali Leh Backpacking Bike Trip',
    destination: 'Leh Ladakh',
    duration: '8 Days 7 Nights',
    price: '₹30000',
    imageUrl: '/cloned_media/22840620250217141818.png',
    overview: 'The ultimate road trip! A backpacking bike adventure from Manali to Leh, crossing some of the world\'s highest motorable passes.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Bike Rental', 'Fuel', 'Accommodation', 'Mechanic Support'],
    exclusions: ['Flights', 'Personal Riding Gear', 'Entry Fees'],
  },
  {
    slug: 'leh-ladakh-backpacking-bike-trip',
    title: 'Leh Ladakh Backpacking Bike Trip',
    destination: 'Leh Ladakh',
    duration: '6 Days 5 Nights',
    price: '₹21000',
    imageUrl: '/cloned_media/36526420250217143451.png',
    overview: 'A classic Leh-based bike trip. Fly into Leh and explore Pangong Tso, Nubra Valley, and Khardung La on two wheels.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Bike Rental', 'Fuel', 'Accommodation', 'Inner Line Permits'],
    exclusions: ['Flights', 'Personal Riding Gear', 'Entry Fees'],
  },
  {
    slug: 'leh-ladakh-with-turtuk',
    title: 'Leh Ladakh with Turtuk',
    destination: 'Leh Ladakh',
    duration: '7 Days 6 Nights',
    price: '₹23000',
    imageUrl: '/cloned_media/34294120250217145015.png',
    overview: 'Explore the remote and beautiful village of Turtuk, India\'s northernmost village, along with Nubra and Pangong.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Accommodation', 'All Transfers (Innova/Tempo)', 'Inner Line Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'manali-leh-srinagar',
    title: 'Manali Leh Srinagar',
    destination: 'Leh Ladakh',
    duration: '10 Days 9 Nights',
    price: '₹32000',
    imageUrl: '/cloned_media/24468820250217151702.png',
    overview: 'The grand Himalayan road trip! Start in Manali, traverse Ladakh, and conclude your journey in the beautiful valley of Srinagar.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Accommodation', 'All Transfers (Innova/Tempo)', 'Inner Line Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'all-girls-manali-leh-trip',
    title: 'All Girls Manali Leh Trip',
    destination: 'Leh Ladakh',
    duration: '9 Days 8 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/722620230331052335.png',
    overview: 'A safe and exciting all-girls trip from Manali to Leh, exploring the best of the Himalayas with like-minded travelers.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Accommodation', 'All Transfers', 'Female Trip Lead', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'manali-leh-srinagar-backpacking-bike-trip',
    title: 'Manali Leh Srinagar Backpacking Bike Trip',
    destination: 'Leh Ladakh',
    duration: '10 Days 9 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/33122620250219135706.png',
    overview: 'The ultimate biker\'s dream. A 10-day backpacking bike trip covering the entire circuit from Manali to Leh to Srinagar.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Bike Rental', 'Fuel', 'Accommodation', 'Mechanic Support', 'Backup Vehicle'],
    exclusions: ['Flights', 'Personal Riding Gear', 'Entry Fees'],
  },
  {
    slug: 'srinagar-leh-manali',
    title: 'Srinagar Leh Manali',
    destination: 'Leh Ladakh',
    duration: '10 Days 9 Nights',
    price: '₹32000',
    imageUrl: '/cloned_media/8691320250217153005.png',
    overview: 'The classic Himalayan road trip in reverse. Start from the lush valleys of Srinagar, cross into the high-altitude desert of Ladakh, and descend to Manali.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Accommodation', 'All Transfers (Innova/Tempo)', 'Inner Line Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'leh-ladakh-with-umlingla-hanle',
    title: 'Leh Ladakh With Umlingla & Hanle',
    destination: 'Leh Ladakh',
    duration: '8 Days 7 Nights',
    price: '₹31500',
    imageUrl: '/cloned_media/20011020250217145838.png',
    overview: 'An adventurer\'s trip to the remote wonders of Ladakh. Visit the dark sky sanctuary of Hanle and conquer the mighty Umling La, one of the world\'s highest passes.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Accommodation', 'All Transfers (4x4)', 'Special Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'leh-ladakh-with-tso-moriri-turtuk',
    title: 'Leh Ladakh with Tso Moriri & Turtuk',
    destination: 'Leh Ladakh',
    duration: '8 Days 7 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/41654520230330173328.png',
    overview: 'An extensive 8-day trip covering Leh, Nubra, Turtuk, Pangong, and the high-altitude lake Tso Moriri.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Accommodation', 'All Transfers', 'Inner Line Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'all-girls-ladakh-trip-with-turtuk',
    title: 'All Girls Ladakh Trip with Turtuk',
    destination: 'Leh Ladakh',
    duration: '7 Days 6 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/37953920230331053627.png',
    overview: 'A 7-day all-girls adventure to Leh, Nubra, Pangong, and the unique village of Turtuk, led by a female trip captain.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Accommodation', 'All Transfers', 'Female Trip Lead', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'manali-leh-srinagar-with-umlingla-hanle',
    title: 'Manali Leh Srinagar With Umlingla & Hanle',
    destination: 'Leh Ladakh',
    duration: '12 Days 11 Nights',
    price: '₹38000',
    imageUrl: '/cloned_media/38552720250308073455.png',
    overview: 'The most comprehensive Ladakh road trip. 12 days covering Manali-Leh, Hanle, Umling La, and exiting via Srinagar.',
    itinerary: createItinerary('12 Days 11 Nights'),
    inclusions: ['Accommodation', 'All Transfers', 'Special Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },
  {
    slug: 'srinagar-leh-manali-with-umlingla-hanle',
    title: 'Srinagar Leh Manali With Umlingla & Hanle',
    destination: 'Leh Ladakh',
    duration: '12 Days 11 Nights',
    price: '₹38000',
    imageUrl: '/cloned_media/25238920250308075453.png',
    overview: 'The ultimate Ladakh circuit in reverse. Start in Srinagar, explore Leh, Hanle, Umling La, and finish in Manali.',
    itinerary: createItinerary('12 Days 11 Nights'),
    inclusions: ['Accommodation', 'All Transfers', 'Special Permits', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Entry Fees'],
  },

  //==========================================================================
  // DESTINATION: Bali (from Bali.tsx)
  //==========================================================================
  {
    slug: 'bali-backpacking',
    title: 'Bali Backpacking',
    destination: 'Bali',
    duration: '6 Days 5 Nights',
    price: '₹34999',
    imageUrl: '/cloned_media/12586020220805080100.png',
    overview: 'A fun and affordable backpacking trip to Bali. Explore Kuta, Ubud, and the surrounding islands with a group of fellow travelers.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Airport Transfers', 'Tours', 'Breakfast'],
    exclusions: ['Flights', 'Visa (if applicable)', 'Lunches & Dinners'],
  },
  {
    slug: 'bali-singapore',
    title: 'Bali & Singapore',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: '₹60000',
    imageUrl: '/cloned_media/13569520240211131131.png',
    overview: 'A tale of two destinations. Combine the tropical paradise of Bali with the futuristic metropolis of Singapore.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotels', 'Inter-country Flight', 'Airport Transfers', 'Sightseeing'],
    exclusions: ['Main Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'bali-ultimate-7-days',
    title: 'Bali - Ultimate 7 Days',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: '₹49999',
    imageUrl: '/cloned_media/37586820240127171448.png',
    overview: 'The ultimate 7-day Bali itinerary, covering the beaches, temples, rice terraces, and island life of Nusa Penida.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel/Villa Stay', 'Airport Transfers', 'Nusa Penida Day Trip', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners', 'Activity Fees'],
  },
  {
    slug: 'bali-malaysia',
    title: 'Bali & Malaysia',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: '₹85000',
    imageUrl: '/cloned_media/30531120240211130306.png',
    overview: 'Combine the serene beauty of Bali with the vibrant culture and city life of Kuala Lumpur, Malaysia.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotels', 'Inter-country Flight', 'Airport Transfers', 'Sightseeing'],
    exclusions: ['Main Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'romantic-escape-to-bali-couple-special',
    title: 'Romantic Escape to Bali - Couple Special',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/35865920250528074655.png',
    overview: 'A 7-day romantic escape designed for couples, featuring private villas, candlelit dinners, and serene beach experiences.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Private Villa Stay', 'Airport Transfers', 'Couples Massage', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'romantic-bali-vacation-couple-special',
    title: 'Romantic Bali Vacation - Couple Special',
    destination: 'Bali',
    duration: '5 Days 4 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/8336920250528080622.png',
    overview: 'A shorter 5-day romantic vacation for couples, focusing on relaxation and quality time in Bali\'s most beautiful settings.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel/Villa Stay', 'Airport Transfers', 'Couples Massage', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'bali-with-nusa-penida-honeymoon-special',
    title: 'Bali with Nusa Penida- Honeymoon Special',
    destination: 'Bali',
    duration: '6 Days 5 Nights',
    price: '₹45000',
    imageUrl: '/cloned_media/2244920231028132025.png',
    overview: 'A honeymoon special that combines the best of mainland Bali with the stunning landscapes of Nusa Penida island.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel/Villa Stay', 'Nusa Penida Tour', 'Fast Boat Tickets', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'bali-water-villa-stay',
    title: 'Bali - Water Villa Stay',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: '₹80000',
    imageUrl: '/cloned_media/3283720230323071307.png',
    overview: 'Experience ultimate luxury with a stay in an over-water villa in Bali. A 7-day trip for maximum relaxation.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Water Villa Accommodation', 'Airport Transfers', 'Full Board Meals'],
    exclusions: ['Flights', 'Activities'],
  },
  {
    slug: '6-days-tour-bali-with-balinese-spa',
    title: '6 Days tour Bali with Balinese Spa',
    destination: 'Bali',
    duration: '6 Days 5 Nights',
    price: '₹36500',
    imageUrl: '/cloned_media/6308820231028130935.png',
    overview: 'A relaxing 6-day Bali tour, highlighted by an authentic Balinese spa and wellness experience.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Balinese Spa Treatment', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'discover-best-of-bali',
    title: 'Discover Best of Bali',
    destination: 'Bali',
    duration: '8 Days 7 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/16982620250528074223.png',
    overview: 'An 8-day journey to discover the very best of Bali, from its northern volcanoes to its southern beaches.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'All Transfers', 'Comprehensive Sightseeing', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners', 'Entry Fees'],
  },
  {
    slug: 'joyful-treasures-of-bali',
    title: 'Joyful Treasures of Bali',
    destination: 'Bali',
    duration: '6 Days 5 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/34321720250528075636.png',
    overview: 'Uncover the joyful treasures of Bali in this 6-day tour, focusing on unique cultural experiences and hidden gems.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Cultural Workshops', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'bali-backpacking-10d9n',
    title: 'Bali Backpacking 10D9N',
    destination: 'Bali',
    duration: '10 Days 9 Nights',
    price: '₹54999',
    imageUrl: '/cloned_media/37178320220812091449.png',
    overview: 'The ultimate Bali backpacking experience. A 10-day trip covering Bali, Nusa Penida, and the Gili Islands.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hostel Stay', 'All Transfers & Fast Boats', 'Tours', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'bali-new-year-special',
    title: 'Bali New Year Special',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: '₹99999',
    originalPrice: '₹109999',
    discount: '₹10,000',
    imageUrl: '/cloned_media/40482320231026081450.png',
    overview: 'Ring in the New Year in paradise! A special 7-day trip to Bali with NYE celebrations included.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'NYE Party Entry', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'adventure-bali-trip-package',
    title: 'Adventure Bali Trip Package',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/25064020241022070910.png',
    overview: 'A 7-day trip packed with adventure: white water rafting, volcano hiking, surfing, and more.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'All Activities', 'Transfers', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },
  {
    slug: 'best-of-bali',
    title: 'Best of Bali',
    destination: 'Bali',
    duration: '7 Days 6 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/17819120241022065418.png',
    overview: 'A curated 7-day trip that combines the "Best of Bali," from cultural Ubud to the beaches of Seminyak.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Transfers', 'Sightseeing', 'Breakfast'],
    exclusions: ['Flights', 'Lunches & Dinners'],
  },

  //==========================================================================
  // DESTINATION: Kazakhstan (from Kazakhstan.tsx)
  //==========================================================================
  {
    slug: 'kazakhstan-backpacking',
    title: 'Kazakhstan Backpacking',
    destination: 'Kazakhstan',
    duration: '6 Days 5 Nights',
    price: '₹49999',
    imageUrl: '/cloned_media/13989620240831074222.png',
    overview: 'A backpacking adventure in Kazakhstan. Explore Almaty, Charyn Canyon, and Kolsai Lakes on a budget.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hostel Stay', 'Transfers', 'Guided Tours', 'Breakfast'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'kazakhstan-5d4n',
    title: 'Kazakhstan- 5D4N',
    destination: 'Kazakhstan',
    duration: '5 Days 4 Nights',
    price: '₹45000',
    imageUrl: '/cloned_media/10635320231113122348.png',
    overview: 'A 5-day tour focusing on Almaty and its stunning natural surroundings, including Big Almaty Lake.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Sightseeing', 'Breakfast'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'kazakhstan-uzbekistan',
    title: 'Kazakhstan & Uzbekistan',
    destination: 'Kazakhstan',
    duration: '8 Days 7 Nights',
    price: '₹110000',
    originalPrice: '₹120000',
    discount: '₹10,000',
    imageUrl: '/cloned_media/20043320240211074955.png',
    overview: 'A Central Asian adventure combining the modern and natural wonders of Kazakhstan with the ancient Silk Road cities of Uzbekistan.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotels', 'Inter-country Flight/Train', 'Transfers', 'Guided Tours'],
    exclusions: ['Main Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'almaty-5d4n-kazakhstan',
    title: 'Almaty 5D4N Kazakhstan',
    destination: 'Kazakhstan',
    duration: '5 Days 4 Nights',
    price: '₹39999',
    imageUrl: '/cloned_media/25789620240219080516.png',
    overview: 'A quick 5-day trip focused entirely on Almaty, Kazakhstan\'s cultural capital, and its nearby mountain attractions.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Almaty City Tour', 'Breakfast'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },

  //==========================================================================
  // DESTINATION: Himachal (from HimachalPradesh.tsx)
  //==========================================================================
  {
    slug: 'himachal-backpacking-manali-kasol-jibhi',
    title: 'Himachal Backpacking - Manali Kasol Jibhi',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹12500',
    originalPrice: '₹14000',
    discount: '₹1,500',
    imageUrl: '/cloned_media/13464920240827063621.png',
    overview: 'The classic Himachal backpacking circuit. Explore the valleys of Manali, Parvati (Kasol), and Tirthan (Jibhi).',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers from Delhi', 'Sightseeing'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'manali-sissu-kasol',
    title: 'Manali Sissu Kasol',
    destination: 'Himachal',
    duration: '3 Nights 4 Days',
    price: '₹8000',
    originalPrice: '₹10000',
    discount: '₹2,000',
    imageUrl: '/cloned_media/5274820240826124530.png',
    overview: 'A trip combining Manali and Kasol with a visit to Sissu in Lahaul Valley via the Atal Tunnel.',
    itinerary: createItinerary('3 Nights 4 Days'),
    inclusions: ['Hostel/Camp Stay', 'Transfers from Delhi', 'Sightseeing'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'manali-sissu-kasol-kheerganga',
    title: 'Manali Sissu Kasol Kheerganga',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹12500',
    originalPrice: '₹14000',
    discount: '₹1,500',
    imageUrl: '/cloned_media/22022520240827103638.png',
    overview: 'An adventurer\'s delight: Manali, Sissu, Kasol, and the popular Kheerganga trek.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers from Delhi', 'Kheerganga Trek & Stay'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'manali-kasol-kheerganga',
    title: 'Manali Kasol Kheerganga',
    destination: 'Himachal',
    duration: '4 Days 3 Nights',
    price: '₹9999',
    imageUrl: '/cloned_media/28089820240827101831.png',
    overview: 'A focused trip on the Manali and Parvati Valley, including the trek to the Kheerganga hot springs.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers from Delhi', 'Kheerganga Trek & Stay'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'mcleodganj-triund-bir',
    title: 'Mcleodganj Triund Bir',
    destination: 'Himachal',
    duration: '4 Days 3 Nights',
    price: '₹9999',
    imageUrl: '/cloned_media/31506520240827070428.png',
    overview: 'Explore the spiritual home of the Dalai Lama, trek to Triund, and visit the paragliding capital, Bir.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers from Delhi', 'Triund Trek & Stay'],
    exclusions: ['Meals', 'Paragliding Fees', 'Entry Fees'],
  },
  {
    slug: 'himachal-backpacking-9d8n',
    title: 'Himachal Backpacking 9D8N',
    destination: 'Himachal',
    duration: '9 Days 8 Nights',
    price: '₹35000',
    imageUrl: '/cloned_media/2790520241119110345.png',
    overview: 'A comprehensive 9-day backpacking tour covering the best of Himachal Pradesh, from Shimla to Manali to Dharamshala.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hostel Stay', 'Intercity Transfers', 'Sightseeing'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-circuit-trip',
    title: 'Spiti Valley Circuit Trip',
    destination: 'Himachal', // Or 'Spiti' - user has both
    duration: '7 Days 6 Nights',
    price: '₹20000',
    imageUrl: '/cloned_media/38286220250203102630.png',
    overview: 'The classic Spiti Valley circuit. Start from Shimla, explore Kinnaur, Spiti, and exit via Manali.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'winter-spiti',
    title: 'Winter Spiti',
    destination: 'Himachal', // Or 'Spiti'
    duration: '7 Days 6 Nights',
    price: '₹18000',
    originalPrice: '₹20000',
    discount: '₹2,000',
    imageUrl: '/cloned_media/39542020240830061322.png',
    overview: 'Experience the magic of Spiti Valley in winter. A challenging but rewarding trip to see the white winter wonderland.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay (heated)', '4x4 Transfers from Shimla', 'Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'sm-himachal-backpacking',
    title: 'SM Himachal Backpacking',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹17000',
    imageUrl: '/cloned_media/11759320250218141443.png',
    overview: 'A special curated 5-day Himachal backpacking trip. (SM might stand for something specific to your brand).',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers', 'Sightseeing'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'honeymoon-special-shimla-to-manali',
    title: 'Honeymoon Special- Shimla to Manali',
    destination: 'Himachal',
    duration: '6 Days 5 Nights',
    price: '₹23000',
    imageUrl: '/cloned_media/14516820240909124607.png',
    overview: 'A romantic honeymoon journey from the colonial charm of Shimla to the adventurous valleys of Manali.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Honeymoon Inclusions (cake, decor)'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'manali-honeymoon-trip-6-days-5-nights',
    title: 'Manali Honeymoon Trip - 6 Days 5 Nights',
    destination: 'Himachal',
    duration: '6 Days 5 Nights',
    price: '₹44500',
    imageUrl: '/cloned_media/10354320210311141256.png',
    overview: 'A 6-day honeymoon trip focused on Manali and its beautiful surroundings, like Solang Valley and Rohtang Pass.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Honeymoon Inclusions'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'honeymoon-special-chandigarh-shimla-manali',
    title: 'Honeymoon Special- Chandigarh Shimla Manali',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹20000',
    imageUrl: '/cloned_media/18890920240907115537.png',
    overview: 'A quick 5-day honeymoon trip starting from Chandigarh, covering the two most popular hill stations: Shimla and Manali.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'manali-jibhi-honeymoon-trip',
    title: 'Manali Jibhi Honeymoon Trip',
    destination: 'Himachal',
    duration: '4 Days 3 Nights',
    price: '₹28000',
    imageUrl: '/cloned_media/37597320200416073327.png',
    overview: 'A romantic trip combining the popular Manali with the serene and offbeat Tirthan Valley (Jibhi).',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Private Car', 'Hotel/Cottage Stay', 'Breakfast & Dinner'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'kasol-manali-jibhi-honeymoon-trip',
    title: 'Kasol Manali JIbhi Honeymoon Trip',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹29999',
    imageUrl: '/cloned_media/35355220200411161835.png',
    overview: 'A honeymoon trip for nature lovers, covering the Parvati Valley (Kasol), Manali, and Tirthan Valley (Jibhi).',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Private Car', 'Hotel/Cottage Stay', 'Breakfast & Dinner'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'honeymoon-special-himachal-pardesh',
    title: 'Honeymoon Special- Himachal Pardesh',
    destination: 'Himachal',
    duration: '9 Days 8 Nights',
    price: '₹60000',
    originalPrice: '₹65000',
    discount: '₹5,000',
    imageUrl: '/cloned_media/37327320240213125520.png',
    overview: 'The grand Himachal honeymoon. A 9-day trip covering Shimla, Manali, and Dharamshala/Dalhousie.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Honeymoon Inclusions'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-5-days-4-nights',
    title: 'Shimla Manali 5 Days 4 Nights',
    destination: 'Himachal',
    duration: '6 Days 5 Nights', // Mismatch in title and duration, using duration from file
    price: '₹20300',
    imageUrl: '/cloned_media/25247020230513174156.png',
    overview: 'A classic 6-day family tour covering the state capital Shimla and the tourist hub Manali.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-mcleod-dalhousie-amritsar',
    title: 'Shimla Manali McLeod Dalhousie Amritsar',
    destination: 'Himachal',
    duration: '10 Days 9 Nights',
    price: '₹35500',
    imageUrl: '/cloned_media/21686720240907085543.png',
    overview: 'A complete tour of Himachal, starting from Shimla, Manali, McLeod Ganj, Dalhousie, and ending with a visit to the Golden Temple in Amritsar.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-kasol-5-days-4-nights',
    title: 'Shimla Manali Kasol 5 Days 4 Nights',
    destination: 'Himachal',
    duration: '5 Days 4 Nights', // Mismatch in title and duration, using duration from file
    price: '₹20200',
    imageUrl: '/cloned_media/2194520240905112914.png',
    overview: 'A 5-day family trip covering Shimla, Manali, and a day visit to Kasol in the Parvati Valley.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-dharamshala',
    title: 'Shimla Manali Dharamshala',
    destination: 'Himachal',
    duration: '8 Days 7 Nights',
    price: '₹27200',
    imageUrl: '/cloned_media/37660920240906114644.png',
    overview: 'An 8-day family tour covering the three main pillars of Himachal tourism: Shimla, Manali, and Dharamshala.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-dalhousie-8-days-7-nights',
    title: 'Shimla Manali Dalhousie 8 Days 7 Nights',
    destination: 'Himachal',
    duration: '9 Days 8 Nights', // Mismatch in title and duration, using duration from file
    price: '₹31700',
    imageUrl: '/cloned_media/28415120240906132008.png',
    overview: 'A 9-day tour covering Shimla, Manali, and the colonial charm of Dalhousie and Khajjiar.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-manali-4-days-3-nights',
    title: 'Shimla Manali 4 Days 3 Nights',
    destination: 'Himachal',
    duration: '5 Days 4 Nights', // Mismatch in title and duration, using duration from file
    price: '₹16800',
    imageUrl: '/cloned_media/28710720240905123344.png',
    overview: 'A 5-day family tour of Shimla and Manali, perfect for a short vacation.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'shimla-3-days-2-nights',
    title: 'Shimla 3 Days 2 Nights',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹13500',
    imageUrl: '/cloned_media/14053820240909055546.png',
    overview: 'A quick weekend trip to Shimla, the "Queen of Hills," and the nearby attraction of Kufri.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Private Car', 'Hotel Stay', 'Breakfast & Dinner', 'Sightseeing'],
    exclusions: ['Lunches', 'Activity Fees'],
  },
  {
    slug: 'manali-sissu',
    title: 'Manali Sissu',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6000',
    originalPrice: '₹7000',
    discount: '₹1,000',
    imageUrl: '/cloned_media/20178120230702181449.png',
    overview: 'A weekend trip to Manali with a day trip to Sissu through the Atal Tunnel to experience the Lahaul Valley.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Delhi', 'Hotel/Camp Stay', 'Sightseeing'],
    exclusions: ['Meals', 'Activity Fees'],
  },
  {
    slug: 'jibhi-tirthan-valley',
    title: 'Jibhi & Tirthan Valley',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6500',
    originalPrice: '₹7500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/30341920250625101558.png',
    overview: 'A serene weekend getaway to the offbeat Tirthan Valley, staying in the picturesque village of Jibhi.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Delhi', 'Hotel/Homestay', 'Sightseeing'],
    exclusions: ['Meals', 'Activity Fees'],
  },
  {
    slug: 'kasol-kheerganga-trek',
    title: 'Kasol Kheerganga Trek',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6500',
    originalPrice: '₹7500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/957820240826103048.png',
    overview: 'The classic weekend trek from Delhi. Explore Kasol and trek to the mythical Kheerganga hot springs.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Delhi', 'Camp Stay', 'Trek Guide', 'Meals on Trek'],
    exclusions: ['Meals in Kasol', 'Entry Fees'],
  },
  {
    slug: 'mcleodganj-triund-trek',
    title: 'Mcleodganj & Triund Trek',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6500',
    originalPrice: '₹7500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/10765320240826121342.png',
    overview: 'A weekend trip to Mcleodganj combined with the popular day trek to Triund, offering stunning views of the Dhauladhar range.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Delhi', 'Hotel/Camp Stay', 'Trek Guide', 'Meals on Trek'],
    exclusions: ['Meals in Mcleodganj', 'Entry Fees'],
  },
  {
    slug: 'mcleodganj-bir',
    title: 'Mcleodganj & Bir',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹8000',
    originalPrice: '₹9000',
    discount: '₹1,000',
    imageUrl: '/cloned_media/13283020240830082806.png',
    overview: 'A weekend of culture and adventure. Explore Mcleodganj and then head to Bir for a paragliding experience.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Delhi', 'Hotel/Hostel Stay', 'Sightseeing'],
    exclusions: ['Meals', 'Paragliding Fees'],
  },
  {
    slug: 'hampta-pass-trek',
    title: 'Hampta Pass Trek',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹7000',
    imageUrl: '/cloned_media/24319820250425070422.png',
    overview: 'A classic 5-day trek from Manali that takes you from the lush green Kullu valley to the arid desert of Lahaul.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['All Camp Stays', 'Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Manali', 'Gear Rental'],
  },
  {
    slug: 'bhrigu-lake-trek',
    title: 'Bhrigu Lake Trek',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹5000',
    imageUrl: '/cloned_media/35323020250425054013.png',
    overview: 'A beautiful 3-day high-altitude lake trek near Manali, known for its stunning meadows.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['All Camp Stays', 'Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Manali', 'Gear Rental'],
  },
  {
    slug: 'sar-pass-trek',
    title: 'Sar Pass Trek',
    destination: 'Himachal',
    duration: '5 Days 4 Nights',
    price: '₹6500',
    imageUrl: '/cloned_media/7436420250425134236.png',
    overview: 'A popular 5-day trek from Kasol, offering a variety of terrains from forests and meadows to a snow-covered pass.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['All Camp Stays', 'Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Kasol', 'Gear Rental'],
  },
  {
    slug: 'kareri-lake-trek',
    title: 'Kareri Lake Trek',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6999',
    imageUrl: '/cloned_media/22637220240516125326.png',
    overview: 'A 3-day trek near Dharamshala to the pristine Kareri Lake, nestled in the Dhauladhar mountains.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['All Camp Stays', 'Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Dharamshala', 'Gear Rental'],
  },
  {
    slug: 'kasol-grahan-trek',
    title: 'Kasol Grahan Trek',
    destination: 'Himachal',
    duration: '3 Days 2 Nights',
    price: '₹6200',
    imageUrl: '/cloned_media/29944620190923114625.png',
    overview: 'A 3-day trek from Kasol to the quaint, hidden village of Grahan in the Parvati Valley.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['All Camp/Homestay Stays', 'Meals on Trek', 'Trek Guide'],
    exclusions: ['Transfers to/from Kasol', 'Gear Rental'],
  },
  {
    slug: 'prashar-lake-camping',
    title: 'Prashar Lake Camping',
    destination: 'Himachal',
    duration: '2 Days 1 Night',
    price: '₹2500',
    imageUrl: '/cloned_media/39414820200819141322.png',
    overview: 'A short 2-day trek near Mandi to the beautiful Prashar Lake, with its floating island and ancient temple.',
    itinerary: createItinerary('2 Days 1 Night'),
    inclusions: ['Camp Stay', 'Meals at Camp', 'Trek Guide'],
    exclusions: ['Transfers to/from Mandi/Kullu'],
  },

  //==========================================================================
  // DESTINATION: Kashmir (from Kashmir.tsx)
  //==========================================================================
  {
    slug: 'kashmir-backpacking',
    title: 'Kashmir Backpacking',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹23000',
    imageUrl: '/cloned_media/22506020241120124643.png',
    overview: 'A 6-day backpacking trip to "Paradise on Earth." Explore Srinagar, Gulmarg, and Pahalgam with fellow travelers.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Houseboat Stay (1 Night)', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Meals', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-backpacking-winter-edition',
    title: 'Kashmir Backpacking Winter Edition',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹19999',
    imageUrl: '/cloned_media/39805720230316074814.png',
    overview: 'Experience the magic of Kashmir in winter. A 6-day backpacking trip to see the snow-covered landscapes of Gulmarg and Pahalgam.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel/Guesthouse Stay (Heated)', 'Houseboat Stay', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Meals', 'Gondola/Skiing'],
  },
  {
    slug: 'kashmir-6-days-5-nights',
    title: 'Kashmir 6 Days 5 Nights',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹19999',
    imageUrl: '/cloned_media/28690420220120075604.png',
    overview: 'A classic 6-day Kashmir tour covering Srinagar, Gulmarg, and Pahalgam, perfect for families or couples.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-family-special',
    title: 'Kashmir Family Special',
    destination: 'Kashmir',
    duration: '5 Days 4 Nights',
    price: '₹19000',
    imageUrl: '/cloned_media/28940120240911061449.png',
    overview: 'A 5-day tour specially designed for families, with comfortable stays and easy-paced sightseeing in Srinagar and Gulmarg.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'jannat-e-kashmir-4n5d',
    title: 'Jannat-e-Kashmir 4N5D',
    destination: 'Kashmir',
    duration: '5 Days 4 Nights',
    price: '₹17000',
    imageUrl: '/cloned_media/16958320240720114616.png',
    overview: 'A 5-day trip to experience "Jannat-e-Kashmir," focusing on the beauty of Srinagar, Sonmarg, and Gulmarg.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-honeymoon-special',
    title: 'Kashmir Honeymoon Special',
    destination: 'Kashmir',
    duration: '8 Days 7 Nights',
    price: '₹32700',
    imageUrl: '/cloned_media/40680720240911061608.png',
    overview: 'An 8-day romantic honeymoon special in Kashmir, with leisurely stays in Srinagar, Gulmarg, and Pahalgam.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner', 'Honeymoon Inclusions'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'romantic-kashmir-4n5d',
    title: 'Romantic Kashmir 4N5D',
    destination: 'Kashmir',
    duration: '5 Days 4 Nights',
    price: '₹17000',
    imageUrl: '/cloned_media/34186420240720083327.png',
    overview: 'A 5-day romantic trip for couples, featuring a shikara ride, houseboat stay, and visits to Gulmarg and Pahalgam.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-honeymoon-romantic-retreat',
    title: 'Kashmir Honeymoon Romantic Retreat',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹21000',
    imageUrl: '/cloned_media/19158420240918064946.png',
    overview: 'A 6-day romantic retreat for honeymooners, balancing sightseeing with leisure time in Kashmir\'s most beautiful spots.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner', 'Honeymoon Inclusions'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-honeymoon-package-7-days-6-nights',
    title: 'Kashmir Honeymoon Package 7 Days 6 Nights',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹38500',
    imageUrl: '/cloned_media/4202420210311124328.png',
    overview: 'A week-long honeymoon package covering Srinagar, Sonmarg, Gulmarg, and Pahalgam in detail.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner', 'Honeymoon Inclusions'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-family-getaway',
    title: 'Kashmir Family Getaway',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹22300',
    imageUrl: '/cloned_media/21146020240917132333.png',
    overview: 'A 6-day getaway designed for families to enjoy the scenic beauty of Kashmir together.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'magic-of-srinagar-family-tour-package',
    title: 'Magic Of Srinagar Family Tour Package',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/4101220240307113619.png',
    overview: 'A 6-day family tour focusing on the magic of Srinagar and its nearby attractions like Gulmarg and Sonmarg.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-backpacking-summer-edition',
    title: 'Kashmir Backpacking Summer Edition',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹25999',
    imageUrl: '/cloned_media/15639520230720175534.png',
    overview: 'Experience the lush green meadows and pleasant weather of Kashmir with this 6-day summer backpacking trip.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Houseboat Stay', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Meals', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-gurez-backpacking',
    title: 'Kashmir & Gurez Backpacking',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹29999',
    imageUrl: '/cloned_media/20612420220720035621.png',
    overview: 'A backpacking trip for the adventurous, combining mainstream Kashmir with the remote, stunning Gurez Valley.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hostel/Guesthouse Stay', 'Transfers (4x4 for Gurez)', 'Sightseeing', 'Permits'],
    exclusions: ['Flights', 'Meals', 'Gondola/Pony Rides'],
  },
  {
    slug: 'best-of-kashmir-3n4d',
    title: 'Best of Kashmir 3N4D',
    destination: 'Kashmir',
    duration: '4 Days 3 Nights',
    price: '₹13500',
    imageUrl: '/cloned_media/15843420240719124212.png',
    overview: 'A short 4-day trip to get a taste of the "Best of Kashmir," focusing on Srinagar and a day trip to Gulmarg.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'blissful-kashmir-holiday',
    title: 'Blissful Kashmir Holiday',
    destination: 'Kashmir',
    duration: '10 Days 9 Nights',
    price: '₹40500',
    imageUrl: '/cloned_media/1995920240917081639.png',
    overview: 'A 10-day blissful holiday to explore Kashmir at a relaxed pace, covering all major attractions and offbeat spots.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'picturesque-kashmir-vacation',
    title: 'Picturesque Kashmir Vacation',
    destination: 'Kashmir',
    duration: '5 Days 4 Nights',
    price: '₹18800',
    imageUrl: '/cloned_media/38438020240917113910.png',
    overview: 'A 5-day vacation designed to capture the most picturesque sights of Kashmir.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'unforgettable-kashmir-paradise-tour',
    title: 'Unforgettable Kashmir Paradise Tour',
    destination: 'Kashmir',
    duration: '6 Days 5 Nights',
    price: '₹24500',
    imageUrl: '/cloned_media/23171220240918075456.png',
    overview: 'A 6-day tour to create unforgettable memories in the paradise of Kashmir.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'captivating-kashmir-tour',
    title: 'Captivating Kashmir Tour',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹27000',
    imageUrl: '/cloned_media/37202720240918104911.png',
    overview: 'A 7-day tour to captivate your senses with the beauty of Srinagar, Sonmarg, Gulmarg, and Pahalgam.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'majestic-kashmir-holiday',
    title: 'Majestic Kashmir Holiday',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹25500',
    imageUrl: '/cloned_media/35972520240918133537.png',
    overview: 'A 7-day holiday to experience the majestic landscapes and culture of Kashmir.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'charismatic-kashmir-tour',
    title: 'Charismatic Kashmir Tour',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹28000',
    imageUrl: '/cloned_media/36667020240919121751.png',
    overview: 'A 7-day tour exploring the charismatic beauty of Kashmir, from its gardens to its valleys.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'delightful-kashmir-getaway',
    title: 'Delightful Kashmir Getaway',
    destination: 'Kashmir',
    duration: '8 Days 7 Nights',
    price: '₹29000',
    imageUrl: '/cloned_media/3588420240920071738.png',
    overview: 'An 8-day delightful getaway to explore Kashmir thoroughly, including all major tourist spots.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-with-vaishno-devi-temple-tour',
    title: 'Kashmir with Vaishno Devi Temple Tour',
    destination: 'Kashmir',
    duration: '8 Days 7 Nights',
    price: '₹30000',
    imageUrl: '/cloned_media/26533720240917110529.png',
    overview: 'A tour combining the spiritual journey to Vaishno Devi with the scenic beauty of the Kashmir Valley.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Transfers', 'Helicopter Tickets (optional)'],
    exclusions: ['Flights', 'Meals', 'Gondola/Pony Rides'],
  },
  {
    slug: 'vaishno-devi-shiv-khori-spiritual-tour-3n4d',
    title: 'Vaishno Devi & Shiv Khori Spiritual Tour 3N4D',
    destination: 'Kashmir',
    duration: '4 Days 3 Nights',
    price: '₹16000',
    imageUrl: '/cloned_media/26604720240720075657.png',
    overview: 'A 4-day spiritual tour focused on the holy shrines of Vaishno Devi and Shiv Khori.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hotel Stay', 'Transfers from Jammu', 'Helicopter Tickets (optional)'],
    exclusions: ['Flights', 'Meals'],
  },
  {
    slug: 'kashmir-holiday-with-vaishnodevi-darshan',
    title: 'Kashmir Holiday with Vaishnodevi Darshan',
    destination: 'Kashmir',
    duration: '9 Days 8 Nights',
    price: '₹36000',
    imageUrl: '/cloned_media/2458920240920103415.png',
    overview: 'A 9-day holiday package that includes the Vaishno Devi Darshan followed by a relaxing tour of Kashmir.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Transfers', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'vaishnodevi-with-delightful-kashmir-tour',
    title: 'Vaishnodevi with Delightful Kashmir Tour',
    destination: 'Kashmir',
    duration: '10 Days 9 Nights',
    price: '₹41500',
    imageUrl: '/cloned_media/32312720240920122225.png',
    overview: 'A 10-day tour combining the Vaishno Devi pilgrimage with a delightful and comprehensive tour of Kashmir.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Transfers', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-with-vaishno-devi-and-shiv-khori-tour',
    title: 'Kashmir with Vaishno Devi and Shiv Khori Tour',
    destination: 'Kashmir',
    duration: '9 Days 8 Nights',
    price: '₹35500',
    imageUrl: '/cloned_media/729320240920083235.png',
    overview: 'A 9-day tour covering the spiritual circuit of Vaishno Devi and Shiv Khori, followed by a scenic Kashmir tour.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Transfers', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'magical-escape-to-kashmir',
    title: 'Magical Escape To Kashmir',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹27500',
    imageUrl: '/cloned_media/19266120240919103004.png',
    overview: 'A 7-day magical escape to explore the stunning valleys, lakes, and meadows of Kashmir.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Houseboat Stay', 'Private Car', 'Breakfast & Dinner'],
    exclusions: ['Flights', 'Lunches', 'Gondola/Pony Rides'],
  },
  {
    slug: 'kashmir-great-lakes-trek',
    title: 'Kashmir Great Lakes Trek',
    destination: 'Kashmir',
    duration: '8 Days 7 Nights',
    price: '₹15000',
    originalPrice: '₹16000',
    discount: '₹1,000',
    imageUrl: '/cloned_media/37367320220517062227.png',
    overview: 'One of India\'s most beautiful treks. An 8-day journey across stunning high-altitude alpine lakes.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Srinagar', 'Gear Rental'],
  },
  {
    slug: 'tarsar-marsar-trek',
    title: 'Tarsar Marsar Trek',
    destination: 'Kashmir',
    duration: '7 Days 6 Nights',
    price: '₹13750',
    originalPrice: '₹14250',
    discount: '₹500',
    imageUrl: '/cloned_media/21008820230706083615.png',
    overview: 'A 7-day trek to the twin lakes of Tarsar and Marsar, known for their breathtaking beauty and pristine blue waters.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Srinagar', 'Gear Rental'],
  },
  {
    slug: 'alpather-lake-trek',
    title: 'Alpather Lake Trek',
    destination: 'Kashmir',
    duration: '5 Days 4 Nights',
    price: '₹12999',
    imageUrl: '/cloned_media/27524020220120050859.png',
    overview: 'A 5-day trek from Gulmarg to the high-altitude Alpather Lake, which remains frozen for most of the year.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Srinagar', 'Gear Rental'],
  },
  {
    slug: 'kausar-nag-lake-trek',
    title: 'Kausar Nag Lake Trek',
    destination: 'Kashmir',
    duration: '4 Days 3 Nights',
    price: '₹9999',
    imageUrl: '/cloned_media/40475620220120050538.png',
    overview: 'A 4-day trek to the serene Kausar Nag Lake, located in the Pir Panjal range.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Srinagar', 'Gear Rental'],
  },
  {
    slug: 'sheshnag-lake-trek',
    title: 'Sheshnag Lake Trek',
    destination: 'Kashmir',
    duration: '3 Days 2 Nights',
    price: '₹7999',
    imageUrl: '/cloned_media/9886420220120050240.png',
    overview: 'A short 3-day trek from Pahalgam to the holy Sheshnag Lake, a key point on the Amarnath Yatra route.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Transfers to/from Srinagar', 'Gear Rental'],
  },

  //==========================================================================
  // DESTINATION: Spiti (from Spiti.tsx)
  //==========================================================================
  {
    slug: 'spiti-valley-circuit-trip-with-manali',
    title: 'Spiti Valley Circuit Trip with Manali',
    destination: 'Spiti',
    duration: '7 Days 6 Nights',
    price: '₹20000',
    imageUrl: '/cloned_media/7956720250203104119.png',
    overview: 'The classic Spiti circuit starting and ending in Manali, covering Kaza, Key Monastery, and Chandratal Lake.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers from Manali', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-manali-edition',
    title: 'Spiti Valley- Manali Edition',
    destination: 'Spiti',
    duration: '5 Days 4 Nights',
    price: '₹15000',
    imageUrl: '/cloned_media/9191320250203134935.png',
    overview: 'A shorter 5-day Spiti trip from Manali, focusing on Kaza and nearby monasteries, plus Chandratal.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers from Manali', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-circuit-trip-manali-to-shimla',
    title: 'Spiti Valley Circuit Trip Manali to Shimla',
    destination: 'Spiti',
    duration: '7 Days 6 Nights',
    price: '₹24999',
    imageUrl: '/cloned_media/10602120240210055925.png',
    overview: 'The full circuit starting from Manali, crossing Kunzum Pass, exploring Spiti & Kinnaur, and ending in Shimla.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-circuit-trip-from-chandigarh',
    title: 'Spiti Valley Circuit Trip From Chandigarh',
    destination: 'Spiti',
    duration: '7 Days 6 Nights',
    price: '₹25000',
    imageUrl: '/cloned_media/13017620240210061613.png',
    overview: 'A 7-day Spiti circuit trip with convenient start and end points in Chandigarh, covering the Shimla-Spiti-Manali route.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers from Chandigarh', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-trip-from-chandigarh-manali-edition',
    title: 'Spiti Valley Trip From Chandigarh - Manali Edition',
    destination: 'Spiti',
    duration: '5 Days 4 Nights',
    price: '₹22000',
    imageUrl: '/cloned_media/31067820240210063828.png',
    overview: 'A 5-day trip from Chandigarh, taking the Manali route to explore Kaza, Key, and Chandratal.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers from Chandigarh', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-explorer-edition',
    title: 'Spiti Valley Explorer Edition',
    destination: 'Spiti',
    duration: '11 Days 10 Nights',
    price: '₹35000',
    originalPrice: '₹38000',
    discount: '₹3,000',
    imageUrl: '/cloned_media/17027820240211112306.png',
    overview: 'An 11-day explorer edition to Spiti, allowing for a more relaxed pace and visits to remote villages.',
    itinerary: createItinerary('11 Days 10 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers', 'Inner Line Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-biking-edition',
    title: 'Spiti Valley - Biking Edition',
    destination: 'Spiti',
    duration: '8 Days 7 Nights',
    price: '₹30000',
    imageUrl: '/cloned_media/1420620250217154705.png',
    overview: 'An 8-day biking adventure through the Spiti Valley circuit, designed for motorcycle enthusiasts.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Bike Rental', 'Fuel', 'Homestay/Guesthouse', 'Mechanic Support'],
    exclusions: ['Personal Riding Gear', 'Meals', 'Entry Fees'],
  },
  {
    slug: 'all-girls-spiti-valley-trip',
    title: 'All Girls Spiti Valley Trip',
    destination: 'Spiti',
    duration: '9 Days 8 Nights',
    price: '₹29999',
    originalPrice: '₹34999',
    discount: '₹5,000',
    imageUrl: '/cloned_media/786720240210060450.png',
    overview: 'A 9-day all-girls trip to Spiti Valley, ensuring a safe and fun experience with a female trip lead.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers', 'Female Trip Lead', 'Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'spiti-valley-jibhi-edition',
    title: 'Spiti Valley - Jibhi Edition',
    destination: 'Spiti',
    duration: '7 Days 6 Nights',
    price: '₹22999',
    imageUrl: '/cloned_media/16800620210605120557.png',
    overview: 'A unique 7-day trip combining the rugged desert of Spiti Valley with the lush, green Tirthan Valley (Jibhi).',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Homestay/Guesthouse', 'Transfers', 'Permits'],
    exclusions: ['Meals', 'Entry Fees'],
  },

  //==========================================================================
  // DESTINATION: Uttarakhand (from Uttarakhand.tsx)
  //==========================================================================
  {
    slug: 'uttarakhand-backpacking-rishikesh-auli-chopta',
    title: 'Uttarakhand Backpacking- Rishikesh Auli Chopta',
    destination: 'Uttarakhand',
    duration: '4 Nights 5 Days',
    price: '₹13500',
    originalPrice: '₹15000',
    discount: '₹1,500',
    imageUrl: '/cloned_media/13159420240830104817.png',
    overview: 'The ultimate Uttarakhand backpacking circuit, combining adventure in Rishikesh, skiing in Auli, and trekking in Chopta.',
    itinerary: createItinerary('4 Nights 5 Days'),
    inclusions: ['Hostel/Camp Stay', 'Transfers', 'Sightseeing'],
    exclusions: ['Meals', 'Activity Fees', 'Entry Fees'],
  },
  {
    slug: 'chopta-tungnath-deoriatal',
    title: 'Chopta-Tungnath-Deoriatal',
    destination: 'Uttarakhand',
    duration: '3 Days 2 Nights',
    price: '₹6000',
    originalPrice: '₹7000',
    discount: '₹1,000',
    imageUrl: '/cloned_media/9518720240826103510.png',
    overview: 'A classic weekend trek to Chopta, the "Mini Switzerland of India," including the trek to Tungnath temple and Deoriatal Lake.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Rishikesh/Delhi', 'Camp Stay', 'Trek Guide', 'Meals on Trek'],
    exclusions: ['Meals during transfer', 'Entry Fees'],
  },
  {
    slug: 'rishikesh-chopta-tungnath',
    title: 'Rishikesh Chopta Tungnath',
    destination: 'Uttarakhand',
    duration: '4 Days 3 Nights',
    price: '₹10000',
    imageUrl: '/cloned_media/4619220240827083456.png',
    overview: 'A 4-day trip combining the adventure of Rishikesh (rafting) with the spiritual trek to Tungnath from Chopta.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Transfers', 'Camp Stay', 'Trek Guide', 'Rafting'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'char-dham-yatra-ex-haridwar-dehradun',
    title: 'Char Dham Yatra Ex Haridwar-Dehradun',
    destination: 'Uttarakhand',
    duration: '10 Days 9 Nights',
    price: '₹32000',
    imageUrl: '/cloned_media/42312820230316110103.png',
    overview: 'The complete Char Dham Yatra, a holy pilgrimage to the four shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath, starting from Haridwar.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hotel/Guesthouse Stay', 'All Transfers', 'Meals (Breakfast & Dinner)'],
    exclusions: ['Helicopter/Pony/Palki charges', 'Special Pooja Fees', 'Lunches'],
  },
  {
    slug: 'rishikesh-rafting-trip',
    title: 'Rishikesh Rafting Trip',
    destination: 'Uttarakhand',
    duration: '2 Days 1 Night',
    price: '₹5999',
    imageUrl: '/cloned_media/36941120190611050808.png',
    overview: 'A quick weekend getaway to Rishikesh for a thrilling river rafting experience and beach camping.',
    itinerary: createItinerary('2 Days 1 Night'),
    inclusions: ['Transfers from Delhi', 'Beach Camp Stay', 'Rafting', 'All Meals at Camp'],
    exclusions: ['Meals during transfer'],
  },
  {
    slug: 'jim-corbett-2d1n',
    title: 'Jim Corbett  - 2D1N',
    destination: 'Uttarakhand',
    duration: '2 Days 1 Night',
    price: '₹3600',
    imageUrl: '/cloned_media/315020200213143326.png',
    overview: 'A short trip to Jim Corbett National Park, India\'s oldest national park, for a chance to spot the Royal Bengal Tiger.',
    itinerary: createItinerary('2 Days 1 Night'),
    inclusions: ['Resort Stay', 'Meals at Resort', 'Jeep Safari'],
    exclusions: ['Transfers to/from Ramnagar', 'Entry Fees'],
  },
  {
    slug: 'jim-corbett-ranikhet',
    title: 'Jim Corbett Ranikhet',
    destination: 'Uttarakhand',
    duration: '4 Days 3 Nights',
    price: '₹9999',
    imageUrl: '/cloned_media/31981120240211121011.png',
    overview: 'A 4-day tour combining the wildlife of Jim Corbett with the serene hill station of Ranikhet.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Hotel/Resort Stay', 'Transfers', 'Jeep Safari', 'Sightseeing'],
    exclusions: ['Meals', 'Entry Fees'],
  },
  {
    slug: 'do-dham-yatra-kedarnath-badrinath',
    title: 'Do Dham Yatra - Kedarnath Badrinath',
    destination: 'Uttarakhand',
    duration: '6 Days 5 Nights',
    price: '₹16500',
    imageUrl: '/cloned_media/34512320250505063944.png',
    overview: 'A 6-day pilgrimage to the two holy shrines of Kedarnath and Badrinath, starting from Haridwar.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel/Guesthouse Stay', 'All Transfers', 'Meals (Breakfast & Dinner)'],
    exclusions: ['Helicopter/Pony/Palki charges', 'Special Pooja Fees', 'Lunches'],
  },
  {
    slug: 'auli-joshimath',
    title: 'Auli & Joshimath',
    destination: 'Uttarakhand',
    duration: '3 Days 2 Nights',
    price: '₹6500',
    originalPrice: '₹7500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/30858820240830093243.png',
    overview: 'A weekend trip to the ski destination of Auli, with a stay in the gateway town of Joshimath.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Rishikesh/Delhi', 'Hotel Stay', 'Sightseeing', 'Cable Car (optional)'],
    exclusions: ['Meals', 'Skiing Fees', 'Entry Fees'],
  },
  {
    slug: 'kedarnath-dham',
    title: 'Kedarnath Dham',
    destination: 'Uttarakhand',
    duration: '4 Days 3 Nights',
    price: '₹11000',
    imageUrl: '/cloned_media/40053320250328133241.png',
    overview: 'A 4-day spiritual journey to the holy Kedarnath Dham, one of the 12 Jyotirlingas.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Transfers from Haridwar/Rishikesh', 'Hotel/Guesthouse Stay', 'Meals (Breakfast & Dinner)'],
    exclusions: ['Helicopter/Pony/Palki charges', 'Lunches'],
  },
  {
    slug: 'tungnath-kedarnath-5d4n',
    title: 'Tungnath Kedarnath 5D4N',
    destination: 'Uttarakhand',
    duration: '5 Days 4 Nights',
    price: '₹14000',
    imageUrl: '/cloned_media/30933820250401114006.png',
    overview: 'A 5-day spiritual trek combining two of Lord Shiva\'s most important temples: Tungnath (highest) and Kedarnath.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Transfers', 'Hotel/Guesthouse/Camp Stay', 'Trek Guide', 'Meals'],
    exclusions: ['Helicopter/Pony/Palki charges', 'Entry Fees'],
  },
  {
    slug: 'uttarakhand-backpacking-7d6n',
    title: 'Uttarakhand Backpacking 7D6N',
    destination: 'Uttarakhand',
    duration: '7 Days 6 Nights',
    price: '₹29999',
    imageUrl: '/cloned_media/6779420220907061852.png',
    overview: 'A 7-day comprehensive backpacking trip covering Rishikesh, Auli, Chopta, and more.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hostel/Camp Stay', 'All Transfers', 'Sightseeing', 'Trekking'],
    exclusions: ['Meals', 'Activity Fees', 'Entry Fees'],
  },
  {
    slug: 'uttarakhand-backpacking-10d9n',
    title: 'Uttarakhand Backpacking 10D9N',
    destination: 'Uttarakhand',
    duration: '10 Days 9 Nights',
    price: '₹38000',
    imageUrl: '/cloned_media/6737420220907032145.png',
    overview: 'The ultimate 10-day Uttarakhand backpacking adventure, exploring both Garhwal and Kumaon regions.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hostel/Homestay Stay', 'All Transfers', 'Sightseeing', 'Trekking'],
    exclusions: ['Meals', 'Activity Fees', 'Entry Fees'],
  },
  {
    slug: 'uttarakhand-backpacking-chopta-edition',
    title: 'Uttarakhand Backpacking - Chopta Edition',
    destination: 'Uttarakhand',
    duration: '5 Days 4 Nights',
    price: '₹11999',
    imageUrl: '/cloned_media/7348020200327104220.png',
    overview: 'A 5-day backpacking trip focused on the Chopta region, including treks to Tungnath, Deoriatal, and more.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers', 'Trek Guide', 'Meals on Trek'],
    exclusions: ['Meals during transfer', 'Entry Fees'],
  },
  {
    slug: 'ny-uttarakhand-backpacking',
    title: 'NY Uttarakhand Backpacking',
    destination: 'Uttarakhand',
    duration: '5 Days 4 Nights',
    price: '₹17500',
    originalPrice: '₹20000',
    discount: '₹2,500',
    imageUrl: '/cloned_media/1584220241021095902.png',
    overview: 'Ring in the New Year in the Himalayas! A special 5-day backpacking trip to Auli/Chopta for NYE.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hostel/Camp Stay', 'Transfers', 'NYE Celebration', 'Meals'],
    exclusions: ['Activity Fees', 'Entry Fees'],
  },
  {
    slug: 'valley-of-flowers-trek',
    title: 'Valley of Flowers Trek',
    destination: 'Uttarakhand',
    duration: '6 Days 5 Nights',
    price: '₹9000',
    imageUrl: '/cloned_media/3791220250428070430.png',
    overview: 'A 6-day trek to the stunning Valley of Flowers, a UNESCO World Heritage Site, and the holy shrine of Hemkund Sahib.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Transfers from Haridwar', 'Guesthouse Stay', 'Trek Guide', 'Meals'],
    exclusions: ['Entry Fees', 'Pony/Palki charges'],
  },
  {
    slug: 'kedarkantha-trek',
    title: 'Kedarkantha Trek',
    destination: 'Uttarakhand',
    duration: '5 Days 4 Nights',
    price: '₹6000',
    originalPrice: '₹7000',
    discount: '₹1,000',
    imageUrl: '/cloned_media/7041420250916132944.png',
    overview: 'One of India\'s most popular winter treks. A 5-day trek to the Kedarkantha summit, offering 360-degree Himalayan views.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Transfers from Dehradun', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'brahmatal-trek',
    title: 'Brahmatal Trek',
    destination: 'Uttarakhand',
    duration: '5 Days 4 Nights',
    price: '₹7500',
    originalPrice: '₹8500',
    discount: '₹1,000',
    imageUrl: '/cloned_media/21998220211024062700.png',
    overview: 'A 5-day winter trek known for its stunning views of Mt. Trishul and Nanda Ghunti, and the frozen Brahmatal Lake.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Transfers from Kathgodam/Rishikesh', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'har-ki-doon-trek',
    title: 'Har Ki Doon Trek',
    destination: 'Uttarakhand',
    duration: '7 Days 6 Nights',
    price: '₹11500',
    imageUrl: '/cloned_media/23271820200308124911.png',
    overview: 'A 7-day trek to the "Valley of Gods." This cradle-shaped valley is a paradise for trekkers, with rich flora and fauna.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Transfers from Dehradun', 'Guesthouse/Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'ali-bedni-bughyal',
    title: 'Ali Bedni Bughyal',
    destination: 'Uttarakhand',
    duration: '6 Days 5 Nights',
    price: '₹10000',
    imageUrl: '/cloned_media/9093220230330080238.png',
    overview: 'A 6-day trek to the vast, lush meadows of Ali and Bedni Bugyal, offering stunning views of the Garhwal Himalayas.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Transfers from Kathgodam/Rishikesh', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'dayara-bugyal-trek',
    title: 'Dayara Bugyal Trek',
    destination: 'Uttarakhand',
    duration: '4 Days 3 Nights',
    price: '₹9000',
    imageUrl: '/cloned_media/24783120200329182312.png',
    overview: 'A 4-day trek to one of the most beautiful high-altitude meadows in India, Dayara Bugyal.',
    itinerary: createItinerary('4 Days 3 Nights'),
    inclusions: ['Transfers from Dehradun', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'nag-tibba-trek',
    title: 'Nag Tibba Trek',
    destination: 'Uttarakhand',
    duration: '2 Days 1 Night',
    price: '₹6000',
    imageUrl: '/cloned_media/38976020191128160341.png',
    overview: 'The perfect weekend trek from Delhi. A 2-day trek to the highest peak in the lesser Himalayan region of Garhwal.',
    itinerary: createItinerary('2 Days 1 Night'),
    inclusions: ['Transfers from Dehradun/Delhi', 'Camp Stay', 'All Meals on Trek', 'Trek Guide'],
    exclusions: ['Gear Rental'],
  },
  {
    slug: 'madmaheshwar-trek',
    title: 'Madmaheshwar Trek',
    destination: 'Uttarakhand',
    duration: '3 Days 2 Nights',
    price: '₹8499',
    imageUrl: '/cloned_media/8354620210223115034.png',
    overview: 'A 3-day trek to Madmaheshwar, one of the Panch Kedars, a temple dedicated to Lord Shiva, set in a beautiful meadow.',
    itinerary: createItinerary('3 Days 2 Nights'),
    inclusions: ['Transfers from Ukhimath', 'Guesthouse/Camp Stay', 'All Meals on Trek', 'Trek Guide'],
    exclusions: ['Transfers to Ukhimath', 'Gear Rental'],
  },
  {
    slug: 'roopkund-trek',
    title: 'Roopkund Trek',
    destination: 'Uttarakhand',
    duration: '8 Days 7 Nights',
    price: '₹15000',
    imageUrl: '/cloned_media/35515420240916115136.png',
    overview: 'An 8-day trek to the mysterious "Skeleton Lake." A challenging, high-altitude trek with breathtaking scenery. (Note: Trek is currently restricted).',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Transfers from Kathgodam', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental', 'Permit Fees'],
  },
  {
    slug: 'kedartal-trek',
    title: 'Kedartal Trek',
    destination: 'Uttarakhand',
    duration: '6 Days 5 Nights',
    price: '₹14000',
    imageUrl: '/cloned_media/1008520200329152159.png',
    overview: 'A 6-day high-altitude trek to the glacial Kedartal Lake, near Gangotri, with stunning views of Mt. Thalaysagar.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Transfers from Dehradun', 'Camp Stay', 'All Meals on Trek', 'Trek Guide', 'Porters'],
    exclusions: ['Gear Rental', 'Permit Fees'],
  },

  //==========================================================================
  // DESTINATION: Thailand (from Thailand.tsx)
  //==========================================================================
  {
    slug: 'thailand-full-moon-party',
    title: 'Thailand Full Moon Party',
    destination: 'Thailand',
    duration: '7 Days 6 Nights',
    price: '₹44999',
    imageUrl: '/cloned_media/11104120240831072441.png',
    overview: 'Experience the world-famous Full Moon Party on Koh Phangan, combined with a trip to Krabi and Phi Phi Islands.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hostel/Hotel Stay', 'Ferry Tickets', 'Full Moon Party Entry', 'Transfers'],
    exclusions: ['Flights', 'Meals', 'Visa Fees'],
  },
  {
    slug: 'thailand-phuket-krabi-phi-phi-5n6d',
    title: 'Thailand (Phuket Krabi Phi Phi) 5N6D',
    destination: 'Thailand',
    duration: '6 Days 5 Nights',
    price: '₹45000',
    originalPrice: '₹55000',
    discount: '₹10,000',
    imageUrl: '/cloned_media/6093520220627222939.png',
    overview: 'The classic 6-day Thailand island hopping trip. Explore the best of Phuket, Krabi, and the stunning Phi Phi Islands.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', '4-Island Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'thailand-phuket-krabi-phi-phi-6n7d',
    title: 'Thailand (Phuket Krabi Phi Phi) 6N7D',
    destination: 'Thailand',
    duration: '7 Days 6 Nights',
    price: '₹47999',
    imageUrl: '/cloned_media/25623320220627223345.png',
    overview: 'An extended 7-day version of the classic island hopping trip, giving you more time to relax and explore Phuket, Krabi, and Phi Phi.',
    itinerary: createItinerary('7 Days 6 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', '4-Island Tour', 'Phi Phi Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'thailand-phuket-phi-phi-island-4n5d',
    title: 'Thailand (Phuket, Phi Phi Island) 4N5D',
    destination: 'Thailand',
    duration: '5 Days 4 Nights',
    price: '₹39999',
    imageUrl: '/cloned_media/25431020220425093432.png',
    overview: 'A quick 5-day getaway focused on Phuket and a memorable day trip (or overnight) to the Phi Phi Islands.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', 'Phi Phi Island Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'majestic-thailand-flights-inclusive',
    title: 'Majestic Thailand - Flights Inclusive',
    destination: 'Thailand',
    duration: '6 Days 5 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/7931820250527104428.png',
    overview: 'A 6-day premium package to experience majestic Thailand, with flights included from major Indian cities.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Flights', 'Hotel Stay', 'Airport Transfers', 'Sightseeing', 'Breakfast'],
    exclusions: ['Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'thailand-6d5n',
    title: 'Thailand - 6D5N',
    destination: 'Thailand',
    duration: '6 Days 5 Nights',
    price: '₹42500',
    imageUrl: '/cloned_media/12371020230715105158.png',
    overview: 'A standard 6-day, 5-night Thailand package, likely covering the popular Phuket & Krabi circuit.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', 'Sightseeing'],
    exclusions: ['Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'honeymoon-special-phuket-krabi',
    title: 'Honeymoon Special Phuket Krabi',
    destination: 'Thailand',
    duration: '6 Nights 7 Days',
    price: '₹45000',
    originalPrice: '₹55000',
    discount: '₹10,000',
    imageUrl: '/cloned_media/17720240209120346.png',
    overview: 'A 7-day romantic honeymoon special, focusing on the beautiful beaches and islands of Phuket and Krabi.',
    itinerary: createItinerary('6 Nights 7 Days'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', 'Romantic Dinner', 'Couples Massage'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches'],
  },
  {
    slug: 'honeymoon-special-phuket-krabi-5d4n',
    title: 'Honeymoon Special - Phuket Krabi',
    destination: 'Thailand',
    duration: '5 Days 4 Nights',
    price: '₹48000',
    imageUrl: '/cloned_media/3048220231104223616.png',
    overview: 'A shorter 5-day honeymoon trip to Phuket and Krabi, perfect for a quick romantic getaway.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', 'Romantic Dinner'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches'],
  },
  {
    slug: 'phuket-krabi-5n6d',
    title: 'Phuket Krabi 5N6D',
    destination: 'Thailand',
    duration: '6 days 5 nights',
    price: '₹40000',
    originalPrice: '₹50000',
    discount: '₹10,000',
    imageUrl: '/cloned_media/2479920240209115545.png',
    overview: 'A 6-day tour of Phuket and Krabi, balancing guided tours with leisure time to explore on your own.',
    itinerary: createItinerary('6 days 5 nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Ferry Tickets', '4-Island Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'phuket-krabi-honeymoon-trip',
    title: 'Phuket Krabi Honeymoon Trip',
    destination: 'Thailand',
    duration: '6 Days 5 Nights',
    price: '₹58000',
    imageUrl: '/cloned_media/25895220231104224046.png',
    overview: 'A premium 6-day honeymoon package to Phuket and Krabi with upgraded accommodations and inclusions.',
    itinerary: createItinerary('6 Days 5 Nights'),
    inclusions: ['4-Star Hotel/Villa', 'Airport Transfers', 'Ferry Tickets', 'Private Tours', 'Romantic Dinner'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches'],
  },
  {
    slug: 'bangkok-krabi-phuket-7n8d',
    title: 'Bangkok Krabi Phuket 7N8D',
    destination: 'Thailand',
    duration: '8 Days 7 Nights',
    price: '₹80000',
    imageUrl: '/cloned_media/27844520231104222013.png',
    overview: 'An 8-day trip that combines the bustling city life of Bangkok with the stunning islands of Krabi and Phuket.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'Domestic Flights', 'Airport Transfers', 'Sightseeing', 'Ferry Tickets'],
    exclusions: ['International Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'thailand-bangkok-pattaya-4n5d',
    title: 'Thailand (Bangkok & Pattaya) 4N5D',
    destination: 'Thailand',
    duration: '5 Days 4 Nights',
    price: '₹24999',
    imageUrl: '/cloned_media/15156320220627224541.png',
    overview: 'A 5-day tour focused on the city and nightlife of Bangkok and the nearby beach city of Pattaya.',
    itinerary: createItinerary('5 Days 4 Nights'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Intercity Transfer', 'Coral Island Tour'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'explore-wonders-of-thailand',
    title: 'Explore Wonders of Thailand',
    destination: 'Thailand',
    duration: '8 Days 7 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/14238820250527102215.png',
    overview: 'An 8-day journey to explore the wonders of Thailand, from the temples of the north to the beaches of the south.',
    itinerary: createItinerary('8 Days 7 Nights'),
    inclusions: ['Hotel Stay', 'Domestic Flights', 'Transfers', 'Sightseeing'],
    exclusions: ['International Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'unforgettable-thailand-romantic-getaway',
    title: 'Unforgettable Thailand Romantic Getaway',
    destination: 'Thailand',
    duration: '9 Days 8 Nights',
    price: 'Customization Available',
    imageUrl: '/cloned_media/5466120250527100054.png',
    overview: 'A 9-day unforgettable romantic getaway, likely covering Bangkok, Chiang Mai, and a southern island like Phuket or Samui.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hotel Stay', 'Domestic Flights', 'Transfers', 'Romantic Inclusions'],
    exclusions: ['International Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'thailand-explorer-bangkok-pattaya-krabi-phuket',
    title: 'Thailand Explorer - Bangkok Pattaya Krabi Phuket',
    destination: 'Thailand',
    duration: '10 Days 9 Nights',
    price: '₹85000',
    originalPrice: '₹98000',
    discount: '₹13,000',
    imageUrl: '/cloned_media/41637120231104223052.png',
    overview: 'The complete 10-day Thailand explorer package, covering all four major tourist hubs: Bangkok, Pattaya, Krabi, and Phuket.',
    itinerary: createItinerary('10 Days 9 Nights'),
    inclusions: ['Hotel Stay', 'Domestic Flights', 'All Transfers', 'Sightseeing', 'Ferry Tickets'],
    exclusions: ['International Flights', 'Visa Fees', 'Lunches & Dinners'],
  },
  {
    slug: 'thailand-9d8n',
    title: 'Thailand 9D8N',
    destination: 'Thailand',
    duration: '9 Days 8 Nights',
    price: '₹55000',
    originalPrice: '₹65000',
    discount: '₹10,000',
    imageUrl: '/cloned_media/20721320240209123146.png',
    overview: 'A 9-day tour of Thailand, likely covering a mix of city and island destinations.',
    itinerary: createItinerary('9 Days 8 Nights'),
    inclusions: ['Hotel Stay', 'Domestic Flights', 'Transfers', 'Sightseeing'],
    exclusions: ['International Flights', 'Visa Fees', 'Meals'],
  },
  {
    slug: 'phuket-explorer-6n7d',
    title: 'Phuket explorer 6N7D',
    destination: 'Thailand',
    duration: '6 Nights 7 Days',
    price: '₹49999',
    imageUrl: '/cloned_media/4871320240209130304.png',
    overview: 'A 7-day deep dive into Phuket, exploring all its beaches, islands, and cultural attractions.',
    itinerary: createItinerary('6 Nights 7 Days'),
    inclusions: ['Hotel Stay', 'Airport Transfers', 'Multiple Island Tours', 'Sightseeing'],
    exclusions: ['Flights', 'Visa Fees', 'Lunches & Dinners'],
  },

  //==========================================================================
  // DESTINATION: Vietnam (from Vietnam.tsx)
  //==========================================================================
  {
    slug: 'vietnam-backpacking',
    title: 'Vietnam Backpacking',
    destination: 'Vietnam',
    duration: '8 Days 7 Nights',
    price: '₹59999', // From HTML
    imageUrl: '/cloned_media/38391920240919072750.png', // From HTML (was already correct)
    gallery: [ // From HTML
      '/cloned_media/14217820240125172935.png',
      '/cloned_media/21664120240125172935.png',
      '/cloned_media/9569820240125172936.png',
      '/cloned_media/7309620240125172936.png',
      '/cloned_media/13964420240125172936.png',
      '/cloned_media/34890420240125172936.png',
      '/cloned_media/31222920240125172936.png',
      '/cloned_media/14633520240125172936.png',
      '/cloned_media/4166120240125172936.png',
      '/cloned_media/14292420240125172936.png'
    ],
    overview: '<h2>About Vietnam Backpacking Trip</h2><p>There are various hidden gems that are yet to be discovered by travelers and tourists around the world. Though beauty and charm of Southeast Asian countries hasn’t gained fame like Australia, Singapore, Maldives or Dubai have, a beautiful country like Vietnam deserves your attention. Combination of two words “Viet” and “Nam,” Vietnam literally means “southern people”. Vietnamese people have a long history of being suppressed by countries like Thailand and China, yet their lifestyle and the value system stands still within them and passes on from generation to generation but not as a burden rather it is carried as a wealth.</p><p>This stunning country of Southeast Asia is known for its stunning lush meadows, picturesque landscapes, cultural heritage and resilient people. The ancient temples and colonial buildings in Hoi An and Hanoi are living narrators of Vietnam\'s storied history. Beyond its architectural wonders, one thing that can become your <a href="https://go4explore.com/trip/vietnam" style="color:blue;">Vietnam Tour Package </a>highlight is Vietnamese people whose charm lies in the warmth and hospitality they have for their tourists leaving a mark of respect in visitors\' hearts. From savoring the aromatic pho at street-side stalls to basking on the tranquil beaches of Phu Quoc, Vietnam offers a tapestry of experiences.</p><p>Remarkably, this nation is home to numerous flora and fauna like Great Hornbills, Indian Elephants, Sun bears, Pygmy Slow Loris, Asian Water Monitor, Water Buffaloes, Burmese Pythons, a vast network of natural caves and underground rivers. Vietnam is a land of intricate beauty, where lush rice terraces seamlessly blend with striking mountains and highlands, captivating travelers with its unparalleled splendor. This enchanting country gives an opportunity to adventurers to explore its vast wonders, unveiling a tapestry of cultural richness and natural beauty at every turn.</p><h3>Top attractions to visit in Vietnam Backpacking Trip</h3><ul><li><strong>Halong Bay:</strong> Vietnam’s pride and UNESCO World Heritage site, is full of limestone islands that are surrounded with mystic caves and lagoons. According to Vietnamese legends, this place was created by descending dragons from heaven to protect the Vietnamese people.</li><li><strong>Da Nang:</strong> <a href="https://go4explore.com/trips/vietnam-danang-hanoi-6d5n" style="color:blue;">Da Nang</a> has numerous attractions including My Khe beach with golden sand, Dragon Bridge that illuminates at night and Marble Mountain caves where religious rites take place.</li><li><strong>Hanoi:</strong> Hanoi is a city that combines ancient customs with modern life. Some of its features include strolling through bustling markets and streets in the Old Quarter region; visiting enigmatic temples together with vendors of street foods; as well as seeing landmarks of Turtle Tower or St. Joseph\'s Cathedral as a reminder of French domination over Hanoi’s citizens.</li><li><strong>Golden Hand Bridge:</strong> Constructed out of steel mesh and fiberglass, the illusionary Golden Bridge measures 150 meters long. It is supported by huge stone hands that appear like they were made by gods living in the mountains.</li><li><strong>Hoi An:</strong> Hoi An is an ancient river town decorated with lanterns. Tranquility characterizes it along its streets while other historical symbols such as the Japanese covered bridge and Phung Hung Temple represent their rich heritage.</li><li><strong>Cu Chi Tunnels:</strong> <a href="https://en.wikipedia.org/wiki/C%E1%BB%A7_Chi_tunnels" style="color:blue;" rel="noopener noreferrer" target="_blank">Cu Chi Tunnels</a> are a chance for visitors to see what life was like for Viet Cong guerrillas during the Vietnam War, including opportunities to climb through some remaining sections.</li><li><strong>Ho Chi Minh:</strong> The mummified body of their first prime minister Hoi Chi Minh can still be seen today at inHanoi.</li></ul><h3>Things to do in Vietnam Backpacking Adventure Trip</h3><p>From exploring historic cities to cruising through breathtaking natural landscapes, Vietnam offers a diverse array of experiences for every type of traveler.</p><ul><li><strong>Visit Hanoi\'s Old Quarter:</strong> Wander through the narrow streets lined with traditional shops, temples, and street food vendors in this historic district.</li><li><strong>Cruise Halong Bay:</strong> Take a boat tour through the stunning limestone islands and emerald waters of this UNESCO World Heritage Site.</li><li><strong>Visit the Imperial City of Hue:</strong> Explore the ancient citadel, royal tombs, and pagodas in this former capital city.</li><li><strong>Experience Cu Chi Tunnels:</strong> Learn about the intricate network of tunnels used by the Viet Cong during the Vietnam War.</li><li><strong>Relax in Hoi An:</strong> Stroll through this charming ancient town, known for its well-preserved architecture, lanterns, and tailor shops.</li><li><strong>Discover Ho Chi Minh City:</strong> Experience the dynamic blend of modern and traditional in this bustling city, visiting landmarks like the Reunification Palace and War Remnants Museum.</li><li><strong>Try Vietnamese cuisine:</strong> Indulge in iconic dishes like Pho, Banh Mi, Bun Cha, Goi Chuon etc available at street food stalls and restaurants across the country.</li></ul><h3>How to reach Vietnam</h3><ul><li><strong>Airways:</strong> If you are looking for the most convenient and fastest way to reach Vietnam then you must opt for travel via flight. Major cities of India like Delhi, Mumbai, Bangalore, Kolkata etc are well connected to international airports of Hanoi, Ho Chi Minh City, and Danang in Vietnam.</li></ul><h3>Best time to visit Vietnam</h3><p>While the best months to visit in terms of weather are February and March, the ideal time to visit Northern, Central and Southern part of Vietnam differs. It is considered more ideal to visit <a href="https://go4explore.com/trips/vietnam-north" style="color:blue;">North Vietnam</a> between May to October as it remains less crowded during these times. September to May would be the best time to explore the central region of Vietnam. May to September can be an ideal time to travel in and around <a href="https://go4explore.com/trips/vietnam-south" style="color:blue;">Southern Vietnam.</a></p>',
    itinerary: [ // Formatted with HTML
      {
        day: 1, // Adjusted day numbering to start from 1
        title: 'Ho Chi Minh Calling | Kickass Nightlife & Chill',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Soak in the vibes of Vietnam and feel free to stroll around the central district.</li><li>Visit Saigon Skydeck or Cafe Apartment (on your own). Not to miss the tasty Banh Mi sandwich while exploring like a local.</li><li>Feel free to take a stroll around in the city & explore the delectable food and nightlife of Ho Choi Minh.</li></ul>'
      },
      {
        day: 2,
        title: 'Ho Chi Minh City Tour & Explore Cu Chi Tunnels',
        description: '<ul><li>Wake up in the morning and post breakfast get on board to your vehicle to explore the famous Cu Chi Tunnels.</li><li>Explore the hidden underground world of Vietnam\'s guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour.</li><li>You can try using real guns like AK-47, M16, Machine Gun at at the shooting range of Cu Chi Tunnels.</li><li>Post lunch, drive back to Ho Chi Minh city.</li><li>Visit the War Remnant Museum, Notre Dame Cathedral, Independence Palace & Old Central Post office.</li><li>Back to hotel and overnight stay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfers to Da Nang | Enjoy Nightlife',
        description: '<ul><li>Wake up and post breakfast, check-out from the hotel.</li><li>Get on board on your flight to the pretty town of Da Nang.</li><li>Pick up from airport & drive to your hotel.</li><li>Soak in the vibes of Da Nang, known as ‘The City of Bridges & Beaches’, and feel free to stroll around the city.</li><li>Enjoy the night life of Da Nang and explore epic pubs & cafes.</li></ul>'
      },
      {
        day: 4,
        title: 'Explore Hoi An & Coconut Village',
        description: '<ul><li>Wake up to a leisure-filled morning and enjoy a delightful breakfast, in afternoon head out for an exploratory tour of Hoi An and Coconut Village.</li><li>Drive towards Hoi An and experience the stunning heritage of Hoi An, one of the oldest cities and also declared as a World Heritage Site by UNESCO.</li><li>Visit Coconut Village to experience the famous Basket Boat Ride.</li><li>Take a walk along the Hoai River and soak in the old town vibes at Hoi An lantern town and capture some #InstaPerfcet pictures.</li><li>Enjoy the night life of this beautiful town and explore the cafes.</li></ul>'
      },
      {
        day: 5,
        title: 'Golden Hand Bridge | Ba Na Hills',
        description: '<ul><li>One of the most memorable and enchanting experience awaits you today. Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li>Experience the world\'s best cable cars taking you through the clouds, misty funicular and majestic architecture.</li><li>Visit the iconic Golden Hand Bridge at Ba Na Hills.</li><li>Make a trip to the French Village and jump into a replica of classical France evident in its architectural elegance.</li><li>Take part in amusing games and activities at popular entertainment sites: Fantasy Park and Tombstone Temple.</li><li>Drive back to your hotel around 17:00 Hrs.</li><li>In the evening, opt to chill in a local cafe or go out for pub crawl.</li></ul>'
      },
      {
        day: 6,
        title: 'Transfers to Hanoi City | Local Exploration',
        description: '<ul><li>Wake up early and have your delicious buffet breakfast.</li><li>Board your flight to Hanoi from Da Nang.</li><li>After arriving in Hanoi, check-in into your hotel and have some leisure.</li><li>Begin a walking tour around the hotel at Old Quarter of Hanoi, stopping at Ngoc Son Temple located on the Hoan Kiem Lake (the “Sword” Lake), visit the famous train street (on your own).</li><li>Make the most out of your evening in Hanoi, either by exploring the kickass nightlife & bars or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li></ul>'
      },
      {
        day: 7,
        title: 'The Halong Bay | Epic Cruise Ride & More',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your cruise to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime.</li><li>Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride, boat ride and swimming in the sea.</li><li>In the evening, drive back to Hanoi city.</li><li>You can chill around the beer street of Hanoi or go for shopping.</li></ul>'
      },
      {
        day: 8,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>Wake up in the morning and post breakfast feel free to take a stroll around in the city to finish any last minute shopping and treat yourself with some good Vietnamese food.</li><li>It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[]
      'Internal Flight Tickets: Ho Chi Minh to Da Nang & Da Nang to Hanoi. (Upto Rs 10,000).',
      'Surface Transfers & Travel as per the itinerary: All airport pick ups and drops, Hoi An & Coconut Village day tour from Da Nang, Da Nang to Ba Na Hills Transfers, Halong Bay day tour with lunch (from Hanoi) - SIC, Ho Chi Minh sightseeing & Cu Chi Tunnels day Tour - SIC.',
      'Entry Tickets: Ba Na Hills (Cable Car Ride, Golden Hand Bridge, Fantasy Park, French Village and more), Cu Chi Tunnels, Halong Bay, Ho Chi Minh Sightseeing.',
      'Activities: Boating & Kayaking at Halong Bay.',
      'Accommodation: 7 nights stay at our handpicked Hotels. To save on travel time within the locations all stays are located within 0 to 05 km proximity from the city centre.',
      'Meals: 8 meals for the entire trip including 7 Breakfasts and 1 Lunch (Halong Bay only).',
      'VISA Assistance: Professional visa assistance is provided by experts. Our Visa experts will help you prepare documents, draft a cover letter, help you fill necessary forms, and submit the application, in a completely organized stress-free manner.',
      'Other Inclusions: Virtual real-time guide & assistance from start to end of the trip. Personalized real time information on free walking tours in all cities you are visiting.'
    ],
    exclusions: [ // Extracted as string[]
      'International Flights (From India to Vietnam & Back)',
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) that are not mentioned in the above ‘Inclusions’ section.',
      'Visa fee for Vietnam needs to be paid directly at visa website $25.',
      'Travel Insurance.',
      'GST (5%) is applicable extra.',
      '5% TCS as per govt. rules will be applicable on the Total Package Cost Tax Collected at Sources (TCS) as per Section 206C of the Income Tax. This amount will be refunded in your ITR.'
    ],
  },
  {
    slug: 'vietnam-trip-with-flights',
    title: 'Vietnam Trip with Flights',
    destination: 'Vietnam',
    duration: '7 Days 6 Nights',
    price: '₹79999', // Matches HTML
    imageUrl: '/cloned_media/5980220230801183603.png', // Matches HTML
    gallery: [ // Added gallery from HTML
      '/cloned_media/32185520230801183603.png',
      '/cloned_media/23117420230801183603.png',
      '/cloned_media/37395020230801183603.png',
      '/cloned_media/36465820230801183603.png',
      '/cloned_media/31191520230801183603.png',
      '/cloned_media/28114220230801183603.png',
      '/cloned_media/14870020230801183603.png',
      '/cloned_media/29497020230801183603.png',
      '/cloned_media/34407320230801183603.png',
      '/cloned_media/31189420230801183603.png'
    ],
    overview: '<h2>About Vietnam Trip with Flights</h2><p>Experience the enchanting beauty of Vietnam with our comprehensive 7-day tour package, complete with round-trip flights from India! Known as the "Land of the Ascending Dragon," Vietnam offers a captivating blend of ancient history, breathtaking landscapes, and vibrant culture. From the bustling streets of Hanoi to the tranquil waters of Halong Bay, this tour is designed to showcase the best of what Vietnam has to offer.</p><p>Explore the historic charm of Hanoi\'s Old Quarter, where narrow streets wind through traditional shops and temples. Cruise through the stunning limestone karsts of Halong Bay, a UNESCO World Heritage site, and marvel at its emerald waters. Discover the imperial history of Hue, with its ancient citadel and royal tombs, and wander through the lantern-lit streets of Hoi An, a beautifully preserved ancient town.</p><p>Vietnamese culture is rich and diverse, influenced by centuries of history and neighboring civilizations. Experience the warmth and hospitality of the Vietnamese people, savor the delicious local cuisine known for its fresh ingredients and unique flavors like Pho and Banh Mi, and witness traditional arts and crafts. Whether you\'re navigating the vibrant markets, relaxing on pristine beaches, or exploring ancient ruins, Vietnam promises an unforgettable adventure for every traveler.</p><h3>Best Places to Visit in Vietnam</h3><ul><li><strong>Hanoi:</strong> The capital city, known for its rich history, bustling Old Quarter, Hoan Kiem Lake, and Ho Chi Minh Mausoleum.</li><li><strong>Halong Bay:</strong> A UNESCO World Heritage site famous for its emerald waters and thousands of towering limestone islands topped with rainforests. Cruise trips are popular here.</li><li><strong>Hoi An:</strong> A charming ancient town with well-preserved architecture, lantern-lit streets, tailor shops, and delicious local food.</li><li><strong>Ho Chi Minh City (Saigon):</strong> The largest city, offering a mix of historical sites like the War Remnants Museum and Reunification Palace, alongside modern skyscrapers and vibrant nightlife.</li><li><strong>Hue:</strong> The former imperial capital, home to the vast Citadel, royal tombs, and pagodas along the Perfume River.</li><li><strong>Da Nang:</strong> A coastal city known for its sandy beaches like My Khe, the Marble Mountains, and the iconic Dragon Bridge.</li><li><strong>Sapa:</strong> Located in the northern mountains, famous for its terraced rice fields, stunning landscapes, and ethnic minority villages.</li><li><strong>Mekong Delta:</strong> A vast maze of rivers, swamps, and islands, known for floating markets, orchards, and traditional villages.</li></ul><h3>Best Time to Visit Vietnam</h3><ul><li><strong>Spring (February to April):</strong> Generally considered the best time to visit overall, with pleasant temperatures and lower rainfall across most of the country.</li><li><strong>Autumn (September to November):</strong> Another favorable season, especially in the north (Hanoi, Halong Bay) with clear skies and comfortable weather.</li><li><strong>Weather varies by region:</strong> North Vietnam has distinct winter (cool, dry) and summer (hot, wet) seasons. Central Vietnam experiences typhoons from August to November. South Vietnam has a dry season (December to April) and a wet season (May to November).</li></ul><h3>How to Reach Vietnam from India</h3><ul><li><strong>By Air:</strong> The most common and convenient way. Several airlines operate direct and connecting flights from major Indian cities (Delhi, Mumbai, Bengaluru, Kolkata) to Vietnam\'s main international airports in Hanoi (HAN), Ho Chi Minh City (SGN), and Da Nang (DAD). Airlines include Vietnam Airlines, VietJet Air, IndiGo, Air India, and others via hubs like Bangkok, Singapore, or Kuala Lumpur. Flight duration is typically 5-7 hours for direct flights.</li></ul><p>Explore other popular Vietnam Tour Packages: <a href="/trips/vietnam-backpacking" style="color:blue;">Vietnam Backpacking Trip</a>, <a href="/trips/vietnam-danang-hanoi-6d5n" style="color:blue;">Da Nang & Hanoi Tour</a>, <a href="/trips/vietnam-north" style="color:blue;">North Vietnam Tour</a>, <a href="/trips/vietnam-south" style="color:blue;">South Vietnam Tour</a></p>',
    itinerary: [ // Formatted with HTML
        {
            day: 1,
            title: 'Arrival in Hanoi | Explore the Old Quarter',
            description: '<ul><li>Arrive at Noi Bai International Airport (HAN) in Hanoi.</li><li>Meet our representative and transfer to your hotel in the city center.</li><li>Check in and relax for a bit.</li><li>In the afternoon/evening, take a guided walking tour through the bustling Hanoi Old Quarter, exploring its narrow streets, traditional shops, and vibrant atmosphere.</li><li>Visit Hoan Kiem Lake and Ngoc Son Temple located on a small island in the lake.</li><li>Overnight stay in Hanoi.</li></ul>'
        },
        {
            day: 2,
            title: 'Hanoi City Tour | Water Puppet Show',
            description: '<ul><li>After breakfast, embark on a full-day city tour of Hanoi.</li><li>Visit the Ho Chi Minh Mausoleum complex (outside view), including the Presidential Palace and Ho Chi Minh’s Stilt House.</li><li>Explore the Temple of Literature, Vietnam\'s first university.</li><li>Visit the Vietnam Museum of Ethnology (or Hoa Lo Prison, depending on preference and opening days).</li><li>In the evening, enjoy a traditional Water Puppet Show, a unique Vietnamese art form.</li><li>Overnight stay in Hanoi.</li></ul>'
        },
        {
            day: 3,
            title: 'Halong Bay Day Cruise | Limestone Karsts & Caves',
            description: '<ul><li>Early morning departure for a scenic drive to Halong Bay (approx. 3-4 hours).</li><li>Board a traditional junk boat for a day cruise through the stunning limestone karsts and emerald waters of this UNESCO World Heritage Site.</li><li>Enjoy a seafood lunch onboard.</li><li>Visit Thien Cung Cave (Heavenly Palace Cave) or Dau Go Cave (Wooden Stakes Cave).</li><li>Option for kayaking or a bamboo boat ride through lagoons (may have extra cost).</li><li>Return to Hanoi in the late evening.</li><li>Overnight stay in Hanoi.</li></ul>'
        },
        {
            day: 4,
            title: 'Flight to Da Nang | Arrival & Marble Mountains',
            description: '<ul><li>After breakfast, transfer to Noi Bai Airport (HAN) for your domestic flight to Da Nang (DAD).</li><li>Upon arrival in Da Nang, meet our representative and transfer to your hotel.</li><li>Check in and leave your luggage.</li><li>Visit the Marble Mountains, a cluster of five limestone hills with caves, pagodas, and viewpoints offering panoramic views of the coast.</li><li>Explore Non Nuoc Stone Carving Village at the foot of the mountains.</li><li>Relax on My Khe Beach, known for its soft white sand.</li><li>Overnight stay in Da Nang.</li></ul>'
        },
        {
            day: 5,
            title: 'Hoi An Ancient Town | Lanterns & Tailors',
            description: '<ul><li>After breakfast, take a day trip (or transfer for overnight stay, depending on package) to the charming ancient town of Hoi An (approx. 45 mins drive).</li><li>Explore the well-preserved historical town, a UNESCO World Heritage site, on a walking tour.</li><li>Visit the Japanese Covered Bridge, ancient merchant houses (like Tan Ky Old House), Phuc Kien Assembly Hall, and local markets.</li><li>Enjoy the unique atmosphere, browse tailor shops, art galleries, and relax by the Thu Bon River.</li><li>Experience the magical ambiance as lanterns light up the town in the evening.</li><li>Return to Da Nang (or overnight in Hoi An if included).</li></ul>'
        },
        {
            day: 6,
            title: 'Ba Na Hills & Golden Bridge | Optional Activities',
            description: '<ul><li>After breakfast, enjoy a full-day excursion to Ba Na Hills mountain resort (transfer included).</li><li>Take the spectacular cable car ride up the mountains, holding world records for length and elevation change.</li><li>Walk along the iconic Golden Bridge held by giant stone hands, offering breathtaking views.</li><li>Explore the French Village replica, Linh Ung Pagoda, Le Jardin D\'Amour flower gardens, and Fantasy Park amusement zone.</li><li>Enjoy the cool mountain air and various entertainment options.</li><li>Return to Da Nang in the late afternoon.</li><li>Overnight stay in Da Nang.</li></ul>'
        },
        {
            day: 7,
            title: 'Departure from Da Nang',
            description: '<ul><li>Enjoy a final Vietnamese breakfast at your hotel.</li><li>Depending on your flight schedule, you might have some free time for last-minute souvenir shopping or relaxing.</li><li>Transfer to Da Nang International Airport (DAD) for your departure flight back to India.</li></ul>'
        }
    ],
    inclusions: [ // Extracted as string[]
      'Round-trip International Flights from major Indian cities (e.g., Delhi/Mumbai) to Vietnam (Hanoi/Ho Chi Minh).',
      'Internal Domestic Flights within Vietnam (e.g., Hanoi to Da Nang).',
      'Accommodation for 6 nights in well-selected 3-star or 4-star hotels.',
      'Daily breakfast at the hotels.',
      'Airport transfers (arrival and departure in Vietnam).',
      'Transfers between cities/locations as per the itinerary (flights/bus/car).',
      'Guided tours and sightseeing as mentioned: Hanoi City Tour, Halong Bay Day Cruise (including lunch), Marble Mountains, Hoi An Ancient Town tour, Ba Na Hills excursion (including cable car & Golden Bridge).',
      'Entrance fees for monuments and attractions included in the itinerary.',
      'English-speaking local guides during tours.',
      'Vietnam Visa Approval Letter assistance (stamping fee payable upon arrival).',
      'All applicable taxes (GST extra as applicable).'
    ],
    exclusions: [ // Extracted as string[]
      'Vietnam Visa Stamping Fee (approx. USD 25-50 per person, paid directly upon arrival at Vietnam airport).',
      'Meals not specified in the itinerary (Lunches and Dinners, except lunch on Halong Bay cruise).',
      'Travel Insurance (highly recommended).',
      'Personal expenses such as laundry, telephone calls, tips, beverages, etc.',
      'Optional activities or tours not mentioned in the itinerary (e.g., Kayaking in Halong Bay, specific shows).',
      'Early check-in or late check-out charges at hotels.',
      'Any cost arising due to unforeseen circumstances like flight delays, natural disasters, etc.',
      'Camera fees at monuments, if applicable.',
      '5% TCS (Tax Collected at Source) - refundable in your ITR.'
    ],
  },
  {
    slug: 'vietnam-signature-10d9n',
    title: 'Vietnam Signature - 10D9N',
    destination: 'Vietnam',
    duration: '10 Days 9 Nights', // From HTML
    price: '₹70000', // Discounted price from HTML
    originalPrice: '₹75000', // Original price from HTML
    discount: '₹5,000', // Discount from HTML
    imageUrl: '/cloned_media/396320230630111014.png', // Matches HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/26670120230630111014.png',
      '/cloned_media/3357620230630111014.png',
      '/cloned_media/2331120230630111014.png',
      '/cloned_media/12051020230630111014.png',
      '/cloned_media/19434420230630111014.png',
      '/cloned_media/37011320230630111014.png',
      '/cloned_media/22081320230630111014.png',
      '/cloned_media/15643020230630111014.png',
      '/cloned_media/12668220230630111014.png',
      '/cloned_media/39454920230630111014.png'
    ],
    overview: '<p>A timeless charm and a south Asian country known for its magnificent natural beauty, historic treasures and delicious food &amp; coffee, Vietnam provides quite an unmatched experience. Decorated with abundance of natural attractions such as the limestone islands in Halong Bay, vast paddy fields or the massive cave system in Phong Nha Ke Bang National Park, Vietnam is arguably one of the most beautiful countries on the continent. Breathtaking natural beauty, artistic masterpieces and rich culture, fascinating cities and delightful authentic Vietnamese food, this backpacker-friendly country is fast gaining popularity around the world. How can we forget the vibrant streets and happening nightlife? You can’t resist giving your heart and soul to the country. From exploring cities to taking a walk amidst woods in nature reserve or learning the rich historical side, there\'s a lot to do on this chilled-out vacay to Vietnam.</p>', // From HTML description
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Hanoi Calling | Kickass Nightlife & Chill',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Soak in the vibes of Vietnam and feel free to stroll around the central district.</li><li>Make the most out of your evening in Hanoi, either by exploring the kickass nightlife &amp; bars or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li><li>We will guide you with customized live suggestions for the best city experience.</li></ul>'
      },
      {
        day: 2,
        title: 'Nin Binh Day Tour',
        description: '<ul><li>You will have a smooth pick-up from your Hanoi hotel</li><li>Arrive at the architecturally unique temples of the Dynasties of Dinh King and Le King</li><li>Have lunch at a local restaurant</li><li>Board the sampan boats in Tam Coc dock to drift down the river along with the villages, mountains, and lush rice fields.</li><li>Continue boating in Tam Coc which has unique beauty, often compared with the beauty of Ha Long Bay. Experience the village by cycling, and click instagram worthy pictures after climbing the 500 stone steps to witness the panaromic view of the countryside</li><li>You will dropped back at your Hanoi hotel</li></ul>'
      },
      {
        day: 3,
        title: 'The Halong Bay Day Tour',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your cruise to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime. Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride and swimming in the sea.</li><li>In the evening, drive back to Hanoi city.</li><li>You can chill around the beer street of Hanoi or go for shopping.</li></ul>'
      },
      {
        day: 4,
        title: 'Da Nang Arrival',
        description: '<ul><li>Wake up and post Breakfast check-out from the hotel.</li><li>You can chill around city or go for shopping.</li><li>Get on board on your flight to the pretty town of Da Nang.</li><li>Check-in to your hotel and have some leisure.</li><li>Relax while sipping beer at My Khe Beach in the evening.</li></ul>'
      },
      {
        day: 5,
        title: 'Explore Hoi An | Marble Mountain',
        description: '<ul><li>Wake up and post breakfast, head out to visit Marble Mountain, Tam Thai Pagoda &amp; Linh Ung Pagoda</li><li>Drive towards Hoi An and experience the stunning heritage of Hoi An, one of the oldest cities and also declared as a World Heritage Site by UNESCO.</li><li>Visit Japanese Bridge on the way.</li><li>Take a walk along the Hoai River and soak in the old town vibes at Hoi An lantern town and capture some #InstaPerfcet pictures.</li><li>Enjoy the night life of this beautiful town and explore the cafes</li></ul>'
      },
      {
        day: 6,
        title: 'Golden Hand Bridge | Ba Na Hills',
        description: '<ul><li>One of the most memorable and enchanting experience awaits you today. Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li>Experience the world\'s best cable cars taking you through the clouds, misty funicular and majestic architecture.</li><li>Visit the iconic Golden Hand Bridge at Ba Na Hills.</li><li>Make a trip to the French Village and jump into a replica of classical France evident in its architectural elegance.</li><li>Take part in amusing games and activities at popular entertainment sites: Fantasy Park, Alpine Coaster, and Tombstone Temple.</li><li>In the evening, opt to chill in a local cafe or go out for pub crawl.</li></ul>'
      },
      {
        day: 7,
        title: 'Ho Chi Minh Arrival',
        description: '<ul><li>Wake up early and feel free to stroll nearby beach before you board your flight to Ho Chi Minh.</li><li>After arriving in Ho Chi Minh, check-in into your hotel and have some leisure.</li><li>Visit Saigon Skydeck or Cafe Apartment. Not to miss the tasty Banh Mi sandwich while exploring like a local.</li><li>Feel free to take a stroll around in the city &amp; explore the delectable food and nightlife of Ho Choi Minh.</li></ul>'
      },
      {
        day: 8,
        title: 'Mekong Delta | The Coconut Island',
        description: '<ul><li>Wake up and have breakfast, escape the busy streets of Ho Chi Minh and take a much-needed nature trip along the Mekong River.</li><li>Experience the boat ride to Coconut Island &amp; visit to coconut processing workshops &amp; traditional handicraft making families. Scenic cycle ride around the villages and farms. Take a rowing boat along shady water palm creek.</li><li>Have lunch at Mekong Delta (included).</li><li>Drive back to Ho Chi Minh city and have leisure.</li><li>Definitely you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 9,
        title: 'Ho Chi Minh City Tour + Cu Chi Tunnels',
        description: '<ul><li>Wake up in the morning and post breakfast begin your city tour by visiting the War Remnant Museum, Notre Dame Cathedral, Independence Palace &amp; Old Central Post office.</li><li>Get on board to your vehicle to explore the famous Cu Chi Tunnels.</li><li>Explore the hidden underground world of Vietnam\'s guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour. You can try using real guns like AK-47, M16, Machine Gun at at the shooting range of Cu Chi Tunnels.</li><li>Drive back to Ho Chi Minh and overnight stay at Hotel.</li></ul>'
      },
      {
        day: 10,
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up in the morning and post breakfast feel free to take a stroll around in the city to finish any last minute shopping and treat yourself with some good Vietnamese food.</li><li>It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML, cleaned up
      'Flights (Vietnam Domestic): Hanoi to Da Nang & Da Nang to Ho Chi Minh.',
      'Surface Transfers & Travel: All airport pick up/drop, Ho Chi Minh city tour travel, Da Nang to Hue Train, Da Nang city tour travel, Da Nang to Hoi An, Da Nang to Ba Na Hills, Halong Bay day tour (from Hanoi), Nin Binh day tour (from Hanoi).',
      'Entry Tickets: Ho Chi Minh City Tour, Cu Chi Tunnel, Mekong Delta, Ba Na Hills cable car & Marble Mountains, Ninh Binh.',
      'Accommodation: 9 nights stay in Hotels & Apartment on Twin Sharing (located centrally).',
      'Meals: 10 meals (breakfasts and special meals like lunch on tours).',
      'VISA Assistance: Professional assistance & guaranteed visa approval letter.',
      'Other Inclusions: Virtual real-time guide & assistance, Personalized info on free walking tours.'
    ],
    exclusions: [ // Extracted as string[] from HTML, cleaned up
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      //'Bana Hills entry tickets.' - Removed as it's listed in inclusions now.
      'Visa fee for Vietnam ($25 paid at Immigration).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS (5%) applicable extra (refundable in ITR).'
    ],
  },
  {
    slug: 'vietnam-explorer-8d7n',
    title: 'Vietnam Explorer 8D7N', // From HTML
    destination: 'Vietnam',
    duration: '8 Days 7 Nights', // From HTML
    price: '₹60000', // Discounted price from HTML
    originalPrice: '₹65000', // Original price from HTML
    discount: '₹5,000', // Discount from HTML
    imageUrl: '/cloned_media/23211120230630105031.png', // Main image from HTML
    gallery: [ // Gallery images from HTML
      '/cloned_media/27420620230630105031.png',
      '/cloned_media/19694420230630105031.png',
      '/cloned_media/12550420230630105031.png',
      '/cloned_media/20417820230630105031.png',
      '/cloned_media/27345920230630105031.png',
      '/cloned_media/34366320230630105031.png',
      '/cloned_media/1296020230630105031.png',
      '/cloned_media/319420230630105031.png',
      '/cloned_media/23279020230630105031.png',
      '/cloned_media/40921220230630105031.png'
    ],
    overview: '<h2>About Vietnam Explorer Tour Packages</h2><p>Wouldn’t traveling to a country with a rich dynastic history be an amazing and unique experience? Aren\'t you excited to meet the descendants of dragons and fairies? If you are ready for an euphoric experience, come travel with Go4Explore’s Vietnam Explorer 8 Days 7 Nights trip to the country that is renowned as the King of Cashews, Vietnam. Vietnam’s history has deeply impacted people,their lifestyle and the value system they hold which passes on from generation to generation but not as a burden rather it is carried as a wealth. Vietnam today is not just culturally rich but stands as a rapidly growing country where structures gracefully carry the essence of Vietnam and hold on to the roots of Vietnamese culture and heritage amidst modern hustles.</p><p>From Halong Bay\'s emerald waters cradle limestone karsts to rice terraces, from the Mekong Delta\'s lush waterways to the bustling cities of Ho Chi Minh City. The walls of ancient temples and colonial architecture in Hoi An and Hanoi loudly narrate the history of Vietnam. Vietnam\'s charm extends to its warm people, whose hospitality touches visitors\' hearts. From the aromatic pho in street-side stalls to the tranquil beaches of Phu Quoc, Vietnam. Holding onto 16% of Flora and Fauna, Vietnam is home to numerous natural caves and underground rivers spread over 1,23,000 hectares approximately. Vietnam is a land of intricate beauty where lush rice terraces to striking mountains and highlands will leave you captivated. The unparalleled beauty of the country invites travelers to explore its many wonders.</p><h3>Explorer Top attractions Vietnam Tour</h3><ul><li><strong>Halong Bay:</strong> Renowned UNESCO World Heritage site, Halong Bay literally means “descending dragons”. Vietnamese believe that dragons from heaven had made this place to protect Vietnamese. It is home to Limestone Islands and lagoons that hover around the mystic caves of Halong Bay.</li><li><strong>Da Nang:</strong> It\'s the coastal city of Vietnam where you can find golden sands of My Khe beach to chill, the sparkling beauty of Dragon bridge at night and explore sacred caves of Marble Mountain.</li><li><strong>Hanoi:</strong> With an unblemished blend of ancient traditions with modern life. Stroll through the bustling markets and streets in the Old Quarter, mystic temples, and street vendors offering you with exotic fruits. <a href="https://go4explore.com/trips/vietnam-danang-hanoi-6d5n" style="color:blue;">Hanoi city</a> is home to the iconic Turtle Tower and holds St. Joseph’s Cathedral as the testament of Hanoi’s colonial past reminding people of their struggle and to always respect their heritage.</li><li><strong>Golden Hand Bridge:</strong> Walk through a 150 m long bridge held up by a mountain god which is made up of steel mesh and fireglass.</li><li><strong>Hoi An:</strong> Stroll through the ancient city of <a href="https://en.wikipedia.org/wiki/H%E1%BB%99i_An" style="color:blue;" rel="noopener noreferrer" target="_blank">Hoi An</a> decorated with vibrant and colorful lanterns. The uniqueness of this extraordinarily beautiful city comes from the serene riverside, Japanese bridge, various historically significant structures such as Phung Hung temple, Quan Thang etc.</li><li><strong>Cu Chi Tunnel:</strong> Get a chance to travel to Vietnam\'s Guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour. You can try using real guns like AK-47 at the shooting range of Cu Chi Tunnels.</li><li><strong>Ba Na Hills:</strong> Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li><strong>Ho Chi Minh:</strong> Filled with positive vibration is this metropolitan city of <a href="https://go4explore.com/trips/vietnam-south" style="color:blue;">Southern Vietnam</a> formerly known as Saigon. Ho Chi Minh encapsulates a bulk of different experiences with skyscrapers touching skies,to grounding and humble personalities of locals promoting ancient culture and historical significance. Being the hub of commerce and culture, Hoi Chi Minh holds greater significance than one can imagine.</li></ul><h3>Things to do in Vietnam Explorer Tour</h3><ul><li><strong>Water Puppetry Show in Hanoi:</strong> Vietnam’s tradition that started in 11th CE holds great historical significance. In old times whenever floods occurred in rice fields, farmers used to put up a water puppet show for entertainment purposes.</li><li><strong>Stroll around Streets of Ho Chi Minh:</strong> Walk around and explore Vietnamese lifestyle, culture and specially the street foods of all varieties with different street vendors selling exotic fruits.</li><li><strong>Vibrant Lanterns of Hoi An:</strong> A city with beautiful lanterns hanging around all over the place adding to the charm of the streets that has the power to turn people photogenic with its attractive elements. It is majorly famous for the lanterns that illuminate the whole city, hundreds of lanterns floating in the river radiate the real beauty of nature.</li><li><strong>Island Cave:</strong> Halong Bay has island caves where you can walk through and have an incredible experience.</li><li><strong>Adventure Activities:</strong> Activities like Canyoning and Mountain Biking in Dalat, ice-skating at Saigon especially at night, Rock climbing in Halong Bay, Kitesurfing in Mui Ne and many such thrilling experiences can be gained in Vietnam.</li><li><strong>Try Vietnamese Cuisines:</strong> Some of the must try finger licking dishes of Vietnam include Pho- a soup with broth made of chicken or beef bones, Bun Cha- Grilled patties or seasonal pork marinated with fish sauce and spices, Goi Cuon- Fresh spring rolls and many such delicasies.</li></ul><h3>How to reach Vietnam</h3><ul><li><strong>Airways:</strong> Three international airports Hanoi, Ho Chi Minh City, and Danang are well connected to major cities of India like Delhi, Mumbai, Bangalore, Kolkata etc. Flying over the scenic landscapes it will take around 7-12 hours to reach your dream destination.</li></ul><h3>Best time to visit Vietnam</h3><ul><li><strong>Northern part of Vietnam:</strong> May to October can be considered as the best time to visit <a href="https://go4explore.com/trips/vietnam-north" style="color:blue;">North Vietnam</a> as it remains less crowded during these times.</li><li><strong>Central part of Vietnam:</strong> September to May would be the best time to explore the central region of Vietnam.</li><li><strong>Southern Vietnam:</strong> May to September can be an ideal time to travel in and around Southern Vietnam.</li></ul><p>If we try to figure out the best months to visit in terms of weather then February and March are the best times to fly to this country.</p>', // From HTML
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Hanoi Arrival | Kickass Nightlife & Chill',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Soak in the vibes of Vietnam and feel free to stroll around the central district.</li><li>Make the most out of your evening in Hanoi, either by exploring the kickass nightlife &amp; bars or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li><li>We will guide you with customized live suggestions for the best city experience.</li></ul>'
      },
      {
        day: 2,
        title: 'The Halong Bay | Epic Cruise Ride & More',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your cruise to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime. Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride and swimming in the sea.</li><li>In the evening, drive back to Hanoi city.</li><li>You can chill around the beer street of Hanoi or go for shopping.</li></ul>'
      },
      {
        day: 3,
        title: 'Fly to Da Nang | Nightlife',
        description: '<ul><li>Wake up and post Breakfast check-out from the hotel.</li><li>You can chill around city or go for shopping.</li><li>Get on board on your flight to the pretty town of Da Nang.</li><li>Check-in to your hotel and have some leisure.</li><li>Relax while sipping beer at My Khe Beach in the evening.</li></ul>'
      },
      {
        day: 4,
        title: 'Explore Hoi An | Marble Mountain',
        description: '<ul><li>Wake up and post breakfast, head out to visit Marble Mountain, Tam Thai Pagoda &amp; Linh Ung Pagoda</li><li>Drive towards Hoi An and experience the stunning heritage of Hoi An, one of the oldest cities and also declared as a World Heritage Site by UNESCO.</li><li>Visit Japanese Bridge on the way.</li><li>Take a walk along the Hoai River and soak in the old town vibes at Hoi An lantern town and capture some #InstaPerfcet pictures.</li><li>Enjoy the night life of this beautiful town and explore the cafes.</li></ul>'
      },
      {
        day: 5,
        title: 'Golden Hand Bridge | Ba Na Hills',
        description: '<ul><li>One of the most memorable and enchanting experience awaits you today. Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li>Experience the world\'s best cable cars taking you through the clouds, misty funicular and majestic architecture.</li><li>Visit the iconic Golden Hand Bridge at Ba Na Hills.</li><li>Make a trip to the French Village and jump into a replica of classical France evident in its architectural elegance.</li><li>Take part in amusing games and activities at popular entertainment sites: Fantasy Park, Alpine Coaster, and Tombstone Temple.</li><li>In the evening, opt to chill in a local cafe or go out for pub crawl.</li></ul>'
      },
      {
        day: 6,
        title: 'Ho Chi Minh Arrival',
        description: '<ul><li>Wake up early and feel free to stroll nearby beach before you board your flight to Ho Chi Minh.</li><li>After arriving in Ho Chi Minh, check-in into your hotel and have some leisure.</li><li>Visit Saigon Skydeck or Cafe Apartment. Not to miss the tasty Banh Mi sandwich while exploring like a local.</li><li>Feel free to take a stroll around in the city &amp; explore the delectable food and nightlife of Ho Choi Minh.</li></ul>'
      },
      {
        day: 7,
        title: 'Ho Chi Minh City Tour + Cu Chi Tunnels',
        description: '<ul><li>Wake up in the morning and post breakfast begin your city tour by visiting the War Remnant Museum, Notre Dame Cathedral, Independence Palace &amp; Old Central Post office.</li><li>Get on board to your vehicle to explore the famous Cu Chi Tunnels.</li><li>Explore the hidden underground world of Vietnam\'s guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour. You can try using real guns like AK-47, M16, Machine Gun at at the shooting range of Cu Chi Tunnels.</li><li>Drive back to Ho Chi Minh and overnight stay at Hotel.</li></ul>'
      },
      {
        day: 8,
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up in the morning and post breakfast feel free to take a stroll around in the city to finish any last minute shopping and treat yourself with some good Vietnamese food.</li><li>It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Flights (Vietnam Domestic): Hanoi to Da Nang & Da Nang to Ho Chi Minh.',
      'Surface Transfers & Travel: All airport pick up/drop, Ho Chi Minh city tour travel, Da Nang city tour travel, Da Nang to Hoi An, Da Nang to Ba Na Hills, Nin Binh day tour (from Hanoi).', // Corrected typo Nin Binh
      'Entry Tickets: Ho Chi Minh City Tour & Cu Chi Tunnel, Ba Na Hills cable car & Marble Mountains.', // Removed Nin Binh ticket as it was missing from original source inclusion text
      'Accommodation: All nights stay in Hotels & Apartment on Twin Sharing (located centrally).',
      'Meals: 8 meals (breakfasts and special meals like lunch on tours).',
      'VISA Assistance: Professional assistance & guaranteed visa approval letter.',
      'Other Inclusions: Virtual real-time guide & assistance, Personalized info on free walking tours.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      'Visa fee for Vietnam ($25 paid at Immigration).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS applicable extra (refundable in ITR).' // Simplified TCS explanation
    ],
  },
  {
    slug: 'unforgettable-vietnam-odyssey',
    title: 'Unforgettable Vietnam Odyssey', // From HTML
    destination: 'Vietnam',
    duration: '10 Days 9 Nights', // From HTML
    price: 'Customization Available', // No price in HTML, keeping placeholder
    // originalPrice: '', // No original price in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/9944320250527113431.png', // Matches HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/35916820250527113430.png',
      '/cloned_media/9049720250527113430.png',
      '/cloned_media/23152320250527113431.png',
      '/cloned_media/27181820250527113431.png',
      '/cloned_media/16949120250527113431.png',
      '/cloned_media/4161020250527113431.png',
      '/cloned_media/39777620250527113431.png'
    ],
    overview: '', // No overview/description provided in the HTML source data for this specific slug
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Arrival at Hanoi | Leisure Day',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Hanoi you will meet our representative. After clearing out all formalities, get driven towards your hotel. Check-in to your comfy hotel and have some leisure.</li><li>On this day, we will not follow a set itinerary.</li><li>You can visit the stunning St. Joseph’s Cathedral, an iconic landmark with beautiful French Gothic architecture on your own.</li><li>Later, you can explore Hoan Kiem Lake and Ngoc Son Temple, a picturesque temple.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Day Trip to Ninh Binh',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get transferred to Ninh Binh where you get to explore the ancient capital and sacred temples.</li><li>Hop on a scenic boat ride from Hoa Lu to Tam Coc.&nbsp;</li><li>Later, enjoy a peaceful cycling adventure along quiet village roads from Tam Coc to Bich Dong Pagoda, where you can explore the cluster of ancient cave temples.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfer to Halong Bay | Overnight Cruise',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, check-out from the hotel and transfer to Tuan Chau Port, Halong Bay City.</li><li>Here, you will board your traditional cruise, check-in to your rooms and settle in.&nbsp;</li><li>As the cruise sails, enjoy fresh seafood and local delicacies while soaking in breathtaking views of caves, Duck Islet, and more.</li><li>Optionally, you can also indulge in adventurous activities like swimming or kayaking in the emerald waters.</li><li>Return to your room for an overnight stay on the cruise.</li></ul>'
      },
      {
        day: 4,
        title: 'Halong Bay to Da Nang via Hanoi',
        description: '<ul><li>Wake up early to admire the sunrise views and participate in a Tai Chi session on the sundeck or take a tour of Surprise Cave to explore its impressive natural beauty.</li><li>Later, check-out from the cruise and transfer from Tuan Chau Harbor to Hanoi Airport.</li><li>Catch your flight to Da Nang, and upon arrival check-in to your hotel for an overnight stay in Da Nang.</li></ul>'
      },
      {
        day: 5,
        title: 'Ba Na Hill Day Tour',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, and prepare for a scenic drive to Ba Na Hills, where you’ll start your adventure with a cable car ride from Suoi Mo Station to Marseille Station.</li><li>Arrive at the Golden Hand Bridge, which offers panoramic vistas. Later, explore the French Village where you will experience European-inspired architecture and French cuisine.</li><li>Later, take a peaceful stroll around Linh Ung Pagoda and visit the historic Debay Wine Cellar.</li><li>Return back to your hotel in Da Nang for an overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Da Nang to Phu Quoc | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check-out from your hotel in Da Nang.</li><li>Get driven to Da Nang Airport to board your flight to Phu Quoc.</li><li>Upon arrival, get driven to your hotel and check-in.</li><li>On this day, we will not follow a set itinerary.</li><li>You can head out to explore on your own. Visit Phu Quoc National Park or Ham Ninh Fishing Village.</li><li>In the evening, relax by the beautiful Long Beach, enjoying the serene sunset.</li><li>Return to your hotel in Phu Quoc for an overnight stay.</li></ul>'
      },
      {
        day: 7,
        title: 'Leisure Day in Phu Quoc',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, you are free to explore the enchanting emerald island of Phu Quoc on your own.</li><li>You can rent a motorbike and visit Suoi Tranh Waterfall for a delightful swim amidst beautiful natural surroundings.</li><li>Head to Vinpearl Safari, or explore VinWonders for its thrilling water slides.</li><li>Return to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 8,
        title: 'Fly to Ho Chi Minh | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check-out from your hotel.</li><li>Get transferred to Phu Quoc Airport for your flight to Ho Chi Minh City.</li><li>Upon arrival, get driven to your hotel in Ho Chi Minh City and check-in.</li><li>On this day we will not follow a set itinerary.</li><li>You can visit the Independence Palace and War Remnants Museum on your own.</li><li>Return back to your hotel for an overnight stay at Ho Chi Minh City.</li></ul>'
      },
      {
        day: 9,
        title: 'Mekong Delta Tour',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast and get driven to My Tho, known as the floating market city of Vietnam.</li><li>Embark on your tour by visiting the Vinh Trang Pagoda, and enjoying a relaxing boat ride along the village canals, where you can observe the traditional river life and vibrant local markets.</li><li>Take a stop at the Tortoise Islet, famous for its picturesque landscapes.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 10,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>It is time to say goodbye to a lovely Vietnam trip. Post a delightful breakfast, pack your bags and complete check-in formalities.</li><li>Board your flight back to India with a bag full of heartfelt memories and amazing experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
        'Internal Flights: Flights included from Hanoi to Da Nang & Da Nang to Ho Chi Minh City.', // Typo corrected from source (Hanoi to Phu Quoc isn't listed, assumed Da Nang to HCM)
        'Surface Transfers: All airport pick ups & drops and sightseeing transfers as per the itinerary.',
        'Meals: 10 meals including 2 Breakfasts in Hanoi, 1 Breakfast & 1 Lunch/Dinner in Halong Bay, 2 Breakfasts in Da Nang, 2 Breakfasts in Phu Quoc, 2 Breakfasts in Ho Chi Minh.',
        'Accommodations: 2 nights stay in Hanoi, 2 nights stay in Phu Quoc, 2 nights stay in Ho Chi Minh, 2 nights stay in Da Nang, 1 night stay in Halong Bay.',
        'Sightseeing Tours & Entry Tickets: Halong Bay Overnight Cruise & Ticket, Ninh Binh Day Tour, Ba Na Hills & Golden Bridge Day Tour & Ticket, Mekong Delta Tour.', // Removed duplicate Halong Bay entry
        'Activities: Cycle Tour to Bich Dong.',
        'VISA Assistance: Professional visa assistance provided by experts.'
    ],
    exclusions: [ // Extracted as string[] from HTML
        'Any International Flights.',
        'Meals that are not mentioned in the program. Any kind of food or beverage not included (alcoholic drinks, mineral water, meals/refreshments/lunches on highway).',
        'Early check-in and late check-out. Hotel or Room upgrade.',
        'Guide & Entrance fees during sightseeing or any other item not specified in inclusions.',
        'Any personal expenses like tips, camera/video charges, laundry, telephone bills, etc.',
        'Travel Insurance and any cost arising due to natural calamities, roadblock, etc.',
        'Tourism Fee/Security Deposit payable at hotel.',
        'Anything not mentioned in the inclusions.',
        'GST (5%) applicable extra.',
        '5% TCS applicable extra (claimable while filing ITR).'
    ],
  },
  {
    slug: 'enchanting-escape-to-vietnam',
    title: 'Enchanting Escape to Vietnam', // From HTML
    destination: 'Vietnam',
    duration: '7 Days 6 Nights', // From HTML
    price: 'Customization Available', // No price in HTML, keeping placeholder
    // originalPrice: '', // Not in HTML
    // discount: '', // Not in HTML
    imageUrl: '/cloned_media/14260120250527131710.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/30678620250527131709.png',
      '/cloned_media/15542420250527131710.png',
      '/cloned_media/24738920250527131710.png',
      '/cloned_media/41969020250527131710.png',
      '/cloned_media/25735420250527131710.png',
      '/cloned_media/35057820250527131710.png'
    ],
    overview: 'A 7-day enchanting escape to Vietnam, perfect for a relaxing and culturally rich holiday.', // Keeping existing placeholder as none provided in HTML
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Arrival in Hanoi | Leisure Day',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Hanoi you will meet our representative. After clearing out all formalities, get driven towards your hotel. Check-in to your comfy hotel and have some leisure.</li><li>On this day we will not follow a set itinerary.</li><li>You can explore various attractions like Ho Chi Minh Mausoleum, Huc Bridge, and Ngoc Son Temple Hanoi.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Day Trip to Ninh Binh',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready to embark on your tour to Ninh Binh City where you’ll visit the former capital of Vietnam - Hao Lu, and its temples.</li><li>Hop on to a boat from Hao Lu to Tam Coc.</li><li>Upon reaching Tam Coc, enjoy a fun cycle ride through beautiful Vietnamese villages and reaching Bich Dong Pagoda.&nbsp;</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfer to Halong Bay | Overnight Cruise',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, check-out from the hotel and transfer to Tuan Chau Port, Halong Bay City.</li><li>Here, you will board your traditional cruise, check-in to your rooms and settle in.&nbsp;</li><li>As the cruise sails, enjoy fresh seafood and local delicacies while soaking in breathtaking views of caves, Duck Islet, and more.</li><li>Optionally, you can also indulge in adventurous activities like swimming or kayaking in the emerald waters.</li><li>Return to your room for an overnight stay on the cruise.</li></ul>'
      },
      {
        day: 4,
        title: 'Transfer to Da Nang via Hanoi',
        description: '<ul><li>Wake up in the morning and indulge in various activities such as Chinese martial art - Tai Chi.</li><li>Post breakfast, hop on a boat ride to the Surprise Cave, the largest cave in Halong Bay.</li><li>Later, disembark from the cruise and get transferred to Hanoi for your flight to Da Nang.</li><li>Upon arrival, you will be transferred to your hotel for check-in and an overnight stay at Da Nang.</li></ul>'
      },
      {
        day: 5,
        title: 'Ba Na Hill Day Tour',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to explore Ba Na Hills and a cable car ride from Suoi Mo Station to Marseille Station.&nbsp;</li><li>Upon reaching, your first stop will be the Golden Hand Bridge where you will be mesmerized by the panoramic views.</li><li>Later, discover the Linh Ung Pagoda, Debay Wine Cellar, and Fantasy Park.&nbsp;</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Transfer to Hoi An | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, check-out from your hotel in Da Nang and board your pre-booked transfer to Hoi An.</li><li>Upon arrival, proceed with your check in formalities, and spend the rest of the day at leisure.</li><li>On this day we will not follow any set itinerary.</li><li>You can explore places such as the Fujian Assembly Hall, Hoi An Night Market, or stroll around An Bang Beach.&nbsp;</li><li>Return back to your hotel for an overnight stay in Hoi An.</li></ul>'
      },
      {
        day: 7,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>It is time to say goodbye to a lovely Vietnam trip. Post a delightful breakfast, pack your bags and complete check-in formalities.</li><li>Board your flight back to India with a bag full of heartfelt memories and amazing experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
        'Internal Flights: Flights included from Hanoi to Da Nang.', // Removed Da Nang to HCM as it's not in itinerary
        'Surface Transfers: All airport pick ups & drops and sightseeing transfers as per the itinerary.',
        'Meals: 6 meals including 2 Breakfasts in Hanoi, 1 Breakfast in Halong Bay, 1 Breakfast in Hoi An, 2 Breakfasts in Da Nang.', // Adjusted meal count based on itinerary/accommodation
        'Accommodation: 2 nights stay in Hanoi, 1 night stay in Halong Bay, 1 night stay in Hoi An, 2 nights stay in Da Nang.', // Based on itinerary
        'Sightseeing Tours & Entry Tickets: Halong Bay Overnight Cruise & Ticket, Cycle Tour to Bich Dong, Ba Na Hills & Golden Bridge Day Tour & Ticket, Ninh Binh Day Tour.', // Removed duplicate Halong Bay entry
        'VISA Assistance: Professional visa assistance is provided by experts.'
    ],
    exclusions: [ // Extracted as string[] from HTML
        'Any International Flights.',
        'Meals that are not mentioned in the program. Any kind of food or beverage not included (alcoholic drinks, mineral water, meals/refreshments/lunches on highway).',
        'Early check-in and late check-out. Hotel or Room upgrade.',
        'Guide & Entrance fees during sightseeing or any other item not specified in inclusions.',
        'Any personal expenses like tips, camera/video charges, laundry, telephone bills, etc.',
        'Travel Insurance and any cost arising due to natural calamities, roadblock, etc.',
        'Tourism Fee/Security Deposit payable at hotel.',
        'Anything not mentioned in the inclusions.',
        'GST (5%) applicable extra.',
        '5% TCS applicable extra (claimable while filing ITR).'
    ],
  },
  {
    slug: 'vietnam-danang-hanoi-6d5n', // Corrected slug from HTML
    title: 'Vietnam- Danang Hanoi 6D5N', // Title from HTML
    destination: 'Vietnam',
    duration: '6 Days 5 Nights', // Duration from HTML
    price: '₹36500', // Price from HTML
    // originalPrice: '', // No original price in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/19946620230326031410.png', // Main image from HTML
    gallery: [ // Gallery from HTML
      '/cloned_media/31859020230326031410.png',
      '/cloned_media/24671220230326031410.png',
      '/cloned_media/11504820230326031410.png',
      '/cloned_media/5416620230326031410.png',
      '/cloned_media/5856220230326031410.png',
      '/cloned_media/29836920230326031410.png',
      '/cloned_media/24240220230326031410.png',
      '/cloned_media/24513720230326031410.png',
      '/cloned_media/27690220230326031410.png',
      '/cloned_media/18759220230326031410.png'
    ],
    overview: '<h2>Danang Hanoi Tour Package 6 Days</h2><p>We found the beauty of Vietnam in its timeless charm of bustling Hanoi to scenic coastal Danang. Embrace the adventure and book our exclusive Vietnam- Danang Hanoi 6 Days 5 Nights Tour Package to experience the spectacular beauty of Vietnam.</p><p>Located on the central coastal area of Vietnam, Da Nang is a dynamic city with growing characteristics that harmonize with its archived legacy. It is famous for its unspoiled sand, and for instance, Non Nuoc beach with captivating marble mountain and the sea with the purest water of sapphire hue. Dragon Bridge, for instance, is one of the city’s most recognizable landmarks that can open and simultaneously let out fire and water fountain shows at night.</p><p>The Bà Nà Hills is one of the most distinctive attractions in Da Nang, it is a mountain resort which has a cable car where it takes tourists outside the cable car and offers them a view of the area. The resort itself is composed of French styled structures and tapestries accompanied by eye pleasing gardens, making a break away from the real world feel and look like a dream.</p><p>Hanoi is among the most important political and economic hubs of Vietnam and represents the history and culture of the country as the capital city. Interesting special features include The Old Quarter featuring a maze-like network of narrow streets together with ancient structures. Here you can stroll through the bazaars, try the local cuisine – the taste of which is drastically different from the European one; and feel the vibe of the city.</p><p>It is also the largest city in Vietnam that possesses some of the world heritage sites; Thang Long Imperial Citadel 11th century Temple of Literature; a temple of literature that is famous for the education of Confucius learners.</p><p>Book your <a href="/trip/vietnam" style="color:blue;">Vietnam Tour Package</a> with Go4Explore and enjoy the solitude, adventure, natural beauty and a lot more in this exciting Vietnam trip.</p><h3>Best Places To Visit in Vietnam- Danang Hanoi 6 Days Trip</h3><ul><li><strong>Ba Na Hills:</strong> Known as one of the world’s most famous hotels, this 5-Oscar establishment is situated on a hill. Visit the beautiful place of Giant wheel cable car, French like buildings, Gardens and even the kind of adventure you want.</li><li><strong>Non Nuoc Beach:</strong> This particular beach is famous for its white sand as well as the sea as clear as the glass. Take a rest at the beach, be active with some water activities or just sunbathe and admire the scenery of the Marble Mountains.</li><li><strong>Dragon Bridge:</strong> Dragon Bridge situated in Da Nang is one of the wonderful wonders of the modern world. It gets even better at night when the engines deliver a fire and water breathing show, making it one of the best places to be.</li><li><strong>Marble Mountains:</strong> These five marble and limestone hills are the places that provide the visitors with the possibilities to visit the Buddhist sanctuaries, caves or to enjoy the beautiful views to Da Nang.</li><li><strong>Hai Van Pass:</strong> <a href="https://en.wikipedia.org/wiki/H%E1%BA%A3i_V%C3%A2n_Pass" style="color:blue;" target="_blank" rel="noopener noreferrer">Hai Van Pass</a> is an amazing twisty dusty mountainous terrain that runs along the coast of the eastern sea with excellent views of the sea and the mountains.</li><li><strong>Old Quarter:</strong> Take a walk through the Old Quarter of Hanoi and relive the newly awakened historians years experiencing the numerous narrow streets filled with antique buildings and life-filled markets. This will enable the participant to enjoy the rich culture of the street foods while at the same time getting an awesome feel of the energy in the city.</li><li><strong>Hoan Kiem Lake and Ngoc Son Temple:</strong> This splendid park located in the midst of the bustle and hustle of Hanoi is loved by the citizens of the city as well as tourists. Ngoc Son Temple is one of the most famous ones, being a pretty and historic pagoda on a small island in the lake.</li><li><strong>Imperial Citadel of Thang Long:</strong> This is another great site recognized by UNESCO and it gives a raw imperial heritage of Vietnam hence established in the 11th century. Discover historical sites, including the fortifications of the ancient citadel and study its importance.</li><li><strong>Temple of Literature:</strong> Situated in the Hanoi city and designed exclusively for such scholars along with education, this monumental temple evokes the essence of academic values beloved by Vietnam. Visit the old and charming courtyards and gardens within the Sitio.</li><li><strong>Ho Chi Minh Mausoleum:</strong> Visit the bust of this highly honored leader of Vietnam and also view the Palace of Presidency and beautifully landscaped grounds.</li></ul><h3>Things to do in 6 Days Danang Hanoi Tour</h3><ul><li><strong>Admire the Lady Buddha:</strong> Take a trip to the popular, recently constructed Linh Ung Pagoda with this massive Lady Buddha statue, measuring 67 meters tall, second only to a statue in Thailand.</li><li><strong>Learn to Cook Vietnamese Cuisine:</strong> Attend a Vietnamese cookery course and discover the secrets for preparing the exquisite Vietnamese food such as Banh Xeo (Vietnamese pancakes) and Goi Cuon (Vietnam spring rolls).</li><li><strong>Enjoy a Picnic at Son Tra Peninsula:</strong> Take your lunch box along and have a good time on moving round Son Tra Peninsula included with intense green forest, sandy beaches, minor trekkings eliciting beautiful sea views.</li><li><strong>Visit the Cham Museum:</strong> Those interested in the history of the early civilization should come and visit the Cham Museum holding the superior sculpture and artifacts.</li><li><strong>Go on a Countryside Tour:</strong> Tame the hustle of city life and discover the true beauty of Da Nang with traditional village tours, rice paddies tours and local market tours.</li><li><strong>Attend a Traditional Water Puppet Performance:</strong> The Thang Long Water Puppet Theater is a must visit attraction which presents an extraordinary art of water puppetry originally performed in Vietnam since the 11th century.</li><li><strong>Explore the Temple of Literature:</strong> From these stilted structures and grand archways to the lush greens you can explore today, it used to be the preserve of Confucian scholars and the first university in Vietnam.</li><li><strong>Visit Ho Chi Minh\'s Stilt House:</strong> Visit the modest stilt house that was home to Ho Chi Minh and had his office during his days of revolution and transformation of Vietnam.</li><li><strong>Shop at Dong Xuan Market:</strong> Discover the lively environment of the Hanoi Orchid Hotel and Restaurant, now the largest building and most extensive roofed market in the capital.</li><li><strong>Take a Day Trip to Ninh Binh:</strong> Depart from Hanoi to discover the beauty of sub-region of Ninh Binh, the Halong Bay on the land because of the many limestone mountains and the old capital of Hoa Lu.</li></ul><h3>How to Reach Vietnam- Danang Hanoi</h3><p>The two cities in Vietnam, Da Nang and the capital city of Hanoi are not very far from India and are some of the most beautiful destinations in the world. Conveniently located near major Indian cities including Delhi, Mumbai, Bangalore Air India has direct flight connectivity on Da Nang and Hanoi. Or have connecting flights which are relatively easier to find using airline alliances to places like Singapore, Bangkok or Kuala [Lum pir]. The journey from India, approximately 5-7 hours, offers an opportunity to dive into the history, and beauty of Vietnam, embraced between modern mega cities and peaceful nature.</p><h3>Best Time to Visit Vietnam- Danang Hanoi</h3><ul><li><strong>Winter (December to February):</strong> While in winter, the weather in Hanoi is relatively cool and dry and therefore perfect to go sightseeing, Da Nang, on the other hand, has favorable weather since it is dry with many sunny days, and therefore perfect for beach and outdoor activities.</li><li><strong>Spring (March to May):</strong> Despite the fact that Vietnam has a tropical climate, it is most favorable in the spring since its temperature is not very high and the humidity level is low in both cities. This is perfect for sightseeing around Hanoi city and, of course, sunny vacations in Danang.</li><li><strong>Summer (June to August):</strong> In terms of the weather, summer is characterized by equally high temperatures as well as high humidity levels in Hanoi; Da Nang, on the other hand, becomes hot and receives much more rain meaning while tourists are few, the beaches are not very friendly.</li><li><strong>Autumn (September to November):</strong> Weather is much better in the fall, that falls in September-December, with relatively low humidity level and plenty of sunshine, perfect for outdoor activities and fiestas, and beaches though most people may consider Da Nang good for beaches all year round.</li></ul>', // From HTML
    itinerary: [ // From HTML i_data, adjusted day numbering, formatted lists
      {
        day: 1, // Changed Day 0 to Day 1
        title: 'Journey Begins | Hanoi Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Explore the vibrant street &amp; night life of Hanoi</li><li>We will help you with customized live suggestions for the best city experience Overnight rest at hotel.</li></ul>'
      },
      {
        day: 2, // Changed Day 1 to Day 2
        title: 'Ninh Binh Day Trip',
        description: '<ul><li>Breakfast at hotel</li><li>You will have a smooth pick-up from your Hà Nội hotel at 07:30 Hrs</li><li>Start your Ninh Binh trip (90km to the south of Hà Nội) witha 20 min pit stop</li><li>Arrive at the architecturally unique temples of the Dynasties of Dinh King and Le King</li><li>Have lunch at a local restaurant</li><li>Board the sampan boats in Tam Coc dock to drift down the river along with the villages, mountains, and lush rice fields.</li><li>Continue boating in Tam Coc which has unique beauty, often compared with the beauty of Ha Long Bay. Experience the village by cycling, and click instagram worthy pictures after climbing the 500 stone steps to witness the panaromic view of the countryside</li><li>You will dropped back at your Hà Nội hotel at 18:00 Hrs</li><li>Overnight stay at hotel</li></ul>'
      },
      {
        day: 3, // Changed Day 2 to Day 3
        title: 'Fly to Da Nang | Exploration',
        description: '<ul><li>Breakfast at Hotel</li><li>Before the flight, you may have free time to finish any last-minute shopping or visit something that you missed Your private chauffeur will pick-up up from your Hà Nội hotel as per the flight timing</li><li>Drop at Hà Nội airport</li><li>Flight from Hà Nội to Đà Nẵng</li><li>Land at Đà Nẵng</li><li>After luggage collection, exit towards the gate.</li><li>Your private chauffeur will be waiting for you at the Arrival gate</li><li>Check-in (as per hotel check-in time )</li><li>Walk to My Khe beach for dinner and to chill by beach</li><li>We will help you with customized live suggestions for the best city experience</li><li>Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 4, // Changed Day 3 to Day 4
        title: 'Hoi An Ancient Town',
        description: '<ul><li>Breakfast at Hotel</li><li>The day is at leisure to explore the beach right across your hotel</li><li>15:00 Hrs : Pick up from hotel in Da Nang</li><li>Visit Ngu Hanh Sơn also known as Marble Mountain.</li><li>Visit Tam Thai Pagoda, Linh Ung Pagoda.</li><li>Start your journey towards Hoi An Ancient town,</li><li>Cover Japanese Bridge: This only remains of Japanese culture is now considered as a symbol of Hoi An. Taking a walk along the Hoai River</li><li>Enjoy lantern boat ride</li><li>Enjoy the night life of Hội An Town with many beautiful cafes and coffees.</li><li>You will dropped back at your Da Nang hotel at 20:00 Hrs</li><li>Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 5, // Changed Day 4 to Day 5
        title: 'Ba Na Hills | Golden Hand Bridge',
        description: '<ul><li>Breakfast at Hotel</li><li>8:00 Hrs: Private car transfer from Da Nang to Ba Na Hill</li><li>Pay for an entry ticket directly there</li><li>9:00 Hrs to 17:00 Hrs: Explore Ba NaHill by Self (Over 12 Spots) Golden Hands Bridge, Mountain Cable Car, Furnacular &amp; More</li><li>17:00 Hrs: Private car transfer from Ba NaHill to Da Nang</li><li>You will dropped back at your Da Nanghotel at 18:00 Hrs Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 6, // Changed Day 5 to Day 6
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
        'All Stay for 5 Nights in Vietnam.',
        'All Internal Flight',
        'All Airport Transfers.',
        'All transfers as mentioned in the Itinerary',
        'Fun Social/Private Trips as per itinerary',
        'All toll taxes, parking fee and other charges',
        '5 x Full Course Breakfast and 1 special dining experience',
        'International Sim card with data',
        'Forex Card',
        'Visa assistance and other documents associated with the Visa/Immigration Legendary Go4Explore assistance & Support'
    ],
    exclusions: [ // Extracted as string[] from HTML
        'Any kind of personal expenses.',
        'Anything (Meals, Transport & Services) that are not mentioned in the above ‘Inclusions’ section.',
        'Museum/Monument entry fee/City Tax.',
        'Visa fee for Vietnam needs to be paid directly at Immigration $ 25.',
        'Travel Insurance.',
        '5% GST & 5% TCS (TCS can be claimed in full in your ITR)'
    ],
  },
  {
    slug: 'vietnam-danang-hanoi-6d5n', // Corrected slug from HTML
    title: 'Vietnam- Danang Hanoi 6D5N', // Title from HTML
    destination: 'Vietnam',
    duration: '6 Days 5 Nights', // Duration from HTML
    price: '₹36500', // Price from HTML
    // originalPrice: '', // No original price in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/19946620230326031410.png', // Main image from HTML
    gallery: [ // Gallery from HTML
      '/cloned_media/31859020230326031410.png',
      '/cloned_media/24671220230326031410.png',
      '/cloned_media/11504820230326031410.png',
      '/cloned_media/5416620230326031410.png',
      '/cloned_media/5856220230326031410.png',
      '/cloned_media/29836920230326031410.png',
      '/cloned_media/24240220230326031410.png',
      '/cloned_media/24513720230326031410.png',
      '/cloned_media/27690220230326031410.png',
      '/cloned_media/18759220230326031410.png'
    ],
    overview: '<h2>Danang Hanoi Tour Package 6 Days</h2><p>We found the beauty of Vietnam in its timeless charm of bustling Hanoi to scenic coastal Danang. Embrace the adventure and book our exclusive Vietnam- Danang Hanoi 6 Days 5 Nights Tour Package to experience the spectacular beauty of Vietnam.</p><p>Located on the central coastal area of Vietnam, Da Nang is a dynamic city with growing characteristics that harmonize with its archived legacy. It is famous for its unspoiled sand, and for instance, Non Nuoc beach with captivating marble mountain and the sea with the purest water of sapphire hue. Dragon Bridge, for instance, is one of the city’s most recognizable landmarks that can open and simultaneously let out fire and water fountain shows at night.</p><p>The Bà Nà Hills is one of the most distinctive attractions in Da Nang, it is a mountain resort which has a cable car where it takes tourists outside the cable car and offers them a view of the area. The resort itself is composed of French styled structures and tapestries accompanied by eye pleasing gardens, making a break away from the real world feel and look like a dream.</p><p>Hanoi is among the most important political and economic hubs of Vietnam and represents the history and culture of the country as the capital city. Interesting special features include The Old Quarter featuring a maze-like network of narrow streets together with ancient structures. Here you can stroll through the bazaars, try the local cuisine – the taste of which is drastically different from the European one; and feel the vibe of the city.</p><p>It is also the largest city in Vietnam that possesses some of the world heritage sites; Thang Long Imperial Citadel 11th century Temple of Literature; a temple of literature that is famous for the education of Confucius learners.</p><p>Book your <a href="/trip/vietnam" style="color:blue;">Vietnam Tour Package</a> with Go4Explore and enjoy the solitude, adventure, natural beauty and a lot more in this exciting Vietnam trip.</p><h3>Best Places To Visit in Vietnam- Danang Hanoi 6 Days Trip</h3><ul><li><strong>Ba Na Hills:</strong> Known as one of the world’s most famous hotels, this 5-Oscar establishment is situated on a hill. Visit the beautiful place of Giant wheel cable car, French like buildings, Gardens and even the kind of adventure you want.</li><li><strong>Non Nuoc Beach:</strong> This particular beach is famous for its white sand as well as the sea as clear as the glass. Take a rest at the beach, be active with some water activities or just sunbathe and admire the scenery of the Marble Mountains.</li><li><strong>Dragon Bridge:</strong> Dragon Bridge situated in Da Nang is one of the wonderful wonders of the modern world. It gets even better at night when the engines deliver a fire and water breathing show, making it one of the best places to be.</li><li><strong>Marble Mountains:</strong> These five marble and limestone hills are the places that provide the visitors with the possibilities to visit the Buddhist sanctuaries, caves or to enjoy the beautiful views to Da Nang.</li><li><strong>Hai Van Pass:</strong> <a href="https://en.wikipedia.org/wiki/H%E1%BA%A3i_V%C3%A2n_Pass" style="color:blue;" target="_blank" rel="noopener noreferrer">Hai Van Pass</a> is an amazing twisty dusty mountainous terrain that runs along the coast of the eastern sea with excellent views of the sea and the mountains.</li><li><strong>Old Quarter:</strong> Take a walk through the Old Quarter of Hanoi and relive the newly awakened historians years experiencing the numerous narrow streets filled with antique buildings and life-filled markets. This will enable the participant to enjoy the rich culture of the street foods while at the same time getting an awesome feel of the energy in the city.</li><li><strong>Hoan Kiem Lake and Ngoc Son Temple:</strong> This splendid park located in the midst of the bustle and hustle of Hanoi is loved by the citizens of the city as well as tourists. Ngoc Son Temple is one of the most famous ones, being a pretty and historic pagoda on a small island in the lake.</li><li><strong>Imperial Citadel of Thang Long:</strong> This is another great site recognized by UNESCO and it gives a raw imperial heritage of Vietnam hence established in the 11th century. Discover historical sites, including the fortifications of the ancient citadel and study its importance.</li><li><strong>Temple of Literature:</strong> Situated in the Hanoi city and designed exclusively for such scholars along with education, this monumental temple evokes the essence of academic values beloved by Vietnam. Visit the old and charming courtyards and gardens within the Sitio.</li><li><strong>Ho Chi Minh Mausoleum:</strong> Visit the bust of this highly honored leader of Vietnam and also view the Palace of Presidency and beautifully landscaped grounds.</li></ul><h3>Things to do in 6 Days Danang Hanoi Tour</h3><ul><li><strong>Admire the Lady Buddha:</strong> Take a trip to the popular, recently constructed Linh Ung Pagoda with this massive Lady Buddha statue, measuring 67 meters tall, second only to a statue in Thailand.</li><li><strong>Learn to Cook Vietnamese Cuisine:</strong> Attend a Vietnamese cookery course and discover the secrets for preparing the exquisite Vietnamese food such as Banh Xeo (Vietnamese pancakes) and Goi Cuon (Vietnam spring rolls).</li><li><strong>Enjoy a Picnic at Son Tra Peninsula:</strong> Take your lunch box along and have a good time on moving round Son Tra Peninsula included with intense green forest, sandy beaches, minor trekkings eliciting beautiful sea views.</li><li><strong>Visit the Cham Museum:</strong> Those interested in the history of the early civilization should come and visit the Cham Museum holding the superior sculpture and artifacts.</li><li><strong>Go on a Countryside Tour:</strong> Tame the hustle of city life and discover the true beauty of Da Nang with traditional village tours, rice paddies tours and local market tours.</li><li><strong>Attend a Traditional Water Puppet Performance:</strong> The Thang Long Water Puppet Theater is a must visit attraction which presents an extraordinary art of water puppetry originally performed in Vietnam since the 11th century.</li><li><strong>Explore the Temple of Literature:</strong> From these stilted structures and grand archways to the lush greens you can explore today, it used to be the preserve of Confucian scholars and the first university in Vietnam.</li><li><strong>Visit Ho Chi Minh\'s Stilt House:</strong> Visit the modest stilt house that was home to Ho Chi Minh and had his office during his days of revolution and transformation of Vietnam.</li><li><strong>Shop at Dong Xuan Market:</strong> Discover the lively environment of the Hanoi Orchid Hotel and Restaurant, now the largest building and most extensive roofed market in the capital.</li><li><strong>Take a Day Trip to Ninh Binh:</strong> Depart from Hanoi to discover the beauty of sub-region of Ninh Binh, the Halong Bay on the land because of the many limestone mountains and the old capital of Hoa Lu.</li></ul><h3>How to Reach Vietnam- Danang Hanoi</h3><p>The two cities in Vietnam, Da Nang and the capital city of Hanoi are not very far from India and are some of the most beautiful destinations in the world. Conveniently located near major Indian cities including Delhi, Mumbai, Bangalore Air India has direct flight connectivity on Da Nang and Hanoi. Or have connecting flights which are relatively easier to find using airline alliances to places like Singapore, Bangkok or Kuala [Lum pir]. The journey from India, approximately 5-7 hours, offers an opportunity to dive into the history, and beauty of Vietnam, embraced between modern mega cities and peaceful nature.</p><h3>Best Time to Visit Vietnam- Danang Hanoi</h3><ul><li><strong>Winter (December to February):</strong> While in winter, the weather in Hanoi is relatively cool and dry and therefore perfect to go sightseeing, Da Nang, on the other hand, has favorable weather since it is dry with many sunny days, and therefore perfect for beach and outdoor activities.</li><li><strong>Spring (March to May):</strong> Despite the fact that Vietnam has a tropical climate, it is most favorable in the spring since its temperature is not very high and the humidity level is low in both cities. This is perfect for sightseeing around Hanoi city and, of course, sunny vacations in Danang.</li><li><strong>Summer (June to August):</strong> In terms of the weather, summer is characterized by equally high temperatures as well as high humidity levels in Hanoi; Da Nang, on the other hand, becomes hot and receives much more rain meaning while tourists are few, the beaches are not very friendly.</li><li><strong>Autumn (September to November):</strong> Weather is much better in the fall, that falls in September-December, with relatively low humidity level and plenty of sunshine, perfect for outdoor activities and fiestas, and beaches though most people may consider Da Nang good for beaches all year round.</li></ul>', // From HTML
    itinerary: [ // From HTML i_data, adjusted day numbering, formatted lists
      {
        day: 1, // Changed Day 0 to Day 1
        title: 'Journey Begins | Hanoi Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Explore the vibrant street &amp; night life of Hanoi</li><li>We will help you with customized live suggestions for the best city experience Overnight rest at hotel.</li></ul>'
      },
      {
        day: 2, // Changed Day 1 to Day 2
        title: 'Ninh Binh Day Trip',
        description: '<ul><li>Breakfast at hotel</li><li>You will have a smooth pick-up from your Hà Nội hotel at 07:30 Hrs</li><li>Start your Ninh Binh trip (90km to the south of Hà Nội) witha 20 min pit stop</li><li>Arrive at the architecturally unique temples of the Dynasties of Dinh King and Le King</li><li>Have lunch at a local restaurant</li><li>Board the sampan boats in Tam Coc dock to drift down the river along with the villages, mountains, and lush rice fields.</li><li>Continue boating in Tam Coc which has unique beauty, often compared with the beauty of Ha Long Bay. Experience the village by cycling, and click instagram worthy pictures after climbing the 500 stone steps to witness the panaromic view of the countryside</li><li>You will dropped back at your Hà Nội hotel at 18:00 Hrs</li><li>Overnight stay at hotel</li></ul>'
      },
      {
        day: 3, // Changed Day 2 to Day 3
        title: 'Fly to Da Nang | Exploration',
        description: '<ul><li>Breakfast at Hotel</li><li>Before the flight, you may have free time to finish any last-minute shopping or visit something that you missed Your private chauffeur will pick-up up from your Hà Nội hotel as per the flight timing</li><li>Drop at Hà Nội airport</li><li>Flight from Hà Nội to Đà Nẵng</li><li>Land at Đà Nẵng</li><li>After luggage collection, exit towards the gate.</li><li>Your private chauffeur will be waiting for you at the Arrival gate</li><li>Check-in (as per hotel check-in time )</li><li>Walk to My Khe beach for dinner and to chill by beach</li><li>We will help you with customized live suggestions for the best city experience</li><li>Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 4, // Changed Day 3 to Day 4
        title: 'Hoi An Ancient Town',
        description: '<ul><li>Breakfast at Hotel</li><li>The day is at leisure to explore the beach right across your hotel</li><li>15:00 Hrs : Pick up from hotel in Da Nang</li><li>Visit Ngu Hanh Sơn also known as Marble Mountain.</li><li>Visit Tam Thai Pagoda, Linh Ung Pagoda.</li><li>Start your journey towards Hoi An Ancient town,</li><li>Cover Japanese Bridge: This only remains of Japanese culture is now considered as a symbol of Hoi An. Taking a walk along the Hoai River</li><li>Enjoy lantern boat ride</li><li>Enjoy the night life of Hội An Town with many beautiful cafes and coffees.</li><li>You will dropped back at your Da Nang hotel at 20:00 Hrs</li><li>Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 5, // Changed Day 4 to Day 5
        title: 'Ba Na Hills | Golden Hand Bridge',
        description: '<ul><li>Breakfast at Hotel</li><li>8:00 Hrs: Private car transfer from Da Nang to Ba Na Hill</li><li>Pay for an entry ticket directly there</li><li>9:00 Hrs to 17:00 Hrs: Explore Ba NaHill by Self (Over 12 Spots) Golden Hands Bridge, Mountain Cable Car, Furnacular &amp; More</li><li>17:00 Hrs: Private car transfer from Ba NaHill to Da Nang</li><li>You will dropped back at your Da Nanghotel at 18:00 Hrs Overnight rest at Hotel.</li></ul>'
      },
      {
        day: 6, // Changed Day 5 to Day 6
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
        'All Stay for 5 Nights in Vietnam.',
        'All Internal Flight',
        'All Airport Transfers.',
        'All transfers as mentioned in the Itinerary',
        'Fun Social/Private Trips as per itinerary',
        'All toll taxes, parking fee and other charges',
        '5 x Full Course Breakfast and 1 special dining experience',
        'International Sim card with data',
        'Forex Card',
        'Visa assistance and other documents associated with the Visa/Immigration Legendary Go4Explore assistance & Support'
    ],
    exclusions: [ // Extracted as string[] from HTML
        'Any kind of personal expenses.',
        'Anything (Meals, Transport & Services) that are not mentioned in the above ‘Inclusions’ section.',
        'Museum/Monument entry fee/City Tax.',
        'Visa fee for Vietnam needs to be paid directly at Immigration $ 25.',
        'Travel Insurance.',
        '5% GST & 5% TCS (TCS can be claimed in full in your ITR)'
    ],
  },
  {
    slug: 'vietnam-9n10d',
    title: 'Vietnam 9N10D', // From HTML name
    destination: 'Vietnam',
    duration: '10 Days 9 Nights', // From HTML
    price: '₹64999', // From HTML
    imageUrl: '/cloned_media/41438420220627214651.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/17505120220627214651.png',
      '/cloned_media/34287220220627214651.png',
      '/cloned_media/24036120220627214651.png',
      '/cloned_media/4053120220627214651.png',
      '/cloned_media/8780320220627214651.png',
      '/cloned_media/8590620220627214651.png',
      '/cloned_media/41126520220627214651.png',
      '/cloned_media/16019520220627214651.png',
      '/cloned_media/11796520220627214651.png',
      '/cloned_media/35567820220627214651.png'
    ],
    overview: '<p>A timeless charm and a south Asian country known for its magnificent natural beauty, historic treasures and delicious food &amp; coffee, Vietnam provides quite an unmatched experience. Decorated with abundance of natural attractions such as the limestone islands in Halong Bay, vast paddy fields or the massive cave system in Phong Nha Ke Bang National Park, Vietnam is arguably one of the most beautiful countries on the continent. Breathtaking natural beauty, artistic masterpieces and rich culture, fascinating cities and delightful authentic Vietnamese food, this backpacker-friendly country is fast gaining popularity around the world. How can we forget the vibrant streets and happening nightlife? You can’t resist giving your heart and soul to the country. From exploring cities to taking a walk amidst woods in nature reserve or learning the rich historical side, there\'s a lot to do on this chilled-out vacay to Vietnam.</p>', // From HTML description
    itinerary: [ // From HTML i_data, formatted with HTML
      {
        day: 0,
        title: 'Journey Begins | Ho Chi Minh Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel. Check-in to your hotel and have some leisure.</li><li>Begin your city tour by visiting the War Remnant Museum &amp; Independence Palace.</li><li>In the evening, witness a breathtaking sunset while taking a walk along Notre Dame Basilica (Built by the French in 1880).</li><li>Feel free to take a stroll around in the city &amp; visit Saigon Skydeck or Cafe Apartment. Not to miss the tasty Banh Mi sandwich while exploring like a local.</li></ul>'
      },
      {
        day: 1,
        title: 'Mekong Delta | The Coconut Island',
        description: '<ul><li>Wake up and have breakfast, escape the busy streets of Ho Chi Minh and take a much-needed nature trip along the Mekong River.</li><li>Experience the boat ride to Coconut Island &amp; visit to coconut processing workshops &amp; traditional handicraft making families. Scenic cycle ride around the villages and farms. Take a rowing boat along shady water palm creek.</li><li>Have lunch at Mekong Delta (included).</li><li>Visit Vinh Trang Pagoda (3 Buddha Statue) and snap Instagram-worthy photos.</li><li>Drive back to Ho Chi Minh city and have leisure.</li><li>Definitely you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 2,
        title: 'Cu Chi Tunnels | Fly to Da Nang',
        description: '<ul><li>Wake up early in the morning and get on board to your vehicle to explore the famous Cu Chi Tunnels.</li><li>Explore the hidden underground world of Vietnam\'s guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour. You can try using real guns like AK-47, M16, Machine Gun at the shooting range of Cu Chi Tunnels.</li><li>Drive back to Ho Chi Minh and get on board on your flight to the pretty town of Da Nang.</li><li>Feel free to take a stroll around in the city, chill with your beer and treat yourself with some good Vietnamese food.</li></ul>'
      },
      {
        day: 3,
        title: 'Explore Hoi An | Old Town Vibes',
        description: '<ul><li>Wake up and post freshen-up, head out to experience the stunning heritage of Hoi An, one of the oldest cities and also declared as a World Heritage Site by UNESCO.</li><li>Visit Dragon Bridge and Marble Mountains on the way.</li><li>Experience the basket boat ride at Hoi An’s Coconut village.</li><li>Soak in the old town vibes at Hoi An lantern town and capture some #InstaPerfcet pictures. Take a lantern boat ride in Hoi An old town.</li><li>At night, relax while sipping beer at My Khe Beach in the evening.</li></ul>'
      },
      {
        day: 4,
        title: 'Golden Hand Bridge | Ba Na Hills',
        description: '<ul><li>One of the most memorable and enchanting experience awaits you today. Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li>Experience the world\'s best cable cars taking you through the clouds, misty funicular and majestic architecture.</li><li>Visit the iconic Golden Hand Bridge at Ba Na Hills.</li><li>Make a trip to the French Village and jump into a replica of classical France evident in its architectural elegance.</li><li>Take part in amusing games and activities at popular entertainment sites: Fantasy Park, Alpine Coaster, and Tombstone Temple.</li><li>In the evening, opt to chill in a local cafe or go out for pub crawl.</li></ul>'
      },
      {
        day: 5,
        title: 'Train Ride To Hue | Perfume river',
        description: '<ul><li>Wake up early in the morning (if you manage without a hangover) and go out for a small walk across the beach and treat yourself with a refreshing sunrise scene.</li><li>Post freshen-up, catch the train to Hue - another best kept secret of Vietnam.</li><li>Witness jaw-dropping views of the coast as you ride in your comfy coaches.</li><li>After arriving in Hue, check-in to your hotel and have leisure.</li><li>You can visit the Imperial City - A conserved complex consisting of ancient monuments such as temples, libraries, royal tombs and more.</li><li>In the evening, take a stroll around in the city, explore the beautiful cafes &amp; clubs of Hue.</li><li>Get ready to walk-head out for a quick walk along the Perfume river boulevard and soak in the calmness.</li></ul>'
      },
      {
        day: 6,
        title: 'Hanoi Calling | Kickass Nightlife & Chill',
        description: '<ul><li>Wake up early in the morning and get on board on your flight to the pretty town of Hanoi.</li><li>Soak in the vibes of yet another exciting part of Vietnam and feel free to stroll around the central district.</li><li>Get on board your vehicle to explore Hanoi city - visit the Prison museum, see the city\'s stunning Tran Quoc Pagoda and pay a visit to the late Mr Ho Chi Minh at the Ho Chi Minh Mausoleum.</li><li>Make the most out of your evening in Hanoi, either by exploring the kickass nightlife &amp; bars or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li></ul>'
      },
      {
        day: 7,
        title: 'The Halong Bay | Epic Cruise Party & More',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your cruise to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime. Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride and swimming in the sea.</li><li>In the evening, watch an #InstaPerfect sunset and gear up for an epic night party on the cruise.</li><li>Call it a night with a delightful dinner on cruise and stargazing.</li></ul>'
      },
      {
        day: 8,
        title: 'Back To Hanoi | Self Explore',
        description: '<ul><li>Wake up to the surreal sounds of the ocean.</li><li>Walk up to the deck and witness a soul-soothing sunrise over crystal blue turquoise waters.</li><li>Grab a satisfying morning meal and take a stop at hippie-island beach (if time permits). Post a hearty lunch, return to the harber and ride back to Hanoi.</li><li>The day is all yours, either head out to explore old quarters of the town, Hoan Kiem Lake or simply party with your clan in some bars or cafes.</li></ul>'
      },
      {
        day: 9,
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Flights (Vietnam Domestic): Ho Chi Minh City to Da Nang & Hue to Hanoi.',
      'Surface Transfers & Travel: All airport pick up/drop, Ho Chi Minh city tour, Da Nang to Hue Train, Da Nang city tour, Da Nang to Hoi An, Da Nang to Ba Na Hills.',
      'Accommodation: Social (dorms) or Private (Hotels) options available, centrally located.',
      'Meals: 10 meals (breakfasts and special meals).',
      'VISA Assistance: Professional assistance & guaranteed visa approval letter.',
      'Vietnam Trip Starter Kit: Forex Card, 2x 45-min personal webinars (trip prep, budgeting), packing guides.',
      'Other Inclusions: Virtual real-time guide, info on events, food, and free walking tours.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      'Museum/Monument entry fee/City Tax.',
      'Visa fee for Vietnam ($25 paid at Immigration).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS (5%) applicable extra (refundable in ITR).',
      'Paid Optional Add-ons- HaLong Bay Cruise: 2 Day 1 Night cruise.',
      'Paid Optional Add-ons- Ba Na Hills (From Da Nang): Day trip.',
      'Paid Optional Add-ons- Visa Secure: 100% refund on visa rejection.'
    ],
  },
  {
    slug: 'vietnam-north',
    title: 'Vietnam North', // From HTML
    destination: 'Vietnam',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹32000', // From HTML
    imageUrl: '/cloned_media/3632920220627220226.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/20251420220627220226.png',
      '/cloned_media/27294320220627220226.png',
      '/cloned_media/28631820220627220226.png',
      '/cloned_media/41755120220627220226.png',
      '/cloned_media/12358520220627220226.png',
      '/cloned_media/10193420220627220226.png',
      '/cloned_media/37018920220627220226.png',
      '/cloned_media/17949920220627220226.png',
      '/cloned_media/22729120220627220226.png',
      '/cloned_media/12523120220627220226.png',
      '/cloned_media/4994820220627220226.png',
      '/cloned_media/41911620220627220226.png',
      '/cloned_media/10680420220627220226.png',
      '/cloned_media/39224520220627220226.png',
      '/cloned_media/5753920220627220226.png',
      '/cloned_media/28374520220627220226.png',
      '/cloned_media/1198520220627220226.png',
      '/cloned_media/4632120220627220226.png',
      '/cloned_media/13513920220627220226.png'
    ],
    overview: '<p>A timeless charm and a south Asian country known for its magnificent natural beauty, historic treasures and delicious food &amp; coffee, Vietnam provides quite an unmatched experience. Decorated with abundance of natural attractions such as the limestone islands in Halong Bay, vast paddy fields or the massive cave system in Phong Nha Ke Bang National Park, Vietnam is arguably one of the most beautiful countries on the continent. Breathtaking natural beauty, artistic masterpieces and rich culture, fascinating cities and delightful authentic Vietnamese food, this backpacker-friendly country is fast gaining popularity around the world. How can we forget the vibrant streets and happening nightlife? You can’t resist giving your heart and soul to the country. From exploring cities to taking a walk amidst woods in nature reserve or learning the rich historical side, there\'s a lot to do on this chilled-out vacay to Vietnam.</p>', // From HTML
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Journey Begins | Vietnam Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel.</li><li>Check-in to your hotel and have some leisure.</li><li>Definitely you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 2,
        title: 'Hanoi City Tour | Kickass Nightlife & Chill',
        description: '<ul><li>Wake up early in the morning and get on board on your flight to the pretty town of Hanoi.</li><li>Soak in the vibes of yet another exciting part of Vietnam and feel free to stroll around the central district.</li><li>Get on board your vehicle to explore Hanoi city - visit the Prison museum, see the city\'s stunning Tran Quoc Pagoda and pay a visit to the late Mr Ho Chi Minh at the Ho Chi Minh Mausoleum.</li><li>Make the most out of your evening in Hanoi, either by exploring the kickass nightlife &amp; bars or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li></ul>'
      },
      {
        day: 3,
        title: 'Ninh Binh Day Trip',
        description: '<ul><li>Wake up early and drive towards the Ninh Binh,</li><li>Experience the paddle boat ride &amp; caving at Tam Coc.</li><li>Hike to the top of Mua Caves and get clicked yourself with the areal view of Ninh Binh.</li><li>Have a hearty lunch at Ninh Binh and begin your drive back to Hanoi.</li><li>The day is all yours, either head out to explore old quarters of the town, Hoan Kiem Lake or simply party with your clan in some bars or cafes.</li></ul>'
      },
      {
        day: 4,
        title: 'The Halong Bay',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your boat to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime. Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride and swimming in the sea.</li><li>Drive back to Hanoi &amp; chill at beer street.</li></ul>'
      },
      {
        day: 5,
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Surface Transfers & Travel: All airport pick up/drop, Travel during city tour of Hanoi.',
      'Accommodation: Social (dorms) or Private (Hotels) options available, centrally located.',
      'Meals: 4 meals for the entire trip (breakfasts and special meals).',
      'VISA Assistance: Professional assistance & guaranteed visa approval letter.',
      'Vietnam Trip Starter Kit: Forex Card, 2x 45-min personal webinars (trip prep, budgeting), packing guides.',
      'Other Inclusions: Virtual real-time guide, info on events, food, and free walking tours.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      'Museum/Monument entry fee/City Tax.',
      'Visa fee for Vietnam ($25 paid at Immigration).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS (5%) applicable extra (refundable in ITR).',
      'Paid Optional Add-on: HaLong Bay Cruise (2D1N) | ₹10,000.',
      'Paid Optional Add-on: Visa Secure (100% refund on rejection).'
    ],
  },
  {
    slug: 'ho-chi-minh-hanoi-6d5n',
    title: 'Ho Chi Minh & Hanoi 6D5N', // From HTML
    destination: 'Vietnam',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹39999', // From HTML
    imageUrl: '/cloned_media/37887720240212133944.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/5176020240212133943.png',
      '/cloned_media/20103820240212133943.png',
      '/cloned_media/35872020240212133943.png',
      '/cloned_media/14915220240212133943.png',
      '/cloned_media/9683920240212133944.png',
      '/cloned_media/40057320240212133944.png'
    ],
    overview: '<p>Vietnam is a beautiful country located in Southeast Asia, known for its stunning landscapes, rich history and vibrant culture. From the bustling cities to the tranquil countryside, Vietnam offers an endless array of experiences for travelers.</p><p>One of the most popular destinations in Vietnam is its capital city, Hanoi. This charming city boasts a mix of old-world charm and modern development. Take a stroll through the Old Quarter and discover ancient temples, traditional markets and narrow alleyways filled with street vendors selling everything from local snacks to handmade souvenirs.</p><p>Another must-visit destination in Vietnam is Ho Chi Minh City, formerly known as Saigon. This fast-paced metropolis is home to skyscrapers, shopping malls and trendy restaurants alongside historical landmarks such as the Reunification Palace and War Remnants Museum. You can also take a day trip to the nearby Cu Chi Tunnels, an impressive network of underground tunnels used during the Vietnam War.</p><p>For those looking for a more laid-back experience, head to the picturesque town of Hoi An. This UNESCO World Heritage Site is known for its well-preserved ancient architecture and colorful lanterns that adorn the streets at night. Take a walk along the Thu Bon River or visit one of the many tailors in town to get custom-made clothing at affordable prices.</p><p>Nature lovers will find paradise in Vietnam as well. The country is home to stunning landscapes such as Ha Long Bay, a UNESCO World Heritage Site with thousands of limestone islands jutting out from emerald waters.</p>', // From HTML
    itinerary: [ // From HTML i_data, formatted with HTML
      {
        day: 1,
        title: 'HANOI ARRIVAL, CITY TOUR',
        description: '<ul><li>Arrival in Noi Bai International Airport Orlando to settle into the lively environment of the city and get ready to explore. After doing the specific formality procedures, you will meet your dedicated driver who will take you to your selected hotel. Check-in to your selected hotel, explore the surrounding as per your choice and enjoy the relaxation, overnight.</li></ul>'
      },
      {
        day: 2,
        title: 'HANOI – HALONG BAY – HANOI (SIC)',
        description: '<ul><li>Have breakfast at the hotel and energize your morning for having a great exploration. After reaching Ha Long Bay, you\'ll explore the four-hour cruise through this breathtaking natural wonder. The bay, adorned with over 3,000 sculpted islands shaped by time, wind, and waves, creates a magical landscape resembling fairy-tale castles. Wander through the karst cliffs which reveal rocky spires and hidden caves, providing a mesmerizing experience. Bless your tastebuds with the delightful lunch and step into the world of exploration through the most stunning limestone caves in the area. After a long day of exploration we’ll be heading back to the hotel. Enjoy the mellow vibes of the evening by exploring the surrounding as per your choice and enjoy the relaxation, overnight.</li></ul>'
      },
      {
        day: 3,
        title: 'A VENTURE TO HANOI AND HO CHI MINH CITY',
        description: '<ul><li>Have breakfast at the hotel and energize your morning for having a great exploration to the Ho Chi Minh\'s complex, including the mausoleum of the nation, founder and leader.</li><li>Explore Hanoi\'s historical landmarks, including the Presidential Palace, Uncle Ho\'s stilt house, and the iconic One Pillar Pagoda. Visit the Temple of Literature, Vietnam\'s oldest university. After this we’ll be transferred to Ho Chi Minh City. Check-in to your selected hotel, explore the surrounding as per your choice and enjoy the relaxation, overnight.</li></ul>'
      },
      {
        day: 4,
        title: 'AN ADVENTUROUS TOUR FROM HO CHI MINH CITY TO CU CHI TUNNELS',
        description: '<ul><li>Have breakfast at the hotel and energize your morning for a great exploration to Reunification Palace, the Opera House and the Hotel de Ville. Do research deeper into Vietnam\'s history for the visit to the poignant War Remnants Museum, displaying a collection of powerful images from the Vietnam Wars. Explore the best by wandering through the outdoor markets and Dong Khoi Street, the city\'s primary shopping boulevard featuring items by new Vietnamese designers, hill tribe crafts, and quality linens. In the afternoon, we’ll be heading to Cu Chi Tunnels, an extensive underground network stretching over 250 km at its peak. This has, three levels deep, housed trap doors, living areas, storage, factories, hospitals, and more. Today, the tunnels offer a unique insight into underground life during the U.S.-Vietnam War. Return to Ho Chi Minh City and enjoy free time. Check-in to your selected hotel, explore the surrounding as per your choice and enjoy the relaxation, overnight.</li></ul>'
      },
      {
        day: 5,
        title: 'TRIP TO MEKONG (BEN TRE) & HO CHI MINH CITY',
        description: '<ul><li>Have breakfast at the hotel and energize your morning for a great exploration to My Tho, on a Mekong Delta adventure, the first town on the main branch of the Mekong. Drive to Rach Mieu suspension bridge for a panoramic view of the Mekong and its surrounding islands. Explore the four islands – Thoi Son, Tan Long, Con Qui, and Con Phung – extending over 15km on the river. Cruise along Ben Tre River, a tributary of the Ham Luong, visiting a brick kiln and a coconut shell husking workshop. Soak yourself in the lively environment, by observing daily life as farmers while trying coconut shell husking.</li><li>Wandering through the waterways including visiting a coconut candy workshop, a key product that made Ben Tre famous. Also explore the local market in Nhon Thanh commune, explore market products, and walk 500m to visit a farmer\'s workshop making sleeping mats. Continue the Mekong adventure by bicycle or on a traditional Lambretta triporteur, winding through coconut palms and farms to a local house for lunch. In the afternoon, explore more of the coconut farms and fruit orchards on foot, taking a 700m promenade through the village. Enjoy a paddling experience on a small waterway in a hand-rowed sampan. Cruise back to the boat landing in Ben Tre town and drive back to Saigon, with a possible stop in Ben Luc to observe rice planting and harvesting. Explore the surrounding as per your choice and enjoy the relaxation, overnight.</li></ul>'
      },
      {
        day: 6,
        title: 'FLYING BACK TO HOME',
        description: '<ul><li>Have breakfast at the hotel and energize your morning. Pack yourself for checking-out from the hotel and the dedicated driver will take you to the airport for flying back home.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Hotel Services: mentioned in the itinerary.',
      'Transport: SIC (seat in coach).',
      'Meals: mentioned in the itinerary.',
      'Tour guide: tour guide with English-speaking',
      'Airport Reaching Services: transferring to the airport will be available upon your arrival and return.',
      'Sightseeing: mentioned in the itinerary.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'The expenses of laundry, telephone calls, room service, alcoholic beverages, minibars, etc. are not covered.',
      'Special dinners or mandatory charges by the hotels, particularly during New Year\'s, Christmas, or any special events, are not included in the package price.',
      'Ticket bookings are not provided from our side.'
    ],
  },
  {
    slug: 'gems-of-vietnam-couple-exclusive',
    title: 'Gems of Vietnam - Couple Exclusive', // From HTML
    destination: 'Vietnam',
    duration: '7 Days 6 Nights', // From HTML
    price: 'Customization Available', // Price is null/0 in HTML, keeping placeholder
    imageUrl: '/cloned_media/40202220250527130511.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/39118420250527130511.png',
      '/cloned_media/27150120250527130511.png',
      '/cloned_media/649120250527130511.png',
      '/cloned_media/6923720250527130511.png',
      '/cloned_media/22182620250527130511.png'
    ],
    overview: 'A 7-day romantic trip for couples, highlighting the gems of Vietnam with exclusive experiences.', // Kept placeholder as description was null
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Arrival in Hanoi | Leisure Day',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Hanoi you will meet our representative. After clearing out all formalities, get driven towards your hotel. Check-in to your comfy hotel and have some leisure.</li><li>On this day we will not follow a set itinerary.</li><li>You can explore various attractions like visiting Ho Chi Minh Mausoleum, Huc Bridge, and Ngoc Son Temple Hanoi.&nbsp;</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Day Trip to Ninh Binh',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready to get transferred to Hoa Lu in Ninh Binh district.&nbsp;</li><li>Explore the ancient temples of Le and Dinh Dynasties, and embark on a serene boat trip through Tam Coc.</li><li>Witness the picturesque landscape of stunning limestone formations, lush rice paddies and beautiful caves.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfer to Halong Bay | Overnight Cruise',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, check-out from your hotel and get driven to Tuan Chau Marina where you will board a traditional sailing cruise.&nbsp;</li><li>Check-in and enjoy the beautiful landscape.</li><li>Enjoy various activities like swimming or kayaking through the clear water.</li><li>Return to your cabin for an overnight stay on the cruise.</li></ul>'
      },
      {
        day: 4,
        title: 'Transfer to Ho Chi Minh City via Hanoi | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to go on a boat ride to the Surprise Cave, the largest cave in Halong Bay and admire its scenic beauty.</li><li>After deboarding the cruise, get transferred to Hanoi for your flight to Ho Chi Minh City.</li><li>Upon arrival, get driven to your hotel for check-in.</li><li>On this day, we will not follow a set itinerary.</li><li>You can spend the day at your own pace, exploring the city on your own.</li><li>Return back to your hotel for an overnight stay in Ho Chi Minh City.</li></ul>'
      },
      {
        day: 5,
        title: 'Visit to Cu Chi Tunnels | Ho Chi Minh City Tour',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get driven to discover the Cu Chi Tunnels, an extensive network of underground passages used during the Vietnam War.</li><li>Later, get transferred for a half-day tour of Ho Chi Minh City where you will explore the Presidential Palace, War Remnants Museum, and the Notre-Dame Cathedral Basilica.&nbsp;</li><li>Visit the Central Post Office as well.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Mekong Delta Tour',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, embark on a Mekong Delta Tour.&nbsp;</li><li>Visit Vinh Trang Pagoda, before you set sail on a boat ride along the Mekong River.</li><li>Explore My Tho, the floating market city of Vietnam, and Tortoise Islet during the ride.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 7,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>It is time to say goodbye to a lovely Vietnam trip. Post a delightful breakfast, pack your bags and complete check-in formalities.</li><li>Board your flight back to India with a bag full of heartfelt memories and amazing experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Internal Flights: Flights included from Hanoi to Ho Chi Minh City.',
      'Surface Transfers: All airport pick ups & drops and sightseeing transfers as per the itinerary.',
      'Meals: 6 meals for the entire trip including 2 Breakfasts in Hanoi, 1 Breakfast in Halong Bay, 3 Breakfasts in Ho Chi Minh.',
      'Accommodations: 2 nights stay in Hanoi, 1 night stay in Halong Bay, 3 nights stay in Ho Chi Minh.',
      'Sightseeing Tours & Entry Tickets: Halong Bay Overnight Cruise - Shared Basis & Ticket, Ninh Binh Day Tour, Cu Chi Tunnel Half Day Tour, Mekong Delta Tour, Half Day Ho Chi Minh City Tour.',
      'VISA Assistance: Professional visa assistance is provided by experts.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any International Flights.',
      'Meals that are not mentioned in the program. Any kind of food or beverage that is not included in the package like alcoholic drinks, mineral water, meals/refreshments/lunches on the highway.',
      'Early check-in and late check-out. Hotel or Room upgrade.',
      'Guide & Entrance fees during sightseeing or any other item not specified in inclusions.',
      'Any personal expenses like a tip to the drivers, camera/video camera charges, laundry, telephone bills, tips, etc.',
      'Travel Insurance and any cost arising due to natural calamities, roadblock, etc.',
      'Tourism Fee/Security Deposit will be payable at the hotel.',
      'Anything not mentioned in the inclusions.',
      'GST (5%) is applicable extra.',
      '5% TCS as per govt. rules will be applicable on the Total Package Cost... (claimable while filing ITR).'
    ],
  },
  {
    slug: 'romantic-vietnam-vacation',
    title: 'Romantic Vietnam Vacation', // From HTML
    destination: 'Vietnam',
    duration: '8 Days 7 Nights', // From HTML
    price: 'Customization Available', // From original slug (HTML price is null)
    imageUrl: '/cloned_media/28216720250527114658.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/38696220250527114657.png',
      '/cloned_media/14564120250527114657.png',
      '/cloned_media/25709620250527114657.png',
      '/cloned_media/3314620250527114658.png',
      '/cloned_media/34599620250527114658.png',
      '/cloned_media/12106320250527114658.png'
    ],
    overview: 'An 8-day romantic vacation designed for couples, balancing leisure, culture, and stunning scenery.', // From original slug (HTML description is null)
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Arrival in Hanoi | Leisure Day',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Hanoi you will meet our representative. After clearing out all formalities, get driven towards your hotel. Check-in to your comfy hotel and have some leisure</li><li>On this day we will not follow a set itinerary.</li><li>You can visit 87 Ma May Street, where you will witness Hanoi’s architectural heritage.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Transfer to Halong Bay | Overnight Cruise',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check-out from your hotel and board your cruise from Tuan Chau Harbour.&nbsp;</li><li>Explore Ti Top Island, visit the Pearl Farm Village, and enjoy water activities like kayaking and swimming.</li><li>Learn the culinary secrets of Vietnamese cuisine with an onboard cooking class.</li><li>End your adventurous day with an overnight stay at the cruise, surrounded by the beauty of Halong Bay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfer to Hanoi | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready for a rejuvenating Tai Chi lesson on the cruise and later a visit to the enchanting Floating Village.</li><li>Deboard the cruise and get transferred to Hanoi. Check-in at the hotel.</li><li>On this day, we will not follow a set itinerary.</li><li>You can explore the city’s main attraction on your own, such as visiting the Ho Chi Minh Mausoleum, or go on a shopping spree in Dong Xuan Market.</li><li>Return back to your hotel in Hanoi for an overnight stay.</li></ul>'
      },
      {
        day: 4,
        title: 'Hanoi Sightseeing Tour | Transfer to Da Nang',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready for a Hanoi sightseeing tour.&nbsp;</li><li>Check out from your hotel and board your pre-booked transfer.&nbsp;</li><li>Explore famous attractions like One Pillar Pagoda, Chua Tran Quoc, Old Quarter, and Huc Bridge.</li><li>After the sightseeing tour, get transferred to Noi Bai International Airport for your flight to Da Nang.</li><li>Upon arrival, get transferred to your hotel, check-in for an overnight stay in Da Nang.</li></ul>'
      },
      {
        day: 5,
        title: 'Excursion to Ba Na Hills',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to embark on a thrilling day trip to Ba Na Hills.&nbsp;</li><li>Get transferred to Suoi Mo Station to enjoy a cable car ride to the summit.</li><li>Head to the Linh Ung Pagoda and witness panoramic views of the South China Sea from there, also discover the secrets of winemaking at the Debay Wine Cellar and experience thrilling rides in Fantasy Park.</li><li>Later, visit the iconic Golden Hand Bridge and capture some #InstaPerfect pictures.</li><li>Return from your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Transfer to Hoi An | Transfer to Ho Chi Minh',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check out from your hotel in Da Nang and get driven to the charming town of Hoi An.</li><li>Visit iconic attractions like the Japanese Covered Bridge, the Assembly Hall of Fujian Chinese, and the Museum of Sa Huynh Culture.</li><li>Later, get driven to Da Nang International Airport for your onward flight to Ho Chi Minh City.</li><li>Upon arrival, get transferred to your hotel, check-in for an overnight stay in Ho Chi Minh City.</li></ul>'
      },
      {
        day: 7,
        title: 'Ho Chi Minh City Tour with Cu Chi Tunnels',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, head out to explore Cu Chi Tunnels, an underground network which played an important role in the Vietnam War.</li><li>Continue the Ho Chi Minh sightseeing tour and visit the Reunification Palace and the War Remnants Museum.</li><li>Later, witness the iconic Saigon Central Post Office, a masterpiece of French colonial architecture.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 8,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>It is time to say goodbye to a lovely Vietnam trip. Post a delightful breakfast, pack your bags and complete check-in formalities.</li><li>Board your flight back to India with a bag full of heartfelt memories and amazing experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Internal Flights: Flights included from Hanoi to Da Nang & Da Nang to Ho Chi Minh City.',
      'Surface Transfers: All airport pick ups & drops and sightseeing transfers as per the itinerary.',
      'Meals: 10 meals (as specified in itinerary - 7 Breakfasts, 1 Lunch, 1 Dinner, 1 unspecified).',
      'Accommodations: 7 nights stay (2 Hanoi, 1 Halong Bay, 2 Da Nang, 2 Ho Chi Minh).',
      'Sightseeing Tours & Entry Tickets: Halong Bay Overnight Cruise, Hanoi City Tour, Ba Na Hills & Golden Bridge, Hoi An Walking Tour, Cu Chi Tunnel Tour, Ho Chi Minh City Tour.',
      'VISA Assistance: Professional visa assistance is provided by experts.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any International Flights.',
      'Meals that are not mentioned in the program or inclusions.',
      'Early check-in and late check-out. Hotel or Room upgrade.',
      'Guide & Entrance fees not specified in inclusions.',
      'Any personal expenses (tips, laundry, drinks, etc.).',
      'Travel Insurance and costs from natural calamities, roadblocks, etc.',
      'Tourism Fee/Security Deposit payable at hotel.',
      'Anything not mentioned in the inclusions.',
      'GST (5%) applicable extra.',
      '5% TCS applicable extra (claimable while filing ITR).'
    ],
  },
  {
    slug: 'romantic-vietnam-vacation',
    title: 'Romantic Vietnam Vacation', // From HTML
    destination: 'Vietnam',
    duration: '8 Days 7 Nights', // From HTML
    price: 'Customization Available', // Price in HTML is '0'
    imageUrl: '/cloned_media/28216720250527114658.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/38696220250527114657.png',
      '/cloned_media/14564120250527114657.png',
      '/cloned_media/25709620250527114657.png',
      '/cloned_media/3314620250527114658.png',
      '/cloned_media/34599620250527114658.png',
      '/cloned_media/12106320250527114658.png'
    ],
    overview: 'An 8-day romantic vacation designed for couples, balancing leisure, culture, and stunning scenery.', // Kept placeholder as HTML description was null
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 1,
        title: 'Arrival in Hanoi | Leisure Day',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Hanoi you will meet our representative. After clearing out all formalities, get driven towards your hotel. Check-in to your comfy hotel and have some leisure</li><li>On this day we will not follow a set itinerary.</li><li>You can visit 87 Ma May Street, where you will witness Hanoi’s architectural heritage.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Transfer to Halong Bay | Overnight Cruise',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check-out from your hotel and board your cruise from Tuan Chau Harbour.&nbsp;</li><li>Explore Ti Top Island, visit the Pearl Farm Village, and enjoy water activities like kayaking and swimming.</li><li>Learn the culinary secrets of Vietnamese cuisine with an onboard cooking class.</li><li>End your adventurous day with an overnight stay at the cruise, surrounded by the beauty of Halong Bay.</li></ul>'
      },
      {
        day: 3,
        title: 'Transfer to Hanoi | Leisure Day',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready for a rejuvenating Tai Chi lesson on the cruise and later a visit to the enchanting Floating Village.</li><li>Deboard the cruise and get transferred to Hanoi. Check-in at the hotel.</li><li>On this day, we will not follow a set itinerary.</li><li>You can explore the city’s main attraction on your own, such as visiting the Ho Chi Minh Mausoleum, or go on a shopping spree in Dong Xuan Market.</li><li>Return back to your hotel in Hanoi for an overnight stay.</li></ul>'
      },
      {
        day: 4,
        title: 'Hanoi Sightseeing Tour | Transfer to Da Nang',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, get ready for a Hanoi sightseeing tour.&nbsp;</li><li>Check out from your hotel and board your pre-booked transfer.&nbsp;</li><li>Explore famous attractions like One Pillar Pagoda, Chua Tran Quoc, Old Quarter, and Huc Bridge.</li><li>After the sightseeing tour, get transferred to Noi Bai International Airport for your flight to Da Nang.</li><li>Upon arrival, get transferred to your hotel, check-in for an overnight stay in Da Nang.</li></ul>'
      },
      {
        day: 5,
        title: 'Excursion to Ba Na Hills',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to embark on a thrilling day trip to Ba Na Hills.&nbsp;</li><li>Get transferred to Suoi Mo Station to enjoy a cable car ride to the summit.</li><li>Head to the Linh Ung Pagoda and witness panoramic views of the South China Sea from there, also discover the secrets of winemaking at the Debay Wine Cellar and experience thrilling rides in Fantasy Park.</li><li>Later, visit the iconic Golden Hand Bridge and capture some #InstaPerfect pictures.</li><li>Return from your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Transfer to Hoi An | Transfer to Ho Chi Minh',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, prepare to check out from your hotel in Da Nang and get driven to the charming town of Hoi An.</li><li>Visit iconic attractions like the Japanese Covered Bridge, the Assembly Hall of Fujian Chinese, and the Museum of Sa Huynh Culture.</li><li>Later, get driven to Da Nang International Airport for your onward flight to Ho Chi Minh City.</li><li>Upon arrival, get transferred to your hotel, check-in for an overnight stay in Ho Chi Minh City.</li></ul>'
      },
      {
        day: 7,
        title: 'Ho Chi Minh City Tour with Cu Chi Tunnels',
        description: '<ul><li>Wake up in the morning and post a delightful breakfast, head out to explore Cu Chi Tunnels, an underground network which played an important role in the Vietnam War.</li><li>Continue the Ho Chi Minh sightseeing tour and visit the Reunification Palace and the War Remnants Museum.</li><li>Later, witness the iconic Saigon Central Post Office, a masterpiece of French colonial architecture.</li><li>Return back to your hotel for an overnight stay.</li></ul>'
      },
      {
        day: 8,
        title: 'Goodbye Vietnam | Trip Ends',
        description: '<ul><li>It is time to say goodbye to a lovely Vietnam trip. Post a delightful breakfast, pack your bags and complete check-in formalities.</li><li>Board your flight back to India with a bag full of heartfelt memories and amazing experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Internal Flights: Flights included from Hanoi to Da Nang & Da Nang to Ho Chi Minh City.',
      'Surface Transfers: All airport pick ups & drops and sightseeing transfers as per the itinerary.',
      'Meals: 10 meals for the entire trip (7 Breakfasts, 1 Lunch, 1 Dinner, 1 unspecified Lunch/Dinner).', // 2 HNI-B, 1 HB-B, 1 HB-L/D, 2 DAN-B, 2 HCM-B
      'Accommodations: 7 nights stay (3 Hanoi, 1 Halong Bay, 2 Da Nang, 2 Ho Chi Minh).', // 1+1 HNI, 1 HB, 2 DAN, 2 HCM
      'Sightseeing Tours & Entry Tickets: Halong Bay Overnight Cruise, Hanoi City Tour, Ba Na Hills & Golden Bridge, Hoi An Walking Tour, Cu Chi Tunnel Tour, Ho Chi Minh City Tour.', // Cleaned duplicates
      'VISA Assistance: Professional visa assistance is provided by experts.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any International Flights.',
      'Meals that are not mentioned in the program or inclusions.',
      'Early check-in and late check-out. Hotel or Room upgrade.',
      'Guide & Entrance fees not specified in inclusions.',
      'Any personal expenses (tips, laundry, drinks, etc.).',
      'Travel Insurance and any cost arising due to natural calamities, roadblock, etc.',
      'Tourism Fee/Security Deposit payable at hotel.',
      'Anything not mentioned in the inclusions.',
      'GST (5%) applicable extra.',
      '5% TCS applicable extra (claimable while filing ITR).'
    ],
  },
  {
    slug: 'vietnam-honeymoon-trip-hanoi-da-nang',
    title: 'Vietnam Honeymoon Trip - Hanoi & Da Nang', // From HTML
    destination: 'Vietnam',
    duration: '7 Days 6 Nights', // From HTML (Day 0 to Day 6)
    price: '₹65000', // From HTML
    imageUrl: '/cloned_media/5212320231027215055.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/21928120231027215055.png',
      '/cloned_media/16878920231027215055.png',
      '/cloned_media/30438420231027215055.png',
      '/cloned_media/38998820231027215055.png',
      '/cloned_media/25886220231027215055.png',
      '/cloned_media/575220231027215055.png',
      '/cloned_media/14437120231027215055.png',
      '/cloned_media/1601920231027215055.png',
      '/cloned_media/24136820231027215055.png',
      '/cloned_media/18900820231027215055.png'
    ],
    overview: '<h2>About Vietnam Honeymoon Trip - Hanoi and DaNang</h2><p>A <b>honeymoon trip to Vietnam</b> including Hanoi and Da Nang, is a combination of cultural experiences, natural beauty and romantic moments that cannot be beat. The role of Hanoi as the capital is much more than just being a head of state: it gives you an insight into this country’s rich history and traditions. Just-married couples can find themselves completely in the Old Quarter’s maze, where the temples, markets, shops create the special spirit that belongs to a bygone era. An early morning on the magical Hoan Kiem Lake followed by a colorful water puppet show would give you your first profound touch of Vietnamese culture. From Hanoi, spouses can head towards Hoi An which is a cute UNESCO World Heritage town near Da Nang. This preserved ancient town impresses tourists with its street decorated with colorful lanterns and house facades/shophouses/ coloured in yellow or ochre / the Japanese Covered Bridge being there. A laid-back boat trip on Thu Bon River affords couples the chance to enjoy the peaceful atmosphere and romantic feel of the town. Couples may have tailored clothes made in Hoi An as souvenirs of their trip since it also boasts skilled tailors who provide that service.</p><p>Da Nang is perfectly suitable for those who want to have quiet holiday to relax or simply do nothing but admire natural beauties around them.A walk on the pristine beaches of Non Nuoc, by the warm turquoise waters with white sandy shores is perfect for romantic strolls, side by side massages and admiring sunsets. Adventurers can explore the Marble Mountains, a group of limestone and marble hills which are adorned with old pagodas and contain hidden caves.</p><p>For a more tranquil setting, couples can visit Linh Ung Pagoda where they will be enchanted by the beauty of this Buddhist temple complex situated on Son Tra Peninsula famous for its lush gardens, detailed architecture and spectacular views of the East Sea. Rich in cultural heritages, natural beauties, and love sparks makes a honeymoon in Hanoi and Da Nang be an unforgettable memory to last forever.</p><h3>Best Places to Visit in Vietnam Honeymoon Trip</h3><ul><li><strong>Hanoi-</strong> The capital of Vietnam, <a href="https://go4explore.com/trips/vietnam-danang-hanoi-6d5n" style="color:blue;">Hanoi</a>, is a land of heritage charm and contemporary energy which makes it perfect for honeymooners. You can wander through the atmospheric Old Quarter, with a labyrinthine network of narrow streets that are home to everything from centuries-old temples and traditional stores to lively markets full of color and activity. Boat trip around Hoan Kiem Lake &amp; visit Ngoc Son Temple. Catch a water puppet show (a style of traditional Vietnamese art) in the evening. You can walk around the French colonial architecture, visit museums, and taste.</li><li><strong>Halong Bay-</strong> Halong Bay, a captivating natural phenomenon, is a must visit destination for honeymoon getaway in Vietnam. Recognized as a UNESCO World Heritage Sight, this breathtaking destination offers an array of captivating experiences. Indulge in the luxury of a cruise traversing the enchanting emerald waters while being enthralled by the majestic limestone karst formations that tower above the sea. As the sun sets, immerse yourself in the ambiance of candlelit dinners, creating an atmosphere of intimacy and romance. And wake up to the stunning sunrise views. Kayak through the hidden caves, go swimming in the crystal-clear waters, and explore the stunning islands dotting the bay. For an unforgettable experience, book a private cruise and enjoy the bay\'s mesmerizing beauty in solitude.</li><li><strong>Hoi An-</strong> The historic town of Hoi An recognized as a UNESCO World Heritage Site has an delightful ambiance that charms couples on their honeymoon. Walk hand in hand through the lantern lit streets lined with shop houses and the famous Japanese Covered Bridge. Enjoy a boat ride along the Thu Bon River taking in the views. Experience art together, by enrolling in a cooking class to prepare traditional dishes side by side. Discover the town\'s temples, explore the Marble Mountains or unwind on the pristine Cua Dai Beach. Make sure not to miss out on getting tailor made outfits from Hoi An tailors.</li><li><strong>Hue-</strong> Hue, the capital of Vietnam is a treasure trove of history and culture that honeymooners will appreciate. Discover the Imperial City, a UNESCO World Heritage Site and its majestic citadel where the Nguyen Dynasty once resided. Explore the tombs of emperors, marvels of architecture set amidst gardens and serene landscapes. Embark, on a boat ride along the Perfume River to take in the scenery and historical sites. Delight in a royal feast featuring ornate attire and captivating performances. Immerse yourself in the Hues scene by relishing local specialties, like bun bo Hue (beef noodle soup) and royal rice delicacies.</li><li><strong>Nha Trang-</strong> <a href="https://en.wikipedia.org/wiki/Nha_Trang" style="color:blue;" rel="noopener noreferrer" target="_blank">Nha Trang</a>, a coastal city on the southern coastline of Vietnam is an idyllic paradise for newlyweds looking for just sun, sea and relaxation. It\'s nice to let yourself loose on the immaculate beaches that have fine white sands and turquoise waters which beckon you in. Treat yourselves to a couple\'s spa and beach massages or try your hands in water sports like snorkeling, diving, or island-hopping. Take a cable car trip to Hon Tre Island where you can be thrilled by the amazing views all over the island as well as its natural beauty. Later at night you will feast on fresh seafood at beachside eateries and raise a toast to your love with cocktails while admiring the spectacular sunsets above you both.</li><li><strong>Da Lat-</strong> Da Lat, an attractive hill station in Central Highland of Vietnam is a perfect place for lovers who want to escape into cool weather, French colonial architecture and picturesque landscapes. You can take a casual stroll together down these charming streets admiring the colorful villas, cafes and gardens along the way. Discover one of the most gorgeous natural surroundings that feature waterfalls, lakes, pine forests among others. Go for a romantic horse carriage ride through picturesque streets or go on hiking expeditions around near mountains. Pay a visit to Crazy House which is a wonderful architectural piece or have wine testing at one of the local vineyard.Cozy up in the evenings by the fireplace and take it easy while you enjoy the atmosphere of this small town.</li><li><strong>Phu Quoc Island-</strong> One of the luxurious natural paradises Phu Quoc, located southwards in Vietnam is ideal for those who are looking for romance and beauty on their honeymoon. On the island’s beaches made of powdery white-sands, you will be surrounded by rows of palm trees that sway gently in light breezes as well as clear blue waters. Check in to a beachfront luxury resort with romantic candlelit dinners, couples spa treatments and private beach experiences awaiting you. You can find natural wonders on the island such as Phu Quoc National Park with trekking routes, waterfalls and various flora and fauna. You can also join snorkeling or diving activities to explore rich marine life and coral reefs. Towards evening hours, book a sunset cruise to celebrate your love under the starry sky.</li></ul><h3>Things to do on Vietnam Honeymoon Trip</h3><p>The Vietnam honeymoon trip provides countless romantic experiences and things to do on a Vietnam honeymoon that newlyweds can engage in. Here are some of the top things to do on a Vietnam honeymoon trip:</p><ul><li><strong>Cruise along Halong Bay:</strong> A cruise along the mesmerizing Halong Bay, which is a UNESCO’s World Heritage Site, is an absolute must-do thing. Cruise through emerald waters and take in impressive limestone karst formations majestically protruding from the sea. Stay overnight on a luxury cruise for an ultimate experience.</li><li><strong>Visit the Quaint Hoi An Ancient Town:</strong> Stroll around Hoi An’s charming streets, which are adorned with lanterns, shophouses of many colors and the iconic Japanese Covered Bridge that made it into UNESCO world heritage list. Take a boat ride tour down Thu Bon River then end your day at one of the town’s intimate restaurants for a romantic candlelit dinner.</li><li><strong>Have Couples Spa Treatment:</strong> Pamper yourselves with a couple\'s spa treatments and refreshing massages. Traditional massage techniques and luxurious spa facilities can be found all over Vietnam; have yourselves luxuriantly pampered amidst serene surroundings surrounded by nature.</li><li><strong>Learn Vietnamese Cookery Together:</strong> Take a Vietnamese cookery class together as you embark on a culinary journey as part of your honeymoon package. Learn how to make traditional dishes such as pho, banh mi or spring rolls and create everlasting memories while bonding over something like this.</li><li><strong>Discovering the Imperial City of Hue:</strong> A step towards yesterday and an exploration of the marvelous Old Capital City of Vietnam – Hue. Gaze at the ancient fortress, visit the emperor\'s tombs and take a trip on a romantic boat along the Perfume River.</li><li><strong>Walking through Delightful Landscapes:</strong> In Vietnam there are breathtaking landscapes that make perfect hiking tours. Marvel in Sapa’s green rice terraces, stunning mountains of Dalat or the trails within Phong Nha-Ke Bang National Park, a UNESCO World Heritage Site.</li><li><strong>Just Lie on Untouched Beaches:</strong> Vietnam has many beautiful untouched beaches which are ideal for relaxing and having some romantic moments. For example, Non Nuoc, Phu Quoc or Nha Trang offer a chance to bask in the sun, swim in turquoise waters splashed with warmth. Beachside massages barbecues by candlelight and sunset walks can all be enjoyed here.</li><li><strong>Exploring Colorful Cities:</strong> Cities like Hanoi and Ho Chi Minh City have their own colorful personalities that you can experience in full when visiting Vietnam. Stroll about busy markets, look at famous places and feel the coexistence of modernity and traditionalism.</li><li><strong>Shop for Souvenirs and Unique Gifts:</strong> Vietnam is renowned for its vibrant markets and skilled artisans. Shop for unique souvenirs, handcrafted items, and custom-tailored clothing as mementos of your memorable honeymoon journey.</li></ul><h3>How to Reach Vietnam</h3><p>The best option for traveling from India to Vietnam is by air, with direct and indirect flights being offered by many airlines. Those who prefer a straightforward route can fly with Air India from Delhi to Hanoi or IndiGo and Vietjet Air from Delhi to Ho Chi Minh City. These non-stop flights take about 4.5-5.5 hours. Alternatively, those traveling from other Indian cities may choose connecting flights via the major transit hubs such as Bangkok, Singapore, Kuala Lumpur or Doha. Thai Airways, Singapore Airlines, Malaysia Airlines and Qatar Airways are some of the airlines that provide perfect connections between these destinations which will make sure you have efficient traveling time in between your journey. Depending on the route taken as well as the waiting times at the stopovers these connected journeys can take anywhere between 8 and 12 hours in total flight time; added to this is layover duration also included in total travel time spent during connection points. The major international airports in Vietnam include Noi Bai (Hanoi), Tan Son Nhat (Ho Chi Minh City), and Da Nang.</p><h3>Best Time to Visit Vietnam</h3><p>Vietnam have͏ a tropical mo͏nsoon weath_blanker ͏with three different se͏asons in va͏ri͏ous areas. The id͏eal time to go͏ depends on what you enjoy and what activities you wan͏t to do.</p><ul><li><strong>Spring (February to April):</strong> Spring is a great time to tr͏a͏vel to man͏y areas of͏ Vietnam. The climate is dry and enjoya͏ble, with temperatures between 20°͏C and 30°C. This period is perfect for discovering t͏h͏e cities, be͏aches, and rur͏al areas of the country͏. It\'s also a good time for activit͏ies such as hiking and ͏b͏iking.</li><li><strong>Summ͏er (May to A͏ugust):</strong> ͏Summer brings ͏warm and sticky ͏weathe͏r, with temperatures reaching up͏ to 35°C. Coastal area and northern͏ region ͏have heavy rainfall dur͏i͏ng͏ ͏this season. However, the central and southern ͏region stay relatively͏ dry͏, making it a good time ͏to visit places like Nha Tr͏ang, Phu Quoc Island͏, ͏and Ho Chi Minh City.</li><li><strong>Autu͏mn (September to Novembe͏r):</strong> A͏utu͏mn is known for being a prime season for traveling to Vietnam. Weather during this͏ period remain dry and pleasant featu͏rin͏g temperature͏ that fluctua͏tes between 20°C͏ and 30°C. It is a͏n excellent time ͏to ͏disco͏ver northern areas li͏ke͏ Hanoi Halong Bay and Sapa. The season ͏also proves͏ perfect ͏for enga͏ging in outdoo͏r activities a͏nd participating in cultural͏ festivities.</li><li><strong>Winter (December to January):</strong> Winte͏rs in Vietnam tend to be gentle, exhibi͏ting tempera͏ture that fluctuate͏ betwe͏en ͏15°C͏ and ͏25°C. Northern areas͏ ͏ofte͏n experience cooler weather ͏unlike the warmer, dri͏er condition͏s prevalent in its southern coun͏t͏erpart͏. Such͏ a season is considered favorabl͏e͏ for tourists to enjoy ce͏ntral an͏d southern Vietnamese beaches along w͏ith t͏he urban sights and cu͏ltural landmarks.</li></ul>', // From HTML
    itinerary: [ // From HTML i_data, adjusted day numbering
      {
        day: 1, // Day 0 in source
        title: 'Hanoi Calling | Kickass Nightlife & Chill',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler)</li><li>Pickup from airport and drop to your hotel.</li><li>Soak in the vibes of Vietnam and get on board your vehicle to explore Hanoi city.</li><li>Visit the famous Hanoi Train Street.</li><li>Make the most out of your evening in Hanoi, either by exploring the nightlife or chilling in a quaint cafe, thus experiencing the wonderful hospitality of this lovely country.</li></ul>'
      },
      {
        day: 2, // Day 1 in source
        title: 'Ninh Binh Day Tour',
        description: '<ul><li>Post breakfast, you will have a smooth pick-up from your Hanoi hotel</li><li>Arrive at the architecturally unique temples of the Dynasties of Dinh King and Le King.</li><li>Have lunch at a local restaurant (included).</li><li>Board the sampan boats in Tam Coc dock to drift down the river along with the villages, mountains, and lush rice fields.</li><li>Continue boating in Tam Coc which has unique beauty, often compared with the beauty of Ha Long Bay.</li><li>Experience the village by cycling, and click instagram worthy pictures after climbing the 500 stone steps to witness the panaromic view of the countryside.</li><li>You will dropped back at your Hanoi hotel.</li></ul>'
      },
      {
        day: 3, // Day 2 in source
        title: 'Fly to Hue from Hanoi',
        description: '<ul><li>Wake up and post freshen-up, Get on board on your flight to the pretty town of Hue town- another best kept secret of Vietnam.</li><li>After arriving in Hue, check-in to your hotel and have leisure.</li><li>You can visit the Imperial City - A conserved complex consisting of ancient monuments such as temples, libraries, royal tombs and more (by walk).</li><li>Get ready to walk-head out for a quick walk along the Perfume river boulevard and soak in the calmness.</li><li>In the evening, take a stroll around in the city, explore the beautiful cafes of Hue.</li></ul>'
      },
      {
        day: 4, // Day 3 in source
        title: 'Train Ride to Da Nang From Hue',
        description: '<ul><li>Wake up early and post breakfast, catch the train to Da Nang.</li><li>Witness jaw-dropping views of the coast as you ride in your comfy coaches.</li><li>After arriving in Da Nang, check-in to your hotel.</li><li>Head out to experience the stunning heritage of Hoi An, one of the oldest cities and also declared as a World Heritage Site by UNESCO.</li><li>Experience the basket boat ride at Hoi An’s Coconut village.</li><li>Soak in the old town vibes at Hoi An lantern town and capture some #InstaPerfect pictures. Also try a bowl of Cao Lau ( a local speciality) along the river.</li><li>Overnight stay in Da Nang.</li></ul>'
      },
      {
        day: 5, // Day 4 in source
        title: 'Golden Hand Bridge | Ba Na Hills',
        description: '<ul><li>One of the most memorable and enchanting experience awaits you today. Decorated with spectacular greenery and beautiful vista of East Sea and mountains, head out to explore Ba Na Hills.</li><li>Experience the world\'s best cable cars taking you through the clouds, misty funicular and majestic architecture.</li><li>Visit the iconic Golden Hand Bridge at Ba Na Hills and explore the French Village built on the mountain top.</li><li>In the evening, explore Hoi An\'s buzzing night market. Don\'t forget to try Banh Mi and grab a beer in a bar of your liking and sink in the chilled-out vibes.</li></ul>'
      },
      {
        day: 6, // Day 5 in source
        title: 'Cham Island Day Tour',
        description: '<ul><li>Wake up early in the morning and have breakfast.</li><li>Board your vehicle to Cham Island, one of Vietnam\'s UNESCO World Biosphere Reserve.</li><li>Visit the famous Cua Dai Beach.</li><li>Take a dip in the cool waters of Cham Island and catch glimpses of the rich marine life below.</li><li>Drive back to Da Nang.</li><li>Visit the famous My Khe Beach from your hotel by walk.</li><li>Overnight stay in Da Nang.</li></ul>'
      },
      {
        day: 7, // Day 6 in source
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Domestic Flight & Train: Hanoi to Hue flight, Hue to Da Nang Train Ticket',
      'Surface Transfers & Travel: All airport pick up/drop, Hanoi City tour (private cab), Transfer to BaNa Hills, Ninh Binh Day Tour (SIC), Cham Island Day tour (SIC), Transfer to Hoi an & Basket Boat Ride',
      'Accommodation: 2 Nights Stay in Hanoi, 1 Night Stay in Hue, 3 Nights Stay in Da Nang',
      'Meals: 8 meals (6 breakfast, 2 Lunch at Ninh Binh & Cham Island).',
      'VISA Assistance: Professional visa assistance & guaranteed visa approval letter.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      'Museum/Monument entry fee/City Tax.',
      'Bana Hill entry fee/Boat ride fee in Hoi an',
      'Visa fee for Vietnam ($ 25 paid directly to the website).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS as applicable (refundable in ITR).'
    ],
  },
  {
    slug: 'southern-vietnam-honeymoon-special',
    title: 'Southern Vietnam - Honeymoon Special', // From HTML
    destination: 'Vietnam',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹40000', // From HTML
    imageUrl: '/cloned_media/7280420231027214631.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/18622320231027214631.png',
      '/cloned_media/7040320231027214631.png',
      '/cloned_media/14888820231027214631.png',
      '/cloned_media/15459520231027214631.png',
      '/cloned_media/35086720231027214631.png',
      '/cloned_media/35273120231027214631.png'
    ],
    overview: '<p>A timeless charm and a south Asian country known for its magnificent natural beauty, historic treasures and delicious food &amp; coffee, Vietnam provides quite an unmatched experience. Decorated with abundance of natural attractions such as the limestone islands in Halong Bay, vast paddy fields or the massive cave system in Phong Nha Ke Bang National Park, Vietnam is arguably one of the most beautiful countries on the continent. Breathtaking natural beauty, artistic masterpieces and rich culture, fascinating cities and delightful authentic Vietnamese food, this backpacker-friendly country is fast gaining popularity around the world. How can we forget the vibrant streets and happening nightlife? You can’t resist giving your heart and soul to the country. From exploring cities to taking a walk amidst woods in nature reserve or learning the rich historical side, there\'s a lot to do on this chilled-out vacay to Vietnam.</p>', // From HTML
    itinerary: [ // From HTML i_data, formatted with HTML lists
      {
        day: 0,
        title: 'Journey Begins | Vietnam Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel.</li><li>Check-in to your hotel and have some leisure.</li><li>Definitely you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 1,
        title: 'Cu Chi Tunnels',
        description: '<ul><li>Wake up early in the morning and get on board to your vehicle to explore the famous Cu Chi Tunnels.</li><li>Explore the hidden underground world of Vietnam\'s guerrilla Cu Chi Tunnels and learn about the complicated lives of the tunnel residents on a Cu Chi Tunnels Tour. You can try using real guns like AK-47, M16, Machine Gun at the shooting range of Cu Chi Tunnels.</li><li>Drive back to Ho Chi Minh, feel free to take a stroll around in the city, chill with your beer and treat yourself with some good Vietnamese food.</li></ul>'
      },
      {
        day: 2,
        title: 'Mekong Delta | The Coconut Island',
        description: '<ul><li>Wake up and have breakfast, escape the busy streets of Ho Chi Minh and take a much-needed nature trip along the Mekong River.</li><li>Experience the boat ride to Coconut Island &amp; visit to coconut processing workshops &amp; traditional handicraft making families. Scenic cycle ride around the villages and farms. Take a rowing boat along shady water palm creek.</li><li>Have lunch at Mekong Delta (included).</li><li>Visit Vinh Trang Pagoda (3 Buddha Statue) and snap Instagram-worthy photos.</li><li>Drive back to Ho Chi Minh city and have leisure.</li><li>Definitely you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 3,
        title: 'Ho Chi Minh Exploration',
        description: '<ul><li>Wake up to the lazy morning &amp; begin your city tour by visiting the War Remnant Museum &amp; Independence Palace.</li><li>In the evening, witness a breathtaking sunset while taking a walk along Notre Dame Basilica (Built by the French in 1880).</li><li>Feel free to take a stroll around in the city &amp; visit Saigon Skydeck or Cafe Apartment. Not to miss the tasty Banh Mi sandwich while exploring like a local.</li></ul>'
      },
      {
        day: 4,
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Surface Transfers & Travel: Airport pick up/drop, Ho Chi Minh city tour, Mekong Delta Day Tour, Cu Chi Tunnel Transfers.',
      'Accommodation: 4 nights stay in premium Hotel (centrally located).',
      'Meals: 5 meals (breakfasts and special meals).',
      'VISA Assistance: Professional visa assistance & guaranteed visa approval letter.',
      'Vietnam Trip Starter Kit: Forex Card, Packing and other preparatory ‘How-To’ guides.',
      'Other Inclusions: Virtual real-time guide & assistance, Personalized real-time info on events & food.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in Inclusions.',
      'Museum/Monument entry fee/City Tax.',
      'Visa fee for Vietnam ($25 paid at Immigration).',
      'Travel Insurance.',
      'GST (5%) applicable extra.',
      'TCS (5%) applicable extra (refundable in ITR).'
    ],
  },
  {
    slug: 'northern-vietnam-honeymoon-special',
    title: 'Northern Vietnam - Honeymoon Special', // From HTML
    destination: 'Vietnam',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹40000', // From HTML
    imageUrl: '/cloned_media/6447920231027213843.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/552520231027213843.png',
      '/cloned_media/18939220231027213843.png',
      '/cloned_media/4262520231027213843.png',
      '/cloned_media/34334020231027213843.png',
      '/cloned_media/41716620231027213843.png',
      '/cloned_media/30119720231027213843.png',
      '/cloned_media/30411420231027213843.png',
      '/cloned_media/39470220231027213843.png',
      '/cloned_media/23646720231027213843.png',
      '/cloned_media/11814820231027213843.png'
    ],
    overview: '<p>A timeless charm and a south Asian country known for its magnificent natural beauty, historic treasures and delicious food &amp; coffee, Vietnam provides quite an unmatched experience. Decorated with abundance of natural attractions such as the limestone islands in Halong Bay, vast paddy fields or the massive cave system in Phong Nha Ke Bang National Park, Vietnam is arguably one of the most beautiful countries on the continent. Breathtaking natural beauty, artistic masterpieces rich culture, fascinating cities and delightful authentic Vietnamese food, this backpacker-friendly country is fast gaining popularity around the world. How can we forget the vibrant streets and happening nightlife? You can’t resist giving your heart and soul to the country. From exploring cities to taking a walk amidst woods in a nature reserve or learning the rich historical side, there\'s a lot to do on this chilled-out vacay to Vietnam.</p>', // From HTML
    itinerary: [ // From HTML i_data, re-indexed to start from Day 1
      {
        day: 1, // Was Day 0
        title: 'Journey Begins | Vietnam Arrival',
        description: '<ul><li>With excitement and happiness on your face, jump into your flight for Vietnam and say goodbye to India.</li><li>After landing in Vietnam and clearing immigration (we’ll help you our dear traveler), drive towards your hotel.</li><li>Check in to your hotel and have some leisure.</li><li>Definitely, you’re not in Vietnam to just sleep? In the evening, get ready and head out for cafe hopping, grab a beer in a bar of your liking and sink in the chilled-out vibes.</li><li>When in Vietnam do not forget to try Pho, a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat.</li></ul>'
      },
      {
        day: 2, // Was Day 1
        title: 'Ninh Binh Day Trip',
        description: '<ul><li>Wake up early and drive towards the Ninh Binh,</li><li>Experience the paddle boat ride &amp; caving at Tam Coc.</li><li>Hike to the top of Mua Caves and get clicked yourself with the areal view of Ninh Binh.</li><li>Have a hearty lunch at Ninh Binh and begin your drive back to Hanoi.</li><li>The day is all yours, either head out to explore old quarters of the town, Hoan Kiem Lake or simply party with your clan in some bars or cafes.</li></ul>'
      },
      {
        day: 3, // Was Day 2
        title: 'The Halong Bay',
        description: '<ul><li>Wake up early and drive towards Tuan Chau harbor to get on board on your boat to Halong Bay.</li><li>Keep your energy high as you sail on the majestic emerald blue waters.</li><li>Known for its towering karst limestone pillars, small islets of various shapes and sizes amidst crystal blue turquoise waters, Halong Bay is truly an experience of a lifetime. Treat yourself with a hearty lunch on the deck and head out for an amazing Kayak ride and swimming in the sea. Enjoy a mesmerising sunset and the evening cruise party.</li><li>Dinner and overnight stay in cruise.</li></ul>'
      },
      {
        day: 4, // Was Day 3
        title: 'Back To Hanoi | Self Explore',
        description: '<ul><li>Wake up to the surreal sounds of the ocean.</li><li>Walk up to the deck and witness a soul-soothing sunrise over crystal blue turquoise waters.</li><li>Grab a satisfying morning meal and take a stop at hippie-island beach (if time permits). Post a hearty lunch, return to the harber and ride back to Hanoi.</li><li>The day is all yours, either head out to explore old quarters of the town, Hoan Kiem Lake or simply party with your clan in some bars or cafes.</li></ul>'
      },
      {
        day: 5, // Was Day 4
        title: 'Goodbye Vietnam',
        description: '<ul><li>Wake up early in the morning and It’s time to say goodbye to a lovely Vietnam trip.</li><li>Drive towards the airport and board your flight back to India with a heart full of numerous memories, fun amazing experiences and new bonds.</li><li>Return flight to India.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Surface Transfers & Travel: Airport pick up/drop, Travel during city tour of Hanoi.',
      'Accommodation: 3 nights stay in a premium Hotel, 1 Night stay in a cruise in Halong Bay.',
      'Meals: 7 meals for the entire trip including breakfasts and special meals.',
      'VISA Assistance: Professional visa assistance & guaranteed visa approval letters.',
      'Vietnam Trip Starter Kit: Forex Card, Packing and other preparatory ‘How-To’ guides.',
      'Other Inclusions: Virtual real-time guide & assistance, Personalized real-time info on events & food.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any kind of personal expenses.',
      'Anything (Meals, Transport & Services) not mentioned in the above ‘Inclusions’ section.',
      'Museum/Monument entry fee/City Tax.',
      'Visa fee for Vietnam needs to be paid directly at Immigration $ 25.',
      'Travel Insurance.',
      'GST (5%) is applicable extra.',
      'TCS* 5% will be applicable on the Total Package Cost... (refundable in your ITR).',
      'Paid Optional Add-on: HaLong Bay Cruise (2D1N) | ₹ 10000.',
      'Paid Optional Add-on: Visa Secure (100% refund on visa rejection).'
    ],
  },
  {
    slug: 'chopta-tungnath-trek',
    title: 'Chopta Tungnath Trek - Mini Switzerland of India',
    destination: 'Uttarakhand',
    duration: '3 Days 2 Nights',
    price: '₹7500',
    originalPrice: '₹9000',
    discount: '₹1,500',
    imageUrl: '/cloned_media/chopta-main.jpg',
    overview: 'Chopta, often called the "Mini Switzerland of India," is a picturesque hill station in Uttarakhand. This trek takes you to Tungnath Temple, the highest Shiva temple in the world at 3,680 meters, and further to Chandrashila Peak at 4,000 meters. Experience breathtaking views of Himalayan peaks including Nanda Devi, Trishul, and Chaukhamba.',
    itinerary: [
      { day: 1, title: 'Delhi to Chopta | Overnight Journey', description: 'Assemble at boarding point in Delhi and meet your Trip Captain. Start overnight journey to Chopta in comfortable transport. Enjoy the scenic drive through Haridwar and Rishikesh.' },
      { day: 2, title: 'Chopta Arrival | Tungnath Temple Trek', description: 'Arrive in Chopta early morning and check-in to camps/hotel. After breakfast, start trek to Tungnath Temple (3.5 km). Visit the highest Shiva temple in the world. Return to Chopta base camp for dinner and overnight stay.' },
      { day: 3, title: 'Chandrashila Summit | Return to Delhi', description: 'Early morning trek to Chandrashila Peak (1.5 km from Tungnath). Witness spectacular sunrise and 360-degree Himalayan views. Return to base camp, have breakfast and check-out. Start return journey to Delhi with packed lunch.' }
    ],
    inclusions: ['Transportation from Delhi to Delhi in comfortable vehicle', '2 Nights accommodation in camps/hotel on sharing basis', 'All meals from Day 1 breakfast to Day 2 lunch', 'Experienced trek guide and support staff', 'All necessary permits and entry fees', 'Basic first aid and safety equipment'],
    exclusions: ['Personal expenses and items of personal nature', 'Travel insurance and medical expenses', 'Any meals not mentioned in inclusions', 'Tips for guide and support staff', 'Any expenses due to natural calamities or unforeseen circumstances', 'GST (5%) is applicable extra']
  },
];