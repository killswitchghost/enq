import React from 'react';
import Link from 'next/link';
import styles from './_Breadcrumb.module.scss';

const Breadcrumb: React.FC = () => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className={styles.breadcrumb}>
        <li className={styles.breadcrumbItem}>
          <Link href='/' className={`${styles.breadcrumbLink} underline`}>
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.breadcrumbItem}>
          <Link
            href='/category'
            className={`${styles.breadcrumbLink} underline`}
          >
            <span>Category</span>
          </Link>
        </li>
        <li
          className={`${styles.breadcrumbItem} ${styles.active}`}
          aria-current='page'
        >
          Current Page
        </li>
      </ol>
    </nav>
  );
};

// Export the component to be used in other files
export default Breadcrumb;
