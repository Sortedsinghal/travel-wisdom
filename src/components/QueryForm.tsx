import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X, Send, CheckCircle, Users, Calendar } from 'lucide-react';
import TravelWisdomLogo from "@/assets/travel-wisdom-logo.png";
import { API_BASE_URL } from "@/config/api";

interface QueryFormProps {
  isOpen: boolean;
  onClose: () => void;
  tripName?: string;
}

interface StyledInputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}
interface StyledTextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  className?: string;
}
interface StyledSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  className?: string;
}

const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92A7] focus:border-[#5B92A7] transition-all duration-200 ${className}`}
    {...props}
  />
));
StyledInput.displayName = 'StyledInput';

const StyledTextarea = React.forwardRef<HTMLTextAreaElement, StyledTextareaProps>(({ className = '', ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92A7] focus:border-[#5B92A7] transition-all duration-200 ${className}`}
    {...props}
  />
));
StyledTextarea.displayName = 'StyledTextarea';

const StyledSelect = React.forwardRef<HTMLSelectElement, StyledSelectProps>(({ className = '', children, ...props }, ref) => (
  <select
    ref={ref}
    className={`w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#5B92A7] focus:border-[#5B92A7] transition-all duration-200 cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </select>
));
StyledSelect.displayName = 'StyledSelect';

export const QueryForm = ({ isOpen, onClose, tripName }: QueryFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    numberOfTravellers: '',
    monthOfTravel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

    setShowSuccess(true);
    setIsSubmitting(false);

    fetch(`${API_BASE_URL}/send-query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.mobileNumber,
        message: `Travellers: ${formData.numberOfTravellers}, Month: ${formData.monthOfTravel}${formData.message ? ', Message: ' + formData.message : ''}`,
        tripName: tripName || 'General Inquiry'
      })
    }).catch(error => console.error('Background send error:', error));

    setTimeout(() => {
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        numberOfTravellers: '',
        monthOfTravel: '',
        message: ''
      });
      onClose();
      setShowSuccess(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-start justify-center pt-20 z-[10000]">
          <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-green-500 max-w-sm w-full animate-fadeInUp">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div className='flex-1'>
                <h3 className="text-lg font-semibold text-gray-800">Success!</h3>
                <p className="text-sm text-gray-600">Your enquiry has been sent successfully! We'll be in touch shortly.</p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[99999] p-4 font-inter transition-opacity duration-300">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-transform duration-300 ease-out scale-100">
          <div className="md:w-1/2 bg-[#0B3A55] text-white p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-5 transform skew-y-3 scale-150"></div>
            <img 
              src={TravelWisdomLogo} 
              alt="Travel Wisdom Logo" 
              className="z-10 h-32 w-32 object-contain mb-4" 
            />
            <div className="z-10 text-center">
                <h1 className="text-4xl font-extrabold mb-1 tracking-wider">
                  Travel Wisdom
                </h1>
                <p className="text-lg italic font-light opacity-80">
                  Pack right, but light.
                </p>
            </div>
            <p className="mt-4 text-center text-sm opacity-75 z-10">
              Fill out the form and a dedicated travel expert will craft your perfect itinerary.
            </p>
            {tripName && (
              <div className="z-10 mt-6 p-3 bg-white bg-opacity-10 rounded-lg">
                  <p className="text-base font-semibold">Enquiry for:</p>
                  <p className="text-xl font-bold text-[#5B92A7]">{tripName}</p> 
              </div>
            )}
          </div>

          <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-800">Start Your Journey</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <StyledInput
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                  <StyledInput
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <StyledInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='relative'>
                    <Users className='absolute left-3 top-9 h-4 w-4 text-gray-400 pointer-events-none' />
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travellers *</label>
                    <StyledSelect
                        name="numberOfTravellers"
                        value={formData.numberOfTravellers}
                        onChange={handleInputChange}
                        required
                        className='pl-10'
                    >
                        <option value="">Select number</option>
                        <option value="1">1 Traveller</option>
                        <option value="2">2 Travellers</option>
                        <option value="3">3 Travellers</option>
                        <option value="4">4 Travellers</option>
                        <option value="5">5 Travellers</option>
                        <option value="6+">6+ Travellers</option>
                    </StyledSelect>
                </div>
                <div className='relative'>
                    <Calendar className='absolute left-3 top-9 h-4 w-4 text-gray-400 pointer-events-none' />
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Month *</label>
                    <StyledSelect
                        name="monthOfTravel"
                        value={formData.monthOfTravel}
                        onChange={handleInputChange}
                        required
                        className='pl-10'
                    >
                        <option value="">Select month</option>
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
                    </StyledSelect>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <StyledTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Let us know your destination, duration, or any specific requirements."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0B3A55] hover:bg-[#5B92A7] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};