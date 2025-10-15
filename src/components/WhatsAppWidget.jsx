import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el widget después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '5493534297565'; // Formato internacional: 549 + código de área + número

  const quickMessages = [
    "Hola! Quiero info sobre producción musical",
    "Necesito mezclar una canción",
    "¿Cuánto cuesta una masterización?",
    "Quiero un beat personalizado"
  ];

  const handleSendMessage = (text = message) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 glass rounded-3xl overflow-hidden border border-gray-700 shadow-2xl mb-2"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-green-600"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white">KARMMA</h3>
                  <p className="text-xs text-green-100">En línea</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="bg-[#1a1b1f] p-4 space-y-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {/* Bot Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2"
              >
                <div className="bg-[#2a2b30] rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">
                    👋 ¡Hola! Soy el asistente de KARMMA.
                  </p>
                  <p className="text-sm text-gray-200 mt-2">
                    ¿En qué podemos ayudarte con tu música?
                  </p>
                </div>
              </motion.div>

              {/* Quick Replies */}
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 px-1">Mensajes rápidos:</p>
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => handleSendMessage(msg)}
                    className="block w-full text-left bg-[#2a2b30] hover:bg-[#3a3b40] rounded-xl p-3 text-sm text-gray-300 transition-colors border border-gray-700 hover:border-green-500"
                  >
                    {msg}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="bg-[#2a2b30] p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && message.trim() && handleSendMessage()}
                  placeholder="Escribí tu mensaje..."
                  className="flex-1 bg-[#1a1b1f] border border-gray-700 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button
                  onClick={() => message.trim() && handleSendMessage()}
                  disabled={!message.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    message.trim() 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={28} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notification badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#202125]"
          >
            1
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;