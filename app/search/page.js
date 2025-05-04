'use client'; // Make sure this is at the top

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Correct import for query params in Next.js 13
import ProductCard from '../../components/ProductCard'; // Import your ProductCard component

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Access query params via useSearchParams
  const searchParams = useSearchParams();
  const q = searchParams.get('q'); // Access the 'q' query parameter

  // Fetching products from a JSON file (adjust the path if necessary)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/Product.json'); // Replace with your JSON path
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

  // Filter products based on the search query
  useEffect(() => {
    if (q) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(q.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no query, show all products
    }
  }, [q, products]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 bg-gray-50 py-12 rounded-xl shadow-lg">
      <div className="w-full max-w-full mx-auto"> {/* Ensure full width is used */}
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">
          Search Results for: "{q}"
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
          {filteredProducts.length} result(s) found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
