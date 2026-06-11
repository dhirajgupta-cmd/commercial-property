import React from 'react';
//import { useTranslation } from 'react-i18next';
import { FaBuilding, FaStore, FaWarehouse, FaIndustry, FaMapMarkerAlt, FaShoppingBag, FaHotel, FaChartLine } from 'react-icons/fa';

const categories = [
  { icon: <FaBuilding size={32} />, label: 'Office Space' },
  { icon: <FaStore size={32} />, label: 'Retail Shop' },
  { icon: <FaWarehouse size={32} />, label: 'Warehouse' },
  { icon: <FaIndustry size={32} />, label: 'Industrial' },
  { icon: <FaMapMarkerAlt size={32} />, label: 'Commercial Plot' },
  { icon: <FaShoppingBag size={32} />, label: 'Mall Space' },
  { icon: <FaHotel size={32} />, label: 'Showroom' },
  { icon: <FaChartLine size={32} />, label: 'Pre-Lease' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Explore By Category
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Find the perfect commercial space for your business
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:border-red-600 border-2 border-transparent transition-all duration-300 group"
            >
              <div className="text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <p className="text-gray-700 font-semibold text-center text-sm">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;