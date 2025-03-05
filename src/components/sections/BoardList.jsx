import React, { useState, useEffect } from 'react';
import chalixData from '@/data/chalix.json';
import styles from '@/styles/BoardList.module.css';

const BoardListSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(chalixData.list.slice(0, 10)); // 최대 10개만 가져오기
  }, []);

  return (
    <section className={styles.board}>
      <div className={styles['board-content']}>
        <ul className={[styles['board-list'], 'grid-title'].join(' ')}>
          <li className={styles['board-item']}>
            <span className={styles['board-index']}>번호</span>
            <span className={[styles['board-conf'], 'pc-only'].join(' ')}>
              학술대회명
            </span>
            <span className={styles['board-title']}>논문명</span>
            <span className={[styles['board-date'], 'pc-only'].join(' ')}>
              날짜
            </span>
            <span className={[styles['board-tag'], 'pc-only'].join(' ')}>
              비고(국내/해외)
            </span>
          </li>
        </ul>
        <ul className={styles['board-list']}>
          {data.map((item) => (
            <li key={item.brd_idx} className={styles['board-item']}>
              <span className={styles['board-index']}>{item.brd_idx}</span>
              <span className={[styles['board-conf'], 'pc-only'].join(' ')}>
                {item.brd_ext2}
              </span>
              <span className={styles['board-title']}>{item.brd_title}</span>
              <span className={[styles['board-date'], 'pc-only'].join(' ')}>
                {new Intl.DateTimeFormat('ko-kr', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
                  .format(new Date(item.reg_datetime))
                  .replace(/\. /g, '-')
                  .replace('.', '')}
              </span>
              <span className={[styles['board-tag'], 'pc-only'].join(' ')}>
                {item.brd_ext1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BoardListSection;
