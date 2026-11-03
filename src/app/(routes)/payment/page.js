import Cart from "@/app/components/cartPaymentComponents/Cart";
import Popover from "@/app/components/cartPaymentComponents/Popovercheckout";
import { useCart } from "@/app/components/cartPaymentComponents/useCart";

export default async function Page({ params }) {
  const { id: id } = await params;
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  const product = await response.json();

  return (
    <>
      <Cart />

      <Popover product={product} />
    </>
  );
}
