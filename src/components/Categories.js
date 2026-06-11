import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { FaBuilding, FaStore, FaWarehouse, FaIndustry, FaMapMarkerAlt, FaChartLine, FaHome, FaRocket, FaUtensils, FaHospital, FaHotel, FaTree, FaStar, FaUsers, FaDollarSign } from 'react-icons/fa';
import { FaBuilding, FaStore, FaWarehouse, FaIndustry, FaMapMarkerAlt, FaChartLine, FaHome, FaRocket, FaUtensils, FaHospital, FaHotel, FaTree, FaStar, FaUsers, FaDollarSign } from 'react-icons/fa';
const categories = [
  { icon: <FaBuilding size={36} />, label: 'Office Space', type: 'Office' },
  { icon: <FaChartLine size={36} />, label: 'Preleased Properties', type: 'Pre-Lease' },
  { icon: <FaStore size={36} />, label: 'Shop / Showroom', type: 'Shop' },
  { icon: <FaBuilding size={36} />, label: 'Office in IT Park', type: 'Office' },
  { icon: <FaUsers size={36} />, label: 'Co-working Space', type: 'Office' },
  { icon: <FaHome size={36} />, label: 'Residential Apartment', type: 'Residential' },
  { icon: <FaHome size={36} />, label: 'Residential Bunglow', type: 'Residential' },
  { icon: <FaRocket size={36} />, label: 'Pre-Launch Projects', type: 'Pre-Lease' },
  { icon: <FaUtensils size={36} />, label: 'Restaurant', type: 'Shop' },
  { icon: <FaHospital size={36} />, label: 'Hospital', type: 'Industrial' },
  { icon: <FaHotel size={36} />, label: 'Hotel / Resort', type: 'Shop' },
  { icon: <FaMapMarkerAlt size={36} />, label: 'Residential / Commercial Land/Plot', type: 'Plot' },
  { icon: <FaTree size={36} />, label: 'Agriculture Farm Land', type: 'Plot' },
  { icon: <FaIndustry size={36} />, label: 'Industrial Land', type: 'Industrial' },
  { icon: <FaWarehouse size={36} />, label: 'Warehouse', type: 'Warehouse' },
  { icon: <FaDollarSign size={36} />, label: 'TDR', type: 'Office' },
  { icon: <FaStar size={36} />, label: 'Group Booking', type: 'Office' },
];

const states = ["All States","Andhra Pradesh","Bihar","Delhi","Gujarat","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Punjab","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal"];
const transactions = ["All","Buy","Rent","Pre-Lease"];

const Categories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedTransaction, setSelectedTransaction] = useState('All');

  const handleSearch = () => {
    navigate(`/properties?type=${selectedCategory.type}&state=${selectedState}&transaction=${selectedTransaction}`);
    setSelectedCategory(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-10 uppercase tracking-widest border-b-2 border-red-700 pb-4 inline-block w-full">
          BUY OR SALE
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              onClick={() => setSelectedCategory(cat)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-3 group-hover:bg-red-50 group-hover:border-red-400 group-hover:shadow-lg transition-all duration-300">
                <span className="text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                  {cat.icon}
                </span>
              </div>
              <p className="text-xs text-center text-gray-800 font-semibold leading-tight">{cat.label}</p>
            </div>
          ))}
        </div>

        {/* Search Popup */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  {selectedCategory.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedCategory.label}</h3>
                  <p className="text-gray-500 text-sm">Filter your search</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Select State</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    {states.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Transaction Type</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700"
                    value={selectedTransaction}
                    onChange={(e) => setSelectedTransaction(e.target.value)}
                  >
                    {transactions.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleSearch} className="flex-1 bg-red-700 text-white py-3 rounded-xl font-semibold hover:bg-red-800 transition">
                  Search Properties
                </button>
                <button onClick={() => setSelectedCategory(null)} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;