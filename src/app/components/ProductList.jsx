import { Suspense } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
const ProductList = async ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchGroceries searchParams={searchParams} />
    </Suspense>
  );
};

const FetchGroceries = async ({ searchParams }) => {
  console.log(await searchParams);
  const { search } = await searchParams;
  const url = search
    ? search.searchParams === ""
      ? "https://dummyjson.com/products?limit=8"
      : `https://dummyjson.com/products/search?q=${search}&limit=8`
    : "https://dummyjson.com/products?limit=8";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data.products);
  if (data.products.length < 1) {
    return (
      <div className="mx-auto mt-16 justify-center flex flex-col place-items-center">
        <h3>Sorry we could not find any products called: {search}</h3>
        <SearchBar />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap mx-auto items-center justify-center">
      {data.products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
