import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TripCategories from "@/components/TripCategories";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TripCategories />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
