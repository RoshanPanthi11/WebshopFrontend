'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch the products from the local JSON file
      const res = await fetch('/Product.json');
      const data = await res.json();
      setProducts(data); // Set the products from the JSON file
    };
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    // Increase the visible count to show more products
    setVisibleCount(prev => (prev + 8 <= products.length ? prev + 8 : products.length));
  };

  const handleShowLess = () => {
    // Decrease the visible count to show fewer products
    setVisibleCount(prev => (prev > 8 ? prev - 8 : 8));
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 bg-gray-50 py-12 rounded-xl shadow-lg">
      {/* Heading Section */}
      <h2 className="text-4xl font-semibold text-center text-gray-800 tracking-tight mb-8 font-poppins">
        Our Products
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
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 shadow-md transition-all transform hover:scale-105"
          >
            See More
          </button>
        )}
        {visibleCount > 8 && (
          <button
            onClick={handleShowLess}
            className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 shadow-md transition-all transform hover:scale-105"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
