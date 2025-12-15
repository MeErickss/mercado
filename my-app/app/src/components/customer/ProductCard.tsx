// src/components/customer/ProductCard.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center relative">
        <div className="text-6xl">{product.image}</div>
        {product.onSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            OFERTA
          </div>
        )}
        {product.stock < 10 && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Últimas unidades!
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1 line-clamp-2 h-10">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">Estoque: {product.stock} un</p>
        <div className="mb-3">
          {product.onSale && product.salePrice ? (
            <div>
              <div className="text-gray-400 line-through text-xs">R$ {product.price.toFixed(2)}</div>
              <div className="text-green-600 font-bold text-2xl">R$ {product.salePrice.toFixed(2)}</div>
              <div className="text-red-600 text-xs font-bold">
                Economize R$ {(product.price - product.salePrice).toFixed(2)}
              </div>
            </div>
          ) : (
            <div className="text-green-600 font-bold text-2xl">R$ {product.price.toFixed(2)}</div>
          )}
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 font-medium transition-colors"
        >
          <ShoppingCart size={16} /> Adicionar
        </button>
      </div>
    </div>
  );
};