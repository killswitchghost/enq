import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layouts/Layout";
import HorizontalMenu from "@components/sections/HorizontalMenu/HorizontalMenu";
import Counter from "@components/shared/Counter/Counter";
//import NavInPage from '@components/sections/NavInPage/NavInPage';
import Testimonials from "@components/sections/Testimonials/Testimonials";

import LetsTalk from "@components/sections/LetsTalk/LetsTalk";
import HoverExpand from "@components/sections/HoverExpand/HoverExpand";
import TitleLine from "@shared/TitleLine/TitleLine";
import ListImage from "@shared/ListImage/ListImage";

const menuItems = [
  { title: "Welcome", href: "#section1" },
  { title: "We are Enqbator", href: "#section2" },
  { title: "Our Culture", href: "#section3" },
  { title: "Our Values", href: "#section4" },
  { title: "Our Team", href: "#section5" },
];
const items = [
  {
    number: "01",
    title: "Reliability",
    description:
      "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.",
  },
  {
    number: "02",
    title: "Professionalism",
    description:
      "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.",
  },
  {
    number: "04",
    title: "Customer service",
    description:
      "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.",
  },
];
const HomePage = () => {
  return (
    <Layout>
      <section className="hero pt-60">
        <div className="hero-content">
          <div className="container-fluid">
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
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div>
                  <p className="eyebrow mt-4 mt-lg-0">About us</p>
                  <h1>Who We Are</h1>
                  <p>This is some dynamic content inside the hero section.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HorizontalMenu menuItems={menuItems} />

      <section id="section1" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="grow-line-box center">
                <div
                  className="grow-line grad-vert-pink-green mx-auto"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                ></div>
              </div>

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
          <div className="row my-5">
            <div className="col-lg-4 text-center">
              {" "}
              <Counter
                statValue={25266}
                statLabel="Awesome things"
                prefix="$"
              />
            </div>
            <div className="col-lg-4 text-center">
              {" "}
              <Counter statValue={12500} statLabel="New Customers" suffix="+" />
            </div>
            <div className="col-lg-4 text-center">
              {" "}
              <Counter
                statValue={300}
                statLabel="Increase in Sales"
                suffix="%"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <TitleLine
                  title="We are Enqbator"
                  description="This is some placeholder content for this section."
                  lineClass="grad-vert-pink-green"
                  aosDelay="0"
                  aosDuration="1000"
                />
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
      <section id="section3" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sticky-side">
                <TitleLine
                  title="Our Culture"
                  description="This is some placeholder content for this section."
                  lineClass="grad-vert-pink-green"
                  aosDelay="0"
                  aosDuration="1000"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <h2>At Enqbator, working as a team is a way of life.</h2>
              <p>
                Enqbator&apos;s commitment to a completely inclusive, safe, and
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
                celebrate everyone&apos;s dreams, lives, cultures, and passions
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

      <section id="section4" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="grow-line-box">
                <div
                  className="grow-line grad-vert-pink-green mx-auto"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                ></div>
              </div>

              <h2>Our Values</h2>
              <p className="mb-5">
                I&apos;ve seen a wild thing sorry for itself. A small bird will
                drop frozen dead from a bough without ever having felt sorry for
                itself.
              </p>
              <HoverExpand items={items} />
            </div>
          </div>
        </div>
      </section>

      <section id="section5" className="section-py">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="grow-line-box center">
                <div
                  className="grow-line grad-vert-pink-green mx-auto"
                  data-aos="grow-animation"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                ></div>
              </div>

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
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ListImage />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
