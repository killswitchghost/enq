import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import styles from './_Counter.module.scss';

interface StatProps {
  statValue: number;
  statLabel: string;
  prefix?: string; // Optional prefix
  suffix?: string; // Optional suffix
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
    const currentRef = counterRef.current; // Store the current value of the ref in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef); // Observe the current element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref value in the cleanup
      }
    };
  }, []);

  return (
    // <div className='stat' ref={counterRef}>
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
