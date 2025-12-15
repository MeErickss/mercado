// src/types/order.ts
import { CartItem } from './product';

export type PaymentMethod = 'pix' | 'credit' | 'debit' | 'cash' | 'voucher';

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: CartItem[];
  total: number;
  deliveryTime: string;
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: string;
  paymentMethod: PaymentMethod;
}

export interface DeliveryTime {
  id: string;
  time: string;
  active: boolean;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}