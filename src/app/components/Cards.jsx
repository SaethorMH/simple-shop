"use client"

import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useCart } from "./useCart";

export default function Cards({ product }) {
  const addItem = useCart((state) => state.addItem);
  
  return (
    <div>
      <Link href={`products/${product.id}`}>
        <section className="bg-white size-fit  block object-cover border-solid border border-[#D9D9D9] ">
          <p className="text-red-700">{product.stock < 50 ? "Low stock" : null} </p>
          <Image src={product.thumbnail} width={100} height={100} alt={product.title} className="size-[250px] hover:opacity-50 transition-all duration-150  hover:scale-150  "></Image>

          <h1 className="text-black m-1">{product.title}</h1>
          <div className="flex justify-stretch gap-7"></div>
        </section>
      </Link>
      <button onClick={() => addItem(product)} className="w-full h-12 flex justify-around bg-amber-400 place-items-center  ">
        <p className="text-black m-1">${product.price}</p>
        <GiShoppingCart className="text-black m-1 size-10 hover:cursor-pointer hover:text-blue-400 transition-all duration-150" />
      </button>
    </div>
  );
}
