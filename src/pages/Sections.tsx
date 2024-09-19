import React from "react";
import Image from "next/image";
import Layout from "@components/layouts/Layout";
import HorizontalMenu from "@components/sections/HorizontalMenu/HorizontalMenu";
import Counter from "@components/shared/Counter/Counter";

const navLinks = [
  { label: "We are Enqbator", href: "#section1" },
  { label: "Our Culture", href: "#section2" },
  { label: "Our Team", href: "#section3" },
  { label: "Sample", href: "#section4" },
  { label: "Sample", href: "#section5" },
];
const content = `
<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 0; will-change: transform;">
  <iframe loading="lazy" title="Description of the iframe content" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAFvLq_u3Jo/watch?embed&autoplay=1" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`;
const HomePage = () => {
  return (
    <Layout>
      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <div
                  className="grow-line grad-vert-pink-green"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                />
                <div className="box-side">
                  <p className="h3">Section Title</p>
                  <p>This is some placeholder content for this section.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="accordion accordion-tabs vertical-tabs"
                id="accordionVertical"
              >
                <nav className="nav-wrap">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v1"
                      aria-expanded="true"
                      aria-controls="collapse-v1"
                    >
                      Home
                    </button>
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v2"
                      aria-expanded="false"
                      aria-controls="collapse-v2"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v3"
                      aria-expanded="false"
                      aria-controls="collapse-v3"
                    >
                      Contact
                    </button>
                  </div>
                </nav>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v1"
                      aria-expanded="true"
                      aria-controls="collapse-v1"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapse-v1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionVertical"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the first item&apos;s accordion body.
                      </strong>{" "}
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
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v2"
                      aria-expanded="false"
                      aria-controls="collapse-v2"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapse-v2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionVertical"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the second item&apos;s accordion body.
                      </strong>{" "}
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
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-v3"
                      aria-expanded="false"
                      aria-controls="collapse-v3"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapse-v3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionVertical"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the third item&apos;s accordion body.
                      </strong>{" "}
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

      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <div
                  className="grow-line grad-vert-pink-green"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                />
                <div className="box-side">
                  <p className="h3">Section Title</p>
                  <p>This is some placeholder content for this section.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="accordion accordion-tabs"
                id="accordionHorizontal"
              >
                <nav className="nav-wrap">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh1"
                      aria-expanded="true"
                      aria-controls="collapseh1"
                    >
                      Home
                    </button>
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh2"
                      aria-expanded="false"
                      aria-controls="collapseh2"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh3"
                      aria-expanded="false"
                      aria-controls="collapseh3"
                    >
                      Contact
                    </button>
                  </div>
                </nav>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh1"
                      aria-expanded="true"
                      aria-controls="collapseh1"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseh1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionHorizontal"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the first item&apos;s accordion body.
                      </strong>{" "}
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
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh2"
                      aria-expanded="false"
                      aria-controls="collapseh2"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseh2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionHorizontal"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the second item&apos;s accordion body.
                      </strong>{" "}
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
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseh3"
                      aria-expanded="false"
                      aria-controls="collapseh3"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseh3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionHorizontal"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the third item&apos;s accordion body.
                      </strong>{" "}
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

      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/350/350?random=1"
                      alt="overlay-image"
                      width="350"
                      height="350"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div>
                  <h1>Who Are We Are</h1>
                  <p>This is some dynamic content inside the hero section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="grow-line grad-vert-pink-green"
                data-aos="grow-animation"
                data-aos-delay="0"
                data-aos-duration="1000"
              ></div>
              <h2>Sample Section Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <a href="#" className="card">
                <figure className="card-img aos-init" data-aos="img-reveal">
                  <Image
                    src="https://picsum.photos/402/715"
                    alt="Image"
                    className="img-fluid"
                    width={402}
                    height={715}
                  />
                </figure>
              </a>
              {/* <figure
                className='card-img aos-init aos-animate'
                data-aos='img-reveal'
              >
                <Image
                  src='https://picsum.photos/600/600'
                  alt='Image'
                  className='img-fluid mb-4'
                  width={600}
                  height={400}
                />
              </figure> */}
            </div>
            <div className="col-lg-8">
              <h3>Sample Section Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <a href="#" className="link-circle my-3" aria-label="Components">
                <span className="undefined  circle-arrow">
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 262 262"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-arrow"
                  >
                    <path
                      d="M251 131L11 131"
                      stroke="red"
                      stroke-width="16"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="svg-stem"
                    ></path>
                    <path
                      d="M129.45 11L251 131L129.45 251"
                      stroke="red"
                      stroke-width="16"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="svg-caret"
                    ></path>
                  </svg>
                </span>
                <span className="underline">
                  <span>Learn More</span>
                </span>
              </a>
              <Counter
                statValue={25266}
                statLabel="Awesome things"
                prefix="$"
              />
              <Counter statValue={12500} statLabel="New Customers" suffix="+" />
              <Counter
                statValue={300}
                statLabel="Increase in Sales"
                suffix="%"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section3" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div
                className="grow-line grad-vert-pink-green mx-auto"
                data-aos="grow-animation"
                data-aos-delay="0"
                data-aos-duration="1000"
              ></div>

              <p className="h3">
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
        </div>
      </section>

      <section id="section4" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <div
                  className="grow-line grad-vert-pink-green"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                />
                <div className="box-side">
                  <p className="h3">We are Enqbator</p>
                  <p>This is some placeholder content for this section.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingTop: "56.25%",
                  paddingBottom: "0",
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "0",
                  willChange: "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  title="Description of the iframe content"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    border: "none",
                    padding: "0",
                    margin: "0",
                  }}
                  src="https://www.canva.com/design/DAFvLq_u3Jo/watch?embed&autoplay=1"
                  allowFullScreen
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section5" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <div
                  className="grow-line grad-vert-pink-green"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                />
                <div className="box-side">
                  <p className="h3">Our Culture</p>
                  <p>This is some placeholder content for this section.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section
        className="parallax-section"
        style={{ backgroundImage: "url(https://picsum.photos/1920/1080)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <h1>Heading 1</h1>
                <p>This is some content inside the parallax section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section
        className="hero half"
        style={{ backgroundImage: "url(https://picsum.photos/1920/1080)" }}
      >
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome to Our Website</h1>
                <p>This is some dynamic content inside the hero section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section
        className="hero full"
        style={{ backgroundImage: "url(https://picsum.photos/1920/1080)" }}
      >
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome to Our Website</h1>
                <p>This is some dynamic content inside the hero section.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero media"
            width={1920}
            height={1080}
          />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/350/350?random=1"
                      alt="overlay-image"
                      width="350"
                      height="350"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div>
                  <h1>Welcome to Our Website</h1>
                  <p>This is some dynamic content inside the hero section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          {" "}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="img-animate">
                  <figure className="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/350/350?random=1"
                      alt="overlay-image"
                      width="350"
                      height="350"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div>
                  <h1>Welcome to Our Website</h1>
                  <p>This is some dynamic content inside the hero section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          {" "}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="hero">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  );
};

export default HomePage;
