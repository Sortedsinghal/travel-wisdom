import React from 'react';
import Header from '@/components/Header'; // Assuming this component exists
import Footer from '@/components/Footer'; // Assuming this component exists
import { Calendar, Globe, Users, ThumbsUp, ChevronDown, Award, Briefcase, Zap, Plane, Bike, Handshake } from 'lucide-react';

// --- Local Components for About Us Page ---

const AboutUsHeader = () => {
    return (
        <div className="relative w-full h-[580px] overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                muted
                loop
                autoPlay
                controlsList="nodownload"
                playsInline
                // FIXED: Updated video source
                src="/cloned_media/about_us_thumbnail.mp4"
            />
            <div className="absolute inset-0 w-full h-full bg-black/70"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h1 className="text-white text-6xl font-extrabold text-center overflow-hidden">
                    <div className="flex flex-col items-center">
                        <span className="mb-2">We</span>
                        <span className="text-yellow-400">Hustle Together</span>
                    </div>
                </h1>
            </div>
        </div>
    );
};

// Reusable Stats Card
const StatCard = ({ iconSrc, statText }) => (
    <div className="col-span-1 p-4 flex flex-col items-center">
        <img alt="icon" loading="lazy" width="60" height="60" className="w-[50px] h-auto mb-3 mt-3" src={iconSrc} />
        <p className="text-sm text-white font-semibold text-center mt-2">{statText}</p>
    </div>
);

const WhoWeAre = () => {
    return (
        <section className="relative py-16" style={{ backgroundImage: 'url(/cloned_media/who-we-are-section-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto px-4 max-w-4xl">
                <p className="font-semibold text-xl md:text-2xl text-center text-yellow-400 mb-4">Who We Are?</p>
                <p className="text-sm text-white text-center mb-8">
                    Go4Explore is a community of avid travellers badly bitten by the travel bug thus providing you an unmatched travel experience as per your interest and comfort. Using our &amp; experience.We curate personalized and fun-filled trips to unexplored Himalayan destinations. Choose the destination which you want to explore and you're done. Our enthusiastic community of wanderers create journeys that will exceed your expectations. From being an experience promoter to provider, who knows travel better than us? We design well-planned trip itineraries, trekking &amp; camping activities without exceeding your budget.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <StatCard
                        iconSrc="/cloned_media/who-we-are-icon1.png"
                        statText="2500+ Trips Hosted PAN India & Abroad"
                    />
                    <StatCard
                        iconSrc="/cloned_media/who-we-are-icon2.png"
                        statText="Proudly operating in 15+ countries"
                    />
                    <StatCard
                        iconSrc="/cloned_media/who-we-are-icon3.png"
                        statText="30,000+ Happy Travelers"
                    />
                    <StatCard
                        iconSrc="/cloned_media/who-we-are-icon4.png"
                        statText="Team of 100+ Travel Enthusiasts"
                    />
                </div>
            </div>
        </section>
    );
};

const OfferItem = ({ iconSrc, text }) => (
    <div className="col-span-1 flex flex-col items-center p-4">
        <a href="#" className="text-decoration-none flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-700 p-2">
                <img alt="icon" loading="lazy" width="70" height="70" className="w-[70px] h-auto" src={iconSrc} />
            </div>
            <p className="mt-3 text-black text-sm font-semibold text-center whitespace-pre-line">{text.replace('<br/>', '\n')}</p>
        </a>
    </div>
);

const WhatWeOffer = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-12">What We Offer</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {/* FIXED: Updated sources to local /cloned_media/ path */}
                    <OfferItem iconSrc="/cloned_media/who-we-are-icon1.png" text="Fixed-\nDepartures" />
                    <OfferItem iconSrc="/cloned_media/rest-table.webp" text="Customized\nPackages" />
                    <OfferItem iconSrc="/cloned_media/plane.webp" text="International\nTrips" />
                    <OfferItem iconSrc="/cloned_media/traveling.webp" text="Trekking" />
                    <OfferItem iconSrc="/cloned_media/bike.webp" text="Bike Trips" />
                    <OfferItem iconSrc="/cloned_media/handshake.webp" text="Corporate\nTrips" />
                </div>
            </div>
        </section>
    );
};

const JourneyTimeline = () => {
    const events = [
        { year: '2017', content: 'On 19th May, We started our journey to explore', position: 'left' },
        { year: '2018', content: 'Collaborated With Nepal Tourism Board for Himalayan Travel Mart', position: 'right' },
        { year: '2019', content: 'Successfully summited mt. Friendship Peak near Manali', position: 'left' },
        { year: '2020', content: 'Invited by Honorable tourism minister of India to discuss post-covid scenario', position: 'right' },
        { year: '2021', content: 'Hosted travellers on our first ever International trip', position: 'left' },
        { year: '2022', content: 'Managed travel ops of india Ice Hockey team (under 20) at Asia & Oceania Championship', position: 'right' },
        { year: '2023', content: 'Expended our travel oprations in 11+ countries', position: 'left' },
        { year: '2024', content: 'Invited by Meta for Asia-Pacific Travel Summit in Singapore Headquarters', position: 'right' },
        { year: '2025', content: 'Here we are spreading happiness through travel', position: 'left' },
    ];

    return (
        <div className="py-12 container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-12">Our Journey So Far</h2>

            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-700 hidden md:block z-0"></div>

            <div className="space-y-12">
                {events.map((event, index) => (
                    <div key={index} className={`relative flex items-center w-full ${event.position === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                        <div className={`w-full md:w-1/2 px-4 ${event.position === 'right' ? 'md:pl-16' : 'md:pr-16'}`}>
                            <div className={`p-6 border-4 rounded-xl shadow-lg transition-all duration-300 ${event.position === 'left' ? 'md:border-r-0 border-blue-500' : 'md:border-l-0 border-blue-500'} bg-white`}>
                                <h3 className={`text-xl font-bold mb-2 ${event.position === 'left' ? 'md:text-right' : 'md:text-left'} text-blue-700`}>{event.year}</h3>
                                <p className="text-gray-700">{event.content}</p>
                            </div>
                        </div>
                        {/* Timeline Circle - visible on medium screens and up */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 z-10"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MeetTheFounder = () => {
    // FIX APPLIED HERE: Using <div> elements instead of nested <p> tags
    return (
        <section className="py-16 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-3/4">
                        <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">Meet the Founder</h3>
                        <article className="flex items-end mb-4">
                            <p className="font-bold text-base p-2 rounded-xl text-white bg-black mr-2">Jony Jindal</p>
                            <p className="font-semibold text-sm text-black">CEO, Founder</p>
                        </article>
                        <div className="text-sm text-black space-y-4">
                            <div>In 2017, Mr Jony Jindal started his journey and went on his solo trip from Kashmir to Kanyakumari &amp; further Amritsar to Manipur at the age of 19. He has successfully done some amazing high altitude treks like Mount Everest base camp, Gokyo Lake trek, Alpather Lake trek, climbed Mount Friendship Peak and many more.</div>
                            <div>He combined his passion for traveling and skills of digital marketing to create a platform helping out people who want to travel in a budget-friendly manner with like-minded people. and solving the problem of traveling in Himalayan regions by organizing group trips to offbeat and untouched places.</div>
                            <div>He worked with various tourism boards and hospitality brands like Incredible India, Nepal Tourism, Manipur Tourism, Madhya Pradesh Tourism, Delhi Tourism and Sterling Holidays to name a few. Recently He got invited by the Ministry of Tourism to discuss the “future of travel industry” with the Tourism Minister of India. Mr Jony Jindal also managed the Indian Ice Hockey team in the Asian Championship at Bangkok.</div>
                        </div>
                    </div>
                    <div className="md:w-1/4 flex justify-center">
                        <img alt="founder_img" loading="lazy" width="350" height="500" className="w-full max-w-xs h-auto object-contain" src="/cloned_media/founder-jony.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CoreTeamMember = ({ name, role, imgSrc }) => (
    <div className="col-span-1 p-2 rounded-xl flex flex-col items-center border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-4/5 md:w-full max-w-[150px] aspect-square p-1 border-2 border-blue-700 rounded-full mb-3">
            <img alt={name} loading="lazy" width="1000" height="1000" className="w-full h-full rounded-full object-cover" src={imgSrc} />
        </div>
        <p className="py-1 px-4 rounded-full bg-blue-700 w-full text-center font-semibold text-sm text-white mb-2">{name}</p>
        <p className="font-medium text-xs text-black text-center mb-0">{role}</p>
    </div>
);

const CoreTeam = () => {
    const teamMembers = [
        // FIXED: Updated all team image sources
        { name: 'Sahil Singh', role: 'Business Dev. Manager', imgSrc: '/cloned_media/sahilsingh.webp' },
        { name: 'Tanya Kochhar', role: 'Head of Sales', imgSrc: '/cloned_media/tanyakochhar.webp' },
        { name: 'Amit Aggarwal', role: 'Head of Operations', imgSrc: '/cloned_media/amit.webp' },
        { name: 'Priyanka Jindal', role: 'Head of Finance', imgSrc: '/cloned_media/priyankajindal.webp' },
        { name: 'Pankaj Verma', role: 'Senior Sales Executive', imgSrc: '/cloned_media/PankajVerma.webp' },
        { name: 'Kartikey Sharma', role: 'Deputy Sales Manager', imgSrc: '/cloned_media/kartikey_sharma.jpg' },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-black text-center mb-10">Our Core Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <CoreTeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TripCaptains = () => {
    return (
        // FIXED: Updated background image source
        <section className="overflow-hidden py-16" style={{ backgroundImage: 'url(/cloned_media/captionbg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="lg:w-1/2 p-4 order-2 lg:order-1">
                        <p className="text-sm text-white font-normal mb-8">
                            We at Go4Explore are proud to boast that we have a team of over <span className="text-yellow-400 font-semibold">50+ strong & coolest Trip Captains</span> who don't just have profound knowledge of the destination but also are committed to providing the best travel experience to our dear travellers.
                        </p>
                        <p className="text-5xl md:text-6xl text-yellow-400 font-semibold mb-2 leading-none">50+</p>
                        <p className="text-3xl md:text-5xl text-yellow-400 font-semibold leading-none">Trip Captains</p>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 p-4 flex justify-center order-1 lg:order-2">
                         <img className="w-full max-w-md h-auto" src="/cloned_media/trip-captain-img.png" alt="Trip Captain Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const JoinOurTeam = () => {
    return (
        // FIXED: Updated background image source
        <section className="h-[600px] flex items-end justify-center text-center p-8" style={{ backgroundImage: 'url(/cloned_media/join-team.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="backdrop-blur-sm bg-black/40 p-6 rounded-lg mb-10">
                <p className="font-semibold text-base text-white mb-6">
                    Here at <span className="text-yellow-400">Go4Explore</span>, we welcome your creativity, hard work and dedication you'll bring to the table.
                </p>
                <a className="bg-white text-blue-700 font-medium text-base py-3 px-6 rounded-lg inline-block transition hover:bg-blue-100" href="/careers">
                    Join Our Team
                </a>
            </div>
        </section>
    );
};

const LifeAtGo4Explore = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-black text-center mb-10">Life at Go4Explore</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-7xl mx-auto">
                    {/* Desktop Layout - All image paths updated */}
                    <div className="col-span-2 hidden xl:block">
                        <img alt="party" className="rounded-xl w-full h-full object-cover" src="/cloned_media/IMG_1062.jpg" />
                    </div>
                    <div className="col-span-3 hidden xl:block">
                        <div className="grid grid-cols-3 gap-2 mb-2">
                            <div className="col-span-2">
                                <img alt="grid_6" className="rounded-xl w-full h-[220px] object-cover" src="/cloned_media/gallery-02.webp" />
                            </div>
                            <div className="col-span-1">
                                <img alt="grid_2" className="rounded-xl w-full h-[220px] object-cover" src="/cloned_media/1729176641565-9.jpg" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-1">
                                <img alt="grid_5" className="rounded-xl w-full h-[200px] object-cover" src="/cloned_media/IMG_5134.jpg" />
                            </div>
                            <div className="col-span-1">
                                <img alt="grid_4" className="rounded-xl w-full h-[200px] object-cover" src="/cloned_media/3A5A0899.jpg" />
                            </div>
                            <div className="col-span-1">
                                <img alt="grid_1" className="rounded-xl w-full h-[200px] object-cover" src="/cloned_media/IMG_1200.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 hidden xl:block">
                        <img alt="grid_3" className="rounded-xl w-full h-full object-cover" src="/cloned_media/1747116983507.jpg" />
                    </div>

                    {/* Mobile/Tablet Layout - All image paths updated */}
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="party" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/IMG_1062.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_6" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/IMG_20250320_162620.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_5" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/1729176641565-9.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_4" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/IMG_5134.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_3" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/3A5A0899.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_2" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/IMG_1200.jpg" />
                    </div>
                    <div className="col-span-2 sm:col-span-2 xl:hidden">
                        <img alt="grid_1" className="rounded-xl w-full h-48 sm:h-64 object-cover" src="/cloned_media/1747116983507.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const AIMNight = () => {
    return (
        // FIXED: Updated background image source
        <section className="py-16 md:py-24" style={{ backgroundImage: 'url(/cloned_media/aim-night-section-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">Go4Explore’s AIM Night</h2>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-2/3">
                        <p className="text-white text-sm mb-6">
                            <span className="text-yellow-400 font-semibold">AIM Night 2025</span> – the annual general meeting (AGM) and award ceremony of Go4Explore, brought together the company's core team members, employees, business vendors and distinguished guests to review the company’s performance, discuss future strategies, and recognize outstanding contributions in the company’s growth.
                        </p>
                        <div className="mt-8">
                            {/* FIXED: Updated image source */}
                            <img src="/cloned_media/aim-night-1.jpg" alt="Group Image from AIM Night" className="rounded-xl shadow-lg w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/3 grid grid-cols-2 gap-4 mt-5 md:mt-0">
                        {/* FIXED: Updated image sources */}
                        <img src="/cloned_media/aim-night-2.jpg" alt="Event 1" className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]" />
                        <img src="/cloned_media/aim-night-3.jpg" alt="Event 2" className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]" />
                        <img src="/cloned_media/aim-night-4.jpg" alt="Event 3" className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]" />
                        <img src="/cloned_media/aim-night-5.jpg" alt="Event 4" className="rounded-xl shadow-lg w-full h-full object-cover aspect-[4/3]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const InstagramReels = () => {
    const reels = [
        { title: 'Reel - Diwali 2024', link: 'https://www.instagram.com/go4explore.community/reel/DBxrM5Xp5XZ', imgSrc: '/cloned_media/diwali_reel.webp' },
        { title: 'Reel - Holi Celebration', link: 'https://www.instagram.com/reel/DHn-rajp06m/', imgSrc: '/cloned_media/reel-section-2.jpg' },
        { title: 'Reel - Seventh Anniversary', link: 'https://www.instagram.com/go4explore.community/reel/DHyPbUqpzE7/', imgSrc: '/cloned_media/reel-section-3.jpg' },
        { title: 'Reel - Funday', link: 'https://www.instagram.com/go4explore.community/reel/DJ6sohUJ0o9/', imgSrc: '/cloned_media/reel-section-4.jpg' },
    ];
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {reels.map((reel, index) => (
                        <div key={index} className="p-2">
                            <a href={reel.link} target="_blank" rel="noopener noreferrer" aria-label={`Watch reel: ${reel.title}`} className="block">
                                <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                                    <img alt={reel.title} loading="lazy" width="1080" height="1920" className="w-full h-auto aspect-[9/16] object-cover" src={reel.imgSrc} />
                                    <span className="absolute bottom-3 left-3 flex justify-center items-center p-2 rounded-full bg-white/70">
                                        {/* FIXED: Updated play button source */}
                                        <img alt="Play Button" loading="lazy" width="30" height="30" className="w-8 h-8" src="/cloned_media/play_btn.webp" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <AboutUsHeader />
                <WhoWeAre />
                <WhatWeOffer />
                <JourneyTimeline />
                <MeetTheFounder />
                <CoreTeam />
                <TripCaptains />
                <JoinOurTeam />
                <LifeAtGo4Explore />
                <AIMNight />
                <InstagramReels />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;