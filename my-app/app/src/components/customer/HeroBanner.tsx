// src/components/customer/HeroBanner.tsx
import React from 'react';
import { Clock } from 'lucide-react';

interface HeroBannerProps {
  nextDeliveryTime: string;
  hasPromotions: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ nextDeliveryTime, hasPromotions }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">🛒 Super Muffato</h1>
              <p className="text-xl mb-2">Qualidade e Economia em um só lugar!</p>
              <p className="text-green-100">Entregas programadas • Produtos frescos • Promoções imperdíveis</p>
              <div className="mt-6 bg-white bg-opacity-20 inline-block px-4 py-2 rounded-lg backdrop-blur">
                <p className="text-sm">
                  🚚 Próxima entrega às <span className="font-bold text-xl">{nextDeliveryTime}</span>
                </p>
              </div>
            </div>
            <div className="hidden md:block text-9xl">🏪</div>
          </div>
        </div>
      </div>

      {hasPromotions && (
        <div className="bg-red-500 text-white py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold text-lg">🔥 PROMOÇÕES ATIVAS! Aproveite os melhores preços!</p>
          </div>
        </div>
      )}
    </>
  );
};