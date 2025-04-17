'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      const clothes = data.filter(
        item =>
          item.category === "men's clothing" || item.category === "women's clothing"
      );
      setProducts(clothes); // full data, not slicing here
    };
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const handleShowLess = () => {
    setVisibleCount(prev => (prev > 8 ? prev - 8 : 8));
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12  bg-gray-50 py-12 rounded-xl shadow-lg">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-center text-gray-800 tracking-tight mb-8 font-poppins">
        Clothing Collection
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>

      {/* Buttons for "See More" and "Show Less" */}
      <div className="flex justify-center gap-8 mt-10">
        {visibleCount < products.length && (
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 shadow-md transition-all transform hover:scale-105"
          >
            See More
          </button>
        )}
        {visibleCount > 8 && (
          <button
            onClick={handleShowLess}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 shadow-md transition-all transform hover:scale-105"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
