import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------------- Types ---------------- */
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  reviewerName: string;
  date: string; // ISO string
  rating: number;
  comment: string;
}

interface Product {
  id: string | number;
  title: string;
  thumbnail: string;
  images: string[];
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  description: string;
  stock: number;
  availabilityStatus: string;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  dimensions: Dimensions;
  weight: number;
  minimumOrderQuantity: number;
  tags: string[];
  reviews: Review[];
}

/* ---------------- Component ---------------- */
const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ensure we safely access state
  const product = location.state as Product | undefined;

  if (!product) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 font-semibold">
          ⚠ No product details found.
        </p>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-3 py-1 mt-4 rounded hover:bg-gray-200"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Destructure product
  const {
    availabilityStatus,
    brand,
    category,
    description,
    dimensions,
    discountPercentage,
    images,
    minimumOrderQuantity,
    price,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    stock,
    tags,
    thumbnail,
    title,
    warrantyInformation,
    weight,
  } = product;

  // Selected image state
  const [mainImage, setMainImage] = useState<string>(thumbnail);

  return (
    <article className="max-w-5xl mx-auto p-6  pt-[15vh] text-white">
      {/* Go Back Button  */}
      {/* <section> */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="px-3 py-2 text-xl mb-4 font-bold cursor-pointer tracking-wider rounded-lg  border hover:bg-[#2c4441d8]"
      >
        ← Go Back
      </button>

      {/* </section> */}

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-400">
          {brand} • {category}
        </p>
      </header>

      {/* Layout */}
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <section>
          <img
            src={mainImage}
            alt={title}
            className="w-full h-80 object-contain  border  border-[#2c4441d8] rounded-lg mb-4"
          />
          <section className="flex gap-10 overflow-x-auto p-2">
            {images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title}-${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover border border-[#2c4441d8] rounded-md cursor-pointer hover:opacity-80 ${
                  mainImage === img
                    ? "ring-3 shadow-2xl ring-white border-none p-1"
                    : ""
                }`}
              />
            ))}
          </section>
        </section>

        {/* Details */}
        <section className="space-y-4">
          <p className="text-lg">{description}</p>

          <section className="flex items-center gap-3">
            <span className="text-2xl font-semibold">${price}</span>
            <span className="text-sm text-green-600">
              -{discountPercentage}% off
            </span>
          </section>

          <p className="text-gray-400">⭐ {rating} / 5</p>

          <p>
            <strong className="text-gray-400">Availability :</strong>{" "}
            {availabilityStatus} ({stock} in stock)
          </p>
          <p>
            <strong className="text-gray-400">Shipping :</strong>{" "}
            {shippingInformation}
          </p>
          <p>
            <strong className="text-gray-400">Warranty :</strong>{" "}
            {warrantyInformation}
          </p>
          <p>
            <strong className="text-gray-400">Return Policy :</strong>{" "}
            {returnPolicy}
          </p>

          {/* Dimensions */}
          <p>
            <strong className="text-gray-400">Dimensions :</strong>{" "}
            {dimensions?.width} × {dimensions?.height} × {dimensions?.depth} cm
          </p>
          <p>
            <strong className="text-gray-400">Weight :</strong> {weight} g
          </p>
          <p>
            <strong className="text-gray-400">Minimum Order Quantity :</strong>{" "}
            {minimumOrderQuantity}
          </p>

          {/* Tags */}
          <section className="flex flex-wrap gap-2 mt-2">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#2c4441d8] text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </section>
        </section>
      </article>

      {/* Reviews */}
      <article className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {reviews?.length ? (
          <section className="space-y-4">
            {reviews.map((review, index) => (
              <section
                key={index}
                className="border border-[#2c4441d8] p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-sm text-gray-300 font-mono">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  ⭐ {review.rating} / 5
                </p>
                <p>{review.comment}</p>
              </section>
            ))}
          </section>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </article>
    </article>
  );
};

export default ProductDetails;
