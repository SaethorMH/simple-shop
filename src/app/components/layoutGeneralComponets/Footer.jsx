"use client"
import { useState } from "react";
   import { LiaShippingFastSolid } from "react-icons/lia";
   import { BiSupport } from "react-icons/bi";
   import { GiPriceTag } from "react-icons/gi";

const Footer = () =>{
const[isSubscribed, setIssubcribed] = useState(false);
return (
  <article className="w-full  bg-blue-300 mt-[3rlh]">
    <section className="mx-auto max-w-6xl text-center">
      <h1 className=" text-4xl mt-[2rlh] font-extrabold">Subscribe to Simple shop</h1>
      <h2 className="mt-[1rlh] text-2xl text-white">And get the most craziest deals you have ever seen!</h2>
      <button onClick={() => setIssubcribed(!isSubscribed)}>
        <p className="mt-[2rlh]   hover:scale-250 hover:text-green-500 cursor-pointer   transition-all duration-150">{isSubscribed ? "You are subcribed, congrats!" : "Subscribe!"}</p>
      </button>
      <h2 className="text-blue-400 underline font-serif text-9xl decoration-red-400 mt-[5rlh] animate-bounce">SHOP</h2>
      <p className="font-bold text-xs">© 2026 Lorem Ipsum. All rights reserved. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
    <section className="flex border-t border-[#D9D9D9] justify-evenly gap-3 shadow-xl bg-white  py-5">
      <div>
        <p>Free shipping</p>
        <LiaShippingFastSolid className="mx-auto animate-bounce size-7 mt-2" />
      </div>
      <div>
        <p>Support 24/7</p>
        <BiSupport className="mx-auto animate-bounce size-7 mt-2" />
      </div>
      <div>
        <p>Great deals, low prices</p>
        <GiPriceTag className="mx-auto animate-bounce size-7 mt-2" />
      </div>
    </section>
  </article>
);
}
export default Footer;