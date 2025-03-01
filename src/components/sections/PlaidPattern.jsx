import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import styles from '@/styles/PlaidPattern.module.css';

gsap.registerPlugin(ScrollTrigger);

const PlaidPatternSection = () => {
  const bigPointTextRef = useRef(null);
  const titleRefs = useRef([]);

  const [newsTitles, setNewsTitles] = useState([
    '순환경제사회법 시행령 일부개정령안 입법예고',
    '',
    '신뢰와 정확성을 바탕으로 하는 카이트 엔지니어링',
    '',
    '',
    '',
    '신뢰와 정확성을 바탕으로 하는 카이트 엔지니어링',
    '',
    '고객 맞춤형 환경 솔루션 제공',
    '',
    '신뢰와 정확성을 바탕으로 하는 카이트 엔지니어링',
    '',
    '고객 맞춤형 환경 솔루션 제공',
    '',
    '',
    '',
  ]);

  useEffect(() => {
    // Big Point Item 텍스트 애니메이션
    if (bigPointTextRef.current) {
      const splitText = new SplitType(bigPointTextRef.current, {
        type: 'chars',
      });
      gsap.from(splitText.chars, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: {
          amount: 1,
          from: 'left',
        },
        scrollTrigger: {
          trigger: bigPointTextRef.current,
          start: 'top 80%',
          end: 'top 50%',
        },
      });
    }

    // 리스트 아이템 애니메이션
    requestAnimationFrame(() => {
      gsap.utils
        .toArray('.plaid-pattern-item .plaid-pattern-title')
        .forEach((title, index) => {
          const splitText = new SplitType(title, { type: 'chars' });

          gsap.fromTo(
            splitText.chars,
            {
              opacity: 0,
              yPercent: 80,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              ease: 'power4.out',
              stagger: {
                amount: 1,
                from: 'left',
              },
              scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                end: 'top 60%',
                // markers: true
              },
            }
          );
        });
    });
  }, []);

  let filteredIndex = 0;

  return (
    <section className={styles['plaid-pattern-section']}>
      <div className={styles['plaid-pattern-inner']}>
        <ul className={styles['plaid-pattern-items']}>
          {/* Big Point Item */}
          <li className={styles['big-point-item']}>
            <div className={styles['plaid-pattern-title']}>Latest News</div>
            <a href="/detail/31">
              <div
                ref={bigPointTextRef}
                className={styles['plaid-pattern-text']}
              >
                {newsTitles[0]}
              </div>
            </a>
          </li>

          {/* News Items */}
          {newsTitles.slice(1).map((title, index) => {
            const isEmpty = title.trim() === '';
            if (!isEmpty) filteredIndex++; // 빈 요소가 아니면 카운트 증가

            return (
              <li
                key={index}
                className={`${styles['plaid-pattern-item']} ${
                  isEmpty ? styles['empty-item'] : ''
                }`}
              >
                {!isEmpty && (
                  <>
                    <div className={styles['plaid-pattern-icon']}>
                      <img
                        src={`/images/icons/2-${filteredIndex}.png`} // 빈 요소 제외한 올바른 이미지 매칭
                        alt="icon"
                        className="hover-image"
                      />
                    </div>
                    <a
                      href={`/detail/${filteredIndex}`}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div
                        ref={(el) => {
                          if (el && !titleRefs.current.includes(el)) {
                            titleRefs.current.push(el);
                          }
                        }}
                        className={styles['plaid-pattern-title']}
                      >
                        {title}
                      </div>
                    </a>
                  </>
                )}
              </li>
            );
          })}

          {/* 바로가기 버튼 */}
          <li className={styles['pattern-item-color']}>
            <a className={styles['pattern-item-btn']} href="/">
              <div className={styles['plaid-pattern-title']}>바로가기</div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlaidPatternSection;
