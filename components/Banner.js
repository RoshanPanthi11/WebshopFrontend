'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/banner2.jpg',
  '/banner3.jpg',
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱️ Slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[90vh] relative">
            <Image
              src={src}
              alt={`Banner ${index}`}
              fill
              className="object-cover"
              priority
            />
            
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-gray-700' : 'bg-black/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
