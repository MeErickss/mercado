// ============================================
// src/pages/CustomerPage.tsx
// ============================================
import { HeroBanner } from '../src/components/customer/HeroBanner';
import { ProductCard } from '../src/components/customer/ProductCard';
import { WhatsAppButton } from '../src/components/common/WhatsAppButton';
import { useProducts } from '../src/hooks/useProducts';
import { useCart } from '../src/hooks/useCart';
import { DeliveryTime } from '../src/types';
import { getNextDeliveryTime } from '../src/utils/formatters';
import { Package } from 'lucide-react';

// Importar deliveryTimes de algum lugar ou gerenciar com hook
const deliveryTimes: DeliveryTime[] = [
  { id: '1', time: '10:00', active: true },
  { id: '2', time: '14:00', active: true },
  { id: '3', time: '18:00', active: true },
];

export const CustomerPage: React.FC = () => {
  const { products, loading } = useProducts();
  const { cart, addToCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>;
  }

  const categories = Array.from(new Set(products.map(p => p.category)));
  const hasPromotions = products.some(p => p.onSale);
  const nextDelivery = getNextDeliveryTime(deliveryTimes);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroBanner 
        nextDeliveryTime={nextDelivery}
        hasPromotions={hasPromotions}
      />

      <div className="container mx-auto p-4">
        {categories.map(category => {
          const categoryProducts = products.filter(p => p.category === category && p.stock > 0);
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-green-600 pb-2">
                <Package className="text-green-600" /> {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <WhatsAppButton cartHasItems={cart.length > 0} />
      
      {/* Aqui você adicionaria o componente Cart e Checkout */}
      {/* <Cart /> */}
      {/* {showCheckout && <Checkout />} */}
    </div>
  );
};

// ============================================
// src/pages/AdminPage.tsx
// ============================================
import React, { useState } from 'react';
import { FileText, Clock, TrendingUp } from 'lucide-react';
import { useOrders } from '../src/hooks/useOrders';

type AdminTab = 'products' | 'orders' | 'delivery' | 'reports';

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');
  const { products } = useProducts();
  const { orders } = useOrders();

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            activeTab === 'products' ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          <Package size={20} /> Produtos
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            activeTab === 'orders' ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          <FileText size={20} /> Pedidos ({orders.filter(o => o.status === 'pending').length})
        </button>
        <button
          onClick={() => setActiveTab('delivery')}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            activeTab === 'delivery' ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          <Clock size={20} /> Horários
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            activeTab === 'reports' ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          <TrendingUp size={20} /> Relatórios
        </button>
      </div>

      {/* Conteúdo baseado na tab ativa */}
      {activeTab === 'products' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Gestão de Produtos</h2>
          {/* Aqui você adicionaria ProductTable e ProductModal */}
          <p className="text-gray-600">Total de produtos: {products.length}</p>
        </div>
      )}

      {activeTab === 'orders' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Pedidos</h2>
          {/* Aqui você adicionaria a lista de OrderCard */}
          <p className="text-gray-600">Total de pedidos: {orders.length}</p>
        </div>
      )}

      {activeTab === 'delivery' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Horários de Entrega</h2>
          {/* Aqui você adicionaria a gestão de horários */}
        </div>
      )}

      {activeTab === 'reports' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Relatórios</h2>
          {/* Aqui você adicionaria os gráficos */}
        </div>
      )}
    </div>
  );
};

// ============================================
// NOTA: Este é um template simplificado
// Para o código completo de cada seção,
// copie as partes correspondentes do artifact original!
// ============================================