'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-indigo-950 shadow-lg border-b border-orange-300 font-sans z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
          <span className="text-2xl font-bold text-white tracking-wide">MediCare</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 relative">
          {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About Us' }, { href: '/gallery', label: 'Gallery' }, { href: '/contact', label: 'Contact Us' }, { href: '/services', label: 'Services' }].map(
            ({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-white text-[17px] font-medium transition-all duration-300 hover:text-[#ff7e5f] group" // Adjust hover color
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff7e5f] transition-all duration-300 group-hover:w-full rounded" />
              </Link>
            )
          )}

          {/* Medical Equipment Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-white text-[17px] font-medium transition-all duration-300 hover:text-[#ff7e5f] group"> {/* Adjust hover color */}
              Medical Equipment ▾
            </span>

            <div className="absolute top-12 right-0 w-[90vw] max-w-[620px] bg-white/90 backdrop-blur-md border border-orange-200 rounded-xl shadow-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out z-50">
              {[{
                label: 'Diagnostic Tools',
                items: [
                  { label: 'Stethoscope', href: '/products/stethoscope' },
                  { label: 'Thermometer', href: '/products/thermometer' },
                  { label: 'BP Monitor', href: '/products/bp-monitor' },
                ],
              },
              {
                label: 'Supportive Equipment',
                items: [
                  { label: 'Wheelchair', href: '/products/wheelchair' },
                  { label: 'Crutches', href: '/products/crutches' },
                  { label: 'Hospital Bed', href: '/products/hospital-bed' },
                ],
              }].map(({ label, items }, idx) => (
                <div key={idx}>
                  <div className="mb-3 text-orange-600 font-semibold text-[15px] border-b border-orange-200 pb-1">{label}</div>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="block text-gray-700 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#ff7e5f] hover:text-white hover:shadow-md" // Hover color updated
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile & Cart Icons */}
        <div className="flex items-center space-x-5">
          <Link href="/profile" className="text-white hover:text-[#ff7e5f] transition duration-300 cursor-pointer"> {/* Hover color updated */}
            <FaUser className="text-[22px]" />
          </Link>

          {/* Cart Icon with Badge */}
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-[22px] text-white hover:text-[#ff7e5f] transition duration-300 cursor-pointer" /> {/* Hover color updated */}
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[11px] rounded-full w-5 h-5 flex items-center justify-center font-semibold">
              3
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
