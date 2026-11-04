import ProductList from "@/app/components/productListComponents/ProductList";
import { Suspense } from "react";

export default function ProductListe({ searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList searchParams={searchParams} />
    </Suspense>
  );
}
