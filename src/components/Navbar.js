import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaGlobe, FaChevronDown, FaEnvelope } from 'react-icons/fa';

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

      {/* Top Bar - Dark */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaWhatsapp className="text-green-400" /> Chat With Us
          </span>
          <span className="flex items-center gap-2">
            <FaPhone className="text-gray-400" /> +91 91313 33581
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" /> RERA: PROP2026IN001
          </span>
        </div>
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-gray-300 hover:text-white transition text-xs"
          >
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
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-red-700 text-white p-2 rounded">
            <FaPhone size={16} />
          </div>
          <span className="text-xl font-extrabold text-gray-800 tracking-wide">
            Prop<span className="text-red-700">India</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium text-sm">

          {/* Properties Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-red-700 transition"
            >
              Properties <FaChevronDown size={11} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg z-50 w-56 py-2 border border-gray-100">
                {propertyDropdown.map((item, i) => (
                  <Link
                    key={i}
                    to="/properties"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li><Link to="/properties" className="hover:text-red-700 transition">Commercial</Link></li>
          <li><Link to="/properties" className="hover:text-red-700 transition">Residential</Link></li>
          <li><Link to="/properties" className="hover:text-red-700 transition">New Projects</Link></li>
          <li><Link to="/properties" className="hover:text-red-700 transition">Prelease</Link></li>
          <li><Link to="/about" className="hover:text-red-700 transition">About Us</Link></li>
          <li><Link to="/properties" className="hover:text-red-700 transition">Advertise</Link></li>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="border-2 border-gray-800 text-gray-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
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