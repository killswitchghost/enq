import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import styles from './_Testimonials.module.scss';
import CustomSwiper from '@components/shared/Swiper/CustomSwiper';
import ArrowIcon from '@components/shared/ArrowIcon/ArrowIcon';
import 'swiper/css';

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.testimonialsWrap}>
      <CustomSwiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   }
        // }}
      >
        <SwiperSlide className={styles.slideActive}>
          {' '}
          <figure>
            <blockquote className={styles.quoteText}>
              &quot;... Enqbator team for nearly a decade now and I can&apos;t
              say enough good things about the work they have done to help us
              build our company websites...&quot;
            </blockquote>
            <hr />
            <footer>
              <div className={styles.quoteAuthorWrap}>
                <Image
                  alt='Kathy Divis'
                  width='40'
                  height='40'
                  className={`${styles.quoteAuthorImg}`}
                  src='/img/testimonials/author.webp'
                />
                <div>
                  <cite className={styles.quoteAuthor}>Kathy Divis</cite>
                  <cite className={styles.quoteTitle}>President</cite>
                </div>
              </div>
              <Image
                alt='Image description 2'
                width='44'
                height='50'
                className={`${styles.quoteLogoImg} invert`}
                src='/img/logos/crh.png'
              />
            </footer>
          </figure>
        </SwiperSlide>
        <SwiperSlide className={styles.slideActive}>
          {' '}
          <figure>
            <blockquote className={styles.quoteText}>
              &quot;...We are working with Enqbator on several projects. They
              have a very professional and skilled staff. I would highly
              recommend...&quot;
            </blockquote>
            <hr />
            <footer>
              <div className={styles.quoteAuthorWrap}>
                <Image
                  alt='Kathy Divis'
                  width='40'
                  height='40'
                  className={`${styles.quoteAuthorImg}`}
                  src='/img/testimonials/author.webp'
                />
                <div>
                  <cite className={styles.quoteAuthor}>Kathy Divis</cite>
                  <cite className={styles.quoteTitle}>President</cite>
                </div>
              </div>
              <Image
                alt='Image description 2'
                width='44'
                height='50'
                className={`${styles.quoteLogoImg} invert`}
                src='/img/logos/crh.png'
              />
            </footer>
          </figure>
        </SwiperSlide>
        <SwiperSlide className={styles.slideActive}>
          {' '}
          <figure>
            <blockquote className={styles.quoteText}>
              &quot;...Very conscientious and focused on the project. Always
              available to help assist with troubleshooting...&quot;
            </blockquote>
            <hr />
            <footer>
              <div className={styles.quoteAuthorWrap}>
                <Image
                  alt='Kathy Divis'
                  width='40'
                  height='40'
                  className={`${styles.quoteAuthorImg}`}
                  src='/img/testimonials/author.webp'
                />
                <div>
                  <cite className={styles.quoteAuthor}>Kathy Divis</cite>
                  <cite className={styles.quoteTitle}>President</cite>
                </div>
              </div>
              <Image
                alt='Image description 2'
                width='44'
                height='50'
                className={`${styles.quoteLogoImg} invert`}
                src='/img/logos/crh.png'
              />
            </footer>
          </figure>
        </SwiperSlide>
      </CustomSwiper>
      <div className={`${styles.swiperNavigation} swiper-nav`}>
        <button className='swiper-button-prev'>
          <ArrowIcon />
        </button>
        <button className='swiper-button-next'>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

// ('...We are working with Enqbator on several projects. They have a very professional and skilled staff. I would highly recommend...');

export default Testimonials;
