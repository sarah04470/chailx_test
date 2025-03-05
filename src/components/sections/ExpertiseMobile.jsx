import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@/styles/ExpertiseMobile.module.css';

const cardData = [
  {
    num: '01',
    title: '컨설팅부',
    desc: '다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및 탄소배출권 관리 및 국가와 기업의 경쟁력을 고취합니다.',
    link: '/wecan/consulting',
    img: '/images/scale1.jpg',
  },
  {
    num: '02',
    title: '글로벌연구센터',
    desc: '기후변화 대응 및 ESG 경영 선도를 위해 국제개발협력, 정책연구, 신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을 제공합니다.',
    link: '/wecan/global',
    img: '/images/scale2.jpg',
  },
  {
    num: '03',
    title: '정책연구부',
    desc: '국가, 지방자치단체, 사업장 등이 환경분야 및 기후변화에 선도적으로 대응할 수 있도록 정책 개발 및 대안 마련합니다.',
    link: '/wecan/policyDe',
    img: '/images/scale3.jpg',
  },
  {
    num: '04',
    title: '기술개발부',
    desc: '세균 및 바이러스 제거, 지속적인 효과, 환경 친화적인 항균·항바이러스 나노물질의 개발로 새로운 제품과 서비스를 제공합니다.',
    link: '/wecan/technologyDe',
    img: '/images/scale4.jpg',
  },
];

const ExpertiseMobile = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className={styles['expertise-mobile-section']}>
      <div className={styles['expertise-mobile-wrapper']}>
        <div className={styles['expertise-title-wrap']}>
          <p className={styles['title-mini']}>Our Expertise</p>
          <p className={styles['title-main']}>
            깊이 있는 전문 지식으로 <br /> 지속 가능한 미래를 설계합니다
          </p>
        </div>

        {/* 카드 슬라이더 */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={16}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className={styles['swiper-container']}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className={styles['swiper-slide']}>
              <div className={styles['expertise-card']}>
                <div className={styles['card-img-wrap']}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className={styles['card-img']}
                  />
                </div>
                <div className={styles['text-wrap']}>
                  <div className={styles['card-title-wrap']}>
                    <p className={styles['card-title']}>{card.title}</p>
                    <a
                      href={card.link}
                      className={styles['more-btn']}
                      onClick={(e) => e.preventDefault()}
                    >
                      더 보기
                    </a>
                  </div>
                  <p className={styles['card-desc']}>{card.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 네비게이션 버튼 */}
        <div className={styles['news-board-btn-wrap']}>
          <div className={styles['news-board-btn']} ref={prevRef}>
            <svg
              stroke="black"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="16px"
              width="16px"
            >
              <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path>
            </svg>
          </div>
          <div className={styles['news-board-btn']} ref={nextRef}>
            <svg
              stroke="black"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="16px"
              width="16px"
            >
              <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMobile;
