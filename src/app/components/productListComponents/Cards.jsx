"use client";

import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useCart } from "../cartPaymentComponents/useCart";

export default function Cards({ product }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <article className="bg-white w-50 h-contain block object-cover rounded border-solid border border-[#D9D9D9] overflow-hidden">
      <Link href={`products/${product.id}`}>
        <p className="text-red-700 absolute">
          {product.stock < 50 ? "Low stock" : null}{" "}
        </p>
        <Image
          src={product.thumbnail}
          width={100}
          height={100}
          alt={product.title}
          className="w-full h-auto hover:opacity-50 transition-all  ease-in-out duration-150  hover:scale-110 "
        ></Image>

        <h1 className="text-black m-1 text-[12px]">{product.title}</h1>
        <p className="text-black m-1 text-[10px]">{product.brand}</p>
      </Link>
      <button
        onClick={() => addItem(product)}
        className="w-full h-12 flex justify-around bg-gray-400 place-items-center  "
      >
        {product.discountPercentage > 15 ? (
          <div className="flex text-[10px]">
            <p className="text-gray-700 line-through m-1">${product.price}</p>
            <p className="text-black m-1">
              $
              {(
                product.price -
                (product.price / 100) * product.discountPercentage
              ).toFixed(2)}
            </p>{" "}
            <p className="p-1 bg-red-600 text-white">
              {product.discountPercentage}% OFF
            </p>{" "}
          </div>
        ) : (
          <p className="text-black m-1">${product.price}</p>
        )}
        <GiShoppingCart className="text-black m-1 size-10 hover:cursor-pointer hover:text-blue-400 transition-all duration-150" />
      </button>
    </article>
  );
}
