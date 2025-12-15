import { useState } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Adicione aqui: addToCart, updateQuantity, removeFromCart, getCartTotal
  
  return { cart, setCart, addToCart, updateQuantity, removeFromCart, getCartTotal };
};