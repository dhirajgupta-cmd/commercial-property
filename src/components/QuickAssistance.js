import React from 'react';

const specializations = [
  { title: 'Pre-leased Properties', desc: 'Shops, Offices, Restaurant, Hospital, Warehouse etc with Good ROI%. Ideal for investors seeking secure, high-return assets with long-term value.' },
  { title: 'Builder Project / Pre Launch Offers', desc: 'We deal with A Grade builders with Select Projects offering excellent connectivity, modern amenities, located in sought-after areas with high investment potential.' },
  { title: 'Residential Apartment', desc: 'We deal in premium 2, 3, 4, and 5 BHK residential apartments for sale across India\'s prime locations, with top amenities.' },
  { title: 'Office Space', desc: 'Premium office spaces for sale and rent in prime locations. Suitable for Self-Use and Investment.' },
  { title: 'Shop & Showroom', desc: 'Shop & showroom spaces for sale/rent in prime, high-traffic, road-facing locations. Suitable for Bank, Retail, Pharmacy, Restaurant, Electronics, Apparel, Car or Bike Showroom.' },
  { title: 'Restaurant / Rooftop Restaurant', desc: 'Premium restaurant spaces in high footfall areas. Ground floor, mall space, and rooftop options available across major cities.' },
  { title: 'Hospital & Healthcare', desc: 'Ready running hospitals, green projects, and brown field projects. Ideal for healthcare investors and operators looking for established setups.' },
  { title: 'Industrial & Warehouse', desc: 'Warehouse, Land, Factory, Shed, and Logistic Park options available across industrial belts of India.' },
];

const QuickAssistance = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-6 lg:px-20">
        <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2 uppercase tracking-widest">
          GET QUICK ASSISTANCE FOR MANAGING YOUR PROPERTIES
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-10"></div>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <p className="font-bold text-gray-800 mb-1">Quick Property Solutions with PropIndia</p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            PropIndia offers expert assistance in buying, selling, and renting properties across India. 
            Our dedicated team ensures seamless transactions for all your property deals.
          </p>

          <p className="font-bold text-gray-800 mb-6 text-lg">We specialize in</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((item, index) => (
              <div key={index} className="border-l-4 border-red-700 pl-4">
                <h4 className="font-bold text-gray-800 mb-1"># {item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssistance;