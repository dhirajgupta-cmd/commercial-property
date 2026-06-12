import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProperties from '../components/FeaturedProperties';
import QuickAssistance from '../components/QuickAssistance';
import MeetDirector from '../components/MeetDirector';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProperties />
      <QuickAssistance />
      <MeetDirector />
      <Testimonials />
    </div>
  );
};

export default Home;