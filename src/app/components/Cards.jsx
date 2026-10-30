import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";

export default function Cards() {
  return (
    <section className="bg-white size-fit m-2 block object-cover border-solid border border-[#D9D9D9] ">
      <Image src="/apple.avif" width={100} height={100} alt="apple" className="size-[300px] "></Image>

      <h1 className="text-black m-1">Apple</h1>
      <div className="flex justify-stretch gap-7">
        <p className="text-black m-1">$ 5:00</p>

        <GiShoppingCart className="text-black m-1" />
      </div>
    </section>
  );
}
