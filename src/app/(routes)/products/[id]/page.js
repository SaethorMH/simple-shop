/* import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { useCart } from "@/app/components/useCart";
import Link from "next/link";
import { use } from "react"; */
import Backtoproducts from "@/app/components/detailviewComponents/Backtoproducts";
import DetailView from "@/app/components/detailviewComponents/Detailview";
import Reviews from "@/app/components/detailviewComponents/Reviews";
export default async function Page({ params }) {
  const { id: id } = await params;
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  const product = await response.json();
  /* const addProduct = useCart((state) => state.addItem);
  const ratings = (rating) =>
  [1, 2, 3, 4, 5].map((number) => 
    (number <= Math.round(rating) ? <FaStar key={number} className="text-amber-300 size-7" /> : null ) 
); */

  return (
    <>
      <Backtoproducts />
      <DetailView product={product} />
      <Reviews reviews={product.reviews} />
    </>
  );

  /* return (
  <>
   {/*  <Link href="/products" className="text-2xl m-3 pl-20 hover:text-blue-500  ">
      {"<"} Back to products
    </Link>
    <section className="grid grid-cols-2 shadow-xl max-w-[80%] p-5  self-center bg-white m-7 border-2 border-[#305A89]">
      <Image src={product.images[0]} height={500} width={500} alt={product.title} className="px-3" />
      <div className="flex flex-col justify-between h-full pr-5 mr-5">
        <h2 className="text-4xl mt-20">{product.title ?? "placeholder"}</h2>
        <div className="relative w-[50%] h-2 after:content-[''] after:absolute after:-bottom-0 after:-top-0 after:bg-[#515151] after:opacity-50 after:w-full after:h-[2px]"></div>
        <p className="mb-3 text-2xl">{product.price ? product.price + "$" : "Free"}</p>
        <p className=" mt-1 my-3 text-xl">{product.description ?? "PLACEHOLDER DESCRIPTION"}</p>
        <button onClick={()=>addProduct(product)} className=" mx-auto ml-2 p-3 block bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500">Add to cart</button>
      </div>
      <div className="">
        <p className="flex justify-start gap-5">Rating:{ratings(product.rating)}</p>
      </div>
    </section>

    <div>
      <h3 className="ml-40">Reviews:</h3>
      <div className="flex justify-around mx-12 text-center">
        {product.reviews.map((review, index) => (
          <div key={index}>
            <div className="m-3 p-3 bg-white border-2 border-[#305A89]">
              <IoIosPerson className="mx-auto size-6" />
              <p>{review.reviewerName}</p>
              <p>"{review.comment}"</p>
              <p className="flex justify-center gap-3 m-3 ">{ratings(review.rating)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 /*  </> */
}
/* );
}  */
