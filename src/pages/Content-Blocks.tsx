import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layouts/Layout";
import TitleLine from "@shared/TitleLine/TitleLine";

const contentBlock1 = `<a href="/components/" class="underline link-circle-arrow" aria-label="Components">>
        
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

// const contentBlock2 = `<section class="section-py"><div class="container"><div class="row"><div class="col-lg-4"><h2>fasdf</h2></div><div class="col-lg-8">fdfgsdfg</div></div></div></section>`;

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
<a href="/components/" class="underline link-circle-arrow" aria-label="Components">>
        
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

const contentBlockColumnSamples = `
   <section class="section-py">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="row my-5">
                <div class="col-6 col-md-4">
                  <div class="img-animate">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=1"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                  <h3 class="mb-0">Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div class="col-6 col-md-4">
                  <div class="img-animate">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=2"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                       <h3 class="mb-0">Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div class="col-6 col-md-4">
                  <div class="img-animate">
                    <figure class="figure aos-init" data-aos="img-reveal">
                      <Image
                        src="https://picsum.photos/185/246?random=3"
                        alt="overlay-image"
                        width="200"
                        height="200"
                      />
                    </figure>
                  </div>
                    <h3 class="mb-0">Lorem Ipsum</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section class="section-py">
        <div class="hero-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="img-animate mb-4 mb-lg-0">
                  <figure class="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/350/350?random=1"
                      alt="overlay-image"
                      width="350"
                      height="350"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p class="eyebrow">architecto</p>
                  <h1>Architecto beatae vitae dicta sunt explicabo</h1>
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
     <section class="section-py">
        <div class="hero-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 order-lg-2">
                <div class="img-animate mb-4 mb-lg-0">
                  <figure class="figure aos-init" data-aos="img-reveal">
                    <Image
                      src="https://picsum.photos/350/350?random=1"
                      alt="overlay-image"
                      width="350"
                      height="350"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p>architecto</p>
                  <h1>Architecto beatae vitae dicta sunt explicabo</h1>
                  <p className="lead">
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

const Components = () => {
  return (
    <Layout>
      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TitleLine
                title="Typography"
                description="This is some placeholder content for this section."
                lineClass="grad-vert-pink-green"
                aosDelay="0"
                aosDuration="1000"
              />
            </div>
            <div className="col-lg-8">
              {" "}
              <div
                dangerouslySetInnerHTML={{ __html: contentBlockTypography }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TitleLine
                title="Buttons"
                description="This is some placeholder content for this section."
                lineClass="grad-vert-pink-green"
                aosDelay="0"
                aosDuration="1000"
              />
            </div>
            <div className="col-lg-8">
              {" "}
              <div dangerouslySetInnerHTML={{ __html: contentBlockButtons }} />
            </div>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: contentBlockColumnSamples }} />
    </Layout>
  );
};

export default Components;
