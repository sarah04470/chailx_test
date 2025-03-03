import React, { useState, useEffect } from 'react';
import styles from '@/styles/TopButton.module.css';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.topButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z" />
      </svg>
    </button>
  );
};

export default TopButton;
