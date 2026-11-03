import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="text-blue-400 underline font-serif text-3xl decoration-red-400">
        SHOP
      </h2>
    </Link>
  );
};

export default Logo;
