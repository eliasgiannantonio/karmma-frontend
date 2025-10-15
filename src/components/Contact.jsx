import React, { useState } from 'react';
import { Instagram, Mail, Send, Sparkles, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: 'Producción Musical',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  // Validación
  if (!formData.nombre || !formData.email || !formData.mensaje) {
    setSubmitMessage('❌ Por favor completá todos los campos');
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
    return;
  }
  
  try {
    // Enviar con EmailJS
    await emailjs.send(
      'service_xxxxxx',  // ← TU SERVICE ID
      'template_xxxxxx', // ← TU TEMPLATE ID
      {
        nombre: formData.nombre,
        email: formData.email,
        servicio: formData.servicio,
        mensaje: formData.mensaje
      },
      'xxxxxxxxxxxxxx' // ← TU PUBLIC KEY
    );

    setSubmitMessage('✅ ¡Mensaje enviado! Te contactaremos pronto 🎵');
    setFormData({
      nombre: '',
      email: '',
      servicio: 'Producción Musical',
      mensaje: ''
    });
    
    setTimeout(() => setSubmitMessage(''), 5000);
  } catch (error) {
    console.error('Error:', error);
    setSubmitMessage('❌ Error al enviar. Intentá por WhatsApp: +54 9 353 429-7565');
    setTimeout(() => setSubmitMessage(''), 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contacto" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125] via-[#1a1b1f] to-[#202125]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Hablemos</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-6 logo-font">
            ¿Listo para <span className="text-gradient">Empezar?</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Contanos sobre tu proyecto y hagamos que <span className="text-white font-semibold">suene increíble</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            <div className="glass rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:contacto@karmma.com" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    contacto@karmma.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/karmma.prod/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                  >
                    @karmma.prod
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-gray-400 text-sm">Villa María, Córdoba, AR</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horarios</h3>
                  <p className="text-gray-400 text-sm">Lun - Vie: 10am - 8pm</p>
                  <p className="text-gray-400 text-sm">Sáb: 11am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-gray-800 hover:border-gray-700 transition-all duration-500">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Nombre</label>
                    <input 
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#2a2b30] border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#2a2b30] border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">Servicio de Interés</label>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-[#2a2b30] border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-400 transition-colors text-white"
                  >
                    <option>Producción Musical</option>
                    <option>Mezcla</option>
                    <option>Masterización</option>
                    <option>Producción Vocal</option>
                    <option>Paquete Completo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">Contanos sobre tu proyecto</label>
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-[#2a2b30] border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-400 transition-colors resize-none text-white placeholder-gray-500"
                    placeholder="Describí tu proyecto, estilo musical, referencias, presupuesto aproximado..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className={`group relative w-full overflow-hidden ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 px-8 py-5 rounded-xl font-bold text-lg transition-transform group-hover:scale-[1.02] flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </div>
                </button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass border border-green-500/50 rounded-xl p-4 text-center"
                  >
                    <p className="text-green-400 font-semibold flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {submitMessage}
                    </p>
                  </motion.div>
                )}

                <p className="text-gray-500 text-sm text-center">
                  Al enviar este formulario, aceptás que podamos contactarte por email o WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Tiempo de respuesta promedio</p>
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-gray-800">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-2xl font-bold text-gradient">24 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;