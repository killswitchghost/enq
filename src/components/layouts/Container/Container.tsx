

import React, { ReactNode } from 'react';
import './_Container.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<SectionProps> = ({ children, className }) => {
  return (

      <div className="container">

{children}

</div>

  );
};

export default Container;
