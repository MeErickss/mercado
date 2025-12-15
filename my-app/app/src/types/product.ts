// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  onSale: boolean;
  salePrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}