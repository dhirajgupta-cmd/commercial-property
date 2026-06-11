import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'PREMIUM OFFICE SPACE',
    subtitle: 'IT Park | Co-working | Corporate Office | SEZ',
    bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
    tag: 'Office',
  },
  {
    id: 2,
    title: 'PRELEASED PROPERTIES',
    subtitle: 'Shops | Offices | Restaurant | Hospital | Warehouse with Good ROI%',
    bg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600',
    tag: 'Pre-Lease',
  },
  {
    id: 3,
    title: 'LAND OPTIONS',
    subtitle: 'Open Land | Residential Land | Commercial Land | Agricultural | Bunglow Plot',
    bg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600',
    tag: 'Plot',
  },
  {
    id: 4,
    title: 'INDUSTRIAL PROJECTS',
    subtitle: 'Warehouse | Land | Factory | Shed | Logistic Park',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600',
    tag: 'Industrial',
  },
  {
    id: 5,
    title: 'HOSPITAL & HEALTHCARE',
    subtitle: 'Ready Running | Green Project | Brown Project',
    bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600',
    tag: 'Warehouse',
  },
  {
    id: 6,
    title: 'SHOP & SHOWROOM',
    subtitle: 'High Footfall | Prime Location | Road Facing',
    bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600',
    tag: 'Shop',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  const handleViewDetail = (tag) => {
    navigate(`/properties?type=${tag}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-55" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wide">
            {slides[current].title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-8 uppercase tracking-widest">
            {slides[current].subtitle}
          </p>
          <button
            onClick={() => handleViewDetail(slides[current].tag)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition"
          >
            VIEW DETAIL
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 px-8 flex justify-center gap-10 text-white text-sm tracking-widest uppercase">
          <span>📍 Prime Location</span>
          <span>🏢 Luxury Amenities</span>
          <span>📈 High Returns</span>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 text-white px-3 py-4 rounded-full hover:bg-opacity-70 text-xl">❮</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 text-white px-3 py-4 rounded-full hover:bg-opacity-70 text-xl">❯</button>

      {/* Dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition ${i === current ? 'bg-yellow-500' : 'bg-white bg-opacity-60'}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;