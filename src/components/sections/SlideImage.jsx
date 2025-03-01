import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/SlideImage.module.css';

gsap.registerPlugin(ScrollTrigger);

const SlideImageSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // 배경색 애니메이션
    gsap.to('.slide-image-position', {
      scrollTrigger: {
        trigger: '.slide-image-section',
        start: isMobile ? 'top 60%' : 'top 40%',
        end: 'top top',
        scrub: true,
      },
      backgroundColor: '#202020',
    });

    // 이미지 애니메이션 (wrap2 ~ wrap5)
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: '.slide-image-position',
            start: `${10 + index * 5}% top`,
            end: '50% top',
            scrub: 1,
          },
          top: '-50%',
        });
      }
    });

    // wrap1 애니메이션 조정
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.slide-image-position',
          start: '10% top',
          end: '50% top',
          scrub: 1,
          // markers: true
        },
      })
      .to('.slide-img-wrap.wrap1', {
        top: '50%',
        // transform: 'translate(-50%, -50%)', // 중앙 정렬 유지
        // left: '50%',
        // position: 'absolute', // 위치 고정
      })
      .to('.slide-img-wrap.wrap1', {
        width: '100%', // 전체 화면 채우도록 변경
        height: '100%',
        // top: '50%',
        filter: 'brightness(0.7)',
      });
  }, []);

  return (
    <section ref={sectionRef} className={styles['slide-image-section']}>
      <div className={styles['slide-image-position']}>
        <div className={styles['slide-image-sticky']}>
          {/* 제목 */}
          <h1 ref={titleRef} className={styles['slide-image-title']}>
            Environmental
            <br className="mobile-only" /> consultancy firm <br />
            offering high-value
            <br className="mobile-only" /> advisory services
          </h1>

          {/* 사업실적 버튼 */}
          <div className={styles['hover-business-content-btnWrap']}>
            <a className={styles['hover-business-content-btn']}>
              <span>사업실적</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </a>
          </div>

          {/* 이미지 리스트 */}
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className={`${styles['slide-img-wrap']} ${styles[`wrap${i + 1}`]}`}
            >
              <img
                className={styles['slide-image']}
                src={`/images/${i + 1}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideImageSection;
