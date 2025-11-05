import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import TravelWisdomLogo from "@/assets/travel-wisdom-logo.png";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';



interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    numberOfTravellers: '',
    monthOfTravel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show immediate success message
    alert('Your enquiry has been sent successfully!');
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      numberOfTravellers: '',
      monthOfTravel: '',
      message: ''
    });
    onClose();
    setIsSubmitting(false);

    // Send in background
    fetch('http://localhost:4000/api/send-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.mobileNumber,
        message: `Travellers: ${formData.numberOfTravellers}, Month: ${formData.monthOfTravel}${formData.message ? ', Message: ' + formData.message : ''}`,
        tripName: 'Website Popup Inquiry'
      }),
    }).catch(error => console.error('Background send error:', error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex">
        <div className="w-1/2 bg-gradient-to-br from-[#0B3A55] to-[#0B3A55] flex flex-col items-center justify-center text-white p-8 rounded-l-lg">
          <img src={TravelWisdomLogo} alt="Travel Wisdom" className="w-32 h-30 mb-6" />
          <h1 className="text-3xl font-bold mb-2">Travel Wisdom</h1>
          <p className="text-xl italic">Pack right but light</p>
        </div>
        <div className="w-1/2 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Plan Your Trip</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-1"
              type="button"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number *
              </label>
              <Input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Travellers *
              </label>
              <select
                name="numberOfTravellers"
                value={formData.numberOfTravellers}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select number of travellers</option>
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5 Travellers</option>
                <option value="6+">6+ Travellers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Month of Travel *
              </label>
              <select
                name="monthOfTravel"
                value={formData.monthOfTravel}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select month of travel</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Any specific requirements or questions?"
                rows={3}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0B3A55] hover:bg-white hover:text-[#0B3A55] border hover:border-[#0B3A55] text-white py-3 px-4 rounded-md transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Details'}
            </Button>
          </form>
        </div>
        </div>
      </div>
  );
};

export default PopupForm;