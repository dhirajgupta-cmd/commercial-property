import React, { useState } from 'react';
import { FaMapMarkerAlt, FaRulerCombined, FaRupeeSign, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const allProperties = [
  { id: 1, title: 'Premium Office Space', location: 'Bandra Kurla Complex, Mumbai', state: 'Maharashtra', type: 'Office', transaction: 'Rent', price: '2,50,000/month', area: '5,000 sq ft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { id: 2, title: 'Retail Shop - High Footfall', location: 'Connaught Place, New Delhi', state: 'Delhi', type: 'Shop', transaction: 'Buy', price: '1,20,00,000', area: '800 sq ft', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600' },
  { id: 3, title: 'Modern Warehouse', location: 'Whitefield, Bangalore', state: 'Karnataka', type: 'Warehouse', transaction: 'Rent', price: '85,000/month', area: '12,000 sq ft', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
  { id: 4, title: 'Showroom Space', location: 'SG Highway, Ahmedabad', state: 'Gujarat', type: 'Showroom', transaction: 'Rent', price: '1,50,000/month', area: '3,500 sq ft', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600' },
  { id: 5, title: 'IT Office Floor', location: 'Hitech City, Hyderabad', state: 'Telangana', type: 'Office', transaction: 'Pre-Lease', price: '3,00,000/month', area: '8,000 sq ft', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600' },
  { id: 6, title: 'Commercial Plot', location: 'New Town, Kolkata', state: 'West Bengal', type: 'Plot', transaction: 'Buy', price: '2,50,00,000', area: '10,000 sq ft', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600' },
  { id: 7, title: 'Industrial Shed', location: 'Chakan, Pune', state: 'Maharashtra', type: 'Industrial', transaction: 'Rent', price: '1,20,000/month', area: '20,000 sq ft', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600' },
  { id: 8, title: 'Mall Space - Ground Floor', location: 'Phoenix Mall, Chennai', state: 'Tamil Nadu', type: 'Mall Space', transaction: 'Rent', price: '4,00,000/month', area: '2,500 sq ft', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600' },
  { id: 9, title: 'Office Space - SEZ', location: 'Sector 62, Noida', state: 'Uttar Pradesh', type: 'Office', transaction: 'Buy', price: '3,50,00,000', area: '6,000 sq ft', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600' },
];

const states = ["All States","Delhi","Gujarat","Karnataka","Maharashtra","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal"];
const types = ["All Types","Office","Shop","Warehouse","Showroom","Industrial","Plot","Mall Space"];
const transactions = ["All","Buy","Rent","Pre-Lease"];

const Properties = () => {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedTransaction, setSelectedTransaction] = useState('All');

  const filtered = allProperties.filter(p => {
    return (
      (selectedState === 'All States' || p.state === selectedState) &&
      (selectedType === 'All Types' || p.type === selectedType) &&
      (selectedTransaction === 'All' || p.transaction === selectedTransaction)
    );
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-700 text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">All Properties</h1>
        <p className="text-red-200">Find commercial properties across India</p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-wrap gap-4 items-center">
          <FaFilter className="text-red-700 text-lg" />

          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map(s => <option key={s}>{s}</option>)}
          </select>

          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map(t => <option key={t}>{t}</option>)}
          </select>

          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={selectedTransaction}
            onChange={(e) => setSelectedTransaction(e.target.value)}
          >
            {transactions.map(t => <option key={t}>{t}</option>)}
          </select>

          <button
            onClick={() => { setSelectedState('All States'); setSelectedType('All Types'); setSelectedTransaction('All'); }}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition text-sm"
          >
            Reset
          </button>
        </div>

        {/* Results Count */}
        <p className="text-gray-500 mt-4 mb-6 text-sm">{filtered.length} properties found</p>

        {/* Property Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🏢</p>
            <p className="text-xl">No properties found for selected filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prop) => (
              <div key={prop.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative">
                  <img src={prop.image} alt={prop.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${prop.transaction === 'Buy' ? 'bg-green-600' : prop.transaction === 'Rent' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                    {prop.transaction}
                  </span>
                  <span className="absolute top-3 right-3 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {prop.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{prop.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                    <FaMapMarkerAlt className="text-red-600" /> {prop.location}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <FaRulerCombined className="text-red-600" /> {prop.area}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-red-700">
                      <FaRupeeSign /> {prop.price}
                    </span>
                  </div>
                  <Link to={`/properties/${prop.id}`} className="block w-full text-center bg-red-700 text-white py-2 rounded-lg font-semibold hover:bg-red-800 transition">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;