import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
export default function Hero(){
    return (
      <>
        <article className="relative w-full h-[100vh]   ">
          <div className="absolute  top-[15%]  right-[39%] z-10 text-3xl font-extrabold rounded-xl">
            <div className="bg-white ">
              <h1 className="text-blue-400">Welcome to Simple shop</h1>
            </div>
            <p className="mt-[7rlh] text-[#F9F6EE] size-m">See the newest collection here</p>
          </div>
          <button className=" absolute top-[15%]  right-[39%]  py-2 mt-10 px-4 mx-auto bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500">See all products</button>
          <Image src="/simple.shop.img.avif" fill={true} alt="hero" className=" size-fit cover aspect-video mx-auto mt-3 inline-block h-screen "></Image>
        </article>
        <section className="flex justify-evenly gap-3 shadow-xl bg-white mt-5 py-5">
          <div>
            <p>Free shipping</p>
            <LiaShippingFastSolid className="mx-auto" />
          </div>
          <div>
            <p>Support 24/7</p>
            <BiSupport className="mx-auto" />
          </div>
          <div>
            <p>Great deals, low prices</p>
            <GiPriceTag className="mx-auto" />
          </div>
        </section>
      </>
    );
}