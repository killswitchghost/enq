import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/layouts/Layout';
import Counter from '@components/shared/Counter/Counter';

import HoverExpand from '@components/sections/HoverExpand/HoverExpand';
import TitleLine from '@shared/TitleLine/TitleLine';
const menuItems = [
  { title: 'Welcome', href: '#section1' },
  { title: 'We are Enqbator', href: '#section2' },
  { title: 'Our Culture', href: '#section3' },
  { title: 'Our Team', href: '#section4' }
];
const items = [
  {
    number: '01',
    title: 'Reliability',
    description:
      'I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.'
  },
  {
    number: '02',
    title: 'Professionalism',
    description:
      'I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.'
  },
  {
    number: '03',
    title: 'Innovation',
    description:
      'I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.'
  },
  {
    number: '04',
    title: 'Customer service',
    description:
      'I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.'
  }
];
const HomePage = () => {
  return (
    <Layout>
      <section className='hero'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
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
                  <p className='eyebrow'>case study</p>
                  <h1>Clackamas Community College</h1>
                  <p>This is some dynamic content inside the hero section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <Image
                  src='/img/logos/clackamas.png'
                  alt='Clackamas Community College'
                  width='128'
                  height='30'
                  className='mb-4'
                />
                <h3>
                  I never saw a wild thing sorry for itself. A small bird will
                  drop frozen dead from a bough without ever having felt sorry
                  for itself.
                </h3>
              </div>
              <div className='col-lg-3 offset-lg-1'>
                <ul className='list-unstyled mb-5'>
                  <li>
                    <strong>Project</strong>
                  </li>
                  <li>
                    <a href='#' className='underline'>
                      <span className='me-2'>enqbator.com</span>
                      <i className='bi bi-arrow-up-right'></i>
                    </a>
                  </li>
                </ul>
                <ul className='list-unstyled'>
                  <li>
                    <strong>Technologies</strong>
                  </li>
                  <li>Sitefinity</li>
                  <li>React</li>
                  <li>Sitefinity</li>
                  <li>React</li>
                </ul>
              </div>
              <div className='col-lg-3'>
                <ul className='list-unstyled mb-5'>
                  <li>
                    <strong>Industry</strong>
                  </li>
                  <li>
                    <a href='#' className='underline'>
                      <span>Education</span>
                    </a>
                  </li>
                </ul>
                <ul className='list-unstyled'>
                  <li>
                    <strong>Expertise</strong>
                  </li>
                  <li>UX Research</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <TitleLine
                  title='The Goal'
                  description='This is some placeholder content for this section.'
                  aosDelay='0'
                  aosDuration='1000'
                />
              </div>
              <div className='col-lg-6'>
                <ol className='custom-num-list'>
                  <li>Deliver a Seamless User Experience</li>
                  <li>Optimize Performance and Scalability</li>
                  <li>Implement Modern Technologies</li>
                  <li>Enhance Security Measures</li>
                  <li>Meet Project Deadlines and Budget Constraints</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='grow-line grad-vert-pink-green'
                  data-aos='grow-animation'
                  data-aos-delay='0'
                  data-aos-duration='1000'
                />
                <h3>
                  Modernizing Student Pathways: Enqbator helps Clackamas
                  Community College transform its digital engagement
                </h3>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  Located in one of the four major counties making up the
                  greater Portland, Oregon area, Clackamas Community College
                  represents a service area of approximately 320,00 people.
                  Clackamas offers programs and services in career technical,
                  college transfer, literacy and basic skills, community
                  education, and business training to a diverse student body
                  totaling more than 26,000 at three active campuses. The vision
                  for the digital presence and experience for users of the
                  Clackamas website was to streamline access to the colleges’
                  focus areas, programs, and key calls to action, by improving
                  user pathways on the homepage to key sections within the
                  website. Enqbator was proud to be able to collaborate closely
                  with the digital team at Clackamas, in order to bring out the
                  best of their vision and enhance the overall experience for
                  its users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='sticky-side'>
                  <TitleLine
                    title='The Goal'
                    description='This is some placeholder content for this section.'
                    aosDelay='0'
                    aosDuration='1000'
                  />
                </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='sticky-side'>
                  <TitleLine
                    title='The Challenge'
                    description='This is some placeholder content for this section.'
                    aosDelay='0'
                    aosDuration='1000'
                  />
                </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='img-animate'>
                  <figure className='figure aos-init' data-aos='img-reveal'>
                    <Image
                      src='https://picsum.photos/350/350?random=2'
                      alt='overlay-image'
                      width='350'
                      height='350'
                    />
                  </figure>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='img-animate'>
                  <figure className='figure aos-init' data-aos='img-reveal'>
                    <Image
                      src='https://picsum.photos/350/350?random=2'
                      alt='overlay-image'
                      width='350'
                      height='350'
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='sticky-side'>
                  <TitleLine
                    title='The Solution'
                    description='This is some placeholder content for this section.'
                    aosDelay='0'
                    aosDuration='1000'
                  />
                </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HoverExpand items={items} />
      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='sticky-side'>
                  <TitleLine
                    title='The Result'
                    description='This is some placeholder content for this section.'
                    aosDelay='0'
                    aosDuration='1000'
                  />
                </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div
                className='grow-line grad-vert-pink-green mx-auto'
                data-aos='grow-animation'
                data-aos-delay='0'
                data-aos-duration='1000'
              ></div>

              <p className='h3'>
                Sample Section Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className='row my-5'>
            <div className='col-lg-4 text-center'>
              {' '}
              <Counter
                statValue={25266}
                statLabel='Awesome things'
                prefix='$'
              />
            </div>
            <div className='col-lg-4 text-center'>
              {' '}
              <Counter statValue={12500} statLabel='New Customers' suffix='+' />
            </div>
            <div className='col-lg-4 text-center'>
              {' '}
              <Counter
                statValue={300}
                statLabel='Increase in Sales'
                suffix='%'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='card-testimonial'>
                <blockquote className='quote h3'>
                  Our experience with Enqbator so far has been nothing short of
                  exemplary. Their team has gone above and beyond to ensure our
                  website is not only visually appealing but also easy to
                  navigate, mobile-friendly, and ADA compliant.
                </blockquote>
                <hr />
                <footer>
                  <div className='author'>
                    <div className='author-details'>
                      <Image
                        src='https://picsum.photos/50/50?random=1'
                        alt='author'
                        width='50'
                        height='50'
                        className='author-img'
                      />
                      <div className='author-info'>
                        <cite className='quote-author'>John Doe</cite>
                        <cite className='quote-title'>CEO, Company</cite>
                      </div>
                    </div>
                    <Image
                      src='/img/logos/clackamas.png'
                      alt='Clackamas Community College'
                      width='128'
                      height='30'
                    />
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='parallax-section h-600'
        style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='content'>
                {/* <h1>Heading 1</h1>
                <p>This is some content inside the parallax section.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div>
                  <div
                    className='grow-line grad-vert-pink-green'
                    data-aos='grow-animation'
                    data-aos-delay='0'
                    data-aos-duration='1000'
                  ></div>
                  <h3>
                    This project was brought to life using a carefully selected
                    stack of cutting-edge technologies designed to deliver
                    optimal performance and user experience.
                  </h3>
                </div>
              </div>
            </div>
            <div className='row my-4'>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>Frontend</h5>
                    <p className='card-text'>React, Angular, Vue, Svelte</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Sitefinity Digital Experience Platform (DXP)
                    </h5>
                    <p className='card-text'>
                      Powerful marketing-based content platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Online Course Catalog Integration
                    </h5>
                    <p className='card-text'>
                      Integrations with Courseleaf for degree classes and
                      requirements from the college catalog on each of the
                      degree pages.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>Data Embeds</h5>
                    <p className='card-text'>
                      Embedded data from Lightcast for Job Outlook & Career info
                      on degree pages, 25LiveEvents for events, and Rave Mobile
                      Safety for announcement and alert banners.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>Frontend</h5>
                    <p className='card-text'>React, Angular, Vue, Svelte</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>Tranlsation Services</h5>
                    <p className='card-text'>
                      Gtranslate integration for translation functionality
                      (English + 6 additional languages) .
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>UX Reseach + Design</h5>
                    <p className='card-text'>
                      Complete and detailed research to create the most
                      effective, user-focused design.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 py-3'>
                <div className='card card-bg'>
                  <div className='card-body'>
                    <h5 className='card-title'>Custom Modules</h5>
                    <p className='card-text'>
                      Content modules designed specifically for the Clackamas
                      website and workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
