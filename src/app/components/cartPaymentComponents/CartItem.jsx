import Image from "next/image";
import { useCart } from "./useCart";
import { RxCross2 } from "react-icons/rx";

export default function CartItem({ product }) {
  const remove = useCart((state) => state.removeItem);
  return (
    <>
      <article className=" border-t rounded-2xl border-[#777B7E] grid grid-cols-[auto_1fr_auto] items-start shadow-xl gap-2 bg-[#E9E9E9] m-auto  w-140 max-w-[80vw]  ">
        <Image src={product.images[0]} width={200} height={200} alt={"image of " + product.title}></Image>
        <div className=" flex flex-col mt-[2rlh]    ">
          <p className="font-bold text-xl">{product.title}</p>
          <p className="capitalize text-lg ">{product.category}</p>
          {product.discountPercentage > 15 ? (
            <div className="mt-[1rlh]">
              <p className="text-gray-500 line-through  text-[10px]">${product.price}</p>
              <p className="text-red-700  ">${(product.price - (product.price / 100) * product.discountPercentage).toFixed(2)}</p>
              <p className="text-red-700 text-xs b">{product.stock < 50 ? "Low stock" : null} </p>
            </div>
          ) : (
            <p className="text-black m-1">${product.price}</p>
          )}
          <div className="mt-[1rlh] text-xs">
            <p>Will arrive:</p>
            <p className="">{product.shippingInformation}</p>
          </div>
        </div>
        <button onClick={() => remove(product)} className="hover:cursor-pointer rounded-full p-1 m-2 text-2xl     hover:scale-120 transition-all text-white bg-black">
          <RxCross2 />
        </button>
      </article>
    </>
  );
}


   

 