import React from 'react';
import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#1a1b1f] border-t border-gray-800 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#202125] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-10 h-14 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-lg"></div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight logo-font block">karmma.</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider">Producciones de Verdad</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en música profesional. Más de 5 años de experiencia produciendo para artistas independientes.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/karmma.prod/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-pink-500/10 hover:border-pink-500 transition-all duration-300 border border-gray-800 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/watch?v=U90d9d2lXl8&list=PLE3l6fQeUTGiRL_8XY4iJ7bojkkOIjwvp" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 border border-gray-800 group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
              <a 
                href="mailto:contacto@karmma.com"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 border border-gray-800 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Producción Musical</li>
              <li className="text-gray-400 text-sm">Mezcla</li>
              <li className="text-gray-400 text-sm">Masterización</li>
              <li className="text-gray-400 text-sm">Producción Vocal</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 KARMMA. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> en Villa María, Córdoba
            </p>
          </div>
        </div>
      </div>

      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;