import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      details: ["+971 50 123 4567", "+971 4 567 8900"]
    },
    {
      icon: Mail,
      label: "Email",
      details: ["info@izellinteriors.com", "projects@izellinteriors.com"]
    },
    {
      icon: MapPin,
      label: "Location",
      details: ["Dubai, United Arab Emirates"]
    },
    {
      icon: Clock,
      label: "Working Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"]
    }
  ];

  const services = [
    "Interior Fit-Out",
    "MEP Services", 
    "Civil Maintenance",
    "Office Renovation",
    "Residential Interior",
    "Commercial Projects"
  ];

  const quickLinks = [
    "About Us",
    "Our Projects",
    "Services",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="https://www.izellinteriors.com/img/izel-logo.png"
                  alt="Izell Interiors Logo"
                  className="h-16 w-auto mb-4"
                  style={{
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.2)'
                  }}
                />
                <h3 className="text-xl font-bold text-white mb-4">Izell Interiors</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Professional interior fit-out, MEP and civil maintenance company based in UAE. 
                  We provide cost-effective and convenient services across the Emirates.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <info.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">{info.label}</h5>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated With Our Latest Projects
                </h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter to receive updates about our latest interior projects and design trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © {currentYear} Izell Interiors. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;