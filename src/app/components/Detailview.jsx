import Image from "next/image";
import Ratings from "./Ratings";
import ButtonaddProduct from "./ButtonaddProduct";
export default  function Detailview({product}) {
  return (
    <>
      <section className="grid grid-cols-2 shadow-xl max-w-[80%] p-5  self-center bg-white m-7 border-2 border-[#305A89]">
        <Image src={product.images[0]} height={500} width={500} alt={product.title} className="px-3" />
        <div className="flex flex-col justify-between h-full pr-5 mr-5">
          <h2 className="text-4xl mt-20">{product.title ?? "placeholder"}</h2>
          <div className="relative w-[50%] h-2 after:content-[''] after:absolute after:-bottom-0 after:-top-0 after:bg-[#515151] after:opacity-50 after:w-full after:h-[2px]"></div>
          <p className="mb-3 text-2xl">{product.price ? product.price + "$" : "Free"}</p>
          <p className=" mt-1 my-3 text-xl">{product.description ?? "PLACEHOLDER DESCRIPTION"}</p>
          <ButtonaddProduct product ={product}  />
           
          
        </div>
        <div className="">
          <p className="flex justify-start gap-5">Rating: <Ratings value={product.rating} /></p>
        </div>
      </section>
    </>
  );
}
