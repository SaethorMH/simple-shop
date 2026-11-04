"use client";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./useCart";

export default function Popovercheckout({ icon }) {
  const cart = useCart((state) => state.cartItems);
  const total = useCart((state) => state.cartTotal);
  const remove = useCart((state) => state.removeItem);
  return (
    <>
      <div
        className={`grid  transition-all ${cart.length > 0 ? "scale-150" : ""}`}
      >
        <button
          popoverTarget="popover"
          className={` bg-white border col-1 row-1 [anchor-name:--anchor] rounded-full p-1 m-2
             hover:cursor-pointer ${cart.length > 0 ? "text-green-800 " : ""}`}
        >
          {icon}
        </button>
        {cart.length > 0 ? (
          <p
            className="col-1 row-1 place-self-start text-[12px] w-5 h-5
           text-center border font-bold rounded-full bg-white"
          >
            {cart.length}
          </p>
        ) : (
          ""
        )}
      </div>

      <div
        id="popover"
        popover="auto"
        className="m-0 p-4 rounded shadow [position-anchor:--anchor] 
        [position-area:bottom_span-left] bg-gray-200 w-80"
      >
        <h3>Cart</h3>
        <div className="flex flex-col h-40 overflow-y-scroll ">
          {cart.map((item, index) => (
            <div key={index} className="flex w-full bg-white shadow my-1 p-2">
              <Image
                src={item.images[0]}
                height={20}
                width={20}
                alt={item.title}
              />

              <h2 className="text-[12px] max-w-[25ch] truncate ">
                {item.title}
              </h2>

              <p className=" text-[12px] mx-1 font-black ml-auto">
                ${item.price}
              </p>
              <button
                className="hover:cursor-pointer rounded-full h-4 w-4 hover:scale-120 transition-all text-white bg-red-600"
                onClick={() => remove(item)}
              >
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between mx-10">
          <p>Total:</p>
          <p className="place-self-center">${total.toFixed(2)}</p>
        </div>

        <Link
          onClick={() => document.getElementById("popover")?.hidePopover()}
          href={"/payment"}
        >
          {" "}
          <button className="mx-auto p-2 block bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}
