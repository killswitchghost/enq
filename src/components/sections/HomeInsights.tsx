import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Cards from '../shared/Cards/CardsXXX';
import Sparkle from '../../utils/Sparkle';
import GrowLine from '../shared/GrowLine/GrowLine';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomSwiper from '../shared/Swiper/CustomSwiper';
interface IntroItem {
  introId: number;
  content: string;
}

interface QuoteItem {
  cardId: number;
  image: string;
  title: string;
  content: string;
  meta: string;
}

interface HomeInsightsData {
  intro: IntroItem[];
  quotes: QuoteItem[];
}

const HomeInsights = () => {



  return (
    <section className="py-8 blob purple-red right middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sticky-side">
              <div className="sparkles">
                <div className="sparkle sky"> <Sparkle className="large-star" size={20} /></div>
                <div className="sparkle purple"> <Sparkle className="small-star" size={15} /></div>
              </div>
<GrowLine className="grad-vert-purple-red" />
              <div className="box-side">
     <p className="h3">Insights</p>
<p>This is some placeholder content for this section.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">



<CustomSwiper
  spaceBetween={50}
  slidesPerView={2.5}
  loop={true}
  navigationEnabled={true}
  paginationClickable={true}
  scrollbarDraggable={true}
>
  <SwiperSlide><Link href="#" className="card" data-work-id="4" data-cursor="pointer2"><figure className="card-img aos-init" data-aos="img-reveal"><Image src="https://picsum.photos/350/350?random=1" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="350" height="350"/></figure><div className="card-body px-0"><h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4></div></Link></SwiperSlide>
  <SwiperSlide><Link href="#" className="card" data-work-id="4" data-cursor="pointer2"><figure className="card-img aos-init" data-aos="img-reveal"><Image src="https://picsum.photos/350/350?random=2" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="350" height="350" /></figure><div className="card-body px-0"><h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4></div></Link></SwiperSlide>
  <SwiperSlide><Link href="#" className="card" data-work-id="4" data-cursor="pointer2"><figure className="card-img aos-init" data-aos="img-reveal"><Image src="https://picsum.photos/350/350?random=3" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="350" height="350" /></figure><div className="card-body px-0"><h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4></div></Link></SwiperSlide>
  <SwiperSlide><Link href="#" className="card" data-work-id="4" data-cursor="pointer2"><figure className="card-img aos-init" data-aos="img-reveal"><Image src="https://picsum.photos/350/350?random=4" alt="overlay-image" className="card-img-top" data-cursor="pointer2" width="350" height="350" /></figure><div className="card-body px-0"><h4 className="card-title"><span className="underline"><span>Placeholder Title</span></span></h4></div></Link></SwiperSlide>
</CustomSwiper>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
