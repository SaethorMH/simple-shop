import Image from "next/image";

export default function CartItem() {
  return (
    <>
      <section className=" shadow-xl bg-[#E9E9E9] m-10  grid grid-cols-2 max-6xl  ">
        <section className=" grid grid-cols-1 m-5 p-3 gap-2">
          <h1>Products</h1>
          <div className="flex items-center gap-5">
            <Image src="/apple.avif" width={100} height={100}></Image>
            <div>
              <p>Apple</p>
              <p>$5.00</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 justify-self-end">
          <div className="m-3 p-5 text-center ">
            <h2 className="p-2">Total</h2>
            <div className=" relative w-5 h-2 after:content-[''] after:absolute after:-bottom-0 after:-top-0 after:bg-black after:opacity-50 after:w-25 after:h-[1px] "></div>
            <p className="p-2">$ 10.00</p>
            <button className=" py-2 px-4 bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89]">
              Pay here
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
