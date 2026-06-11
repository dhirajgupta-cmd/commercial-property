import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  { id: 1, name: 'Rajesh Kumar', role: 'Business Owner, Delhi', text: 'PropIndia helped me find the perfect office space in BKC Mumbai. The team was extremely professional and the process was seamless. Highly recommended for anyone looking for commercial properties!' },
  { id: 2, name: 'Priya Sharma', role: 'Investor, Mumbai', text: 'I invested in a pre-leased property through PropIndia and the ROI has been excellent. Their knowledge of the market is outstanding and they guided me through every step of the process.' },
  { id: 3, name: 'Divakar Reddy', role: 'CEO, Hyderabad', text: 'I am absolutely delighted to have worked with PropIndia. We will always recognize the sincere efforts and hard work put in by their team in making our office search a remarkable one.' },
  { id: 4, name: 'Amit Patel', role: 'Entrepreneur, Ahmedabad', text: 'Found an amazing showroom space on SG Highway through PropIndia. The filters on their platform made it so easy to narrow down options. Great service and very responsive team!' },
  { id: 5, name: 'Sunita Verma', role: 'Director, Bangalore', text: 'PropIndia has an excellent database of commercial properties across India. We found our warehouse in Whitefield within a week. The team is knowledgeable and very helpful.' },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1600')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-12 tracking-wide">
          Our Testimonials
        </h2>

        <div data-aos="fade-up" className="relative">
          {/* Quote */}
          <FaQuoteLeft className="text-yellow-400 text-4xl mx-auto mb-6 opacity-80" />

          <p className="text-lg md:text-xl leading-relaxed mb-8 italic transition-all duration-500">
            {testimonials[current].text}
          </p>

          <FaQuoteRight className="text-yellow-400 text-4xl mx-auto mb-6 opacity-80" />

          {/* Client Info */}
          <div className="mt-4">
            <p className="text-yellow-400 font-extrabold text-lg uppercase tracking-widest">
              {testimonials[current].name}
            </p>
            <p className="text-gray-300 text-sm mt-1">{testimonials[current].role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-yellow-400 w-6' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition">
          <FaChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition">
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;