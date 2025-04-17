'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white px-6 md:px-12 lg:px-20 py-14 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        {/* Useful Links */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md transition hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-700 pb-1">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Products', href: '/products' },
              { name: 'Image Gallery', href: '/gallery' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'Career', href: '/career' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative inline-block transition duration-200 hover:text-white"
                >
                  <span className="hover-underline">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Products */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md transition hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-700 pb-1">Featured Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>V8800 Ventilator System</li>
            <li>SFUK-E6 Six Channel ECG Machine</li>
            <li>SFUK-E12 12 Channel ECG Machine</li>
            <li>B-PAP</li>
            <li>Portable Color Doppler</li>
            <li>High Flow Nasal Cannula</li>
          </ul>
        </div>

        {/* Our Partners */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md transition hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-700 pb-1">Our Partners</h3>
          <ul className="space-y-2 text-gray-300">
            <li>MHI</li>
            <li>Global Health Care</li>
            <li>Smithfield</li>
            <li>Oricare</li>
            <li>Heyer</li>
            <li>Nikkiso</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-md transition hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-700 pb-1">Get in Touch</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              Email: <a href="mailto:sales@ksinternationalnp.com" className="hover:text-white underline">sales@ksinternationalnp.com</a>
            </li>
            <li>Phone: 01-4101153 / 01-4101163</li>
            <li>
              Address: <br />
              Tripura Marg, Tripureshwor,<br />
              Surgical Line, Kathmandu
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4 text-lg">
            <a href="#" className="hover:text-blue-400 transition duration-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition duration-200"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition duration-200"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition duration-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-xs text-blue-300 tracking-wide">
        &copy; 2018 - 2025 KS International. All rights reserved.
      </div>

      {/* Extra underline hover effect */}
      <style jsx>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background-color: #60a5fa;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
}
