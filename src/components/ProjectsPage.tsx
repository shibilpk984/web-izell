import React, { useState, useEffect } from 'react';
import { Eye, ArrowRight, Calendar, MapPin, User, Building, Search, Filter } from 'lucide-react';
import AnimatedPage from './AnimatedPage';
import type { PageType } from '../App';

interface Project {
  id: number;
  title: string;
  category: string;
  architect: string;
  client: string;
  image: string;
  date: string;
  location: string;
  description: string;
  area: string;
  status: string;
}

interface ProjectsPageProps {
  onPageChange?: (page: PageType) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Corporate Office Complex",
      category: "Office Fit Out",
      architect: "Design & Execution by Izell Interiors",
      client: "Business Tower Dubai",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024",
      location: "Dubai, UAE",
      description: "Modern corporate office with state-of-the-art facilities and contemporary design",
      area: "5,000 sqft",
      status: "Completed"
    },
    {
      id: 2,
      title: "Modern Medical Center",
      category: "Hospital & Clinic",
      architect: "Complete Fit-out by Izell Interiors",
      client: "Dubai Health Center",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024",
      location: "Abu Dhabi, UAE",
      description: "Advanced medical facility with specialized equipment installation and MEP services",
      area: "8,000 sqft",
      status: "Completed"
    },
    {
      id: 3,
      title: "Premium Supermarket",
      category: "Retail & Supermarket",
      architect: "Design & Build by Izell Interiors",
      client: "Fresh Market UAE",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Sharjah, UAE",
      description: "Large-scale retail space with modern refrigeration and display systems",
      area: "12,000 sqft",
      status: "Completed"
    },
    {
      id: 4,
      title: "Luxury Villa Interior",
      category: "Residential Villa",
      architect: "Complete Interior by Izell Interiors",
      client: "Private Villa Dubai",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Dubai, UAE",
      description: "Elegant villa interior with custom joinery and premium finishes",
      area: "6,500 sqft",
      status: "Completed"
    },
    {
      id: 5,
      title: "Modern Restaurant",
      category: "Restaurant & Cafe",
      architect: "Fit-out & MEP by Izell Interiors",
      client: "Gourmet Dining Dubai",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Dubai, UAE",
      description: "Contemporary restaurant with professional kitchen setup and ambient lighting",
      area: "3,500 sqft",
      status: "Completed"
    },
    {
      id: 6,
      title: "Contemporary Apartment",
      category: "Residential Apartment",
      architect: "Interior Design by Izell Interiors",
      client: "Downtown Residence",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024",
      location: "Dubai, UAE",
      description: "Modern apartment interior with smart home integration and custom storage solutions",
      area: "2,200 sqft",
      status: "Completed"
    },
    {
      id: 7,
      title: "Educational Institution",
      category: "School & University",
      architect: "Complete Fit-out by Izell Interiors",
      client: "Dubai International School",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Dubai, UAE",
      description: "Modern educational facility with interactive learning spaces and advanced technology",
      area: "15,000 sqft",
      status: "Completed"
    },
    {
      id: 8,
      title: "Retail Showroom",
      category: "Retail & Showroom",
      architect: "Design & Execution by Izell Interiors",
      client: "Luxury Brands Outlet",
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024",
      location: "Dubai, UAE",
      description: "High-end retail showroom with premium display systems and lighting",
      area: "4,000 sqft",
      status: "In Progress"
    }
  ];

  const projectCategories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'office', label: 'Office', count: projects.filter(p => p.category.toLowerCase().includes('office')).length },
    { key: 'hospital', label: 'Medical', count: projects.filter(p => p.category.toLowerCase().includes('hospital') || p.category.toLowerCase().includes('clinic')).length },
    { key: 'retail', label: 'Retail', count: projects.filter(p => p.category.toLowerCase().includes('retail') || p.category.toLowerCase().includes('supermarket')).length },
    { key: 'restaurant', label: 'Restaurant', count: projects.filter(p => p.category.toLowerCase().includes('restaurant') || p.category.toLowerCase().includes('cafe')).length },
    { key: 'residential', label: 'Residential', count: projects.filter(p => p.category.toLowerCase().includes('residential') || p.category.toLowerCase().includes('villa') || p.category.toLowerCase().includes('apartment')).length },
    { key: 'education', label: 'Education', count: projects.filter(p => p.category.toLowerCase().includes('school') || p.category.toLowerCase().includes('university')).length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeTab === 'all' || 
      project.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      project.title.toLowerCase().includes(activeTab.toLowerCase());
    
    const matchesSearch = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => new Set(prev).add(projectId));
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

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
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Our Projects"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Showcasing our expertise in interior fit-out, MEP services, and civil maintenance across UAE
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {projectCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveTab(category.key)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex items-center gap-2 ${
                      activeTab === category.key
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                    }`}
                  >
                    <span className="relative z-10">{category.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeTab === category.key 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of successful projects across various sectors
              </p>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filter options</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    data-project-id={project.id}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 ${
                      visibleProjects.has(project.id) 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-20 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Status Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        {project.status}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                        {project.category}
                      </div>
                      
                      {/* Overlay content */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                        hoveredProject === project.id 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}>
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                          <Eye className="w-5 h-5" />
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-4 h-4 mr-2 text-orange-500" />
                          <span className="font-medium">Client:</span> {project.client}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                          <span className="font-medium">Location:</span> {project.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="w-4 h-4 mr-2 text-orange-500" />
                          <span className="font-medium">Area:</span> {project.area}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                          <span className="font-medium">Year:</span> {project.date}
                        </div>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <p className="text-gray-400 text-xs">
                        {project.architect}
                      </p>
                      
                      {/* Progress bar animation */}
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
                        <div 
                          className={`h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ${
                            hoveredProject === project.id ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-3 text-orange-500" />
                      <span className="font-medium">Client:</span> {selectedProject.client}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                      <span className="font-medium">Location:</span> {selectedProject.location}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-3 text-orange-500" />
                      <span className="font-medium">Area:</span> {selectedProject.area}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                      <span className="font-medium">Year:</span> {selectedProject.date}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  <p className="text-gray-600">{selectedProject.architect}</p>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleNavigation('contact')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Next Project
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </section>

        <style>{`
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
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    </AnimatedPage>
  );
};

export default ProjectsPage;