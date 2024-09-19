// import React, { useState } from 'react';
// import styles from './_HoverExpand.module.scss'; // Assuming you're using CSS modules

// interface HoverItemProps {
//   number: string;
//   title: string;
//   description: string;
// }

// const HoverItem: React.FC<HoverItemProps> = ({
//   number,
//   title,
//   description
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`${styles.hoverItem} ${isHovered ? styles.expanded : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={styles.labels}>
//         <p className={styles.number}>{number}</p>
//         <p className={styles.title}>{title}</p>
//       </div>
//       <div className={styles.content}>
//         <p className={styles.paragraph}>{description}</p>
//       </div>
//     </div>
//   );
// };

// const HoverExpand: React.FC = () => {
//   const items = [
//     {
//       number: '01',
//       title: 'Research',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     },
//     {
//       number: '02',
//       title: 'Define',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     },
//     {
//       number: '03',
//       title: 'Prototype',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     },
//     {
//       number: '04',
//       title: 'Build',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     },
//     {
//       number: '05',
//       title: 'QA test',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     },
//     {
//       number: '06',
//       title: 'Launch',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
//     }
//   ];

//   return (
//     <div className={styles.hoverExpandContainer}>
//       {items.map((item, index) => (
//         <HoverItem
//           key={index}
//           number={item.number}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default HoverExpand;
import React, { useState } from "react";
import styles from "./_HoverExpand.module.scss"; // Assuming you're using CSS modules

interface HoverItemProps {
  number: string;
  title: string;
  description: string;
}

const HoverItem: React.FC<HoverItemProps> = ({
  number,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.hoverItem} ${isHovered ? styles.expanded : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.labels}>
        <p className={styles.number}>{number}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  );
};

interface HoverExpandProps {
  items: HoverItemProps[]; // The prop is an array of HoverItemProps
}

const HoverExpand: React.FC<HoverExpandProps> = ({ items }) => {
  return (
    <div className={styles.hoverExpandContainer}>
      {items.map((item, index) => (
        <HoverItem
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default HoverExpand;
