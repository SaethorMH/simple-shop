import Image from "next/image";

export default function Basketcase({ product }) {
  
    return (
      <>
        <button popoverTarget="basket" className="[anchor-name:--anchor]">
          Open
        </button>

        <div id="basket" popover="auto" className="fixed [position-anchor:--anchor] [top:anchor(bottom)]">
          <button>Checkout</button>
        </div>
        <Image src={product.thumbnail} width={100} height={100} alt={product.title} className="size-[250px]" />
       
      </>
    );
}
