'use client';
import React from 'react';
import { FaStar, FaShoppingCart, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-60 bg-zinc-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full capitalize shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-64">
        <div className="flex-grow space-y-2">
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-emerald-600 transition">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

          {/* Price and Rating */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-semibold text-emerald-600">${product.price}</span>
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              {product.rating?.rate || '4.5'}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3 mt-5">
          <button className="flex items-center justify-center gap-2 flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-xl hover:bg-gray-200 transition text-sm font-medium">
            <FaShoppingCart size={14} />
            Add to Cart
          </button>
          <button className="flex items-center justify-center gap-2 flex-1 bg-emerald-500 text-white py-2 px-4 rounded-xl hover:bg-emerald-600 transition text-sm font-medium">
            <FaBolt size={14} />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
