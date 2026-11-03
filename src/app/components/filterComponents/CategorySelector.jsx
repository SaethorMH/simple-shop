"use client";
import { useRouter } from "next/navigation";

export const CategorySelector = ({ categories }) => {
  const router = useRouter();

  return (
    <>
      <select className="size-fit border-solid border-2 border-blue-500 capitalize "  onChange={(e) => router.push(`?category=${e.target.value}`)}>
    
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
