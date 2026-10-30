import { Suspense } from "react";
import Cards from "./Cards";
const ProductList = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchGroceries />
    </Suspense>
  );
};

const FetchGroceries = async () => {
  const url = `https://dummyjson.com/products/category/groceries`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data.products);
  return (
    <div>
      {data.products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
