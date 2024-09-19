import React, { ReactNode } from 'react';
import './_Eyebrow.module.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Eyebrow: React.FC<SectionProps> = ({ children, className }) => {
  return <p className={`eyebrow ${className}`}>{children}</p>;
};

export default Eyebrow;
