// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import PopupForm from "./components/PopupForm";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import DomesticTrips from "./pages/DomesticTrips";
import HimachalPradesh from './pages/HimachalPradesh';
import Kashmir from './pages/Kashmir';
import Kerala from "./pages/Kerala";
import Rajasthan from './pages/Rajasthan';
import Uttarakhand from './pages/Uttarakhand';
import Vietnam from './pages/Vietnam';
import Thailand from './pages/Thailand';
import Kazakhstan from './pages/Kazakhstan';
import Bali from './pages/Bali';
import Dubai from './pages/Dubai';
import Bhutan from './pages/Bhutan';
import Spiti from './pages/Spiti';
import LehLadakh from './pages/LehLadakh';
import HimachalBackpacking from './pages/HimachalBackpacking';
import ChoptaTungnath from './pages/ChoptaTungnath';
import ManaliSissu from './pages/ManaliSissu';
import ManaliSissuKasol from './pages/ManaliSissuKasol';
import JibhiTirthanValley from './pages/JibhiTirthanValley';
import KasolKheerganga from './pages/KasolKheerganga';
import McleodganjTriund from './pages/McleodganjTriund';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UpcomingGroupTrips from "./pages/UpcomingGroupTrips";
import WeekendTrips from "./pages/WeekendTrips";
import BackpackingTrips from "./pages/BackpackingTrips";
import InternationalTrips from "./pages/InternationalTrips";
import CorporateTours from "./pages/CorporateTours";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import Reviews from "./pages/Reviews";

// 1. IMPORT THE NEW TRIP DETAIL PAGE COMPONENT (You'll create this file next)
import TripDetailPage from "./pages/TripDetailPage";
import BlogDetail from "./pages/BlogDetail";
import SearchResults from "./pages/SearchResults";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
        <Router>
          <ScrollToTop />
        <Routes>
          {/* --- Existing Static Routes --- */}
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/domestic-trips" element={<DomesticTrips />} />
          <Route path="/himachal-pradesh" element={<HimachalPradesh />} />
          <Route path="/kashmir" element={<Kashmir />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/rajasthan" element={<Rajasthan />} />
          <Route path="/uttarakhand" element={<Uttarakhand />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/kazakhstan" element={<Kazakhstan />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/bhutan" element={<Bhutan />} />
          <Route path="/spiti" element={<Spiti />} />
          <Route path="/leh-ladakh" element={<LehLadakh />} />
          <Route path="/himachal-backpacking" element={<HimachalBackpacking />} />
          <Route path="/chopta-tungnath" element={<ChoptaTungnath />} />
          <Route path="/manali-sissu" element={<ManaliSissu />} />
          <Route path="/manali-sissu-kasol" element={<ManaliSissuKasol />} />
          <Route path="/jibhi-tirthan-valley" element={<JibhiTirthanValley />} />
          <Route path="/kasol-kheerganga-trek" element={<KasolKheerganga />} />
          <Route path="/mcleodganj-triund-trek" element={<McleodganjTriund />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upcoming-group-trips" element={<UpcomingGroupTrips />} />
          <Route path="/weekend-trips" element={<WeekendTrips />} />
          <Route path="/backpacking-trips" element={<BackpackingTrips />} />
          <Route path="/international-trips" element={<InternationalTrips />} />
          <Route path="/corporate-tours" element={<CorporateTours />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-condition" element={<TermsConditions />} />
          <Route path="/Cancellation-and-Refund-Policy" element={<CancellationRefundPolicy />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* 2. ADD THE DYNAMIC ROUTE FOR TRIP DETAILS */}
          <Route path="/trip/:tripSlug" element={<TripDetailPage />} />
          
          {/* 3. ADD THE DYNAMIC ROUTE FOR BLOG DETAILS */}
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          
          {/* 4. ADD THE SEARCH RESULTS ROUTE */}
          <Route path="/search-results" element={<SearchResults />} />

          {/* --- Catch-all 404 Route --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;