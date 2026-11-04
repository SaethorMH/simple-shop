"use client";

import { useCart } from "./useCart";
import CartItem from "./CartItem";

export default function PaymentClient({ product }) {
  const cart = useCart((state) => state.cartItems);
  const total = useCart((state) => state.cartTotal);
  const remove = useCart((state) => state.removeItem);

  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] p-12">
        <div>
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>

        <section className="grid grid-cols-1 justify-self-end bg-white rounded shadow-2xl w-full">
          <div className="m-3 p-5 text-center ">
            <h2 className="p-2">Total</h2>
            <div className="grid grid-cols-2 place-items-center  ">
              <p>shipping:</p>
              <p className="p-2">
                <span className="line-through text-gray-700">$14.99</span> Free
              </p>

              <p>Total:</p>
              <p className="p-2">${total.toFixed(2)}</p>
            </div>
            <button className=" py-2 px-4 bg-[#D9D9D9] rounded border-2 border-[#305A89]">
              Pay here
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
