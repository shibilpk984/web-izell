import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Refurbishment & Renovations",
      description: "Complete refurbishment and renovation services for residential and commercial spaces",
      icon: "🏠",
      features: ["Space Planning", "Interior Upgrades", "Bathroom Renovations", "Kitchen Remodeling"]
    },
    {
      title: "Design & Build",
      description: "End-to-end design and construction services from concept to completion",
      icon: "📐",
      features: ["Architectural Design", "3D Visualization", "Project Planning", "Construction Management"]
    },
    {
      title: "Carpentry & Joinery Work",
      description: "Custom carpentry and joinery solutions with precision craftsmanship",
      icon: "🪚",
      features: ["Custom Furniture", "Built-in Storage", "Wooden Fixtures", "Cabinet Making"]
    },
    {
      title: "MEP Services & AMCs",
      description: "Comprehensive mechanical, electrical, plumbing services and annual maintenance contracts",
      icon: "⚡",
      features: ["Electrical Installation", "Plumbing Systems", "HVAC Solutions", "Maintenance Contracts"]
    },
    {
      title: "Civil Works",
      description: "Professional civil construction and maintenance services with quality assurance",
      icon: "👷",
      features: ["Structural Work", "Flooring Solutions", "Wall Finishing", "General Construction"]
    }
  ];

  return (
    <section className="py-24 bg-[#efefe5] relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 border border-gray-100 hover:border-orange-200 overflow-hidden card-smooth"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-2 text-orange-500 font-semibold text-xs group-hover:text-orange-600 transition-colors duration-300 transform group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;