import Link from "next/link";
export default function Backlink(href,children){

    return (
      <Link href={href} className="text-2xl m-3 pl-20 hover:text-blue-500  ">
        {"<"} Back to products
      </Link>
    );
}