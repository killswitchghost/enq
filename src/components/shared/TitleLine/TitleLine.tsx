// import React, { useState, useEffect } from 'react';

// interface TitleLineProps {
//   title: string;
//   description: string;
//   lineClass?: string;
//   aosDelay?: string;
//   aosDuration?: string;
// }

// const gradientClasses = [
//   'grad-vert-purple-blue',
//   'grad-vert-lime-yellow',
//   'grad-vert-lime-green',
//   'grad-vert-pink-green',
//   'grad-vert-red-yellow',
//   'grad-vert-pink-lime',
//   'grad-vert-blue-yellow',
//   'grad-vert-purple-sky',
//   'grad-vert-purple-red',
//   'grad-vert-green-blue'
// ];

// const TitleLine: React.FC<TitleLineProps> = ({
//   title,
//   description,
//   lineClass,
//   aosDelay = '0',
//   aosDuration = '1000'
// }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [randomLineClass, setRandomLineClass] = useState(lineClass || '');

//   useEffect(() => {
//     setIsMounted(true);

//     if (!lineClass) {
//       const randomClass =
//         gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
//       setRandomLineClass(randomClass);
//     }
//   }, [lineClass]);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className='sticky-side'>
//       <div className='title-line-container'>
//         <div className='grow-line-box'>
//           <div
//             className={`grow-line ${randomLineClass}`}
//             data-aos='grow-animation'
//             data-aos-delay={aosDelay}
//             data-aos-duration={aosDuration}
//           />
//         </div>
//         <div className='box-side'>
//           <p className='h3'>{title}</p>
//           <p dangerouslySetInnerHTML={{ __html: description }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TitleLine;
import React, { useState, useEffect } from 'react';
import GrowLine from '@shared/GrowLine/GrowLine';

interface TitleLineProps {
  title: string;
  description: string;
  lineClass?: string;
  aosDelay?: string;
  aosDuration?: string;
}

const TitleLine: React.FC<TitleLineProps> = ({ title, description }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='sticky-side'>
      <div className='title-line-container'>
        <div className='grow-line-box'>
          <GrowLine aosDelay='500' aosDuration='1500' />
        </div>
        <div className='box-side'>
          <p className='h3'>{title}</p>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default TitleLine;
