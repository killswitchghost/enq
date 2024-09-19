import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layouts/Layout";

import Eyebrow from "../components/shared/Eyebrow/Eyebrow";

import Card from "../components/shared/Card/Card";
import HorizontalMenu from "../components/sections/HorizontalMenu/HorizontalMenu";
import SubNav from "../components/shared/SubNav";
// import StyleGuide from "../components/sections/StyleGuide/StyleGuide";
import ListImage from "@shared/ListImage/ListImage";

const contentBlock1 = `<a href="/components/" class="underline link-circle-arrow" aria-label="Components">
        
        <div class="circle-arrow me-2">
          <svg
            fill="none"
            aria-hidden="true"
            focusable="false"
            class="svg-arrow"
          >
            <path
              fill="currentColor"
              class="svg-caret"
              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
            ></path>
            <path
              class="svg-stem"
              stroke="currentColor"
              d="M1.75 8H13"
              stroke-width="1.2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <span class="txt">Learn more</span>
      </a><br /><br /><br />     <a href="/components/" class="btn-icon-txt">
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
      </a>`;

const Components = () => {
  return (
    <Layout>
      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col">
              <div dangerouslySetInnerHTML={{ __html: contentBlock1 }} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col">
              <ListImage />
            </div>
          </div>
        </div>
      </section>
      <section className="section-py">
        <div className="row">
          <div className="col">
            <div className="row my-5">
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
              <div className="col-6 col-md-3 col-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/185/246?random=1"
                      alt="overlay-image"
                      width="185"
                      height="246"
                    />
                  </figure>
                </div>
                <p className="mb-0">John Doe</p>
                <small className="fst-italic">President, CEO</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="section1">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <figure className="card-img" data-aos="img-reveal">
              <Image
                src="https://picsum.photos/seed/picsum/784/784"
                className="img-fluid"
                width="784"
                height="784"
                alt="test"
              />
            </figure>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="m-5">
              <p className="eyebrow aos-init" data-aos="fade-up">
                architecto
              </p>
              <h1 data-aos="fade-up" data-aos-delay="50">
                Architecto beatae vitae dicta sunt explicabo
              </h1>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="section2">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            {" "}
            <figure className="card-img" data-aos="img-reveal">
              <Image
                src="https://picsum.photos/seed/picsum/784/784"
                width="784"
                height="784"
                className="img-fluid"
                alt="test"
              />
            </figure>
          </div>
          <div className="col-lg-6  order-lg-1 d-flex">
            <div className="m-5">
              <p className="eyebrow aos-init" data-aos="fade-up">
                architecto
              </p>
              <h1 data-aos="fade-up" data-aos-delay="50">
                Architecto beatae vitae dicta sunt explicabo
              </h1>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <HeroImgLeft />

<HeroImgLeft /> */}

      {/* <HorizontalMenu /> */}

      {/* <SubNav /> */}

      <section className="py-5" id="section3">
        <div className="row">
          <div className="col-lg-12">
            <Eyebrow className="rule mb-5">About</Eyebrow>
            <h2 className="mb-8">Who Are We?</h2>
          </div>
        </div>

        <div className="gx-5">
          <div className="col-lg-3">
            <div className="">
              <div className="card blue">
                <div className="card-padding">asdfadf</div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="grid-container">
              <Link href="#">
                <Card>
                  <figure className="card-img" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/seed/picsum/376/545"
                      width="376"
                      height="545"
                      className="img-fluid"
                      alt="test"
                    />
                  </figure>
                  <p className="underline">
                    <span>sdfa</span>
                  </p>
                </Card>
              </Link>
              <Link href="#">
                <Card>
                  <figure className="card-img" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/seed/picsum/376/545"
                      width="376"
                      height="545"
                      className="img-fluid"
                      alt="test"
                    />
                  </figure>
                  <p className="underline">
                    <span>sdfa</span>
                  </p>
                </Card>
              </Link>
              <Link href="#">
                <Card>
                  <figure className="card-img" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/seed/picsum/376/545"
                      width="376"
                      height="545"
                      className="img-fluid"
                      alt="test"
                    />
                  </figure>
                  <p className="underline">
                    <span>sdfa</span>
                  </p>
                </Card>
              </Link>
              <Link href="#">
                <Card>
                  <figure className="card-img" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/seed/picsum/376/545"
                      width="376"
                      height="545"
                      className="img-fluid"
                      alt="test"
                    />
                  </figure>
                  <p className="underline">
                    <span>sdfa</span>
                  </p>
                </Card>
              </Link>
              <Link href="#">
                <Card>
                  <figure className="card-img" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/seed/picsum/376/545"
                      width="376"
                      height="545"
                      className="img-fluid"
                      alt="test"
                    />
                  </figure>
                  <p className="underline">
                    <span>sdfa</span>
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col">
              <ListImage />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="section4">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <div className="sticky-side">fasdf</div>
          </div>
          <div className="col-lg-6">
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
            asdfd
            <br />
          </div>
        </div>
      </section>

      {/* <section
        id='section4'
        className='section-py'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='sticky-side'>
      

                <div
                  className='grow-line grad-vert-pink-green'
                  data-aos='grow-animation'
                  data-aos-delay='0'
                  data-aos-duration='1000'
                />
                <div className='box-side'>
                  <p className='h3'>Our Team</p>
                  <p>This is some placeholder content for this section.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <h2>
                Talent wins games. But teamwork and passion win championships!
              </h2>
              <p>
                Our leadership has over 30 years of industry experience on the
                agency and the client side, while our team members are certified
                at the highest level, and knowledgeable and experienced in all
                the latest digital advancements. Our Founder and CTO, Sujal
                Raju, is also a highly sought-after speaker in the field and was
                one of 12 experts chosen as a Progress Sitefinity MVP in 2021.
                His experience and knowledge are well known and well respected.
                Both Sujal and the entire Enqbator team are praised and
                appreciated by their clients.
              </p>
              <CustomSwiper
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                navigationEnabled={true}
                paginationClickable={true}
                scrollbarDraggable={true}
                className='swiper-container my-5'
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
                  <div className='card' data-work-id='4'>
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor=''
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h4 className={`card-title`}>Sample</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card' data-work-id='4'>
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor=''
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h4 className={`card-title`}>Sample</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card' data-work-id='4'>
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor=''
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h4 className={`card-title`}>Sample</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card' data-work-id='4'>
                    <figure className='card-img aos-init' data-aos='img-reveal'>
                      <Image
                        src='https://picsum.photos/350/350?random=1'
                        alt='overlay-image'
                        className='card-img-top'
                        data-cursor=''
                        width='350'
                        height='350'
                      />
                    </figure>
                    <div className='card-body px-0'>
                      <p className='card-meta'>Placeholder</p>
                      <h4 className={`card-title`}>Sample</h4>
                    </div>
                  </div>
                </SwiperSlide>
              </CustomSwiper>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Components;
