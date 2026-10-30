import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-6 shadow">
      <div className="flex justify-evenly place-items-center">
        <Logo />
        <form>
          <input
            className="border border-r-0 rounded-full rounded-r-none indent-8 py-1"
            type="text"
            placeholder="search"
          />
          <button
            className="bg-red-500 border border-black border-l-0 py-1  text-white px-4 rounded-r-full"
            type="submit"
          >
            Q
          </button>
        </form>
        <div className="flex gap-12 align-middle place-items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"Products/"}>Products</Link>
          <button>Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
