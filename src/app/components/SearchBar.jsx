import Form from "next/form";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Form action="/products/" className="h-fit flex items-center">
      <input
        className="border border-r-0 rounded-full rounded-r-none indent-8 py-1"
        type="text"
        placeholder="search"
        name="search"
      />
      <button
        className="bg-red-500 border border-black border-l-0 py-1  text-white px-4 rounded-r-full h-full "
        type="submit"
      >
        <IoSearch className="text-2xl" />
      </button>
    </Form>
  );
};

export default SearchBar;
