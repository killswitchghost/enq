import React, { useState, useEffect } from 'react';
import styles from './_ListAccordion.module.scss';

interface ListAccordionItem {
  title: string;
  content: string;
}

interface ListAccordionProps {
  items: ListAccordionItem[];
}

const ListAccordion: React.FC<ListAccordionProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as necessary
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`${styles.footerColumns} ${
        isMobile ? styles.mobile : styles.desktop
      }`}
    >
      <ul className={styles.titleColumn}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${
              isMobile && activeIndex === index ? styles.active : ''
            }`}
          >
            {isMobile ? (
              <button
                className={styles.accordionButton}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </button>
            ) : (
              <span className={styles.titleText}>{item.title}</span> // Desktop view
            )}
          </li>
        ))}
      </ul>
      {!isMobile && (
        <ul className={styles.contentColumn}>
          {items.map((item, index) => (
            <li key={index} className={styles.contentItem}>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      {isMobile && activeIndex !== null && (
        <div className={styles.accordionContent}>
          <p>{items[activeIndex].content}</p>{' '}
          {/* Display content of the active item */}
        </div>
      )}
    </div>
  );
};

export default ListAccordion;
