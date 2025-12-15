import { useState } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  // Adicione aqui as funções: loadProducts, addProduct, updateStock, toggleSale
  
  return { products, setProducts, loadProducts, addProduct, updateStock, toggleSale };
};