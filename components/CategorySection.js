'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const CategorySection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-wide font-poppins">
        Find What You Need
      </h2>

      <div className="max-w-2xl mx-auto mb-14">
  <form className="flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden bg-white focus-within:ring-2 focus-within:ring-blue-500 transition">
    <input
      type="text"
      placeholder="Search for medical supplies, equipment, or medicine..."
      className="w-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-blue-600 p-3 pr-4 rounded-r-full hover:bg-blue-700 transition flex items-center justify-center"
      aria-label="Search"
    >
      <Search size={20} className="text-white" />
    </button>
  </form>
</div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          { title: "Surgical Instruments", image: "surgical" },
          { title: "Medicines", image: "medicine" },
          { title: "Diagnostics", image: "diagnostics" },
          { title: "Mobility Aids", image: "mobility" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            <Image
              src={`/about.jpeg`}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
