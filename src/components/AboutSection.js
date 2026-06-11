import React from 'react';
import { FaHandshake, FaMapMarkedAlt, FaUserTie, FaBuilding, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';

const stats = [
  { number: '500+', label: 'Properties Listed' },
  { number: '28', label: 'States Covered' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
];

const AboutSection = () => {
  return (
    <section data-aos="fade-up" className="py-20 bg-white">
      <div className="w-full px-6 lg:px-20">

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="text-center bg-red-700 text-white rounded-2xl py-8 px-4 shadow-lg">
              <p className="text-4xl font-extrabold mb-1">{stat.number}</p>
              <p className="text-sm uppercase tracking-widest opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-red-700">PropIndia?</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              PropIndia is India's fastest growing commercial property platform.
              We connect businesses with the best commercial spaces across all 28 states
              and 8 union territories of India.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700 shrink-0">
                  <FaMapMarkedAlt size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pan India Coverage</h4>
                  <p className="text-gray-500 text-sm">Properties listed across all states of India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700 shrink-0">
                  <FaHandshake size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Trusted Dealers</h4>
                  <p className="text-gray-500 text-sm">500+ verified property dealers and owners</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700 shrink-0">
                  <FaUserTie size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Expert Consultation</h4>
                  <p className="text-gray-500 text-sm">Free consultation with property experts</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700 shrink-0">
                  <FaRupeeSign size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Best Price Guarantee</h4>
                  <p className="text-gray-500 text-sm">We ensure you get the best deal in the market</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            {[
              { icon: <FaBuilding size={28} />, title: 'Commercial', desc: 'Office, Shop, Showroom, Mall Space' },
              { icon: <FaMapMarkedAlt size={28} />, title: 'Industrial', desc: 'Warehouse, Factory, Shed, Logistic Park' },
              { icon: <FaRupeeSign size={28} />, title: 'Investment', desc: 'Pre-leased properties with high ROI' },
              { icon: <FaCheckCircle size={28} />, title: 'Verified', desc: 'All properties are verified and legal' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                <div className="text-red-700 mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;