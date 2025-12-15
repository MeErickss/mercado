// src/components/common/Header.tsx
import React from 'react';
import { Home, Store } from 'lucide-react';

interface HeaderProps {
  view: 'customer' | 'admin';
  onViewChange: (view: 'customer' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ view, onViewChange }) => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 Super Muffato</h1>
        <div className="flex gap-2">
          <button
            onClick={() => onViewChange('customer')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              view === 'customer' ? 'bg-white text-green-600' : 'bg-green-700'
            }`}
          >
            <Home size={20} /> Loja
          </button>
          <button
            onClick={() => onViewChange('admin')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              view === 'admin' ? 'bg-white text-green-600' : 'bg-green-700'
            }`}
          >
            <Store size={20} /> Admin
          </button>
        </div>
      </div>
    </header>
  );
};