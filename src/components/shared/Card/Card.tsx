

import React, { ReactNode } from 'react';
import './_Card.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>

{children}


    </div>
  );
};


export default Card;
