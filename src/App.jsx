import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import AudioComparison from './components/AudioComparison';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="bg-[#202125] text-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AudioComparison />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;