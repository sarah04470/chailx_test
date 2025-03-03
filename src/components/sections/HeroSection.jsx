import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import SplitType from 'split-type';
import styles from '@/styles/HeroSection.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/7.png',
    title: 'Creating impact\nthrough meaningful solutions',
    menu: '사업실적',
  },
  {
    img: '/images/8.png',
    title: 'Driving innovation\nwith impactful research',
    menu: '발표논문',
  },
  {
    img: '/images/9.png',
    title: 'Providing real-time updates\non industry developments',
    menu: 'NEWS',
  },
];

const HeroSection = () => {
  const swiperRef = useRef(null);
  const titleRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveIndex(swiperRef.current.swiper.realIndex);
        animateTitle(swiperRef.current.swiper.realIndex);
      });
    }
    animateTitle(0); // 첫 번째 슬라이드 애니메이션 실행
  }, []);

  // ✅ 타이틀 애니메이션 함수
  const animateTitle = (index) => {
    if (!titleRefs.current[index]) return;

    const text = new SplitType(titleRefs.current[index], { types: 'chars' });

    gsap.fromTo(
      text.chars,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        delay: 1,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
        ease: 'power4.inOut',
      }
    );
  };

  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className={styles['hero-swiper']}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles['hero-slide']}>
              <div className={styles['hero-slide-imgWrap']}>
                <img
                  className={styles['hero-slide-img']}
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className={styles['hero-slide-cover']}></div>
              <div className={styles['hero-slide-content']}>
                <h2
                  className={styles['hero-title']}
                  ref={(el) => (titleRefs.current[index] = el)}
                >
                  {typeof slide.title === 'string'
                    ? slide.title.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))
                    : slide.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ 페이지네이션 (탭 스타일) */}
        <div className={styles['hero-pagination-wrap']}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles['hero-pagination']} ${index === activeIndex ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                swiperRef.current.swiper.slideTo(index);
              }}
            >
              <div className={styles['hero-line-wrap']}>
                <div className={styles['hero-line']}></div>
              </div>
              <a href="#" className={styles['hero-pagination-link']}>
                <p className={styles['hero-pagination-name']}>{slide.menu}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
