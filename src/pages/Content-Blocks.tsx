import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/Layout';
import TitleLine from '@shared/TitleLine/TitleLine';
import GrowLine from '@shared/GrowLine/GrowLine';
import Counter from '@components/shared/Counter/Counter';
import VideoScrub from '@shared/VideoScrub/VideoScrub';
const contentBlockHero1 = `<section class="hero"><div class="container"><div class="row"><div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p class="eyebrow">architecto</p>
                  <h1>Architecto beatae vitae dicta</h1>
                  <p class="lead">
                    Height controlled by the height of the content.
                  </p>
                </div>
              </div><div class="col-lg-6">
             <div class="img-animate">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/682/682?random=1"
                        alt="overlay-image"
                        width="682"
                        height="682"
                      />
                    </figure>
                  </div>
              </div></div></div></section>`;

const contentBlockHero2 = `<section class="hero"><div class="container"><div class="row">
<div class="col-lg-6">
           <div class="img-animate">
                  <figure class="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/682/682?random=1"
                      alt="overlay-image"
                      width="682"
                      height="682"
                    />
                  </figure>
                </div>
            </div>
<div class="col-lg-6 d-flex flex-column justify-content-center">
              <div>
                <p class="eyebrow">architecto</p>
                <h1>Architecto beatae vitae dicta</h1>
                <p class="lead">
                    Height controlled by the height of the content.
                </p>
              </div>
            </div></div></div></section>`;

const contentBlockHero3 = `<section id="section1" class="pt-6"><div class="container"><div class="row"><div class="col text-center"><div class="grow-line-box center"><div class="grow-line grad-vert-blue-yellow mx-auto aos-init aos-animate" data-aos="grow-animation" data-aos-delay="0" data-aos-duration="1000"></div></div><h1>Architecto beatae vitae dicta</h1><p>I've never seen a wild thing feel sorry for itself. A bird will fall frozen dead from a bough without ever having felt sorry for itself.</p></div></div></div></section>`;

const contentBlockTypography = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#" class="underline"><span>Learn more</span></a></p>
`;
const contentBlockButtons = `
<a href="/" class="btn btn-lg btn-primary">Primary</a>
<a href="/" class="btn btn btn-primary">Primary</a>
<a href="/" class="btn btn-sm btn-primary">Primary</a>
<br /><br />
<a href="/" class="btn btn-lg btn-secondary">Secondary</a>
<a href="/" class="btn btn btn-secondary">Secondary</a>
<a href="/" class="btn btn-sm btn-secondary">Secondary</a>
<br /><br />
<a href="/" class="btn btn-lg btn-outline">Secondary</a>
<a href="/" class="btn btn btn-outline">Secondary</a>
<a href="/" class="btn btn-sm btn-outline">Secondary</a>
<br /><br />
<a href="/components/" class="underline link-circle-arrow" aria-label="Components">
        
        <div class="circle-arrow me-2">
                <svg
          class="svg-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            class="svg-caret"
            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
          ></path>
          <path
            class="svg-stem"
            stroke="currentColor"
            d="M1.75 8H11"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
        </div>
        <span class="txt">Learn more</span>
      </a><br /><a href="/components/" class="btn-icon-txt">
        <div class="icon">
          <i class="bi bi-database-lock"></i>
        </div>
        <div class="txt">
          <span class="underline">
            <span>Who we are</span>
          </span>
        </div>
        <svg
          class="svg-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
          ></path>
          <path
            class="svg-arrow-stem"
            stroke="currentColor"
            d="M1.75 8H11"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      </a>
`;

const contentBlockCSample1 = `
   <section class="section-py">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="row my-5">
                <div class="col-6 col-md-4">
                  <div class="img-animate mb-3"">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=1"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                  <h3>Sample 3 column Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div class="col-6 col-md-4">
                  <div class="img-animate mb-3"">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=2"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                     <h3>Sample 3 column Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div class="col-6 col-md-4">
                  <div class="img-animate mb-3">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=3"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                  <h3>Sample 3 column Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;
const contentBlockCSample2 = `
<section class="section-py">
        <div class="hero-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="img-animate mb-4 mb-lg-0">
                  <figure class="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/920/650?random=1"
                      alt="overlay-image"
                      width="920"
                      height="650"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p class="eyebrow">Full Width</p>
                  <h2>Architecto beatae vitae dicta sunt explicabo</h2>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
`;
const contentBlockCSample3 = `
<section class="section-py">
        <div class="hero-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 order-lg-2">
                <div class="img-animate mb-4 mb-lg-0">
                  <figure class="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/920/650?random=1"
                      alt="overlay-image"
                      width="920"
                      height="650"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p class="eyebrow">Full Width</p>
                  <h2>Architecto beatae vitae dicta sunt explicabo</h2>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
`;
const contentBlockCSample4 = `
<section class="section-py">
        <div class="hero-content">
          <div class="container">
            <div class="row">
        
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p class="eyebrow">Full Width</p>
                  <h2>Architecto beatae vitae dicta sunt explicabo</h2>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
                    <div class="col-lg-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </section>
    
`;
const Components = () => {
  return (
    <Layout>
      <section className='stretch-image left'>
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
                          'url(https://picsum.photos/900/480?random=1)'
                      }}
                    ></div>
                  </figure>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-text'>
              <div className='p-3'>
                <div className='grow-line-box'>
                  <GrowLine
                    aosDelay='500'
                    aosDuration='1500'
                    alignmentClass='text-left'
                  />
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
      <br /> <br />
      <hr />
      <br /> <br />
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
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockHero1 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockHero2 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockHero3 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Typography'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              {' '}
              <div
                dangerouslySetInnerHTML={{ __html: contentBlockTypography }}
              />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Buttons'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              {' '}
              <div dangerouslySetInnerHTML={{ __html: contentBlockButtons }} />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockCSample1 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockCSample2 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockCSample3 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <div dangerouslySetInnerHTML={{ __html: contentBlockCSample4 }} />
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Tabs'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <div
                className='accordion accordion-tabs vertical-tabs'
                id='accordionVertical'
              >
                <nav className='nav-wrap'>
                  <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v1'
                      aria-expanded='true'
                      aria-controls='collapse-v1'
                    >
                      Home
                    </button>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v2'
                      aria-expanded='false'
                      aria-controls='collapse-v2'
                    >
                      Profile
                    </button>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v3'
                      aria-expanded='false'
                      aria-controls='collapse-v3'
                    >
                      Contact
                    </button>
                  </div>
                </nav>

                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v1'
                      aria-expanded='true'
                      aria-controls='collapse-v1'
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id='collapse-v1'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionVertical'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the first item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v2'
                      aria-expanded='false'
                      aria-controls='collapse-v2'
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id='collapse-v2'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionVertical'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the second item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse-v3'
                      aria-expanded='false'
                      aria-controls='collapse-v3'
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id='collapse-v3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionVertical'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the third item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Tabs'
                description='This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <div
                className='accordion accordion-tabs'
                id='accordionHorizontal'
              >
                <nav className='nav-wrap'>
                  <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh1'
                      aria-expanded='true'
                      aria-controls='collapseh1'
                    >
                      Home
                    </button>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh2'
                      aria-expanded='false'
                      aria-controls='collapseh2'
                    >
                      Profile
                    </button>
                    <button
                      className='nav-link'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh3'
                      aria-expanded='false'
                      aria-controls='collapseh3'
                    >
                      Contact
                    </button>
                  </div>
                </nav>

                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh1'
                      aria-expanded='true'
                      aria-controls='collapseh1'
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id='collapseh1'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionHorizontal'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the first item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh2'
                      aria-expanded='false'
                      aria-controls='collapseh2'
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id='collapseh2'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionHorizontal'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the second item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseh3'
                      aria-expanded='false'
                      aria-controls='collapseh3'
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id='collapseh3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionHorizontal'
                  >
                    <div className='accordion-body'>
                      <strong>
                        This is the third item&apos;s accordion body.
                      </strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It&apos;s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <a href='#' className='card'>
                <figure className='card-img aos-init' data-aos='img-reveal'>
                  <Image
                    src='https://picsum.photos/402/715'
                    alt='Image'
                    className='img-fluid'
                    width={402}
                    height={715}
                  />
                </figure>
              </a>
            </div>
            <div className='col-lg-8'>
              <h3>Sample Section Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>

              <Counter
                statValue={25266}
                statLabel='Awesome things'
                prefix='$'
              />
              <Counter statValue={12500} statLabel='New Customers' suffix='+' />
              <Counter
                statValue={300}
                statLabel='Increase in Sales'
                suffix='%'
              />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='grow-line-box center'>
                <div
                  className='grow-line grad-vert-pink-green mx-auto aos-init aos-animate'
                  data-aos='grow-animation'
                  data-aos-delay='0'
                  data-aos-duration='1000'
                ></div>
              </div>
              <p className='h3'>
                Sample Section Title. Grow line can be applied in content area.
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
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <TitleLine
                title='Sample'
                description='Optional This is some placeholder content for this section.'
                aosDelay='0'
                aosDuration='1000'
              />
            </div>
            <div className='col-lg-8'>
              <h2>At Enqbator, working as a team is a way of life.</h2>
              <p>
                Enqbator’s commitment to a completely inclusive, safe, and
                welcoming environment helps us foster an empowering, purposeful,
                and freethinking workplace. Enqbator accepts, welcomes, cares
                for, and nurtures each employee with no exceptions. We create an
                atmosphere of openness and acceptance, making all feel welcome
                and valued, from each team member to all our clients, their
                customers, and our fellow vendors.
              </p>
              <p>
                Our goal is to help each employee learn, grow, and become the
                best person and contributor they can be. We embrace and
                celebrate everyone’s dreams, lives, cultures, and passions
                without limitations based on race, gender, age, religion, or
                identity.
              </p>
              <p>
                Enqbator knows each person is unique, and each person brings a
                wide range of knowledge, experiences, and ideas -- all things
                which must be brought out and used to help our company culture
                grow stronger. If our employees are comfortable and empowered,
                then we will all succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section
        className='parallax-section'
        style={{ backgroundImage: 'url("https://picsum.photos/1920/1080")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='content'>
                <h1>Parallax Section</h1>
                <p>This is some content inside the parallax section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section
        className='section-py overlay-bg'
        style={{
          backgroundImage: 'url("https://picsum.photos/1920/1080?random=4")'
        }}
      >
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-6'>
                <h2>Section Background image .overlay-bg</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='hero-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.25%',
                    paddingBottom: 0,
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    borderRadius: 0,
                    willChange: 'transform'
                  }}
                >
                  <iframe
                    loading='lazy'
                    title='Description of the iframe content'
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0
                    }}
                    src='https://www.canva.com/design/DAFvLq_u3Jo/watch?embed&autoplay=1'
                    // allow='fullscreen'
                    // allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ul className='list-links'>
                <li>
                  <Link href='/WhoWeAre#'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/WhoWeAre#'>
                    Sed ut perspiciatis unde omnis{' '}
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/WhoWeAre#'>
                    Architecto beatae vitae dicta{' '}
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/WhoWeAre#'>
                    Ratione voluptatem sequi nesciunt
                    <i className='bi bi-arrow-up-right'></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4'>
              <ol className='custom-num-list'>
                <li>Deliver a Seamless User Experience</li>
                <li>Optimize Performance and Scalability</li>
                <li>Implement Modern Technologies</li>
                <li>Enhance Security Measures</li>
                <li>Meet Project Deadlines and Budget Constraints</li>
              </ol>
            </div>
            <div className='col-lg-4'>
              <ul>
                <li>Deliver a Seamless User Experience</li>
                <li>Optimize Performance and Scalability</li>
                <li>Implement Modern Technologies</li>
                <li>Enhance Security Measures</li>
                <li>Meet Project Deadlines and Budget Constraints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <section className='section-py'>
        <div className='container'>
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
                    requirements from the college catalog on each of the degree
                    pages.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 py-3'>
              <div className='card card-bg'>
                <div className='card-body'>
                  <h5 className='card-title'>Data Embeds</h5>
                  <p className='card-text'>
                    Embedded data from Lightcast for Job Outlook &amp; Career
                    info on degree pages, 25LiveEvents for events, and Rave
                    Mobile Safety for announcement and alert banners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <hr />
      <br /> <br />
      <div className='sticky'>
        <VideoScrub
          videoSrc='/video/forrest.mp4'
          videoWidth='100%'
          className='fullscreen-video'
        />
      </div>
      <section className='section-py over-video' style={{ height: '600vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2>Scroll down to see the effect!</h2>
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
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Layout>
  );
};

export default Components;
