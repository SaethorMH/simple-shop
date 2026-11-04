import Link from "next/link";
import Logo from "./Logo";
import { GiShoppingCart } from "react-icons/gi";
import Popover from "../cartPaymentComponents/Popovercheckout";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <header className="py-6 shadow-xl bg-white sticky top-0 z-10 ">
      <div className="flex max-w-[80svw] m-auto gap-10 justify-evenly place-items-center">
        <Logo />
        <SearchBar />
        <div className="flex gap-12 align-middle place-items-center ">
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-all duration-150"
          >
            Home
          </Link>
          <Link
            href={"/products/"}
            className="hover:text-blue-500 transition-all duration-150"
          >
            Products
          </Link>
          <Popover icon={<GiShoppingCart />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
