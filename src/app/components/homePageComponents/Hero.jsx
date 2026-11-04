import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
export default function Hero(){
    return (
      <>
        <article className="relative w-full h-screen   ">
          <div className="absolute  top-[15%]  left-[5%] z-10  text-center ">
            <h1 className="text-blue-400 text-3xl">Welcome to Simple shop</h1>
            <h2 className="text-white text-xl mt-[2rlh]">Best products on the market</h2>
            
            <p className="mt-[7rlh] text-[#F9F6EE] ">See the newest collection here</p>
            <FaArrowDown className="size-7 mx-auto mt-5 animate-bounce bg-gray-700 rounded-3xl text-blue-500"/>
            <Link href={"/products/"}>
              <button className="  py-2 mt-10 px-4 mx-auto bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer hover:bg-blue-500 transition-all duration-150">See all products</button>
            </Link>
          </div>

          <Image src="/HeroImage.jpeg" fill={true} quality={100} alt="hero" className=" size-fit cover aspect-video mx-auto  inline-block h-screen border-t border-[#D9D9D9] "></Image>
        </article>
      </>
    );
}