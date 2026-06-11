import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRulerCombined, FaRupeeSign, FaPhone, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const allProperties = [
  { id: 1, title: 'Premium Office Space', location: 'Bandra Kurla Complex, Mumbai', state: 'Maharashtra', type: 'Office', transaction: 'Rent', price: '2,50,000/month', area: '5,000 sq ft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', description: 'A premium office space located in the heart of BKC Mumbai. This fully furnished office offers modern amenities including high-speed internet, conference rooms, cafeteria, and 24/7 security. Ideal for MNCs and growing startups.', features: ['Fully Furnished', 'High Speed Internet', 'Conference Room', '24/7 Security', 'Power Backup', 'Parking Available', 'Cafeteria', 'Air Conditioned'], contact: '+91 98765 43210' },
  { id: 2, title: 'Retail Shop - High Footfall', location: 'Connaught Place, New Delhi', state: 'Delhi', type: 'Shop', transaction: 'Buy', price: '1,20,00,000', area: '800 sq ft', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', description: 'Prime retail shop in Connaught Place, one of Delhi\'s most prestigious commercial areas. Ground floor shop with excellent visibility and high footfall. Perfect for retail brands, showrooms, and restaurants.', features: ['Ground Floor', 'High Footfall', 'Corner Location', 'Wide Frontage', 'Storage Room', 'Good Visibility', '2 Washrooms', 'Power Backup'], contact: '+91 98765 43211' },
  { id: 3, title: 'Modern Warehouse', location: 'Whitefield, Bangalore', state: 'Karnataka', type: 'Warehouse', transaction: 'Rent', price: '85,000/month', area: '12,000 sq ft', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800', description: 'Modern warehouse facility in Whitefield, Bangalore\'s prime industrial zone. High ceiling warehouse with loading docks, ideal for e-commerce, manufacturing, and logistics companies.', features: ['High Ceiling (30 ft)', 'Loading Docks', 'Fire Safety', '3-Phase Power', 'CCTV Security', 'Office Space Included', 'Ample Parking', 'Close to Highway'], contact: '+91 98765 43212' },
  { id: 4, title: 'Showroom Space', location: 'SG Highway, Ahmedabad', state: 'Gujarat', type: 'Showroom', transaction: 'Rent', price: '1,50,000/month', area: '3,500 sq ft', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800', description: 'Premium showroom space on SG Highway, Ahmedabad\'s most premium commercial corridor. Ground + Mezzanine floor showroom with glass facade, ideal for automobile, furniture, and luxury brands.', features: ['Glass Facade', 'Ground + Mezzanine', 'Premium Location', 'Ample Parking', 'High Visibility', '3-Phase Power', 'Air Conditioned', 'CCTV Security'], contact: '+91 98765 43213' },
  { id: 5, title: 'IT Office Floor', location: 'Hitech City, Hyderabad', state: 'Telangana', type: 'Office', transaction: 'Pre-Lease', price: '3,00,000/month', area: '8,000 sq ft', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800', description: 'Full floor IT office space available for pre-lease in Hitech City, Hyderabad. Modern Grade A building with LEED certification. Ideal for IT/ITES companies looking for long-term space.', features: ['Grade A Building', 'LEED Certified', 'Raised Floor', 'Full Floor Plate', '24/7 Security', 'Food Court', 'Metro Connectivity', 'Fiber Internet'], contact: '+91 98765 43214' },
  { id: 6, title: 'Commercial Plot', location: 'New Town, Kolkata', state: 'West Bengal', type: 'Plot', transaction: 'Buy', price: '2,50,00,000', area: '10,000 sq ft', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800', description: 'Prime commercial plot in New Town, Kolkata\'s most planned township. Clear title, ready for construction. Ideal for building commercial complex, hotel, or office building.', features: ['Clear Title', 'Corner Plot', 'Wide Road Facing', 'Near Metro', 'All Utilities Available', 'Ready for Construction', 'Commercial Zone', 'High FSI'], contact: '+91 98765 43215' },
  { id: 7, title: 'Industrial Shed', location: 'Chakan, Pune', state: 'Maharashtra', type: 'Industrial', transaction: 'Rent', price: '1,20,000/month', area: '20,000 sq ft', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', description: 'Large industrial shed in Chakan, Pune\'s prime industrial belt. Well connected to Mumbai-Pune Expressway. Ideal for manufacturing, assembly, and industrial operations.', features: ['Heavy Power Supply', 'EOT Crane Provision', 'Loading Docks', 'Wide Gate Entry', 'Office Block', 'Water Supply', 'Close to Expressway', 'Gated Complex'], contact: '+91 98765 43216' },
  { id: 8, title: 'Mall Space - Ground Floor', location: 'Phoenix Mall, Chennai', state: 'Tamil Nadu', type: 'Mall Space', transaction: 'Rent', price: '4,00,000/month', area: '2,500 sq ft', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800', description: 'Premium ground floor retail space in Phoenix Mall, Chennai. High footfall mall with excellent brand visibility. Ideal for fashion, food, and lifestyle brands.', features: ['Ground Floor', 'High Footfall', 'Mall Facility', 'AC Common Area', 'Ample Parking', 'Food Court Nearby', 'Brand Visibility', 'Festival Decorations'], contact: '+91 98765 43217' },
  { id: 9, title: 'Office Space - SEZ', location: 'Sector 62, Noida', state: 'Uttar Pradesh', type: 'Office', transaction: 'Buy', price: '3,50,00,000', area: '6,000 sq ft', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800', description: 'SEZ office space in Sector 62, Noida. Tax benefits available for IT/ITES companies. Modern building with all amenities. Close to Delhi Metro Blue Line.', features: ['SEZ Benefits', 'Tax Exemption', 'Metro Connectivity', 'Modern Building', 'Food Court', '24/7 Security', 'Power Backup', 'Fiber Internet'], contact: '+91 98765 43218' },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = allProperties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <p className="text-5xl mb-4">🏢</p>
        <h2 className="text-2xl font-bold text-gray-700">Property not found</h2>
        <Link to="/properties" className="mt-4 inline-block text-red-700 underline">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/properties" className="flex items-center gap-2 text-red-700 font-semibold hover:underline">
          <FaArrowLeft /> Back to Properties
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left - Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
              <img src={property.image} alt={property.title} className="w-full h-96 object-cover" />
              <span className={`absolute top-4 left-4 text-white text-sm font-bold px-4 py-2 rounded-full ${property.transaction === 'Buy' ? 'bg-green-600' : property.transaction === 'Rent' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                {property.transaction}
              </span>
              <span className="absolute top-4 right-4 bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-full">
                {property.type}
              </span>
            </div>

            {/* Title & Location */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
            <p className="flex items-center gap-2 text-gray-500 mb-6">
              <FaMapMarkerAlt className="text-red-600" /> {property.location}, {property.state}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <FaRulerCombined className="text-red-600 mx-auto mb-1 text-xl" />
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-bold text-gray-800">{property.area}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <FaRupeeSign className="text-red-600 mx-auto mb-1 text-xl" />
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-bold text-red-700">₹ {property.price}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <p className="text-2xl mb-1">🏢</p>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-bold text-gray-800">{property.type}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Interested?</h3>
              <p className="text-gray-500 text-sm mb-6">Contact us for site visit and more details</p>

              <div className="flex flex-col gap-4">
                <a href={`tel:${property.contact}`} className="flex items-center justify-center gap-2 bg-red-700 text-white py-3 rounded-xl font-semibold hover:bg-red-800 transition">
                  <FaPhone /> Call Now
                </a>
                <a href={`https://wa.me/${property.contact.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Property ID</p>
                <p className="font-bold text-gray-700">PROP-{String(property.id).padStart(4, '0')}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">State</p>
                <p className="font-bold text-gray-700">{property.state}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Transaction</p>
                <span className={`text-white text-sm font-bold px-3 py-1 rounded-full ${property.transaction === 'Buy' ? 'bg-green-600' : property.transaction === 'Rent' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                  {property.transaction}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;