"use client";
import { useRouter } from "next/navigation";

export const CategorySelector = ({ categories }) => {
  const router = useRouter();

  return (
    <>
      <select
        className="w-full  p-2  rounded shadow bg-sky-200 capitalize mb-2 text-[12px]"
        onChange={(e) => router.push(`?category=${e.target.value}`)}
      >
        <option value="" className=" text-center ">
          Category
        </option>

        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategorySelector;
