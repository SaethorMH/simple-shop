import CategorySelector from "./CategorySelector";
import LimitSelector from "./LimitSelector";
const FilterSidebar = ({ categories }) => {
  return (
    <aside className="border bg-gray-300 flex flex-col">
      <CategorySelector categories={categories} />
      <LimitSelector />
    </aside>
  );
};

export default FilterSidebar;
