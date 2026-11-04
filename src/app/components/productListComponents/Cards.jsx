"use client";

import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useCart } from "../cartPaymentComponents/useCart";
import Ratings from "../detailviewComponents/Ratings";

export default function Cards({ product }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <article className="bg-white w-50 h-full flex justify-between flex-col object-cover rounded border-solid border shadow relative border-[#D9D9D9] overflow-hidden">
      <Link
        href={`products/${product.id}`}
        className="grid grid-cols-1 grid-rows-1"
      >
        <Image
          src={product.thumbnail}
          width={100}
          height={100}
          alt={product.title}
          className="w-full h-auto hover:opacity-50 transition-all  ease-in-out duration-150  hover:scale-110 row-start-1 col-start-1"
        />
        <p className="text-red-700 absolute row-start-1 col-start-1 m-1">
          {product.stock < 50 ? "Low stock" : null}{" "}
        </p>
        {product.discountPercentage > 15 ? (
          <p className="p-1 bg-red-600 text-white w-fit ml-auto h-fit rounded row-start-1 col-start-1">
            {product.discountPercentage}% OFF
          </p>
        ) : (
          ""
        )}

        <h1 className="text-black m-1 text-[14px] px-2 font-medium row-start-2 col-start-1">
          {product.title}
        </h1>
        <p className="text-black m-1 text-[10px] px-3 row-start-3 col-start-1">
          {product.brand}
        </p>
      </Link>
      <div className="flex m-auto scale-70">
        <Ratings value={product.rating} />
      </div>
      <div className="w-full h-9 flex justify-around bg-white place-items-center p-2">
        {product.discountPercentage > 15 ? (
          <div className="flex ">
            <p className="text-gray-500 line-through m-1 text-[10px]">
              ${product.price}
            </p>
            <p className="text-black m-1">
              $
              {(
                product.price -
                (product.price / 100) * product.discountPercentage
              ).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-black m-1">${product.price}</p>
        )}
        <button
          onClick={() => addItem(product)}
          className="shadow rounded bg-gray-200 w-20 ml-auto hover:cursor-pointer hover:text-blue-400 hover:scale-110 hover:bg-white active:scale-90 active:bg-gray-300 transition-all duration-150"
        >
          <GiShoppingCart className="text-black mx-auto  size-8 " />
        </button>
      </div>
    </article>
  );
}
