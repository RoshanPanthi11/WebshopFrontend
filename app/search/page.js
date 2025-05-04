'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/Product.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
        setResults(filtered);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Search Results for: <span className="text-purple-600">"{query}"</span>
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="text-gray-500 animate-pulse">Loading...</span>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-52 sm:h-60 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            No results found for <span className="font-medium text-purple-600">"{query}"</span>.
          </p>
          <p className="text-gray-500 mt-2 text-sm">Try searching with different keywords.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
