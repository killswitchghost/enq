import React from 'react';
import './_HeroFull.scss';


const HeroFull = () => {

  return (
    <div
      className='hero-img-full aos-init aos-animate'
      data-cursor='pointer2'
      data-aos='full-hero-reveal'
      style={{ backgroundImage: 'url(https://picsum.photos/1200/800?random=1)' }}
    >
      xxx
    </div>
  );
};

export default HeroFull;