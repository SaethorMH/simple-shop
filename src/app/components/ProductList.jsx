import { Suspense } from "react";
import Image from "next/image";

const Cards = async ({category}) => {
return(
     <Suspense fallback={<div>Loading...</div>}>
<FetchGroceries category ={category}/>
</Suspense>
);
};

const FetchGroceries = async ({category}) =>{

const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return(
{products.map((product) => (
<Image loading= "eager" alt= {product.title ||"product-image"} src={product.thumbnail} width={300} height={200}/>
))}

  );
export default Cards;
};