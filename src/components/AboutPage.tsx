import React, { useState, useEffect } from 'react';
import { Star, Users, Award, TrendingUp, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';
import type { PageType } from '../App';

interface AboutPageProps {
  onPageChange?: (page: PageType) => void;
  currentPage?: PageType;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, currentPage }) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, experience: 0, clients: 0 });
  
  useEffect(() => {
    const observerOptions = {
      threshold: [0.1, 0.3, 0.5],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute('data-scroll-id');
        if (elementId && entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setVisibleElements(prev => new Set(prev).add(elementId));
          
          if (elementId === 'stats' && !visibleElements.has('stats')) {
            setTimeout(() => animateCounters(), 200);
          }
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-scroll-id]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleElements]);

  const animateCounters = () => {
    const duration = 2500;
    const targets = { projects: 200, satisfaction: 98, experience: 15, clients: 150 };
    
    Object.entries(targets).forEach(([key, target]) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 16);
    });
  };

  const getScrollOpacity = (elementId: string) => {
    return visibleElements.has(elementId) ? 1 : 0;
  };

  const getScrollTransform = (elementId: string, direction: 'up' | 'left' | 'right' = 'up') => {
    if (!visibleElements.has(elementId)) {
      switch (direction) {
        case 'left': return 'translateX(-50px)';
        case 'right': return 'translateX(50px)';
        default: return 'translateY(50px)';
      }
    }
    return 'translateX(0) translateY(0)';
  };

  const handleNavigation = (page: PageType) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="About Izell Interiors"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 
                data-scroll-id="hero-title"
                className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000"
                style={{
                  opacity: getScrollOpacity('hero-title'),
                  transform: getScrollTransform('hero-title', 'up')
                }}
              >
                About Izell Interiors
              </h1>
              <p 
                data-scroll-id="hero-subtitle"
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300"
                style={{
                  opacity: getScrollOpacity('hero-subtitle'),
                  transform: getScrollTransform('hero-subtitle', 'up')
                }}
              >
                Professional interior fit-out, MEP and civil maintenance company based in UAE
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div 
                data-scroll-id="story-content"
                className="transition-all duration-1000"
                style={{
                  opacity: getScrollOpacity('story-content'),
                  transform: getScrollTransform('story-content', 'left')
                }}
              >
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building Excellence Since 2008
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Izell Interiors is a professional interior fit-out, MEP and civil maintenance company based in UAE with an aim to provide customers with cost-effective and convenient services in all aspects. We are working on both residential and commercial platforms across the Emirates.
                  </p>
                  <p>
                    We provide end-to-end and comprehensive range of customized fit-out solutions across UAE for all segments of industry and retail requirements including offices, hospitals and clinics, supermarkets, cafeteria, retail shops, residential such as villas and apartments.
                  </p>
                  <p>
                    We ensure that every minute aspect of the project is crafted to meet our clients' requirements with our team of professionals. We strive to deliver projects on time, cost-effectively and with an exceptional level of quality and safety.
                  </p>
                </div>
              </div>
              
              <div 
                data-scroll-id="story-image"
                className="relative transition-all duration-1000 delay-300"
                style={{
                  opacity: getScrollOpacity('story-image'),
                  transform: getScrollTransform('story-image', 'right')
                }}
              >
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Izell Interiors Projects"
                    className="rounded-3xl shadow-2xl w-full h-96 object-cover transform transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              data-scroll-id="stats-header"
              className="text-center mb-16 transition-all duration-1000"
              style={{
                opacity: getScrollOpacity('stats-header'),
                transform: getScrollTransform('stats-header', 'up')
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Numbers that speak for our commitment to excellence and quality
              </p>
            </div>

            <div 
              data-scroll-id="stats"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { key: 'projects', label: 'Projects Completed', suffix: '+', icon: Award, color: 'from-blue-500 to-blue-600' },
                { key: 'satisfaction', label: 'Client Satisfaction', suffix: '%', icon: Star, color: 'from-green-500 to-green-600' },
                { key: 'experience', label: 'Years in UAE', suffix: '+', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
                { key: 'clients', label: 'Happy Clients', suffix: '+', icon: Users, color: 'from-orange-500 to-orange-600' }
              ].map(({ key, label, suffix, icon: Icon, color }, index) => (
                <div 
                  key={key}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 text-center group"
                  style={{
                    opacity: getScrollOpacity('stats'),
                    transform: getScrollTransform('stats', 'up'),
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {counters[key as keyof typeof counters]}{suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  id: 'mission',
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To provide customers with cost-effective and convenient interior fit-out services across UAE, ensuring every project meets the highest standards of quality and safety.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  id: 'vision',
                  icon: Eye,
                  title: 'Our Vision',
                  description: 'To be the leading interior fit-out company in UAE, recognized for innovation, excellence, and reliability in delivering comprehensive interior solutions.',
                  color: 'from-blue-500 to-purple-500'
                },
                {
                  id: 'values',
                  icon: Heart,
                  title: 'Our Values',
                  description: 'Quality, integrity, innovation, and customer satisfaction are at the core of everything we do. We believe in building lasting relationships through exceptional service.',
                  color: 'from-green-500 to-teal-500'
                }
              ].map((item, index) => (
                <div 
                  key={item.id}
                  data-scroll-id={item.id}
                  className="text-center group transition-all duration-1000"
                  style={{
                    opacity: getScrollOpacity(item.id),
                    transform: getScrollTransform(item.id, 'up'),
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              data-scroll-id="services-overview"
              className="text-center mb-16 transition-all duration-1000"
              style={{
                opacity: getScrollOpacity('services-overview'),
                transform: getScrollTransform('services-overview', 'up')
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of services for both residential and commercial platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Commercial Projects',
                  items: ['Offices', 'Cafes & Restaurants', 'Supermarkets', 'Hospitals & Clinics', 'Retail Shops', 'Educational Institutions'],
                  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Residential Projects',
                  items: ['Bedrooms', 'Living Halls', 'TV Wall Units', 'Washroom Vanities', 'Wardrobes', 'Curtains & Wall Finishing'],
                  image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                }
              ].map((category, index) => (
                <div 
                  key={category.title}
                  data-scroll-id={`category-${index}`}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                  style={{
                    opacity: getScrollOpacity(`category-${index}`),
                    transform: getScrollTransform(`category-${index}`, index === 0 ? 'left' : 'right'),
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          data-scroll-id="cta"
          className="py-24 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden transition-all duration-1000"
          style={{
            opacity: getScrollOpacity('cta'),
            transform: getScrollTransform('cta', 'up')
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your interior fit-out requirements and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => handleNavigation('projects')}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Our Projects
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;