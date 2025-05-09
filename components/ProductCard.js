'use client';
import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaBolt, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAppContext } from '../app/context/AppContext';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const { addToCart } = useAppContext();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const cartItem = {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const handleAddToCart = () => {
    addToCart(cartItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(cartItem);
    router.push('/buy');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-200"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative h-60 bg-gray-100 flex items-center justify-center p-4 cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full capitalize shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-5 flex flex-col justify-between h-64">
        <div className="flex-grow space-y-2">
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-amber-600 transition">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-semibold text-amber-600">${product.price}</span>
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              {product.rating?.rate || '4.5'}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 mt-5">
          <button
            className={`flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
              added
                ? 'bg-cyan-800 text-white scale-105'
                : 'bg-amber-500 text-white hover:bg-amber-600'
            }`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to Cart`}
          >
            {added ? <FaCheck size={14} /> : <FaShoppingCart size={14} />}
            {added ? 'Added!' : 'Add to Cart'}
          </button>

          <button
            onClick={handleBuyNow}
            className="flex items-center justify-center gap-2 flex-1 bg-amber-500 text-white py-2 px-4 rounded-xl hover:bg-amber-600 transition text-sm font-medium"
            aria-label={`Buy ${product.title} Now`}
          >
            <FaBolt size={14} />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
