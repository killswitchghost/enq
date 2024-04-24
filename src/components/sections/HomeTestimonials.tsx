import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeQuotesData from '../../../public/data/homeTestimonialsData.json';
import Sparkle from '../../utils/Sparkle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GrowLine from '../shared/GrowLine/GrowLine';


import 'swiper/css';
import 'swiper/css/navigation';



interface IntroItem {
  introId: number;
  content: string;
}

interface QuoteItem {
  cardId: number;
  image: string;
  content: string;
  author: string;
  meta: string;
}


interface HomeQuotesData {
  intro: IntroItem[];
  quotes: QuoteItem[];
}


// Correctly type the imported JSON data
  const data: HomeQuotesData = homeQuotesData as HomeQuotesData;

const HomeTestimonials = () => {
    return (
        <section className="full-height blob blue-yellow right center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="sticky-side">
                            <div className="sparkles">
                                <div className="sparkle sky"> <Sparkle className="large-star" size={20} /></div>
                                <div className="sparkle purple"> <Sparkle className="small-star" size={15} /></div>
                            </div>
<GrowLine className="grad-vert-lime-green" />
                            <div className="box-side">
     <p className="h3">Testimonials</p>
<p>This is some placeholder content for this section.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
<div className="testimonials-wrap">
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
>
  {data.quotes.map((quote) => (
    <SwiperSlide key={quote.cardId}>
      <div className="quote">
<Image src={quote.image} alt={quote.meta} className="quote-img"  width="100" height="48"/>
        <h2 className="quote-text">{quote.image}</h2>
        <h2 className="quote-author">{quote.content}</h2>
<p className="quote-author">&#8212; {quote.author}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


</div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
