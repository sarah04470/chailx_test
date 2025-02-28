import React from 'react';
import HeaderPC from '@header/HeaderPC';
import HeaderMobile from '@header/HeaderMobile';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={['pc-only', styles['header-container']].join(' ')}>
        <HeaderPC />
      </div>
      <div className="mobile-only">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
