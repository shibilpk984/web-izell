import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp, Send, CheckCircle } from 'lucide-react';

interface FooterProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsNewsletterSubmitted(true);
    setNewsletterEmail('');
    
    setTimeout(() => setIsNewsletterSubmitted(false), 3000);
  };

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      scrollToTop();
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      values: ["+971 50 123 4567", "+971 4 567 8900"],
      href: "tel:+971501234567",
      color: "text-green-500"
    },
    {
      icon: Mail,
      label: "Email",
      values: ["info@izellinteriors.com", "projects@izellinteriors.com"],
      href: "mailto:info@izellinteriors.com",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      values: ["Dubai, United Arab Emirates", "Serving across UAE"],
      href: "https://maps.google.com",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "bg-gradient-to-r from-purple-500 to-pink-500", name: "Instagram" },
    { icon: Facebook, href: "#", color: "bg-blue-600", name: "Facebook" },
    { icon: Linkedin, href: "#", color: "bg-blue-700", name: "LinkedIn" },
    { icon: Twitter, href: "#", color: "bg-blue-400", name: "Twitter" }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Interior Fit-Out',
    'MEP Services',
    'Civil Maintenance',
    'Office Renovation',
    'Residential Interior',
    'Commercial Projects'
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="https://izellinteriors.com/img/logo.png"
                  alt="Izell Interiors Logo"
                  className="h-16 w-auto mb-4"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.2)'
                  }}
                />
                <p className="text-gray-300 leading-relaxed">
                  Professional interior fit-out, MEP and civil maintenance company providing cost-effective solutions across UAE.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h4>
                {isNewsletterSubmitted ? (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-300"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      title={social.name}
                      className={`${social.color} p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                    >
                      <social.icon className="h-5 w-5 group-hover:animate-bounce" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className={`text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 block ${
                        currentPage === link.id ? 'text-orange-400 font-medium' : ''
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 block">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3">
                      <div className={`${item.color} p-2 rounded-lg mt-1`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">{item.label}</div>
                        {item.values.map((value, valueIndex) => (
                          <div key={valueIndex} className="text-gray-300 text-sm group-hover:text-orange-300 transition-colors duration-300">
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h5 className="font-semibold text-white mb-3">Business Hours</h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 Izell Interiors LLC. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Licensed & Insured
                </span>
                <span>•</span>
                <span>Made with ❤️ in UAE</span>
                <span>•</span>
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl z-50 group ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Top
        </div>
      </button>
    </>
  );
};

export default Footer;