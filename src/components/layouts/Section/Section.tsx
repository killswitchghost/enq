

import React, { ReactNode } from 'react';
import './_Section.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section className={`section ${className}`} id={id}>


{children}


    </section>
  );
};


export default Section;
