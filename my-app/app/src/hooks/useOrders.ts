import { useState } from 'react';
import { Order } from '../types';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  
  // Adicione aqui: loadOrders, createOrder, updateOrderStatus
  
  return { orders, setOrders, loadOrders, createOrder, updateOrderStatus };
};