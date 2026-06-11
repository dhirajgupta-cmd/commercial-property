import React from 'react';
import { FaMapMarkerAlt, FaRulerCombined, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const properties = [
  { id: 1, title: 'Premium Office Space', location: 'Bandra Kurla Complex, Mumbai', state: 'Maharashtra', type: 'Office', transaction: 'Rent', price: '2,50,000/month', area: '5,000 sq ft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { id: 2, title: 'Retail Shop - High Footfall', location: 'Connaught Place, New Delhi', state: 'Delhi', type: 'Shop', transaction: 'Buy', price: '1,20,00,000', area: '800 sq ft', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600' },
  { id: 3, title: 'Modern Warehouse', location: 'Whitefield, Bangalore', state: 'Karnataka', type: 'Warehouse', transaction: 'Rent', price: '85,000/month', area: '12,000 sq ft', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
  { id: 4, title: 'Showroom Space', location: 'SG Highway, Ahmedabad', state: 'Gujarat', type: 'Showroom', transaction: 'Rent', price: '1,50,000/month', area: '3,500 sq ft', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600' },
  { id: 5, title: 'IT Office Floor', location: 'Hitech City, Hyderabad', state: 'Telangana', type: 'Office', transaction: 'Pre-Lease', price: '3,00,000/month', area: '8,000 sq ft', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600' },
  { id: 6, title: 'Commercial Plot', location: 'New Town, Kolkata', state: 'West Bengal', type: 'Plot', transaction: 'Buy', price: '2,50,00,000', area: '10,000 sq ft', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600' },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 lg:px-20">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Properties</h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-center text-gray-500 mb-10">Handpicked commercial properties across India</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <div key={prop.id} data-aos="fade-up" data-aos-delay={prop.id * 100} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative">
                <img src={prop.image} alt={prop.title} className="w-full h-52 object-cover" />
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

        <div data-aos="fade-up" className="text-center mt-10">
          <Link to="/properties" className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;