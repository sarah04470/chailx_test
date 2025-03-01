import React, { useState } from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState([
    '사업자명: 홍길동',
    '대표자명: 홍길동',
    '팩스: 02-1234-5678',
    '주소: 서울 서초구 서초대로77길 39, 10층 ',
    '대표전화: 010-1234-5678',
    '사업자등록번호: 123-45-67890',
  ]);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles['footer-title']}>
          <div className={styles.logo}>
            <img src="/images/logo2.png" className={styles['logo-item']} alt="CAIT" />
          </div>
          <div className={styles['privacy']}>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
        <ul className={styles['footer-info']}>
          {footerInfo.map((info, index) => (
            <li key={index} className={styles['info-item']}>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
