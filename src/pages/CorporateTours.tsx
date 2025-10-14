import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Clock, Shield, HeartHandshake } from 'lucide-react';
import ContactForm from '@/components/ContactForm';


const CorporateTours = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const words = React.useMemo(() => ['Vibe', 'Culture', 'Experience', 'Journey', 'Adventure'], []);
  const baseText = 'Redefine Your ';
  const highlightText = 'CORPORATE ';

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/src/assets/corporate-homepage-website.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block">{baseText}</span>
            <span className="text-yellow-300">{highlightText}</span>
            <span className="inline-block min-w-[200px] text-left">
              {displayText}
              <span className={`inline-block w-1 h-16 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </span>
          </h1>
        </div>
      </div>

      {/* Exceptional Corporate Experiences Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exceptional <span className="text-[#0B3A55]">Corporate</span> Experiences <span role="img" aria-label="smile">😊</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/corporate-trips-icon.webp" alt="Corporate Trips" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Trips</h3>
              <p className="text-gray-600 text-sm">
                Bring your work crew together on a trip to elevate team spirit & performances
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/team-incentive-travel-icon.webp" alt="Team Incentive Travel" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Incentive Travel</h3>
              <p className="text-gray-600 text-sm">
                Travel experiences designed to foster team bonding & enjoyment outside office
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/business-travel-icon.webp" alt="Business Travel" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Travel</h3>
              <p className="text-gray-600 text-sm">
                Trips facilitating collaborations, networking & expansion opportunities
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/MICE-icon.webp" alt="MICE" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MICE</h3>
              <p className="text-gray-600 text-sm">
                Transform ordinary Meetings, Incentives, Conferences & Events into extraordinary
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-[#0B3A55] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/src/assets/vendor-incentive-plan-icon.webp" alt="Vendor Incentive Plan" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vendor Incentive Plan</h3>
              <p className="text-gray-600 text-sm">
                Experiences designed to motivate & reward vendors, suppliers or channel partner
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        className="rounded-lg max-w-7xl mx-auto text-left mt-10 mb-10 p-6 flex flex-col md:flex-row items-center"
        style={{
          backgroundImage: "url('src/assets/blue-crumpled-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 px-6">
          <div className="inline-block mb-2">
            <img src="/customer-service.png" alt="Contact Icon" className="mx-auto w-20 h-20" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Have Doubts? Talk To Our Travel Experts!</h3>
          <p className="text-lg text-white">
            we would <span className="text-red-700">❤️</span> to craft a trip just for you.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md px-6">
          <ContactForm />
        </div>
      </section>
      
      {/* Associate With Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Associate With Us <span role="img" aria-label="sunglasses">😎</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Group Bonding Activities</h3>
                  <p className="text-gray-600 text-sm">
                    Fun-filled team engaging games & ice-breaking sessions, improving team's strength & productivity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">All Inclusive Itineraries</h3>
                  <p className="text-gray-600 text-sm">
                    From meals to explorations, we plan all-inclusive travel packages, with handpicked stays & transportation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Team Award & Recognitions</h3>
                  <p className="text-gray-600 text-sm">
                    Acknowledging team's achievements, celebrating efforts, improves retention & boost morale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">DJ Night & Galla Dinner</h3>
                  <p className="text-gray-600 text-sm">
                    An unforgettable evening of entertainment, team celebrations & and networking with dine & dance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">International Summit</h3>
                  <p className="text-gray-600 text-sm">
                    Your one stop business travel assistance for VISA, flights, hotels, local transfers & sightseeing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3A55] hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-[#0B3A55] flex-shrink-0">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B3A55] mb-2">Advertising Trips</h3>
                  <p className="text-gray-600 text-sm">
                    Outshine with your product by choosing the travel destination & let us do the arrangements for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Corporate Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive corporate travel solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Team Building Activities</h3>
                <p className="text-gray-600">Engaging activities designed to strengthen team bonds and improve communication</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Retreats</h3>
                <p className="text-gray-600">Strategic planning sessions in inspiring locations away from office distractions</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Incentive Tours</h3>
                <p className="text-gray-600">Reward your top performers with exclusive travel experiences and recognition</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conference & Events</h3>
                <p className="text-gray-600">Professional event management for conferences, seminars, and corporate gatherings</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Travel</h3>
                <p className="text-gray-600">Seamless business travel arrangements with 24/7 support and flexible booking</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <HeartHandshake className="w-12 h-12 text-[#0B3A55] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Employee Engagement</h3>
                <p className="text-gray-600">Boost morale and engagement through carefully planned recreational activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Travel Wisdom for Corporate Tours?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Corporate team building" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0B3A55] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">Every corporate tour is tailored to your specific objectives, budget, and team requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0B3A55] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Management</h3>
                  <p className="text-gray-600">Dedicated account managers ensure seamless execution from planning to completion.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0B3A55] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">8+ years of experience serving 500+ companies with successful corporate travel programs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#0B3A55] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost-Effective Packages</h3>
                  <p className="text-gray-600">Competitive pricing with transparent costs and no hidden charges for maximum ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Corporate Destinations</h2>
            <p className="text-lg text-gray-600">Handpicked locations perfect for corporate events and team building</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" 
                alt="Goa" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">Goa</h3>
                  <p className="text-sm">Beach resorts & team activities</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" 
                alt="Manali" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">Manali</h3>
                  <p className="text-sm">Mountain retreats & adventure</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop" 
                alt="Rishikesh" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">Rishikesh</h3>
                  <p className="text-sm">Wellness & spiritual retreats</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" 
                alt="Jim Corbett" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">Jim Corbett</h3>
                  <p className="text-sm">Wildlife & nature experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#0B3A55] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Corporate Tour?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts create a customized corporate travel experience that aligns with your business objectives and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0B3A55] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B3A55] transition-colors">
              Call +91 8076602635
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorporateTours;