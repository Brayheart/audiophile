import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ category }) => {
  // Placeholder for product data
  const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/${category}/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
