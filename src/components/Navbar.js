import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaGlobe, FaChevronDown, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/infinity logo.png';

const propertyDropdown = [
  'Properties In Delhi', 'Properties In Mumbai', 'Properties In Bangalore',
  'Properties In Hyderabad', 'Properties In Chennai', 'Properties In Pune',
  'Properties In Ahmedabad', 'Properties In Kolkata', 'Properties In Bhopal',
  'Medical/Hospital', 'Industrial Land', 'All Properties'
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">

      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="https://wa.me/917066656633" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-400 transition">
            <FaWhatsapp className="text-green-400" /> Chat With Us
          </a>
          <a href="tel:+917066656633" className="flex items-center gap-2 hover:text-white transition">
            <FaPhone className="text-gray-400" /> +91 7066656633
          </a>
          <span className="hidden md:flex items-center gap-2">
            <FaEnvelope className="text-gray-400" /> MahaRERA Certified
          </span>
        </div>
        <div className="relative">
          <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-gray-300 hover:text-white transition text-xs">
            <FaGlobe />
            {i18n.language === 'hi' ? 'हिंदी' : 'English'}
            <FaChevronDown size={10} />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-1 bg-white text-gray-800 rounded shadow-lg z-50 w-28">
              <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">🇬🇧 English</button>
              <button onClick={() => changeLanguage('hi')} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">🇮🇳 हिंदी</button>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Infinity 99 Realty" className="h-20 w-20 object-contain" />
          <div>
            <p className="text-base font-extrabold text-gray-900 leading-tight">Infinity 99 <span className="text-yellow-500">Realty</span></p>
            <p className="text-xs text-gray-500 leading-tight">Premium Advisory</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium text-sm">
          <li className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 hover:text-yellow-600 transition">
              Properties <FaChevronDown size={11} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg z-50 w-56 py-2 border border-gray-100">
                {propertyDropdown.map((item, i) => (
                  <Link key={i} to="/properties" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/properties" className="hover:text-yellow-600 transition">Commercial</Link></li>
          <li><Link to="/properties" className="hover:text-yellow-600 transition">Residential</Link></li>
          <li><Link to="/properties" className="hover:text-yellow-600 transition">New Projects</Link></li>
          <li><Link to="/properties" className="hover:text-yellow-600 transition">Prelease</Link></li>
          <li><Link to="/about" className="hover:text-yellow-600 transition">About Us</Link></li>
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919765666568" className="text-sm text-gray-600 font-medium hover:text-yellow-600 transition">
            +91 9765666568
          </a>
          <Link to="/contact" className="border-2 border-gray-800 text-gray-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md lg:hidden px-6 py-4 flex flex-col gap-3 text-gray-700 font-medium text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>Commercial</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>Residential</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>New Projects</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>Prelease</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;