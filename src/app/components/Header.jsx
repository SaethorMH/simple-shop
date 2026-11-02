import Link from "next/link";
import Logo from "./Logo";
   import { GiShoppingCart } from "react-icons/gi";
   import Popover from "./Popovercheckout";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <header className="py-6 shadow">
      <div className="flex justify-evenly place-items-center">
        <Logo />
        <SearchBar />
        <div className="flex gap-12 align-middle place-items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/products/"}>Products</Link>
          <Popover icon={<GiShoppingCart />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
