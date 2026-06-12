import React from 'react';

const specializations = [
  { title: 'Pre-leased Properties', desc: 'Shops, Offices, Restaurant, Hospital, Warehouse etc with Good ROI%. Ideal for investors seeking secure, high-return assets with long-term value.' },
  { title: 'Builder Project / Pre Launch Offers', desc: 'We deal with A Grade builders with Select Projects offering excellent connectivity, modern amenities, located in sought-after areas with high investment potential.' },
  { title: 'Residential Apartment', desc: 'We deal in premium 2, 3, 4, and 5 BHK residential apartments for sale across India\'s prime locations, with top amenities.' },
  { title: 'Office Space', desc: 'Premium office spaces for sale and rent in prime locations. Suitable for Self-Use and Investment.' },
  { title: 'Shop & Showroom', desc: 'Shop & showroom spaces for sale/rent in prime, high-traffic, road-facing locations. Suitable for Bank, Retail, Pharmacy, Restaurant, Electronics, Apparel, Car or Bike Showroom.' },
  { title: 'Restaurant / Rooftop Restaurant', desc: 'Premium restaurant spaces in high footfall areas. Ground floor, mall space, and rooftop options available across major cities.' },
  { title: 'Hospital & Healthcare', desc: 'Ready running hospitals, green projects, and brown field projects. Ideal for healthcare investors and operators.' },
  { title: 'Industrial & Warehouse', desc: 'Warehouse, Land, Factory, Shed, and Logistic Park options available across industrial belts of India.' },
];

const QuickAssistance = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="w-full px-6 lg:px-20">
        <h2 className="text-2xl font-extrabold text-center text-white mb-2 uppercase tracking-widest">
          GET QUICK ASSISTANCE FOR MANAGING YOUR PROPERTIES
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>

        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
          <p className="font-bold text-yellow-400 mb-1 text-lg">Quick Property Solutions with Infinity 99 Realty</p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Infinity 99 Realty offers expert assistance in buying, selling, and renting properties across India.
            Our dedicated team ensures seamless transactions for all your property deals.
          </p>

          <p className="font-bold text-white mb-6 text-lg border-l-4 border-yellow-400 pl-4">We specialize in</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((item, index) => (
              <div key={index} className="border-l-4 border-yellow-400 pl-4 hover:bg-gray-700 p-3 rounded-r-lg transition">
                <h4 className="font-bold text-yellow-300 mb-1"># {item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssistance;