import React, { useState } from 'react';
import styles from './_HoverExpand.module.scss';

interface HoverItemProps {
  number: string;
  title: string;
  description: string;
}

const HoverItem: React.FC<HoverItemProps> = ({
  number,
  title,
  description
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.hoverItem} ${isHovered ? styles.expanded : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.labels}>
        <p className={styles.number}>{number}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  );
};

interface HoverExpandProps {
  items: HoverItemProps[];
}

const HoverExpand: React.FC<HoverExpandProps> = ({ items }) => {
  return (
    <div className={styles.hoverExpandContainer}>
      {items.map((item, index) => (
        <HoverItem
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default HoverExpand;
