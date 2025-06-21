import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { PageType } from '../App';

interface HeroSectionProps {
  onPageChange?: (page: PageType) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPageChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
    {
      title: "Transform Your Space",
      subtitle: "Complete Turnkey Interior Solutions",
      description: "End-to-end customized fit-out solutions across UAE for all segments of industry and retail requirements",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Professional Excellence",
      subtitle: "Cost Effective & Convenient Services",
      description: "Professional interior fit-out, MEP and civil maintenance company based in UAE",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Quality & Innovation",
      subtitle: "Residential & Commercial Solutions",
      description: "Working on both residential and commercial platforms with exceptional quality and safety",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNavigation = (page: PageType) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform transition-transform duration-[20000ms] ease-linear"
                style={{
                  transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.05)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center text-white">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight tracking-wide">
                <span className="inline-block animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                  {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="inline-block mr-4 transform transition-all duration-700"
                      style={{
                        animationDelay: `${0.5 + index * 0.1}s`,
                        animation: 'slideInUp 0.8s ease-out forwards'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl mb-4 font-light transform transition-all duration-1000 tracking-wide"
                 style={{
                   animationDelay: '1s',
                   animation: 'fadeInScale 1s ease-out forwards'
                 }}>
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl font-light leading-relaxed transform transition-all duration-1000 tracking-wide opacity-90"
                 style={{
                   animationDelay: '1.3s',
                   animation: 'fadeInUp 1s ease-out forwards'
                 }}>
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4"
                   style={{
                     animationDelay: '1.6s',
                     animation: 'fadeInUp 1s ease-out forwards'
                   }}>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-sm tracking-widest uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden w-fit"
                >
                  <span className="relative z-10">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
        >
          <ChevronLeft className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
        >
          <ChevronRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-12 h-3 rounded-full transition-all duration-500 transform hover:scale-110 ${
                index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/70'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-orange-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Play/Pause Control */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <Play className={`h-5 w-5 transition-transform duration-300 ${!isPlaying ? 'rotate-0' : 'scale-0'}`} />
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isPlaying ? 'scale-100' : 'scale-0'}`}>
            <div className="w-1.5 h-4 bg-white rounded-sm mr-1"></div>
            <div className="w-1.5 h-4 bg-white rounded-sm"></div>
          </div>
        </button>
      </section>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;