import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// ... other imports (e.g., ImageGallery, QuantitySelector, etc.)

const ProductDetail = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const product = state?.product;

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
        <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg mt-6">
          ADD TO CART
        </button>
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
