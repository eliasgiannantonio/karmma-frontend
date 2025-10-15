import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'w-2 h-6',
    medium: 'w-2 h-6',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizes[size]} bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-lg`}></div>
      <span className="text-2xl font-bold tracking-tight logo-font">karmma.</span>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('inicio')}
          >
            <Logo size="medium" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium group"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Trabajemos Juntos
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden glass p-3 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-2 glass border-t border-gray-800/50 mt-2 rounded-b-2xl">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-3 hover:bg-white/5 transition-colors rounded-lg"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-3 hover:bg-white/5 transition-colors rounded-lg"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-3 hover:bg-white/5 transition-colors rounded-lg"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-3 hover:bg-white/5 transition-colors rounded-lg"
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 px-6 py-3 rounded-full font-bold text-center mt-4"
            >
              Trabajemos Juntos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;