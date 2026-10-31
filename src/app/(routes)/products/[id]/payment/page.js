import CardProduct from "@/app/components/CardProduct";
import BasketCase from "@/app/components/basketcase";
export default async function Page({params}) {
   const { id: id } = await params;
   const url = `https://dummyjson.com/products/${id}`;
   const response = await fetch(url);
   const product = await response.json();
  
  return (
    <>
      <CardProduct product={product} />
      <BasketCase product={product} />
    </>
  );
};






