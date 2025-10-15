import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioComparison = () => {
  const [productionLevel, setProductionLevel] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioBeforeRef = useRef(null);
  const audioAfterRef = useRef(null);

  // URLs de audio de ejemplo - REEMPLAZAR con tus propios archivos
  const audioUrls = {
    before: 'https://res.cloudinary.com/dzqyfcul6/video/upload/v1760493634/ua-crudo_nkxoaa.mp3', // Audio sin producción
    after: 'https://res.cloudinary.com/dzqyfcul6/video/upload/v1760493634/ua-prod_lnsn48.mp3'   // Audio con producción
  };

  useEffect(() => {
    // Configurar los audios
    if (audioBeforeRef.current && audioAfterRef.current) {
      audioBeforeRef.current.volume = (100 - productionLevel) / 100;
      audioAfterRef.current.volume = productionLevel / 100;
    }
  }, [productionLevel]);

  useEffect(() => {
    const audio = audioBeforeRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioBeforeRef.current?.pause();
      audioAfterRef.current?.pause();
    } else {
      audioBeforeRef.current?.play();
      audioAfterRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setProductionLevel(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125] via-[#1a1b1f] to-[#202125]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Experiencia Interactiva</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 logo-font">
            Escuchá la <span className="text-gradient">Diferencia</span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Deslizá para comparar un audio sin producción vs. uno procesado profesionalmente
          </p>
        </motion.div>

        {/* Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border border-gray-800"
        >
          {/* Hidden Audio Elements */}
          <audio ref={audioBeforeRef} src={audioUrls.before} />
          <audio ref={audioAfterRef} src={audioUrls.after} />

          {/* Waveform Visualization (decorative) */}
          <div className="relative h-40 mb-8 rounded-2xl overflow-hidden bg-[#1a1b1f] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center gap-1 px-4">
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-yellow-400 via-red-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{
                    height: `${Math.random() * (isPlaying ? 80 : 40) + 20}%`,
                    opacity: 0.3 + (Math.random() * 0.4)
                  }}
                />
              ))}
            </div>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="relative z-10 w-20 h-20 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white fill-white" />
              ) : (
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="h-1 bg-[#2a2b30] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 transition-all duration-300"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              />
            </div>
          </div>

          {/* Comparison Slider */}
          <div className="space-y-6">
            {/* Labels */}
            <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                <div className={`text-sm font-semibold mb-1 transition-all ${
                  productionLevel < 50 ? 'text-white scale-110' : 'text-gray-500'
                }`}>
                  Sin Producción
                </div>
                <div className="text-xs text-gray-600">Audio crudo</div>
              </div>
              
              <div className="px-6">
                <Volume2 className="w-6 h-6 text-gray-600" />
              </div>
              
              <div className="text-center flex-1">
                <div className={`text-sm font-semibold mb-1 transition-all ${
                  productionLevel > 50 ? 'text-white scale-110' : 'text-gray-500'
                }`}>
                  Con Producción KARMMA
                </div>
                <div className="text-xs text-gray-600">Profesional</div>
              </div>
            </div>

            {/* Slider */}
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={productionLevel}
                onChange={handleSliderChange}
                className="w-full h-3 bg-[#2a2b30] rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, 
                    rgba(156, 163, 175, 0.5) 0%, 
                    rgba(156, 163, 175, 0.5) ${productionLevel}%, 
                    rgba(251, 191, 36, 1) ${productionLevel}%, 
                    rgba(59, 130, 246, 1) 100%)`
                }}
              />
              
              {/* Percentage Indicator */}
              <div 
                className="absolute -top-12 transform -translate-x-1/2 transition-all duration-200"
                style={{ left: `${productionLevel}%` }}
              >
                <div className="glass px-4 py-2 rounded-full border border-gray-700 whitespace-nowrap">
                  <span className="text-sm font-bold text-gradient">{productionLevel}%</span>
                  <span className="text-xs text-gray-400 ml-1">producción</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                {productionLevel < 30 && "Escuchás el audio sin procesar - tal como salió del micrófono"}
                {productionLevel >= 30 && productionLevel < 70 && "Notás cómo va mejorando el balance y la claridad"}
                {productionLevel >= 70 && "Así suena tu música lista para plataformas profesionales 🔥"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">¿Querés que tu música suene así de profesional?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Empezá tu proyecto ahora
            </div>
          </button>
        </motion.div>
      </div>

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #ef4444, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
          transition: all 0.3s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.8);
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #ef4444, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
          transition: all 0.3s ease;
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.8);
        }
      `}</style>
    </section>
  );
};

export default AudioComparison;