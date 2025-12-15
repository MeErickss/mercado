// src/utils/validators.ts
import { CustomerInfo } from '../types';

export const validateCustomerInfo = (info: CustomerInfo): boolean => {
  return !!(info.name && info.phone && info.address);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(?\d{2}\)?[\s-]?[\d]{4,5}-?[\d]{4}$/;
  return phoneRegex.test(phone);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePrice = (price: string): boolean => {
  const priceNum = parseFloat(price);
  return !isNaN(priceNum) && priceNum > 0;
};

export const validateStock = (stock: string): boolean => {
  const stockNum = parseInt(stock);
  return !isNaN(stockNum) && stockNum >= 0;
};