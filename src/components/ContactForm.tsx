import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    travellersCount: "",
    monthOfTravel: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trip Details Sent!",
      description: "We'll contact you soon with the best travel options.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Plan Your Next Trip
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out your details and we'll create the perfect travel experience for you
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="p-6 card-shadow bg-card/95 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <div className="col-span-2">
                  <Input
                    placeholder="Mobile Number*"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Select onValueChange={(value) => handleInputChange("travellersCount", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Travellers Count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3-5">3-5 People</SelectItem>
                    <SelectItem value="6+">6+ People</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleInputChange("monthOfTravel", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Month of Travel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="june">June</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-island">
                  <CheckCircle className="h-4 w-4" />
                  <span>We assure the privacy of your contact data</span>
                </div>
                <div className="flex items-center gap-2 text-destructive">
                  <Shield className="h-4 w-4" />
                  <span>No annoying spam calls</span>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 button-shadow text-lg font-semibold"
              >
                Send Details
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;