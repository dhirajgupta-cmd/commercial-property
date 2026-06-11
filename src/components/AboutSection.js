import React from 'react';
import { FaHandshake, FaMapMarkedAlt, FaUserTie } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700"
            alt="About PropIndia"
            className="rounded-2xl shadow-xl w-full object-cover h-80"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-red-700">PropIndia?</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            PropIndia is India's fastest growing commercial property platform. 
            We connect businesses with the best commercial spaces across all 28 states 
            and 8 union territories of India.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-700">
                <FaMapMarkedAlt size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Pan India Coverage</h4>
                <p className="text-gray-500 text-sm">Properties listed across all states of India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-700">
                <FaHandshake size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Trusted Dealers</h4>
                <p className="text-gray-500 text-sm">500+ verified property dealers and owners</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-700">
                <FaUserTie size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Expert Consultation</h4>
                <p className="text-gray-500 text-sm">Free consultation with property experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;