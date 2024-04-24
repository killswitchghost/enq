import React, { useState, useEffect } from 'react';
import './_ExpandBox.scss';
interface ExpandBoxProps {
  title: string;
  children: React.ReactNode;
}

const ExpandBox: React.FC<ExpandBoxProps> = ({ title, children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setIsMobile(window.innerWidth < mobileBreakpoint);
      setIsOpen(window.innerWidth >= mobileBreakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpen = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="expand-box" onClick={toggleOpen}>
      <div className="expand-box-title"><h3 className="h6">{title}</h3></div>
      {isOpen && <div className="expand-content">{children}</div>}
    </div>
  );
};

export default ExpandBox;
