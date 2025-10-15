import React, { useState } from 'react';
import { Play, Youtube, Sparkles, ExternalLink, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const featuredTracks = [
    { 
      title: "TRUST", 
      artist: "unnamed", 
      id: "0jGoS61ss2g",
      genre: "R&B",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/0jGoS61ss2g/maxresdefault.jpg"
    },
    { 
      title: "DIME SI ÉL", 
      artist: "MANNU'", 
      id: "s4Gx5vYqKK0",
      genre: "Trap",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/s4Gx5vYqKK0/maxresdefault.jpg"
    },
    { 
      title: "FREYA", 
      artist: "axel47", 
      id: "YW9WLSIxIRM",
      genre: "Trap",
      year: "2022",
      thumbnail: "https://img.youtube.com/vi/YW9WLSIxIRM/maxresdefault.jpg"
    },
    { 
      title: "DONDE ESTÁS", 
      artist: "MANNU'", 
      id: "RT6IENSp4SY",
      genre: "House",
      year: "2024",
      thumbnail: "https://img.youtube.com/vi/RT6IENSp4SY/maxresdefault.jpg"
    },
    { 
      title: "NENE ANDATE", 
      artist: "Lena", 
      id: "3cNDKvxQUf0",
      genre: "R&B",
      year: "2022",
      thumbnail: "https://img.youtube.com/vi/3cNDKvxQUf0/sddefault.jpg"
    },
    { 
      title: "PLANETA", 
      artist: "OZEN", 
      id: "zlPrKOnwGhU",
      genre: "Trap",
      year: "2024",
      thumbnail: "https://img.youtube.com/vi/zlPrKOnwGhU/maxresdefault.jpg"
    }
  ];

  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125] via-[#2a2b30] to-[#202125]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            <Music2 className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Nuestro Trabajo</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-6 logo-font">
            Portfolio <span className="text-gradient">Destacado</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Escuchá algunas de nuestras <span className="text-white font-semibold">producciones más destacadas</span> y sentí la diferencia
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredTracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTrack(index)}
              onMouseLeave={() => setHoveredTrack(null)}
              onClick={() => openVideo(track.id)}
              className="group cursor-pointer"
            >
              <div className="relative glass rounded-2xl overflow-hidden hover-lift border border-gray-800 hover:border-yellow-400 transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-yellow-400/20 via-red-500/20 to-blue-600/20 overflow-hidden">
                  <img 
                    src={track.thumbnail} 
                    alt={track.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202125] via-[#202125]/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-yellow-400/50 group-hover:border-yellow-400">
                        <Play className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>

                  {/* Genre badge */}
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-yellow-400 backdrop-blur-md">
                    {track.genre}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1 text-white group-hover:text-yellow-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{track.artist}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{track.year}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Playlist CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Card grande */}
          <div className="glass rounded-3xl p-12 border border-gray-800 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Mucho más por descubrir</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-6 logo-font">
                +100 Canciones <span className="text-gradient">Producidas</span>
              </h3>

              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Explorá nuestra playlist completa en YouTube con todos nuestros trabajos. Desde trap hasta pop, tenemos el sonido que buscás.
              </p>

              <a 
                href="https://www.youtube.com/watch?v=U90d9d2lXl8&list=PLE3l6fQeUTGiRL_8XY4iJ7bojkkOIjwvp" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block relative"
              >
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-red-600 hover:bg-red-700 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl">
                  <Youtube className="w-6 h-6" />
                  <span>Ver Playlist Completa</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>

              <p className="text-gray-500 text-sm mt-6">
                Disponible en YouTube Music y YouTube
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay"></div>
    </section>
  );
};

export default Portfolio;