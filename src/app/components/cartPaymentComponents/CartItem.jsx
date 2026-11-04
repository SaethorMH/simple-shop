import Image from "next/image";
import { useCart } from "./useCart";
import { RxCross2 } from "react-icons/rx";

export default function CartItem({ product }) {
  const remove = useCart((state) => state.removeItem);
  return (
    <>
      <article className=" shadow-xl bg-[#E9E9E9] m-auto mb-2 w-140 max-w-[80vw]  ">
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="flex w-full justify-between place-items-center">
            <Image
              src={product.images[0]}
              width={100}
              height={100}
              alt={"image of " + product.title}
            ></Image>

            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <button
            onClick={() => remove(product)}
            className="hover:cursor-pointer rounded-full p-1 m-2 text-2xl    hover:scale-120 transition-all text-white bg-black"
          >
            <RxCross2 />
          </button>
        </div>
      </article>
    </>
  );
}
