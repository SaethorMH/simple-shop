import Cart from "@/app/components/Cart";
import Popover from "@/app/components/Popovercheckout";
import { useCart } from "@/app/components/useCart";

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
