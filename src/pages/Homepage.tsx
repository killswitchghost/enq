import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/layouts/Layout';

import ScrollingLogos from '@components/sections/ScrollingLogos/ScrollingLogos';

import { SwiperSlide } from 'swiper/react';
import CustomSwiper from '@shared/Swiper/CustomSwiper';

import CustomizeExp from '@components/sections/CustomizeExperience/CustomizeExperience';

import FadeInText from '@shared/FadeInText/FadeInText';
import TitleLine from '@shared/TitleLine/TitleLine';
import GridGallery from '@components/shared/GridGallery/GridGallery';
import Accordion from '@components/shared/Accordion/Accordion';

import BgImageGrow from '@components/sections/BgImageGrow/BgImageGrow';

const HomePage = () => {
  const fadeinText =
    "<h2>We're a digital agency committed to building strong partnerships while delivering innovative & creative solutions.</h2>";
  const cardsData = [
    {
      id: 1,
      title: 'Clackamas Community College',
      description:
        'Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement',
      imageUrl: 'https://picsum.photos/480/480?random=1',
      meta: 'design, ux research, sitefinity',
      linkUrl: 'CaseStudy'
    },
    {
      id: 2,
      title: 'Sturgis Bank',
      description:
        'Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication',
      imageUrl: 'https://picsum.photos/480/480?random=2',
      meta: 'test, test',
      linkUrl: 'CaseStudy'
    },
    {
      id: 3,
      title: 'Sturgis Bank',
      description:
        'Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication',
      imageUrl: 'https://picsum.photos/480/480?random=2',
      meta: 'test, test',
      linkUrl: 'CaseStudy'
    }
  ];
  const prodData = [
    {
      id: 1,
      title: 'Likely Link',
      description:
        'Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement',
      imageUrl: 'https://picsum.photos/773/435?random=1',
      meta: 'design, ux research, sitefinity',
      linkUrl: 'CaseStudy'
    }
  ];
  return (
    <Layout>
      <section className='hero pt-60'>
        <div className='hero-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 order-lg-2'>
                <div className='img-animate mb-4 mb-lg-0'>
                  <figure className='figure aos-init' data-aos='img-reveal'>
                    <Image
                      src='https://picsum.photos/350/350?random=1'
                      alt='overlay-image'
                      width='350'
                      height='350'
                    />
                  </figure>
                </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  <h1>Our employees have spoken ... again!</h1>
                  <p>
                    We are thrilled that our employees get to be recognized (for
                    the third year in a row) for the hard work and teamwork
                    they&apos;ve put in to make Enqbator a rewarding, fun, and
                    GREAT place to work!
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomizeExp />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Who we are'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <FadeInText htmlContent={fadeinText} />
              <a href='#' className='link-circle my-5' aria-label='Components'>
                <span className='underline'>
                  <span>Learn More</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ScrollingLogos />

      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Our Expertise'
                description='<p>This is some placeholder content for this section.</p><a href="CaseStudies" class="underline"><span>Learn more</span></a>'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <Accordion url='/data/homeSolutionsData.json' />
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              {' '}
              <TitleLine
                title='Recent Work'
                description='<p>This is some placeholder content for this section.</p><a href="CaseStudies" class="underline"><span>View All</span></a>'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <div className='stagered-grid'>
                <GridGallery cards={cardsData} numColumns={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              {' '}
              <TitleLine
                title='Featured Product'
                description='<p>This is some placeholder content for this section.</p><a href="CaseStudies" class="underline"><span>View All</span></a>'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              {' '}
              <GridGallery cards={prodData} numColumns={1} />
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Insights'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              {' '}
              <CustomSwiper
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                navigationEnabled={true}
                paginationClickable={true}
                scrollbarDraggable={true}
                //className={styles.InsightSwiper}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                  },
                  992: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                  },
                  1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 40
                  }
                }}
              >
                <SwiperSlide>
                  <Link
                    href='#'
                    className='card'
                    data-work-id='4'
                    data-cursor='pointer2'
                  >
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor='pointer2'
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>

                      <h5 className={`card-title`}>
                        <span className='underline'>
                          <span>Enqbator partners The Henry Ford</span>
                        </span>
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href='#'
                    className='card'
                    data-work-id='4'
                    data-cursor='pointer2'
                  >
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor='pointer2'
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>

                      <h5 className={`card-title`}>
                        <span className='underline'>
                          <span>
                            Enqbator partners The Henry Ford and Progress to
                            speak at 2024 Martech World Conference
                          </span>
                        </span>
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href='#'
                    className='card'
                    data-work-id='4'
                    data-cursor='pointer2'
                  >
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=2'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor='pointer2'
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h5
                        className={`
                        card-title`}
                      >
                        <span className='underline'>
                          <span>
                            A look back at Enqbator&apos;s Successful Webinar
                            with A look back at Enqbator...
                          </span>
                        </span>
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href='#'
                    className='card'
                    data-work-id='4'
                    data-cursor='pointer2'
                  >
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=3'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor='pointer2'
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h5
                        className={`
                        card-title`}
                      >
                        <span className='underline'>
                          <span>
                            Enqbator helps Clackamas Community College transform
                            its digital engagement
                          </span>
                        </span>
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href='#'
                    className='card'
                    data-work-id='4'
                    data-cursor='pointer2'
                  >
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=4'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor='pointer2'
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h5
                        className={`
                        card-title`}
                      >
                        <span className='underline'>
                          <span>
                            Enqbator once again takes home multiple Horizon
                            Interactive Awards
                          </span>
                        </span>
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
              </CustomSwiper>
            </div>
          </div>
        </div>
      </section>
      <BgImageGrow />
    </Layout>
  );
};

export default HomePage;
