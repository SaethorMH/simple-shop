import { Suspense } from "react";
import Cards from "./Cards";
import FetchCategories from "../FetchCategories";
// import CategorySelector from "./filterComponents/CategorySelector";
import SearchBar from "../layoutGeneralComponets/SearchBar";
// import LimitSelector from "./filterComponents/LimitSelector";
import FilterSidebar from "../filterComponents/FilterSidebar";
const ProductList = async ({ searchParams }) => {
  const categories = await FetchCategories();
  return (
    <div className="grid grid-cols-[1fr_2fr] max-w-280 m-auto ">
      <FilterSidebar categories={categories} />
      <Suspense fallback={<div>Loading...</div>}>
        <FetchGroceries searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

const FetchGroceries = async ({ searchParams }) => {
  console.log(await searchParams);

  const { search, category, limit: limitParam } = await searchParams;
  const limit = Number(limitParam) || 8;
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : search
      ? search.searchParams === ""
        ? `https://dummyjson.com/products?limit=${limit}`
        : `https://dummyjson.com/products/search?q=${search}&limit=${limit}`
      : `https://dummyjson.com/products?limit=${limit}`;

  const [response, categories] = await Promise.all([
    fetch(url),
    FetchCategories(),
  ]);
  const data = await response.json();
  console.log(data.products);
  if (data.products.length < 1) {
    return (
      <div className="mx-auto justify-center flex flex-col place-items-center">
        <h3>Sorry we could not find any products called: {search}</h3>
        <SearchBar />
      </div>
    );
  }

  return (
    <>
      <h2 className=" capitalize absolute left-[38%] top-[18%] font-bold text-5xl">
        {search ? search : category ? category : "All Products"}
      </h2>
      <div className="grid grid-cols-3 mx-auto my-20 items-center justify-center gap-2">
        {data.products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
