'use client';
import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  '/images/medical-product1.jpeg',
  '/images/medical-product2.jpeg',
  '/images/medical-product3.jpeg',
  '/images/medical-product4.jpeg',
  '/images/medical-product5.jpg',
  '/images/medical-product1.jpeg',
  '/images/medical-product1.jpeg',
  '/images/medical-product1.jpeg',
];

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-blue-200 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-cyan-700 opacity-50 mix-blend-multiply" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Explore Our Collection
        </h1>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-12 bg-gradient-to-br from-white via-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Modal Image"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-cyan-600 hover:bg-blue-600 rounded-full p-2 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
