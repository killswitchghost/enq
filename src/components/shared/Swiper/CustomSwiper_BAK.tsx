import React, { ReactNode } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './_CustomSwiper.module.scss';

interface Breakpoints {
  [width: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
}

interface CustomSwiperProps {
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  navigationEnabled?: boolean;
  paginationClickable?: boolean;
  scrollbarDraggable?: boolean;
  className?: string;
  children: ReactNode;
  breakpoints?: Breakpoints;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  spaceBetween = 20,
  slidesPerView = 2.5,
  loop = false,
  navigationEnabled = true,
  paginationClickable = true,
  scrollbarDraggable = true,
  className = ''
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      navigation={navigationEnabled ? {} : false}
      pagination={{ clickable: paginationClickable }}
      scrollbar={{ draggable: scrollbarDraggable }}
      className={`${styles.customSwiper} swiper-container `}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
