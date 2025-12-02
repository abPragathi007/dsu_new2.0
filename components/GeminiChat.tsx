import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';

const GeminiChat: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20am%20interested%20in%20admissions%20at%20DSU.`, '_blank');
  };

  return (
    <motion.button
      {...({
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 }
      } as any)}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center bg-[#25D366] text-white transition-all hover:shadow-green-500/30"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
    </motion.button>
  );
};

export default GeminiChat;