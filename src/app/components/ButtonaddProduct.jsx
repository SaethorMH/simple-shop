"use client"
import { useCart } from "@/app/components/useCart";

export default function ButtonaddProduct({product}){
const addProduct = useCart((state) => state.addItem);
return (
  <button onClick={() => addProduct(product)} className=" mx-auto ml-2 p-3 block bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500">
    Add to cart
  </button>
);

}