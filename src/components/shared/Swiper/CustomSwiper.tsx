import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './_CustomSwiper.module.scss';

interface CustomSwiperProps extends SwiperProps {
  navigation?: boolean | { nextEl: string; prevEl: string };
  pagination?: { clickable: boolean };
  scrollbar?: { draggable: boolean };
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  navigation,
  pagination,
  scrollbar,
  autoplay,
  ...props
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation={navigation}
      pagination={pagination}
      scrollbar={scrollbar}
      autoplay={autoplay}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
