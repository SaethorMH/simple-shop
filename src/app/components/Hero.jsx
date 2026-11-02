import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
export default function Hero(){
    return (
      <>
        <article className="relative text-center  ">
          <div className="absolute  top-[68%]  left-[35%] z-10 text-3xl font-extrabold">
            <h1>Welcome to the shop</h1>
            <h3>Everything you could ever need</h3>
          </div>
          <Image src="/Homepageimg.webp" width={500} height={500} alt="hero" className="mx-auto mt-3 "></Image>
        </article>
        <section className="flex justify-evenly gap-3 shadow-xl bg-[#E9E9E9] mt-5 py-5">
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