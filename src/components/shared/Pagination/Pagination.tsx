import React from 'react';
import styles from './_Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  disabled = false
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (page: number) => {
    if (!disabled && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav
      aria-label='Page navigation'
      className={`${styles.navPagination} nav-pagination`}
    >
      <ul className={`${styles.Pagination} pagination`}>
        <li
          className={`${styles.pageItem} page-item ${
            currentPage === 1 || disabled ? styles.disabled : ''
          }`}
        >
          <a
            className={`${styles.pageLink} page-link ${styles.prev}`}
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handleClick(currentPage - 1);
            }}
          >
            <i className='bi bi-chevron-left'></i>
          </a>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} page-item ${
              currentPage === page ? styles.active : ''
            }`}
          >
            <a
              className={`${styles.pageLink} page-link`}
              href='#'
              onClick={(e) => {
                e.preventDefault();
                handleClick(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}

        <li
          className={`${styles.pageItem} page-item ${
            currentPage === totalPages || disabled ? styles.disabled : ''
          }`}
        >
          <a
            className={`${styles.pageLink} page-link ${styles.next}`}
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handleClick(currentPage + 1);
            }}
          >
            <i className='bi bi-chevron-right'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
