'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  { title: 'Surgical Instruments', image: '/1.jpeg' },
  { title: 'Medicines', image: '/2.jpeg' },
  { title: 'Diagnostics', image: '/3.jpeg' },
  { title: 'Mobility Aids', image: '/4.jpeg' },
];

const CategorySection = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Load your JSON data (public/Product.json)
    fetch('/Product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const matches = products
      .filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 5);
    setSuggestions(matches);
  };

  const handleSuggestionClick = (title) => {
    router.push(`/search?q=${encodeURIComponent(title)}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <section className="bg-gradient-to-br from-[#e8f5f9] to-[#f3f0ff] py-20 px-4">
      {/* Heading */}
      <h2 className="text-center font-extrabold tracking-tight font-sans text-gray-800 text-3xl sm:text-4xl md:text-5xl mb-14">
        Find What You Need
      </h2>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-16 relative">
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-gray-200 rounded-full shadow-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-purple-300 transition"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for medical supplies, equipment, or medicine..."
            className="w-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
          />
          <button
            type="submit"
            className="bg-purple-500 p-3 pr-4 rounded-r-full hover:bg-purple-600 transition flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={20} className="text-white" />
          </button>
        </form>

        {/* Suggestion Box */}
        {suggestions.length > 0 && (
  <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
    {suggestions.map((item, index) => (
      <li
        key={item.id}
        onClick={() => handleSuggestionClick(item.title)}
        className={`flex items-center gap-2 px-5 py-3 cursor-pointer text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 ${
          index !== suggestions.length - 1 ? 'border-b border-gray-100' : ''
        }`}
      >
        <Search size={16} className="text-gray-400 group-hover:text-purple-500" />
        <span className="font-medium">{item.title}</span>
      </li>
    ))}
  </ul>
)}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
       {categories.map((item, idx) => (
  <div
    key={idx}
    onClick={() => router.push(`/category/${encodeURIComponent(item.title)}`)}
    className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center group"
  >
    <div className="w-full h-44 sm:h-48 relative mb-5 rounded-xl overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300 relative inline-block">
      {item.title}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </h3>
  </div>
))}

      </div>
    </section>
  );
};

export default CategorySection;
