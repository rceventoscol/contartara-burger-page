
import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573214458734', '_blank');
  };

  const handleMenuClick = () => {
    // Menu functionality to be implemented later
    console.log('Menu clicked');
  };

  return (
    <section className="relative min-h-screen bg-contartara-black text-contartara-cream flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-contartara-black/90 to-contartara-black z-10" />
      
      <div 
        className={`container mx-auto px-4 z-20 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <img 
          src="/lovable-uploads/8c10091e-af5a-43c0-a406-cba29e5b4385.png" 
          alt="Contártara Logo" 
          className="w-48 h-48 mx-auto mb-6"
        />
        
        <h1 className="font-display text-6xl md:text-8xl mb-6 leading-none">
          LAS BURGER'S
          <span className="block text-contartara-yellow">CIERTAS</span>
          LLEGARON A BUCARAMANGA
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 font-display">
          LO QUE VES, ES LO QUE PRUEBAS
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="bg-contartara-yellow text-contartara-black px-8 py-4 rounded-full font-display text-xl 
                     hover:bg-white transition-all duration-300 transform hover:scale-105 animate-bounce-subtle
                     flex items-center justify-center mx-auto gap-2"
          >
            <MessageSquare className="w-6 h-6" />
            PIDE POR WHATSAPP
          </button>

          <button
            onClick={handleMenuClick}
            className="bg-contartara-black text-contartara-yellow border-2 border-contartara-yellow px-8 py-4 rounded-full 
                     font-display text-xl hover:bg-contartara-yellow hover:text-contartara-black transition-all duration-300"
          >
            VER MENÚ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
