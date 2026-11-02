
import CategorySelector from "./CategorySelector";

export default async function FetchCategories(){
 const response = await fetch("https://dummyjson.com/products/category-list");
    const data = await response.json();
return data.map((category, index) => <CategorySelector category={category} />);
}


              



