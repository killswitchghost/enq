import React, { useState, useEffect } from 'react';
import styles from './_ExpandBox.module.scss';
import classNames from 'classnames';

interface ExpandBoxProps {
  title: string;
  content: string;
}

const ExpandBox: React.FC<ExpandBoxProps> = ({ title, content }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsExpanded(false);
      } else {
        setIsMobile(false);
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={classNames(styles.expandBox, {
        [styles.expanded]: isExpanded,
        [styles.collapsed]: !isExpanded
      })}
    >
      <div className={styles.expandBoxTitle} onClick={toggleExpand}>
        {title}
      </div>
      {isExpanded && (
        <div
          className={styles.expandBoxContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default ExpandBox;
