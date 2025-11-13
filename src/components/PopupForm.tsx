import React, { useState } from 'react';
import { X, Send, CheckCircle, Users, Calendar } from 'lucide-react';
import TravelWisdomLogo from "@/assets/travel-wisdom-logo.png";
import { Trip } from '@/data/trips';

// --- Type Definitions for internal components (Standard, no html2pdf imports needed) ---
interface StyledInputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}
interface StyledTextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  className?: string;
}
interface StyledSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  className?: string;
}
interface SuccessNotificationProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

// --- Internal Styled Components (Unchanged) ---
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

// --- Success Notification Component (Unchanged) ---

const SuccessNotification: React.FC<SuccessNotificationProps> = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-start justify-center pt-20 z-[10000]">
      <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-green-500 max-w-sm w-full animate-fadeInUp">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
          <div className='flex-1'>
            <h3 className="text-lg font-semibold text-gray-800">Success!</h3>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main PopupForm Component ---

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  trip?: Trip;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose, trip }) => {
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

  const generatePDF = () => {
    if (!trip) return;

    // Helper function to strip HTML tags for clean text, preserving structure
    const cleanHtmlForPDF = (html: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        let output = tempDiv.innerHTML;
        output = output.replace(/<\/?ul>/g, '').replace(/<\/?ol>/g, '');
        
        output = output.replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>')
                       .replace(/<li>/g, '<span>• ').replace(/<\/li>/g, '</span><br>');

        output = output.replace(/<h3[^>]*>/g, '<strong>').replace(/<\/h3>/g, '</strong>')
                       .replace(/<strong[^>]*>/g, '<strong>').replace(/<\/strong>/g, '</strong>')
                       .replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');
        
        return output;
    };

    // 1. Open a new window for the printable HTML
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // --- Start Printable HTML Content Generation (Refined Professional Look) ---
    const printableHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${trip.title} - Itinerary</title>
        <style>
          /* Web-safe fonts and base styles */
          body { 
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
            margin: 0; 
            padding: 0; 
            line-height: 1.5; 
            color: #333; 
            font-size: 14px; 
          }
          .container { width: 750px; margin: 0 auto; padding: 30px; }
          
          /* Header and Title Bar */
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
            background-color: #0B3A55; 
            color: white; 
            padding: 25px 0; 
          }
          .trip-title { 
            font-size: 32px; 
            font-weight: 700; 
            margin-bottom: 5px; 
            letter-spacing: 1px; 
          }
          .trip-subtitle { font-size: 16px; font-weight: 300; opacity: 0.9; }
          
          /* Info Bar - Clean, emphasized presentation */
          .info-bar { 
            margin-bottom: 35px; 
            border: 2px solid #0B3A55; 
            overflow: auto; 
            background-color: #f7f7f7; 
          }
          .info-item { 
            text-align: center; 
            width: 33.33%; 
            float: left; 
            padding: 15px 0; 
            box-sizing: border-box; 
          }
          .info-item:not(:last-child) { border-right: 1px solid #ccc; }
          .info-label { font-size: 12px; color: #666; margin-bottom: 3px; text-transform: uppercase; }
          .info-value { font-size: 18px; font-weight: 700; color: #0B3A55; }
          
          /* Content Sections */
          .main-image { width: 100%; height: 300px; object-fit: cover; margin-bottom: 30px; border-bottom: 4px solid #5B92A7;}
          
          .section { margin-bottom: 35px; }
          .section-title { 
            color: #0B3A55; 
            font-size: 20px; 
            font-weight: 700; 
            margin-bottom: 15px; 
            padding: 8px 15px; /* Increased padding */
            background-color: #fcfcfc;
            border-left: 6px solid #5B92A7; /* Stronger vertical line */
            border-bottom: 1px solid #ddd;
          }
          
          .overview-content div { margin-bottom: 10px; }
          .overview-content strong { color: #5B92A7; } /* Highlight strong text in overview */

          /* Itinerary - Stronger visual hierarchy */
          .itinerary-day { 
            margin: 15px 0; 
            padding: 15px; 
            border: 1px solid #ddd; 
            border-left: 6px solid #5B92A7; 
            background-color: #f9f9f9; 
          }
          .day-title { font-weight: 700; color: #0B3A55; font-size: 16px; margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          .day-description span { display: block; padding-left: 15px; text-indent: -15px; margin-bottom: 4px; }

          /* Inclusions/Exclusions - Using CSS Columns for Side-by-Side Print Layout */
          .columns-2 {
              column-count: 2;
              column-gap: 40px; /* Increased gap */
              column-fill: balance;
          }
          .list-section { padding: 15px; border: 1px solid #eee; margin-top: 15px; background-color: #fff; }
          .list-section ul { list-style: none; padding: 0; margin-top: 10px; }
          .list-section li { margin-bottom: 8px; padding-left: 20px; position: relative; }
          .inclusions li:before { content: '✓'; position: absolute; left: 0; font-weight: bold; color: green; }
          .exclusions li:before { content: '✗'; position: absolute; left: 0; font-weight: bold; color: red; }
          
          /* Gallery - Simple inline block flow */
          .gallery-images { text-align: left; margin-top: 10px; }
          .gallery-img { width: 31%; margin: 5px 1%; height: 100px; display: inline-block; object-fit: cover; border: 1px solid #ccc; }
          
          /* Footer */
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 3px double #ccc; font-size: 12px; color: #666; }
          .footer strong { color: #0B3A55; }
          
          /* PRINT STYLES - CRITICAL FOR STABLE PDF GENERATION */
          @media print {
              body {
                  margin: 0;
                  -webkit-print-color-adjust: exact; /* Forcing colors to print */
                  print-color-adjust: exact;
              }
              .container {
                  width: 100%;
                  margin: 0;
                  padding: 15px;
              }
              .header {
                  padding: 10px;
                  margin-bottom: 15px;
              }
              .gallery-img, .itinerary-day, .section, .list-section {
                  page-break-inside: avoid;
              }
              .columns-2 {
                -webkit-column-break-inside: avoid;
                break-inside: avoid;
              }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="trip-title">${trip.title}</div>
            <div class="trip-subtitle">An Exclusive Itinerary by Travel Wisdom</div>
          </div>
          
          <div class="info-bar">
            <div class="info-item">
              <div class="info-label">Destination</div>
              <div class="info-value">${trip.destination}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Duration</div>
              <div class="info-value">${trip.duration}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Starting Price</div>
              <div class="info-value">${trip.price}</div>
            </div>
          </div>
          
          <img src="${trip.imageUrl}" alt="${trip.title}" class="main-image" />
          
          <div class="section">
            <div class="section-title">Overview</div>
            <div class="overview-content">${cleanHtmlForPDF(trip.overview || 'Detailed overview coming soon.')}</div>
          </div>
          
          ${trip.itinerary && trip.itinerary.length > 0 && trip.itinerary[0].title !== 'Trip Details' ? `
            <div class="section">
              <div class="section-title">Detailed Itinerary</div>
              ${trip.itinerary.map(item => `
                <div class="itinerary-day">
                  <div class="day-title">${item.day > 0 ? `Day ${item.day}: ` : ''}${item.title}</div>
                  <div class="day-description">${cleanHtmlForPDF(item.description || 'Details coming soon.')}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          <div class="columns-2">
              ${trip.inclusions && trip.inclusions.length > 0 ? `
                <div class="section list-section inclusions">
                  <div class="section-title">What's Included</div>
                  <ul>
                    ${trip.inclusions.map(item => `<li>${cleanHtmlForPDF(item)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              
              ${trip.exclusions && trip.exclusions.length > 0 ? `
                <div class="section list-section exclusions">
                  <div class="section-title">What's Not Included</div>
                  <ul>
                    ${trip.exclusions.map(item => `<li>${cleanHtmlForPDF(item)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
          </div>

          ${trip.gallery && trip.gallery.length > 0 ? `
            <div class="section">
              <div class="section-title">Trip Highlights Gallery</div>
              <div class="gallery-images">
                ${trip.gallery.map(img => `<img src="${img}" alt="Trip photo" class="gallery-img" />`).join('')}
              </div>
            </div>
          ` : ''}

          <div class="footer">
            <p><strong>Generated for You by Travel Wisdom</strong></p>
            <p>For bookings and customizations, please contact us at:</p>
            <p>Phone: +91 99715 45446 | Email: info@travelwisdom.com</p>
            <p>Itinerary generated on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </body>
      </html>
    `;
    // --- End Printable HTML Content Generation ---
    
    // Write content to the new window
    printWindow.document.write(printableHTML);
    printWindow.document.close();

    // The print dialog opens automatically, allowing the user to select 'Save as PDF'
    printWindow.onload = () => {
        // Delay ensures images and styles are fully rendered before printing
        setTimeout(() => {
            printWindow.print();
        }, 500); 
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Generate PDF immediately if trip data exists
    if (trip) {
      generatePDF();
    }

    // 2. Show success notification immediately
    setShowSuccess(true);
    setIsSubmitting(false);

    // 3. Send email in background
    fetch('/api/send-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.mobileNumber,
        message: `${trip ? 'PDF Request - ' : ''}Travellers: ${formData.numberOfTravellers}, Month: ${formData.monthOfTravel}${formData.message ? ', Message: ' + formData.message : ''}`,
        tripName: trip?.title || 'General Inquiry'
      }),
    })
    .then(() => console.log('Email sent successfully in background'))
    .catch(error => console.error('Background email error:', error));

    // 4. Clear form and close modal
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

  // Placeholder URL for the Travel Wisdom Logo - size 200x200
  const LOGO_URL = TravelWisdomLogo

  return (
    <>
      <SuccessNotification
        isVisible={showSuccess}
        message={trip ? "A new window has opened with your itinerary. Please use your browser's print function to save it as a PDF!" : "Your enquiry has been sent successfully! We'll be in touch shortly."}
        onClose={() => setShowSuccess(false)}
      />

      {/* Main Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 font-inter transition-opacity duration-300">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-transform duration-300 ease-out scale-100">

          {/* Left Column: Branding and Aesthetics */}
          <div className="md:w-1/2 bg-[#0B3A55] text-white p-6 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
            {/* Subtle background overlay for visual depth */}
            <div className="absolute inset-0 bg-white opacity-5 transform skew-y-3 scale-150"></div>

            {/* Travel Wisdom Logo IMAGE Placeholder - size h-24 w-24 */}
            <img 
              src={LOGO_URL} 
              alt="Travel Wisdom Logo" 
              className="z-10 h-24 w-24 object-contain mb-3" 
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/96x96/0B3A55/FFFFFF?text=TW"; }}
            />
            
            <div className="z-10 text-center">
                <h1 className="text-3xl font-extrabold mb-1 tracking-wider">
                  Travel Wisdom
                </h1>
                <p className="text-base italic font-light opacity-80">
                  Pack right, but light.
                </p>
            </div>
            <p className="mt-3 text-center text-sm opacity-75 z-10">
              Fill out the form and a dedicated travel expert will craft your perfect itinerary.
            </p>
            {trip && (
              <div className="z-10 mt-4 p-2 bg-white bg-opacity-10 rounded-lg">
                  <p className="text-sm font-semibold">Viewing Itinerary for:</p>
                  <p className="text-lg font-bold text-[#5B92A7]">{trip.title}</p> 
              </div>
            )}
          </div>

          {/* Right Column: Form */}
          <div className="md:w-1/2 p-4 sm:p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-800">Start Your Journey</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                type="button"
                aria-label="Close form"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
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
                {/* Mobile Number */}
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

                {/* Email Address */}
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
                {/* Number of Travellers */}
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

                {/* Month of Travel */}
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

              {/* Message */}
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

              {/* Submit Button */}
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
                    <span>{trip ? 'View Itinerary & Send Enquiry' : 'Send Details'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default PopupForm;