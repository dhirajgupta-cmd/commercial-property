import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const slides = [
  { id: 1, bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600', title: 'Premium Office Spaces' },
  { id: 2, bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', title: 'Modern Commercial Hubs' },
  { id: 3, bg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600', title: 'Retail & Shopping Spaces' },
];

const states = ["All States","Andhra Pradesh","Bihar","Delhi","Gujarat","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Punjab","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal"];

const propertyTypes = ["All Types","Office","Shop","Warehouse","Showroom","Industrial","Plot","Mall Space"];

const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [state, setState] = useState('');
  const [type, setType] = useState('');
  const [transaction, setTransaction] = useState('');

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 text-gray-200">
          {t('hero.subtitle')}
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-wrap gap-3 w-full max-w-4xl">
          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {propertyTypes.map(p => <option key={p} value={p}>{p}</option>)}
          </select>

          <select
            className="flex-1 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-red-500"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          >
            <option value="">Buy / Rent</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="prelease">Pre-Lease</option>
          </select>

          <button className="bg-red-700 text-white px-8 py-2 rounded-lg font-semibold hover:bg-red-800 transition">
            {t('hero.search')}
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 text-white px-3 py-4 rounded-full hover:bg-opacity-70 text-xl">❮</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 text-white px-3 py-4 rounded-full hover:bg-opacity-70 text-xl">❯</button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-red-600' : 'bg-white bg-opacity-60'}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;