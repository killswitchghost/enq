// import React, { ReactNode } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './_CustomSwiper.module.scss';
// interface Breakpoints {
//   [width: number]: {
//     slidesPerView: number;
//     spaceBetween: number;
//   };
// }
// interface CustomSwiperProps {
//   spaceBetween?: number;
//   slidesPerView?: number | 'auto';
//   loop?: boolean;
//   navigationEnabled?: boolean;
//   paginationClickable?: boolean;
//   scrollbarDraggable?: boolean;
//   className?: string; // Optional string type
//   children: ReactNode;
//   breakpoints?: Breakpoints; // Add breakpoints property
// }

// const CustomSwiper: React.FC<CustomSwiperProps> = ({
//   children,
//   spaceBetween = 20,
//   slidesPerView = 2.5,
//   loop = false,
//   navigationEnabled = true,
//   paginationClickable = true,
//   scrollbarDraggable = true,
//   className = '' // Default empty string for className
// }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={spaceBetween}
//       slidesPerView={slidesPerView}
//       loop={loop}
//       navigation={navigationEnabled ? {} : false}
//       pagination={{ clickable: paginationClickable }}
//       scrollbar={{ draggable: scrollbarDraggable }}
//       className={`swiper-container my-custom-id ${className}`} // Combine the passed className
//       breakpoints={{
//         639: {
//           slidesPerView: 1
//         },
//         640: {
//           slidesPerView: slidesPerView
//         }
//       }}
//     >
//       {children}
//     </Swiper>
//   );
// };

// export default CustomSwiper;
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
  className?: string; // Optional string type
  children: ReactNode;
  breakpoints?: Breakpoints; // Add breakpoints property
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  spaceBetween = 20,
  slidesPerView = 2.5,
  loop = false,
  navigationEnabled = true,
  paginationClickable = true,
  scrollbarDraggable = true,
  className = '' // Default empty string for className
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
