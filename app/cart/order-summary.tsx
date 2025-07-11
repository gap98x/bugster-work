import { OrderSummarySection } from '@/components/shopping-cart/order-summary-section';
import { ProceedToCheckout } from './proceed-to-checkout';

export function OrderSummary({
  showSummerBanner,
  freeDelivery,
}: {
  showSummerBanner: boolean;
  freeDelivery: boolean;
}) {
  // Using default value: proceedToCheckoutColor = 'blue'
  const proceedToCheckoutColor = 'blue';

  return (
    <OrderSummarySection
      showSummerBanner={showSummerBanner}
      freeDelivery={freeDelivery}
      proceedToCheckout={<ProceedToCheckout color={proceedToCheckoutColor} />}
    />
  );
} 