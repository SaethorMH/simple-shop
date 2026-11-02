"use client";
import { useRouter } from "next/navigation";


 export const CategorySelector = ({category}) => {
const router = useRouter();

    return (
      <>
        {/* <select>
          <option value={category}>{category}</option>
        </select> */}

        <button onClick={() => router.push(`?category=${category}`)}>{category}</button>
      </>
    );
   
  };

export default CategorySelector;
















