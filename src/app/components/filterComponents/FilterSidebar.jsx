"use client";

import CategorySelector from "./CategorySelector";
import LimitSelector from "./LimitSelector";
import { useState } from "react";
const FilterSidebar = ({ categories }) => {
  const [maxPrice, setMaxPrice] = useState(2000);
  return (
    <aside className=" sticky top-25 rounded shadow-2xl bg-gray-200 flex gap-5 flex-col w-sm h-fit p-4 mt-8">
      <h2>Filter Options:</h2>

      <details className="bg-gray-50">
        <summary className="bg-white rounded shadow p-2 text-center">
          General
        </summary>
        <div className="p-2">
          <CategorySelector categories={categories} />
          <LimitSelector />
        </div>
      </details>
      <details className="bg-gray-50 w-full">
        <summary className="bg-white  rounded shadow p-2 text-center">
          Price
        </summary>
        <p className="m-auto w-fit">Max Price:(ikke funktionel)</p>
        <input
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          type="range"
          name="maxPrice"
          id="maxPrice"
          min={0}
          max={2000}
          className="w-full h-10"
        />
        <p className="m-auto w-fit">${maxPrice}.00</p>
      </details>
    </aside>
  );
};

export default FilterSidebar;
