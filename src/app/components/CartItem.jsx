import Image from "next/image";
import { useCart } from "./useCart";

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
            onClick={(product) => remove(product)}
            className="hover:cursor-pointer  hover:bg-gray-50 border size-10 m-4"
          >
            x
          </button>
        </div>
      </article>
    </>
  );
}
