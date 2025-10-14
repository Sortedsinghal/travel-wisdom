import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import DomesticTrips from "./pages/DomesticTrips";
import WeekendTrips from "./pages/WeekendTrips";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UpcomingGroupTrips from "./pages/UpcomingGroupTrips";
import BackpackingTrips from "./pages/BackpackingTrips";
import InternationalTrips from "./pages/InternationalTrips";
import CorporateTours from "./pages/CorporateTours";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upcoming-group-trips" element={<UpcomingGroupTrips />} />
          <Route path="/domestic-trips" element={<DomesticTrips />} />
          <Route path="/weekend-trips" element={<WeekendTrips />} />
          <Route path="/backpacking-trips" element={<BackpackingTrips />} />
          <Route path="/international-trips" element={<InternationalTrips />} />
          <Route path="/corporate-tours" element={<CorporateTours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
