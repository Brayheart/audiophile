import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Placeholder for fetching product details based on id
  const product = { name: 'Product Name', description: 'Product Description' };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default ProductDetail;
