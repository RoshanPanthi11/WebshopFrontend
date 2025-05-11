'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/ProductCard';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('');

  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/Product.json');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (q) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(q.toLowerCase())
      );
    }

    if (sortOption === 'low-to-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [q, products, sortOption]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500 text-lg animate-pulse">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 bg-white py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-2">
          Results for: <span className="italic text-gray-700">"{q}"</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
        </p>

        {/* Sort Dropdown */}
        <div className="flex justify-end mb-6">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-48 bg-white border border-orange-400 text-gray-800 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No products matched your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
