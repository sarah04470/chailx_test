import React, { useState } from 'react';
import styles from '@/styles/HeaderMobile.module.css';
import { useNavigate } from 'react-router-dom';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles['mobile-header-container']}>
      {/* 상단 헤더 */}
      <div className={styles['mobile-header']}>
        <div className={styles['logo']} onClick={() => navigate('/')}>
          <img src="/images/logo2.png" alt="CAIT" />
        </div>
        <button
          className={`${styles['hamburger-btn']} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
          </svg>
        </button>
      </div>

      {/* 네비게이션 메뉴 (햄버거 버튼 클릭 시 활성화) */}
      <aside
        className={`${styles['mobile-nav']} ${menuOpen ? styles.active : ''}`}
      >
        <div className={styles['nav-container']}>
          <button
            className={styles['close-btn']}
            onClick={() => setMenuOpen(false)}
          >
            <svg
              stroke="black"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144m224 0L144 368"
              ></path>
            </svg>
          </button>
          <nav className={styles['mobile-nav-menu']}>
            <ul>
              <li>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  WHO WE ARE
                </a>
              </li>
              <li>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  WHAT WE CAN
                </a>
              </li>
              <li>
                <a
                  href="/board/presentation"
                  onClick={() => setMenuOpen(false)}
                >
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  문의하기
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default HeaderMobile;
