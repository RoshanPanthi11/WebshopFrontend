'use client';

export default function PartnersSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 font-sans tracking-wide">
          Our Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Partner 1 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 1"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Partner 2 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 2"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Partner 3 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 3"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Partner 4 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 4"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Partner 5 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 5"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Partner 6 */}
          <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Partner 6"
              className="w-32 h-32 object-contain transition-all duration-300 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
