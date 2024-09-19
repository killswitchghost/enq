import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/Layout';
import ListImage from '@shared/ListImage/ListImage';
import Accordion from '@components/shared/Accordion/Accordion';

const Components = () => {
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
    </Layout>
  );
};

export default Components;
