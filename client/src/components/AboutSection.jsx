import React from 'react';
import backgroundAbout from '../assets/images/about-back-1.png'; // Adjust the path as necessary

const AboutSection = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center px-25 bg-white" id="about">
      <div
        className="w-full h-[90vh] flex items-center px-20 bg-cover bg-center rounded-2xl" // Adjusted height and added rounded-2xl
        style={{ backgroundImage: `url(${backgroundAbout})` }}
      >
        <div className="max-w-xl">
          <h2 className="text-sm text-green-6 00 mb-2 font-bold">About</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            At <span className="text-green-600">LivWell</span>, we believe that small, consistent habits lead to lasting <br /> well-being.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform is designed to help you stay hydrated, maintain a regular exercise routine, and improve your sleep quality. With personalized insights and guidance, we make it easier for you to take control of your health and build
            a balanced lifestyle. Join us on your journey to better living!
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
