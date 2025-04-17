'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use react-icons if you prefer

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm font-inter">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900 hover:text-blue-700 transition duration-300">
          MyLogo
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Main nav items */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 py-4 md:p-0 border-b md:border-0 shadow-md md:shadow-none transition-all duration-300 z-40 ${menuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-700 transition duration-300">Home</Link>
          <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-700 transition duration-300">About Us</Link>

          {/* Dropdown */}
          <div className="relative group">
            <span className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">
              Products ▾
            </span>

            {/* First-level dropdown */}
            <div className="absolute left-0 mt-2 w-60 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {/* Parent 1 */}
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium">
                  Parent 1
                </div>
                {/* Child */}
                <div className="absolute left-full top-0 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">Child 1.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">Child 1.2</div>
                </div>
              </div>

              {/* Parent 2 */}
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium">
                  Parent 2
                </div>
                {/* Child */}
                <div className="absolute left-full top-0 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">Child 2.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">Child 2.2</div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/gallery" className="text-lg font-medium text-gray-700 hover:text-blue-700 transition duration-300">Image Gallery</Link>
          <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-700 transition duration-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
