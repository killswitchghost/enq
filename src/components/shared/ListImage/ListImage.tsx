'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './_ListImage.module.scss';

const names = [
  {
    name: 'Alice Johnson',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=1'
  },
  {
    name: 'Bob Smith',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=2'
  },
  {
    name: 'Charlie Brown',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=3'
  },
  {
    name: 'Diana Ross',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=4'
  },
  {
    name: 'Ethan Hunt',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=5'
  },
  {
    name: 'Fiona Apple',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=6'
  },
  {
    name: 'George Clooney',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=7'
  },
  {
    name: 'Hannah Montana',
    title: 'CEO and President',
    desc: 'Enjoys bird watching',
    image: 'https://picsum.photos/262/466?random=8'
  }
];

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.listImageMod}>
      <div className={styles.listImgCol1}>
        <ul className={styles.listImage}>
          {names.map((item, index) => (
            <li
              key={item.name}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
              className={`${styles.listItem}`}
            >
              <div className={styles.listItemImg}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={262}
                  height={466}
                />
              </div>

              <strong className={styles.listName}>{item.name}</strong>
              <p>
                <span className={styles.listTitle}>{item.title}, </span>
                <span className={styles.listDesc}>{item.desc}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listImgCol2}>
        <div className={styles.listAltImg}>
          {names.map((item, index) => (
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              fill
              className={`${styles.image} image-alt ${
                index === activeIndex ? styles.activeImage : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
