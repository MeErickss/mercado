// src/App.tsx
import React, { useState } from 'react';
import { CustomerPage } from './pages/CustomerPage';
import { AdminPage } from './pages/AdminPage';
import { Header } from './components/common/Header';
import './services/storage'; // Inicializa o storage

function App() {
  const [view, setView] = useState<'customer' | 'admin'>('customer');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header view={view} onViewChange={setView} />
      {view === 'customer' ? <CustomerPage /> : <AdminPage />}
    </div>
  );
}

export default App;