

import React, { ReactNode } from 'react';
import './_Column.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Column: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
{children}
</div>


  );
};

export default Column;
