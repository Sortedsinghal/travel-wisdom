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

              <div>
                <Textarea
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[50px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 button-shadow text-lg font-semibold bg-[#0B3A55] hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                Request Call Back
              </Button>
            </form>
          </Card>
        </div>
  );
};

export default ContactForm;