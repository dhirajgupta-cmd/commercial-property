import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/infinity logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

        {/* Column 1 - About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Infinity 99 Realty" className="h-16 w-16 object-contain " />
            <div>
              <p className="text-white font-extrabold text-base leading-tight">Infinity 99 <span className="text-yellow-400">Realty</span></p>
              <p className="text-xs text-gray-400">Premium Advisory</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Pune's trusted premium real estate advisory. Residential, commercial, and investment property solutions built on transparency and trust.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="/contact" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="/contact" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="/contact" className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href="https://wa.me/917066656633" target="_blank" rel="noreferrer" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/properties" className="hover:text-yellow-400 transition">Properties</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer transition">Residential Properties</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Commercial Real Estate</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Investment Advisory</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Pre-Leased Properties</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Plot & Land Investment</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Property Selling</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1 shrink-0" />
              <span>Yashwin Orizontte, Shop No. 102, Near Panchshil Tower Road, Vitthal Nagar, Kharadi, Pune – 411014</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400 shrink-0" />
              <a href="tel:+917066656633" className="hover:text-yellow-400 transition">+91 7066656633</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400 shrink-0" />
              <a href="tel:+919765666568" className="hover:text-yellow-400 transition">+91 9765666568</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <a href="mailto:infinity99realty1@gmail.com" className="hover:text-yellow-400 transition">infinity99realty1@gmail.com</a>
            </li>
          </ul>
          <div className="mt-4 bg-yellow-400 text-gray-900 text-xs px-3 py-1 rounded-full inline-block font-bold">
            MahaRERA Certified
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2026 Infinity 99 Realty. All Rights Reserved. | Kharadi, Pune</p>
        <p className="mt-1 text-xs">Disclaimer: This website is for informational purposes only. | MahaRERA Certified Advisory Firm</p>
      </div>
    </footer>
  );
};

export default Footer;