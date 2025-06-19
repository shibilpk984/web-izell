import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export type PageType = 'home' | 'about' | 'projects' | 'contact';

const IzellInteriorsApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [direction, setDirection] = useState<1 | -1>(1);

  const pageOrder: PageType[] = ['home', 'about', 'projects', 'contact'];

  const handlePageChange = (newPage: PageType) => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(newPage);
    
    // Determine slide direction based on page order
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage key="about" onPageChange={handlePageChange} />;
      case 'projects':
        return <ProjectsPage key="projects" onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage key="contact" onPageChange={handlePageChange} />;
      default:
        return <HomePage key="home" onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
      
      <main className="relative w-full">
        <AnimatePresence initial={false} custom={direction}>
          {renderPage()}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default IzellInteriorsApp;