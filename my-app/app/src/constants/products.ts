// src/constants/products.ts
import { Product, DeliveryTime } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Arroz Tio João 5kg', price: 29.90, stock: 50, category: 'Alimentos', image: '🍚', onSale: true, salePrice: 24.90 },
  { id: '2', name: 'Feijão Preto 1kg', price: 8.50, stock: 100, category: 'Alimentos', image: '🫘', onSale: false },
  { id: '3', name: 'Leite Integral 1L', price: 5.20, stock: 80, category: 'Laticínios', image: '🥛', onSale: true, salePrice: 4.50 },
  { id: '4', name: 'Café Pilão 500g', price: 18.90, stock: 60, category: 'Bebidas', image: '☕', onSale: false },
  { id: '5', name: 'Açúcar Cristal 1kg', price: 4.90, stock: 120, category: 'Alimentos', image: '🧂', onSale: false },
  { id: '6', name: 'Óleo de Soja 900ml', price: 7.80, stock: 70, category: 'Alimentos', image: '🫗', onSale: true, salePrice: 6.90 },
];

export const INITIAL_DELIVERY_TIMES: DeliveryTime[] = [
  { id: '1', time: '10:00', active: true },
  { id: '2', time: '14:00', active: true },
  { id: '3', time: '18:00', active: true },
];

export const EMOJIS = ['🍚', '🫘', '🥛', '☕', '🧂', '🫗', '🍞', '🥩', '🐟', '🧀', '🥚', '🍎', '🍌', '🥕', '🥔', '🍅', '🥬', '🌽', '🍇', '🍊', '🥤', '🍪', '🍫', '🧁', '🍕', '🍔', '🌭', '🥗', '🍝', '🍜', '📦'];