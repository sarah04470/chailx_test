import React, { useEffect, useRef, useState } from 'react';
import HeaderPC from '@header/HeaderPC';
import HeaderMobile from '@header/HeaderMobile';
import styles from '@/styles/Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [scrollStarted, setScrollStarted] = useState(false);
  const [isPC, setIsPC] = useState(window.innerWidth > 768);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10;

  useEffect(() => {
    setTimeout(() => setInitialLoad(false), 800);

    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    if (isPC) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (!scrollStarted && currentScrollY > scrollThreshold) {
          setScrollStarted(true);
        }

        if (currentScrollY === 0) {
          setAtTop(true);
          setIsVisible(true);
        } else {
          setAtTop(false);
          setIsVisible(currentScrollY < lastScrollY.current);
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isPC, scrollStarted]);

  const headerClassName = `${styles.header} ${
    initialLoad
      ? styles.initial
      : isPC
        ? scrollStarted
          ? isVisible
            ? styles.show
            : styles.hide // 위로 스크롤 시 `show`, 아래로 스크롤 시 `hide`
          : styles.show // `scrollStarted`가 `false`면 `hide` 적용되지 않음
        : ''
  } ${atTop ? styles['scroll-top'] : ''}`;

  return (
    <header className={headerClassName}>
      <div className={['pc-only', styles['header-container']].join(' ')}>
        <HeaderPC />
      </div>
      <div className={['mobile-only', styles['initial']].join(' ')}>
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
