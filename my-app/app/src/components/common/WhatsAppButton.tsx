// src/components/common/WhatsAppButton.tsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

interface WhatsAppButtonProps {
  cartHasItems: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ cartHasItems }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Preciso de ajuda com meu pedido no Super Muffato.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="fixed z-50" 
      style={{ bottom: cartHasItems ? '120px' : '24px', right: '24px' }}
    >
      <div className="absolute inset-0 bg-green-500 rounded-full pulse-ring"></div>
      <button
        onClick={openWhatsApp}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
        title="Falar com Suporte via WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="hidden lg:group-hover:inline-block pr-2 font-medium whitespace-nowrap">
          Suporte
        </span>
      </button>
    </div>
  );
};