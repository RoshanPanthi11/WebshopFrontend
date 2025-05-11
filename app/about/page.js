'use client';

import Image from 'next/image';
import { FaTruck, FaShieldAlt, FaStethoscope, FaHeart } from 'react-icons/fa';
import AboutUsSection from '../../components/Aboutus'; // Import your shared component

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-cyan-100 py-20 bg-cover bg-center" style={{ backgroundImage: 'url(./hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Gradient overlay */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide">
            Who We Are
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            MediShop is Nepal’s leading online medical store, providing high-quality healthcare products, equipment, and wellness essentials to professionals and families nationwide.
          </p>
        </div>
      </section>

      {/* About Us Section - Custom Component */}
      <AboutUsSection />

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At MediShop, our mission is to simplify access to essential medical products for everyone—from clinics and hospitals to individual households. We believe in affordable healthcare, trustworthy service, and making technology work for health.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-12">Why Choose MediShop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Feature icon={<FaShieldAlt />} title="Trusted & Certified" desc="Only certified medical supplies from verified manufacturers." />
            <Feature icon={<FaTruck />} title="Fast Delivery" desc="Safe, timely delivery across Nepal." />
            <Feature icon={<FaStethoscope />} title="Expert Support" desc="Guided product support from healthcare professionals." />
            <Feature icon={<FaHeart />} title="Customer First" desc="Every decision is made with your well-being in mind." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Dr. Anjali Karki"
              title="Pediatrician, Kathmandu"
              quote="MediShop makes ordering hospital supplies simple and efficient. Their service is top-notch."
              image="/doctor1.jpg"
            />
            <TestimonialCard
              name="Bikash Thapa"
              title="Home Caregiver"
              quote="I needed oxygen cylinders and gloves urgently. MediShop delivered the same day. Lifesavers!"
              image="/user1.jpg"
            />
            <TestimonialCard
              name="Suman Joshi"
              title="Pharmacy Owner"
              quote="Their range of surgical tools and reliability has helped me grow my business confidently."
              image="/user2.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Have Questions or Need Assistance?</h2>
          <p className="mb-6 text-lg">Contact our team for product recommendations, orders, or partnerships.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

// Feature Component for "Why Choose Us"
 function Feature({ icon, title, desc }) {
    return (
      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <div className="flex justify-center items-center text-cyan-600 text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    );
  }

// Testimonial Card Component
function TestimonialCard({ name, title, quote, image }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <Image src={image} alt={name} width={80} height={80} className="rounded-full mx-auto mb-4 object-cover" />
      <p className="italic text-gray-700 mb-4">“{quote}”</p>
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}
