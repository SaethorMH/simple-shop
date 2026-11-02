"use client";

import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useCart } from "./useCart";

export default function Cards({ product }) {
  const addItem = useCart((state) => state.addItem);
  return (
    
    <Link href={`products/${product.id}`}>
     
      <section className="bg-white size-fit m-2 block object-cover border-solid border border-[#D9D9D9] ">
        <Image src={product.thumbnail} width={100} height={100} alt={product.title} className="size-[250px] "></Image>

        <h1 className="text-black m-1">{product.title}</h1>
        <div className="flex justify-stretch gap-7">
          <p className="text-black m-1">${product.price}</p>

          <h1 className="text-black m-1">{product.title}</h1>
          <div className="flex justify-stretch gap-7">
            <p className="text-black m-1">${product.price}</p>
          </div>
        </section>
      </Link>
      <button
        onClick={() => addItem(product)}
        className="w-full h-12 bg-amber-400 place-items-center hover:cursor-pointer hover:bg-amber-200"
      >
        <GiShoppingCart className="text-black m-1 size-10" />
      </button>
    </div>
  );
}
