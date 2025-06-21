import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import type { PageType } from '../App';

interface CTASectionProps {
  onPageChange?: (page: PageType) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onPageChange }) => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLElement>(null);

  // Intersection Observer for CTA section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCtaVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const handleNavigation = (page: PageType) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <section 
      ref={ctaRef}
      className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl transition-all duration-1000 ${
          ctaVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}></div>
        <div className={`absolute bottom-10 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
          ctaVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
          ctaVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}></div>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="ctaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#ctaGrid)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main heading with staggered animation */}
        <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
          ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <span className={`inline-block transition-all duration-700 delay-200 ${
            ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>Ready to</span>{' '}
          <span className={`inline-block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent transition-all duration-700 delay-400 ${
            ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>Transform</span>{' '}
          <span className={`inline-block transition-all duration-700 delay-600 ${
            ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>Your Space?</span>
        </h2>
        
        {/* Subtitle */}
        <p className={`text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${
          ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Get in touch with our expert team for cost-effective and convenient interior solutions
        </p>
        
        {/* Buttons with enhanced animations */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${
          ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button 
            onClick={() => handleNavigation('contact')}
            className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          </button>
          
          <button 
            onClick={() => handleNavigation('projects')}
            className="group relative border-2 border-gray-400 text-gray-300 hover:border-amber-400 hover:text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10">View Our Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className={`flex justify-center items-center gap-8 mt-16 transition-all duration-1000 delay-1200 ${
          ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;