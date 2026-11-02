"use client";

import Link from "next/link";
import { useCart } from "./useCart";
export default function Popovercheckout({ icon }) {
  const cart = useCart((state) => state.cartItems);
  const total = useCart((state) => state.cartTotal);
  const remove = useCart((state) => state.removeItem);
  return (
    <>
      <button
        popoverTarget="popover"
        className="[anchor-name:--anchor] hover:cursor-pointer"
      >
        {icon}
      </button>

      <div
        id="popover"
        popover="auto"
        className="m-0 p-4 rounded shadow [position-anchor:--anchor] [position-area:bottom_span-left] bg-[#E9E9E9] w-80"
      >
        <h3>Cart</h3>
        <div className="flex flex-col h-40 overflow-y-scroll border">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-t border-b shadow my-1 p-2"
            >
              <h2 className="text-[12px] max-w-20 truncate ">{item.title}</h2>
              <p className=" text-[12px] mx-5 font-black">{item.price}$</p>
              <button
                className="hover:cursor-pointer"
                onClick={() => remove(item)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <p className="place-self-center">{total.toFixed(2)}$</p>

        <Link href={"/payment"}>
          {" "}
          <button className="mx-auto p-2 block bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}
