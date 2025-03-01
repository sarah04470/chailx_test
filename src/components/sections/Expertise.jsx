import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import styles from '@/styles/Expertise.module.css';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const targets = gsap.utils.toArray('.split');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRefs.current[0],
        start: 'top 80%',
        // markers: true,
      },
    });

    // 타이틀 애니메이션 실행 (순차적 실행)
    titleRefs.current.forEach((title, index) => {
      if (title) {
        let splitClient = new SplitType(title, { type: 'chars' });
        let chars = splitClient.chars;

        timeline.from(
          chars,
          {
            yPercent: 50,
            autoAlpha: 0,
            duration: 0.5,
            ease: 'power4.inOut',
            stagger: {
              amount: 0.8,
              from: 'left',
            },
          },
          index * 0.6 - 0.5 // 각 애니메이션이 끝나기 0.5초 전에 시작
        );
      }
    });

    gsap.set(cardRefs.current, { width: '250%' });
    gsap.set(cardRefs.current[0], { width: '40vw' });
    gsap.set(cardRefs.current.slice(1), { width: '768px' });
    cardRefs.current.forEach((card, index) => {
      gsap.to(card, {
        width: 'calc(25vw - 33px)',
        ease: 'power4.out',
        duration: 0.5,
        // delay: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: `bottom 80%`,
          end: `bottom 50%`,
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section className={styles['expertise-section']}>
      <div className={styles['expertise-wrapper']}>
        <div className={styles['expertise-sticky-wrapper']}>
          <div className={styles['expertise-content-wrap']}>
            {/* 타이틀 */}
            <div className={styles['expertise-title-wrapper']}>
              <div className={styles['title-top']}>
                <p
                  ref={(el) => (titleRefs.current[0] = el)}
                  className={[styles['expertise-title-text'], 'split'].join(
                    ' '
                  )}
                >
                  Our Expertise
                </p>
              </div>
              <div className={styles['title']}>
                <p
                  ref={(el) => (titleRefs.current[1] = el)}
                  className={[styles['expertise-title-text'], 'split'].join(
                    ' '
                  )}
                >
                  깊이 있는 전문 지식으로
                </p>
                <p
                  ref={(el) => (titleRefs.current[2] = el)}
                  className={[styles['expertise-title-text'], 'split'].join(
                    ' '
                  )}
                >
                  지속 가능한 미래를 설계합니다
                </p>
              </div>
            </div>

            {/* 카드 리스트 */}
            <div className={styles['expertise-cards-wrapper']}>
              {[
                {
                  num: '01',
                  title: '컨설팅부',
                  desc: '다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및 탄소배출권 관리 및  국가와 기업의 경쟁령을 고취합니다',
                },
                {
                  num: '02',
                  title: '글로벌연구센터',
                  desc: '기후변화 대응 및 ESG 경영 선도를 위해 국제개발협력, 정책연구, 신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을 제공합니다',
                },
                {
                  num: '03',
                  title: '정책연구부',
                  desc: '국가, 지방자치단체, 사업장 등이 환경분야 및 기후변화에 선도적으로 대응할 수 있도록 정책 개발 및 대안 마련합니다',
                },
                {
                  num: '04',
                  title: '기술개발부',
                  desc: '세균 및 바이러스 제거, 지속적인 효과, 환경 친화적인 항균ᆞ항바이러스 나노물질의 개발로  새로운 제품과 서비스를 제공합니다',
                },
              ].map((card, index) => (
                <a
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={styles['expertise-card']}
                  href="/"
                  onClick={(e)=>{ e.preventDefault()}}
                >
                  <div className={styles['txt-box']}>
                    <div className={styles['expertise-card-number']}>
                      <p>{card.num}</p>
                    </div>
                    <p className={styles['expertise-card-title']}>
                      {card.title}
                    </p>
                    <p className={styles['expertise-card-desc']}>{card.desc}</p>
                  </div>
                  <div className={styles['expertise-card-bg']}>
                    <div className={styles['expertise-card-img-wrap']}>
                      <img src={`/images/scale${index + 1}.jpg`} alt="cait" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
