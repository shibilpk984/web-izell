import React, { useState, useEffect, useRef } from 'react';
import { Award, Star, Users } from 'lucide-react';
import type { PageType } from '../App';

interface SpecializationSectionProps {
  onPageChange?: (page: PageType) => void;
}

const SpecializationSection: React.FC<SpecializationSectionProps> = ({ onPageChange }) => {
  const [specializationVisible, setSpecializationVisible] = useState(false);
  const specializationRef = useRef<HTMLElement>(null);

  // Intersection Observer for Specialization section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSpecializationVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (specializationRef.current) {
      observer.observe(specializationRef.current);
    }

    return () => {
      if (specializationRef.current) {
        observer.unobserve(specializationRef.current);
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
      ref={specializationRef}
      className="py-24 bg-[#efefe5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          specializationVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Izell Interiors specializes in{' '}
            <span className="text-orange-500">
              comprehensive interior fit-out solutions
            </span>
            , ensuring exceptional quality and seamless project delivery across the UAE.
          </h2>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            specializationVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional Interior Design"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            specializationVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6 pt-16">
              <h3 className="text-3xl font-bold text-gray-900">
                Your Trusted Partner in Interior Excellence
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a professional interior fit-out, MEP and civil maintenance company proudly serving the UAE. 
                With years of industry expertise, we've become your single point solution for exceptional interior design, 
                fit-out, and contracting services.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive range of customized solutions covers all segments of industry and retail requirements. 
                Every project detail is carefully crafted to meet your specific needs, delivered on time, on budget, 
                and with uncompromising quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => handleNavigation('about')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </button>
                <button 
                  onClick={() => handleNavigation('projects')}
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {[
            {
              icon: Award,
              title: "15+ Years Experience",
              description: "Established reputation in UAE market with proven track record",
              color: "text-blue-600 bg-[#efefe5] "
            },
            {
              icon: Star,
              title: "Quality Assurance",
              description: "Exceptional level of quality and safety in every project",
              color: "text-green-600 bg-[#efefe5] "
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Skilled professionals with modern machinery and equipment",
              color: "text-purple-600 bg-[#efefe5] "
            }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#efefe5] rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;