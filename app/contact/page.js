'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">Get in Touch</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
        We'd love to hear from you. Whether you have a question or just want to say hi, our team is ready to answer all your inquiries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        {/* Left Info Panel */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-sm text-gray-600">Reach out to us via any method below or fill the form.</p>

            <div className="space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" /> sales@ksinternationalnp.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-orange-500" /> 01-4101153 / 01-4101163
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" /> Tripura Marg, Tripureshwor, Surgical Line, Kathmandu
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-md font-medium text-gray-800 mb-2">Follow Us</h4>
            <div className="flex gap-4 text-orange-500 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-orange-600"><FaFacebook /></a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-600"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-orange-600"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-auto transition"
          >
            ✉ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
