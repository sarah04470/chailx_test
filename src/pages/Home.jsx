import React, { useEffect, useState } from 'react';
import MainVideoSection from '@sections/MainVideo';
import ExpertiseSection from '@sections/Expertise';
import ExpertiseMobile from '@sections/ExpertiseMobile';
import PlaidPatternSection from '@sections/PlaidPattern';
import SlideImageSection from '@sections/SlideImage';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <MainVideoSection />
      {isMobile ? <ExpertiseMobile /> : <ExpertiseSection />}
      <PlaidPatternSection />
      <SlideImageSection />
    </main>
  );
};

export default Home;
