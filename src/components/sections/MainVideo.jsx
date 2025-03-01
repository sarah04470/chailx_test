import React, { useEffect, useRef } from 'react';
import styles from '@/styles/MainVideo.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const MainVideoSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(titleRef.current, {
      types: 'lines,words,chars',
    });
    const chars = split.chars;

    gsap.from(chars, {
      yPercent: 0,
      autoAlpha: 0,
      duration: 2,
      overwrite: 'auto',
      ease: 'circ.out',
      delay: 1,
      stagger: {
        amount: 1.5,
        from: 'left',
      },
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top bottom',
        // markers: true,
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section className={styles['video-section']}>
      <div className={styles['video-wrap']}>
        <video className={styles['video']} autoPlay loop muted playsInline>
          <source src="/images/videos/mainvid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles['title-wrap']}>
        <h1 ref={titleRef} className={styles['title']}>
          <div>지속 가능한 미래와 고객의 비즈니스 성공을</div>
          <div>위한 혁신적인 환경 솔루션을 제공합니다</div>
        </h1>
      </div>
    </section>
  );
};

export default MainVideoSection;
