"use client";

import { useCart } from "./useCart";
import CartItem from "./CartItem";

export default function PaymentClient({ product }) {
  const cart = useCart((state) => state.cartItems);
  const total = useCart((state) => state.cartTotal);
  const remove = useCart((state) => state.removeItem);

  return (
    <>
      {cart.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <section className="grid grid-cols-1 justify-self-end">
        <div className="m-3 p-5 text-center ">
          <h2 className="p-2">Total</h2>
          <div className=" relative w-5 h-2 after:content-[''] after:absolute after:bottom-0 after:top-0 after:bg-black after:opacity-50 after:w-25 after:h-px "></div>
          <p className="p-2">${total.toFixed(2)}</p>
          <button className=" py-2 px-4 bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89]">
            Pay here
          </button>
        </div>
      </section>
    </>
  );
}
