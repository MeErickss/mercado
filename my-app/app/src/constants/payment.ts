// src/constants/payment.ts
export const PAYMENT_METHODS = [
  { id: 'pix', name: 'PIX', icon: '💰', description: 'Pagamento instantâneo', recommended: true },
  { id: 'credit', name: 'Cartão de Crédito', icon: '💳', description: 'Na entrega', recommended: false },
  { id: 'debit', name: 'Cartão de Débito', icon: '💳', description: 'Na entrega', recommended: false },
  { id: 'cash', name: 'Dinheiro', icon: '💵', description: 'Pagar na entrega', recommended: false },
  { id: 'voucher', name: 'Vale Alimentação', icon: '🎟️', description: 'Ticket, Sodexo, etc', recommended: false },
];

export const CHART_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];