import Cards from "./productListComponents/Cards";
import Link from "next/link";
export default async function PopularProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=5");
  const data = await response.json();
  return (
    <>
      <article className=" mt-5">
        <h1 className="mt-3 text-center text-2xl ">Popular Products</h1>
        <div className="relative mx-auto mt-3 w-[90%] h-2 after:content-[''] after:absolute after:-bottom-0 after:-top-0 after:bg-[#515151] after:opacity-50 after:w-full after:h-[2px]">
          {" "}
        </div>
        <div className="flex justify-center gap-10 mt-10">
          {data.products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/products/"}>
            <button className="py-2 mt-10 px-4 mx-auto bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500">
              See all products
            </button>
          </Link>
        </div>
      </article>
    </>
  );
}
