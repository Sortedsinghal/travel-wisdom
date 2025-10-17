// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UpcomingGroupTrips from "./pages/UpcomingGroupTrips";
import WeekendTrips from "./pages/WeekendTrips";
import BackpackingTrips from "./pages/BackpackingTrips";
import InternationalTrips from "./pages/InternationalTrips";
import CorporateTours from "./pages/CorporateTours";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upcoming-group-trips" element={<UpcomingGroupTrips />} />
          <Route path="/weekend-trips" element={<WeekendTrips />} />
          <Route path="/backpacking-trips" element={<BackpackingTrips />} />
          <Route path="/international-trips" element={<InternationalTrips />} />
          <Route path="/corporate-tours" element={<CorporateTours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;