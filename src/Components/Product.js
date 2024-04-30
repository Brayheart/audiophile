import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, image, slug, new: isNew, price, description } = product;
  console.log(slug);

  return (
    <Link to={`${slug}`} state={{ product }}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={image.desktop} alt={name} className="rounded-lg mb-2" />{" "}
        {/* Use desktop image for now, adjust for responsiveness */}
        {/* {isNew && (
          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full mb-2">
            New product
          </span>
        )} */}
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default Product;
