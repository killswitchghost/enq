import React from 'react';
import styles from './_GridGallery.module.scss';
import Image from 'next/image';

interface GridGalleryProps {
  cards: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    meta: string;
    linkUrl: string;
  }[];
  numColumns: number;
}

const GridGallery: React.FC<GridGalleryProps> = ({ cards, numColumns }) => {
  const columnClass =
    numColumns === 1
      ? styles.column1
      : numColumns === 2
      ? styles.column2
      : styles.column3;

  return (
    <div className={`${styles.gridGallery} ${columnClass}`}>
      <div className={`${styles.cardsColumns}`}>
        {cards.map((card) => (
          <div key={card.id} className={`${styles.cardBox} card-box`}>
            <a href={card.linkUrl} className={`${styles.recentWorkCard} card`}>
              <figure
                className='card-img aos-init aos-animate'
                data-aos='img-reveal'
              >
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  className={`${styles.cardImage}`}
                  width={292}
                  height={390}
                  layout='responsive'
                  data-cursor='pointer2'
                />
              </figure>
              <div className='card-body px-0'>
                <h4 className='card-title'>
                  <span className='underline'>
                    <span>{card.title}</span>
                  </span>
                </h4>
                <p className='card-desc'>{card.description}</p>
                <div className='card-meta'>{card.meta}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;
