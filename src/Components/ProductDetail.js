import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// ... other imports (e.g., ImageGallery, QuantitySelector, etc.)

const ProductDetail = ({ addToCart }) => {
  const { slug } = useParams();
  const { state } = useLocation();
  const product = state?.product;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    name,
    image,
    category,
    new: isNew,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = product;

  console.log(product);

  return (
    <div className="container mx-auto px-5 py-16 md:px-0 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <img src={image.mobile} alt="" />
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-gray-600 mb-8">{description}</p>
        <p className="text-2xl font-bold mb-6">${price}</p>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 text-gray-600">
            <button
              onClick={() =>
                quantity > 0 ? setQuantity(quantity - 1) : quantity
              }
              className="p-2 hover:bg-gray-100 focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              className="w-12 text-center border-0 focus:ring-0"
              value={quantity}
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100 focus:outline-none"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              addToCart(name, quantity, price);
              setQuantity(0);
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none"
          >
            ADD TO CART
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold uppercase mb-4">FEATURES</h2>
          <p className="text-gray-600">{features}</p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold uppercase mb-4">IN THE BOX</h2>
          <ul>
            {includes.map((item) => (
              <li key={item.item} className="text-gray-600 mb-2">
                {item.quantity}x {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
