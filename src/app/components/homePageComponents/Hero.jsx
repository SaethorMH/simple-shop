import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
import Link from "next/link";
export default function Hero(){
    return (
      <>
        <section className="flex border-t border-[#D9D9D9] justify-evenly gap-3 shadow-xl bg-white  py-5">
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
        <article className="relative w-full h-screen   ">
          <div className="absolute  top-[15%]  left-[5%] z-10  text-center ">
            <h1 className="text-blue-400 text-3xl">Welcome to Simple shop</h1>
            <h2 className="text-white text-xl mt-[2rlh]">Best products on the market</h2>
            <p className="mt-[7rlh] text-[#F9F6EE] ">See the newest collection here</p>
            <Link href={"/products/"}>
              <button className="  py-2 mt-10 px-4 mx-auto bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500 transition-all duration-150">See all products</button>
            </Link>
          </div>

          <Image src="/HeroImage.jpeg" fill={true} quality={100} alt="hero" className=" size-fit cover aspect-video mx-auto  inline-block h-screen border-t border-[#D9D9D9] "></Image>
        </article>
      </>
    );
}