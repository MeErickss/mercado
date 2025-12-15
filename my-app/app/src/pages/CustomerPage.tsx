import HeroBanner from '../components/customer/HeroBanner';
import ProductGrid from '../components/customer/ProductGrid';
import Cart from '../components/customer/Cart';

export const CustomerPage = () => {
  // Lógica da página do cliente
  return (
    <>
      <HeroBanner />
      <ProductGrid />
      <Cart />
    </>
  );
};