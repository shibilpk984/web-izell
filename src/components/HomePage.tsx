import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star, Award, Users } from 'lucide-react';

const HomePage: React.FC = () => {
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

  const services = [
    {
      title: "Interior Fit-Out",
      description: "End-to-end comprehensive range of customized fit-out solutions for all segments",
      icon: "🏗️",
      features: ["Office Fit-out", "Retail Solutions", "Hospital & Clinics", "Residential Projects"]
    },
    {
      title: "MEP Services",
      description: "Complete mechanical, electrical and plumbing work for interior fit-out projects",
      icon: "⚡",
      features: ["Electrical Installation", "Plumbing Systems", "HVAC Solutions", "Fire Safety"]
    },
    {
      title: "Civil Maintenance",
      description: "Professional civil maintenance services with cost-effective solutions",
      icon: "🔧",
      features: ["Structural Work", "Flooring Solutions", "Wall Finishing", "Gypsum Work"]
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className={`max-w-4xl mx-auto px-4 transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
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
            
            <p className="text-xl md:text-3xl mb-4 font-light transform transition-all duration-1000"
               style={{
                 animationDelay: '1s',
                 animation: 'fadeInScale 1s ease-out forwards'
               }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto transform transition-all duration-1000"
               style={{
                 animationDelay: '1.3s',
                 animation: 'fadeInUp 1s ease-out forwards'
               }}>
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
                 style={{
                   animationDelay: '1.6s',
                   animation: 'fadeInUp 1s ease-out forwards'
                 }}>
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden btn-smooth">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  View Portfolio
                </span>
              </button>
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

      {/* Services Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive interior design and fit-out solutions tailored to transform your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 border border-gray-100 hover:border-orange-200 overflow-hidden card-smooth"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:text-orange-600 transition-colors duration-300 transform group-hover:translate-x-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4 block">
              Why Choose Izell Interiors
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Interior Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a professional interior fit-out, MEP and civil maintenance company based in UAE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "15+ Years Experience",
                description: "Established reputation in UAE market with proven track record",
                color: "text-blue-600"
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description: "Exceptional level of quality and safety in every project",
                color: "text-green-600"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Skilled professionals with modern machinery and equipment",
                color: "text-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for cost-effective and convenient interior solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Our Projects
            </button>
          </div>
        </div>
      </section>

      <style >{`
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
    </div>
  );
};

export default HomePage;