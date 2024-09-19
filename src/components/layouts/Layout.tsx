import React, { ReactNode, useEffect } from 'react';

import NavHeader from '@/src/components/sections/NavHeader/NavHeader';
import Footer from '@/src/components/sections/Footer/Footer';
import LetsTalk from '@components/sections/LetsTalk/LetsTalk';

import BackTop from '../shared/BackTop/BackTop';
import Cursor from '@/src/components/shared/Cursor/Cursor';
import GradientSpheres from '@components/shared/GradientSpheres/GradientSpheres';
import SparkleContainer from '@components/shared/Sparkle/Sparkle';
import Testimonials from '@components/sections/Testimonials/Testimonials';
import TitleLine from '@shared/TitleLine/TitleLine';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Maybe? <SparkleContainer amount={3} /> */}
      <GradientSpheres />
      <Cursor />
      <BackTop />
      <NavHeader />
      <div className='content-wrapper'>{children}</div>
      <hr />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Testimonials'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default Layout;
