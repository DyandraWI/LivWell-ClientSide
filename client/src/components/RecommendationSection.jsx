import React from 'react';
import aiImage from '../assets/images/aiIllustration.png'; // Pastikan path gambar benar

const RecommendationSection = () => {
  return (
    <div className="flex items-center justify-between p-12 bg-white max-w-6xl mx-auto">
      <div className="max-w-xl">
        <div className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">Machine Learning Powered</div>
        <h2 className="text-4xl font-bold text-gray-900">Smart Recommendations Based on Your Data</h2>
        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600">Try It Now</button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={aiImage} alt="AI Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default RecommendationSection;
