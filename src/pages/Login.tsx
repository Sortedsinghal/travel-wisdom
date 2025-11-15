import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Simple in-memory storage for registered users (in real app, this would be a database)
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user exists in registered users
    const userExists = registeredUsers.find((user: any) => user.email === formData.email);
    
    if (userExists) {
      toast({
        title: "Login Successful!",
        description: "Welcome back to Travel Wisdom.",
      });
      setFormData({ email: "", password: "" });
    } else {
      toast({
        title: "Welcome to Travel Wisdom!",
        description: "It looks like you're new here. Let's create your account to get started on your travel journey.",
        variant: "default",
      });
      setTimeout(() => {
        navigate('/register');
      }, 1500);
    }
  };

  const handleGoogleSignIn = () => {
    toast({
      title: "Google Sign In",
      description: "Google authentication requires proper OAuth setup. Please use the regular login form for now.",
      variant: "default",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Login Form */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0B3A55] mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your Travel Wisdom account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-[#0B3A55]">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#0B3A55]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-[#0B3A55]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#0B3A55]" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                    className="pl-10 pr-10 h-12 text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0B3A55] hover:text-blue-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label htmlFor="remember" className="text-sm text-[#0B3A55] cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full h-12 bg-[#0B3A55] hover:bg-[#0A2E44] text-white font-semibold text-base md:text-lg min-h-[48px]">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full h-12 border-[#0B3A55] text-[#0B3A55] hover:bg-gray-50 min-h-[48px]"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Sign in with Google
            </Button>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-[#0B3A55]">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
