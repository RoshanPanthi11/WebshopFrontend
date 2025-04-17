'use client';

import React from 'react';
import Image from 'next/image';

const CategorySection = () => {
  return (
    <div className="categories bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800 tracking-wide font-poppins">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {/* Men's Clothing Category */}
        <div className="category-card p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <Image 
            src="https://source.unsplash.com/600x400/?men" 
            alt="Men's Clothing" 
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Men's Clothing</h3>
        </div>

        {/* Women's Clothing Category */}
        <div className="category-card p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <Image 
            src="https://source.unsplash.com/600x400/?women" 
            alt="Women's Clothing" 
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Women's Clothing</h3>
        </div>

        {/* Fashion Category */}
        <div className="category-card p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <Image 
            src="https://source.unsplash.com/600x400/?fashion" 
            alt="Fashion" 
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Fashion</h3>
        </div>

        {/* Clothing Category */}
        <div className="category-card p-6 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <Image 
            src="https://source.unsplash.com/600x400/?clothes" 
            alt="Clothing" 
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Clothing</h3>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
