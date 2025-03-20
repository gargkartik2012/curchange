import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500); // Simulate loading delay
  }, []);

  return (
    <div className="product-list-container">
      
      <div className="product-list">
      
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
