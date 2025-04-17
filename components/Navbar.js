'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-blue-800 transition-colors duration-300 font-inter">
          MyLogo
        </Link>

        {/* Nav Items */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-800 transition-all duration-300 font-inter">Home</Link>
          <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-800 transition-all duration-300 font-inter">About Us</Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <span className="text-lg font-medium text-gray-700 cursor-pointer hover:text-blue-800 transition-all duration-300 font-inter">
              Products ▾
            </span>

            {/* First-level dropdown */}
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
              {/* Parent 1 */}
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium">
                  Parent 1
                </div>

                {/* Child on hover */}
                <div className="absolute left-full top-0 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer font-medium">Child 1.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer font-medium">Child 1.2</div>
                </div>
              </div>

              {/* Parent 2 */}
              <div className="relative group/item">
                <div className="px-5 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer font-medium">
                  Parent 2
                </div>

                {/* Child on hover */}
                <div className="absolute left-full top-0 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-opacity duration-300 z-50">
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer font-medium">Child 2.1</div>
                  <div className="px-5 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer font-medium">Child 2.2</div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/gallery" className="text-lg font-medium text-gray-700 hover:text-blue-800 transition-all duration-300 font-inter">Image Gallery</Link>
          <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-800 transition-all duration-300 font-inter">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
