import React, { useState } from 'react';
import Image from 'next/image';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './_Testimonials.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const quotes = [
  {
    cardId: 1,
    imageLogo: '/img/logos/crh.png',
    metaLogo: 'Image description 1',
    content:
      '"...Enqbator is flexible and fast paced. Without a partner who worked in a similar manner, we wouldn’t have been able to complete our project as quickly as we did..." ',
    authorImg: '/img/testimonials/author.webp',
    metaAuthorImg: 'Kathy Divis',
    author: 'Dianne Gross',
    title: 'Former Chief Communications Officer & Director of Marketing'
  },
  {
    cardId: 2,
    imageLogo: '/img/logos/crh.png',
    metaLogo: 'Image description 2',
    content:
      '... Enqbator team for nearly a decade now and I can’t say enough good things about the work they have done to help us build our company websites...',
    authorImg: '/img/testimonials/author.webp',
    metaAuthorImg: 'Kathy Divis',
    author: 'Kathy Divis',
    title: 'President'
  },
  {
    cardId: 3,
    imageLogo: '/img/logos/crh.png',
    metaLogo: 'Image description 3',
    content: 'Highly recommend Enqbator for their expertise.',
    authorImg: '/img/testimonials/author.webp',
    metaAuthorImg: 'Kathy Divis',
    author: 'Kathy Divis',
    title: 'President'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.testimonialsWrap}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={quote.cardId} className={styles.slideActive}>
            <div className={styles.quote}>
              <figure>
                <blockquote className={styles.quoteText}>
                  {quote.content}
                </blockquote>
                <hr />
                <footer>
                  <div className={styles.quoteAuthorWrap}>
                    <Image
                      src={quote.authorImg}
                      alt={quote.metaAuthorImg}
                      className={styles.quoteAuthorImg}
                      width={40}
                      height={40}
                    />
                    <div>
                      <cite className={styles.quoteAuthor}>{quote.author}</cite>
                      <cite className={styles.quoteTitle}>{quote.title}</cite>
                    </div>
                  </div>
                  <Image
                    src={quote.imageLogo}
                    alt={quote.metaLogo}
                    className={`${styles.quoteLogoImg} invert`}
                    width={44}
                    height={50}
                  />
                </footer>
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
