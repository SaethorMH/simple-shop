"use client"
import { useState } from "react";
   

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
        <h2 className="text-blue-400 underline font-serif text-9xl decoration-red-400 mt-[5rlh]">SHOP</h2>
      </section>
    </article>
  );
}
export default Footer;