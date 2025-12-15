// src/hooks/useOrders.ts
import { useState, useEffect } from 'react';
import { Order } from '../types';
import { STORAGE_KEYS } from '../constants';
import { useStorage } from './useStorage';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const storage = useStorage();

  const loadOrders = async () => {
    try {
      const data = await storage.get(STORAGE_KEYS.ORDERS);
      if (data) {
        setOrders(JSON.parse(data.value!));
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    }
    setLoading(false);
  };

  const createOrder = async (order: Order) => {
    const updated = [...orders, order];
    setOrders(updated);
    await storage.set(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
    return order;
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, status } : o);
    setOrders(updated);
    await storage.set(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return {
    orders,
    setOrders,
    loading,
    createOrder,
    updateOrderStatus,
    loadOrders
  };
};