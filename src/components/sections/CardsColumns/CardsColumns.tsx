import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sparkle from '../../../utils/Sparkle';
import GrowLine from '../../shared/GrowLine/GrowLine';
import './_CardsColumns.scss';

const CardsColumns = () => {






  return (
    <section className="py-8 blob yellow-blue left middle">
      <div className="container">


        <div className="row">
          <div className="col-lg-4">
            <div className="sticky-side">
              <div className="sparkles">
                <div className="sparkle sky"> <Sparkle className="large-star" size={20} /></div>
                <div className="sparkle purple"> <Sparkle className="small-star" size={15} /></div>
              </div>
<GrowLine className="grad-vert-pink-green" />
              <div className="box-side">


     <p className="h3">Recent Work</p>
<p>This is some placeholder content for this section.</p>



              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cards-2-col">
<div>
<a href="#" className="card" data-work-id="2" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <img src="https://picsum.photos/320/480?random=1" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="320" height="480"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>
    <div className="card-meta">test, test</div>
  </div>
</a>
</div>
<div>
<a href="#" className="card" data-work-id="2" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <img src="https://picsum.photos/320/480?random=2" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="320" height="480"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>
    <div className="card-meta">test, test</div>
  </div>
</a>
</div>
<div>
<a href="#" className="card" data-work-id="2" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <img src="https://picsum.photos/320/480?random=3" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="320" height="480"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>
    <div className="card-meta">test, test</div>
  </div>
</a>
</div>
<div>
<a href="#" className="card" data-work-id="2" data-cursor="pointer2">
  <figure className="card-img aos-init aos-animate" data-aos="img-reveal">
    <img src="https://picsum.photos/320/480?random=4" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="320" height="480"/>
  </figure>
  <div className="card-body px-0">
    <h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4>
    <p className="card-desc">This is some placeholder content for the first post.</p>
    <div className="card-meta">test, test</div>
  </div>
</a>
</div>
            </div>





          </div>
        </div>
      </div>

    </section>
  );
};

export default CardsColumns;
