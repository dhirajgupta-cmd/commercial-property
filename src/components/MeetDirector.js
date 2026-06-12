import React from 'react';
import mohitImg from '../assets/m.jpeg';

const developers = [
  'Bramhacorp', 'VTP', 'Mantra', 'Supreme', 'DLF', 'Godrej',
  'Kohinoor', 'Mahindra', 'Pristine', 'Gold Crest', 'Jhamtani'
];

const MeetDirector = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="w-full px-6 lg:px-20">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-2">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Meet Our <span className="text-yellow-400">Founder & Managing Director</span></h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left - Photo */}
          <div data-aos="fade-right" className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                <img src={mohitImg} alt="Mohit Singh" className="w-full h-full object-cover object-top" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-lg">
                6+ Years in Real Estate
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div data-aos="fade-left" className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <h3 className="text-3xl font-extrabold text-yellow-400 mb-1">Mohit Singh</h3>
            <p className="text-gray-400 font-medium mb-6 tracking-wide uppercase text-sm">Founder & Managing Director — Infinity 99 Realty</p>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                With over <span className="text-white font-semibold">6 years of experience</span> in the real estate market, 
                Mohit Singh has established himself as one of Pune's most trusted real estate advisors.
              </p>
              <p>
                He began his career with a <span className="text-white font-semibold">Channel Partner firm</span>, 
                quickly rising to handle projects on a <span className="text-white font-semibold">sole selling basis</span>. 
                Driven by his vision for transparent and client-first advisory, he founded 
                <span className="text-yellow-400 font-bold"> Infinity 99 Realty</span> — a premium real estate advisory firm based in Pune.
              </p>
              <p>
                His deep market expertise and strong developer relationships have helped 500+ clients make informed 
                property decisions across residential, commercial, and investment segments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: '6+', label: 'Years Experience' },
                { num: '500+', label: 'Happy Clients' },
                { num: '₹100Cr+', label: 'Transactions' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-yellow-400 text-2xl font-extrabold">{stat.num}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Developers */}
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-3 font-semibold">Worked With</p>
              <div className="flex flex-wrap gap-2">
                {developers.map((dev, i) => (
                  <span key={i} className="bg-gray-800 border border-yellow-400 border-opacity-40 text-yellow-300 text-xs px-3 py-1 rounded-full font-medium">
                    {dev}
                  </span>
                ))}
                <span className="bg-gray-800 border border-gray-600 text-gray-400 text-xs px-3 py-1 rounded-full">
                  & many more...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDirector;