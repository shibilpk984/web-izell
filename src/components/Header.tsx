import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-black/80 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 transform transition-all duration-700 hover:scale-105">
            <button onClick={() => handleNavClick('home')}>
              <img
                src="https://www.izellinteriors.com/img/izel-logo.png"
                alt="Izell Interiors Logo"
                className="h-20 w-auto transition-all duration-300"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative group ${
                    currentPage === item.id
                      ? 'text-orange-400'
                      : 'text-white hover:text-orange-400'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInDown 0.6s ease-out forwards'
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                isScrolled || currentPage !== 'home'
                  ? 'bg-black/60 text-white hover:text-orange-400 hover:bg-black/80'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/85 backdrop-blur-sm border-t border-gray-600/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left block px-3 py-2 text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  currentPage === item.id
                    ? 'text-orange-400 bg-black/60'
                    : 'text-white hover:bg-black/60 hover:text-orange-400'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;