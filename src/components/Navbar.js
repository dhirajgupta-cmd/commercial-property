import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-700 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <FaPhone className="text-xs" /> +91 98765 43210
          </span>
          <span className="flex items-center gap-1">
            <FaWhatsapp /> WhatsApp Us
          </span>
        </div>
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 bg-white text-red-700 px-3 py-1 rounded font-semibold text-xs"
          >
            <FaGlobe />
            {i18n.language === 'hi' ? 'हिंदी' : 'English'}
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-1 bg-white text-gray-800 rounded shadow-lg z-50 w-28">
              <button
                onClick={() => changeLanguage('en')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                🇮🇳 हिंदी
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-700">
          🏢 PropIndia
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-red-700">{t('nav.home')}</Link></li>
          <li><Link to="/properties" className="hover:text-red-700">{t('nav.properties')}</Link></li>
          <li><Link to="/about" className="hover:text-red-700">{t('nav.about')}</Link></li>
          <li><Link to="/contact" className="hover:text-red-700">{t('nav.contact')}</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md md:hidden px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>{t('nav.home')}</Link>
          <Link to="/properties" onClick={() => setMenuOpen(false)}>{t('nav.properties')}</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;