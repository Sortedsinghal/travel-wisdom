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
  "slug": "rajasthan-explorer-jaipur-udaipur-jodhpur-jaisalmer",
  "title": "Rajasthan Explorer - Jaipur Udaipur Jodhpur Jaisalmer",
  "destination": "Rajasthan",
  "duration": "8 Days 7 Nights",
  "price": "₹24,000",
  "originalPrice": "₹28,000",
  "discount": "₹4,000",
  "imageUrl": "/cloned_media/36156220250913134901.png",
  "gallery": [
    "/cloned_media/27393520250913134901.png",
    "/cloned_media/10269520250913134901.png",
    "/cloned_media/24171520250913134901.png",
    "/cloned_media/16277620250913134901.png",
    "/cloned_media/40556620250913134901.png"
  ],
  "overview": "<p>Embark on a magical journey through the royal land of Rajasthan with our Rajasthan Explorer Tour Package with Go4Explore. Covering the iconic cities of Jaipur, Jodhpur, Udaipur, and Jaisalmer, this tour offers the perfect blend of history, culture, architecture, and desert adventures. From Jaipur’s vibrant bazaars and grand palaces to the golden sands of Jaisalmer, every destination tells a story of royalty and timeless beauty. Whether you’re a culture enthusiast, history lover, or an adventure seeker, this Rajasthan trip ensures unforgettable experiences.</p><p>Your journey begins in Jaipur – the Pink City, famous for Amer Fort, Hawa Mahal, City Palace, and colorful markets. Next, discover the charm of Jodhpur – the Blue City, with the mighty Mehrangarh Fort and narrow blue lanes full of local life. Move on to Udaipur – the City of Lakes, known for its romantic ambiance, shimmering lakes, and royal palaces like City Palace and Lake Pichola. Finally, experience the golden charm of Jaisalmer – the Golden City, where desert safaris, sand dunes, and Jaisalmer Fort await to give you a once-in-a-lifetime desert adventure.</p><p>Our Rajasthan Explorer Tour Package is designed to provide the best of heritage, comfort, and adventure. With guided sightseeing, cultural experiences, and authentic Rajasthani flavors, this trip captures the true essence of Rajasthan. Perfect for families, couples, and groups, this tour combines royal hospitality with unforgettable memories. Book your Rajasthan package with Go4Explore today and get ready to explore forts, palaces, lakes, deserts, and stories that live forever in the heart of India.</p>",
  "itinerary": [
    {
      "day": 1,
      "title": "Jaipur Arrival | Local Exploration",
      "description": "<ul><li>After arriving in Jaipur, check-in to our hotel & meet your group.</li><li>We set out to explore the Pink City. Explore Amer Fort, a majestic red sandstone and marble fortress perched on a hill.</li><li>Enjoy a quick photo stop at the stunning Jal Mahal.</li><li>We then head to the Hawa Mahal, Jaipur’s iconic “Palace of Winds,” admired for its honeycomb windows.</li><li>Enjoy a leisurely stroll through Jaipur’s vibrant local market, famous for handicrafts, juttis and colorful textiles.</li><li>Dinner and overnight stay in a hotel in Jaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Drive to Udaipur | Explore Kishangarh & Statue of Belief",
      "description": "<ul><li>Wake up early and post breakfast, visit the iconic Patrika Gate, known for its vibrant arches and stunning hand-painted interiors.</li><li>Begin your drive to Udaipur.</li><li>On the way, visit the Kishangarh Dumping Yard, a unique photography hotspot with striking marble waste formations.</li><li>Make a stop at the Statue of Belief, the world’s tallest Shiva statue.</li><li>After arriving in Udaipur, check-in to our hotel and have some leisure.</li><li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Udaipur Local Exploration | Old City Vibes",
      "description": "<ul><li>Post Breakfast, head out to explore Rajasthan’s lake city and various heritage wonders. Visit Udaipur’s City Palace and experience the rich history of Mewar region.</li><li>Visit Jagdish Temple and witness the intricate carvings of the temple.</li><li>In the evening, feel free to either witness the cultural & folk-art performances at the beautiful Bagore Ki Haveli (on your own) nestled along Lake Pichola or explore Gangaur Ghat and streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, and chill at lake-view cafes.</li><li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 4,
      "title": "Udaipur to Jodhpur | Kumbhalgarh Fort | Jodhpur Arrival",
      "description": "<ul><li>Wake up early and post breakfast, check-out from our hotel in Udaipur and drive to Jodhpur - Rajasthan’s blue city.</li><li>Enroute Jodhpur, we will take a halt and visit Kumbhalgarh Fort also known as The Great Wall of India, one of the most beautiful forts in Rajasthan and a UNESCO World Heritage Site. Next we will visit Maharana Pratap Museum in Haldighati built in honor of Mewari Rana and his battle with the Mughals. </li><li>After arriving in Jodhpur, check-in to our hotel and have some leisure.</li><li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 5,
      "title": "Jodhpur Local Exploration | Historical Marvels",
      "description": "<ul><li>Wake up early and post breakfast, we will head out for a local sightseeing tour of Jodhpur.</li><li>We will visit Umaid Bhawan Palace to witness the royalty and one of the largest private residencies in the world. Experience the grandeur of Mehrangarh Fort, one of the largest forts positioned in Rajasthan perched on top of a perpendicular cliff. We will end our blue city exploratory tour at Jaswant Thada, a cenotaph dedicated to Mewar kings and commonly known as the Taj Mahal of Mewar.</li><li>In the evening, feel free to treat your tastebuds with local flavours of Jodhpur near the Ghanta Ghar market.</li><li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 6,
      "title": "Jodhpur to Jaisalmer | Thar Desert Diaries",
      "description": "<ul><li>Wake up early and post breakfast, check-out from our hotel in Jodhpur and drive to Jaisalmer - Rajasthan’s golden city.</li><li>After arriving in Thar Desert, check-in to our campsite located in Sam Sand Dunes, freshen-up and have some leisure.</li><li>Get ready and head out for Camel Safari in Thar Desert. Witness the beautiful sunset while enjoying your camel ride. Experience the thrill in Jeep Dune Bashing.</li><li>In the evening, enjoy a warm bonfire with Rajasthani folk music, Kalbelia dance and quick snacks.</li><li>Savour home-style cooked Rajasthani dinner and overnight stay in camps.</li></ul>"
    },
    {
      "day": 7,
      "title": "Rajasthan’s Golden City | Depart for Jaipur",
      "description": "<ul><li>Wake up early in the morning and post breakfast, check-out from our campsite in Sam Sand Dunes and drive towards Jaisalmer old city. Enroute, we'll visit Kuldhara village, an abandoned village dating back to 200 hundred years.</li><li>Head out to explore India’s only living fort - Jaisalmer Fort. Take a walk in this magnificent historic fort and learn the legends associated with it. Visit other major attractions like Gadsisar Lake, Patwon Ki Haveli, etc.</li><li>Feel free to explore Jaisalmer’s local market and taste different cuisines at recommended themed cafes/restaurants.</li><li>In the evening, start-off your return journey to Jaipur.</li></ul>"
    },
    {
      "day": 8,
      "title": "Reach Jaipur | Trip Ends",
      "description": "<ul><li>Reach Jaipur early in the morning with lots of amazing memories and unforgettable experiences.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Jaipur to Jaipur: Tempo Traveler/Cab.",
    "6 Nights Accommodation on sharing basis: 1 night in hotel (Jaipur), 2 nights in hotel (Udaipur), 2 nights in hotel (Jodhpur), 1 night in swiss camps (Jaisalmer).",
    "12 Meals: Breakfast (6) and Dinner (6), starting from Dinner on Day 1 till Breakfast on Day 7. Complimentary evening snacks (veg) in Jaisalmer.",
    "Activities in Jaisalmer: camel safari & jeep dune bashing and Rajasthani dinner & folk show.",
    "All local explorations as per itinerary.",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "udaipur-kumbhalgarh",
  "title": "Udaipur & Kumbhalgarh",
  "destination": "Rajasthan",
  "duration": "3 Days 2 Nights",
  "price": "₹7,500",
  "originalPrice": "₹8,500",
  "discount": "₹1,000",
  "imageUrl": "/cloned_media/29769220240826125805.png",
  "gallery": [
    "/cloned_media/2541020250604105520.png",
    "/cloned_media/34125820250604105520.png",
    "/cloned_media/25662820250604105521.png",
    "/cloned_media/13828220250604105521.png",
    "/cloned_media/28271520250604105521.png",
    "/cloned_media/29191720250604105521.png"
  ],
  "overview": "<h2>About Udaipur Kumbhalgarh Tour Package</h2><p>Live through the royal beauty of Rajasthan with our specially designed Udaipur Kumbhalgarh tour package. Imagine that you are walking through the enchanting palaces of Udaipur, their white marble walls reflecting and repeating the effect in the waters of Lake Pichola. Afternoons lounging around intricate artwork in the City Palace or lazy ones with a rooftop dinner while the sun sets over the Aravalli Hills, this is what it feels like to be in this haven.</p><p>Later, see the mighty Kumbhalgarh Fort with its massive walls that stretch for as long as 36 km, the second-longest uninterrupted wall in the world, next only to the Great Wall of China. You will feel the charge of history and the excitement of exploration from its ramparts.</p><p>Our thoughtfully designed itinerary balances must-see destinations with off-the-tourist-map surprises, letting you thoroughly soak up Rajasthan's rich culture and warm hospitality. From luxury accommodations and fine dining to local experts, know that we've thought of everything. Book our <a href=\"https://go4explore.com/trip/rajasthan\" style=\"color:blue;\">Rajasthan Tour Package</a> and make memories that last a lifetime.</p><h3>Best Places to Visit in 3 Days Udaipur Kumbhalgarh Trip</h3><p><strong>City Palace:</strong> Udaipur, known as the \"City of Lakes,\" is a romantic destination in Rajasthan. Its City Palace, a massive complex on Lake Pichola, showcases stunning Rajasthani architecture. Visitors can explore ornate rooms, courtyards, and museums, gaining insight into royal life and local history.</p><p><strong>Lake Pichola:</strong> Lake Pichola, Udaipur's crown jewel, offers serene boat rides and picturesque views. The lake is dotted with islands, including Jag Mandir and Jag Niwas (now Lake Palace Hotel). Sunset cruises are particularly popular, providing unforgettable vistas of the surrounding palaces and hills.</p><p><strong>Kumbhalgarh Fort:</strong> Kumbhalgarh Fort, a UNESCO World Heritage site, boasts the second-longest continuous wall after the Great Wall of China. Built in the 15th century, it played a crucial role in Mewar's defense. The fort's massive ramparts stretch over 38 kilometers, enclosing temples, palaces, and gardens.</p><p><strong>Kumbhalgarh Wildlife Sanctuary:</strong> The Kumbhalgarh Wildlife Sanctuary surrounds the fort, offering a diverse ecosystem. Home to leopards, sloth bears, and numerous bird species, it's a haven for nature enthusiasts. Jeep safaris and nature walks allow visitors to explore its rich biodiversity and stunning landscapes.</p><p><strong>Saheliyon Ki Bari:</strong> Saheliyon Ki Bari in Udaipur is a charming garden built for royal ladies. It features lush lawns, marble fountains, and lotus pools. This tranquil oasis provides a refreshing escape from the city's bustle, showcasing the elegance of Rajasthani landscaping and architecture.</p><p><strong>Bagore Ki Haveli:</strong> Bagore Ki Haveli, situated on Lake Pichola's waterfront, is a magnificent 18th-century mansion. Now a museum, it displays Mewar's cultural heritage through costumes, art, and puppets. Evening cultural performances here offer a glimpse into Rajasthani folk traditions.</p><p><strong>Fateh Sagar Lake:</strong> Fateh Sagar Lake, Udaipur's second artificial lake, is surrounded by hills and gardens. It houses three small islands, including Nehru Park with its boat-shaped restaurant. The lake's promenade is perfect for leisurely walks and enjoying street food.</p><p><strong>Gangaur Ghat:</strong> Located in Udaipur, Rajasthan, Gangaur Ghat is a famous waterfront area on Lake Pichola. It's known for its beautiful architecture and as a site for religious ceremonies, particularly during the Gangaur festival. The ghat offers stunning views of the lake and surrounding palaces.</p><p><strong>Under The Sun Aquarium:</strong> This is an aquarium in Udaipur that showcases various species of fish and aquatic life. It's a popular attraction for families and those interested in marine biodiversity.</p><p><strong>Bahubali Hills:</strong> Also known as Machhla Magra, this hill in Udaipur offers panoramic views of the city and its lakes. It's famous for a large statue of Bahubali (a Jain Tirthankara) at its peak.</p><p><strong>Badi Lake:</strong> This artificial lake, also called Jiyan Sagar, is located near Udaipur. It was built in the 17th century to combat drought. The lake is surrounded by hills and offers a peaceful retreat away from the city bustle.</p><p><strong>Ambrai Ghat:</strong> Another picturesque ghat in Udaipur, Ambrai Ghat is known for its stunning views of Lake Pichola, City Palace, and Jag Mandir. It's a popular spot for watching sunsets and houses several restaurants offering lakeside dining.</p><h3>Things to do in 3 Days Udaipur Kumbhalgarh Tour</h3><ul><li><strong>Explore Udaipur’s Vibrant Markets:</strong> Shopping in Udaipur is a vibrant experience. Visit Hathi Pol Bazaar for traditional textiles, jewelry, and handicrafts. Bada Bazaar offers colorful bandhani fabrics and leather goods. Don't miss Shilpgram for authentic Rajasthani arts and crafts. Bargaining is expected, so negotiate prices with a smile.</li><li><strong>Try Rajasthani Delicacies:</strong> Rajasthani cuisine is a feast for the senses. Try dal baati churma, a hearty lentil dish with baked wheat balls. Sample gatte ki sabzi, gram flour dumplings in spicy gravy. Indulge in laal maas, a fiery mutton curry. For dessert, enjoy mawa kachori or ghevar, sweet delicacies unique to the region.</li><li><strong>Boat ride on Lake Pichola:</strong> This tranquil experience gives one stunning view of waterfront architecture in Udaipur. You see the whole view of the City Palace, Lake Palace, and <a href=\"https://en.wikipedia.org/wiki/Jag_Mandir_Palace\" style=\"color:blue;\" rel=\"noopener noreferrer\" target=\"_blank\">Jag Mandir</a> while gliding across the lake. Sunset rides are specially magical because the golden light brings out the white buildings of the city.</li><li><strong>Rajasthani puppet show:</strong> They would be folk performances, colorful, based on folk storylines. Skilled puppeteers enact local legends through intricate marionettes with the backing of live music. It's a great deal of fun experiencing Rajasthan's folk culture.</li><li><strong>Trek to Kumbhalgarh Fort:</strong> Walking along the extortionate walls of this fort gives a different view of its scale and strategic importance. The trek can be really tough but offers you breathless views of the Aravalli range and the countryside around.</li><li><strong>Kumbhalgarh Wildlife Safari:</strong> Jeep safaris through varied landscapes within the sanctuary, spotting the leopard rarely but you can see various deer species, monkeys, and a lot of birds. Added to the adventure is the lush forests and rugged terrain.</li><li><strong>Udaipur Cooking Class:</strong> Learn to cook traditional Rajasthani fare with a local family or in one of the many cooking schools. You will learn all about typical spices, techniques, and recipes of the region. Most classes include a market visit to gather ingredients, which reveals as much about the local produce as other culinary traditions.</li><li><strong>Sajjangarh Sunset:</strong> This palace, situated on top of a hill, provides a bird's eye view of Udaipur and its lakes. The golden light that bathes the city during the sunset is pure magic. It is any photographer's paradise and a romantic location for couples.</li><li><strong>Sound and Light show at Kumbhalgarh Fort:</strong> This evening spectacle brings the fort to life with narration, music, and illumination. The massive walls of Mewar rise as a backdrop for the colorful display, telling of legends and battles.</li><li><strong>Ropeway to Karni Mata Mandir:</strong> This cable car ride takes visitors to the Karni Mata Temple atop Machla Magra Hill. The ropeway offers panoramic views of Udaipur, its lakes, and surrounding hills. At the summit, you'll find the temple dedicated to Karni Mata and can enjoy spectacular vistas of the city below.</li><li><strong>Cafe Hopping with Lake View:</strong> Udaipur is famous for its cafes overlooking Lake Pichola and other water bodies. Many of these are located in the old city area, offering scenic views along with diverse cuisine. Popular spots include Cafe Edelweiss, Jheel's Ginger Coffee Bar, and Cafe Namaste. Visitors can savor local and international dishes while enjoying serene lake views.</li><li><strong>Cultural Program in Bagore ki Haveli:</strong> Bagore ki Haveli, an 18th-century mansion at Gangaur Ghat, hosts a nightly cultural show called \"Dharohar.\" This popular program showcases traditional Rajasthani music, dance, and puppetry. It's an excellent opportunity to experience the rich cultural heritage of Rajasthan in a historic setting.</li></ul><h3>How to Reach Udaipur</h3><p><strong>By Air:</strong> Maharana Pratap Airport, located about 20 km from the city center, connects Udaipur to major Indian cities. Direct flights operate from Delhi, Mumbai, Jaipur, and other key destinations. Taxis and prepaid cabs are available at the airport for city transfers.</p><p><strong>By Train:</strong> Udaipur City Railway Station is well-connected to major cities across India. Luxury trains like Palace on Wheels and Royal Rajasthan on Wheels also stop here. The station is centrally located, making it easy to reach hotels and tourist spots.</p><p><strong>By Road:</strong> Udaipur has excellent road connectivity. Regular buses, both government and private, operate from nearby cities. For a more comfortable journey, consider hiring a taxi or self-drive car from cities like Jaipur, Ahmedabad, or Mumbai.</p><h3>Best Time to Visit Udaipur</h3><p><strong>Winter (October to March):</strong> This is considered the peak tourist season. Daytime temperatures are pleasant, ranging from 20-28°C (68-82°F). Nights can be cool, dropping to 5-10°C (41-50°F). The weather is ideal for sightseeing and outdoor activities.</p><p><strong>Summer (April to June):</strong> Temperatures can soar to 40°C (104°F) or higher. While it's less crowded and hotel rates are lower, the heat can be intense for outdoor exploration. Early mornings and evenings are more comfortable for activities.</p><p><strong>Monsoon (July to September):</strong> Rainfall brings relief from the summer heat. The landscape turns lush green, offering beautiful scenery. However, humidity increases and some outdoor activities may be limited. Hotel rates are often at their lowest during this period.</p><p>Other related tour packages: <a href=\"https://go4explore.com/trips/udaipur\">Udaipur Tour Package</a>, <a href=\"https://go4explore.com/trips/udaipur-mount-abu-trip-from-delhi\">Udaipur Mount Abu Trip</a>, <a href=\"https://go4explore.com/trips/rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer\">Udaipur Jodhpur Jaisalmer Backpacking</a></p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Gurugram to Udaipur | Overnight Journey",
      "description": "<ul><li>Assemble at the boarding point in Gurugram (IFFCO Chowk Metro Station or as informed).</li><li>Start an overnight journey to Udaipur and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Udaipur Arrival | Lakes, Bazaars & More",
      "description": "<ul><li>After arriving in Udaipur, check-in to our hotel, have some leisure and freshen-up.</li><li>Head out to explore Rajasthan’s lake city and various heritage wonders.</li><li>Visit the Saheliyon Ki Bari, Maharana Pratap Memorial and Under the Sun Aquarium. A trip to Udaipur will remain incomplete without soaking in the serenity of its freshwater lakes. In the evening, enjoy mesmerizing sunset at Fatehsagar Lake, go out in Fatehsagar’s local market area for lip-smacking street food options.</li><li>Post explorations, head back to your comfy accommodation.</li><li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Udaipur Old City Exploration | Cafe Hopping",
      "description": "<ul><li>Wake up and post a delightful breakfast, set out to explore the other major attractions in Rajasthan’s lake city.</li><li>Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. The City Palace offers panoramic views of Pichola lake and the entire white city. </li><li>Built in the 17th century and dedicated to Lord Vishnu, visit Jagdish Temple and witness the intricate carvings of the temple. Also, visit Karni Mata Temple (via ropeway/by foot on your own).</li><li>In the evening, feel free to either witness the cultural & folk-art performances at the beautiful Bagore Ki Haveli (on your own) nestled along Lake Pichola or explore Gangaur Ghat and streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, and chill at lake-view cafes.</li><li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Kumbhalgarh Fort | Depart for Gurugram",
      "description": "<ul><li>Wake up and post a delightful breakfast, check-out from our hotel and drive towards Kumbhalgarh Fort - one of the most beautiful forts in Rajasthan and a UNESCO World Heritage Site.</li><li>After arriving at Kumbhalgarh, head out to explore the magnificent fort. The walls of the fort extend over 38 km and is the second longest wall after the Great Wall of China.</li><li>In the evening, say goodbye to Kumbhalgarh and start-off your return journey for Gurugram.</li></ul>"
    },
    {
      "day": 4,
      "title": "Gurugram Arrival | Trip Ends",
      "description": "<ul><li>Reach Gurugram early morning with lots of amazing memories and unforgettable experiences.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Gurugram to Gurugram: Tempo Traveler/AC Bus.",
    "Accommodation on Sharing Basis: 2 Nights in Hotel.",
    "4 Meals: Dinner (2) & Breakfast (2), starting from Dinner on Day 1 to Breakfast on Day 3.",
    "All local explorations as per itinerary: City Palace, Jagdish Temple, Karni Mata Temple, Fatesagar Lake, Saheliyon Ki Bari, Lake Pichola, Gangaur Ghat, Bagore Ki Haveli and Kumbhalgarh Fort.",
    "Experienced and cool Trip Captain.",
    "Driver allowances, toll taxes, parking, state road taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees/monuments fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "jaisalmer-and-longewala",
  "title": "Jaisalmer and Longewala",
  "destination": "Rajasthan",
  "duration": "3 Days 2 Nights",
  "price": "₹7,500",
  "originalPrice": "₹8,500",
  "discount": "₹1,000",
  "imageUrl": "/cloned_media/15931420240830095731.png",
  "gallery": [
    "/cloned_media/42218720201110122656.png",
    "/cloned_media/15412320201110122656.png",
    "/cloned_media/40019020201110122656.png",
    "/cloned_media/23060920201110122656.png",
    "/cloned_media/2203520201110122656.png",
    "/cloned_media/37662720201110122656.png",
    "/cloned_media/10682820201110122656.png",
    "/cloned_media/22461420201110122656.png",
    "/cloned_media/5708220201110122656.png"
  ],
  "overview": "<h2>About Jaisalmer and Longewala Tour Package</h2><p>Imagine stepping into the golden sands of the land of Rajasthan, where history and adventure blend seamlessly. Our Jaisalmer and Longewala tour package presents before you the majestic \"Golden City\" and its surrounding wonders. Picture yourself wandering through the narrow lanes of Jaisalmer in wonder at intricately carved havelis or the imposing Fort of Jaisalmer. As the sun sets, you will be treated to a magical desert safari replete with camel rides and a night under the starry sky.</p><p>But that's not all! Visit Longewala and pay a tribute to those brave soldiers who protected our nation. All of a sudden, stand on the exact battlefield where history was written, and again you feel this surge of patriotism. This isn't some sort of vacation; it's a voyage through time and emotions. This is not just a holiday but a journey through time and emotions. Get ready for this perfect amalgamation of culture, history, and natural beauty. Book this <a href=\"/trip/rajasthan\" style=\"color:blue;\">Rajasthan Tour Package</a> now and create lifelong memories!</p><h3>Best Places to Visit Jaisalmer</h3><p><strong>Jaisalmer Fort-</strong> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Jaisalmer_Fort\" style=\"color:blue;\">Jaisalmer Fort</a> is also called Sonar Qila, a citadel of imposing golden sandstone, dominating the rooftops of the city. A living fort, within its walls are shops, hotels, and residences that give the visitor a unique glimpse of medieval life and panoramic views of the surrounding desert.</p><p><strong>Patwon Ki Haveli-</strong> Patwon Ki Haveli is a group of five beautifully carved havelis showing the finest examples of Rajasthani architecture. Some 19th-century masterpieces, these havelis have beautiful jharokhas or balconies, intricate murals, and mirror work, which showcase the lavishness of the wealthy merchants of that time.</p><p><strong>Gadisar Lake-</strong> Another manmade lake, constructed in the 14th century, Gadisar Lake supplied Jaisalmer with the main source of water. Now it is a peaceful, serene spot surrounded by temples and ghats. One can take a boat ride, watch migratory birds, or simply sit by the peaceful waters.</p><p><strong>Sam Sand Dunes-</strong> Sam Sand Dunes, located approximately 40 km from Jaisalmer, offers you an ultimate desert experience. Take camel safaris, witness breathtaking sunsets, camp under starry skies, and get soaked in the endless undulating golden landscape of Thar Desert.</p><p><strong>Longewala War Memorial-</strong> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/longewala_war_memorial.html\" style=\"color:blue;\">Longewala War Memorial</a> is dedicated to the brave, fearless soldiers of India who fight for the nation. It embarks on captured Pakistani tanks, a war museum, and information on display that depict the historic battle, its importance, and significance.</p><p><strong>Bada Bagh-</strong> Bada Bagh, literally \"Big Garden,\" is a royal cenotaph complex situated about 6 km north of Jaisalmer. Actually, it's an assemblage of wonderful chhatris—cenotaphs—of every ruler who has ever ruled Jaisalmer. Set up for calm surroundings, carrying solemn silence and beautiful views of surroundings, especially during sunrise and sunset.</p><p><strong>Jain Temples-</strong> Jain Temples within Jaisalmer Fort are some other architectural marvels of the 12th century. Beautiful sculptures with intricate carving and facings, tinted with yellow sandstone, reflect a rich cultural heritage of Jainism in this region.</p><p><strong>Desert National Park-</strong> This Desert National Park is a big chunk of the Thar ecosystem with its manifold wildlife, from picturesque sand dunes to rocky landscapes and salt lake bottoms, providing a view of the Great Indian Bustard and other important desert animals and birds.</p><p><strong>Kuldhara Abandoned Village-</strong> Situated 18 km away from Jaisalmer, Kuldhara Abandoned Village is cloaked in mystery and wrapped in legend. This 13th century village was inhabited by Paliwal Brahmins and one fine day it was abandoned overnight. Today, it stands in ruins, haunting and interestingly beckoning curious tourists and history buffs alike.</p><p><strong>Thar Heritage Museum-</strong> The fast-responding Thar Heritage Museum comes up with an alluring glance at the culture and history of the Thar Desert, displaying the samples selected from the fossils, ancient musical instruments, turbans, and several artifacts having a rich reflection of Rajasthan heritage.</p><p><strong>Nathmal Ki Haveli-</strong> Nathmal Ki Haveli, built in the 19th century, is one of the most unique architectures. Two brothers, architectural designers, designed it in such a way that on one side of the central façade, they just created a mirror image of the other. This asymmetrical yet harmonious facade makes up for beautiful stone carvings.</p><p><strong>Longewala Battle Site-</strong> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Battle_of_Longewala\" style=\"color:blue;\">Longewala Battle Site</a> is the site that still retains the exact area where, in 1971, a small Indian army post withstanded a massive attack launched by Pakistan. Tourists can see original bunkers, trenches, and the land that played their crucial part in this historic battle.</p><p><strong>Tanot Mata Temple-</strong> Tanot Mata Temple, located next to Longewala, is revered because it miraculously survived the 1965 Indo-Pak war. It is now maintained by the Border Security Force and contains unexploded Pakistani shells, drawing both pilgrims and history buffs.</p><p><strong>Border Pillar 609-</strong> Infrastructure-wise, Border Pillar 609 marks its presence at the India-Pakistan border near Longewala. While visitors are not allowed to go very close, one can watch over this symbolic pillar from a distance to get an idea of the strategic importance of this desert frontier region.</p><p><strong>Abandoned Pakistani tanks-</strong> Abandoned Pakistani tanks astride the Longewala settlement are a grim pointer to the battle there in 1971. These rusting war machines in the midst of the desert provide powerful photo opportunities and bring out a feel of the area's military history.</p><h3>Things to do in Jaisalmer</h3><p>Desert safari in the Thar Desert Experience the magic of the desert with camel rides, jeep tours, and camping under the stars.</p><p>Sunset at Sam Sand Dunes Witness a spectacular desert sunset and enjoy traditional Rajasthani music and dance performances.</p><p>Architectural tours Explore the intricate havelis, like Patwon Ki Haveli and Salim Singh Ki Haveli, to admire Rajasthani architecture.</p><p>Boating on Gadisar Lake Enjoy a peaceful boat ride on this picturesque lake, especially beautiful during sunrise or sunset.</p><p>Shop for local handicrafts Purchase colorful textiles, embroidered items, and silver jewelry in Jaisalmer's bustling markets.</p><p>Take a cooking class Learn to prepare traditional Rajasthani dishes and spice blends from local experts.</p><p>Attend the Desert Festival If visiting in February, experience this vibrant celebration of Rajasthani culture with music, dance, and camel races.</p><p>Photograph abandoned tanks at Longewala Capture striking images of war relics set against the desert landscape.</p><p>Local delicacies of Jaisalmer offer unique desert delights. Savor spicy Ker Sangri, crispy Gatte ki Sabzi, and rich Laal Maas. Don't miss Daal Baati Churma, Bajre ki Khichdi, and sweet Ghotua for an authentic taste of Rajasthan.</p><h3>How to Reach Jaisalmer</h3><p><strong>By Air:</strong> Jaisalmer Airport is about 5 km from the city center. It will have limited connectivity with flights mainly from Delhi and Jaipur. You can also fly to Jodhpur, 285 km away, and then take a taxi or bus to Jaisalmer.</p><p><strong>By Train:</strong> The Jaisalmer Railway Station has good connectivity to all major cities like Delhi, Mumbai, and Jaipur. The luxury train Palace on Wheels also has a halt here. It offers a royal way to travel.</p><p><strong>By Road:</strong> Highways are well-maintained, and regular buses run from Jaipur, Jodhpur, and Bikaner. You may drive down or hire a taxi for a desert journey of sheer scenery.</p><p><strong>From Longewala:</strong> Longewala is 120 km away from Jaisalmer. One can hire a taxi or take a guided tour for a day's excursion. Special permits may be required due to its border alignment.</p><h3>Best Time to Visit Jaisalmer</h3><p><strong>October to March:</strong> This is the peak tourist season and considered to be the best time to visit Jaisalmer. The weather is pleasant with daytime temperatures ranging from 24°C to 30°C, which makes it perfect for sightseeing purposes and desert activities. However, the nights can get cool and drop to around 7°C to 12°C.</p><p>Other Related Rajasthan Packages: <a href=\"/trips/udaipur\" style=\"color:blue;\">Udaipur Tour Packages</a>, <a href=\"/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer\" style=\"color:blue;\">Udaipur Jodhpur Jaisalmer Backpacking</a>, <a href=\"/trips/ny-rajasthan-backpacking\" style=\"color:blue;\">New Year Rajasthan Backpacking</a>, <a href=\"/trips/rajasthan-backpacking-pushkar-udaipur-bikaner\" style=\"color:blue;\">Pushkar Udaipur Bikaner Backpacking</a>, <a href=\"/trips/rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer\" style=\"color:blue;\">Udaipur Jodhpur Jaisalmer from Delhi</a></p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Gurugram to Jaisalmer | Overnight Journey",
      "description": "<ul><li>Assemble at the boarding point in Gurugram (IFFCO Chowk Metro Station or as informed).</li><li>Start an overnight journey to Jaisalmer and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Jaisalmer Arrival | Desert Safari & Rajasthani Folk Night",
      "description": "<ul><li>After arriving in Jaisalmer, check-in to our campsite located in Sam Sand Dunes, freshen-up and have some leisure.</li><li>Get ready and head out for Camel Safari in Thar Desert. Witness the beautiful sunset while enjoying your camel ride. Experience the thrill in Jeep Dune Bashing.</li><li>In the evening, enjoy a warm bonfire with Rajasthani folk music, Kalbelia dance and quick snacks.</li><li>Savour home-style cooked Rajasthani dinner and overnight stay in camps.</li></ul>"
    },
    {
      "day": 2,
      "title": "Ruins of Kuldhara | The Longewala Battlefield",
      "description": "<ul><li>Wake up and post a delightful breakfast, drive from Sam Sand Dunes to Longewala Post, near Indo-Pakistan Border.</li><li>Enroute Longewala, we'll visit Kuldhara village, an abandoned village dating back to 200 hundred years.</li><li>After arriving at Longewala Post, visit the war memorial and museum stationed near the India-Pak border; gather for an #InstaPerfect group picture. Also, visit Tanot Mata (if time permits).</li><li>Drive back to camps, enjoy the traditional Rajasthani cultural program with a dance around the bonfire and quick snacks.</li><li>Savour home-style cooked dinner and overnight stay in camps.</li></ul>"
    },
    {
      "day": 3,
      "title": "Jaisalmer City Exploration | Depart for Gurugram",
      "description": "<ul><li>Wake up and post a delightful breakfast, check-out from our property and drive towards Jaisalmer city from Sam Sad Dunes.</li><li>Head out to explore India’s only living fort - Jaisalmer Fort. Take a walk in this magnificent historic fort and learn the legends associated with it.</li><li>Visit other major attractions like Gadsisar Lake, Patwon Ki Haveli, etc.</li><li>Feel free to explore the local market and taste different cuisines at recommended themed cafes/restaurants.</li><li>In the evening, say goodbye to Rajasthan’s Golden City and start-off your return journey for Gurugram.</li></ul>"
    },
    {
      "day": 4,
      "title": "Gurugram Arrival | Trip Ends",
      "description": "<ul><li>Reach Gurugram early morning with lots of amazing memories and unforgettable experiences.<br></li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Gurugram to Gurugram: Tempo Traveler/AC Bus.",
    "2 Nights Accommodation on Sharing Basis: Swiss Camps (Sam Sand Dunes).",
    "6 Meals: Dinner (2), Breakfast (2) & Evening Snacks (2), starting from Evening snacks on Day 1 to Breakfast on Day 3, including Rajasthani Dinner only on any 1 Night during the stay.",
    "Rajasthani folk show with Bonfire & music at Sam Sand Dunes.",
    "Desert Activities: camel safari & jeep dune bashing.",
    "Experienced and cool Trip Captain.",
    "Driver allowances, toll taxes, parking, state road taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees/monuments fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "rajasthan-backpacking-udaipur-jodhpur-jaisalmer",
  "title": "Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer",
  "destination": "Rajasthan",
  "duration": "5 Days 4 Nights",
  "price": "₹22,000",
  "originalPrice": null,
  "discount": null,
  "imageUrl": "/cloned_media/18890720240830122755.png",
  "gallery": [
    "/cloned_media/37286020231024132811.png",
    "/cloned_media/34699520231024132811.png",
    "/cloned_media/24931020240801125850.png",
    "/cloned_media/35065820240801125850.png",
    "/cloned_media/28973320240801125851.png",
    "/cloned_media/19940820240801125851.png",
    "/cloned_media/18034720240801125851.png",
    "/cloned_media/17230820240801125851.png"
  ],
  "overview": "<h2>About Udaipur Jodhpur Jaisalmer Backpacking Trip</h2><p>Embarking on a backpacking trip to Rajasthan’s most breathtaking and historically rich cities like Udaipur, Jodhpur and Jaisalmer offers an incredibly topmost experience for travelers. Rajasthan, ‘The Land of Kings’ or ‘The Land of Kingdom’ is India’s largest state by area. The state is situated in the north-west part of the country and is a realm of cultural diversity.</p><p>Primarily, we’ll explore the ‘City of Lakes’ also known as ‘White City’ which is Udaipur, famous for its pristine lakes like Lake Pichola, historic forts like Sajjangarh Fort also known as ‘Monsoon Palace’ and City Palace, galleries, museums we’ll explore all these places which are mentioned in our itinerary as well as local market where travelers can find Rajasthan’s famous traditional bandhani and batik sarees, handmade juttis, oxidized silver and camel jewelry for women and traditional clothing for men as well and we’ll get to relish the taste of traditional Rajasthani’s cuisine also enjoy the cultural performances at Bagore ki Haveli.</p><p>After exploring ‘White City’ we’ll advance towards Kumbhalgarh Fort also known as ‘The Great Wall of India’ one of the most alluring Forts of the Rajasthan, which is also a UNESCO World Heritage Site and next we’ll stop by to visit the Maharana Pratap Museum in Haldighati, constructed in the honor of Mewari Rana, before arriving at our next destination Jodhpur ’. It is the second largest city in Rajasthan with its genesis going back to 1459 AD. Jodhpur is also known as the ‘Blue City’ which makes perfect sense since most of its palaces, forts and temples are painted in shades of blue. In Jodhpur, you’ll be awestruck by the grandeur of Mehrangarh Fort, the serene beauty of Jaswant Thada, The royal beauty of Umaid Bhawan and the vibrant chaos of the old city’s narrow lanes and bustling markets.</p><p>The clock tower and Sardar Market offer a sensory overload of spices, textiles, and handicrafts while affordable lodging and local delicacies like Mirchi vada and Mawa kachori add to the experience.</p><p>Finally Jaisalmer, ‘The Golden City’ captivates with its living fort, labyrinthine streets and golden hue at sunsets. Highlights include the famous architectural splendor of Patwon Ki Haweli, the adventure of camel safaris at sam sand dunes and the tranquility of Gadisar Lake. Travelers can camp under the stars and savor Rajasthani dishes like Gatte ki Sabzi.</p><h3>Places to Visit in Udaipur, Jodhpur and Jaisalmer</h3><p>There are plethora of places to explore</p><ul><li><strong>City Palace-</strong> It is one of the most breathtaking attractions and a magnificent complex of courtyards, museum and palaces in Udaipur offering glimpses of Rajasthan’s royal history and stunning views of Lake Pichola.</li><li><strong>Lake Pichola-</strong> Enjoy a serene boat ride and visit the island palaces like Jag Mandir and Jag Niwas (now the lake palace hotel).</li><li><strong>Jagdish Temple-</strong> Jagdish Temple is an architectural marvel with intricate carvings dedicated to Lord Vishnu, located in the heart of the city.</li>  <li><strong>Sajjangarh Fort-</strong> Sajjangarh Fort, also known as the <a href=\"https://en.wikipedia.org/wiki/Monsoon_Palace\" style=\"color:blue;\" target=\"_blank\" rel=\"noopener noreferrer\">Monsoon Palace,</a> nestled atop a hill in Udaipur, offering panoramic views of the city, its lakes and the surrounding Aravalli Hills, built by Maharana Sajjan Singh in 1884, it was originally intended as an astronomical center and a monsoon retreat. The fort’s majestic architecture and breathtaking sunset views make it a popular tourist destination.</li><li><strong>Mehrangarh Fort-</strong> one of India's largest forts, with panoramic views of the blue city, museums and palaces within its walls.</li><li><strong>Jaswant Thada-</strong> A beautiful marble cenotaph near Mehrangarh Fort, known for its intricate carvings and serene gardens.</li><li><strong>Umaid Bhawan Palace-</strong> A luxurious palace, now partly a hotel and museum, showcasing the royal family’s history and vintage car collection.</li><li><strong>Clock Tower and Sardar Market-</strong> A bustling market area offering spices, textiles, handicrafts and an authentic local shopping experience.</li><li><strong>Jaisalmer Fort-</strong> A living fort with a maze of narrow streets, temples, havelis and shops glowing golden at sunset.</li><li><strong>Patwon ki Haveli-</strong> A cluster of 5 havelis with intricate architecture and historical artifacts offering insights into the affluent merchants style.</li><li><strong>Sam Sand Dunes-</strong> Experience the Thar desert with camel safaris, jeep rides, and overnight stays in desert camps under the stars.</li><li><strong>Gadisar Lake-</strong> A peaceful spot for a leisurely stroll or boat ride, surrounded by Temples and ghats, built to store water.</li></ul><h3>Things to do in Udaipur Jodhpur, Jaisalmer Trip</h3><ul><li><strong>Fort and Museum Exploration-</strong> In Udaipur, explore a grand palace complex and a historic haveli turned museum both showcasing royal artifacts and traditional art. Jodhpur offers a hill top fort with extensive exhibits of regional history and a grandpa palace museum displaying royal heirlooms. Jaisalmer features a bustling living fort with a palace museum and intricately carved mansions depicting merchant style. These sights offer rich insights into the architectural and cultural heritage of Rajasthan.</li><li><strong>Mehrangarh Fort Tour-</strong> Jodhpur, meaning ‘fort of the sun’, built by Rao Jodha. Over 500 yards long, Mehrangarh Fort’s wall rises in places to a height of 120 feet and is 70 feet thick, so colossal are its proportions that Rudyard Kipling called it “ the work of giants”. It is an exquisite blend of rajputana and Mughal architecture Today, it is acknowledged as one of the best preserved forts in India.</li><li><strong>Osian Desert Safari-</strong> Osian is an amazing desert safari place and historical town located off the Jodhpur-Jaisalmer train route. It is an oasis in the Thar known for 12th century Hindu &amp; Jain temples. If you are looking for a camel ride and luxury desert camping near Jodhpur? Osian is the perfect place to go.</li><li><strong>Explore Lakes of Udaipur-</strong> Lake Fatehsagar located in Udaipur is an artificial lake named after Maharana Fateh Singh. The lake has three islands, the biggest the nehru island is famous with tourists, the middle has a park and a spectacular water jet fountain with the third housing the Udaipur observatory. The lake shows a quintessential stillness of water. The mesmerizing ripples, the crystal clear effect of the lake makes it one of the best places to visit. Lake Pichola is one of the most memorable sites in India.<br>It even captivated Maharana Udai Singh with its beauty that decided to build the city of Udaipur on its banks. The lake is known for the many places that line banks such as City palace, Jag Mandir, Mohan Mandir, Lake palace, Arsi Vilas and so much more. Visiting this place is a must from my perspective at least once in your life.  <br>Gadisar lake is another artificial lake built by the founder of Jaisalmer king Rawal Jaisal. A calm and magical experience during sunset can leave you breathless and lost in its beauty. A one of its kind highly recommended place to visit.</li><li><strong>Explore City Palace-</strong> Located at an elevation of 1,962 ft, the City Palace complex was built by the 22 generations of Sisodia Rajputs. 11 smaller palaces and other structures are built seamlessly into its design. Built from marble and granite, the amazing blend between the architectural styles of rajputs and other influential civilizations of the time will render you speechless and awestruck.</li><li><strong>Jaisalmer’s Living Fort Tour-</strong> Jaisalmer Fort or sonar quila aka. the golden fortress. One of the most magnificent fortresses located in the city of Jaisalmer. Recognised by UNESCO as a world heritage site, it is one of the largest fully preserved fortresses of its time. Showing a magnificent style of Rajputana architecture with Mughal influence. The fort is a splendid example of historical Rajasthani style.</li><li><strong>Try Rajasthani Delicacies-</strong> Exploring Rajasthani cuisine is a feast for the senses, with an array of robust and aromatic dishes. Start with Dal Baati Churma, where the crisp baatis are drenched in ghee and served with a sweet Churma. Savor the intense flavors of Laal Maas, a traditional spicy mutton curry and the unique Gatte ki Sabzi, made from gram flour dumplings in a tangy yogurt sauce. The variety extends to snacks like Pyaaz Kachori, and Mirchi Bada perfect for a spicy kick. Relish the famous Rajasthani desserts such as Ghewar and Mawa Kachori showcasing the region’s penchant for indulgence and intricate flavors.</li><li><strong>Lake-View Cafes in Udaipur-</strong> Udaipur’s lake view cafes, like Ambrai Restaurant, Jagat Niwas Palace Hotel, offer breathtaking vistas of Lake Pichola alongside delicious cuisine. Enjoy a romantic meal at Upre by 1559 AD or relax at Jheel Ginger’s Bar and Bakery with serene water views. For a more royal experience, The Sunset Terrace at Fateh Prakash Palace is a must visit.</li><li><strong>Desert Safari in Sam and Sand Dunes-</strong> A desert safari in Sam Sand Dunes offers an exhilarating experience of the vast thar desert in Jaisalmer. Visitors can enjoy thrilling activities such as dune bashing, camel rides and mesmerizing sunsets over the golden sands. The evening cultural programs with traditional music and dance further enrich the enchanting desert experience.</li><li><strong>Flying Fox in Jodhpur-</strong> Flying Fox in Jodhpur provides an adrenaline-pumping zip-lining experience over the majestic Mehrangarh Fort. Participants soar high above the fort's battlements and the stunning landscapes of the blue city. This adventure offers breathtaking views and a unique perspective of Jodhpur’s historic and architectural beauty.</li></ul><h3>Best time to visit Udaipur Jodhpur Jaisalmer</h3><p>The peak season to visit Udaipur, Jodhpur, Jaisalmer together is during the winter months from October to March. This period is considered the peak season for tourism in Rajasthan due to the pleasant and cool weather, which makes exploring these cities enjoyable. The temperature ranges from 10 degree celsius to 27 degree celsius, with warm sunny days and cool nights especially in the desert areas like Jaisalmer. Additionally this time coincides with several local festivals including the Pushkal camel fair, Diwali and the desert festival in Jaisalmer providing a rich cultural experience.</p><p>The favorable weather allows for comfortable sightseeing and outdoor activities such as visiting palaces, forts, lakes and the Thar Desert. However, it’s advisable to book accommodations well in advance as places can get fully booked quickly during this popular tourist season. Packing layers to accommodate the temperature changes between day and night including light woolens or jackets for cooler evenings are recommended. Planning for outdoor activities like camel safaris in Jaisalmer, boat rides in Udaipur and exploring the forts and palaces in Jodhpur will enhance your trip making it a more memorable experience.</p><h3>How To Reach Udaipur From Delhi</h3><ul><li><strong>By Air-</strong> The fastest way to reach Udaipur from Delhi is by taking a direct flight. Several airlines operate daily flights between Indira Gandhi international airport in Delhi and Maharana Pratap Airport in Udaipur. It takes around 1.5 hours to reach Udaipur From Delhi.</li><li><strong>By Train-</strong> Indian Railways operate several trains from Delhi to Udaipur. Popular options include The Mewar Express, Chetak Express and Udaipur City Express. Trains depart from various stations in Delhi such as Hazrat Nizamuddin (NZM), Delhi Cantonment (DEC) and New Delhi (NDLS). It takes around 12-14 hours to reach Udaipur from Delhi by Train.</li><li><strong>By Bus-</strong> Numerous private and state run buses connect Delhi to Udaipur. You can choose from luxury coaches, Volvo buses and sleeper buses. Buses usually depart from various points in Delhi including ISBT Kashmere Gate and Rajiv Chowk. It takes approximately 11-12 hours to reach Udaipur from Delhi by bus.</li><li><strong>By Car-</strong> Driving from Delhi to Udaipur is a viable option for those who prefer road trips, the distance is around 660 kilometers and the route typically taken is via NH48.</li></ul><h4>FAQ’s</h4><p><strong>1. How many days are required for the Udaipur, Jodhpur and Jaisalmer trip?</strong></p><p>Udaipur, Jodhpur and Jaisalmer Trip require 5-6 days to complete and enjoy the whole exploration experience.</p><p><strong>2. Which month is best to visit Jodhpur or Udaipur?</strong></p><p>October to March are the best months to visit Udaipur, Jodhpur and Jaisalmer.</p><p><strong>3. What is Jaisalmer famous for?</strong></p><p>Jaisalmer is famous for its Forts and historical architecture.</p><p><strong>4. Which is the most beautiful lake in Udaipur?</strong></p><p>There are several breathtaking lakes present in Udaipur, but the one which stands out the most is Lake Pichola.</p>",
  "itinerary": [
    {
      "day": 1,
      "title": "Udaipur Arrival | Local Exploration",
      "description": "<ul><li>After arriving in Udaipur, check-in to our hotel, have some leisure and freshen-up.</li><li>Head out to explore Rajasthan’s lake city and various heritage wonders. Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. Built in the 17th century and dedicated to Lord Vishnu, visit Jagdish Temple and witness the intricate carvings of the temple. Move towards Sajjangarh Fort also known as Monsoon Palace situated on a hilltop.</li><li>In the evening, feel free to either witness the cultural &amp; folk-art performances at the beautiful Bagore Ki Haveli (on your own) nestled along Lake Pichola or explore Gangaur Ghat and streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, and chill at lake-view cafes.</li><li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Udaipur to Jodhpur | Kumbhalgarh Fort | Jodhpur Arrival",
      "description": "<ul><li>Wake up early and post breakfast, check-out from our hotel in Udaipur and drive to Jodhpur - Rajasthan’s blue city.</li><li>Enroute Jodhpur, we will take a halt and visit Kumbhalgarh Fort also known as The Great Wall of India, one of the most beautiful forts in Rajasthan and a UNESCO World Heritage Site. Next we will visit Maharana Pratap Museum in Haldighati built in honor of Mewari Rana and his battle with the Mughals.&nbsp;</li><li>After arriving in Jodhpur, check-in to our hotel and have some leisure.</li><li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Jodhpur Local Exploration | Historical Marvels",
      "description": "<ul><li>Wake up early and post breakfast, we will head out for a local sightseeing tour of Jodhpur.</li><li>We will visit Umaid Bhawan Palace to witness the royalty and one of the largest private residencies in the world. Experience the grandeur of Mehrangarh Fort, one of the largest forts positioned in Rajasthan perched on top of a perpendicular cliff. We will end our blue city exploratory tour at Jaswant Thada, a cenotaph dedicated to Mewar kings and commonly known as the Taj Mahal of Mewar.</li><li>In the evening, feel free to treat your tastebuds with local flavours of Jodhpur near the Ghanta Ghar market.</li><li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 4,
      "title": "Jodhpur to Jaisalmer | Thar Desert Diaries",
      "description": "<ul><li>Wake up early and post breakfast, check-out from our hotel in Jodhpur and drive to Jaisalmer - Rajasthan’s golden city.</li><li>After arriving in Thar Desert, check-in to our campsite located in Sam Sand Dunes, freshen-up and have some leisure.</li><li>Get ready and head out for Camel Safari in Thar Desert. Witness the beautiful sunset while enjoying your camel ride. Experience the thrill in Jeep Dune Bashing.</li><li>In the evening, enjoy a warm bonfire with Rajasthani folk music, Kalbelia dance and quick snacks.</li><li>Savour home-style cooked Rajasthani dinner and overnight stay in camps.</li></ul>"
    },
    {
      "day": 5,
      "title": "Rajasthan’s Golden City | Depart for Udaipur",
      "description": "<ul><li>Wake up early in the morning and post breakfast, check-out from our campsite in Sam Sand Dunes and drive towards Jaisalmer old city. Enroute, we'll visit Kuldhara village, an abandoned village dating back to 200 hundred years.</li><li>Head out to explore India’s only living fort - Jaisalmer Fort. Take a walk in this magnificent historic fort and learn the legends associated with it. Visit other major attractions like Gadsisar Lake, Patwon Ki Haveli, etc.</li><li>Feel free to explore Jaisalmer’s local market and taste different cuisines at recommended themed cafes/restaurants.</li><li>In the evening, start-off your return journey to Udaipur.</li></ul>"
    },
    {
      "day": 6,
      "title": "Reach Udaipur | Trip Ends",
      "description": "<ul><li>Reach Udaipur early in the morning with lots of amazing memories and unforgettable experiences.<br></li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Udaipur to Udaipur: Cab/Force Traveler.",
    "Accommodation on sharing basis: 1 night in hotel (Udaipur), 2 nights in hotel (Jodhpur), 1 night in swiss camps (Jaisalmer).",
    "8 Meals: Breakfast (4) and Dinner (4), starting from Dinner on Day 1 till Breakfast on Day 5. Complimentary evening snacks (veg) in Jaisalmer.",
    "Activities in Jaisalmer: camel safari & jeep dune bashing and Rajasthani dinner & folk show.",
    "All local explorations as per itinerary.",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "pushkar-holi-special",
  "title": "Pushkar Holi Special",
  "destination": "Rajasthan",
  "duration": "2 Days 1 Night",
  "price": "₹6,999",
  "originalPrice": null,
  "discount": null,
  "imageUrl": "/cloned_media/10269820250204094556.png",
  "gallery": [
    "/cloned_media/26717720250204100527.png",
    "/cloned_media/24623820250204100527.png",
    "/cloned_media/22606520250204100527.png",
    "/cloned_media/22294620250204100527.png",
    "/cloned_media/41176220250204100527.png",
    "/cloned_media/17326920250204100527.png"
  ],
  "overview": "<p>Packed with beautiful temples, soothing lake ghats and hippie vibes, Pushkar is truly a paradise for backpackers and turns into the most happening travel destination during the ‘festival of colours’ - Holi. A tiny holy town dwelled between Aravalli hills, Pushkar is home to World's only Brahma Temple. So, just lose yourself in Pushkar’s epic Holi celebration, enjoy delightful street food and gather the best memories of your lifetime.</p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Gurugram to Pushkar | Overnight Journey",
      "description": "<ul><li>Assemble at boarding point in Gurugram and meet your Trip Captain.&nbsp;</li><li>Start an overnight journey to Pushkar and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Pushkar Arrival | Holi Celebrations, Cafe Hopping & More",
      "description": "<ul><li>After arriving in Pushkar, check-in to our comfy hotel, freshen-up and treat yourself with a delightful breakfast.</li><li>Hit the streets of Pushkar for an #InstaPerfect Holi celebration like never before. Your Holi celebrations will remain incomplete without tasting the delicious malpuas and the refreshing bhang wali lassi or thandai. Post Holi celebrations, return to your property and have some leisure.</li><li>In the evening, feel free to stroll around on the streets of Pushkar on your own. Witness the divine aarti at Brahma Ghat on the banks of Pushkar Sarovar or go for cafe hopping.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>"
    },
    {
      "day": 2,
      "title": "Pushkar Local Explorations | Ajmer Sharif Dargah",
      "description": "<ul><li>Wake up early in the morning and post breakfast, check-out from our property and head out for Pushkar’s local explorations.&nbsp;</li><li>Seek blessings at the only Brahma Temple in the World, explore the sacred ghats of Pushkar Sarovar and treat your stomach with mouth-watering street food like falafal rolls and pakoras. Visit Savitri Mata Temple via ropeway (on your own) and witness the jaw dropping view of Pushkar from the Aravalli hilltop.</li><li>In the evening, drive from Pushkar towards Ajmer city and pay homage at the popular Ajmer Dargah Sharif - a sacred sufi shrine, and eat at local food spots nearby.</li><li>In the night, start your overnight journey from Ajmer to Gurugram.</li></ul>"
    },
    {
      "day": 3,
      "title": "Gurugram Arrival | Trip Ends",
      "description": "<ul><li>Reach Gurugram early morning with lots of amazing memories and unforgettable experiences.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Gurugram to Gurugram: Tempo Traveler/AC Bus.",
    "Accommodation on Sharing Basis: 1 Night in Hotel with Swimming Pool.",
    "3 Meals: Dinner (1) & Breakfast (2), starting from Breakfast on Day 1 to Breakfast on Day 2.",
    "All local explorations as per itinerary: Pushkar Sarovar, Jagatpita Brahma Temple, Savitri Mata Temple, Ajmer Dargah Sharif and Ghats of Pushkar.",
    "Experienced and cool Trip Captain.",
    "Holi celebrations.",
    "Driver allowances, toll taxes, parking, state road taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees/monuments fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "udaipur-mount-abu-trip-from-delhi",
  "title": "Udaipur & Mount Abu Trip From Delhi",
  "destination": "Rajasthan",
  "duration": "4 Days 3 Nights",
  "price": "₹11,999",
  "originalPrice": null,
  "discount": null,
  "imageUrl": "/cloned_media/2774120230716155320.png",
  "gallery": [
    "/cloned_media/39201220230716155320.png",
    "/cloned_media/36140920230716155320.png",
    "/cloned_media/16810620230716155320.png",
    "/cloned_media/20396620230716155320.png",
    "/cloned_media/15782820230716155320.png",
    "/cloned_media/36352920230716155320.png",
    "/cloned_media/21553820230716155320.png",
    "/cloned_media/10515020230716155320.png",
    "/cloned_media/5449220230716155320.png",
    "/cloned_media/27188220230716155320.png"
  ],
  "overview": "<h2>About Udaipur and Mount Abu Tour Package</h2><p>Our Udaipur and Mount Abu tour package is an enigmatic combination of royal grandeur and hill station charm in the beautiful state of Rajasthan. \"The City of Lakes,\" Udaipur, welcomes one with its romantic ambiance and majestic palaces. Imagine floating on Lake Pichola as the sun sets, the golden light across the sparkling waters as one approaches the iconic Lake Palace.</p><p>Visit the sumptuous City Palace, reflecting multi amount Rajasthani architecture, and lose yourself in leafy Saheliyon Ki Bari gardens. From there, retreat to the cool breezes and teak forests of Mount Abu, the only hill station in Rajasthan.</p><p>Hike to stunning Nakki Lake, set amidst rolling hills and ancient rock formations, and visit the exquisitely carved Dilwara Jain Temples, surely a testament to human adeptness in art. Our exclusive itinerary has been specially designed so that you get the best of both places with comfortable accommodation, expert guides, and hassle-free transportation.</p><p>We give you experiences in store, be it with the historical buff, the nature enthusiast, or the romantic getaway, this tour will leave you with memories. Imagine relishing authentic Rajasthani food, shopping in colorful markets, and seeing the sun set behind the Aravalli Hills. Let us help you live out that dream of a Rajasthan adventure. Book our exclusive <a href=\"https://go4explore.com/trip/rajasthan\" style=\"color:blue;\">Rajasthan Tour Package</a> with Go4Explore and get set for the journey of your senses that will leave you with life-long tales.</p><h3>Best Places to Visit in Udaipur Mount Abu Tour</h3><ul><li><strong>City Palace:</strong> Perhaps the most breathtaking complex views of Lake Pichola are from the hallowed halls of this city palace, a marvelous example of Rajasthani architecture. It comprises an extensive structure with palaces, museums, courtyards, and ornate rooms that present a visitor with vivid glimpses into the life of luxury led by the royal family of Mewar.</li><li><strong>Lake Pichola:</strong> Flanked by hills, palaces, and temples, Lake Pichola is the heart of Udaipur. This artificial lake with serene waters and two island palaces makes the <a href=\"https://go4explore.com/trips/udaipur\" style=\"color:blue;\">Udaipur Tour</a> very romantic. It had been appropriately tagged as the \"Venice of the East\".</li><li><strong>Saheliyon Ki Bari:</strong> The major attraction of this ornamental garden is that it was made so that royal ladies could pass their leisure time. With its lotus pools, marble elephants, and fountains, the place, prima facie, is a peaceful retreat from the maddening crowd of the city and essays the aesthetics of the nobility of Rajasthan.</li><li><strong>Nakki Lake:</strong> Legend has it that gods carved Nakki Lake with their nails. This beautiful lake overlooked by hills and rock formations is a favorite haunt for boating and picnics. Here the atmosphere does reasonable justice to give a refreshing refrieve in Mount Abu.</li><li><strong>Dilwara Jain Temples:</strong> The Dilwara Temples are among the finest marvels in architecture because of their exquisite marble carvings. Intricate designs and delicate workmanship—such as the remains of those five temples, built during the 11th to 13th centuries, still evoke awe in visitors' minds.</li><li><strong>Monsoon Palace:</strong> Perched atop Bandara Hill, the Monsoon Palace overshadows Udaipur's lakes and palaces in a panoramic view. What was this hilltop retreat turned into for the vantage point of the tracking of monsoon clouds is an attraction today for the tourists to view the exquisite sunset and get a glimpse of the romantic landscape of this city.</li><li><strong>Fateh Sagar Lake:</strong> With the Aravalli Hills on either side, this artificial lake forms a good picnic/picnic spot. Fateh Sagar Lake has three small islands—on one of these is situated the Nehru Park; it offers boating facilities and breathtaking views, especially at sunset.</li><li><strong>Jagdish Temple:</strong> Situated beside the City Palace, Jagdish Temple is one of the most beautiful examples of Indo-Aryan architecture. This is a three-storied house of God dedicated to Lord Vishnu. Delicately carved sculptures and valorous pillars, combined with an imposing 79-foot spire, are subordinate to attract not only devotees but also architecture enthusiasts.</li><li><strong>Guru Shikhar:</strong> Guru Shikhar is the highest peak of the Aravalli Range, offering panoramic views in all directions. This place houses a temple dedicated to Guru Dattatreya. At this spot, the significance of spirituality has been blended along with natural beauty, thus making this a must-visit for trekkers and pilgrims.</li><li><strong>Mount Abu Wildlife Sanctuary:</strong> Encompassing an area of 290 square kilometers, this sanctuary hosts a wide range of flora and fauna. Debbie is home to leopards, sloth bears, over 250 species of birds, nature trails, and a view of the rarest of these animals in their natural surroundings.</li><li><strong>Bagore ki Haveli:</strong> This 18th-century haveli (mansion) is located at Gangaur Ghat on Lake Pichola's waterfront. Once home to Mewar's prime minister, it's now a museum showcasing Rajasthani culture. The haveli features intricate carvings, colorful glass and mirror work, and displays of costumes and modern art. In the evenings, it hosts the popular \"Dharohar\" cultural show, presenting traditional Rajasthani music and dance.</li><li><strong>Gangaur Ghat:</strong> Named after the Gangaur festival, this ghat (series of steps leading to the water) is one of the most famous in Udaipur. It's located on the banks of Lake Pichola and is known for its architectural beauty and religious significance. During the Gangaur festival, it becomes a center of celebrations. The ghat offers beautiful views of the lake and surrounding palaces, making it a popular spot for both locals and tourists.</li><li><strong>Ambrai Ghat:</strong> Also situated on Lake Pichola, Ambrai Ghat is renowned for its spectacular views of the City Palace, Lake Palace, and Jag Mandir. It's a favorite spot for watching sunsets over the lake. The ghat is home to several restaurants offering lakeside dining, where visitors can enjoy local cuisine while taking in the picturesque surroundings. It's particularly beautiful in the evening when the palaces are illuminated.</li></ul><h3>Things to do in Udaipur and Mount Abu Trip</h3><p><strong>Take a boat ride across Lake Pichola:</strong> Experience the calm waters of Lake Pichola and get up-close views of the City Palace, Lake Palace, and Jag Mandir. Of concern are the sunset cruises, offering a most romantic experience with the striking golden rays bathing the surroundings of architecture.</p><p><strong>Shopping at local markets:</strong> The vibrant bazaars of Udaipur will soak you in their intoxicating colors. Brilliant textiles, minute handicrafts with intricate details, and unique jewelry of the Rajasthani style are some things that would work well as souvenirs or placeholders in your memory. The most famous places to shop include Bada Bazaar, Chetak Circle, and Hathi Pol Bazaar for exclusive items.</p><p><strong>Watch a cultural performance:</strong> Attend the traditional Rajasthani dance and music performance at Bagore Ki Haveli. Colorful costumes, folk music, and captivating performances will give you the feel of the rich cultural heritage of the place.</p><p><strong>Take a cooking class:</strong> Join a local cooking class to prepare authentic Rajasthani food items. Get acquainted with the usage of unique spices and the special manner of cooking used under Mewari cuisines, and relish your prepared meal.</p><p><strong>Time for Guru Shikhar Hike:</strong> Trek to the top of the Aravalli Hills that offer great views of <a href=\"https://en.wikipedia.org/wiki/Mount_Abu\" style=\"color:blue;\" target=\"_blank\" rel=\"noopener noreferrer\">Mount Abu</a> and landscapes around. Visit the shrine of Guru Dattatreya and cherish some moments of peace in the calm atmosphere present at the top.</p><p><strong>Visit Dilwara Jain Temples:</strong> Get surprised by intricate marble carvings depicted in the Dilwara Jain Temples. Look at the minute designs and intricate craftsmanship, which renders the temples a keynote to Indian architecture.</p><p><strong>Boating in Nakki Lake:</strong> Take a paddle-boat on rent and enjoy the calm waters of Nakki Lake. Relish the surroundings of hills and strange rock formations while simply relaxing on the lake. The famous Toad Rock is also located here.</p><p><strong>Watch sunset at Sunset Point:</strong> Wind up your day in Mount Abu at Sunset Point. Help paint the sky with various shades of bright colors as the day ends over the Aravallis, truly making it a picture-perfect moment.</p><p><strong>Go to Monsoon Palace during sunset:</strong> Head to Sajjangarh, or Monsoon Palace, for an excellent view of the sunset. Situated on a hilltop, this palace has commanding views of the lakes, palaces, and countryside of Udaipur. The golden hour light simply casts a magical spell over the City of Lakes.</p><p><strong>Cycle around Fateh Sagar Lake:</strong> Rent a bicycle and cycle around Fateh Sagar Lake. The breeze was very nice, with a stop at Nehru Park on one of the islands and an ambiance that is so peaceful at the man-made lake.</p><p><strong>Visit Vintage Car Museum:</strong> Visit the Vintage Car Museum and get an insight into a fine collection of vintage and rare cars. From Rolls-Royces to Mercedes, each one well-preserved to take you back in time for a royally rolling experience in automobile history and royal lifestyles.</p><p><strong>Take Heritage Walk in Old City:</strong> Take a guided heritage walk through the old city of Udaipur. Hidden gems, local legends, beautiful havelis, ancient temples, and traditional crafts workshops are found in narrow lanes.</p><p><strong>Practice yoga in Mount Abu:</strong> Do some yoga in the absolute serenity of Mount Abu. Several retreats and ashrams offer classes for all levels, and you can connect your spirit with nature directly to be at peace.</p><p><strong>Take a Jeep safari:</strong> Explore a night-themed jeep safari through extreme landscapes around Mount Abu. Drive on off-beat paths, spot local wildlife, and witness breathtaking landscapes that regular vehicles are not able to reach.</p><p><strong>Visit Shri Raghunathji Temple:</strong> This shrine is dedicated to Lord Raghunathji, the avatar of Lord Vishnu, constructed way back in the 14th century. The intricate carvings, the serene environment, knowing a bit about its history, these are all things that make this a must visit temple.</p><h3>How to Reach Udaipur</h3><p><strong>By Air:</strong> Fly to Maharana Pratap Airport, located about 20 km from Udaipur city center. The airport is well-connected to major Indian cities like Delhi, Mumbai, and Jaipur. Taxis and prepaid cabs are available from the airport to reach your destination.</p><p><strong>By Train:</strong> Udaipur City Railway Station is well-connected to major cities across India. Luxury trains like Palace on Wheels and Royal Rajasthan on Wheels also stop here. The station is centrally located, making it easy to reach hotels and attractions.</p><p><strong>By Bus:</strong> Regular bus services connect Udaipur to nearby cities and states. Both government-run and private buses are available. The main bus stand is located in the heart of the city, providing easy access to various parts of Udaipur.</p><p><strong>By Car:</strong> Drive to Udaipur via well-maintained national and state highways. Major routes include NH48 from Ahmedabad, NH58 from Jaipur, and NH76 from Chittorgarh. Scenic drives offer glimpses of Rajasthan's diverse landscape along the way.</p><h3>Best Time to visit Udaipur</h3><p><strong>Winter-</strong> More or less, this is considered to be the best time to visit Udaipur. The temperature is pleasant and lies between 11°C and 28°C. The weather is perfect for sightseeing purposes, outdoor activities, the tourist places are busier than usual, and the city is busy organizing various cultural events.</p><p><strong>Summer-</strong> Summers are very hot and dry, and could reach as worse as 45°C. It definitely does not come as the most comfortable time for outdoor activities, but great deals on accommodations can work for people. Early mornings and evenings would be fine for sightseeing.</p><p><strong>Monsoon-</strong> The monsoon relieves the scorching heat of the summer months. The temperatures range from 25°C to 35°C. The monsoon leaves the city lush and lakes full, though some outdoor activities may be restricted, and it is a romantic part of the year.</p><p><strong>Autumn-</strong> Autumn is a season of pleasant climate, with the temperature being from 20°C to 33°C, compared to when the monsoon is receding. Green landscapes, less tourist rush, perfect time to capture moments in your cameras, and perfect driving time outdoors.</p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Delhi to Udaipur | Overnight Journey",
      "description": "<ul>    <li>Assemble at the boarding point in Delhi (as informed).</li>    <li>Start an overnight journey to Udaipur and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Udaipur Arrival | Old City Exploration",
      "description": "<ul>    <li>After arriving in Udaipur, check-in to our comfy hotel, have some leisure and freshen-up.</li>    <li>Head out to explore Rajasthan’s lake city and various heritage wonders. Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. The City Palace offers panoramic views of Pichola lake and the entire white city. Built in the 17th century and dedicated to Lord Vishnu, visit Jagdish Temple and witness the intricate carvings of the temple. We will also visit the beautiful Bagore Ki Haveli nestled along Lake Pichola and further explore streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, temples and tasty street food.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Udaipur Sightseeing | Lakes, Bazaar & More",
      "description": "<ul>    <li>Wake up and post a delightful breakfast, set out to explore the other major attractions in Rajasthan’s lake city.</li>    <li>A trip to Udaipur will remain incomplete without soaking in the serenity of its freshwater lakes. We will visit the most prominent ones in our sightseeing tour such as Lake Pichola and Fatehsagar Lake. Move ahead to visit the Saheliyon Ki Bari and Shilpgram.</li>    <li>Before calling it a day, explore the Hathi Pol Bazar known for miniature paintings, ichhwai paintings and hand paintings on silk. This local market is just best for shopping and lip smacking street food options.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Udaipur to Mount Abu | Mount Abu Chill Scenes",
      "description": "<ul>    <li>Wake up and post a delightful breakfast, check-out from our hotel and drive towards Mount Abu, Rajasthan’s only hill station.</li>    <li>After arriving in Mount Abu, check-in to our lovely campsite and have some leisure. Indulge in adventure activities like rock climbing, zipline, loop bridge, etc.</li>    <li>In the evening, treat yourself with a stunning sunset view, enjoy a warm bonfire along with mouthwatering evening snacks.</li>    <li>Dinner and overnight stay in camps in Mount Abu.</li></ul>"
    },
    {
      "day": 4,
      "title": "Mount Abu Exploration | Depart for Delhi",
      "description": "<ul>    <li>Wake up and post a delightful breakfast, check-out from our campsite and head towards Nakki Lake. Travelers can enjoy calm and relaxed boating in Nakki Lake.</li>    <li>Later, say goodbye to Mount Abu and start-off your return journey for Delhi.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Delhi to Delhi: comfortable AC Volvo/Deluxe bus/Force Traveler.",
    "Accommodation on sharing basis: 2 nights in Hotel (Udaipur), 1 night in camps (Mount Abu).",
    "Meals: Breakfast (3), Dinner (3).",
    "Experienced and cool trip leader.",
    "Bonfire, evening snacks and light music (only in Mount Abu).",
    "Local explorations as per the itinerary.",
    "Activities in Mount Abu like rock climbing, zipline, loop bridge, etc.",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
{
  "slug": "udaipur",
  "title": "Udaipur",
  "destination": "Rajasthan",
  "duration": "3 Days 2 Nights",
  "price": "₹7,999",
  "originalPrice": "₹8,999",
  "discount": "₹1,000",
  "imageUrl": "/cloned_media/29224320230701062448.png",
  "gallery": [
    "/cloned_media/38559620230701062448.png",
    "/cloned_media/9003320230701062448.png",
    "/cloned_media/17918820230701062448.png",
    "/cloned_media/7751620230701062448.png",
    "/cloned_media/26993220230701062448.png",
    "/cloned_media/22261920230701062448.png",
    "/cloned_media/40552920230701062448.png",
    "/cloned_media/1562720230701062448.png",
    "/cloned_media/4426120230701062448.png",
    "/cloned_media/24194720230701062448.png"
  ],
  "overview": "<h2>About 3 Days Udaipur Tour Package</h2><p>Let’s take you on a quick getaway to Rajasthan’s lake city Udaipur. Our 3 Days 2 Nights, well-structured <b>Udaipur Tour Package</b> will make you experience an unforgettable journey across Rajasthan. Soak up the rich tapestry of history, culture, delightful food and natural beauty during your 3 Days resplendent escapade. Take a warm welcome in the city with a taste of authentic Mewari cuisine to begin your adventure.</p><p>The framework of this architectural marvel, the City Palace, stands to the grandeur of narration. Cruise across serene Lake Pichola, taking in the floating Lake Palace and enchanting city skyline. Visit ancient temples that exemplify the spiritual heart of Udaipur, and see how local artists skillfully work on miniature paintings and intricate jewelry.</p>\n<p>Visit the countryside to explore hilltop palaces and regal cenotaphs, providing astounding vistas and a glimpse of royal Rajasthan's past. Treat yourselves to cultural programs, savor the taste of traditional cooking, or unwind with yoga and spa treatments.</p><p>Live Udaipur stories that come alive through our guides, and stay in heritage hotels for a taste of royal life in comfortable accommodation. Our itinerary has balanced activities so as to give you a feel of being completely guided, along with enough time for personal leisure that can be spent in creating those magical moments of staying in the Venice of the East. From tiring bazaars to the shores of quiet lakes. All moments, one experiences across Udaipur are sure to engage the senses and leave behind some very beautiful memories of this jewel of <a style=\"color:blue;\" href=\"https://go4explore.com/trip/rajasthan\">Rajasthan Tour Package</a>.</p><h3>Places to Visit in 3 Days Udaipur Tour</h3><ul>    <li><strong>City Palace:</strong> Perched on the east bank of Lake Pichola, the City Palace is a magnificent complex of courtyards, pavilions, and gardens. Built over 400 years, it showcases a blend of Rajasthani and Mughal architecture. The palace's museums display royal artifacts, while its terraces offer stunning views of the lake and city.</li>    <li><strong>Lake Pichola:</strong> This artificial freshwater lake is Udaipur's pride, fringed by hills, palaces and bathing ghats. Tranquil boat rides amidst this beauty complete with the famous Lake Palace, almost floating literally on the waters add to its ethereal beauty. Sunset cruises are particularly popular among the visitors.</li>    <li><strong>Jagdish Temple:</strong> Situated next to the City Palace, Jagdish Temple is a fine example of Indo-Aryan architecture. Erected in 1651, it is dedicated to Lord Vishnu. Intricate carvings on the walls, sculpted pillars, and painted walls make it one of the marvels of Hindu craftsmanship and an important religious site.</li>    <li><strong>Sahelion-ki-Bari:</strong> This ornamental garden comprised royal ladies. It contains lush lawns, marble elephants, fountains, and a lotus pool. The name of this garden means \"Garden of the Maidens.\" It offers an escape from the triviality of this hustle city, perfect to take a leisure walk.</li>    <li><strong>Monsoon Palace:</strong> Also known as Sajjangarh Palace, this hilltop royal residence has panoramic views over Udaipur's lakes, palaces, and surrounding countryside. Built to watch monsoon clouds, it's now a popular spot for sunsets. The drive up provides beautiful vistas of the Aravalli hills.</li>    <li><strong>Fateh Sagar Lake:</strong> Situated north of Pichola Lake, this artificial lake lies between the hills and gardens. It features three small islands out of which one is a popular picnic spot known as Nehru Park. Afternoon strolls through its promenade are simply great views, while boat rides turn out to be ideal for souls seeking peace.</li>    <li><strong>Bagore Ki Haveli:</strong> Located on the waterfront of Lake Pichola, this 18th-century haveli now houses a museum showcasing Rajasthani culture. Its 138 rooms display costumes, traditional art, and unique collections. In the evenings, it hosts cultural performances, including the famous Dharohar folk dance.</li>    <li><strong>Gangaur Ghat:</strong> Located in Udaipur, Rajasthan, Gangaur Ghat is a famous waterfront area on Lake Pichola. It's known for its beautiful architecture and as a site for religious ceremonies, particularly during the Gangaur festival. The ghat offers stunning views of the lake and surrounding palaces.</li>    <li><strong>Under The Sun Aquarium:</strong> This is an aquarium in Udaipur that showcases various species of fish and aquatic life. It's a popular attraction for families and those interested in marine biodiversity.</li>    <li><strong>Bahubali Hills:</strong> Also known as Machhla Magra, this hill in Udaipur offers panoramic views of the city and its lakes. It's famous for a large statue of Bahubali (a Jain Tirthankara) at its peak.</li>    <li><strong>Badi Lake:</strong> This artificial lake, also called Jiyan Sagar, is located near Udaipur. It was built in the 17th century to combat drought. The lake is surrounded by hills and offers a peaceful retreat away from the city bustle.</li>    <li><strong>Ambrai Ghat:</strong> Another picturesque ghat in Udaipur, Ambrai Ghat is known for its stunning views of Lake Pichola, City Palace, and Jag Mandir. It's a popular spot for watching sunsets and houses several restaurants offering lakeside dining.</li></ul><h3>Things to do in Udaipur Trip</h3><p><strong>1. Palace Tour:</strong> Explore the magnificent City Palace complex, marveling at its blend of Rajasthani and Mughal architecture. Wander through ornate courtyards, admire the intricate mirror work in Sheesh Mahal, and visit the palace museum to view royal artifacts.</p><p><strong>2. Lake Pichola Boat Ride:</strong> Take a serene boat ride on <a style=\"color:blue;\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Lake_Pichola\">Lake Pichola,</a> especially during sunset. Glide past the famous Lake Palace, Jag Mandir, and ghats, enjoying panoramic views of the city's skyline and surrounding Aravalli Hills.</p><p><strong>3. Cultural Performance:</strong> Attend an evening cultural show at Bagore Ki Haveli. Watch traditional Rajasthani folk dances, puppet shows, and music performances that bring local legends and culture to life.</p><p><strong>4. Cooking Class:</strong> Participate in a Rajasthani cooking class to learn about local spices and techniques. Prepare traditional dishes like dal baati churma or gatte ki sabzi, then enjoy your culinary creations.</p><p><strong>5. Handicraft Shopping:</strong> Visit local markets like Surag Pol &amp; Hathi Pol and artisan workshops to watch craftspeople create miniature paintings, textiles, and jewelry. Purchase authentic souvenirs directly from skilled artisans.</p><p><strong>6. Sunrise at Monsoon Palace:</strong> Wake up early for a trip to Monsoon Palace (Sajjangarh). Watch the sunrise over Udaipur, painting the city and lakes in golden hues. The panoramic views from this hilltop location are truly breathtaking.</p><p><strong>7. Bicycle Tour:</strong> Take a guided bicycle tour through Udaipur's old city. Pedal through narrow lanes, past ancient havelis, and along the lakeside, getting an intimate look at local life and hidden architectural gems.</p><p><strong>8. Heritage Walk:</strong> Join a heritage walk to discover Udaipur's rich history. Visit lesser-known sites, learn about local legends, and gain insights into the city's royal past and cultural significance.</p><p><strong>9. Sunset at Fateh Sagar Lake:</strong> Enjoy a leisurely evening at Fateh Sagar Lake. Take a stroll along the promenade, rent a paddleboat, or simply relax at a lakeside café while watching the sun set behind the Aravalli hills.</p><p><strong>10. Yoga by the Lake:</strong> Start your day with a rejuvenating yoga session by Lake Pichola. Many hotels and local instructors offer classes with stunning lake views, providing a peaceful way to connect with Udaipur's serene atmosphere.</p><p><strong>11. Ropeway to Karni Mata Mandir:</strong> This ropeway, or cable car, takes visitors to the Karni Mata Temple atop Machla Magra Hill (also known as Bahubali Hills). The ride offers panoramic views of Udaipur city and its lakes. At the top, you'll find the temple dedicated to Karni Mata, along with stunning vistas of the surrounding landscape.</p><p><strong>12. Cafe Hopping with Lake View:</strong> Udaipur is known for its picturesque cafes overlooking Lake Pichola and other water bodies. Many of these cafes are located in the old city area, offering not just great views but also a variety of cuisines. Popular spots include Cafe Edelweiss, Jheel's Ginger Coffee Bar, and Cafe Namaste. Visitors can enjoy local and international dishes while taking in the serene lake views.</p><p><strong>13. Cultural Program in Bagore ki Haveli:</strong> Bagore ki Haveli is a historic 18th-century haveli (mansion) located at Gangaur Ghat on the banks of Lake Pichola. In the evenings, it hosts a popular cultural show called \"Dharohar,\" which showcases traditional Rajasthani dance, music, and puppet performances. This program offers visitors a glimpse into the rich cultural heritage of Rajasthan.</p><h3>How to reach Udaipur</h3><p><strong>By Air:</strong> The Maharana Pratap Airport in Udaipur is well-connected to the major Indian cities. There are direct flights from Delhi, Mumbai, Jaipur, and Ahmedabad. It is about 22 km from the city center, so one can hire a taxi or a pre-paid cab easily.</p><p><strong>By Train:</strong> Udaipur City Railway Station has connectivity to nearly all major cities in India. Luxury trains like Palace on Wheels also halt here. There are regular trains from Delhi, Mumbai, Jaipur, and Ahmedabad. One can find the railway station at the city center and is well linked with hotels and tourist spots.</p><p><strong>By Road:</strong> The connectivity of Udaipur by roads is pretty good. You can drive down or take a bus from the nearby cities. While the journey from Jaipur takes about 6-7 hours, from Ahmedabad, you would take something about 5 hours to reach Udaipur. There are frequent bus services, voluntary ones included, available with comfortable AC buses from various major cities in Rajasthan and neighboring states.</p><h3>Best Time to Visit Udaipur</h3><p><strong>Winter (October to March):</strong> This is the peak tourist season and generally considered the best time to visit Udaipur. Daytime temperatures are pleasant, ranging from 20-28°C (68-82°F), perfect for sightseeing and outdoor activities. Nights can be cool, dropping to 5-10°C (41-50°F). The clear skies and comfortable weather make it ideal for boat rides and exploring the city.</p><p><strong>Summer (April to June):</strong> Summers are hot and dry in Udaipur, with temperatures soaring to 40°C (104°F) or higher. While this isn't the most comfortable time for tourists, you can find good deals on accommodations. Early mornings and evenings are better for outdoor activities. The Gangaur Festival in March-April is a colorful attraction during this time.</p><p><strong>Monsoon (July to September):</strong> The monsoon brings relief from the summer heat, with temperatures ranging from 25-35°C (77-95°F). The city looks lush and beautiful with rain-washed streets and full lakes. While some outdoor activities might be limited, the romantic atmosphere and fewer tourists make it appealing for some. The Teej Festival in August is a vibrant celebration during this season.</p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Delhi to Udaipur | Overnight Journey",
      "description": "<ul>    <li>Assemble at the boarding point in Delhi (as informed).</li>    <li>Start an overnight journey to Udaipur and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Udaipur Arrival | Old City Exploration",
      "description": "<ul>    <li>After arriving in Udaipur, check-in to our hotel, have some leisure and freshen-up.</li>    <li>Head out to explore Rajasthan’s lake city and various heritage wonders.</li>    <li>Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. The City Palace offers panoramic views of Pichola lake and the entire white city.</li>    <li>Built in the 17th century and dedicated to Lord Vishnu, visit Jagdish Temple and witness the intricate carvings of the temple.</li>    <li>We will also visit the beautiful Bagore Ki Haveli nestled along Lake Pichola and further explore streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, temples and tasty street food.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Udaipur Sightseeing | Lakes, Bazaar & More",
      "description": "<ul>    <li>Wake up and post a delightful breakfast, set out to explore the other major attractions in Rajasthan’s lake city.</li>    <li>A trip to Udaipur will remain incomplete without soaking in the serenity of its freshwater lakes. We will visit the most prominent ones in our sightseeing tour such as Lake Pichola and Fatehsagar Lake. Move ahead to visit the Saheliyon Ki Bari and Shilpgram.</li>    <li>Before calling it a day, explore the Hathi Pol Bazar known for miniature paintings, ichhwai paintings, and hand paintings on silk.</li>    <li>This local market is just best for shopping and lip-smacking street food options.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Udaipur #MeTime | Depart for Delhi",
      "description": "<ul>    <li>Wake up and post a delightful breakfast, check-out from our hotel and quickly head out to explore some nearby local markets, lakeside themed-cafes and pick some souvenirs for your home &amp; dear ones.</li>    <li>In the evening, say goodbye to Udaipur and start-off your return journey for Delhi and reach Delhi early next morning with lots of amazing memories and unforgettable experiences..</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Delhi to Delhi: comfortable AC Volvo/Deluxe bus/Force Traveler.",
    "Accommodation on sharing basis: 2 nights in Hotel (Udaipur).",
    "Meals: Breakfast (2), Dinner (2).",
    "Experienced and cool trip leader.",
    "Local explorations as per the itinerary.",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions"
  ]
},
  {
  "slug": "rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer",
  "title": "Rajasthan Backpacking From Delhi - Udaipur-Jodhpur-Jaisalmer",
  "destination": "Rajasthan",
  "duration": "5 Days 4 Nights",
  "price": "₹29,999",
  "originalPrice": null,
  "discount": null,
  "imageUrl": "/cloned_media/37210520230716153323.png",
  "gallery": [
    "/cloned_media/31934620230716153323.png",
    "/cloned_media/12173220230716153323.png",
    "/cloned_media/4275820230716153323.png",
    "/cloned_media/31899820230716153323.png",
    "/cloned_media/13696720230716153323.png",
    "/cloned_media/7083020230716153323.png",
    "/cloned_media/38030420230716153323.png",
    "/cloned_media/1245220230716153323.png",
    "/cloned_media/4686920230716153323.png",
    "/cloned_media/2671920230716153323.png"
  ],
  "overview": "<h2>About Rajasthan Backpacking Udaipur Jodhpur Jaisalmer Trip Package</h2><p>Imagine walking in a world where ancient tales come alive, where every street turn beckons with whispers of its erstwhile royal past, and with stretches of golden sand as far as the eye can see. Welcome to <a style=\"color:blue;\" href=\"https://go4explore.com/trip/rajasthan\">Rajasthan</a>, land of the kings and warriors; your next adventure awaits!</p><p>Get ready to color up your life with our Rajasthan Backpacking Trip Package, the ticket for any explorer at heart in India's most colorful state. Over the time of 5 unforgettable days, you will journey through enchanting cities Udaipur, Jodhpur, and Jaisalmer each different in its feel and story to share.</p><p>Begin in Udaipur, the Venice of the East, where gleaming lakes reflect opulent palaces. Wander small alleys lined with colorful artisan shops and lose yourself in the romance of this city. Then we will whisk you away to Jodhpur, where an ocean of blue-painted houses lies at the foot of the mighty Mehrangarh Fort. You'll discover bustling markets and taste spicy flavors of authentic Rajasthani cuisine.</p><p>Finally, you will end up in Jaisalmer, a desert city that has come alive out of 'Arabian Nights'. Picture yourself mounted on a camel, going deep into the Thar Desert as the sun sets and the sky turns orange and pink. A night camping in the middle of the desert, with specifications like sleeping under the starry sky and hearing folk tales to the merry chirping of a campfire—this would be a lifetime experience.</p><p>It is not a journey but a ride through time; it is a carnival of senses—they will make stories you would tell for years to come. Our finely crafted itinerary creates the best balance between must-see sights and off-the-beaten-path experiences, lending you the most authentic taste of Rajasthan.</p><p>Do not just dream about the wonders of India – live them. Let the booking for the Rajasthan Backpacking Trip get you ready for the most unforgettable journey of your life. The palaces, deserts, and warm smiles of Rajasthan await your arrival!</p><h3>Best places to visit in Rajasthan Backpacking Trip</h3><p><b>City Palace:</b> The city palace in Udaipur, overlooking the Pichola Lake, is a magnificent complex. In the blend of Rajasthani and Mughal architecture, detailed mirror work, and stunning views of the lake, the place itself turns out to be a must-visit. The palace museum hosts many royal artifacts and historical treasures.</p><p><b>Lake Pichola:</b> Located in Udaipur, the summit of beauty, Lake Pichola offers serene boat rides amidst breathtaking views. With the hills, palaces, and temples surrounding from all sides, its beauty becomes irresistible at sunset. Legendary Lake Palace Hotel on Jag Niwas island must not be left out.</p><p><b>Jaisalmer Fort:</b> One such live UNESCO World Heritage site fort is Jaisalmer Fort. Within its golden sandstone walls lie temples, palaces, and residences. Wander through narrow lanes, shop at artisan shops, and then take in the panoramic view of the desert from here.</p><p><b>Sam Sand Dunes:</b> At Sam Sand Dunes, located near Jaisalmer, one experiences the quintessential Thar Desert adventure. Take camel-back rides across wavy dunes, get enchanted by the hypnotic view of the sunsets, and camp under star-studded nights. Rajasthani folk music and folk dance add to bringing charisma to the night in the desert.</p><p><b>Mehrangarh Fort:</b> Mehrangarh dominates the skyline of Jodhpur. While still a formidable building, inside this very imposing structure, it contains museums with royal palanquins, arms, and artwork. From its ramparts, one offers stunning views of the blue-painted old city below, justifying the \"Blue City\" moniker.</p><p><b>Ghanta Ghar Chowk:</b> The Clock Tower and Sardar Market are considered to be the heart of the old city in Jodhpur. This colorful bazaar sells everything—from spices to textiles. The almost-century-old Clock Tower is an important landmark and the meeting point</p><p><b>Jagdish Temple:</b> Jagdish Temple in Udaipur is one of the finest examples of Indo-Aryan architecture. It belongs to Lord Vishnu and has intense carvings with a tall, peaked shikhara, making it a matchless attraction both for the devotees and those who love fine art. Its location at the center renders this temple a popular stoppage.</p><p><b>Fateh Sagar Lake:</b> Fateh Sagar Lake, located near Fateh Sagar, is the second-largest artificial lake in Udaipur. It is secluded and ideal for a boat ride or walking along its lake, surrounded as it is by hills and gardens. The Nehru Park island in its middle adds to its beauty.</p><p><b>Patwon Ki Haveli:</b> Patwon Ki Haveli in Jaisalmer, is a five joined havelis. It fronts the main bazaar and is noted for its intricate stone carvings, jali or jharokhas—balconies—and paintings. This is an architectural marvel of Jaisalmer, showing how rich its merchants were.</p><p><b>Gadisar Lake:</b> Gadisar Lake was the man-made reservoir providing the city of Jaisalmer with its main water supply until recently. Now, it's a serene spot with temples and ghats built along its banks. Afternoon boat rides offer serene views.</p><p><b>Jaswant Thada:</b> Jaswant Thada is a dazzling marble memorial in Jodhpur for Maharaja Jaswant Singh II. Frequently noted as the \"Taj Mahal of Marwar,\" its intricate carvings and beset gardens are indeed tranquil, an escape from the bustle of city life.</p><p><b>Umaid Bhawan Palace:</b> Located in Jodhpur, Umaid Bhawan Palace happens to be among the largest private residences across the globe. Part royal residence, Luxury Hotel, and part museum, it gives insight into the royal heritage of Rajasthan and the Art Deco style.</p><p><b>Sajjangarh Palace:</b> Located at the top of a hill overlooking Udaipur is Sajjangarh Palace, otherwise called Monsoon Palace. The place was originally built to watch monsoon clouds; currently, it presents an all-round view of the city, more mesmerizing at sunset.</p><p><b>Bada Bagh:</b> Situated close to Jaisalmer, Bada Bagh is a garden complex with imperial cenotaphs. The intricate carving on monuments in sandstone at the desert backdrop hastens the haunting beauty more so during time zones of sunrise and sunset.</p><p><b>Mandore Gardens:</b> All the cenotaphs of Jodhpur's former rulers are to be found in Mandore Gardens, a few kilometers outside the city. Lush gardens, rock terraces, and a bathing pool set amidst the remains of Mandore's medieval town—all fashioned from the same bright red sandstone, a tranquil oasis in Jodhpur's arid landscape.</p><p><b>Vintage Car Museum:</b> The Vintage Car Museum houses some very rare and vintage automobiles owned by the Maharana. From Rolls-Royces to Mercedes, it is a treat for car buffs and history lovers.</p><p><b>Rao Jodha Desert Rock Park:</b> The Rao Jodha Desert Rock Park at the foot of Mehrangarh Fort in Jodhpur is a good example of the rugged beauty of this region. Walking trails here bring one face to face with native plants and give a view of the fort.</p><p><b>The Saheliyon Ki Bari</b> is a fine garden laid out for the royal ladies in Udaipur. The fountains, kiosks, marble elephants, and lotus pool make this a tranquil retreat and a telling view of the activities pursued by the royalty in their leisure time.</p><p><b>Haldighati:</b> Located in Rajasthan, Haldighati is a mountain pass famous for the 1576 battle between Maharana Pratap and the Mughals. The area is known for its yellow soil and historical significance. Visitors can explore the battlefield and can learn about Rajput history.</p><p><b>Maharana Pratap Museum:</b> Situated in Udaipur, this museum showcases the life and times of legendary Rajput king Maharana Pratap. It houses a collection of weapons. Paintings and artifacts offer insights into Mewar’s rich cultural heritage. They also illuminate Pratap's valorous deeds.</p><p><b>Bal Samand Lake:</b> This artificial lake near Jodhpur was built in the 12th century. Surrounded by lush gardens and a palace-turned-heritage hotel. It offers a serene retreat. Visitors can enjoy boating, birdwatching. Visitors can also enjoy picturesque views of the Rajasthani landscape.</p><p><span style=\"color: var(--bs-heading-color,inherit); font-size: 1.35rem; font-weight: 600; background-color: var(--bs-card-bg); text-align: var(--bs-body-text-align);\">Things to do in Rajasthan Backpacking Trip</span><br></p><p>In Udaipur, an evening cruise experience on Lake Pichola awaits visitors. Further on, you shall have an unforgettable view of that city—the golden light falling on City Palace and the surroundings around the hills, passing by historic islands and lakeside ghats.</p><p>It is presumed that a camel safari executed across the Thar Desert near Jaisalmer would be a typical Rajasthani experience. Rolling sand dunes, fantastic sunset, and a night spent stargazing and listening to traditional Rajasthani music seated around the campfire are only some of the attractions on this journey.</p><p>Zip-lining across Jodhpur is unusually thrilling, offering added adrenaline rushes and perspectives. See ancient step wells and fortifications from high up above, along with the sea of blue-painted houses, while Mehrangarh Fort provides a dramatic backdrop to your adventure.</p><p>The cultural performance is also held in the Bagore Ki Haveli of Udaipur. It envelops all kinds of Rajasthani arts that one can experience by visiting their evening shows, which present guests with folk music, colorfully costumed performers, and captivating dance forms, famous ones being the Rajasthani puppet show and fire dance.</p><p>Stroll through Jodhpur's Sardar Market, indeed a treat for sore eyes. Popular lanes are colorfully drenched with bright textiles, aromatic spices, and intricate handicrafts. The central Clock Tower serves as a unique landmark for this bustling bazaar.</p><p>Some regional Rajasthani cuisine, on the rooftops of Jodhpur, offers views and flavors that will take your breath away. You'll find the likes of dal baati churma, laal maas, and ker sangri here, accompanied by an even better view—the light-lit Mehrangarh Fort at night.</p><p>Take a village safari from Jodhpur out to the nearby villages of the Bishnoi. Witness the authentic exposure of rural Rajasthani life, the age-old traditional crafts of pottery and weaving, and the commitment of the Bishnoi community toward environmental conservation and protection of wildlife.</p><p>It is an ideal place for Pichwai and miniature painting works, normally detailing scenes from Indian mythology, royal life, and nature. You can watch the artists at work before picking up a unique souvenir of your Rajasthan trip in Udaipur's old city.</p><p>Visit the Vintage Car Museum, located off Helipad Road in Udaipur, showcasing Maharana's fleet of vintage vehicles. Shining Rolls-Royles to grace-inspiring Mercedes, these well-maintained automobiles speak volumes about royal rides of the past.</p><p>Wander through Jaisalmer's havelis, the most ornate mansions of the region, those like Patwon Ki Haveli and Salim Singh Ki Haveli. These ornate private mansions reveal adopted displays in minute sandstone carvings, intricately designed jharokhas linked to balconies, and frescoes inspired by Rajasthani life and the age of legends.</p><p>Enjoy sunset at Gadi Sagar Lake. This beautiful artificial lake, surrounded by sandstone structures and temples on all sides, is in comparison to none. The golden light of their setting adds to this mesmerizing reflection on the water surface.</p><p>Take a cooking class in Udaipur to unlock the secrets of traditional Rajasthani local cuisine. Learn about the entailment of local spices, traditional techniques of cooking, and preparation of dishes such as gatte ki sabzi or dal tadka. Share an assortment of food for a communal meal after preparing what you will eat.</p><p>Visit Jaswant Thada, a serene marble memorial at Jodhpur. Frequently called the \"Taj Mahal of Marwar,\" this intricate lattice work and serene gardens offer quiet retreat from the city below.</p><p>Do attend the sound and light spectacle at Kumbhalgarh Fort, absolutely a day outing from Udaipur. Lighted walls of this fortress and narration alive with rich history and legends of this UNESCO World Heritage site.</p><p>Join a block printing workshop in Udaipur and come up with your designs. Learn this traditional Rajasthani textile art and take this unique handmade piece as a memory, epitomizing the artistic heritage of this land.</p><p>Take a morning heritage walk in the old city of Jodhpur. Stroll down narrow lanes and explore the local temples, witnessing the emerging life of the city. Soft morning light paints magic hues on blue houses.</p><h3>How to Reach Rajasthan from Delhi?</h3><p><b>By Air:</b> Direct flights connect Delhi to Udaipur's Maharana Pratap Airport. It takes approximately 1.5 hours by flight; hence, it is the quickest way.</p><p><b>By Train:</b> Multiple trains run between Delhi and Udaipur. These trains include Chetak Express and Mewar Express. The journey takes anywhere between 12-16 hours, depending on the train.</p><p><b>By Bus:</b> Overnight AC buses are available from Delhi for Udaipur. It generally takes about 12-14 hours; so a fairly cheap way to reach.</p><p><b>By Car:</b> The distance is 665 km. You can either drive or hire a taxi. The journey would at best take you about 12 to 14 hours with stoppages on the way.</p><h3>Best Time to Visit Rajasthan</h3><p>Rajasthan's peak tourist season spans from mid-October to mid-March, offering comfortable temperatures and clear skies perfect for exploration. This period hosts major festivals and ideal conditions for desert activities. December and January are the busiest, with high tourist influx and premium pricing. Popular attractions can be crowded, and advance bookings are often necessary, especially around New Year's Eve. While this time provides the best weather, consider shoulder seasons for a balance of good conditions and smaller crowds.</p>\n<p>Other Related tour packages: <a style=\"color:blue;\" href=\"https://go4explore.com/trips/udaipur\">Udaipur Tour Package</a>, <a style=\"color:blue;\" href=\"https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer\">Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer</a>, <a style=\"color:blue;\" href=\"https://go4explore.com/trips/rajasthan-backpacking-pushkar-udaipur-bikaner\">Rajasthan Backpacking - Pushkar Udaipur Bikaner</a>.</p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Delhi to Udaipur | Overnight Journey",
      "description": "<ul>    <li>Assemble at the boarding point in Delhi (as informed).</li>    <li>Start an overnight journey to Udaipur and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Udaipur Arrival | Local Exploration",
      "description": "<ul>    <li>After arriving in Udaipur, check-in to our hotel, have some leisure and freshen-up.</li>    <li>Head out to explore Rajasthan’s lake city and various heritage wonders. Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. The City Palace offers panoramic views of Pichola lake and the entire white city. Move towards Sajjangarh Fort also known as Monsoon Palace situated on a hilltop. We will also visit the Vintage Car Museum and further explore streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, temples and tasty street food.</li>    <li>A trip to Udaipur will remain incomplete without soaking in the serenity of its freshwater lakes. We will visit the most prominent ones in our sightseeing tour such as Lake Pichola and Fatehsagar Lake.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 2,
      "title": "Udaipur to Jodhpur | Kumbhalgarh Fort | Jodhpur Arrival",
      "description": "<ul>    <li>Wake up early and post breakfast, check-out from our hotel in Udaipur and drive to Jodhpur - Rajasthan’s blue city.</li>    <li>Enroute Jodhpur, we will take a halt and visit Kumbhalgarh Fort also known as The Great Wall of India. Next we will visit Maharana Pratap Museum in Haldighati built during the war between Mewar Kings and Mughals.</li>    <li>After arriving in Jodhpur, check-in to our hotel and have some leisure.</li>    <li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Jodhpur Local Exploration",
      "description": "<ul>    <li>Wake up early and post breakfast, we will head out for a local sightseeing tour of Jodhpur.</li>    <li>We will visit Bal Samand Lake (if the time permits) and Umaid Bhawan Palace to witness the royalty. Experience the grandeur of Mehrangarh Fort, one of the largest forts positioned in Rajasthan perched on top of a perpendicular cliff. We will end our blue city exploratory tour at Jaswant Thada, a cenotaph dedicated to Mewar kings and commonly known as the Taj Mahal of Mewar.</li>    <li>Dinner and overnight stay in a hotel in Jodhpur.</li></ul>"
    },
    {
      "day": 4,
      "title": "Jodhpur to Jaisalmer | Thar Desert Diaries",
      "description": "<ul>    <li>Wake up early and post breakfast, check-out from our hotel in Jodhpur and drive to Jaisalmer - Rajasthan’s golden city.</li>    <li>After arriving in Thar Desert, check-in to our campsite located in Sam Sand Dunes, freshen-up and have some leisure.</li>    <li>Post refreshment, we will head out for Camel Safari in Thar Desert. Witness the beautiful sunset while enjoying your camel ride. Experience the thrill in Jeep Dune Bashing.</li>    <li>In the evening, enjoy a warm bonfire with Rajasthani folk music, Kalbelia dance and mouth-watering snacks.</li>    <li>Savour home-style cooked Rajasthani dinner and overnight stay in camps.</li></ul>"
    },
    {
      "day": 5,
      "title": "Rajasthan’s Golden City | Delhi Departure",
      "description": "<ul>    <li>Wake up early in the morning and post breakfast check-out from our hotel.</li>    <li>Head out to explore India’s only living fort - Jaisalmer Fort. Take a walk in this magnificent historic fort and learn the legends associated with it.</li>    <li>Visit other major attractions like Gadsisar Lake, Patwon Ki Haveli, etc.</li>    <li>Feel free to explore the local market and taste different cuisines at recommended themed cafes/restaurants.</li>    <li>In the evening, start-off your return journey to Gurgaon.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Delhi to Delhi: comfortable AC Deluxe bus/Force Traveler.",
    "Accommodation on sharing basis: 1 night in hotel (Udaipur), 2 nights in hotel (Jodhpur), 1 night in swiss camps (Jaisalmer).",
    "Meals: Breakfast (4), Dinner (4).",
    "Experienced and cool trip leader.",
    "Activities (camel safari & jeep dune bashing) and Rajasthani folk show (only in Jaisalmer).",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},
  {
  "slug": "rajasthan-backpacking-pushkar-udaipur-bikaner",
  "title": "Rajasthan Backpacking - Pushkar-Udaipur-Bikaner",
  "destination": "Rajasthan",
  "duration": "6 Days 5 Nights",
  "price": "₹22,000",
  "originalPrice": null,
  "discount": null,
  "imageUrl": "/cloned_media/31962220230716154259.png",
  "gallery": [
    "/cloned_media/17264520230716154259.png",
    "/cloned_media/7843020230716154259.png",
    "/cloned_media/6676420230716154259.png",
    "/cloned_media/31664020230716154259.png",
    "/cloned_media/19287520230716154259.png",
    "/cloned_media/40020520230716154259.png",
    "/cloned_media/28934820230716154259.png",
    "/cloned_media/26439520230716154259.png",
    "/cloned_media/38368620230716154259.png",
    "/cloned_media/39140820230716154259.png"
  ],
  "overview": "<h2>About Rajasthan Backpacking - Pushkar Udaipur Bikaner Trip Package</h2>\n<p>Embark on an unforgettable Rajasthan Backpacking - Pushkar Udaipur Bikaner Trip Package  through the heart of Rajasthan, where ancient traditions blend seamlessly with vibrant culture. This backpacking journey shall begin with a visit to the holy town of Pushkar, meriting the visit of the sacred Brahma Temple and accompanied by a serene lake perfect for spiritual reflection. Walking down narrow streets, the aroma of incense and colorful markets selling all kinds of things like embroidered dresses, colorful shiny bangles, jewelry, footwear, leather items, and aromatic spices shall be seen.</p>\n<p>The next would be in the city of romance itself <a href=\"/trips/udaipur\" style=\"color:blue;\">Udaipur</a>, often called the \"Venice of the East.\" Here, majestic palaces reflect in shimmering lakes, and winding alleys lead up to some really interesting items that are waiting to be discovered. Envision sipping chai at a rooftop café when the sun sets over Lake Pichola, painting the sky in hues of orange and pink.</p>\n<p>Your final stop will be at Bikaner, this desert jewel that has time frozen. Arguably, only one of the largest forts of India, Junagarh Fort should make up your list. Other than this, you shall pay a fascinating visit amidst intricate Havelis. And if you dare, take a visit to an eerie Karni Mata Temple dedicated to thousands of revered rats. Join a camel safari into the Thar Desert at night, camp under a blanket of stars sharing stories around a campfire with fellow travelers.</p>\n<p>This Rajasthan backpacking trip isn't any vacation, but a soul-stirring odyssey that is going to rise, awaken your senses, and leave behind memories for a lifetime. So what are you waiting for? Pack your bags and move out, it's time to embrace the unknown.</p><p>Let the magic of Rajasthan Tour Package transform you. Your adventure awaits!</p>\n<h3>Best Places to Visit in Rajasthan</h3>\n<p><b>Brahma Temple:</b> Located in Pushkar, it happens to be one of the few temples dedicated to Lord Brahma in the world. It has a striking red spire and ancient architecture that attracts pilgrims and tourists. This temple stands at the front in the list of places to visit because of its spiritual nature and elaborate carvings.</p>\n<p><b>Ghats of Pushkar Sarovar:</b> These are surrounded by 52 bathing ghats, all of different significance. Pilgrims flock to these stairways leading to holy waters for ritual bathing and offerings. During festivals, the ghats come alive with colorful ceremonies.\n</p><p><b>Ajmer Dargah Sharif:</b> This is a hallowed Sufi shrine of Khwaja Moinuddin Chishti. White marble domes embellished with intricate carvings attract devotees belonging to every faith and belief. Spiritual atmosphere, enchanting Qawwalis and communal harmony all combine to make it a symbol of religious tolerance.</p>\n<p><b>Ana Sagar's Lake:</b> This artificial lake in Ajmer, offers a serene retreat with its glittering waters and the surrounding Daulat Bagh gardens. The Baradari, a white marble pavilion on its banks, provides stunning views. Boating and picnicking are popular activities here.</p>\n<p><b>Akbar Palace and Museum:</b> Originally built as a residence for Emperor Akbar, this palace is now converted into a museum displaying Rajasthani and Mughal artifacts. That fusion of Islamic and Rajput styles in architecture and the weapons and sculptures that are on display at this museum give an inside view of the history of this region.</p>\n<p><b>Prithviraj Smarak:</b> This is a memorial situated in Ajmer, after the legendary Rajput king Prithviraj Chauhan. This statue and the surrounding park give an idea regarding the valor that existed in the land of Rajasthan in the past. It's an interesting spot among locals as well as history buffs.</p>\n<p><b>Lake City's Heritage Wonders:</b> Udaipur, otherwise known as the City of Lakes, holds huge cultural heritage significance. This can be reflected in its heritage destinations, from palaces filled with extravagance to calm and serene lakes, which stupefy the visitors and reflect the past glory of the royal state of Rajasthan. Its romantic ambiance and architectural marvels attract visitors worldwide.</p>\n<p><b>City Palace:</b> The city palace complex in Udaipur is a brilliant mix of Rajasthani and Mughal styles. Offering great views over Lake Pichola, it comprises museums, courtyards, and ornately decorated chambers. Detailed mirror work, murals, and views of the lake are its main attractions.</p>\n<p><b>Pichola Lake:</b> It is the most picturesque lake that forms the centerpiece of Udaipur's beauty. Having hills all around, a palace, and ghats enriches the beauty. More charming is the atmosphere created by the Lake Palace on the island and the boat rides during sunset.</p>\n<p><b>Sajjangarh Fort:</b> The hilltop fort overlooks Udaipur and its lakes and is famous as Monsoon Palace. Although constructed as a monsoon retreat, the location and white marble walls make it an outstanding site to watch sunsets over the city.</p>\n<p><b>Vintage Car Museum:</b> It is one of the unique museums available in Udaipur, which comprises a great collection of classic and rare automobiles. Starting from Rolls-Royces to Mercedes-Benzes, it showcases the vintage cars of the royal family. A well-preserved fleet gives a punctuation for the luxury life the royalties of Rajasthan have lived.</p>\n<p><b>Fateh Sagar Lake:</b> This artificial lake in Udaipur is surrounded by hills and gardens, hence a calm place. Its islands house an observatory for solar observations and a general park. Boating and picnicking are usual past times. The scenic beauty draws large crowds.</p>\n<p><b>Jaisamand Lake:</b> One of the biggest artificial lakes in India, it is perhaps better known as Dhebar Lake. On its one side lies Udaipur, surrounded by marble chhatris, palaces, and wildlife. Inside the lake islands, surrounded by forests, it offers a great haven for nature lovers.</p>\n<p><b>Junagarh Fort:</b> This magnificent fort of the Bikaner region captures an essence of architecture from the house of Rajputs. Ornate palaces, temples, and intricately crafted courtyards add further charm to its beauty. The museum inside displays royal artifacts, weapons, and works of art telling tales about the erstwhile royals of Rajasthan.</p>\n<p><b>Lalgarh Palace and Museum:</b> This red sandstone palace in Bikaner brings together Rajputana, Mughal, and European styles of architecture. It is now partly converted into a luxury hotel and museum, housing the memorabilia of the royal family and having a library. Intricate filigree work and beautiful gardens are especially noteworthy.</p>\n<p><b>Gajner Palace and Lake:</b> This lakeside palace, a former hunting lodge near Bikaner, has red sandstone architecture and is now a heritage hotel. Leveled on a wildlife sanctuary and a lake, it offers a distinct desert oasis experience. Boat rides and nature walks form very prominent activities in demand.</p>\n<p><b>Deshnok Karni Mata Temple:</b> It is called the Rat Temple, and this shrine in Deshnok is dedicated to Karni Mata. This temple is populated by hundreds of rats that wander everywhere freely and are believed to be the divine incarnation of Karni Mata. All marble and silver adornments stand in contrast to the unusual sight of revered rodents.</p>\n<h3>Top Things to do in Rajasthan</h3>\n<p><b>Take part in a traditional puja ceremony:</b> Dive headfirst into Pushkar's spiritual atmosphere, take part in a puja ceremony down at the ghats. Pick up a thing or two about Hindu customs, offer flowers, say some prayers, and get blessed by a local priest. It's definitely a great look into the deep religious traditions of India.</p>\n<p><b>Take a cooking class to learn Rajasthani Cuisine:</b> Experience the real taste of Rajasthan through a self-cooking class where you will learn to cook up local delicacies such as Dal Baati Churma or Gatte Ki Sabzi. Relish the self-made food and take along recipes to relive the memory of your voyage.</p>\n<p><b>Participate in sessions of Yoga or Meditation:</b> Find peace within, swing into the serene Pushkar environment. Take a yoga class beside the lake or attend a guided meditation session. These are activities which provide the chance to put back some rest, reflect, and communicate with one's self amidst traveling.</p>\n<p><b>Shop for handmade souvenirs in the local markets:</b> Wander through some of Pushkar's resplendent bazaars, full of colorful textiles, glittering silver jewelry, and handicrafts. Haggling with shopkeepers, watching the artisans at work, and getting hold of souvenirs which you will cherish and remember from your travels. There, you will not want to miss the famous rose products of Pushkar.</p>\n<p><b>Witness a cultural dance performance:</b> Get up and dance with the traditional troupe at Udaipur, and redefine the cultural experience in Rajasthan. Intricate body gestures clothed in multihued garments bring folk tales alive, which one can hardly miss due to their vivacity.</p>\n<p><b>Try yourself at miniature painting:</b> Participate in a workshop on Rajasthani miniature painting to learn this most delicate of arts. With fine brushes and vibrant colors, under the guidance of skilled artists, students can compose their own miniature masterpiece. This is a hands-on experience and provides insight into the local traditions of art.</p>\n<p><b>Take a bicycle tour of the countryside:</b> Explore the countryside around Udaipur on two wheels. Cycling through rural villages, past lakes and hills, immerse in local life along the way. This eco-friendly adventure allows you to experience the region's natural beauty up close.</p>\n<p><b>Enjoy a rooftop dinner with lake views:</b> Taste Rajasthani cuisine with the cityscape of Udaipur in all its grandeur. Many restaurants offer rooftop seating with views of illuminated palaces reflected in Lake Pichola. The perfect way to end a day of exploration in the City of Lakes.</p>\n<p><b>Go on a desert camping adventure:</b> Be charmed by the Thar Desert, located next to the city of Bikaner. Take a camel safari, spend the night in a desert camp under the star-studded sky, and enjoy Rajasthani folk performances around the bonfire. That's one great way to bond with the local landscapes.</p>\n<p><b>Learn the art of Rajasthani block printing:</b> These workshops are done using the traditional technique of textile decoration. Identify and design your own pattern, then carve a wooden block and print on fabric. Take home what you produce, a unique souvenir, and appreciate the value of local craftsmanship.</p>\n<p><b>Volunteer at a local animal welfare center:</b> Volunteer your time in one of Bikaner's animal welfare organizations. Help take care of the rescue cows, dogs, and camels. It is Godly work, and its satisfaction will also provide a dose of learning about local attitudes toward animals.</p>\n<p><b>Participate in a traditional puppet-making workshop:</b> Join the workshop on Rajasthani puppetry in Bikaner to learn. Learn how to prepare them and manage these gorgeous string puppets; understand their significance in cultural terms. This interactive experience will give you a fun way to engage in local traditions.</p>\n<h3>How to Reach Rajasthan</h3><p><b>By Air:</b> Fly to Jaipur International Airport, the nearest major airport to Pushkar (about 150 km away). From Jaipur, take a taxi or bus to Pushkar. The flight from Delhi to Jaipur takes about 1 hour.</p><p><b>By Train:</b> Take a train to Ajmer Junction, the nearest railway station to Pushkar (11 km away). Several trains run daily from Delhi to Ajmer, with the journey taking 6-8 hours. From Ajmer, take a local bus or taxi to Pushkar.</p><p><b>By Bus:</b> Direct buses operate from Delhi to Pushkar, typically taking 10-12 hours. Both government and private operators offer this service, with options for AC and non-AC buses.</p><p><b>By Car:</b> Drive from Delhi to Pushkar, a journey of about 400 km that takes around 7-8 hours. The route passes through Jaipur, offering a chance to break the journey if desired.</p>\n<h3>Best Time to Visit Rajasthan</h3><p>The best time to visit Pushkar, Udaipur, and Bikaner together would be during the winters, from October to March. During this time, the climatic conditions are desirable at all three destinations, hence making it quite feasible to visit places of interest and carry out outdoor activities without problems.</p><p>The temperatures during this period of the year range from 10°C to 25°C, making it comfortable to walk around and explore. Skies are clear with beautiful views and sunny photo moments.</p>\n<p>Other Related Rajasthan Packages: <a href=\"/trips/udaipur\" style=\"color:blue;\">Udaipur Tour Packages</a>, <a href=\"/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer\" style=\"color:blue;\">Udaipur Jodhpur Jaisalmer Backpacking</a>, <a href=\"/trips/ny-rajasthan-backpacking\" style=\"color:blue;\">New Year Rajasthan Backpacking</a>, <a href=\"/trips/jaisalmer-and-longewala\" style=\"color:blue;\">Jaisalmer and Longewala Tour</a>, <a href=\"/trips/rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer\" style=\"color:blue;\">Udaipur Jodhpur Jaisalmer from Delhi</a></p>",
  "itinerary": [
    {
      "day": 0,
      "title": "Delhi to Pushkar | Overnight Journey",
      "description": "<ul><li>Assemble at the boarding point in Delhi (as informed).</li><li>Start an overnight journey to Pushkar and socialize with your co-travellers.</li></ul>"
    },
    {
      "day": 1,
      "title": "Pushkar Arrival | Local Exploration",
      "description": "<ul>    <li>After arriving in Pushkar, check-in to our comfy hotel decorated with gorgeous Aravallis in the backdrop, freshen-up, regroup for a much-needed breakfast and have some leisure.</li>    <li>Post refreshment, we will head out to pay homage at the only Brahma Temple in the World, explore the sacred ghats of Pushkar Sarovar and treat your stomach with mouth-watering street food like <i>malpuas, falafel rolls</i> and <i>pakoras</i>.</li>    <li>In the evening, feel free to visit the Pushkar ghat for aarti or just chill at nearby lake view cafes with good food and good mood.</li>    <li>Dinner and overnight stay in the hotel in Pushkar.</li></ul>"
    },
    {
      "day": 2,
      "title": "Pushkar to Udaipur | Ajmer Dargah | Udaipur Arrival",
      "description": "<ul>    <li>Wake up early and post breakfast, check-out from our hotel in Pushkar and drive towards Udaipur via Ajmer.</li>    <li>In Ajmer, we will pay homage at Dargah Sharif - a sacred sufi shrine and eat at local food spots near Ajmer Dargah. Before starting-off our journey towards Udaipur, we will also visit Ana Sagar Lake, Akbar’s Palace and Museum and Prithviraj Smarak.</li>    <li>After arriving in Udaipur, check-in to our relaxing hotel and have some leisure.</li>    <li>Dinner and overnight stay in the hotel in Udaipur.</li></ul>"
    },
    {
      "day": 3,
      "title": "Udaipur Local Exploration",
      "description": "<ul>    <li>Wake up early and post breakfast, head out to explore Rajasthan’s lake city and various heritage wonders.</li>    <li>Visit Udaipur’s City Palace and experience the grandeur and rich history of Mewar region. The City Palace offers panoramic views of Pichola lake and the entire white city. Move towards Sajjangarh Fort also known as Monsoon Palace situated on a hilltop. We will also visit the Vintage Car Museum and other major attractions.</li>    <li>A trip to Udaipur will remain incomplete without soaking in the serenity of its freshwater lakes. We will visit the most prominent ones in our sightseeing tour such as Lake Pichola, Fatehsagar Lake and Jaisamand Lake.</li>    <li>Dinner and overnight stay in a hotel in Udaipur.</li></ul>"
    },
    {
      "day": 4,
      "title": "Udaipur to Bikaner | Bikaner Arrival",
      "description": "<ul>    <li>Wake up early and post breakfast, check-out from our hotel in Udaipur and drive towards Bikaner.</li>    <li>Before saying goodbye to Rajasthan’s lake city, we will go out to explore streets of Udaipur decorated with various local handicrafts, colorful fabrics, souvenirs, temples and tasty street food.</li>    <li>After arriving in Bikaner, check-in to our relaxing hotel and have some leisure.</li>    <li>Dinner and overnight stay in the hotel in Bikaner.</li></ul>"
    },
    {
      "day": 5,
      "title": "Bikaner Local Exploration",
      "description": "<ul>    <li>Wake up early and post breakfast, head out to explore the heritage city of Bikaner.</li>    <li>We will explore the magnificent Junagarh Fort built using red sandstone by Raja Jai Singh. The exploration will be followed by Lalgarh Palace &amp; Museum, Gajner Palace &amp; Lake and Devi Kund</li>    <li>Witness a sight so different at Deshnok Karni Mata Temple famous for the rats that roam in the temple premises freely.</li>    <li>Dinner and overnight stay in the hotel in Bikaner.</li></ul>"
    },
    {
      "day": 6,
      "title": "Delhi Departure | Trip Ends",
      "description": "<ul>    <li>Wake up early and post breakfast, check-out from our hotel in Bikaner and drive towards Delhi.</li>    <li>Reach Delhi by day end with lots of amazing memories and unforgettable experiences.</li></ul>"
    }
  ],
  "inclusions": [
    "Transportation from Delhi to Delhi: comfortable AC Deluxe bus/Force Traveler.",
    "Accommodation on sharing basis: 1 night in hotel (Pushkar), 2 nights in hotel (Udaipur), 2 nights in hotel (Bikaner).",
    "Meals: Breakfast (6), Dinner (5).",
    "Experienced and cool trip leader.",
    "Driver allowances, toll taxes, parking, state taxes."
  ],
  "exclusions": [
    "Any extra meals apart from the ones mentioned under inclusions.",
    "Travel Insurance, items of personal nature like porterage, tips, laundry etc.",
    "Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.",
    "Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.",
    "GST (5%) is applicable extra.",
    "Anything which is not mentioned in the above inclusions."
  ]
},

  //==========================================================================
  // DESTINATION: Kerala (from Kerala.tsx)
  //==========================================================================
  {
    slug: 'kerala-backpacking-4n5d',
    title: 'Kerala Backpacking 4N5D', // From HTML
    destination: 'Kerala',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹15000', // From HTML (discounted_triple_price)
    originalPrice: '₹16500', // From HTML (triple_price)
    discount: '₹1,500', // Calculated from HTML
    imageUrl: '/cloned_media/16514620250619134346.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/12318420250619135458.png',
      '/cloned_media/10638520250619135458.png',
      '/cloned_media/14238920250619135458.png',
      '/cloned_media/21517020250619135458.png',
      '/cloned_media/7976220250619135841.png',
      '/cloned_media/3434920250619135841.png'
    ],
    overview: '<p>Discover the lush beauty of God’s Own Country with our Kerala Backpacking Tour Packages by Go4Explore. From misty hill stations and serene backwaters to golden beaches and rich culture, Kerala is the perfect destination for all kinds of travelers. Our most popular Kerala Group Trip Packages from Kochi to Kochi are specially designed for backpackers and adventure lovers who wish to explore the state hassle-free. With carefully planned itineraries covering Munnar, Alleppey, Thekkady, and Kochi, you can enjoy nature, adventure, and authentic local experiences without worrying about travel arrangements.</p><p>Whether you’re planning a family vacation, a romantic getaway, or a fun holiday with friends, Go4Explore offers customized Kerala Tour Packages to suit every need. Couples can opt for cozy stays in houseboats and hill-view cottages with our Kerala Couple Packages, while families can enjoy comfortable and safe travel with guided sightseeing at Kerala’s top attractions. For groups of friends, our Kerala Backpacking Group Trips include thrilling activities like trekking, beach camping, spice plantation visits, and exploring hidden waterfalls, ensuring a perfect mix of adventure and relaxation.</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Railway Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Visit the scenic Athirapalli Waterfall (Bahubali movie shooting location).</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around. </li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - sprawling tea plantations, picture-book towns, winding lanes and holiday facility makes this a popular town. </li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation & have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Munnar to Thekkady',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Thekkady.</li><li>On arrival in Thekkady, check-in to our hotel and have some leisure.</li><li>In afternoon, proceed for local sightseeing in and around Thekkady.</li><li>Thekkady is one of the world\'s most fascinating wildlife reserves, the Periyar Wildlife Sanctuary spread across 777 sq. km. of which 360 sq. km. is a thick evergreen forest. </li><li>In the evening, feel free to go to the market for shopping for spices.</li><li>Overnight stay in a hotel in Thekkady.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Thekkady to Alleppey',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Alleppey.</li><li>Upon arrival in Alleppey, check-in to our houseboat/hotel. Explore the beauty of Kerala’s backwaters, sit back and relax while the houseboat/cruise travels through the serene backwaters, witness amazing views of coconut trees, and more along. </li><li>Enjoy a hearty lunch on backwaters (only if staying in houseboat).</li><li>Dinner (only if staying in houseboat) and overnight stay in a houseboat/hotel in Alleppey.</li></ul>'
      },
      {
        day: 5,
        title: 'Drive from Alleppey to Kochi | Trip Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your houseboat/hotel in Alleppey and begin your drive to Kochi.</li><li>You’ll be dropped off at the Kochi Airport/Railway Station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar, 1 night in Thekkady, 1 night in Alleppey (Houseboat with AC timings 9 pm - 6 am).',
      '6 Meals: Daily Breakfast only, starting from Day 2 to Day 5 & 1 Lunch + 1 Dinner additional in Alleppey Houseboat.',
      'All transfers and local sightseeing (as per the itinerary from 8 am - 6 pm) by an AC Vehicle (AC will be switched off on hills).',
      'Airport pick-up & drop (transfers at fixed time only).',
      'All trip assistance and experienced drivers.',
      'Driver allowances, toll taxes, parking & state road taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Items of a personal nature like room heater, room/hotel upgrade, early/late check-in/checkout, porterage, tips, laundry etc.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'weekend-escape-to-kerala-3d2n',
    title: 'Weekend Escape to Kerala 3D2N', // From HTML
    destination: 'Kerala',
    duration: '3 Days 2 Nights', // From HTML
    price: '₹8750', // From HTML (Double Occupancy price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/40386720240717080101.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/40202120240717080101.png',
      '/cloned_media/3900920240717080101.png',
      '/cloned_media/2563920240717080101.png'
    ],
    overview: '<h2>Munnar Tour Package 3 Days 2 Nights</h2><p>Located in the Western Ghats of Kerala, Munnar is a paradise for nature-loving and adventure enthusiasts simply because it presents the most beautiful gift of paradise. Imagine getting up one fine morning with misty scenes all around you, with the rolling hills carpeted in infinite stretches of lush green. ...This Munnar tour package is all about exploring the breathtaking beauty of the hill station.</p><p>...Our experienced local guides will share fascinating stories and insider tips, ensuring you experience the heart and soul of Munnar. Whether you\'re a honeymooning couple, a family seeking quality time, or a solo traveler in search of serenity, our Munnar package promises an unforgettable journey. Don\'t just dream about it, <a href="https://go4explore.com/trip/kerala" style="color:blue;">book Kerala Tour Package</a> with Go4Explore now and let the magic of Munnar captivate you!</p><h3>Best Places to Visit in Munnar</h3><p><b>Valara Waterfalls-</b> ...nestled in the midst of the green landscape of Munnar.</p><p><b>Cheeyappara Waterfalls-</b> ...a seven-step cascade that falls in the midst of thick tropical forests.</p><p><b>Eravikulam National Park-</b> Home to the endangered Nilgiri Tahr...</p><p><b>Tea Gardens-</b> Munnar\'s vast tea plantations are its iconic attraction.</p><p><b>Top Station-</b> ...offering some spectacular views in Munnar.</p><p><b>Mattupetty Dam-</b> This scenic dam has boating facilities...</p><p><b>Kundala Lake-</b> This artificial lake... is perfect for boating and picnics.</p><p><b>Echo Point-</b> Named for its natural echo phenomenon...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around.</li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - Sprawling Tea Plantations, picture-book towns, winding lanes and holiday facility makes this a popular town.</li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation &amp; have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Munnar to Kochi | Tour Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your hotel in Munnar and begin your drive to Kochi.</li><li>You’ll be dropped off at the Kochi airport/railway station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar.',
      'Meals: 2 Breakfasts only, starting from Day 2 to Day 3.',
      'All transfers and local sightseeing (as per the itinerary from 8am-6pm) by an AC Vehicle. (AC will be switched off on hills)',
      'Airport transfers.',
      'All trip assistance.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any other activities you do there.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'vibrant-kerala-retreat-4d3n',
    title: 'Vibrant Kerala Retreat 4D3N', // From HTML
    destination: 'Kerala',
    duration: '4 Days 3 Nights', // From HTML
    price: '₹14700', // From HTML (Starting price, Double Occupancy)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/26901420240717095829.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/42246920240717095828.png',
      '/cloned_media/26281620240717095829.png',
      '/cloned_media/22243720240717095829.png',
      '/cloned_media/1001320240717095829.png'
    ],
    overview: '<h2>4 Days 3 Nights Munnar Alleppey Tour Package</h2><p>Discover the magic of Kerala with our Munnar-Alleppey tour package! This perfect blend of misty mountains and serene backwaters offers an unforgettable journey through God\'s Own Country.</p><p>Start in Munnar where emerald tea plantations carpet rolling hills Explore winding trails and Spot exotic wildlife. Learn the art of tea-making. Our package includes guided tours to hidden waterfalls, spice gardens and breathtaking viewpoints.</p><p>Next we\'ll transport you to Alleppey, the Venice of the East. Board a traditional houseboat for cruise through Kerala\'s famous backwaters. Glide past lush paddy fields and quaint villages.</p><p>This package is perfect for honeymooners, families or solo travelers seeking to connect with nature and culture. Experience the cool mountain air of Munnar. Enjoy the gentle lapping of Alleppey\'s waters. Immerse yourself in Kerala\'s rich traditions, savor its flavors and create memories to last a lifetime.</p><p>Don\'t just visit Kerala , live it. Book <a href="https://go4explore.com/trip/kerala" style="color:blue;">Kerala Tour Package</a> with Go4Explore and Let us guide you through an enchanting journey!</p><h3>Best Places to Visit in 4 Days Munnar Alleppey Tour</h3><p><b>Eravikulam National Park:</b> Home to endangered Nilgiri Tahr...</p><p><b>Tea Gardens:</b> Munnar\'s vast tea plantations are its iconic attraction...</p><p><b>Mattupetty Dam:</b> This picturesque dam offers boating facilities...</p><p><b>Top Station:</b> ...offers the most spectacular views Munnar...</p><p><b>Alleppey Backwaters:</b> The crown jewel of Kerala...</p><h3>Top Things to do in 4 Days Munnar Alleppey Trip</h3><p><b>Tea Tasting:</b> ...sample various locally produced teas.</p><p><b>Trekking and Nature Walks:</b> Embark on guided treks...</p><p><b>Spice Garden Tours:</b> Join guided tours of spice plantations...</p><p><b>Houseboat Cruise:</b> Experience a traditional Kerala houseboat cruise...</p><p><b>Ayurvedic Treatments:</b> Indulge in authentic Ayurvedic massages...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around.</li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - Sprawling Tea Plantations, picture-book towns, winding lanes and holiday facility makes this a popular town.</li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation &amp; have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Munnar to Alleppey',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Alleppey.</li><li>Upon arrival in Alleppey, check-in to our houseboat/hotel. Explore the beauty of Kerala’s backwaters, sit back and relax while the houseboat/cruise travels through the serene backwaters, witness amazing views of coconut trees, and more along.</li><li>Enjoy a hearty lunch (only if you’re staying in houseboat).</li><li>Dinner (only in houseboat) and overnight stay in a houseboat/hotel in Alleppey.</li></ul>'
      },
      {
        day: 4,
        title: 'Alleppey to Kochi | Tour Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your houseboat/hotel in Alleppey and begin your drive to Kochi.</li><li>You’ll be dropped off at the Kochi airport/railway station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar, 1 night in Alleppey.',
      'Meals: Daily Breakfast only, starting from Day 2 to Day 4. There will be 1 Dinner+1 Lunch (only in Alleppey Houseboat).',
      'All transfers and local sightseeing (as per the itinerary from 8am-6pm) by an AC Vehicle. (AC will be switched off on hills)',
      'Airport transfers.',
      'All trip assistance.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any other activities you do there.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'mesmerizing-kerala-getaway-4n5d',
    title: 'Mesmerizing Kerala Getaway 4N5D', // From HTML
    destination: 'Kerala',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹17200', // From HTML (double_price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/15154220240717101812.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/32337420240717101812.png',
      '/cloned_media/17916320240717101812.png',
      '/cloned_media/18680420240717101812.png',
      '/cloned_media/25497320240717101812.png',
      '/cloned_media/1876720240717101812.png'
    ],
    overview: '<h2>About Munnar Thekkady Alleppey Tour Package</h2><p>Embark on unforgettable journeys through Kerala\'s most captivating destinations with our Munnar-Thekkady-Alleppey tour package! This expertly crafted itinerary offers the perfect blend of misty mountains, wild forests and serene backwaters. It promises an experience that will enchant your senses and rejuvenate your soul.</p><p>Begin your adventure in Munnar. Rolling hills are carpeted with emerald tea plantations. Breathe in the crisp mountain air as you explore winding trails. Discover hidden waterfalls. Enjoy picturesque viewpoints. Next, venture into the wilds of Thekkady. It is home to the renowned Periyar Tiger Reserve. Immerse yourself in nature with guided jungle treks. Enjoy bamboo rafting and the thrill of spotting exotic wildlife in their natural habitat.</p><p>Cap off your journey in Alleppey. It is known as the Venice of the East. Drift along tranquil backwaters on a traditional houseboat. Watch the world go by as you glide past lush paddy fields and quaint villages. Savor freshly prepared Kerala cuisine. Fall asleep to the gentle lapping of water against your boat.</p><h3>Best Places to Visit in Munnar Thekkady Alleppey</h3><p><b>Tea Gardens:</b> Explore vast expanses of lush green tea plantations...</p><p><b>Eravikulam National Park:</b> Home to the endangered Nilgiri Tahr...</p><p><b>Mattupetty Dam:</b> This picturesque spot offers boating experiences...</p><p><b>Top Station:</b> The highest point in Munnar, offering breathtaking views...</p><p><b>Periyar National Park:</b> Take a boat safari on Periyar Lake to spot wildlife...</p><p><b>Spice Plantations:</b> Visit aromatic spice gardens...</p><p><b>Backwater Cruise:</b> Glide through serene backwaters on traditional houseboats...</p><p><b>Alappuzha Beach:</b> Relax on this pristine beach...</p><h3>Things to do in Munnar Thekkady and Alleppey</h3><p>Take a tea plantation tour and learn about tea production...</p><p>Enjoy a scenic trek through Munnar\'s lush landscapes...</p><p>Embark on a wildlife safari in Periyar National Park...</p><p>Participate in a spice plantation tour...</p><p>Cruise the backwaters on a traditional houseboat...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around.</li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - Sprawling Tea Plantations, picture-book towns, winding lanes and holiday facility makes this a popular town.</li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation &amp; have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Munnar to Thekkady',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Thekkady.</li><li>On arrival in Thekkady, check-in to our hotel and have some leisure.</li><li>In afternoon, proceed for local sightseeing in and around Thekkady.</li><li>Thekkady is one of the world\'s most fascinating wildlife reserves, the Periyar Wildlife Sanctuary spread across 777 Sq. KM. of which 360 Sq. KM is a thick evergreen forest.</li><li>In the evening, feel free to go to the market for shopping for spices.</li><li>Overnight stay in a hotel in Thekkady.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Thekkady to Alleppey',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Alleppey.</li><li>Upon arrival in Alleppey, check-in to our houseboat/hotel. Explore the beauty of Kerala’s backwaters, sit back and relax while the houseboat/cruise travels through the serene backwaters, witness amazing views of coconut trees, and more along.</li><li>Enjoy a hearty lunch (only if you’re staying in houseboat).</li><li>Dinner (only in houseboat) and overnight stay in a houseboat/hotel in Alleppey.</li></ul>'
      },
      {
        day: 5,
        title: 'Alleppey to Kochi | Tour Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your houseboat/hotel in Alleppey and begin your drive to Kochi.</li><li>You’ll be dropped off at the Kochi airport/railway station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar, 1 night in Thekkady, 1 night in Alleppey.',
      'Meals: Daily Breakfast only, starting from Day 2 to Day 5. There will be 1 Dinner+1 Lunch (only in Alleppey Houseboat).',
      'All transfers and local sightseeing (as per the itinerary from 8am-6pm) by an AC Vehicle. (AC will be switched off on hills)',
      'Airport transfers.',
      'All trip assistance.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any other activities you do there.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'kerala-backpacking',
    title: 'Kerala Backpacking', // From HTML
    destination: 'Kerala',
    duration: '7 Days 6 Nights', // From HTML
    price: '₹27500', // From HTML (Triple sharing price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/2193820220831123359.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/12183020230720180607.png',
      '/cloned_media/22961220230720180607.png',
      '/cloned_media/27291820230720180607.png',
      '/cloned_media/20218320230720180607.png',
      '/cloned_media/30664920230720180607.png',
      '/cloned_media/30808520230720180607.png',
      '/cloned_media/2592220230720180607.png',
      '/cloned_media/34656620230720180607.png',
      '/cloned_media/28869020230720180607.png',
      '/cloned_media/3579220230720180607.png'
    ],
    overview: '<h2>About Kerala Backpacking Trip</h2><p>Kerala, also known as the Jewel of India and God’s Own Country is one of the most remarkable states in India. Bestowed with rich and diverse culture. Kerala is a destination so alluring and magical, which every traveler would want to explore without any second thoughts. This haven is situated in the southern corner of India bordered by Karnataka, Tamil Nadu and the Arabian Sea along with numerous breathtaking attractions.</p><p>Known for its lush landscapes Kerala attributes the Western Ghats, tropical forests, backwaters and beaches. ...Kerala is not only rich in wildlife but also has diversity in culture and festivals like Onam and Vishu, are the most celebrated. From traditional arts such as Kathakali and Theyyam to predominately found coconut and spices, Kerala is acknowledged for all.</p><h3>Best Places to Visit in Kerala Backpacking</h3><ul><li><strong>Kochi (Cochin)-</strong> Kochi is a vibrant port city...</li><li><strong>Munnar-</strong> ...a hill station known for its rolling Tea Gardens...</li><li><strong>Thekkady-</strong> Thekkady is a home to the Periyar National Park...</li><li><strong>Alleppey-</strong> Often called the ‘Venice of the East’...</li><li><strong>Varkala-</strong> A coastal paradise in Kerala, Varkala\'s towering red laterite cliffs...</li><li><strong>Munroe Island-</strong> ...a secret paradise of swaying palms...</li><li><strong>Trivandrum-</strong> India\'s southernmost city...</li></ul><h3>Things to do in Kerala Backpacking Trip</h3><ul><li><strong>Cruise the serene Backwaters on a Kettuvallam Houseboat-</strong> Drift along palm-fringed lakes and canals...</li><li><strong>Go Jeep Safari &amp; Trekking in Periyar Wildlife Sanctuary...</strong></li><li><strong>Hike through the lush Tea Plantations of Munnar-</strong> ...</li><li><strong>Relax on Alleppey\'s beautiful Beaches-</strong> ...</li><li><strong>Indulge in an Ayurvedic Massage and Yoga Retreat-</strong> ...</li><li><strong>Spice Tours in Thekkady-</strong> Embark on a fascinating journey through the fragrant spice plantations...</li></ul>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Kochi Arrival | Drive to Munnar',
        description: '<ul><li>Reach Kochi around 9:30 Am in the morning and begin your drive towards Munnar.</li><li>Visit the famous Cheeyappara & Vallarta Waterfalls on the way to Munnar.</li><li>After reaching Munnar, check in to our hotel and have some leisure.</li><li>Feel free to take a stroll around the place and take the Kerala vibes.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Exploration',
        description: '<ul><li>Wake up to the peaceful morning and post breakfast, head out to explore the Teastates.</li><li>Visit the Rose garden, Photo point, Eco point, Mattupetty dam and Chennai shooting point.</li><li>After that, we will visit KDHP Tea Tasting, Team Museum & Eravikulam National park (This will be open in April).</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Munnar to Thekkady | Exploration',
        description: '<ul><li>Wake up to the peaceful morning and post breakfast, drive toward Thekkady from Munnar.</li><li>After reaching Munnar, check in to our hotel and have some leisure.</li><li>Head out to explore spice plantations with a guide.</li><li>After that we will go to Periyar national park (you can do a safari ride on your own).</li><li>If time allows, You can also see a Kathakali-Kalari show at Kadathanadan Kalari center.</li><li>Overnight stay in a hotel in Thekkady.</li></ul>'
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey | Exploration',
        description: '<ul><li>Wake up to the relaxed morning and post breakfast, begin your drive from Thekkady to Alleppey “The Backwater Capital of Kerala”.</li><li>After arriving at Alleppey, check into the houseboat and have some leisure.</li><li>After that, cruise through the backwater, discover the swaying beauty of the narrow canals, verdant paddy fields, coconut lagoons and coir villages.</li><li>Overnight stay in a houseboat in Alleppey.</li></ul>'
      },
      {
        day: 5,
        title: 'Alleppey to Varkala | Exploration',
        description: '<ul><li>Wake up early and have breakfast, begin your drive towards Varkala.</li><li>After arriving at the city with the most gorgeous beaches - Varkala, check in to our hotel and have some leisure.</li><li>Spend some time at Virgin beach Papanasam and thereafter visit the Sivagiri Memorial of Late. Sri Narayana Guru and Janardhana Swami Temple.</li><li>Overnight stay in a hotel in Varkala.</li></ul>'
      },
      {
        day: 6,
        title: 'Varkala to Munroe Island',
        description: '<ul><li>Post breakfast, head out to explore Munroe Island via boat.</li><li>After that, visit the Jatayu Earth Center at Chadayamangalam.</li><li>Drive back to Varkala.</li><li>Overnight stay in a hotel in Varkala.</li></ul>'
      },
      {
        day: 7,
        title: 'Varkala to Trivandrum',
        description: '<ul><li>Post breakfast, check-out from the hotel and proceed to Trivandrum Airport</li><li>Reach home with lots of unforgettable memories.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Kochi to Trivandrum: Tempo Traveler/Cab',
      '6 nights accommodation on a sharing basis',
      'All local assistance.',
      '11 Meals: Breakfast (6), Dinner (4), Lunch (1).',
      'KDHP Tea Museum + Tea Tasting',
      'Spice Plantation Tour, KTDC Boating, Bus Ticket, and Forest Entrance',
      'Houseboat Ride with Kerala Lunch (Banana Leaves)',
      'Munroe Boating -2 Hours',
      'Jatayu Cable car ride + Jatayu Sculpture visit',
      'Guided trek to various point',
      'Driver allowances, toll taxes, parking and state taxes'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'mesmerizing-kerala-getaway-4n5d',
    title: 'Mesmerizing Kerala Getaway 4N5D', // From HTML
    destination: 'Kerala',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹17200', // From HTML (double_price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/15154220240717101812.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/32337420240717101812.png',
      '/cloned_media/17916320240717101812.png',
      '/cloned_media/18680420240717101812.png',
      '/cloned_media/25497320240717101812.png',
      '/cloned_media/1876720240717101812.png'
    ],
    overview: '<h2>About Munnar Thekkady Alleppey Tour Package</h2><p>Embark on unforgettable journeys through Kerala\'s most captivating destinations with our Munnar-Thekkady-Alleppey tour package! This expertly crafted itinerary offers the perfect blend of misty mountains, wild forests and serene backwaters. It promises an experience that will enchant your senses and rejuvenate your soul.</p><p>Begin your adventure in Munnar. Rolling hills are carpeted with emerald tea plantations. ...Next, venture into the wilds of Thekkady. It is home to the renowned Periyar Tiger Reserve. ...Cap off your journey in Alleppey. It is known as the Venice of the East. Drift along tranquil backwaters on a traditional houseboat.</p><h3>Best Places to Visit in Munnar Thekkady Alleppey</h3><p><b>Tea Gardens:</b> Explore vast expanses of lush green tea plantations...</p><p><b>Eravikulam National Park:</b> Home to the endangered Nilgiri Tahr...</p><p><b>Mattupetty Dam:</b> This picturesque spot offers boating experiences...</p><p><b>Top Station:</b> The highest point in Munnar, offering breathtaking views...</p><p><b>Periyar National Park:</b> Take a boat safari on Periyar Lake to spot wildlife...</p><p><b>Spice Plantations:</b> Visit aromatic spice gardens...</p><p><b>Backwater Cruise:</b> Glide through serene backwaters on traditional houseboats...</p><p><b>Alappuzha Beach:</b> Relax on this pristine beach...</p><h3>Things to do in Munnar Thekkady and Alleppey</h3><p>Take a tea plantation tour and learn about tea production...</p><p>Enjoy a scenic trek through Munnar\'s lush landscapes...</p><p>Embark on a wildlife safari in Periyar National Park...</p><p>Cruise the backwaters on a traditional houseboat...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around.</li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - Sprawling Tea Plantations, picture-book towns, winding lanes and holiday facility makes this a popular town.</li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation &amp; have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Munnar to Thekkady',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Thekkady.</li><li>On arrival in Thekkady, check-in to our hotel and have some leisure.</li><li>In afternoon, proceed for local sightseeing in and around Thekkady.</li><li>Thekkady is one of the world\'s most fascinating wildlife reserves, the Periyar Wildlife Sanctuary spread across 777 Sq. KM. of which 360 Sq. KM is a thick evergreen forest.</li><li>In the evening, feel free to go to the market for shopping for spices.</li><li>Overnight stay in a hotel in Thekkady.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Thekkady to Alleppey',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Alleppey.</li><li>Upon arrival in Alleppey, check-in to our houseboat/hotel. Explore the beauty of Kerala’s backwaters, sit back and relax while the houseboat/cruise travels through the serene backwaters, witness amazing views of coconut trees, and more along.</li><li>Enjoy a hearty lunch (only if you’re staying in houseboat).</li><li>Dinner (only in houseboat) and overnight stay in a houseboat/hotel in Alleppey.</li></ul>'
      },
      {
        day: 5,
        title: 'Alleppey to Kochi | Tour Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your houseboat/hotel in Alleppey and begin your drive to Kochi.</li><li>You’ll be dropped off at the Kochi airport/railway station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar, 1 night in Thekkady, 1 night in Alleppey.',
      'Meals: Daily Breakfast only, starting from Day 2 to Day 5. There will be 1 Dinner+1 Lunch (only in Alleppey Houseboat).',
      'All transfers and local sightseeing (as per the itinerary from 8am-6pm) by an AC Vehicle. (AC will be switched off on hills)',
      'Airport transfers.',
      'All trip assistance.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any other activities you do there.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'blissful-kerala-tour-5n6d',
    title: 'Blissful Kerala Tour 5N6D', // From HTML
    destination: 'Kerala',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹25400', // From HTML (double_price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/31979820240717110038.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/19397620240717110037.png',
      '/cloned_media/19902320240717110037.png',
      '/cloned_media/10360220240717110038.png',
      '/cloned_media/8300320240717110038.png',
      '/cloned_media/32150320240717110038.png',
      '/cloned_media/41850020240717110038.png'
    ],
    overview: '<h2>About Blissful Kerala 6 Days 5 Nights Tour Package</h2><p>Witness the ravishing beauty of Kerala, India\'s tropical paradise, with our specially designed 6-day, 5-night tour package. From the moment you arrive, you will be swept away by the lush landscapes, serene backwaters, and rich culture that make Kerala truly God\'s Own Country.</p><p>Imagine yourself gliding along palm-fringed canals of backwaters in a traditional houseboat... Picture vibrant spice plantations... Envision rejuvenation with an authentic Ayurvedic massage...</p><p>Our package includes some of the pristine beaches, sanctuaries filled with exotic wildlife, and hill stations that are a cool relief from heat. You will enjoy delicious Kerala food, scintillating Kathakali performances, and warm hospitality by the locals.</p><p>Don\'t just dream about paradise, experience it firsthand. This tour offers the perfect blend of adventure, culture, and relaxation. Book <a href="https://go4explore.com/trip/kerala" style="color:blue;">Kerala Tour Package</a> now and craft memories for a lifetime in this beautiful “God’s Own Country” Kerala.</p><h3>Best Places to Visit in 6 Days Kerala Package</h3><p><b>Munnar -</b> ...famous for its vast tea plantations and misty mountains. Explore Eravikulam National Park...</p><p><b>Thekady -</b> ...captivating with its lush forests and diverse wildlife. Take a boat safari in Periyar Wildlife Sanctuary...</p><p><b>Alleppey -</b> ...offers tranquil backwater cruises on traditional houseboats.</p><p><b>Kovalam -</b> ...boasts beautiful crescent-shaped beaches...</p><p><b>Trivandrum -</b> Thiruvananthapuram, Kerala\'s capital, blends tradition with modernity. Visit the opulent Padmanabhaswamy Temple...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrival at Kochi | Drive to Munnar',
        description: '<ul><li>On arrival at Kochi Airport/Station, you’ll be picked-up in our vehicle and transfer to Munnar.</li><li>Enroute Munnar, take a halt to appreciate the scenic Valara Waterfall, Cheeyappara Waterfalls and others.</li><li>Munnar is a magnificent hill station in the Western Ghats of Kerala. Anamudi, the highest peak in South India (8883 ft.) is nearby Munnar.</li><li>By noon we’ll reach Munnar, check-in to our hotel and have some leisure. In the evening, feel free to stroll around.</li><li>Overnight stay in a hotel in a Munnar.</li></ul>'
      },
      {
        day: 2,
        title: 'Munnar Local Sightseeing',
        description: '<ul><li>Wake up to a beautiful morning and post breakfast, proceed for local sightseeing in and around Munnar - Sprawling Tea Plantations, picture-book towns, winding lanes and holiday facility makes this a popular town.</li><li>Visit the beautiful Blossom Park, take a leisure walk around Mattupetty Lake and Dam. Also, explore Echo Point and capture the breathtaking views as seen from here. Also, visit Kundala Lake, Eravikulam National Park, and Sevenmallay Tea Estate.</li><li>Post explorations, drive back to your accommodation &amp; have leisure.</li><li>Overnight stay in a hotel in Munnar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Munnar to Thekkady',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Thekkady.</li><li>On arrival in Thekkady, check-in to our hotel and have some leisure.</li><li>In afternoon, proceed for local sightseeing in and around Thekkady.</li><li>Thekkady is one of the world\'s most fascinating wildlife reserves, the Periyar Wildlife Sanctuary spread across 777 Sq. KM. of which 360 Sq. KM is a thick evergreen forest.</li><li>In the evening, feel free to go to the market for shopping for spices.</li><li>Overnight stay in a hotel in Thekkady.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Thekkady to Alleppey',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Alleppey.</li><li>Upon arrival in Alleppey, check-in to our houseboat/hotel. Explore the beauty of Kerala’s backwaters, sit back and relax while the houseboat/cruise travels through the serene backwaters, witness amazing views of coconut trees, and more along.</li><li>Enjoy a hearty lunch (only if you’re staying in houseboat).</li><li>Dinner (only in houseboat) and overnight stay in a houseboat/hotel in Alleppey.</li></ul>'
      },
      {
        day: 5,
        title: 'Drive from Alleppey to Kovalam',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your drive to Kovalam.</li><li>Upon arrival in Kovalam, check-in to our hotel and have some leisure. Board your transfer to visit to the iconic Lighthouse Beach in Kovalam and explore the picturesque Hawa Beach. After enjoying the scenic beaches, return to your comfy hotel.</li><li>Overnight stay in a hotel in Kovalam.</li></ul>'
      },
      {
        day: 6,
        title: 'Kovalam to Trivandrum | Tour Ends',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from your hotel in Kovalam and begin your drive to Trivandrum.</li><li>Vist Sree Padmanabhaswamy Temple in Thiruvananthapuram or Trivandrum, known as the world\'s richest temple.</li><li>You’ll be dropped off at the Trivandrum airport/railway station and the trip ends with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: All local sightseeing by Tempo Traveller/Cab (depending upon total travellers).',
      'Accommodation on Sharing Basis: 2 nights in Munnar, 1 night in Thekkady, 1 night in Alleppey, 1 night in Kovalam.', // Total 5 nights
      'Meals: Daily Breakfast only, starting from Day 2 to Day 6. There will be 1 Dinner+1 Lunch (only in Alleppey Houseboat).',
      'All transfers and local sightseeing (as per the itinerary from 8am-6pm) by an AC Vehicle. (AC will be switched off on hills)',
      'Airport transfers.',
      'All trip assistance.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any other activities you do there.',
      'Any entry fees, extra expenses for optional activities, room heaters or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
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
    title: 'Himachal Backpacking - Manali Kasol Jibhi', // From HTML
    destination: 'Himachal',
    duration: '6 Days 5 Nights', // Corrected duration based on itinerary
    price: '₹12500', // From HTML (discounted quad price)
    originalPrice: '₹14000', // From HTML (quad price)
    discount: '₹1,500', // From HTML (14000 - 12500)
    imageUrl: '/cloned_media/13464920240827063621.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/20559820230315061806.png',
      '/cloned_media/42136120230315061806.png',
      '/cloned_media/20903920230315061806.png',
      '/cloned_media/38986820230315061806.png',
      '/cloned_media/9820920230315061806.png',
      '/cloned_media/2153920230705060501.png',
      '/cloned_media/37298820230705060501.png',
      '/cloned_media/32916220230705060501.png',
      '/cloned_media/23833420230705060501.png',
      '/cloned_media/41456920230705060501.png',
      '/cloned_media/36060020230705060501.png',
      '/cloned_media/12778620230705060501.png',
      '/cloned_media/6788220230705060501.png',
      '/cloned_media/21100120230705060501.png',
      '/cloned_media/36920920230705060501.png',
      '/cloned_media/1804520230705060501.png'
    ],
    overview: '<p>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It\'s also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass. The town of Manali is just a starting point for our trip - we explore the nearby hills, valleys and hidden gems of Himachal Pradesh. There\'s so much to see and do here!</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Manali | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Manali and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Manali Arrival | Local Exploration & Cafe Hopping',
        description: '<ul><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>Post leisure, head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees. Take a walk into the woods at Van Vihar and treat yourself with mouthwatering dishes at various themed cafes in Old Manali. In the evening, visit Manali’s Mall Road and spend time there by enjoying street food and shopping souvenirs.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive to Sissu via Atal Tunnel & Solang Valley',
        description: '<ul><li>Wake up to a beautiful mountain morning and post breakfast, drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 3,
        title: 'Manali to Kasol | Kasol Arrival & Cafe Hopping',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel and drive towards Kasol from Manali.</li><li>Enroute Kasol, you can indulge in adventure activities like paragliding at Kullu (by your own).</li><li>After arriving in Kasol, check-in to our hotel/campsite & freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Kasol.</li></ul>'
      },
      {
        day: 4,
        title: 'Manikaran Hot Springs | Jibhi Arrival',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel/campsite and say goodbye to our lovely host.</li><li>Drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara & Shiva Temple.</li><li>Enroute Jibhi, you can indulge in river rafting adventure activity.</li><li>After arriving in Jibhi, check-in to our cozy homestay/hotel and quickly head out to visit the beautiful Jibhi waterfall and soak in the soothing surroundings of the place.</li><li>Savour home-style cooked dinner and overnight stay in a homestay/hotel in Jibhi/Banjar.</li></ul>'
      },
      {
        day: 5,
        title: 'Trek to Serolsar Lake | Depart for Delhi',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the homestay/hotel and drive to Jalori Pass situated at 10,800 feet.</li><li>Hike to 360° Himalayan view point and get mesmerized by the stunning landscape of snow-clad Himalayas (if weather permits).</li><li>Trek further to the beautiful Serolsar Lake surrounded by lush forest cover and pay homage at Budhi Nagin Temple (if weather permits).</li><li>Post lunch, gather for an #InstaPerfect group picture, trek back to Jalori Pass and drive back to Aut.</li><li>In the evening, start-off your overnight journey to Delhi from Jibhi.</li></ul>'
      },
      // Day 6 is arrival, not part of the active itinerary
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '4 Nights Accommodation on Sharing Basis: 2 Nights in Hotel (Manali), 1 Night in Hotel/Campsite (Kasol) & 1 Night in Hotel/Homestay (Jibhi/Banjar).',
      '8 Meals: Manali (2 Breakfasts+2 Dinners), Kasol (Breakfast+Dinner) Jibhi (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 5.',
      'Bonfire (if weather permits) & music only on any 3 Nights and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'River Rafting Adventure Activity on Day 4.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'manali-sissu-kasol',
    title: 'Manali Sissu Kasol', // From HTML
    destination: 'Himachal',
    duration: '6 Days / 3 Nights', // Corrected from itinerary (Day 0 to 5)
    price: '₹8000', // From HTML (discounted quad price)
    originalPrice: '₹10000', // From HTML (quad price)
    discount: '₹2,000', // From HTML (10000 - 8000)
    imageUrl: '/cloned_media/5274820240826124530.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/9952920241202130109.png',
      '/cloned_media/19094420241202130109.png',
      '/cloned_media/22363020241202130109.png',
      '/cloned_media/19467120241202130109.png',
      '/cloned_media/30739520241202130109.png',
      '/cloned_media/6178220241202130109.png'
    ],
    overview: '<h2>About Manali Kasol Tour Package</h2><p>Manali is the resort town situated in the hearts of the Himalayas in the Himachal Pradesh, providing different experiences to the travelers and also being one of the most beautiful grazed towns in the Himalayas. As the diverse landscapes of Manali pass through, you can feel the crisp air of the surroundings soothing your soul. From snow-capped mountains to lush valleys, Manali offers it all.</p><p>Adventure seekers can indulge in activities like paragliding, skiing, horse riding, quad biking and trekking in places like Solang Valley and Rohtang Pass. The town itself is filled with a plethora of attractions like Hadimba Temple, manu temple and old manali known for its vibrant cafe and backpacker vibe.</p><p>Kasol is often labeled as the "mini Israel of India", is a pristine hamlet along the Parvati River, Kasol is famous for its picturesque beauty, tranquil surroundings. This backpacker-friendly destination in Himachal serves as the most exquisite place for sightseeing, nature lovers, and hiking. It is often termed as the best gateway for holidays with cool nights and mild temperatures. Kasol’s laid back atmosphere and abundance of cozy cafes offer the perfect setting to unwind and connect with fellow travelers, while experiencing the breathtaking beauty of the surrounding lakes.</p><h3>Places to Visit in Manali Kasol Trip</h3><p>During a Manali-Kasol Trip, you’ll find yourself surrounded by breathtaking landscapes, lush green valleys, charming villages and cultural attractions. Here are some must visit places during your trip:-</p><ul><li><strong>Hadimba Temple-</strong>&nbsp;This ancient Temple is dedicated to goddess Hadimba, set in the midst of deodar forests, it is famous for its architecture and peaceful surroundings.</li><li><strong>Solang Valley-</strong>&nbsp;Solang Valley offers thrilling adventure activities like Paragliding, zorbing and skiing (in winters). It is a paradise for adventure enthusiasts and mesmerizing views of snow capped peaks adds to the attractions.</li><li><strong>Old Manali-</strong>&nbsp;Explore the vibrant streets of Old Manali, known for its bohemian atmosphere, aesthetic cafes and local handicraft shops. It\'s a wonderful destination to immerse yourself in the local culture and cuisine.</li><li><strong>Manikaran Gurudwara-</strong>&nbsp;Located near Kasol,&nbsp;<a href="https://en.wikipedia.org/wiki/Manikaran" target="_blank" rel="noopener noreferrer" style="color: #2755b0;">Manikaran</a>&nbsp;is popular for its hot springs and a sikh revered pilgrimage site Gurudwara Manikaran Sahib. The area also has Temples and a beautiful riverside setting.</li><li><strong>Kasol Nature Park-</strong>&nbsp;Kasol Nature Park is settled amidst the Parvati Valley of Himachal Pradesh, is a serene retreat known for its lush greenery, tranquil environment and scenic beauty. The park offers well maintained trails perfect for nature walks and birdwatching, providing a peaceful escape for nature enthusiasts.</li><li><strong>Parvati River-</strong>&nbsp;Spend some time by the shore of the Parvati river, soaking in the peaceful ambiance and enjoying leisurely walks along its scenic trails.</li><li><strong>Kullu-</strong>&nbsp;Kullu is nestled in the heart of Himachal Pradesh, is renowned for its stunning landscapes, vibrant culture and the famous Kullu Dussehra festival. This picturesque valley surrounded by towering mountains and lush greenery serves as the gateway to numerous trekking, rafting and adventure activities.</li><li><strong>Sissu Village-</strong>&nbsp;Sissu Village, located in the Lahaul Valley of Himachal Pradesh is well known for its breathtaking landscapes and the majestic Sissu Waterfall. This pristine hamlet offers panoramic views of the surrounding mountains and serene rivers, making it a perfect spot for nature lovers.</li><li><strong>Atal Tunnel-</strong>&nbsp;Atal Tunnel, stretching 9 kilometers under the Rohtang Pass in Himachal Pradesh, is the longest highest tunnel in India. It offers year-round connectivity between the Manali and The Lahaul-Spiti Valley, significantly reducing travel time and improving access.</li><li><strong>Mall Road-</strong>&nbsp;Mall Road in Manali is the bustling heart of the town, surrounded with shops, restaurants and cafes, making it a favorite spot for tourists. This vibrant street offers a perfect blend of modern amenities and local culture making it ideal for shopping and leisurely strolls.</li></ul><h3>Things to do in Manali Kasol Trip</h3><ul><li><strong>Adventure Sports in Solang Valley-</strong>&nbsp;Indulge yourself in thrilling adventure activities like paragliding, zorbing, skiing and snowboarding in places like Solang Valley.</li><li><strong>Trekking near Manali-</strong>&nbsp;Explore the picturesque trails surrounding Manali like the Beas Kund Trek,&nbsp;<a href="https://go4explore.com/trips/hampta-pass-trek" style="color: blue;">Hampta Pass Trek</a>&nbsp;and the&nbsp;<a href="https://go4explore.com/trips/bhrigu-lake-trek" style="color: blue;">Trek to Bhrigu Lake</a>&nbsp;providing stunning views of the Himalayas and pristine alpine landscapes.</li><li><strong>Hot Springs at Vashisht-</strong>&nbsp;Relax and rejuvenate your senses by taking a dip in the natural hot springs at Vashisht, known for their therapeutic properties and serene ambiance.</li><li><strong>Nature Walks in Kasol-</strong>&nbsp;Immerse yourself in the serene beauty of the surrounding landscapes, take a leisurely walk along the shore of Parvati River, while enjoying the moments of peace and tranquility.</li><li><strong>Exploring Villages in Parvati Valley-</strong>&nbsp;Explore nearby villages like Tosh and Chalal and experience the local way of life, interact with friendly strangers and gape at the traditional architecture and cultural heritage.</li><li><strong>Paragliding in Kullu Valley-</strong>&nbsp;Paragliding in Kullu Valley offers an exhilarating experience amidst the breathtaking Himalayan scenery, with operators providing safe and thrilling flights for adventure enthusiasts. The skies of Kullu Valley provide a perfect backdrop for an unforgettable paragliding adventure.</li><li><strong>Shiva Temple in Manikaran-</strong>&nbsp;The Shiva Temple in Manikaran nestled amidst the stunning Parvati Valley, is a revered pilgrimage site known for its hot springs and spiritual significance. Devotees flock to this ancient temple to pay homage to Lord Shiva and seek blessing in the holy surroundings.</li><li><strong>Cafe Hopping in Kasol-</strong>&nbsp;Kasol is famous for its laid back vibe and several cozy cafes serving delicious food and beverages. Spend leisurely hours sipping chai, enjoying Israeli delicacies and soaking in the bohemian ambiance.</li><li><strong>Shopping in Manali Mall Road-</strong>&nbsp;Shopping in the Mall Road of Manali offers a delightful array of local handicrafts, woolen and souvenirs amidst the charming mountain backdrop. From vibrant shawls to intricately crafted handicrafts, Mall road is a bustling hub for travelers seeking authentic Himalayan treasures.</li></ul><h3>Best Time to Visit Manali Kasol</h3><ul><li><strong>Summer-</strong>&nbsp;Summer is considered as the peak tourist season in Manali and Kasol, the weather is mild and pleasant with clear skies with temperatures ranging from 10°C to 25°C in Manali and slightly warmer in Kasol. It\'s the ideal time for outdoor activities such as trekking, paragliding, camping and sightseeing.</li><li><strong>Monsoon-</strong>&nbsp;Monsoon brings heavy rainfall to the region in July and August. While the lush greenery and the gushing rivers create a picturesque landscape, trekking and outdoor activities might be limited due to safety concerns.</li><li><strong>Autumn-</strong>&nbsp;Autumn is a breathtaking time to visit as the weather remains pleasant with temperatures ranging from 5 C to 20 C . monsoon showers have cleared leaving behind fresh green surroundings.</li><li><strong>Winter-</strong>&nbsp;Winter transforms Manali and Kasol into Winter Wonderland, especially from December to Manali. Temperatures can drop below freezing and heavy snowfall is common especially in high altitudes.</li></ul><h3>How to Reach Manali Kasol</h3><p>There are several convenient transportation options available to reach Manali and Kasol from delhi. Here\'s how you can reach these destinations:-</p><ul><li><strong>By Road:</strong>&nbsp;The approximate driving distance from Delhi to Manali is around 550 kilometers, which takes about 12-14 hours. From Manali, Kasol is around 75 kilometers away and takes around 3-4 hours. Various private and state-run buses operate between Delhi and Manali/Kasol.</li><li><strong>By Train:</strong>&nbsp;Delhi is well connected to Chandigarh by train. From Chandigarh you can take a bus or hire a cab to reach Manali.</li><li><strong>By Air:</strong>&nbsp;The nearest airport to Manali is Bhuntar Airport, also known as the Kullu-Manali Airport. From the airport you can hire a taxi or take a bus to Manali.</li></ul><p>Explore our other tour packages:&nbsp;<a href="https://go4explore.com/trips/manali-solang-valley" style="color: blue;">Manali Solang Valley</a>,&nbsp;<a href="https://go4explore.com/trips/shimla-manali-5-days-4-nights" style="color: blue;">Shimla Manali 5D/4N</a>,&nbsp;<a href="https://go4explore.com/trips/spiti-valley-manali-edition" style="color: blue;">Spiti Valley- Manali Edition</a>,&nbsp;<a href="https://go4explore.com/trips/manali-kasol-kheerganga-trek" style="color: blue;">Manali Kasol Kheerganga</a></p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Manali | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Manali and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Manali Arrival | Local Exploration & Cafe Hopping',
        description: '<ul><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>Post leisure, head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees. Take a walk into the woods at Van Vihar and treat yourself with mouthwatering dishes at various themed cafes in Old Manali. In the evening, visit Manali’s Mall Road and spend time there by enjoying street food and shopping souvenirs.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive to Sissu via Atal Tunnel & Solang Valley',
        description: '<ul><li>Wake up to a beautiful mountain morning and post breakfast, drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 3,
        title: 'Manali to Kasol | Kasol Arrival & Cafe Hopping',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel and drive towards Kasol from Manali.</li><li>Enroute Kasol, you can indulge in adventure activities like paragliding and river rafting at Kullu (by your own).</li><li>After arriving in Kasol, check-in to our hotel/campsite & freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Kasol.</li></ul>'
      },
      {
        day: 4,
        title: 'Manikaran Hot Springs | Depart For Delhi',
        description: '<ul><li>Wake up to a peaceful mountain morning and post breakfast, check out from the hotel/campsite and say goodbye to our lovely host.</li><li>Drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara & Shiva Temple.</li><li>Spend some leisure time in Kasol’s local market.</li><li>In the evening, start-off your overnight journey to Delhi.</li></ul>'
      },
      {
        day: 5,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '3 Nights Accommodation on Sharing Basis: 2 Nights in Hotel (Manali), 1 Night in Hotel/Campsite (Kasol).',
      'Experienced and cool Trip Captain.',
      'Bonfire (if weather permits) & music on any 2 Nights during the stay and local explorations as per itinerary.',
      '6 Meals: Manali (2 Breakfasts+2 Dinners), Kasol (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 4.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'manali-sissu-kasol-kheerganga',
    title: 'Manali Sissu Kasol Kheerganga', // From HTML
    destination: 'Himachal',
    duration: '7 Days / 4 Nights', // Corrected from itinerary (Day 0 to 6)
    price: '₹12500', // From HTML (discounted quad price)
    originalPrice: '₹14000', // From HTML (quad price)
    discount: '₹1,500', // From HTML (14000 - 12500)
    imageUrl: '/cloned_media/22022520240827103638.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/1807420230702210004.png',
      '/cloned_media/38088220230702210004.png',
      '/cloned_media/410720230702210004.png',
      '/cloned_media/10026520230702210004.png',
      '/cloned_media/38709020230702210004.png',
      '/cloned_media/28713220230702210004.png',
      '/cloned_media/14898920230702210004.png',
      '/cloned_media/25229120230702210004.png',
      '/cloned_media/2679820230702210004.png',
      '/cloned_media/33649220230702210004.png',
      '/cloned_media/13215820230702210004.png',
      '/cloned_media/23952520230702210004.png'
    ],
    overview: 'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It\'s also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains.', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Manali | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Manali and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Manali Arrival | Local Exploration & Cafe Hopping',
        description: '<ul><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>Post leisure, head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees. Take a walk into the woods at Van Vihar and treat yourself with mouthwatering dishes at various themed cafes in Old Manali. In the evening, visit Manali’s Mall Road and spend time there by enjoying street food and shopping souvenirs.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive to Sissu via Atal Tunnel & Solang Valley',
        description: '<ul><li>Wake up to a beautiful mountain morning and post breakfast, drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 3,
        title: 'Manali to Kasol | Kasol Arrival & Cafe Hopping',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel and drive towards Kasol from Manali.</li><li>Enroute Kasol, you can indulge in adventure activities like paragliding and river rafting at Kullu (by your own).</li><li>After arriving in Kasol, check-in to our hotel/campsite & freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Kasol.</li></ul>'
      },
      {
        day: 4,
        title: 'Kheerganga Trek | Overnight Camping',
        description: '<ul><li>Wake up early and post breakfast, drive from Kasol to Barshaini Dam and begin your trek to Kheerganga.</li><li>The trail passes through dense forest cover, soul-soothing waterfalls and rustic Himachali villages.</li><li>After arriving in Rudranag, check-in to our campsite and have some leisure, hike to Kheerganga top & back.</li><li>In the evening, chill with your travel clan and indulge in group activities.</li><li>Savour home-style cooked dinner and overnight stay in camps.</li></ul>'
      },
      {
        day: 5,
        title: 'Manikaran Hot Springs | Depart For Delhi',
        description: '<ul><li>Wake up early in the morning and witness a mesmerising sunrise view on Pir Panjal range from your campsite.</li><li>Post breakfast, begin your trek down to Barshaini Dam. </li><li>Drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara & Shiva Temple.</li><li>In the evening, start-off your overnight journey to Delhi from Kasol.</li></ul>'
      },
      {
        day: 6,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '4 Nights Accommodation on Sharing Basis: 2 Nights in Hotel (Manali), 1 Night in Hotel/Campsite (Kasol) & 1 Night in Alpine Camps (Rudranag).',
      '8 Meals: Manali (2 Breakfasts+2 Dinners), Kasol (Breakfast+Dinner) Rudranag (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 5.',
      'Bonfire (if weather permits) & music on any 2 Nights during the stay and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'manali-kasol-kheerganga',
    title: 'Manali Kasol Kheerganga', // From HTML
    destination: 'Himachal',
    duration: '6 Days / 3 Nights', // Corrected from itinerary (Day 0-5)
    price: '₹9999', // Starting price (Quad) from HTML
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/28089820240827101831.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/15369120231006085228.png',
      '/cloned_media/29221420231006085228.png',
      '/cloned_media/19243920231006085228.png',
      '/cloned_media/8892020231006085228.png',
      '/cloned_media/17337220231006085228.png',
      '/cloned_media/42129620231006085228.png',
      '/cloned_media/20009020231006085228.png',
      '/cloned_media/9056120231006085228.png',
      '/cloned_media/42022420231006085228.png',
      '/cloned_media/29296620231006085228.png'
    ],
    overview: '<p>Once a sleepy village positioned in the mysterious Parvati Valley, Kasol is a hub for young backpackers, peace seekers and India’s <i>hashish</i> capital. A backpacking trip to Parvati Valley will remain incomplete without spending a night in this Himalayan hamlet widely popular among smokers. Kasol gives easy access to some naturally occurring herbs that are purer and affordable too. Nestled along the roaring Parvati River, this hippie paradise in Himachal Pradesh is a great option to escape the monotony of urban life and soak in the good vibes amidst majestic Himalayas.</p><p>From hiking to ancient villages, interacting with locals to chilling and treating yourself with delicious falafel in local cafes, Kasol is truly a traveller’s delight in the lap of Himalayas.</p><p>Lies at the extreme end of Parvati Valley, trek to Kheerganga is one of the most loved trekking trails near Kasol. Positioned at an altitude of 13,000 ft, Kheerganga is a holy place with a hot water spring - a <i>kund</i> blessed by the holiness of Lord Shiva and Goddess Parvati. The trekking route from Barshaini to Kheerganga is decorated with dense forests, soul-soothing waterfalls, rustic villages and gorgeous Himalayan vistas; therefore making this destination a hit for trek lovers. So, put on your backpack and head out for camping at Kheerganga in Parvati Valley.</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Kasol | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Kasol and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Kasol Arrival | Chill Scenes & Hippie Vibes',
        description: '<ul><li>After arriving in Kasol, check-in to our comfy hotel/campsite &amp; freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>In the evening, get back to your property and indulge in group activities and attend trek briefing for next day.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite.</li></ul>'
      },
      {
        day: 2,
        title: 'Kheerganga Trek | Overnight Camping',
        description: '<ul><li>Wake up early and post breakfast, drive from Kasol to Barshaini Dam and begin your trek to Kheerganga.</li><li>The trail passes through dense forest cover, soul-soothing waterfalls and rustic Himachali villages.</li><li>After arriving in Rudranag, check-in to our campsite and have some leisure, hike to Kheerganga top &amp; back.</li><li>In the evening, chill with your travel clan and indulge in group activities.</li><li>Savour home-style cooked dinner and overnight stay in camps.</li></ul>'
      },
      {
        day: 3,
        title: 'Manikaran Hot Springs | Drive to Manali',
        description: '<ul><li>Wake up early in the morning and witness a mesmerising sunrise view on Pir Panjal range from your campsite.</li><li>Post breakfast, begin your trek down to Barshaini Dam. </li><li>Enroute Manali, take a halt and visit the famous holy hot water springs at Manikaran Sahib Gurudwara &amp; Shiva Temple.</li><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>In the evening, visit Old Manali &amp; Manali’s popular Mall Road.</li><li>Savour delightful dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 4,
        title: 'Sissu via Atal Tunnel & Solang Valley | Depart for Delhi',
        description: '<ul><li>Wake up early and post breakfast, check out from the hotel and say goodbye to our lovely host. drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>In the evening, start-off your overnight journey to Delhi.</li></ul>'
      },
      {
        day: 5,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '3 Nights Accommodation on Sharing Basis: 1 Night in Swiss Camps/Hotel (Kasol), 1 Night in Alpine Camps (Rudranag) & 1 Night in Hotel (Manali).',
      '6 Meals: Kasol (Breakfast+Dinner), Rudranag (Breakfast+Dinner) & Manali (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 4.',
      'Bonfire (if weather permits) & music only on any 1 Night during the stay (Manali) and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'mcleodganj-triund-bir',
    title: 'Mcleodganj Triund Bir', // From HTML
    destination: 'Himachal',
    duration: '6 Days / 3 Nights', // Corrected from itinerary (Day 0-5)
    price: '₹9999', // From HTML (Quad Occupancy price)
    // originalPrice: '', // No discount on base price
    // discount: '', // No discount on base price
    imageUrl: '/cloned_media/31506520240827070428.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/3109520231006081115.png',
      '/cloned_media/10500020231006081115.png',
      '/cloned_media/38419520231006081115.png',
      '/cloned_media/28697120231006081115.png',
      '/cloned_media/20078220231006081115.png',
      '/cloned_media/14938720231006081115.png',
      '/cloned_media/17358520231006081115.png',
      '/cloned_media/23807320231006081115.png',
      '/cloned_media/42039520231006081115.png',
      '/cloned_media/40458420231006081115.png'
    ],
    overview: '<p>Himachal has always been a paradise for backpackers who are in love with the mountains and nature’s exceptional beauty. From refreshing lakes and waterfalls to snow-capped and lush green meadows, interesting folktales, and traditions, Himachal Pradesh has it all to mesmerize the travelers who visit this Himalayan state. Nestled in the lap of mighty Dhauladhars, Mcleodganj is a beautiful town also known as Little Lhasa. This little Himalayan retreat situated in the upper Dharamshala showcases a beautiful blend of Tibetan culture with some British influence. From meditating and seeking blessings at colorful Buddhist monasteries, going on adventurous trails, to enjoying good vibes with good food at various themed cafes, Mcleodganj in Himachal has it all for every kind of wanderlust soul.&nbsp; McleodGanj is also a starting point for a number of Himalayan treks. One of the most famous of them is the Triund trek, a perfect option for mountain camping and stargazing, treating you with mind-blowing views of the Dhauladhar range in the backdrop and beautiful Kangra Valley in front. The paragliding capital of India, Bir is a small town positioned in Kangra Valley highly influenced by the Tibetan culture due to Tibetan community settlement in this town. Decorated with quaint cafes, vibrant monasteries, lush tea gardens, and gorgeous sunset points, Bir is just as apt for backpackers and solo travelers.</p><p>Other Mcleodganj Tour Packages: <a href="https://go4explore.com/trips/mcleodganj-triund-trek" style="color:blue;">Mcleodganj Triund Trek</a>, <a href="https://go4explore.com/trips/dharamsala-mcleodganj-3d2n" style="color:blue;">Dharamsala Mcleodganj Tour</a></p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Mcleodganj | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Mcleodganj and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Mcleodganj Arrival | Local Exploration & Cafe Hopping',
        description: '<ul><li>After arriving in Mcleodganj, check-in to our hotel, freshen-up and have some leisure.</li><li>Post leisure, we will head out to explore the Tibetan Market and visit the famous Dalai Lama Temple and Kalachakra Temple by walk. </li><li>Chill at local cafes in Mcleodganj (recommendations: Tibet Kitchen, Jimmy\'s Italian Kitchen, Coffee Talk, Moonpeak Espresso, Nick’s Italian Kitchen & Illiterati Cafe). How about trying some street-style momos in the market, doesn\'t that sound yummilicious?</li><li>In the evening, enjoy a warm bonfire with good music.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Mcleodganj.</li></ul>'
      },
      {
        day: 2,
        title: 'Trek to Triund | Overnight Camping',
        description: '<ul><li>Wake up early in the morning and post breakfast, begin your trek to Triund. The trail offers great views of Kangra Valley. </li><li>After reaching the Triund hilltop, cherish the majestic Himalayan beauty of Dhauladhar mountains and take some #InstPerfect pictures. Trek down towards your campsite below Triund, check-in to our camps and have some leisure. </li><li>In the evening, feel-free to stroll around and experience the mesmerizing sunset scene from your campsite. </li><li>Savour home-style cooked dinner and overnight stay in camps at Triund.</li></ul>'
      },
      {
        day: 3,
        title: 'Mcleodganj to Bir | Paragliding in Bir',
        description: '<ul><li>Wake up and post breakfast, hike down to Mcleodganj, drive towards Bir.</li><li>Enroute Bir, we’ll take a halt in Dharamshala to visit the HPCA Stadium.</li><li>After arriving in Bir, check-in to our hotel and have some leisure.</li><li>Head out for a thrilling paragliding* adventure and drive towards Billing, the take-off site. Fly down from Billing to Bir and enjoy the breathtaking view of Kangra Valley.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Bir.</li></ul>'
      },
      {
        day: 4,
        title: 'Bir Local Explorations | Depart for Delhi',
        description: '<ul><li>Wake up early and post breakfast, check-out from our hotel/campsite in Bir and explore the local market, chill at quaint cafes and visit vibrant Tibetan monasteries by walk. </li><li>In the evening, start your overnight journey from Bir to Delhi.</li></ul>'
      },
      {
        day: 5,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '3 Nights Accommodation on sharing basis: 1 Night in Hotel (Mcleodganj), 1 Night in Camps (Triund), 1 Night in Hotel/Camps (Bir).',
      '6 Veg Meals: Mcleodganj (Breakfast+Dinner), Triund (Breakfast+Dinner) & Bir (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 4.',
      'Bonfire (if weather permits) & music only on any 1 Night during the stay (Mcleodganj) and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities , room heaters or tickets, unless quoted in Inclusions.',
      'Paragliding in Bir, GoPro video shots taken during the paragliding session and paragliding insurance.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'himachal-backpacking-9d8n',
    title: 'Himachal Backpacking 9D8N', // From HTML
    destination: 'Himachal',
    duration: '11 Days / 8 Nights', // Corrected from itinerary (Day 0-10)
    price: '₹35000', // From HTML (Triple sharing price)
    // originalPrice: '', // Not in HTML
    // discount: '', // Not in HTML
    imageUrl: '/cloned_media/2790520241119110345.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/9501620230716190958.png',
      '/cloned_media/4815220230716190958.png',
      '/cloned_media/38172020230716190958.png',
      '/cloned_media/11989820230716190958.png',
      '/cloned_media/7841120230716190958.png',
      '/cloned_media/29222120230716190958.png',
      '/cloned_media/38506020230716190958.png',
      '/cloned_media/32730820230716190958.png',
      '/cloned_media/33546120230716190958.png',
      '/cloned_media/34178020230716190958.png',
      '/cloned_media/12481320230716190958.png',
      '/cloned_media/29773020230716190958.png'
    ],
    overview: '<h2>About Himachal Backpacking Tip 9 Days 8 Nights</h2><p>Every year thousands of tourists visit the Land of Gods, Himachal Pradesh, only to get mesmerized by the natural beauty the valleys hold, culturally rich villages, serene landscapes, majestic waterfalls and provide trekkers with their favorite trails. Himachal Backpacking Package is not only a dream destination for nature lovers but also for those who search for adventure on every journey.</p><p>Himachal has always been a paradise for backpackers who are in love with the mountains and nature’s exceptional beauty. From refreshing lakes and waterfalls to snow-capped and lush green meadows, interesting folktales and traditions surround Himachal’s valleys. It leaves tourists mesmerized by the natural beauty and panoramic views from the attractions of this state enriches travelers\' experience.</p><h3>Places to Visit in 9 Days in Himachal Pradesh Backpacking</h3><ul><li><strong>Shimla:</strong> Shimla is the summer capital of Himachal Pradesh...</li><li><strong>Dharamshala:</strong> This winter capital of Himachal Pradesh...</li><li><strong>Mcleodganj:</strong> Home to famous Tibetan spiritual leader Dalai Lama...</li><li><strong>Bir:</strong> <a href="https://go4explore.com/trips/bir-billing" style="color:blue;">Bir Billing</a> is located in Kangra district...</li><li><strong>Jibhi:</strong> Jibhi is also known as the coolest place in the state...</li><li><strong>Serolsar Lake:</strong> At an Altitude of 3,100m this lake leaves travelers captivated...</li><li><strong>Kasol:</strong> Also referred to as “Mini Israel”, Kasol is a little village...</li><li><strong>Manali:</strong> Manali is a popular hill station...</li><li><strong>Solang Valley:</strong> Solang Valley is a picturesque valley...</li></ul><h3>Things to do in 9 Days in Himachal Backpacking Trip</h3><ul><li><strong>Trekking in Himachal:</strong> One of the most popular activities...</li><li><strong>Paragliding in Bir, Solang Valley &amp; Kullu:</strong> Paragliding is an adventurous activity...</li><li><strong>River Rafting in Manali:</strong> <a href="https://go4explore.com/trips/kullu-manali-4-days-3-nights" style="color:blue;">Manali and Kullu</a> offer thrilling river rafting opportunities...</li><li><strong>Shopping at Manali Mall Road:</strong> Mall Road is the main shopping hub...</li><li><strong>Visit Spiritual Monasteries &amp; Temples:</strong> There are various Monasteries...</li><li><strong>Cafe hopping in Old Manali:</strong> Discover the hidden gems of Manali...</li><li><strong>Waterfalls in Jibhi:</strong> Jibhi’s waterfall is a natural fall...</li><li><strong>Tibetan Food in Mcleodganj:</strong> Mcleodganj is also known as Little Tibet...</li><li><strong>Visit Hot Springs in Manikaran:</strong> Hot springs in <a href="https://en.wikipedia.org/wiki/Manikaran" style="color:blue;" rel="noopener noreferrer" target="_blank">Manikaran</a> are said to have therapeutic properties...</li></ul><h3>Best time to visit Himachal Pradesh</h3><ul><li><strong>Summer:</strong> Summer season is the best time to visit...</li><li><strong>Monsoon:</strong> Monsoon season is popular among backpackers...</li><li><strong>Winter:</strong> Winter season will treat you with snow capped mountains...</li></ul><h3>How to reach Himachal Pradesh</h3><ul><li><strong>Airways:</strong> ...three airports Jubal Hatti, Bhuntar or Kangra...</li><li><strong>Railways:</strong> ...Pathankot... or Jogindernagar railway station.</li><li><strong>Roadways:</strong> The cities of Himachal are well connected to Delhi, Chandigarh, Jaipur...</li></ul><h4>FAQ’s</h4><p><strong>1. What is the best season to visit Himachal Pradesh?</strong></p><p>Summer is the best time to visit Himachal Pradesh.</p><p><strong>2. Which month is best for a Himachal tour?</strong></p><p>Best month for the Himachal tour is from March to June.</p><p><strong>3. How Many Days Are Enough For Himachal Pradesh?</strong></p><p>Around 10 days are enough for the Himachal Pradesh Tour.</p><p><strong>4. Which Is The Coolest Place In Himachal Pradesh?</strong></p><p>Jibhi is the coolest place in Himachal Pradesh.</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Mcleodganj | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla Bus Stand/ ISBT Kashmere Gate/ RK Ashram Metro station and meet your Trip Captain. </li><li>Start an overnight journey to Mcleodganj and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Mcleodganj Arrival | Local Explorations & Cafe Hopping',
        description: '<ul><li>After arriving in Mcleodganj, check-in to our hotel, freshen-up and have some leisure.</li><li>Post leisure, we will head out to explore the Tibetan Market and visit the famous Dalai Lama Temple and Bhagsunag Waterfall. </li><li>Chill at local cafes in Mcleodganj (recommendations: Tibet Kitchen, Jimmy\'s Italian Kitchen, Coffee Talk, Moonpeak Espresso, Nick’s Italian Kitchen &amp; Illiterati Cafe). How about trying some street-style momos in the market, doesn\'t that sound yummilicious?</li><li>In the evening, return back to your property.</li><li>Delightful dinner and overnight stay in a hotel in Mcleodganj.</li></ul>'
      },
      {
        day: 2,
        title: 'Mcleodganj to Bir | Bir Local Explorations',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from the property and drive towards Bir from Mcleodganj.</li><li>Enroute Bir, we’ll take a halt in Dharamshala to visit the HPCA Stadium.</li><li>After arriving in Bir, check-in to our property and have some leisure.</li><li>Head out to explore the local market, chill at quaint cafes and visit vibrant Tibetan monasteries by walk.</li><li>In the evening, we will celebrate Christmas with music, bonfire and more.</li><li>Delightful dinner and overnight stay in a hotel in Bir.</li></ul>'
      },
      {
        day: 3,
        title: 'Paragliding in Bir | Depart from Bir to Jibhi',
        description: '<ul><li>Wake up early and post breakfast, check-out from our property in Bir and head out for a thrilling paragliding adventure and drive towards Billing, the take-off site. Fly down from Billing to Bir and enjoy the breathtaking view of Kangra Valley.</li><li>Post a thrilling paragliding session, start your journey from Bir to Jibhi.</li><li>After arriving in Jibhi, check-in to our cozy hotel in Jibhi, freshen-up and have some leisure. Head out to explore the local market and go to cafe hopping.</li><li>Delightful dinner and overnight stay in a hotel in Jibhi.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive to Jalori Pass & Trek to Serolsar Lake',
        description: '<ul><li>Wake up early in the morning and post breakfast, drive to Jalori Pass situated at 10,800 feet.</li><li>Hike to 360° Himalayan view point and get mesmerized by the stunning landscape of snow-clad Himalayas (if weather permits).</li><li>Trek further to the beautiful Serolsar Lake surrounded by lush forest cover and pay homage at Budhi Nagin Temple (if weather permits).</li><li>Post lunch, gather for an #InstaPerfect group picture, trek back to Jalori Pass and drive back to our property.</li><li>Delightful dinner and overnight stay in a hotel in Jibhi.</li></ul>'
      },
      {
        day: 5,
        title: 'Jibhi Waterfall | Depart from Jibhi to Kasol',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from our property and, visit the beautiful Jibhi waterfall and soak in the soothing surroundings of the place.</li><li>Start your journey from Jibhi to Kasol and enroute we\'ll indulge in a River Rafting session.</li><li>After arriving in Kasol, check-in to our comfy hotel &amp; freshen-up.</li><li>Feel free to head out to explore the streets of Kasol and soak in the hippie vibes of Kasol. Go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Delightful dinner and overnight stay in a hotel in Kasol.</li></ul>'
      },
      {
        day: 6,
        title: 'Manikaran Hot Springs | Kasol Local Explorations',
        description: '<ul><li>Wake up early in the morning and post breakfast, drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara &amp; Shiva Temple.</li><li>Afterwards, we\'ll hike towards Chalal village, a quaint village that offers beautiful views of the entire Parvati Valley.</li><li>Spend some leisure time in Kasol’s local market.</li><li>Delightful dinner and overnight stay in a hotel in Kasol.</li></ul>'
      },
      {
        day: 7,
        title: 'Depart from Kasol to Manali | Manali #MeTime',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from our property and drive from Kasol to Manali.</li><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>In the evening, feel free to stroll around and visit Manali’s popular Mall Road.</li><li>Delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 8,
        title: 'Manali Local Explorations & New Year Celebrations',
        description: '<ul><li>Wake up to a beautiful mountain morning and post breakfast,&nbsp; head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees.</li><li>Drive towards Vashisht village and visit the famous holy hot water springs at Vashisht Temple.</li><li>In the evening, we will celebrate New Year’s Night with music, bonfire and more.</li><li>Delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 9,
        title: 'Adventure Activities in Solang Valley | Depart for Delhi',
        description: '<ul><li>Wake up early and post breakfast, check-out from the hotel and say goodbye to our lovely host. Drive from Manali to Solang Valley and indulge in various adventure activities (like Zorbing, Skiing, ATV rides, Paragliding, Zipline, and more) over there (on your own).</li><li>In the evening, start-off your overnight journey to Delhi.</li></ul>'
      },
      {
        day: 10,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: AC Semi-Sleeper Volvo Bus (Delhi-Mcleodganj & Manali-Delhi), and Force Traveler at all other times.',
      '8 Nights Accommodation on Sharing Basis: 1 Mcleodganj, 1 Bir, 2 Jibhi, 2 Kasol, 2 Manali.',
      '16 Meals: (Breakfast+Dinner) at each location, starting from Dinner on Day 1 to Breakfast on Day 9.',
      'Complimentary Snacks & Cake: For New Year\'s Eve & Christmas Day Celebrations.',
      'Bonfire (if weather permits) & music and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'Paragliding and River Rafting Adventure Activity on Day 3 & 5 respectively.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements not in inclusions.',
      'Early check-in (Before 1:00 PM) & Late Check-out (After 11:00 AM).',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to natural calamity, weather, riots, roadblocks, etc.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'spiti-valley-circuit-trip',
    title: 'Spiti Valley Circuit Trip', // From HTML
    destination: 'Himachal',
    duration: '9 Days / 6 Nights', // From HTML Itinerary (Day 0 to Day 8)
    price: '₹20000', // From HTML (Starting price, Triple Occupancy)
    imageUrl: '/cloned_media/38286220250203102630.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/38678820250203103332.png',
      '/cloned_media/39647520250203103332.png',
      '/cloned_media/26534520250203103332.png',
      '/cloned_media/23365020250203103333.png',
      '/cloned_media/24505420250203103333.png',
      '/cloned_media/40645720250203103333.png',
      '/cloned_media/39476120250203103333.png',
      '/cloned_media/8994320250203103333.png'
    ],
    overview: '<h2>About Spiti Valley Circuit Trip</h2><p>Spiti Valley Circuit Trip can be referred to as one of the most adventurous and thrilling road trips. It\'s like stepping into a dreamland where mountains kiss the sky and the air is full of pure magic. Spiti Valley is known as the cold desert of India after Ladakh... The name Spiti means ‘the middle land’ which specifies its location between Tibet and India. ...Spiti Valley is famous for its monasteries, some of which are old for over thousand years. The iconic key monastery is set on a hilltop, while the Tabo Monastery, also known as the Ajanta of the Himalayas is another gem of the valley.</p><h3>Places to visit in Spiti Valley</h3><p><b>Kaza-</b> The administrative capital of The <a target="_blank" style="color:blue;" href="https/go4explore.com/trip/spiti-valley-tour-packages">Spiti Valley</a>, Kaza works as a central hub for travelers...</p><p><b>Key Monastery-</b> Key Monastery is one of the most famous monasteries in Spiti Valley...</p><p><b>Dhankar Monastery-</b> Elevated on a hill cliff and overlooking the confluence of the Spiti and Pin Rivers...</p><p><b>Langza-</b> Langza is a small village in Spiti, it is also known as the ‘Fossil Village’...</p><p><b>Hikkim-</b> Visit the world\'s highest post office in Hikkim...</p><p><b>Chandratal Lake-</b> Located at an altitude of about 4,300 meters, <a target="_blank" style="color:blue;" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Chandra_Taal">Chandratal Lake</a> is a mesmerizing high altitude lake...</p><p><b>Kibber-</b> Kibber is one of the highest inhabited villages in the world...</p><h3>Best time to Visit Spiti Valley</h3><p><b>Summer-</b> From March to June, Summer is the excellent time to visit Spiti Valley...</p><p><b>Winter-</b> Winter (December to February) transforms the valley into a winter wonderland...</p><h3>Things to do in Spiti Valley Circuit Trip</h3><p><b>Attend a local festival:</b> ...Losar (Tibetan New Year) or Fagli (Celebrated in Kinnaur)...</p><p><b>Visit Dhankar Lake:</b> Embark on a hike to Dhankar Lake...</p><p><b>Rafting on Spiti River:</b> ...consider going rafting on the Spiti River...</p><p><b>Motorbiking:</b> Embark on an adventurous motorbike journey...</p><p><b>Yak Safari:</b> Experience the unique thrill of Yak Safari in Spiti Valley...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Shimla | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla/Kashmere Gate Bus Stand and meet your Trip Captain. </li><li>Start an overnight journey to Shimla and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Drive from Shimla to Chitkul | Chitkul Arrival',
        description: '<ul><li>After arriving in Shimla, we will take a halt for breakfast around Narkanda and soak in the much-needed #MountainVibes. Post breakfast, we will drive ahead to reach the last Indian village before the Indo-Tibetan border - Chitkul.</li><li>Check in to our scenic campsite in Rakcham/Chitkul, freshen-up and have some leisure. What can be more magical than relaxing near the pristine Baspa River? A perfect location in the lap of majestic Himalayas to disconnect from the urban madness and connect with nature.</li><li>In the evening, don’t miss out the much-needed acclimatization session by your trip captain followed by home-style cooked dinner and overnight stay in swiss-camps.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Chitkul to Kalpa | Explore Kalpa',
        description: '<ul><li>Wake up early in the morning and post breakfast, we will head out to take a stroll around the Chitkul - last Indian village before the Indo-Tibetan border.</li><li>Visit Mathi Temple dedicated to the Goddess of local people of Kinnaur and take a soothing sip of tea or get yourself clicked at ‘Hindustan Ka Akhri Dhaba’.</li><li>Drive towards Kalpa, check in to our cozy hotel and have some leisure. Witness the magical sunset as the golden light falls on the mighty Kinnaur Kailash range. Visit the famous Roghi (suicide-point) and if time permits take a stroll in the beautiful Kalpa village.</li><li>In the evening chill with your travel clan, savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 3,
        title: 'Kalpa to Tabo | Khab Sangam, Nako & Gue | Tabo Arrival',
        description: '<ul><li>Wake up early in the morning and post breakfast, drive from Kalpa to Tabo village - home to the oldest Buddhist monastery located in Spiti Valley. Get mesmerized by the shape-shifting landscapes of mountains with every turn.</li><li>Enroute we will take a halt at Khab Sangam, visit the famous Nako Lake and monastery and Gue village to see from your naked eyes the 500-year-old mummified remains of the Buddhist monk Sangha Tenzin.</li><li>After arriving in Tabo village, check in to our comfy hotel/homestay and have some leisure. Savour home-style cooked dinner and overnight stay in a hotel/homestay.</li></ul>'
      },
      {
        day: 4,
        title: 'Tabo to Kaza | Dhankar & Pin Valley | Kaza Arrival',
        description: '<ul><li>Wake up early in the morning and post breakfast, check-out from our hotel/homestay and visit Tabo Monastery. Take a walk inside the old monastery and learn about the history. Go for the famous Tabo caves (if time permits).</li><li>Drive from Tabo to Dhankar Village and meditate in the cliff top Dhankar Monastery. </li><li>After arriving in Kaza, check in to our cozy hotel, freshen-up and have some leisure.</li><li>The ones with high energy levels, feel free to take a stroll around Kaza and old bazaars. Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 5,
        title: 'Exploring Langza, Komic & Hikkim | Kaza Cafe Hopping',
        description: '<ul><li>Post breakfast, quickly head out for an action packed exploration of various quaint villages nestled in and around Kaza. </li><li>Visit Spiti’s gorgeous fossil village Langza and get clicked with the iconic statue of Medicine Buddha with your clan. Feel proud for making it to the World’s highest motorable village Komic and absorb in the jaw dropping vistas of snow-laden Himalayas. The day will come to an end at Hikkim village known for its World’s highest post office.</li><li>Since this is your last night in Kaza, therefore make the most out of it by chilling with your travel clan at various quaint cafes and take authentic souvenirs for your loved ones back home. Post exploration, savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 6,
        title: 'Key Monastery, Chicham & Kunzum | Chandratal Arrival',
        description: '<ul><li>Post breakfast, bid adieu to your hosts in Kaza and drive towards Key Monastery. Spend quality time speaking to the monks or sip a cup of herbal tea in Key Monastery’s kitchen.</li><li>Explore the Kibber village and take some #InstaPerfect shots at Chicham Bridge - Asia’s highest suspension bridge connecting the peaceful Kibber village.</li><li>Enroute Chandratal, we will take a pit stop at Losar to grab a satisfying lunch and continue towards Kunzum La situated at 15,000ft approx. </li><li>After arriving at Chandratal, check in to our scenic campsite and experience the calmness of the Moon Lake. In the evening chill with your travel clan under the gaze of million stars and savour home-style cooked dinner and overnight stay in swiss camps.</li></ul>'
      },
      {
        day: 7,
        title: 'Drive from Chandratal to Manali | Depart For Delhi',
        description: '<ul><li>Wake up quite early in the morning and post breakfast drive towards Manali from Chandratal. Enroute Manali, we will take a pit stop for morning tea at the famous Chacha-Chachi Ka Dhaba or Chhatru.</li><li>Traverse from barren landscapes of Lahaul & Spiti to lush green vistas of Kullu Valley via Atal Tunnel.</li><li>After arriving in Manali, feel free to take a stroll around Old Manali cafes or The Mall Road (if time permits) by yourself and start-off your return journey to Delhi in the evening.</li></ul>'
      },
      {
        day: 8,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: AC Semi-Sleeper Bus (Delhi to Shimla & Manali to Delhi) and Force Traveler/Cab at all other times.',
      'Accommodation on Sharing Basis: Hotel/Homestays (Kalpa, Tabo & Kaza), Swiss Camps (Rakcham & Chandratal).',
      'Meals: Rakcham (Breakfast+Dinner), Kalpa (Breakfast+Dinner), Tabo (Breakfast+Dinner), Kaza (2 Dinners+2 Breakfasts), Chandratal (Breakfast+Dinner) (12 Meals total).',
      'Experienced and cool Trip Captain.',
      'Bonfire (if weather permits) & music only during the stay (Rakcham only) and local explorations.',
      'Driver allowances, toll taxes, parking, state taxes and permits.',
      'Oxygen cylinder and medical kit to handle extreme health problems.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements not in inclusions.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather, riots, roadblocks, etc.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'winter-spiti',
    title: 'Winter Spiti', // From HTML
    destination: 'Himachal',
    duration: '9 Days / 6 Nights', // Corrected from itinerary (Day 0-8)
    price: '₹18000', // From HTML (discounted triple price)
    originalPrice: '₹20000', // From HTML (triple price)
    discount: '₹2,000', // From HTML
    imageUrl: '/cloned_media/39542020240830061322.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/14918720200228132700.png',
      '/cloned_media/14752520200228132700.png',
      '/cloned_media/30308320200228132700.png',
      '/cloned_media/37839620200228132700.png',
      '/cloned_media/836220200228132700.png',
      '/cloned_media/38245420200228132700.png',
      '/cloned_media/12828020200228132700.png',
      '/cloned_media/14202220200228132700.png',
      '/cloned_media/20904120200228132700.png'
    ],
    overview: '<p>Close your eyes and imagine a world where time slows down and worries melt away amidst the magnificent peaks of serene hill stations. Picture yourself sipping tangy seabuckthorn tea overlooking the enchanting mountains, surrounded by the mind-blowing beauty of nature\'s embrace, our irresistible winter travel package beckons you  to indulge in these idyllic moments. Where each hillside path reveals a new wonder and every sunset paints the sky with hues of dreams. Embark on a beautiful journey with <b>Go4Explore</b>, where the price is light and memories are limitless, embrace the allure of <b>Spiti Valley road trip from Delhi</b>. Your mountain paradise awaits, Book your escape to ‘The Land of Lamas’ now and let the enchantment begin.</p><h2>About Winter Spiti Valley</h2><p>A <b>winter journey to Spiti Valley</b> also known as Cold Desert uncovers a pure Wonderland nestled in the heart of the Himalayas. Snow blankets the rugged terrain, transforming the landscape into a tranquil expanse of white. Despite the biting cold. This season provides dauntless travelers a  chance to experience Spiti in its most raw and authentic form, away from the summer crowds.</p><p>Spiti Valley is an extraordinary place of not only beauty but also a wealth of entertainment, unique experiences, history and culture, important traditions, friendships, local people and unique culture. Indo-Tibetan influence. The Spiti region in the northeastern part of Himachal Pradesh is known as the "Middle Country" because it is a land that separates Tibet and India and is very similar to each other in great harmony.</p><h3>Winter Climate in Spiti Valley</h3><p>Winter in Spiti Valley is personified by extremely cold temperatures and heavy snowfall. From November to February the region experiences harsh sub-zero temperatures, often dropping as low as -27°C (-16.6°F) or even colder... Daytime temperature may hover around 0°C (32°F) or slightly above...</p><h3>Best places to visit in Spiti Valley Winter Trip</h3><p><b>Komic:</b> Join Go4Explore for <a href="/trips/winter-spiti" style="color:blue;">Winter Spiti Valley adventure packages</a> and explore the world\'s mightiest village at an altitude of 18,000 feet...</p><p><b>Hikkim:</b> ...send your loved ones their picks from the world\'s highest post office in Hikkim...</p><p><b>Langza:</b> ...also known as the Fossil Village of Spiti Valley... The biggest attraction of Langza... is the huge statue of Lord Buddha overlooking the entire Spiti Valley.</p><p><b>Key monastery:</b> The oldest monastery in the Spiti Valley, the Key Monastery, is known for its architecture, which becomes more beautiful when covered with snow.</p><p><b>Tabo monastery:</b> ...oldest and most famous monastery built in 996 AD, its interior is decorated with beautiful paintings...</p><p><b>Dhankar monastery:</b> An important site of Buddhism, famous for the Vairocana statue...</p><p><b>Chicham Bridge:</b> ...Asia\'s highest bridge, at 13,596 feet high, connecting two charming villages (Chicham and Kibber).</p><h3>Top things to do in Winter Spiti Valley Trip</h3><p><b><a href="https://en.wikipedia.org/wiki/Monastery" style="color:blue;">The Monasteries</a>:</b> ...visit the temples in Spiti Valley as the crowds will be less.</p><p><b>Spotting a Snow Leopard:</b> ...watching snow leopards in Spiti Valley is a unique experience...</p><p><b>Taking part in Local Festivals:</b> Spiti Valley hosts many festivals that are held only during winter months.</p><p><b>Fossil Hunting:</b> ...The villages of Langza and Hikkim are so surrounded by fossils...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Shimla | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Shimla and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Drive from Shimla to Sarahan | Bhimakali Temple',
        description: '<ul><li>After arriving in Shimla, we will take a halt near Kufri or Narkanda for breakfast and soak in the much-needed #mountainvibes. Post breakfast, we will drive ahead to reach Sarahan.</li><li>After arriving in Sarahan, check in to our cozy homestay/hotel, freshen-up and have some leisure.</li><li>Quickly, we will head out to seek blessings at the sacred Bhimakali Temple - the local deity of Sarahan village. Feel free to take a stroll around this sleepy village also known as ‘Gateway to Kinnaur’.</li><li>In the evening, return back to your comfy abode, savour home-style cooked dinner and overnight stay in a homestay/hotel.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Sarahan to Chitkul | Explore Chitkul',
        description: '<ul><li>Wake up early in the morning and post breakfast, we will drive ahead from Sarahan to reach the Chitkul - the last Indian village before the Indo-Tibetan border.</li><li>After arriving in Chitkul, take a stroll around the village and visit Mathi Temple dedicated to the Goddess of the local people of Kinnaur. Treat your stomach with a satisfying plate of steamy momos or rajma chawal at ‘Hindustan Ka Akhri Dhaba’. What can be more magical than relaxing near the pristine Baspa River? A perfect location in the lap of majestic Himalayas to disconnect from the urban madness and connect with nature.</li><li>Post exploration, check in to our cozy homestay/hotel in Sangla, freshen-up and have some leisure. </li><li>Savour home-style cooked dinner and overnight stay in a homestay/hotel.</li></ul>'
      },
      {
        day: 3,
        title: 'Chitkul to Tabo | Khab Sangam, Nako & Gue | Tabo Arrival',
        description: '<ul><li>Wake up early in the morning and post breakfast, drive from Sangla to Tabo village - home to the oldest Buddhist monastery located in Spiti Valley. Get mesmerized by the shape-shifting landscapes of snowy mountains with every turn.</li><li>Witness the beautiful confluence of Spiti & Sutlej rivers at Khab Sangam. Enroute we will take a halt at the sleepy Nako village and grab a satisfying lunch.</li><li>After arriving in Tabo village, take a walk inside the Tabo Monastery and learn about the history of this Tibetan spiritual site also known as ‘Ajanta of Himalayas’. Interact with the Buddhist monks in the monastery or village locals of Tabo if you feel like.</li><li>Savour home-style cooked dinner and overnight stay in a homestay/hotel.</li></ul>'
      },
      {
        day: 4,
        title: 'Tabo to Kaza | Explore Dhankar, Langza, Komic & Hikkim',
        description: '<ul><li>Post breakfast, drive from Tabo to Kaza along the frozen Spiti river, for an action packed exploration of various monasteries & villages nestled in Spiti Valley.</li><li>Enroute Kaza, we will take a halt at Dhankar Village, interact with the Buddhist monks residing in cliff top Dhankar Monastery.</li><li>Visit Spiti’s gorgeous fossil village Langza and get clicked with the iconic statue of Medicine Buddha with your clan. Feel proud for making it to the World’s highest motorable village Komic and absorb in the jaw dropping vistas of snow-laden Himalayas. The day will come to end at Hikkim village known for its World’s highest post office.</li><li>After arriving in Kaza, check in to our cozy homestay, freshen-up and have some leisure. Savour home-style cooked dinner and overnight stay in a homestay.</li></ul>'
      },
      {
        day: 5,
        title: 'Key Monastery, Chicham & Kibber | Kaza Chill Scenes',
        description: '<ul><li>Wake to a peaceful mountain morning in your homely abode in Kaza offering stunning views of snowy mountains. Post breakfast, quickly head out to visit the biggest and most popular Buddhist monastery nestled in the gorgeous Spiti Valley - Key Monastery. Spend quality time speaking to the monks or sip a cup of herbal tea in Key Monastery’s kitchen.</li><li>Explore the Kibber village - home to snow leopard and various other wildlife species like Himalayan Ibex and Red Fox to name a few. Take some #InstaPerfect shots at Chicham Bridge - Asia’s highest suspension bridge connecting the peaceful Kibber village.</li><li>In the evening, return to your cozy rooms in Kaza and have some leisure. Savour home-style cooked dinner and overnight stay in a homestay.</li></ul>'
      },
      {
        day: 6,
        title: 'Drive from Kaza to Kalpa | Explore Kalpa',
        description: '<ul><li>Wake up early and post breakfast, bid adieu to your hosts in Kaza and the majestic Spiti Valley, and drive towards Kalpa.</li><li>Enroute Kalpa, we will take a short halt in Reckong Peo local market to grab a much-needed lunch.</li><li>Witness the magical views of the mighty Kinnaur Kailash range. Visit the famous Roghi (suicide-point) and if time permits take a stroll in the beautiful Kalpa village exploring monastery & temple.</li><li>After arriving in Kalpa, check in to our cozy hotel and have some leisure.</li><li>In the evening chill with your travel clan, savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 7,
        title: 'Drive from Kalpa to Shimla | Depart For Delhi',
        description: '<ul><li>Wake to a stunning view of the snow-covered Kinnaur Kailash range.</li><li>Post breakfast, check out from the property and drive from Kalpa to Shimla.</li><li>Enroute Shimla, we will take a halt to grab a satisfying lunch.</li><li>After arriving in Shimla, you can visit the popular Shimla Ridge and Christ Church (on your own, if time permits).</li><li>Start off your overnight journey from Shimla to Delhi and reach Delhi next morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      },
      {
        day: 8,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: AC Semi-Sleeper Bus (Delhi to Shimla & back) and Force Traveler/Cab at all other times.',
      '6 Nights Accommodation on Sharing Basis: Hotel (Sarahan & Kalpa), Hotel/Homestays (Sangla, Tabo & Kaza).',
      '12 Meals: Sarahan (Breakfast+Dinner), Sangla (Breakfast+Dinner), Tabo (Breakfast+Dinner), Kaza (2 Dinners+2 Breakfasts), Kalpa (Breakfast+Dinner).',
      'Experienced and cool Trip Captain.',
      'Local explorations as per itinerary.',
      'Driver allowances, toll taxes, parking, state taxes and permits.',
      'Oxygen cylinder and medical kit to handle extreme health problems.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements not in inclusions.',
      'At the time of stays, heater charges are extra and needs to be paid directly to the host.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather, riots, roadblocks, etc.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'sm-himachal-backpacking',
    title: 'SM Himachal Backpacking', // From HTML
    destination: 'Himachal',
    duration: '7 Days / 4 Nights', // Corrected from itinerary (Day 0-6)
    price: '₹17000', // From HTML (Quad price)
    // originalPrice: '', // No discount on base price
    // discount: '', // No discount on base price
    imageUrl: '/cloned_media/11759320250218141443.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/6735120250218141442.png',
      '/cloned_media/13506220250218141442.png',
      '/cloned_media/20809320250218141442.png',
      '/cloned_media/16763520250218141442.png',
      '/cloned_media/28729720250218141442.png',
      '/cloned_media/12868920250218141442.png'
    ],
    overview: '<h2>Summer Adventure: Group Packages for the Himachal Backpacking Tour of Manali, Kasol, and Jibhi</h2><p>Go4Explore offers the best Summer Himachal Backpacking Trip, catering to those who enjoy the outdoors and adventure. This summer backpacking journey from Delhi offers the ideal getaway into the snow-covered Himalayas, passing via the stunning scenery of <a href="https://go4explore.com/trips/manali-kasol-jibhi" target="_blank">Manali, Kasol, and Jibhi</a>.</p><p>Begin your <a href="https://go4explore.com/trips/manali-sissu-kasol" target="_blank">trip in Manali</a>, where you will see well-known sites including Mall Road, Hadimba Devi Temple, and the tranquil Sissu Village and Sissu Lake. Enjoy adventure activities in Solang Valley and take in the grandeur of Lahaul Valley by driving via the breathtaking Atal Tunnel.</p><p></p><p><a href="https://go4explore.com/trips/manali-kasol-kheerganga" target="_blank">Go on to Kasol</a>, a backpacker\'s paradise known for its scenic routes and relaxed vibe. Cross the Chalal Bridge and then unwind along the Parvati River. For a more spiritual experience, visit the Manikaran Sahib Gurudwara &amp; Shiva Temple, which is renowned for its tranquil surroundings and hot springs.</p><p>Set out to <a href="https://go4explore.com/trips/jibhi-tirthan-valley" target="_blank">discover Jibhi</a>, a hidden gem in the Himalayas. Hike to the ethereal Serolsar Lake, admire the vast Himalayan Viewpoint, and explore the beauty of Jibhi Waterfall. See the breathtaking summer vistas from the high-altitude <a href="https://go4explore.com/trips/road-trip-to-jibhi-jalori-pass" target="_blank">Jalori Pass</a> before seeking blessings at Budhi Nagin Temple.</p><p>This trip is made even more fascinating for thrill-seekers with activities like <a href="https://go4explore.com/trips/rishikesh-rafting-trip" target="_blank">river rafting</a>, trekking, and warm bonfires under the stars. This summer getaway will leave you with priceless memories, regardless of your preferences for adventure, peace, or cultural encounters.</p><p>This summer, pack your bags and join us on our <a href="https://go4explore.com/trips/himachal-backpacking-manali-kasol-jibhi" target="_blank">Himachal Backpacking Trip</a> with Go4Explore and discover Manali, Kasol, and Jibhi among other travelers who share your interests!</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Manali | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi - Majnu Ka Tilla (near Vidhan Sabha Metro Station) and meet your Trip Captain. </li><li>Start an overnight journey to Manali and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Manali Arrival | Local Exploration & Cafe Hopping',
        description: '<ul><li>After arriving in Manali, check-in to our comfy hotel, freshen up and have some leisure.</li><li>Post leisure, head out to explore the famous Hadimba Devi Temple situated amidst towering deodar trees. Take a walk into the woods at Van Vihar and treat yourself with mouthwatering dishes at various themed cafes in Old Manali. In the evening, visit Manali’s Mall Road and spend time there by enjoying street food and shopping souvenirs.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive to Sissu via Atal Tunnel & Solang Valley',
        description: '<ul><li>Wake up to a beautiful mountain morning and post breakfast, drive from Manali to Lahaul Valley via the newly opened Atal Tunnel. Witness a sudden transformation in the landscape once you cross from Kullu to Lahaul region. Visit Sissu village and Sissu Lake (if weather permits).</li><li>While returning back to Manali, take a stop at Solang Valley and indulge in various adventure activities over there.</li><li>Savour delightful dinner and overnight stay in a hotel in Manali.</li></ul>'
      },
      {
        day: 3,
        title: 'Manali to Kasol | Kasol Arrival & Cafe Hopping',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel and drive towards Kasol from Manali.</li><li>Enroute Kasol, you can indulge in adventure activities like paragliding at Kullu (by your own).</li><li>After arriving in Kasol, check-in to our hotel/campsite & freshen-up.</li><li>Post refreshment, we will head out to explore the streets of Kasol, visit Chalal bridge and chill along Parvati riverside. Soak in the hippie vibes of Kasol, go for cafe hopping and treat your stomach with mouth-watering local dishes.</li><li>Savour home-style cooked dinner and overnight stay in a hotel/campsite in Kasol.</li></ul>'
      },
      {
        day: 4,
        title: 'Manikaran Hot Springs | Jibhi Arrival',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the hotel/campsite and say goodbye to our lovely host.</li><li>Drive towards Manikaran and visit the famous holy hot water springs at Manikaran Sahib Gurudwara & Shiva Temple.</li><li>Enroute Jibhi, you can indulge in river rafting adventure activity.</li><li>After arriving in Jibhi, check-in to our cozy homestay/hotel and quickly head out to visit the beautiful Jibhi waterfall and soak in the soothing surroundings of the place.</li><li>Savour home-style cooked dinner and overnight stay in a homestay/hotel in Jibhi/Banjar.</li></ul>'
      },
      {
        day: 5,
        title: 'Trek to Serolsar Lake | Depart for Delhi',
        description: '<ul><li>Wake up early in the morning and post breakfast, check out from the homestay/hotel and drive to Jalori Pass situated at 10,800 feet.</li><li>Hike to 360° Himalayan view point and get mesmerized by the stunning landscape of snow-clad Himalayas (if weather permits).</li><li>Trek further to the beautiful Serolsar Lake surrounded by lush forest cover and pay homage at Budhi Nagin Temple (if weather permits).</li><li>Post lunch, gather for an #InstaPerfect group picture, trek back to Jalori Pass and drive back to Aut.</li><li>In the evening, start-off your overnight journey to Delhi from Jibhi.</li></ul>'
      },
      {
        day: 6,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation from Delhi to Delhi: AC Semi-Sleeper Volvo Bus or Tempo Traveler, Tempo Traveler/Cab at all other times.',
      '4 Nights Accommodation on Sharing Basis: 2 Nights in Hotel (Manali), 1 Night in Hotel/Campsite (Kasol) & 1 Night in Hotel/Homestay (Jibhi/Banjar).',
      '8 Meals: Manali (2 Breakfasts+2 Dinners), Kasol (Breakfast+Dinner) Jibhi (Breakfast+Dinner), starting from Dinner on Day 1 to Breakfast on Day 5.',
      'Bonfire (if weather permits) & music only on any 3 Nights and local explorations as per itinerary.',
      'Experienced and cool Trip Captain/Trek Guide.',
      'River Rafting Adventure Activity on Day 4.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals and stay arrangements apart from the ones mentioned under inclusions as per the itinerary.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
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
    title: 'Kashmir Backpacking', // From HTML
    destination: 'Kashmir',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹23000', // From HTML (Triple sharing price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/22506020241120124643.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/13553920240731114150.png',
      '/cloned_media/26774120240731114150.png',
      '/cloned_media/20382520240731114150.png',
      '/cloned_media/3350720240731114151.png',
      '/cloned_media/16027620240731114151.png',
      '/cloned_media/8507620240731114151.png'
    ],
    overview: '<p>Embark on an unforgettable journey to the mesmerizing valleys of Kashmir often known as \'Heaven on the Earth\', with like-minded travelers. From adventure seekers,&nbsp;cultural exploration to nature lovers,&nbsp;discover the charismatic beauty of Kashmir on this stunning backpacking group trip,&nbsp;exploring lush valleys, snow-peaked mountains, pristine lakes, and warm Kashmiri hospitality &amp; local culture. From traversing through lush green meadows to experiencing the local Kashmiri lifestyle, this trip offers a perfect blend of excitement and relaxation.&nbsp;Surrounded by the majestic Himalayas,&nbsp;glide through the serene waters of Srinagar\'s iconic Dal Lake on a traditional Shikara ride, a tranquil experience offering stunning views of floating gardens, vibrant &amp; cozy houseboats, and local markets.</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Delhi to Jammu | Overnight Journey',
        description: '<ul><li>Assemble at boarding point in Delhi and meet your Trip Captain. </li><li>Start an overnight journey to Jammu and socialize with your co-travellers.</li></ul>'
      },
      {
        day: 1,
        title: 'Jammu to Srinagar | Srinagar Arrival',
        description: '<ul><li>After arriving in Jammu, start your journey towards Srinagar.</li><li>Reach Srinagar, check-in to your cozy hotel and freshen-up.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up and post breakfast, begin your drive from Srinagar for full-day excursion of Gulmarg (World’s highest green golf course).</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg and get mesmerized by the stunning landscapes of Nanga Parvat from Gulmarg to Khilanmarg.</li><li>In the evening, post exploring Gulmarg, return to your hotel and have leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 3,
        title: 'Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up and post breakfast, begin your drive from Srinagar for full-day excursion of Sonmarg.</li><li>Enjoy the mesmerising Himalayan views of Sonmarg, or you may take a pony ride to Thajiwas Glacier where snow remains round the year.</li><li>In the evening, post exploring Sonmarg, return to your hotel and have leisure. </li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Srinagar to Pahalgam | Explore Pahalgam',
        description: '<ul><li>Wake up and post breakfast, check-out from the hotel and begin your drive from Srinagar to Pahalgam known as the \'valley of shepherds’.</li><li>Enroute Pahalgam, we’ll visit Pampore, Avantipura and the village of Bijbehara.</li><li>In Pahalgam, head out to explore the gorgeous Betab Valley, Chandanwari and Aru Valley.</li><li>In the evening, post exploring Pahalgam, check-in to our comfy hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 5,
        title: 'Srinagar Local Explorations | The Dal Lake Diaries',
        description: '<ul><li>Wake up and post breakfast, check-out from the hotel and begin your drive from Pahalgam to Srinagar.</li><li>After arriving in Srinagar, head out for local explorations of major attractions such as Hazaratbal Mosque, Nishat Garden, Chashm-e-Shahi &amp; Shalimar Garden. Visit the popular Shankaracharya Temple and witness the beautiful view of Kashmir Valley as seen from the hill-top.</li><li>In the evening, check-in to our Dal Lake Houseboat, treat yourself with jaw dropping sunset scenes over the Dal Lake and feel the Kashmiriyat during the beautiful Shikara ride in Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat.</li></ul>'
      },
      {
        day: 6,
        title: 'Goodbye Kashmir | Depart for Jammu',
        description: '<ul><li>In the morning, post breakfast check-out from our property and say goodbye to your hosts in Srinagar and leave for Delhi via Jammu.</li><li>In the evening, reach Jammu and start your overnight journey from Jammu to Delhi.</li></ul>'
      },
      {
        day: 7,
        title: 'Delhi Arrival | Trip Ends',
        description: '<ul><li>Reach Delhi early morning with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: Comfortable AC Sleeper/Deluxe Bus (Delhi to Jammu & back) and Tempo Traveler/Cab (depending upon group size) at all other times (Jammu to Jammu).',
      '5 Nights Accommodation on sharing basis: Srinagar (1 Night in Houseboat & 3 Nights in Hotel) and Pahalgam (1 Night in Hotel).',
      '10 Buffet Meals: Srinagar (4 Dinners + 4 Breakfasts) and Pahalgam (1 Dinner + 1 Breakfast).',
      'Complimentary Shikara ride in Dal Lake (1 Hour).',
      'Experienced Trip Captain/Local Assistance.',
      'Local explorations as per itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Srinagar Airport pickup and drop facility.',
      'Expenses for Gulmarg gondola ride (cable car) and Sonmarg zero point cab.',
      'Cost of snow-chained or 4*4 vehicle (if required for Sonamarg, Gulmarg or Drung) due to heavy snowfall.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'kashmir-backpacking-winter-edition',
    title: 'Kashmir Backpacking Winter Edition', // From HTML
    destination: 'Kashmir',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹19999', // From HTML (Starting price, Triple Sharing)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/39805720230316074814.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/29154720230316074814.png'
    ],
    overview: '<h2>About Kashmir Backpacking Winter Edition Tour Package</h2><p>Get ready to be enchanted with our Kashmir Backpacking Winter Edition Tour Package in the winter wonderland of Kashmir! Are you ready to kick your everyday, mundane routine and find yourself in the middle of a fairytale-like snow-draped paradise? Just imagine being in the middle of snowy landscapes while surrounded by mighty peaks, snow-laden and blending into the warm hospitality of the Kashmiri culture. This isn\'t a holiday; it\'s an adventure that awakens your senses and brings back moments that stay with you forever.</p><p>Our Kashmir Winter Package is an all-exciting expedition to the most stunning locations of Kashmir during their most magical season. From staying in a cozy houseboat, to the partially frozen Dal Lake, Srinagar sets the tone for a soulful winter exploration where one watches the world go by in a serene and misty setting. The steaming cups of Kahwa tea, complemented by the view of frosted Chinars, hail your wake-up call with all its heart. Proceed to Gulmarg, the skiing paradise of Asia, where snow as soft as flour and world class slopes await you. Be an experienced skier or just going for the first time; our guides are there to make every moment of your stay on the slopes.</p><p>But this package is much more than that. Imagine sledding down the snow-laden meadows of Pahalgam, getting an adrenaline-pumping ride on a snow-paradise in Sonamarg, or climbing up to frozen waterfalls that glisten like diamonds in the winter sun. Feel the joy of creating a snowman at the foot of the Himalayas or enjoy friendly snowball fights with breathtaking mountain vistas for a backdrop.</p><p>Wind up the day with a bonfire, savoring traditional Kashmiri Wazwan food and listening to folk tales under the star-studded sky. This <a href="https://go4explore.com/trips/kashmir-backpacking-winter-edition" style="color:blue;">Kashmir Backpacking Winter Edition</a> Tour Package doesn\'t only promise a view of Kashmir but makes one feel its beats, taste its essence, and soak into its winter enchantment. So, are you ready to trade your winter blues for Kashmir\'s winter hues? Pack warm clothes with an adventurous spirit, unforgettable winter wonderland beckons!</p><h3>Best Places to Visit in Kashmir</h3><p><b>Dal Lake:</b> Popularly known for its houseboats and floating gardens...</p><p><b>Nigeen Lake:</b> It is often referred to as the \'Jewel in the crown of Kashmir\'...</p><p><b>Shankaracharya Temple:</b> This old temple stands on the crest of a hill and provides a panoramic view of Srinagar...</p><p><b>Hazratbal Shrine:</b> This shrine of pristine white marble enshrines what is said to be the hair of the Prophet Muhammad...</p><p><b>Shalimar Bagh:</b> This is the biggest Mughal garden in Kashmir...</p><p><b>Nishat Bagh:</b> Known as the \'Garden of Bliss,\' Nishat Bagh provides a beautiful view of Dal Lake...</p><p><b>Pari Mahal:</b> ...originally a Buddhist monastery, and now Pari Mahal, or \'Fairy Palace\'...</p><p><b>Tulip Garden:</b> ...larger than Asia\'s Tulip Garden, the region blossoms in spring...</p><p><b>Hari Parbat Fort:</b> This hilltop fort offers a bird\'s eye view of Srinagar...</p><p><b>Lal Chowk:</b> The city center of Srinagar, Lal Chowk is bustling with activity...</p><p><b>Alpather Lake:</b> Situated at a high altitude near Gulmarg, Alpather Lake remains frozen until early summer...</p><p><b>Gulmarg Biosphere Reserve:</b> It is a nature lover\'s paradise...</p><p><b>Gulmarg Golf Course:</b> It is considered one of the highest golf courses in the world...</p><p><b>Apharwat Peak:</b> Apharwat Peak is the last point of Gulmarg Gondola...</p><p><b>Betaab Valley:</b> Named after the shooting of a Bollywood film here, this beautiful landscape...</p><p><b>Aru Valley:</b> This charmed village is around 12 km from Pahalgam...</p><p><b>Chandanwari:</b> The beginning point of the Amarnath Yatra...</p><p><b>Baisaran:</b> Often called \'Mini Switzerland\', Baisaran is a lush green meadow...</p><h3>Top Things to do in Kashmir</h3><p><b>Skiing on world-class slopes:</b> Glide down pristine slopes in Gulmarg...</p><p><b>Snowboarding in powder snow:</b> Experience the thrill of snowboarding in Gulmarg...</p><p><b>Taking a scenic gondola ride:</b> Ascend to Apharwat Peak...</p><p><b>Ice skating on frozen lakes:</b> Glide across naturally frozen lakes in Srinagar...</p><p><b>Enjoying a cozy shikara ride:</b> Wrapped in warm blankets, take a serene shikara ride on Dal Lake...</p><p><b>Riding snowmobiles across snowy landscapes:</b> Zoom across snow-covered terrain...</p><p><b>Winter trekking through pristine snow:</b> Embark on challenging winter treks...</p><p><b>Sledding and tobogganing down gentle slopes:</b> Enjoy family-friendly fun...</p><p><b>Indulging in warm Kashmiri winter cuisine:</b> Savor hearty Kashmiri dishes...</p><p><b>Sipping Kahwa by a warm fire:</b> Enjoy Kashmir\'s traditional saffron tea...</p><h3>How To Reach Kashmir?</h3><p><b>By Air:</b> The most convenient way... Sheikh ul-Alam International Airport at Srinagar.</p><p><b>By Road:</b> ...via the Jammu-Srinagar National Highway NH44.</p><p><b>By Train:</b> The nearest railway station is Jammu Tawi.</p><h3>Best Time to Visit Kashmir</h3><p>The best time to visit Kashmir in winter would be from mid-December to mid-February...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 0,
        title: 'Srinagar Arrival | The Dal Lake Diaries',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport on a sharing basis (before 12pm only).</li><li>Drive towards Dal Lake, check-in to your cozy houseboat and freshen-up.</li><li>Quickly head out for local exploration in Srinagar - the famous Mughal Gardens including the Nishat Bagh (the garden of pleasure) and the Shalimar Bagh (abode of love), situated on the banks of serene Dal Lake.</li><li>In the evening, treat yourself with jaw dropping sunset scenes over the Dal Lake and feel the Kashmiriyat during the beautiful Shikara ride in Dal.</li><li>In the evening, return to your houseboat in Dal Lake. Savour home-style cooked dinner and overnight stay in a houseboat.</li></ul>'
      },
      {
        day: 1,
        title: 'Srinagar To Gulmarg | Gondola Ride',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>After arriving in Gulmarg, check-in to our comfy hotel and have some leisure.</li><li>Experience Asia’s highest Gondola ride in Gulmarg and get mesmerized by the stunning landscapes from Gulmarg to Kongdoori and Marry Shoulder.</li><li>In the evening, return to your hotel in Gulmarg. Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 2,
        title: 'Gulmarg To Pahalgam | Drung Waterfall',
        description: '<ul><li>Wake up to a peaceful mountain morning and post a delightful breakfast, begin your drive from Srinagar towards Pahalgam via Drung waterfall.</li><li>Take a halt at the majestic Drung Waterfall that remains frozen during winters and thus makes an interesting spot while traveling to Pahalgam.</li><li>After arriving in Pahalgam, check-in to our comfy hotel and have some leisure.</li><li>Feel free to stroll around your staycation and soak in Kashmir’s natural charm.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 3,
        title: 'Explore Pahalgam | Aru & Betab Valley',
        description: '<ul><li>Wake up to a peaceful mountain morning and post a delightful breakfast, head out to explore Pahalgam.</li><li>Explore the gorgeous Betab Valley, Chandanwari and Aru Valley nestled in Pahalgam.</li><li>Get awestruck by the beautiful views of mighty snow-clad mountain peaks and indulge in various adventure activities (on your own).</li><li>In the evening, arrive back in Srinagar and check-in to our comfy hotel.</li><li>Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 4,
        title: 'Explore Srinagar | Mosques, Markets & More',
        description: '<ul><li>Wake up early and post breakfast, head out to explore Srinagar.</li><li>Visit the popular Shankaracharya Temple and witness the beautiful view of Kashmir Valley as seen from Takht-e-Suleiman hill.</li><li>Visit other major attractions in Srinagar such as Pari Mahal, the holy Hazaratbal Shrine (the holiest Muslim shrine and mosque in Kashmir) and Jama Masjid to name a few.</li><li>In the evening, spend some time near Dal Lake and try out the authentic flavours of Kashmiri Wazwan in the local market or simply go for cafe hopping (on your own).</li><li>In the evening, return to your hotel in Srinagar. Savour home-style cooked dinner and overnight stay in a hotel.</li></ul>'
      },
      {
        day: 5,
        title: 'Goodbye Kashmir | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Srinagar and leave for the airport. You’ll be dropped at Srinagar airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: Srinagar to Srinagar all local travel in Force Traveler/SUVs/Sedan or similar.',
      '5 Nights Accommodation on Triple/Dual sharing basis: Srinagar (1 night in houseboat & 2 nights in hotel), Gulmarg (1 night in hotel) and Pahalgam (1 night in hotel).',
      '10 Meals: Srinagar (3 Dinners + 3 Breakfasts), Gulmarg (1 Dinner + 1 Breakfast) and Pahalgam (1 Dinners + 1 Breakfasts).',
      'Gondola ride - Phase 1 in Gulmarg and Shikara ride in Srinagar.',
      'Airport pickup and drop facility on a sharing basis.',
      'Experienced and cool Trip Captain.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.',
      'Medical kit to handle emergency conditions.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'kashmir-6-days-5-nights',
    title: 'Kashmir 6 Days 5 Nights', // From HTML
    destination: 'Kashmir',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹19999', // From HTML (Starting price, Triple sharing)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/28690420220120075604.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/13134620220120075604.png',
      '/cloned_media/14022320220120075604.png',
      '/cloned_media/28330620220120075604.png',
      '/cloned_media/6451820220120075604.png',
      '/cloned_media/7636020220120075604.png',
      '/cloned_media/15822420220120075604.png',
      '/cloned_media/12616120220120075604.png'
    ],
    overview: '<h2>About Kashmir Tour Package 5 Nights 6 Days</h2><p>Would you like to spend a few days in one of the most beautiful places in the world? A place where you can witness an array of natural wonders, immerse in diverse cultures, and feel the care of the local people? Look no further than our Kashmir 6D5N Tour Package. Then, travelers, what are you waiting for? Book your <a href="/trip/kashmir" style="color:blue;">Kashmir Tour Package</a> with Go4Explore and enjoy this incredible journey that will take you to the heart of the Himalayas, where you\'ll experience a true paradise on Earth.</p><p>There is nothing more beautiful than nature, and that is why the fabulous state of Kashmir is attracting travelers with its unique charm. Imagine the mountains with snow clad summits piercing the sky and so many crystal clear lakes reflecting all that is there to see. This is just the start of the wonderful experience you are in for in this one of a kind place we call a paradise.</p><p>Begin your trip at Srinagar, summer capital of the state departments, while in the Shikara boat ride all through the Dal Lake you will get fascinated with the unique floating garden and the lovely floating houses. In the continuation of the tour head to the special Mughal Gardens which speak of Artisans and Architects mastery. Gulmarg, the ‘meadow of Flowers’ is a perfect hub for adventurous souls that begins with cable car riding and skiing that are framed with rich alpine scenery.</p><p>Another area that can be visited is Sonamarg, and the most incredible natural sight is Thajiwas Glacier which will definitely have your breath taken away. So, the fans of Robinson will definitely like Pahalgam, also called the ‘Valley of Shepherds’, as it offers beautiful meadows to travel, cold streams to swim, and wonderful trekking and horse-riding programs. So taste mouth-watering Kashmiri food during your tour that is famous for its rich taste and exotic spices; and also buy precious souvenirs like pashmina shawls and carved wooden articles from the market.</p><p>We have expert guides, sumptuous lodging, and smooth transport to ensure this is one of the most fulfilling trips that will take you through the stunning beauty of nature that is impossible to qualify with mere words and warm hospitality that is inherent in the people of the region.</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive at Srinagar',
        description: '<ul><li>Upon arrival in the Srinagar city, our taxi will take you for a drive through the New Srinagar city, crossing Abdullah bridge which connects the banks of the Jhelum river.</li><li>Go for a sightseeing tour which includes the world-famous Mughal gardens including Shalimar Bagh, Nishat Bagh, Chashmashahi, and Parimahal.back to the hotel.</li><li>Savour home-style cooked dinner and overnight stay.</li></ul>'
      },
      {
        day: 2,
        title: 'Visit Gulmarg',
        description: '<ul><li>Post breakfast, proceed towards Gulmarg. Enroute Gulmarg, you will come across the beautiful Tangmarg town. Go on a scenic drive of 14 km to Gulmarg.</li><li>Arrive at Gulmarg in the afternoon and check-in at the hotel.</li><li>Later, go for a Gondola ride in the World’s second and Asia’s highest cable car.</li><li>In the evening, drive back to Srinagar and transfer to a hotel in Srinagar.</li><li>Savour home-style cooked dinner and overnight stay.</li></ul>'
      },
      {
        day: 3,
        title: 'Srinagar to Sonamarg and back to Srinagar',
        description: '<ul><li>Post breakfast, leave for a day excursion to Sonamarg. On the way, you will come across many beautiful spots like Kangan, Mammar, and Gagangir. Once you reach Sonamarg, take a walk or a horse ride to Thajiwas glacier which is covered with snow throughout the year. After returning, visit the small town market in Sonamarg city.</li><li>In the evening, drive back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay</li></ul>'
      },
      {
        day: 4,
        title: 'Srinagar to Pahalgam',
        description: '<ul><li>Post breakfast, drive to Pahalgam also known as the ‘Valley of Shepherds’ or ‘trekkers paradise’ via Pampore, Avantipura, and Bijbehara village which is popular as the breadbasket of Kashmir.</li><li>Drive through the scenic roads parallel to the Lidder river flowing from the opposite direction.</li><li>After reaching Pahalgam, check-in to the hotel and have leisure.</li><li>Visit the famous Aru valley and betaab valley.</li><li>Savour home-style cooked dinner and overnight stay.</li></ul>'
      },
      {
        day: 5,
        title: 'Pahalgam to Srinagar',
        description: '<ul><li>Post breakfast, check out from the hotel in Pahalgam and drive to Srinagar.</li><li>Check in to the houseboat. Indulge in the Shikara ride in the world-famous Dal Lake.</li><li>In the evening, go shopping in the handicraft market.</li><li>Savour home-style cooked dinner and overnight stay.</li></ul>'
      },
      {
        day: 6,
        title: 'Back to Home',
        description: '<ul><li>Post breakfast, transfer to Srinagar airport to take your flight back to your home with memorable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation: Srinagar to Srinagar',
      'Accommodation on Sharing Basis: Leisure Hotels',
      'Experienced and cool driver.',
      'Explorations and activities.',
      'Daily Meals: Breakfast and Dinner',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Travel Insurance, items of a personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'GST (5%) is applicable extra.',
      'Anything which is not mentioned in the above inclusions.'
    ],
  },
  {
    slug: 'kashmir-family-special',
    title: 'Kashmir Family Special', // From HTML
    destination: 'Kashmir',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹19000', // From HTML (Starting price, Double Occupancy)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/28940120240911061449.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/1639220240910112727.png',
      '/cloned_media/10749220240910112727.png',
      '/cloned_media/9400720240910112727.png',
      '/cloned_media/28708120240910112727.png',
      '/cloned_media/12343320240910112727.png',
      '/cloned_media/33003020240910112727.png'
    ],
    overview: '<h2>About Kashmir Tour Package 5 Nights 6 Days</h2><p>Would you like to spend a few days in one of the most beautiful places in the world? A place where you can witness an array of natural wonders, immerse in diverse cultures, and feel the care of the local people? Look no further than our Kashmir Tour Package. Book your <a href="/trip/kashmir" style="color:blue;">Kashmir Tour Package</a> with Go4Explore and enjoy this incredible journey that will take you to the heart of the Himalayas, where you\'ll experience a true paradise on Earth.</p><p>Begin your trip at Srinagar, summer capital... while in the Shikara boat ride all through the Dal Lake you will get fascinated with the unique floating garden and the lovely floating houses. ...Gulmarg, the ‘meadow of Flowers’ is a perfect hub for adventurous souls... Another area that can be visited is Sonamarg... Pahalgam, also called the ‘Valley of Shepherds’, as it offers beautiful meadows to travel...</p><h3>Places to Visit in Kashmir 6 Days Trip</h3><ul><li><strong>Dal Lake:</strong> The city’s crown jewel...</li><li><strong>Mughal Gardens:</strong> The elegance of the Mughal Gardens...</li><li><strong>Gulmarg:</strong> Renowned as the ‘Meadow of Flowers,’...</li><li><strong>Pahalgam:</strong> ...referred to as ‘Valley of Shepherds’...</li><li><strong>Sonamarg:</strong> ...known as the ‘Meadow of Gold’...</li><li><strong>Aru Valley:</strong> The Aru Valley near Pahalgam...</li><li><strong>Betaab Valley:</strong> ...named after the Bollywood movie ‘Betaab’...</li></ul><h3>Things to do in 6 Days Kashmir Trip</h3><ul><li><strong>Shikara Ride on Dal Lake:</strong> ...trademark of Kashmir is the ride in the shikara boat...</li><li><strong>Explore Mughal Gardens:</strong> ...Shalimar Garden, Nishat Garden, and Chashme Shahi Garden...</li><li><strong>Skiing in Gulmarg:</strong> ...one of the best skiing terrains in the world...</li><li><strong>Shop for Kashmiri Handicrafts:</strong> ...shopper’s paradise... Pashmina shawls...</li><li><strong>Experience Kashmiri Cuisine:</strong> ...exotic Kashmiri dishes...</li></ul>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar | Local Sightseeing',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport and drive towards your accommodation.</li><li>Check-in to your cozy houseboat, freshen-up and have some leisure.</li><li>Afternoon leave for a local sightseeing tour of Mughal Gardens visiting - Cheshmashahi (the royal spring), Nishat (The Garden of pleasure), and Shalimar (The Abode of Love).</li><li>In the evening, enjoy a beautiful Shikara ride in Srinagar’s Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Srinagar.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>The drive past colorful villages and rice fields, gives you an insight of the rich cultural past of Kashmir.</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg (on your own) and get mesmerized by the stunning landscapes from Gulmarg to Kungdoor and Marry Shoulder.</li><li>In the evening, return back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Sonmarg (Golden Meadow).</li><li>Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg acts as the base for some interesting treks to the high altitude Himalayan Lakes.</li><li>Enjoy horse riding upto Thajiwas glacier and sledge riding on snow (at your own cost).</li><li>In the evening, return back to Srinagar. </li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Srinagar to Pahalgam | Explore Pahalgam',
        description: '<ul><li>Wake up early and post breakfast, drive from Srinagar to Pahalgam known as the \'valley of shepherds’.</li><li>Decorated with enchanting natural beauty, Pahalgam is nestled at the confluence of the streams flowing from river Lidder and Sheshnag Lake.</li><li>Enroute visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu and built by King Awantivarma. </li><li>Today you can explore the beautiful Kashmir Valley, Baisaran and waterfall (by your own expense) or Betaab Valley, Chandanwari and Aru Valley (by hiring a car on your own expense).</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 5,
        title: 'Drive from Pahalgam to Srinagar | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Pahalgam and leave for the airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'All Transportation on Private Basis as per itinerary.',
      '8 Meals: 4 Breakfasts & 4 Dinners, starting from Dinner on Day 1 till Breakfast on Day 5.',
      '4 Nights Accommodation as per Double Sharing: Houseboat in Srinagar and Hotel in Pahalgam.',
      'Complimentary Shikara Ride over Dal Lake.',
      'Pick-up and Drop facility from as per the itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Chained vehicle from Tangmarg to Gulmarg.',
      'Visit to Ganderbal and Thajiwas Glacier.',
      'Cable Car/Pony Ride in Gulmarg, Pahalgam & Sonamarg.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, watersports or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'kashmir-family-special',
    title: 'Jannat-e-Kashmir 4N5D', // From HTML
    destination: 'Kashmir',
    duration: '5 Days 4 Nights', // From HTML
    price: '₹19000', // From HTML (Double Occupancy price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/16958320240720114616.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/1639220240910112727.png',
      '/cloned_media/10749220240910112727.png',
      '/cloned_media/9400720240910112727.png',
      '/cloned_media/28708120240910112727.png',
      '/cloned_media/12343320240910112727.png',
      '/cloned_media/33003020240910112727.png'
    ],
    overview: 'A 5-day tour specially designed for families, with comfortable stays and easy-paced sightseeing in Srinagar and Gulmarg.', // Overview from user slug (HTML was null)
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar | Local Sightseeing',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport and drive towards your accommodation.</li><li>Check-in to your cozy houseboat, freshen-up and have some leisure.</li><li>Afternoon leave for a local sightseeing tour of Mughal Gardens visiting - Cheshmashahi (the royal spring), Nishat (The Garden of pleasure), and Shalimar (The Abode of Love).</li><li>In the evening, enjoy a beautiful Shikara ride in Srinagar’s Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Srinagar.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>The drive past colorful villages and rice fields, gives you an insight of the rich cultural past of Kashmir.</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg (on your own) and get mesmerized by the stunning landscapes from Gulmarg to Kungdoor and Marry Shoulder.</li><li>In the evening, return back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Sonmarg (Golden Meadow).</li><li>Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg acts as the base for some interesting treks to the high altitude Himalayan Lakes.</li><li>Enjoy horse riding upto Thajiwas glacier and sledge riding on snow (at your own cost).</li><li>In the evening, return back to Srinagar. </li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Srinagar to Pahalgam | Explore Pahalgam',
        description: '<ul><li>Wake up early and post breakfast, drive from Srinagar to Pahalgam known as the \'valley of shepherds’.</li><li>Decorated with enchanting natural beauty, Pahalgam is nestled at the confluence of the streams flowing from river Lidder and Sheshnag Lake.</li><li>Enroute visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu and built by King Awantivarma. </li><li>Today you can explore the beautiful Kashmir Valley, Baisaran and waterfall (by your own expense) or Betaab Valley, Chandanwari and Aru Valley (by hiring a car on your own expense).</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 5,
        title: 'Drive from Pahalgam to Srinagar | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Pahalgam and leave for the airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'All Transportation on Private Basis as per itinerary.',
      '8 Meals: 4 Breakfasts & 4 Dinners, starting from Dinner on Day 1 till Breakfast on Day 5.',
      '4 Nights Accommodation as per Double Sharing: Hotel/Houseboat in Srinagar and Hotel in Pahalgam.',
      'Complimentary Shikara Ride over Dal Lake.',
      'Pick-up and Drop facility from as per the itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Chained vehicle from Tangmarg to Gulmarg.',
      'Visit to Ganderbal and Thajiwas Glacier.',
      'Cable Car/Pony Ride in Gulmarg, Pahalgam & Sonamarg.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, watersports or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'kashmir-honeymoon-special',
    title: 'Kashmir Honeymoon Special', // From HTML
    destination: 'Kashmir',
    duration: '8 Days 7 Nights', // From HTML
    price: '₹32700', // From HTML (Starting price, Double Occupancy)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/40680720240911061608.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/2241320240910132706.png',
      '/cloned_media/33133420240910132706.png',
      '/cloned_media/26383420240910132706.png',
      '/cloned_media/16906920240910132706.png',
      '/cloned_media/5502920240910132706.png'
    ],
    overview: 'An 8-day romantic honeymoon special in Kashmir, with leisurely stays in Srinagar, Gulmarg, and Pahalgam.', // From user slug (HTML overview was null)
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar | Local Sightseeing',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport and drive towards your accommodation.</li><li>Check-in to your cozy hotel, freshen-up and have some leisure.</li><li>Afternoon leave for a local sightseeing tour of Mughal Gardens visiting - Cheshmashahi (the royal spring), Nishat (The Garden of pleasure), and Shalimar (The Abode of Love).</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Srinagar to Doodhpathri | Explore Doodhpathri',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Doodhpathri, known as the Valley of Milk, surrounded by the gorgeous Pir Panjal Range.</li><li>Explore this alpine valley decorated with stunning meadows, towering tress and snow clad mountains in the backdrop. You can indulge in various activities and local sightseeing of Doodhpathri through pony (on your own) or roam around the valley and interact with the locals.</li><li>In the evening, return back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>The drive past colorful villages and rice fields, gives you an insight of the rich cultural past of Kashmir.</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg (on your own) and get mesmerized by the stunning landscapes from Gulmarg to Kungdoor and Marry Shoulder.</li><li>In the evening, check-in to the hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Gulmarg.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Gulmarg to Pahalgam | Pahalgam Arrival',
        description: '<ul><li>Wake up early and post breakfast, drive from Gulmarg to Pahalgam known as the \'valley of shepherds’.</li><li>Decorated with enchanting natural beauty, Pahalgam is nestled at the confluence of the streams flowing from river Lidder and Sheshnag Lake.</li><li>Enroute visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu and built by King Awantivarma. </li><li>After arriving in Pahalgam, check-in to our hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 5,
        title: 'Pahalgam Local Sightseeing',
        description: '<ul><li>Wake up early and post breakfast, head out for local exploration of Pahalgam.</li><li>We’ll visit the scenic and rocky valleys of Chandanwadi, the astounding Snow Point which is situated around 14 kms from Pahalgam and enjoy a pony ride (on your own).</li><li>Drive back to Pahalgam and post some leisure, take a walk through the dense pine forest alongside the pristine Lidder River and extend your Pahalgam experience further, soaking in the stunning natural beauty of Kashmir.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 6,
        title: 'Drive from Pahalgam to Srinagar | Dal Lake Shikara Ride',
        description: '<ul><li>Wake up early and post breakfast, drive from Pahalgam to Srinagar and check-in the houseboat in Dal Lake. </li><li>In the evening, enjoy a beautiful Shikara ride in Srinagar’s Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Dal Lake in Srinagar.</li></ul>'
      },
      {
        day: 7,
        title: 'Drive from Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Sonmarg (Golden Meadow).</li><li>Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg acts as the base for some interesting treks to the high altitude Himalayan Lakes.</li><li>Enjoy horse riding upto Thajiwas glacier and sledge riding on snow (at your own cost).</li><li>In the evening, return back to Srinagar. </li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Srinagar.</li></ul>'
      },
      {
        day: 8,
        title: 'Srinagar Departure | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Srinagar and leave for the airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'All Transportation on Private Basis as per itinerary.',
      '14 Meals: 7 Breakfasts & 7 Dinners, starting from Dinner on Day 1 till Breakfast on Day 8.',
      '7 Nights Accommodation as per Double Sharing: Hotel & Houseboat in Srinagar, Hotel in Pahalgam & Hotel in Gulmarg.',
      'Complimentary Shikara Ride over Dal Lake.',
      'Pick-up and Drop facility from as per the itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Chained vehicle from Tangmarg to Gulmarg.',
      'Visit to Ganderbal and Thajiwas Glacier.',
      'Cable Car/Pony Ride in Gulmarg, Pahalgam & Sonamarg.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, watersports or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'kashmir-honeymoon-special',
    title: 'Kashmir Honeymoon Special', // From HTML
    destination: 'Kashmir',
    duration: '8 Days 7 Nights', // From HTML (Day 1-8)
    price: '₹32700', // From HTML (Double Occupancy price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/40680720240911061608.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/2241320240910132706.png',
      '/cloned_media/33133420240910132706.png',
      '/cloned_media/26383420240910132706.png',
      '/cloned_media/16906920240910132706.png',
      '/cloned_media/5502920240910132706.png'
    ],
    overview: 'An 8-day romantic honeymoon special in Kashmir, with leisurely stays in Srinagar, Gulmarg, and Pahalgam.', // Kept user's overview as HTML was null
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar | Local Sightseeing',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport and drive towards your accommodation.</li><li>Check-in to your cozy hotel, freshen-up and have some leisure.</li><li>Afternoon leave for a local sightseeing tour of Mughal Gardens visiting - Cheshmashahi (the royal spring), Nishat (The Garden of pleasure), and Shalimar (The Abode of Love).</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Srinagar to Doodhpathri | Explore Doodhpathri',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Doodhpathri, known as the Valley of Milk, surrounded by the gorgeous Pir Panjal Range.</li><li>Explore this alpine valley decorated with stunning meadows, towering tress and snow clad mountains in the backdrop. You can indulge in various activities and local sightseeing of Doodhpathri through pony (on your own) or roam around the valley and interact with the locals.</li><li>In the evening, return back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>The drive past colorful villages and rice fields, gives you an insight of the rich cultural past of Kashmir.</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg (on your own) and get mesmerized by the stunning landscapes from Gulmarg to Kungdoor and Marry Shoulder.</li><li>In the evening, check-in to the hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Gulmarg.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Gulmarg to Pahalgam | Pahalgam Arrival',
        description: '<ul><li>Wake up early and post breakfast, drive from Gulmarg to Pahalgam known as the \'valley of shepherds’.</li><li>Decorated with enchanting natural beauty, Pahalgam is nestled at the confluence of the streams flowing from river Lidder and Sheshnag Lake.</li><li>Enroute visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu and built by King Awantivarma. </li><li>After arriving in Pahalgam, check-in to our hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 5,
        title: 'Pahalgam Local Sightseeing',
        description: '<ul><li>Wake up early and post breakfast, head out for local exploration of Pahalgam.</li><li>We’ll visit the scenic and rocky valleys of Chandanwadi, the astounding Snow Point which is situated around 14 kms from Pahalgam and enjoy a pony ride (on your own).</li><li>Drive back to Pahalgam and post some leisure, take a walk through the dense pine forest alongside the pristine Lidder River and extend your Pahalgam experience further, soaking in the stunning natural beauty of Kashmir.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 6,
        title: 'Drive from Pahalgam to Srinagar | Dal Lake Shikara Ride',
        description: '<ul><li>Wake up early and post breakfast, drive from Pahalgam to Srinagar and check-in the houseboat in Dal Lake. </li><li>In the evening, enjoy a beautiful Shikara ride in Srinagar’s Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Dal Lake in Srinagar.</li></ul>'
      },
      {
        day: 7,
        title: 'Drive from Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Sonmarg (Golden Meadow).</li><li>Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg acts as the base for some interesting treks to the high altitude Himalayan Lakes.</li><li>Enjoy horse riding upto Thajiwas glacier and sledge riding on snow (at your own cost).</li><li>In the evening, return back to Srinagar. </li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Srinagar.</li></ul>'
      },
      {
        day: 8,
        title: 'Srinagar Departure | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Srinagar and leave for the airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'All Transportation on Private Basis as per itinerary.',
      '14 Meals: 7 Breakfasts & 7 Dinners, starting from Dinner on Day 1 till Breakfast on Day 8.',
      '7 Nights Accommodation as per Double Sharing: Hotel & Houseboat in Srinagar, Hotel in Pahalgam & Hotel in Gulmarg.',
      'Complimentary Shikara Ride over Dal Lake.',
      'Pick-up and Drop facility from as per the itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Chained vehicle from Tangmarg to Gulmarg.',
      'Visit to Ganderbal and Thajiwas Glacier.',
      'Cable Car/Pony Ride in Gulmarg, Pahalgam & Sonamarg.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, watersports or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'kashmir-honeymoon-romantic-retreat',
    title: 'Kashmir Honeymoon Romantic Retreat', // From HTML
    destination: 'Kashmir',
    duration: '6 Days 5 Nights', // From HTML
    price: '₹21000', // From HTML (Double Occupancy price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/19158420240918064946.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/37983320240918064945.png',
      '/cloned_media/39268020240918064945.png',
      '/cloned_media/34655820240918064946.png',
      '/cloned_media/37792820240918064946.png',
      '/cloned_media/36923220240918064946.png',
      '/cloned_media/13793520240918064946.png'
    ],
    overview: 'A 6-day romantic retreat for honeymooners, balancing sightseeing with leisure time in Kashmir\'s most beautiful spots.', // From user's slug (HTML overview was null)
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar | Local Sightseeing',
        description: '<ul><li>After arriving in Srinagar, pick-up from the airport and drive towards your accommodation.</li><li>Check-in to your cozy hotel, freshen-up and have some leisure.</li><li>Afternoon leave for a local sightseeing tour of Mughal Gardens visiting - Cheshmashahi (the royal spring), Nishat (The Garden of pleasure), and Shalimar (The Abode of Love).</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 2,
        title: 'Drive from Srinagar to Sonmarg | Explore Sonmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Sonmarg (Golden Meadow).</li><li>Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg acts as the base for some interesting treks to the high altitude Himalayan Lakes.</li><li>Enjoy horse riding upto Thajiwas glacier and sledge riding on snow (at your own cost).</li><li>In the evening, return back to Srinagar. </li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Srinagar.</li></ul>'
      },
      {
        day: 3,
        title: 'Drive from Srinagar to Gulmarg | Explore Gulmarg',
        description: '<ul><li>Wake up early and post breakfast, begin your drive from Srinagar towards Gulmarg (World’s highest green golf course).</li><li>The drive past colorful villages and rice fields, gives you an insight of the rich cultural past of Kashmir.</li><li>After arriving in Gulmarg, experience Asia’s highest Gondola ride in Gulmarg (on your own) and get mesmerized by the stunning landscapes from Gulmarg to Kungdoor and Marry Shoulder.</li><li>In the evening, return back to Srinagar.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Srinagar.</li></ul>'
      },
      {
        day: 4,
        title: 'Drive from Srinagar to Pahalgam | Explore Pahalgam',
        description: '<ul><li>Wake up early and post breakfast, drive from Srinagar to Pahalgam known as the \'valley of shepherds’.</li><li>Decorated with enchanting natural beauty, Pahalgam is nestled at the confluence of the streams flowing from river Lidder and Sheshnag Lake.</li><li>Enroute visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu and built by King Awantivarma.</li><li>Today you can explore the beautiful Kashmir Valley, Baisaran and waterfall (by your own expenses) or Betaab Valley, and Aru Valley (by hiring a car on your own expenses). </li><li>After arriving in Pahalgam, check-in to our hotel and have some leisure.</li><li>Savour home-style cooked dinner and overnight stay in a hotel in Pahalgam.</li></ul>'
      },
      {
        day: 5,
        title: 'Drive from Pahalgam to Srinagar | Shikara Ride',
        description: '<ul><li>Wake up early and post breakfast, head out for local exploration of Pahalgam.</li><li>We’ll visit the scenic and rocky valleys of Chandanwadi, the astounding Snow Point which is situated around 14 kms from Pahalgam and enjoy a pony ride (on your own).</li><li>Drive back to Pahalgam and post some leisure, take a walk through the dense pine forest alongside the pristine Lidder River and extend your Pahalgam experience further, soaking in the stunning natural beauty of Kashmir.</li><li>Drive from Pahalgam to Srinagar and check-in the houseboat in Dal Lake. </li><li>In the evening, enjoy a beautiful Shikara ride in Srinagar’s Dal Lake.</li><li>Savour home-style cooked dinner and overnight stay in a houseboat in Dal Lake in Srinagar.</li></ul>'
      },
      {
        day: 6,
        title: 'Srinagar Departure | Trip Ends',
        description: '<ul><li>In the morning, say goodbye to your hosts in Srinagar and leave for the airport.</li><li>Reach home with lots of amazing memories and unforgettable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'All Transportation on Private Basis as per itinerary.',
      '10 Meals: 5 Breakfasts & 5 Dinners, starting from Dinner on Day 1 till Breakfast on Day 6.',
      '5 Nights Accommodation as per Double Sharing: Hotel & Houseboat in Srinagar and Hotel in Pahalgam.',
      'Complimentary Shikara Ride over Dal Lake.',
      'Pick-up and Drop facility from as per the itinerary.',
      'Reliable and experienced local drivers to drive in the difficult terrains.',
      'Driver allowances, toll taxes, parking, state taxes.'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Any extra meals apart from the ones mentioned under inclusions.',
      'Chained vehicle from Tangmarg to Gulmarg.',
      'Visit to Ganderbal and Thajiwas Glacier.',
      'Cable Car/Pony Ride in Gulmarg, Pahalgam & Sonamarg.',
      'Travel Insurance, items of personal nature like porterage, tips, laundry etc.',
      'Any entry fees, extra expenses for optional activities, watersports or tickets, unless quoted in Inclusions.',
      'Any other costing involved due to circumstances like natural calamity, weather conditions, riots, roadblocks, landslides or any other forced circumstances which are out of our control.',
      'Cost of snow-chained or 4*4 Vehicle if needed due to heavy snowfall.',
      'Anything which is not mentioned in the above inclusions.',
      'GST (5%) is applicable extra.'
    ],
  },
  {
    slug: 'kashmir-honeymoon-package-7-days-6-nights',
    title: 'Kashmir Honeymoon Package 7 Days 6 Nights', // From HTML
    destination: 'Kashmir',
    duration: '7 Days 6 Nights', // From HTML
    price: '₹38500', // From HTML (Double Occupancy price)
    // originalPrice: '', // No discount in HTML
    // discount: '', // No discount in HTML
    imageUrl: '/cloned_media/4202420210311124328.png', // From HTML
    gallery: [ // From HTML gallary array
      '/cloned_media/19762920210311124328.png'
    ],
    overview: '<h2>About Kashmir Honeymoon Package 7 Days 6 Nights</h2><p>Imagine starting your forever in the ravishingly beautiful Kashmir, where snow-tipped mountains kiss the sky and pristine lakes mirror the heavens. Our 7 Days 6 Nights Kashmir Honeymoon Package that weaves romance into every moment of your stay. Picture the serenity when you and your loved one will be gliding across serene Dal Lake in a traditional shikara, sharing tender moments as the sun sets behind the Himalayas. Stroll hand-in-hand in the Mughal Gardens, where blooms of flowers and falling fountains of water are reminiscent of a storybook. Your cozy little houseboat becomes a floating haven of love, gently rocking you to sleep under the canopy of stars above.</p><p>Take an exciting gondola ride in Gulmarg, where you can even steal a kiss amidst panoramic views of mountains. Savor the taste of authentic bazaar food, indulge in feeding each other tender lamb rogan josh with fragrant saffron rice and let the senses take over. Every day is an adventure, full of new memories to be made at historical, mystique places like the Shankaracharya Temple, dating back to ancient times, and the quiet Pahalgam Valley. With Kashmir\'s beauty of nature and rich culture providing a backdrop in every sense, turn your love story into a tale one will remember for ages. Book our <a href="https://go4explore.com/trip/kashmir" style="color:blue;">Kashmir Tour Package</a> now and let us create the most memorable start to your happily ever after.</p><h3>Places to Visit During 7 Days Kashmir Honeymoon Trip</h3><p><strong>Dal Lake:</strong> Serene expanse dotted with houseboats and shikaras...</p><p><strong>Mughal Gardens:</strong> This includes Shalimar Bagh, Nishat Bagh, and Chashme Shahi...</p><p><strong>Shankaracharya Temple:</strong> An ancient Hindu temple that lies on top of a hill...</p><p><strong>Gulmarg Gondola:</strong> The world\'s highest cable car...</p><p><strong>Alpather Lake:</strong> A stunning alpine lake near the Apharwat Peak in Gulmarg...</p><p><strong>Betaab Valley:</strong> Located between the pine forests and the Lidder River...</p><p><strong>Aru Valley:</strong> This quiet village is around 12 km away from Pahalgam...</p><p><strong>Chandanwari:</strong> This stunning spot is situated at the base of the Amarnath Yatra...</p><p><strong>Baisaran:</strong> Known as \'Mini Switzerland\', this lush green meadow...</p><h3>Things to do in Kashmir 7 Days Honeymoon Tour</h3><p><strong>Shikara ride on Dal Lake:</strong> Sail over the placid waters...</p><p><strong>Stay in a houseboat:</strong> Experience unique hospitality onboard a floating hotel...</p><p><strong>Take the Gulmarg Gondola ride:</strong> Reach breathtaking heights...</p><p><strong>Ski in Gulmarg, Winter:</strong> Feel some of the finest powder-soft skiing at Gulmarg...</p><p><strong>Trek in Pahalgam:</strong> Take up scenic treks through pine forests, meadows...</p><p><strong>White water rafting Lidder River:</strong> Enjoy increased adrenaline levels...</p><p><strong>Try Kashmiri cuisine:</strong> Treat your taste buds to fragrant Rogan Josh, Yakhni, and Dum Aloo...</p>', // From HTML
    itinerary: [ // From HTML i_data
      {
        day: 1,
        title: 'Arrive Srinagar',
        description: '<ul><li>Welcome to Srinagar, the lake city. On arrival, the driver/representative will pick and transfer you to the houseboat. The houseboat on Dal Lake is going to be your first stay of your Kashmir trip.</li><li>In the afternoon, proceed for the Shikara ride in Dal Lake to enjoy the mesmerizing beauty of this city, which is often compared to Venice. You will get the sight of some very interesting places around the lake.</li><li>Overnight stay at the Houseboat.</li></ul>'
      },
      {
        day: 2,
        title: 'Srinagar City Sightseeing',
        description: '<ul><li>After the breakfast, proceed for the city tour of Srinagar. Visit the World famous Mughal Gardens- Nishant Bagh (the garden of pleasure), Shalimar Bagh (Abode of love) and Chasme Shahi Garden and also visit the Shankaracharya Temple.</li><li>In the evening, return to the Houseboat.</li><li>Overnight stay at Houseboat or Hotel</li></ul>'
      },
      {
        day: 3,
        title: 'Srinagar to Gulmarg',
        description: '<ul><li>After breakfast, drive to Gulmarg which is one of the most beautiful summer resorts in the valley. On arrival check into your hotel.</li><li>In the afternoon, go for a Gondola ride (cable car) from Gulmarg to Khilanmarg.</li><li>Overnight stay at hotel in Gulmarg.</li></ul>'
      },
      {
        day: 4,
        title: 'Gulmarg Sightseeing',
        description: '<ul><li>After breakfast, visit the highest golf course in the World and Skiing during the winter season. Visit Hara Mukh and Sun Set Peak in Gulmarg.</li><li>After an exciting day, head back to your hotel for the overnight stay.</li></ul>'
      },
      {
        day: 5,
        title: 'Gulmarg to Pahalgam',
        description: '<ul><li>This morning after breakfast, drive towards Pahalgam, on arrival check into your hotel.</li><li>On the way, visit Saffron field and Avantipur ruins which is eleven hundred years old temple.</li><li>Reach Pahalgam by lunchtime, and after lunch enjoy the natural charm of this valley.</li></ul>'
      },
      {
        day: 6,
        title: 'Pahalgam to Srinagar',
        description: '<ul><li>After the morning breakfast, drive to Srinagar. Check in into Houseboat or Hotel and spend the whole day in local sightseeing</li></ul>'
      },
      {
        day: 7,
        title: 'Srinagar Airport Drop',
        description: '<ul><li>Check out from the hotel and you will be transferred to the Airport to board the flight to onward destination with memorable experiences.</li></ul>'
      }
    ],
    inclusions: [ // Extracted as string[] from HTML
      'Transportation From Srinagar to Srinagar',
      'Accommodation (1 Night in Houseboat, 2 Nights in Srinagar Hotel, 2 Nights in Gulmarg, 1 Night in Pahalgam)',
      'Meals- Breakfast and Dinner at the time of stay',
      'Gypsy from Tangmarg to Gulmarg',
      'Transport for Aru Valley'
    ],
    exclusions: [ // Extracted as string[] from HTML
      'Travel Insurance',
      'Alcohol and Wine',
      'Horse ride in Pahalgam',
      'Taxi for Sightseeing in Pahalgam',
      'Atv, Snowmobile, Snowcycle, Porter',
      'Any extra meals or snacks that you purchase',
      'Anything not mentioned in Inclusions'
    ],
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