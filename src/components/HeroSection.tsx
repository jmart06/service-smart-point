
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, FileText, User, Printer } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      icon: ShoppingCart,
      title: "Digital Supermarket",
      description: "Fresh groceries delivered to your door",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: User,
      title: "Banking & LIC",
      description: "ATM, bill payments, insurance services",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: FileText,
      title: "Government Services",
      description: "PAN card, Aadhaar, government forms",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Printer,
      title: "Print & Xerox",
      description: "Document printing, scanning, binding",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, they can start shopping
      console.log('User is logged in, proceed with shopping');
    } else {
      // If user is not logged in, redirect to auth page
      navigate('/auth');
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            All Services, <span className="text-primary">One Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your neighborhood digital service center offering groceries, banking, government services, and document solutions - all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={handleGetStarted}>
              {user ? 'Start Shopping' : 'Get Started'}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Browse Services
            </Button>
          </div>
          {!user && (
            <p className="text-sm text-muted-foreground mt-4">
              Sign up to access all features and start shopping
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
