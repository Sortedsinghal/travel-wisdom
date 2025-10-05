import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { MapPin } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };



  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 px-8 max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-bold mb-2">Have Queries? Want to give a Feedback!</h1>
        <p className="mb-8 text-lg">
          Hey, thanks for landing up here. We would <span className="text-red-600">❤️</span> to hear from you.
        </p>

        <div className="grid md:grid-cols-[70%_30%] gap-8">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-300 w-full">
            <h2 className="text-2xl font-semibold mb-6">Any questions or remarks? just write us a message!</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex gap-5">
                <Input
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className="flex-1 bg-gray-50 py-3 px-4 text-base"
                />
                <Input
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="flex-1 bg-gray-50 py-3 px-4 text-base"
                />
              </div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-gray-50 py-3 px-4 text-base"
              />
              <Textarea
                placeholder="Write your message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                rows={1}
                className="bg-gray-50 py-3 px-4 text-base"
              />
              <Button type="submit" className="w-full bg-[#0B3A55] hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors text-white rounded-lg text-base font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-10">
            <div className="bg-white rounded-xl p-10 border border-gray-300 flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-14 w-14 text-[#0B3A55]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-gray-900">+91-99175 45446</p>
                <p className="text-xxxs text-gray-500">Available Mon to Sat 11 AM - 7 PM</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-10 border border-gray-300 flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="h-14 w-14 text-[#0B3A55]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Write Email</h3>
                <p className="text-gray-900">info@travelwisdom.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-12 px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-serif font-semibold mb-6">Our Presence</h1>
        <div className="rounded-lg overflow-hidden shadow-lg relative h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123!2d77.02961870971895!3d28.546460566686147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguNTQ2NDYwNTY2Njg2MTQ3LDc3LjAyOTYxODcwOTcxODk1!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-2 left-2 bg-white bg-opacity-90 p-3 rounded shadow-lg max-w-xs">
            <h3 className="font-semibold text-sm">Travel Wisdom</h3>
            <p className="text-xs text-gray-700">Plot No 157, Sector 28, Part-2, Bamnoli, Sector 28 Dwarka, Dwarka, New Delhi, Delhi, 110077</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=28.546460566686147,77.02961870971895" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline">Get Directions</a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
            {/* Removed the red and white pinpoint icon as requested */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
