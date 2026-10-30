import Image from "next/image";

export default async function DetailView({ params }) {
  const { id: id } = await params;
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  const product = await response.json();

  return (
    <>
      <section className="grid grid-cols-2 shadow max-w-[60%] self-center m-10">
        <Image
          src={product.images[0]}
          height={500}
          width={500}
          alt={product.title}
        />
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-4xl mt-30">{product.title ?? "placeholder"}</h2>
          <p>{product.price ? product.price + "$" : "Free"}</p>
          <p>{product.description ?? "PLACEHOLDER DESCRIPTION"}</p>
          <button>Add to cart</button>
        </div>
        <div>
          <p>Rating:{product.rating ?? "Placeholder Rating"}</p>
        </div>
      </section>

      <div>
        <h3 className="ml-40">Reviews:</h3>
        <div className="flex justify-around mx-12 text-center">
          {product.reviews.map((review, index) => (
            <div key={index}>
              <h2>{review.rating}/5</h2>
              <p>{review.reviewerName}</p>
              <p>"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
