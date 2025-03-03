import styles from '@/styles/Presentation.module.css';
import React from 'react';
import HeroSection from '@sections/HeroSection';
import BoardListSection from '@sections/BoardList';

const Presentation = () => {
  return (
    <main>
      <HeroSection />
      <BoardListSection />
    </main>
  );
};

export default Presentation;
