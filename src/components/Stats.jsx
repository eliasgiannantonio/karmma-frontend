import React from 'react';
import { TrendingUp, Music, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { 
      icon: <TrendingUp />, 
      number: "+5", 
      label: "Años de Trayectoria",
      description: "Experiencia consolidada"
    },
    { 
      icon: <Music />, 
      number: "+100", 
      label: "Canciones Producidas",
      description: "Proyectos completados"
    },
    { 
      icon: <Users />, 
      number: "+50", 
      label: "Artistas Satisfechos",
      description: "Confianza y calidad"
    },
    { 
      icon: <Award />, 
      number: "100%", 
      label: "Dedicación",
      description: "Compromiso total"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125] via-[#2a2b30] to-[#202125]"></div>
      
      {/* Líneas decorativas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              {/* Contenedor con efecto hover */}
              <div className="relative mb-6">
                {/* Glow effect */}
                <div className="absolute inset-0 -m-4 bg-gradient-to-br from-yellow-400/20 via-red-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Ícono */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl glass group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  {React.cloneElement(stat.icon, { 
                    className: "w-12 h-12 text-yellow-400 relative z-10 group-hover:rotate-12 transition-transform duration-500" 
                  })}
                </div>
              </div>

              {/* Número */}
              <motion.div 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
                className="text-6xl md:text-7xl font-bold mb-3 logo-font"
              >
                <span className="text-gradient">{stat.number}</span>
              </motion.div>

              {/* Label */}
              <div className="text-gray-200 text-lg md:text-xl font-semibold mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-gray-500 text-sm">
                {stat.description}
              </div>

              {/* Underline animado */}
              <div className="mx-auto mt-4 w-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;