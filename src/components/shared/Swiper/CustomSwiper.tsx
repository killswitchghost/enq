import React, { ReactNode } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react'; // Import SwiperProps for breakpoints typing
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './_CustomSwiper.module.scss';

interface CustomSwiperProps {
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  navigationEnabled?: boolean;
  paginationClickable?: boolean;
  scrollbarDraggable?: boolean;
  className?: string;
  children: ReactNode;
  breakpoints?: { [width: number]: SwiperProps }; // Use SwiperProps for breakpoints
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  spaceBetween = 30,
  slidesPerView = 2.5,
  loop = false,
  navigationEnabled = true,
  paginationClickable = true,
  scrollbarDraggable = true,
  className = '', // Default empty string for className
  breakpoints = {} // Default to empty object for breakpoints
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
      className={`${styles.customSwiper} swiper-container ${className}`} // Combine passed className and styles
      breakpoints={breakpoints} // Pass breakpoints with SwiperProps type
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
