import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { API_BASE_URL } from "@/config/api";

interface QueryFormProps {
  isOpen: boolean;
  onClose: () => void;
  tripName?: string;
}

export const QueryForm = ({ isOpen, onClose, tripName }: QueryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/send-query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tripName })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-green-600">Query Sent!</h3>
            <p className="mt-2">Our team will reach out to you soon</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Query{tripName && ` - ${tripName}`}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Query"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};