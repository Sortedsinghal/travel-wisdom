import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Globe, Award } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Travel Consultant",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      description: "Lead our travel consultation team and help customers plan their dream vacations.",
      requirements: ["5+ years experience", "Excellent communication", "Travel industry knowledge"]
    },
    {
      id: 2,
      title: "Content Writer",
      location: "Remote",
      type: "Full-time",
      salary: "₹4-6 LPA",
      description: "Create engaging content for our blog, social media, and marketing materials.",
      requirements: ["2+ years writing experience", "SEO knowledge", "Travel passion"]
    },
    {
      id: 3,
      title: "Operations Manager",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹10-15 LPA",
      description: "Oversee day-to-day operations and ensure smooth execution of all travel programs.",
      requirements: ["7+ years operations experience", "Leadership skills", "Problem-solving"]
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹6-8 LPA",
      description: "Drive our digital marketing efforts across social media, email, and paid campaigns.",
      requirements: ["3+ years digital marketing", "Analytics skills", "Creative mindset"]
    },
    {
      id: 5,
      title: "Customer Service Representative",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹3-5 LPA",
      description: "Provide exceptional customer support and handle inquiries about our travel services.",
      requirements: ["1+ years customer service", "Communication skills", "Travel interest"]
    },
    {
      id: 6,
      title: "Tour Guide",
      location: "Multiple Locations",
      type: "Contract",
      salary: "₹500-800 per day",
      description: "Lead exciting tours and share your knowledge of destinations with our travelers.",
      requirements: ["Local expertise", "Guide certification", "Language skills"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance-based incentives"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Travel Opportunities",
      description: "Discounted travel rates and company-sponsored trips"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Team Building",
      description: "Regular team outings, workshops, and collaborative events"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and career growth programs"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Recognition",
      description: "Employee of the month awards and performance recognition"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Be part of a passionate team that's transforming the way people experience travel. We're looking for talented individuals who share our love for adventure and commitment to exceptional service.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Join Travel Wisdom?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Work with Passionate People</h3>
                  <p className="text-gray-600">
                    Join a team of travel enthusiasts who are dedicated to creating unforgettable experiences for our customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Grow Your Career</h3>
                  <p className="text-gray-600">
                    We invest in our employees' development with training programs, mentorship, and clear career progression paths.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Make a Difference</h3>
                  <p className="text-gray-600">
                    Your work directly impacts travelers' lives, helping them create memories that last a lifetime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Current Openings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Our Culture
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  At Travel Wisdom, we believe in fostering a culture of collaboration, innovation, and continuous learning. Our diverse team brings together people from different backgrounds, each contributing their unique perspective to our shared mission.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We value work-life balance, encourage professional development, and celebrate both individual and team achievements. Whether it's organizing team-building adventures or supporting each other's personal growth, we're committed to creating a workplace where everyone can thrive.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/travelers.png"
                  alt="Team Culture"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              How to Apply
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold mb-2">Review Openings</h3>
                <p className="text-sm text-gray-600">Browse our current job openings and find the role that matches your skills and interests.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-gray-600">Send us your resume and cover letter highlighting why you're the perfect fit for our team.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold mb-2">Interview Process</h3>
                <p className="text-sm text-gray-600">Participate in interviews to discuss your experience and learn more about our company culture.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold mb-2">Join the Team</h3>
                <p className="text-sm text-gray-600">Welcome aboard! Start your journey with Travel Wisdom and begin creating amazing travel experiences.</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills? Send us your resume anyway! We're always interested in connecting with talented individuals who share our passion for travel.
            </p>
            <Button size="lg" variant="outline">
              Send Unsolicited Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
