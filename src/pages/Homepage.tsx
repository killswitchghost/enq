import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/layouts/Layout';

import ScrollingLogos from '@components/sections/ScrollingLogos/ScrollingLogos';
import GrowLine from '@shared/GrowLine/GrowLine';
import { SwiperSlide } from 'swiper/react';
import CustomSwiper from '@shared/Swiper/CustomSwiper';

// import CustomizeExp from '@components/sections/CustomizeExperience/CustomizeExperience';
import AutoPlayVideo from '@components/sections/AutoPlayVideo/AutoPlayVideo';
import FadeInText from '@shared/FadeInText/FadeInText';
import TitleLine from '@shared/TitleLine/TitleLine';
import GridGallery from '@components/shared/GridGallery/GridGallery';
import Accordion from '@components/shared/Accordion/Accordion';

//import BgImageGrow from '@components/sections/BgImageGrow/BgImageGrow';

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
      <section className='stretch-image right'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-img'>
              <div className='set-bg'>
                <div className='img-animate'>
                  <figure className='figure aos-init' data-aos='img-reveal'>
                    <div
                      className='bg-img'
                      style={{
                        backgroundImage:
                          'url(https://picsum.photos/900/480?random=2)'
                      }}
                    ></div>
                  </figure>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-text'>
              <div className='p-3'>
                <div className='grow-line-box'>
                  <GrowLine aosDelay='500' aosDuration='1500' />
                </div>
                <h1>Stretch image outside container sample</h1>
                <p className='lead'>
                  Sample Lead Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  pariatur mollitia ducimus magnam exercitationem quaerat
                  aliquid animi blanditiis illo ex corporis enim quod, assumenda
                  obcaecati eveniet, quae quia a natus!
                </p>
                <a href='#' className='btn btn-outline'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CustomizeExp /> */}
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Who we are'
                description='<p>This is some placeholder content for this section.</p>'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <FadeInText htmlContent={fadeinText} />
              <a
                href='/components/'
                className='underline link-circle-arrow my-4'
                aria-label='Components'
              >
                <div className='circle-arrow me-2'>
                  <svg
                    className='svg-arrow'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    aria-hidden='true'
                    focusable='false'
                  >
                    <path
                      fill='currentColor'
                      className='svg-caret'
                      d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                    ></path>
                    <path
                      className='svg-stem'
                      stroke='currentColor'
                      d='M1.75 8H11'
                      stroke-width='1.5'
                      stroke-linecap='round'
                    ></path>
                  </svg>
                </div>
                <span className='txt'>Learn more</span>
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
                description='<p>This is some placeholder content for this section.</p><a href="CaseStudies" class="underline"><span>View All</span></a>'
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
                //navigationEnabled={true}
                //paginationClickable={true}
                //scrollbarDraggable={true}
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
      {/* <BgImageGrow /> */}
      <div className='sticky'>
        <AutoPlayVideo
          videoSrc='/video/sample.mp4'
          videoWidth='100%'
          className='fullscreen-video'
        />
      </div>
      <section className='section-py over-video' style={{ height: '400vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='grow-line-box center'>
                <GrowLine
                  aosDelay='500'
                  aosDuration='1500'
                  alignmentClass='text-left'
                />
              </div>
              <h2 className='text-white text-center display-3'>
                Scrolling effect for optional section
              </h2>
              <p className='text-white text-center lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href='#' className='btn btn-primary my-4'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
