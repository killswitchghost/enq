import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/Layout';
import ListImage from '@shared/ListImage/ListImage';
import Accordion from '@shared/Accordion/Accordion';
import Pagination from '@shared/Pagination/Pagination';

const Components = () => {
  const [currentPage1, setCurrentPage1] = useState(1);

  const handlePageChange1 = (page: number) => {
    setCurrentPage1(page);
  };

  return (
    <Layout>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Accordion url='/data/homeSolutionsData.json' />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <ListImage />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Pagination
                totalPages={10}
                currentPage={currentPage1}
                onPageChange={handlePageChange1}
                previousLabel='Prev'
                nextLabel='Next'
                className='custom-pagination'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Components;
