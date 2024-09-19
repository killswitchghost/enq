import React, { useState, useEffect } from 'react';
import styles from './_ExpandBox.module.scss'; // Assuming you're using CSS Modules
import classNames from 'classnames'; // Optional: for easier className management

interface ExpandBoxProps {
  title: string; // Dynamic title
  content: string; // Dynamic HTML content
}

const ExpandBox: React.FC<ExpandBoxProps> = ({ title, content }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsExpanded(false); // Collapse by default on mobile
      } else {
        setIsMobile(false);
        setIsExpanded(true); // Always expanded on desktop
      }
    };

    // Run on initial load
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle expand/collapse on mobile
  const toggleExpand = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={classNames(styles.expandBox, {
        [styles.expanded]: isExpanded, // Add 'expanded' class when box is expanded
        [styles.collapsed]: !isExpanded // Add 'collapsed' class when box is collapsed
      })}
    >
      <div className={styles.expandBoxTitle} onClick={toggleExpand}>
        {title} {/* Dynamic title */}
      </div>
      {isExpanded && (
        <div
          className={styles.expandBoxContent}
          dangerouslySetInnerHTML={{ __html: content }} // Render dynamic HTML content
        />
      )}
    </div>
  );
};

export default ExpandBox;
