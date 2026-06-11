import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

        {/* Column 1 - About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">🏢 PropIndia</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            India's trusted commercial property platform. Find office spaces, shops, warehouses & more across all states.
          </p>
          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
            <li><Link to="/properties" className="hover:text-red-400 transition">Properties</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Property Types */}
        <div>
          <h3 className="text-white font-bold mb-4">Property Types</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer transition">Office Space</li>
            <li className="hover:text-red-400 cursor-pointer transition">Retail Shop</li>
            <li className="hover:text-red-400 cursor-pointer transition">Warehouse</li>
            <li className="hover:text-red-400 cursor-pointer transition">Showroom</li>
            <li className="hover:text-red-400 cursor-pointer transition">Industrial</li>
            <li className="hover:text-red-400 cursor-pointer transition">Pre-Lease</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 mt-1 shrink-0" />
              <span>123, Business Hub, Bhopal, Madhya Pradesh - 462001</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-red-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500 shrink-0" />
              <span>info@propindia.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2026 PropIndia. All Rights Reserved.</p>
        <p className="mt-1 text-xs">Disclaimer: This website is for informational purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;