import React from "react";
// import headphones from '../info/assets/home/mobile/mk1headphone.png';
import ProductCards from "./ProductCards";
import Product from "./Product";

const Speakers = ({ products }) => {
  const headphoneProducts = products.filter(
    (product) => product.category === "speakers"
  );
  return (
    <div className="pt-[80px]">
      <div className="bg-black h-100px flex items-center justify-center">
        <div className="text-white text-center text-[28px]">SPEAKERS</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {" "}
        {/* Adjust grid columns for responsiveness */}
        {headphoneProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <ProductCards />
    </div>
  );
};

export default Speakers;
