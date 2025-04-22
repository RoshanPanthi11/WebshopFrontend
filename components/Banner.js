'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['/banner2.jpg', '/banner3.jpg'];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] relative flex-shrink-0">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border transition-all ${
              current === index ? 'bg-white border-white scale-110' : 'bg-black/40 border-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
