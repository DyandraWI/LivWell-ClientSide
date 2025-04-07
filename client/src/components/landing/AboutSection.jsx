import React from 'react';
import backgroundAbout from '../../assets/images/about-back-1.png';

const AboutSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8" id="about">
      {/* Desktop: Background Image Section */}
      <div
        className="hidden md:flex w-full h-[90vh] items-center px-20 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${backgroundAbout})` }}
      >
        <div className="max-w-xl text-left">
          <h2 className="text-sm text-green-600 mb-2 font-bold">About</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            At <span className="text-green-600">LivWell</span>, we believe that small, consistent habits lead to lasting <br /> well-being.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform is designed to help you stay hydrated, maintain a regular exercise routine, and improve your sleep quality. With personalized insights and guidance, we make it easier for you to take control of your health and build a balanced lifestyle. Join us on your journey to better living!
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile: Card Background with Text */}
      <div className="md:hidden bg-white">
        <div
          className="relative w-full rounded-2xl shadow-md overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundAbout})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6">
            <h2 className="text-sm text-green-600 font-bold mb-2">About</h2>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              At <span className="text-green-600">LivWell</span>, we believe that small, consistent habits lead to lasting well-being.
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our platform is designed to help you stay hydrated, maintain a regular exercise routine, and improve your sleep quality. With personalized insights and guidance, we make it easier for you to take control of your health and build a balanced lifestyle. Join us on your journey to better living!
            </p>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;