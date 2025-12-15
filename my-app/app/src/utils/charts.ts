// src/utils/charts.ts
import { Order } from '../types';

export const getSalesByDay = (orders: Order[]) => {
  const salesByDay: { [key: string]: number } = {};
  orders.forEach(order => {
    const date = new Date(order.createdAt).toLocaleDateString('pt-BR');
    salesByDay[date] = (salesByDay[date] || 0) + order.total;
  });
  return Object.entries(salesByDay).map(([date, total]) => ({
    data: date,
    vendas: parseFloat(total.toFixed(2))
  }));
};

export const getTopProducts = (orders: Order[]) => {
  const productSales: { [key: string]: { name: string; quantity: number; revenue: number } } = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      if (!productSales[item.id]) {
        productSales[item.id] = { name: item.name, quantity: 0, revenue: 0 };
      }
      productSales[item.id].quantity += item.quantity;
      const price = item.onSale && item.salePrice ? item.salePrice : item.price;
      productSales[item.id].revenue += price * item.quantity;
    });
  });
  return Object.values(productSales)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 8)
    .map(p => ({
      produto: p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name,
      quantidade: p.quantity,
      receita: parseFloat(p.revenue.toFixed(2))
    }));
};

export const getOrdersByDeliveryTime = (orders: Order[]) => {
  const ordersByTime: { [key: string]: number } = {};
  orders.forEach(order => {
    ordersByTime[order.deliveryTime] = (ordersByTime[order.deliveryTime] || 0) + 1;
  });
  return Object.entries(ordersByTime)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([time, count]) => ({
      horario: time,
      pedidos: count
    }));
};

export const getSalesByCategory = (orders: Order[]) => {
  const salesByCategory: { [key: string]: number } = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      const price = item.onSale && item.salePrice ? item.salePrice : item.price;
      salesByCategory[item.category] = (salesByCategory[item.category] || 0) + (price * item.quantity);
    });
  });
  return Object.entries(salesByCategory).map(([category, total]) => ({
    categoria: category,
    valor: parseFloat(total.toFixed(2))
  }));
};

export const getPaymentMethods = (orders: Order[]) => {
  const paymentCounts: { [key: string]: number } = {};
  const paymentLabels: { [key: string]: string } = {
    pix: 'PIX',
    credit: 'Crédito',
    debit: 'Débito',
    cash: 'Dinheiro',
    voucher: 'Vale'
  };
  
  orders.forEach(order => {
    const method = order.paymentMethod || 'cash';
    paymentCounts[method] = (paymentCounts[method] || 0) + 1;
  });
  
  return Object.entries(paymentCounts).map(([method, count]) => ({
    metodo: paymentLabels[method] || method,
    quantidade: count
  }));
};