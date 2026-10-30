import Image from "next/image";

export default function CardProduct(){
return (
  <>
    <h1 className="text-lg">Products</h1>
    <section className="grid grid-cols-2 bg-[#E9E9E9] m-20 shadow-xs  ">
      <div className="flex items-center">
        <Image src="/apple.avif" width={100} height={100} alt="apple" className="m-10" />

        <div className=" m-5 p-30  ">
          <h2>Apple</h2>
          <p>$ 5.00</p>
        </div>
      </div>
      <div className=" grid-cols-1 text-center p-30">
        <h1 className=" underline decoration-2 underline-offset-8">Total</h1>
        <p className="">$ 10.00</p>
        <button>hejsa</button>
      </div>
    </section>
  </>
);


};