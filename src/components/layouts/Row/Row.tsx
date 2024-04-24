

import React, { ReactNode } from 'react';
import './_Row.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (

      <div className="row gx-5">

{children}

</div>

  );
};

export default Section;
