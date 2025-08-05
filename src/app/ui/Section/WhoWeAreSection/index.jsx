import React from 'react';
import Image from 'next/image';

const WhoWeAreSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                <span className="text-orange-500 font-semibold">ND Healthcare</span> is a professional homecare service 
                company dedicated to improving health outcomes through personalized and accessible 
                care. We are committed to bridging the gap between clinical care and the comfort of your 
                home.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/about/senior_nurse.png" 
                alt="ND Healthcare Team"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-300 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-orange-400 rounded-full opacity-70"></div>
            
            {/* Background cards for depth */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-24 bg-white rounded-2xl shadow-lg transform -rotate-12 opacity-30"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-28 h-20 bg-white rounded-2xl shadow-lg transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;