'use client';

import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-wider">
          About MediShop
        </h2>

        <div className="lg:flex lg:items-center lg:space-x-12 space-y-8 lg:space-y-0 transition-all duration-500">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 transform transition duration-700 hover:scale-105">
            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-lg transition-all">
              <Image 
                src="/about.jpeg" 
                alt="Medical Shop"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform transform hover:scale-110"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed tracking-wide">
              Welcome to MediShop, your trusted partner in healthcare. We offer a wide range of medical equipment and supplies designed to improve your health and well-being. Whether you're a healthcare professional, a caregiver, or someone looking for reliable medical products, we have you covered with the best in quality, safety, and affordability.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed tracking-wide">
              At MediShop, we are committed to providing exceptional service, fast delivery, and a seamless shopping experience. Our expert team is always available to help you choose the right products to meet your needs. Our mission is to make healthcare products easily accessible to all.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
              With a broad range of medical supplies, we strive to bring the latest innovations in the healthcare industry straight to your door. Your health and safety are our top priority.
            </p>
          </div>
        </div>

        {/* Additional Call to Action */}
        <div className="mt-12">
          <a href="/contact" className="inline-block px-8 py-3 text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-750 transition-all duration-300">
            Get in Touch with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
