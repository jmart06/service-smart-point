
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SupermarketSection from '@/components/SupermarketSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SupermarketSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
