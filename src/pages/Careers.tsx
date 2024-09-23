import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/layouts/Layout';
import HoverExpand from '@components/sections/HoverExpand/HoverExpand';
import TitleLine from '@shared/TitleLine/TitleLine';
const menuItems = [
  { title: 'Welcome', href: '#section1' },
  { title: 'We are Enqbator', href: '#section2' },
  { title: 'Our Culture', href: '#section3' },
  { title: 'Our Team', href: '#section4' }
];

const HomePage = () => {
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

  return (
    <Layout>
      <section className='hero'>
        <div className='hero-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 order-lg-2'>
                <div className='img-animate'>
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
                  <h1>Become a part of the Enqbator team</h1>
                  <p>
                    Collaborate with amazing individuals, and make a meaningful
                    impact.
                  </p>
                  <a href='#ouropenings' className='btn btn-primary'>
                    View Openings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='grow-line-box'>
                <div
                  className='grow-line grad-vert-pink-green'
                  data-aos='grow-animation'
                  data-aos-delay='0'
                  data-aos-duration='1000'
                />
              </div>
              <h2>Our Values</h2>
              <p className='mb-5'>
                At the heart of everything we do are the values that guide our
                decisions and shape our culture. Our commitment to integrity,
                collaboration, and innovation empowers us to create meaningful
                impact and foster a positive environment for both our team and
                our clients.
              </p>
              <HoverExpand items={items} />
            </div>
          </div>
        </div>
      </section>

      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='grow-line-box'>
                <div
                  className='grow-line grad-vert-pink-green'
                  data-aos='grow-animation'
                  data-aos-delay='0'
                  data-aos-duration='1000'
                />
              </div>
              <h2>Why Enqbator is a Great Place to Work</h2>
              <p className='lead'>
                At Enqbator, we believe that a positive work environment fuels
                innovation and success.
              </p>
              <p>
                {' '}
                We foster a culture where collaboration, growth, and work-life
                balance are at the forefront. Our team is made up of passionate,
                talented individuals who support one another and push the
                boundaries of what&apos;s possible. From exciting challenges to
                meaningful projects, every day at Enqbator offers opportunities
                to learn, grow, and make a real impact. We prioritize your
                well-being, offering flexible work options, comprehensive
                benefits, and a space where your ideas are valued. Join us and
                be part of something extraordinary!
              </p>
            </div>
            <div className='col-lg-4 d-flex align-items-center justify-content-center'>
              <div>
                <Image
                  src='/img/great-place-to-work.png'
                  alt='overlay-image'
                  width='185'
                  height='246'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='ouropenings' className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Our Openings'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              {' '}
              <ul className='list-links'>
                <li>
                  <Link href='Careers-Detail'>
                    Business Analyst
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='Careers-Detail'>
                    Sales Associate <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='Careers-Detail'>
                    Front-end Developer<i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='Careers-Detail'>
                    Project Manager <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
