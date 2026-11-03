import { Suspense } from "react";
import Cards from "./Cards";
import FetchCategories from "../FetchCategories";
// import CategorySelector from "./filterComponents/CategorySelector";
import SearchBar from "../layoutGeneralComponets/SearchBar";
// import LimitSelector from "./filterComponents/LimitSelector";
import FilterSidebar from "../filterComponents/FilterSidebar";
const ProductList = async ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchGroceries searchParams={searchParams} />
    </Suspense>
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
      <div className="mx-auto mt-16 justify-center flex flex-col place-items-center">
        <h3>Sorry we could not find any products called: {search}</h3>
        <SearchBar />
      </div>
    );
  }

  return (
    <>
      <FilterSidebar categories={categories} />

      <div className="flex flex-wrap mx-auto items-center  justify-center  gap-5">
        {data.products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
