"use client";
import { useRouter } from "next/navigation";

export const CategorySelector = ({ categories }) => {
  const router = useRouter();

  return (
    <>
      <select className="size-fit border-2 border-[#305A89] m-2 bg-[#E9E9E9] text-center" onChange={(e) => router.push(`?category=${e.target.value}`)}>
    
          <option value="" className="text-center ">
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
