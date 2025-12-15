// src/utils/formatters.ts
import { Product, DeliveryTime } from '../types';

export const calculateTax = (total: number): number => {
  return total * 0.12; // 12% de impostos simulados
};

export const getLowStockProducts = (products: Product[]): Product[] => {
  return products.filter(p => p.stock > 0 && p.stock < 10);
};

export const getNextDeliveryTime = (deliveryTimes: DeliveryTime[]): string => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  const nextDelivery = deliveryTimes
    .filter(dt => dt.active)
    .map(dt => {
      const [h, m] = dt.time.split(':').map(Number);
      return { time: dt.time, minutes: h * 60 + m };
    })
    .find(dt => dt.minutes > currentTime);

  return nextDelivery ? nextDelivery.time : deliveryTimes.find(dt => dt.active)?.time || '14:00';
};

export const getPaymentMethodLabel = (method: string): string => {
  const labels: { [key: string]: string } = {
    pix: '💰 PIX',
    credit: '💳 Crédito',
    debit: '💳 Débito',
    cash: '💵 Dinheiro',
    voucher: '🎟️ Vale'
  };
  return labels[method] || method;
};

export const formatCurrency = (value: number): string => {
  return `R$ ${value.toFixed(2)}`;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};

export const formatDateTime = (date: string): string => {
  return new Date(date).toLocaleString('pt-BR');
};