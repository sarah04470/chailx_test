import React from 'react';
import styles from '@/styles/HeaderPC.module.css';

const HeaderPC = () => {
  return (
    <nav className={styles['pc-nav']}>
      <div className={styles['logo']}>
        <img src="/images/logo2.png" alt="CAIT" />
      </div>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <div className={styles['nav-link']}>
            <a className={styles['nav-anchor']} href="/">
              WHO WE ARE
            </a>
          </div>
          <ul className={styles['sub-menu']}>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                CAIT VALUE
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                CEO 메시지
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                연혁
              </a>
            </li>
          </ul>
        </li>
        <li className={styles['nav-item']}>
          <div className={styles['nav-link']}>
            <a className={styles['nav-anchor']} href="/">
              WHAT WE CAN
            </a>
          </div>
          <ul className={styles['sub-menu']}>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                컨설팅부
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                글로벌연구센터
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                정책연구부
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                기술개발부
              </a>
            </li>
          </ul>
        </li>
        <li className={styles['nav-item']}>
          <div className={styles['nav-link']}>
            <a className={styles['nav-anchor']} href="/">
              WHAT WE DO
            </a>
          </div>
          <ul className={styles['sub-menu']}>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                사업실적
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                발표논문
              </a>
            </li>
            <li className={styles['sub-item']}>
              <a className={styles['sub-anchor']} href="/">
                NEWS
              </a>
            </li>
          </ul>
        </li>
        <li className={styles['nav-item']}>
          <div className={styles['nav-link']}>
            <a className={styles['nav-anchor']} href="/">
              CONTACT
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderPC;
