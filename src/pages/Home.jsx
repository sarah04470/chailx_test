import React from 'react';
import MainVideoSection from '@sections/MainVideo';
import ExpertiseSection from '@sections/Expertise';
import PlaidPatternSection from '@sections/PlaidPattern';
// import SlideImageSection from '@sections/SlideImageSection';

const Home = () => {
  return (
    <main>
      <MainVideoSection />
      <ExpertiseSection />
      <PlaidPatternSection />
      {/* <SlideImageSection /> */}
    </main>
  );
};

export default Home;
