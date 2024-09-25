import React from 'react';
import styles from './_Breadcrumb.module.scss'; // Import your custom styles

// Define the functional component
const Breadcrumb: React.FC = () => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className={styles.breadcrumb}>
        <li className={styles.breadcrumbItem}>
          <a href='/' className={`${styles.breadcrumbLink} underline`}>
            <span>Home</span>
          </a>
        </li>
        <li className={styles.breadcrumbItem}>
          <a href='/category' className={`${styles.breadcrumbLink} underline`}>
            <span>Category</span>
          </a>
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
