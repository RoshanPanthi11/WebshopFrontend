'use client';

import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    '/patner1.jpeg',
    '/patner2.png',
    '/patner3.png',
    '/patner4.png',
    '/patner5.jpeg',
    '/patner1.jpeg', // repeated
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 font-sans tracking-wide">
          Our Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {partners.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={130}
                height={130}
                className="object-contain transition-all duration-300 hover:opacity-90 w-32 h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
