import React from 'react';
import styles from '@/styles/HeaderPC.module.css';
import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    title: 'WHO WE ARE',
    subMenu: [
      { name: 'CAIT VALUE', url: '/' },
      { name: 'CEO 메시지', url: '/' },
      { name: '연혁', url: '/' },
    ],
  },
  {
    title: 'WHAT WE CAN',
    subMenu: [
      { name: '컨설팅부', url: '/' },
      { name: '글로벌연구센터', url: '/' },
      { name: '정책연구부', url: '/' },
      { name: '기술개발부', url: '/' },
    ],
  },
  {
    title: 'WHAT WE DO',
    subMenu: [
      { name: '사업실적', url: '/' },
      {
        name: '발표논문',
        url: '/board/presentation',
        shouldPreventDefault: false,
      },
      { name: 'NEWS', url: '/' },
    ],
  },
  { title: 'CONTACT', url: '/' },
];

const HeaderPC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles['pc-nav']}>
      <div className={styles['logo']} onClick={() => navigate('/')}>
        <img src="/images/logo2.png" alt="CAIT" />
      </div>
      <ul className={styles['nav-list']}>
        {navItems.map((item, index) => (
          <li key={index} className={styles['nav-item']}>
            <div className={styles['nav-link']}>
              <a
                className={styles['nav-anchor']}
                href={item.url || '#'}
                onClick={(e) => {
                  if (!item.subMenu && item.url !== '/board/presentation') {
                    e.preventDefault();
                  }
                }}
              >
                {item.title}
              </a>
            </div>
            {item.subMenu && (
              <ul className={styles['sub-menu']}>
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles['sub-item']}>
                    <a
                      className={styles['sub-anchor']}
                      href={subItem.url}
                      onClick={(e) => {
                        if (subItem.shouldPreventDefault !== false) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderPC;
