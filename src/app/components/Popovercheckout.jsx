import Link from "next/link";
export default function Popovercheckout({ icon }) {
  
    return (
      <>
        <button popoverTarget="popover" className="[anchor-name:--anchor]">
          {icon}
        </button>

        <div id="popover" popover="auto" className="fixed [position-anchor:--anchor] [top:anchor(bottom)] [left:anchor(left)] bg-[#E9E9E9]">
          <h3>Cart</h3>
          <Link href={"/payment"}>
            {" "}
            <button className="py-2 mt-10 px-4 mx-auto bg-[#D9D9D9] rounded-3xl border-2 border-[#305A89] cursor-pointer">Checkout</button>
          </Link>
        </div>
      </>
    );
}
