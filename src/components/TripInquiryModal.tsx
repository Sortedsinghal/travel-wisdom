import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Phone, Users, MessageSquare, Calendar, Check, X as XIcon, CheckCircle } from 'lucide-react';
import { sendWhatsAppMessage, TripInquiryData } from '@/utils/whatsappService';

interface TripInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripTitle: string;
}

const TripInquiryModal: React.FC<TripInquiryModalProps> = ({ isOpen, onClose, tripTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    travelers: '',
    month: '',
    message: '',
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMonthChange = (value: string) => {
    setFormData(prev => ({ ...prev, month: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAgreed) {
      alert('Please agree to the privacy policy');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for WhatsApp service
      const inquiryData: TripInquiryData = {
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
        travelers: parseInt(formData.travelers),
        month: formData.month,
        message: formData.message,
        tripTitle: tripTitle
      };

      // Send WhatsApp message automatically
      const success = await sendWhatsAppMessage(inquiryData);
      
      if (success) {
        // Show thank you popup
        setShowThankYou(true);
        
        // Reset form
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          travelers: '',
          month: '',
          message: '',
        });
        setPrivacyAgreed(false);
        
        // Close modal after showing thank you
        setTimeout(() => {
          setShowThankYou(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send WhatsApp message');
      }
      
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('There was an error sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const months = [
    'September 2025',
    'October 2025',
    'November 2025',
    'December 2025',
    'January 2026',
    'February 2026',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto">
        {showThankYou ? (
          // Thank You Popup
          <div className="text-center py-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
            <h2 className="text-3xl font-bold text-[#0B3A55] mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Your trip inquiry has been sent successfully.
            </p>
            <p className="text-gray-600">
              Our team will connect with you shortly to discuss your travel plans.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: +918076003345</span>
              </div>
            </div>
          </div>
        ) : (
          // Original Form
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold text-[#0B3A55]">
                Let's plan your next trip
              </DialogTitle>
              <p className="text-center text-gray-600 mt-2">
                Make your move, fill out your details now!
              </p>
            </DialogHeader>

        {/* Illustration */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <Phone className="mx-auto h-12 w-12 text-blue-600 mb-2" />
            <p className="text-sm">Fill out now</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto h-12 w-12 text-blue-600 mb-2" />
            <p className="text-sm">Travelers</p>
          </div>
          <div className="text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-blue-600 mb-2" />
            <p className="text-sm">Message</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#0B3A55] flex items-center gap-2">
              <Users className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-[#0B3A55] flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Mobile Number *
            </Label>
            <div className="flex gap-2">
              <div className="w-20">
                <Select defaultValue="+91">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={formData.mobile}
                onChange={handleInputChange}
                className="flex-1"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0B3A55] flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Enter your email address"
            />
          </div>

          {/* Travelers Count and Month */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="travelers" className="text-[#0B3A55] flex items-center gap-2">
                <Users className="h-4 w-4" />
                Travelers Count *
              </Label>
              <Input
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                required
                value={formData.travelers}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Number of travelers"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="month" className="text-[#0B3A55] flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Month of Travel *
              </Label>
              <Select value={formData.month} onValueChange={handleMonthChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#0B3A55] flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full min-h-[100px]"
              placeholder="Any additional details or questions..."
            />
          </div>

          {/* Privacy Policy */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-green-600 mt-0.5" />
              <span className="text-sm text-gray-700">
                We assure the privacy of your contact data
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <XIcon className="h-5 w-5 text-red-600 mt-0.5" />
              <span className="text-sm text-gray-700">
                No annoying spam calls
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={privacyAgreed}
                onCheckedChange={(checked) => setPrivacyAgreed(!!checked)}
              />
              <Label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                I agree to the privacy policy and terms of service
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-[#0B3A55] hover:bg-blue-700 text-white py-3 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Details'}
          </Button>
        </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TripInquiryModal;
