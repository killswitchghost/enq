import React from 'react';
import GrowLine from './GrowLine/GrowLine';
import Link from 'next/link';


const StickySide = () => {
  return (
    <div className="sticky-side">

      <GrowLine />

      <div className="box-side">
        <h6>Who we are</h6>
        <p>This is placeholder text designed to fill the visual space.</p>


        <Link href="/learn-more" passHref>
          <a className="btn btn-outline">Learn More</a>
        </Link>


      </div>
    </div>
  );
};

export default StickySide;
