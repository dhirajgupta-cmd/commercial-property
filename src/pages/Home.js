import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProperties from '../components/FeaturedProperties';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProperties />
      <AboutSection />
    </div>
  );
};

export default Home;