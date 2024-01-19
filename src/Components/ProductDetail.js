import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../info/data.json';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product that matches the id in the URL
    const productDetail = productData.find((p) => p.id === parseInt(id, 10));
    setProduct(productDetail);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default ProductDetail;