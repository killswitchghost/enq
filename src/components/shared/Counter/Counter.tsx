import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import styles from './_Counter.module.scss';

interface StatProps {
  statValue: number;
  statLabel: string;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<StatProps> = ({
  statValue,
  statLabel,
  prefix,
  suffix
}) => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = counterRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={`${styles.counterStat} stat`} ref={counterRef}>
      <div className={`${styles.counterStatValue} stat-value`}>
        {inView ? (
          <CountUp
            end={statValue}
            duration={2}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          0
        )}
      </div>
      <div className={`${styles.counterStatLabel} stat-label`}>
        <p>{statLabel}</p>
      </div>
    </div>
  );
};

export default Counter;
