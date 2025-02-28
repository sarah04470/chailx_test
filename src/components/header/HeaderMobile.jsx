import React, { useState } from 'react';
import styles from '@/styles/HeaderMobile.module.css';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles['mobile-header']}>
      <div className={styles['logo']}>
        <a href="/">
          <img src="/images/header-section/logo2.png" alt="CAIT" />
        </a>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <a href="/">WHO WE ARE</a>
          </li>
          <li>
            <a href="/">WHAT WE CAN</a>
          </li>
          <li>
            <a href="/">WHAT WE DO</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
