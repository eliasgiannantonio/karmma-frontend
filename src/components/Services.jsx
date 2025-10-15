import React, { useState } from 'react';
import { Music, Mic, Headphones, Camera, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Music className="w-12 h-12" />,
      title: "Producción Musical",
      description: "Beats originales y producciones completas adaptadas a tu estilo. Creamos el sonido que imaginás.",
      features: ["Beats personalizados", "Arreglos profesionales", "Instrumentales exclusivos"],
      gradient: "from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Mezcla Profesional",
      description: "Dale vida a tus grabaciones con mezclas de calidad mundial. Cada elemento en su lugar perfecto.",
      features: ["Balance perfecto", "Ecualización avanzada", "Efectos creativos"],
      gradient: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Masterización",
      description: "El toque final que hace que tu música suene profesional en Spotify, Apple Music y todas las plataformas.",
      features: ["Loudness óptimo", "Compatibilidad streaming", "Calidad radiofónica"],
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Producción Vocal",
      description: "Especialistas en hacer brillar tu voz. Autotune, armonías y efectos que marcan la diferencia.",
      features: ["Autotune profesional", "Armonías vocales", "Efectos creativos"],
      gradient: "from-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="relative pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125] via-[#1a1b1f] to-[#202125]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Lo que hacemos</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-6 logo-font">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Soluciones completas de producción musical para llevar tu sonido al <span className="text-white font-semibold">siguiente nivel</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveService(index)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative glass rounded-3xl overflow-hidden hover-lift border border-gray-800 hover:border-gray-700 transition-all duration-500">
                {/* Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202125] via-[#202125]/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-10">
                  {/* Icon */}
                  <div className="mb-6 relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative w-20 h-20 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(service.icon, { className: "w-10 h-10 text-yellow-400" })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="group/btn relative overflow-hidden glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300 border border-gray-700 hover:border-yellow-400">
                    <span className="text-sm font-semibold">Más información</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            ¿No estás seguro cuál servicio necesitás?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-block"
          >
            <div className="relative glass px-8 py-4 rounded-full border-2 border-gray-700 hover:border-yellow-400 transition-colors flex items-center gap-3">
              <span className="font-semibold">Hablemos de tu proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;