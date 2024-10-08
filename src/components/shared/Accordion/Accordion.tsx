import React, { useEffect, useState } from 'react';
import styles from './_Accordion.module.scss';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface PlaceholderData {
  accordionItems: AccordionItem[];
}

interface AccordionProps {
  url: string;
}

const Accordion: React.FC<AccordionProps> = ({ url }) => {
  const [data, setData] = useState<PlaceholderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: PlaceholderData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Could not fetch data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.accordionSolutions} accordion`}>
      {data.accordionItems.map((item) => (
        <div className={styles.accordionItem} key={item.id}>
          <h2 className={styles.accordionHeader}>
            <button
              className={`${styles.accordionButton} collapsed underline`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${item.id}`}
              aria-expanded='false'
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className='accordion-collapse collapse'
            aria-labelledby={`heading${item.id}`}
            data-bs-parent='#accordionSolutions'
          >
            <div className={`${styles.accordionBody} accordion-body`}>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
