import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Hairstyles from '../components/Hairstyles';
import Newbot from '../components/newbot';

function Home() {
  return (
    <div>
      <Header imgtext={"Need a Haircut?"} />
      <Hero />
      <Newsletter />
      <Hairstyles />
      <Newbot />
    </div>
  );
}

export default Home;
