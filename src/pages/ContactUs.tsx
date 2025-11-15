import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show immediate success
    alert('Message sent! We will get back to you soon.');
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });

    // Send in background
    fetch(`${API_BASE_URL}/send-query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        tripName: 'Contact Us Form'
      }),
    }).catch(error => console.error('Background send error:', error));
  };



  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">Have Queries? Want to give a Feedback!</h1>
        <p className="mb-6 md:mb-8 text-base md:text-lg text-center md:text-left">
          Hey, thanks for landing up here. We would <span className="text-red-600">❤️</span> to hear from you.
        </p>

        <div className="grid md:grid-cols-[70%_30%] gap-6 md:gap-8">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-300 w-full">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Any questions or remarks? just write us a message!</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                <Input
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className="flex-1 bg-gray-50 py-3 px-4 text-base h-12"
                />
                <Input
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  type="tel"
                  className="flex-1 bg-gray-50 py-3 px-4 text-base h-12"
                />
              </div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-gray-50 py-3 px-4 text-base h-12"
              />
              <Textarea
                placeholder="Write your message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                rows={4}
                className="bg-gray-50 py-3 px-4 text-base min-h-[100px]"
              />
              <Button type="submit" className="w-full bg-[#0B3A55] hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors text-white rounded-lg text-base font-semibold py-3 h-12">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-300 flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-blue-100 rounded-full flex-shrink-0">
                <Phone className="h-8 w-8 md:h-10 md:w-10 text-[#0B3A55]" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg">Call Us</h3>
                <p className="text-gray-900 text-sm md:text-base">+91-99175 45446</p>
                <p className="text-xs text-gray-500">Available Mon to Sat 11 AM - 7 PM</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-300 flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-blue-100 rounded-full flex-shrink-0">
                <Mail className="h-8 w-8 md:h-10 md:w-10 text-[#0B3A55]" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg">Write Email</h3>
                <p className="text-gray-900 text-sm md:text-base break-all">info@travelwisdom.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Our Presence</h1>
        <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123!2d77.02961870971895!3d28.546460566686147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguNTQ2NDYwNTY2Njg2MTQ3LDc3LjAyOTYxODcwOTcxODk1!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-2 left-2 bg-white bg-opacity-95 p-2 md:p-3 rounded shadow-lg max-w-[200px] md:max-w-xs">
            <h3 className="font-semibold text-xs md:text-sm">Travel Wisdom</h3>
            <p className="text-xs text-gray-700 leading-tight">Plot No 157, Sector 28, Part-2, Bamnoli, Sector 28 Dwarka, Dwarka, New Delhi, Delhi, 110077</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=28.546460566686147,77.02961870971895" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline inline-block mt-1">Get Directions</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
