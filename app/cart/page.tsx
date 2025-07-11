import { OrderSummary } from '@/app/cart/order-summary';
import { Main } from '@/components/main';
import { ShoppingCart } from '@/components/shopping-cart/shopping-cart';

export default function CartPage() {
  // Using default values: showSummerBanner = false, freeDelivery = false
  const showSummerBanner = false;
  const freeDelivery = false;

  return (
    <Main>
      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <ShoppingCart />
        <OrderSummary
          showSummerBanner={showSummerBanner}
          freeDelivery={freeDelivery}
        />
      </div>
    </Main>
  );
} 