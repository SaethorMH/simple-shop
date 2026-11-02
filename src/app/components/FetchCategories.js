
export default async function FetchCategories() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  return response.json(); 
}
