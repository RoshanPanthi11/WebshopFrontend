'use client'
import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  '/images/product1.jpg',
  '/images/product2.jpg',
  '/images/product3.jpg',
  '/images/product4.jpg',
  '/images/product5.jpg',
  '/images/product6.jpg',
  '/images/product7.jpg',
  '/images/product8.jpg',
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
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-teal-300 text-gray-800">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-gallery.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 mix-blend-multiply"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Explore Our Collection
        </h1>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden rounded-lg group hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg cursor-pointer"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Viewing */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl mx-auto">
            <Image
              src={modalImage}
              alt="Modal Image"
              width={900}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
