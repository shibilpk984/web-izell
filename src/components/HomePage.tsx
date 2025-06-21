import React from 'react';
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';
import HeroSection from "./Homepage/HeroSection";
import SpecializationSection from './Homepage/SpecializationSection';
import ServicesSection from './Homepage/ServicesSection';
import ApproachSection from './Homepage/ApproachSection';
import WhyChooseUsSection from './Homepage/WhyChooseUsSection';
import CTASection from './Homepage/CTASection';
import type { PageType } from '../App';

interface HomePageProps {
  onPageChange?: (page: PageType) => void;
  currentPage?: PageType;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange, currentPage }) => {
  return (
    <AnimatedPage>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection onPageChange={onPageChange} />

        {/* Specialization Section */}
        <SpecializationSection onPageChange={onPageChange} />

        {/* Services Preview Section */}
        <ServicesSection />

        {/* Brand Slogan - Consult Design Execute */}
        <ApproachSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* CTA Section */}
        <CTASection onPageChange={onPageChange} />

        {/* Footer */}
        <Footer currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </AnimatedPage>
  );
};

export default HomePage;