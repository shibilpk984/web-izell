import React, { useState } from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      scrollToTop();
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "#", gradient: "from-purple-500 to-pink-500", name: "Instagram" },
    { icon: Facebook, href: "#", gradient: "from-blue-600 to-blue-500", name: "Facebook" }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="relative bg-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Company Branding */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-2xl font-bold  ">Izell Interiors</h2>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm text-center md:text-left">
                  Crafting exceptional interior spaces with precision, creativity, and excellence across the UAE.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>ISO Certified</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="text-center space-y-4">
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-4 relative">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Explore
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                </h3>
              </div>
              
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-w-sm mx-auto">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.id)}
                    className={`group relative bg-transparent hover:bg-slate-800/20 rounded-lg py-2 px-3 transition-all duration-300 ${
                      currentPage === link.id ? 'text-orange-400' : 'text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                        currentPage === link.id ? 'bg-orange-400 scale-125' : 'bg-slate-500 group-hover:bg-orange-400 group-hover:scale-110'
                      }`}></div>
                      <span className="font-medium text-sm group-hover:text-orange-300 transition-colors duration-300 flex-1 text-center">
                        {link.name}
                      </span>
                      <div className="w-1.5 h-1.5 flex-shrink-0 opacity-0"></div>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Social Links */}
              <div className="flex flex-col items-center space-y-3">
                <h4 className="text-xs font-medium text-slate-300">Follow Our Journey</h4>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      title={social.name}
                      className={`bg-gradient-to-r ${social.gradient} p-2.5 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group hover:-translate-y-1`}
                    >
                      <social.icon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Additional links */}
              <div className="pt-4 border-t border-slate-700/50 space-y-2">
                <div className="flex flex-col sm:flex-row gap-3 justify-center text-xs">
                  <a href="#" className="group flex items-center justify-center gap-1.5 text-slate-400 hover:text-orange-400 transition-all duration-300">
                    <div className="w-1 h-1 bg-slate-500 group-hover:bg-orange-400 rounded-full transition-colors duration-300"></div>
                    Privacy Policy
                  </a>
                  <a href="#" className="group flex items-center justify-center gap-1.5 text-slate-400 hover:text-orange-400 transition-all duration-300">
                    <div className="w-1 h-1 bg-slate-500 group-hover:bg-orange-400 rounded-full transition-colors duration-300"></div>
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative z-10 border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="text-center">
              <p className="text-slate-400 text-xs">
                © 2025 Izell Interiors LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button - matching homepage CTA styling */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-full shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25 z-50 group ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </>
  );
};

export default Footer;