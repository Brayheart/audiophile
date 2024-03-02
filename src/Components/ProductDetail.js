import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../info/data.json";

const ProductDetail = ({ element }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  console.log("Slug from URL:", slug);
  console.log("props", element);

  useEffect(() => {
    // Find the product that matches the slug and category
    const productDetail = productData.find(
      (p) => p.slug === slug && p.category === element
    );
    // Set the found product to the state
    setProduct(productDetail);
  }, [slug, element]);

  // console.log(products)
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="relative h-352px bg-custom-lightgray rounded-lg m-5 flex flex-col justify-center items-center">
        {console.log(product)}
        <img
          src={product.image.mobile}
          className="w-12/12 absolute top-7"
          alt=""
        />
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <div className="flex flex-col gap-[24px] text-center w-[327px] items-center">
          <div className="text-custom-orange text-[14px] tracking-[10px]">
            NEW PRODUCT
          </div>
          <div className="text-black text-[28px] font-bold">{product.name}</div>
          <div className="font-[15px] leading-[25px] opacity-[0.5]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </div>
          <button className="bg-custom-orange text-white w-[160px] h-[48px]">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
