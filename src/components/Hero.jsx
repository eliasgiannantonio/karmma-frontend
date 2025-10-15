import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ filter: 'blur(2px)' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-music-producer-working-on-a-mixing-console-6013/1080p.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradientes animados */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl animate-glow"></div>
        
        {/* Partículas */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          ></div>
        </div>
      </div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Logo con K. y borde animado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            {/* Borde izquierdo con gradiente animado */}
            <div className="absolute left-0 top-0 bottom-0 w-4 md:w-6 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-l-3xl animate-gradient shadow-lg shadow-yellow-500/30" style={{ backgroundSize: '100% 200%' }}></div>
            
            {/* K. blanca */}
            <div className="pl-10 md:pl-14 pr-2">
              <span className="text-white font-black logo-font block" style={{ fontSize: 'clamp(6rem, 15vw, 10rem)', lineHeight: '0.9', letterSpacing: '-0.05em' }}>
                k.
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Título con efecto mejorado */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-7xl md:text-8xl font-bold mb-8 tracking-tight logo-font"
        >
          <span className="text-gradient">karmma.</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-2xl md:text-4xl mb-6 text-gray-100 font-light tracking-wider uppercase">
            Producciones de Verdad
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Transformamos tu talento en música profesional. <br className="hidden md:block" />
          Producción, mezcla y masterización para artistas que buscan <span className="text-yellow-400 font-semibold">destacar</span>.
        </motion.p>

        {/* Botones mejorados */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('servicios')}
            className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 flex items-center justify-center gap-3 min-w-[280px]"
          >
            <span className="relative z-10">Ver Servicios</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group glass px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 min-w-[280px] border-2 border-gray-700 hover:border-yellow-400"
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Escuchar Portfolio</span>
          </button>
        </motion.div>

        {/* Stats rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>+5 años de experiencia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>+100 canciones producidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>+50 artistas satisfechos</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator mejorado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <div className="w-7 h-12 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 glass">
          <div className="w-1.5 h-4 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;