
import Backtoproducts from "@/app/components/detailviewComponents/Backtoproducts";
import DetailView from "@/app/components/detailviewComponents/Detailview";
import Reviews from "@/app/components/detailviewComponents/Reviews";
export default async function Page({ params }) {
  const { id: id } = await params;
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  const product = await response.json();


  return (
    <>
      <Backtoproducts />
      <DetailView product={product} />
      <Reviews reviews={product.reviews} />
    </>
  );

 
}

