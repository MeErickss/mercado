// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS, STORAGE_KEYS } from '../constants';
import { useStorage } from './useStorage';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const storage = useStorage();

  const loadProducts = async () => {
    try {
      const data = await storage.get(STORAGE_KEYS.PRODUCTS);
      if (data) {
        setProducts(JSON.parse(data.value!));
      } else {
        setProducts(INITIAL_PRODUCTS);
        await storage.set(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts(INITIAL_PRODUCTS);
    }
    setLoading(false);
  };

  const addProduct = async (product: Product) => {
    const updated = [...products, product];
    setProducts(updated);
    await storage.set(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    const updated = products.map(p => p.id === id ? { ...p, ...updates } : p);
    setProducts(updated);
    await storage.set(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
  };

  const updateStock = async (id: string, newStock: number) => {
    await updateProduct(id, { stock: newStock });
  };

  const toggleSale = async (id: string, salePrice?: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const updated = products.map(p => {
      if (p.id === id) {
        if (p.onSale) {
          return { ...p, onSale: false, salePrice: undefined };
        } else {
          return { ...p, onSale: true, salePrice };
        }
      }
      return p;
    });

    setProducts(updated);
    await storage.set(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    setProducts,
    loading,
    addProduct,
    updateProduct,
    updateStock,
    toggleSale,
    loadProducts
  };
};