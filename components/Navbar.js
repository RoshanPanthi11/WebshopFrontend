'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-[#7c3aed] transition-colors duration-300 font-inter">
          MyLogo
        </Link>

        {/* Nav Items */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-lg font-medium text-gray-700 hover:text-[#7c3aed] transition-all duration-300 font-inter relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7c3aed] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium text-gray-700 hover:text-[#7c3aed] transition-all duration-300 font-inter relative group"
          >
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7c3aed] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <span className="text-lg font-medium text-gray-700 cursor-pointer hover:text-[#7c3aed] transition-all duration-300 font-inter">
              Products ▾
            </span>

            {/* First-level dropdown */}
            <div className="absolute left-0 mt-2 w-56 bg-gradient-to-br from-[#f3f0ff] to-[#e8f5f9] border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
              
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">
                  Parent 1
                </div>

                
                <div className="absolute left-full top-0 w-48 bg-gradient-to-br from-[#f3f0ff] to-[#e8f5f9] border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">Child 1.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">Child 1.2</div>
                </div>
              </div>

      
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">
                  Parent 2
                </div>

                
                <div className="absolute left-full top-0 w-48 bg-gradient-to-br from-[#f3f0ff] to-[#e8f5f9] border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">Child 2.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-[#7c3aed] hover:text-white cursor-pointer font-medium transition-all duration-300">Child 2.2</div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/gallery"
            className="text-lg font-medium text-gray-700 hover:text-[#7c3aed] transition-all duration-300 font-inter relative group"
          >
            Image Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7c3aed] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="text-lg font-medium text-gray-700 hover:text-[#7c3aed] transition-all duration-300 font-inter relative group"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7c3aed] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
