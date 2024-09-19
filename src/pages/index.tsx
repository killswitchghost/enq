import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import CircleArrow from "@shared/CircleArrow/CircleArrow";
import Layout from "@components/layouts/Layout";
// import HomeWelcome from '@components/sections/WhoWeAre/WhoWeAre';
import ScrollingLogos from "@components/sections/ScrollingLogos/ScrollingLogos";
// import WhatWeDo from '@components/sections/WhatWeDo/WhatWeDo';
// import HomeInsights from "@components/sections/Insights/Insights";
import Testimonials from "@components/sections/Testimonials/Testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import CustomSwiper from "@shared/Swiper/CustomSwiper";
//import RecentWork from "@components/sections/RecentWork/RecentWork";

import CustomizeExp from "@components/sections/CustomizeExperience/CustomizeExperience";
// import LetsTalk from '@components/sections/LetsTalk/LetsTalk';
import Contacts from "@components/sections/Contacts/Contacts";
import BgImageGrow from "@components/sections/BgImageGrow/BgImageGrow";
import SubNav from "../components/shared/SubNav";
import HorizontalMenu from "../components/sections/HorizontalMenu/HorizontalMenu";

import FadeInText from "@shared/FadeInText/FadeInText";
import TitleLine from "@shared/TitleLine/TitleLine";
import GridGallery from "@components/shared/GridGallery/GridGallery";
import ListImage from "@shared/ListImage/ListImage";
// import SvgArrow from "@components/shared/svgArrow/SvgArrow";
const HomePage = () => {
  const fadeinText =
    "<h2>We're a digital agency committed to building strong partnerships while delivering innovative & creative solutions.</h2>";
  const cardsData = [
    {
      id: 1,
      title: "Clackamas Community College",
      description:
        "Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement",
      imageUrl: "https://picsum.photos/480/480?random=1",
      meta: "design, ux research, sitefinity",
      linkUrl: "CaseStudy",
    },
    {
      id: 2,
      title: "Sturgis Bank",
      description:
        "Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication",
      imageUrl: "https://picsum.photos/480/480?random=2",
      meta: "test, test",
      linkUrl: "CaseStudy",
    },
    {
      id: 3,
      title: "Sturgis Bank",
      description:
        "Enqbator Helps Popular Michigan Community Bank Improve its Intranet for Better Employee Communication",
      imageUrl: "https://picsum.photos/480/480?random=2",
      meta: "test, test",
      linkUrl: "CaseStudy",
    },
  ];
  const prodData = [
    {
      id: 1,
      title: "Clackamas Community College",
      description:
        "Modernizing Student Pathways: Enqbator helps Clackamas Community College transform its digital engagement",
      imageUrl: "https://picsum.photos/773/435?random=1",
      meta: "design, ux research, sitefinity",
      linkUrl: "CaseStudy",
    },
  ];
  return (
    <Layout>
      <section className="section-py pt-60">
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <a href="Header-Footer" className="underline" target="_blank">
                <span>
                  Header & Footer Only <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="Homepage" className="underline" target="_blank">
                <span>
                  Homepage <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="WhoWeAre" className="underline" target="_blank">
                <span>
                  Subpage Sample <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br /> <br />
              <a href="Components" className="underline" target="_blank">
                <span>
                  Components <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="Content-Blocks" className="underline" target="_blank">
                <span>
                  Content Blocks <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="Sections" className="underline" target="_blank">
                <span>
                  Sections <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <br />
              <a href="Landing-Page" className="underline" target="_blank">
                <span>
                  Landing Page <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br /> <br />
              <a href="CaseStudies" className="underline" target="_blank">
                <span>
                  Case Studies <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="CaseStudy" className="underline" target="_blank">
                <span>
                  Case Study <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br /> <br />
              <a href="Careers" className="underline" target="_blank">
                <span>
                  Careers <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
              <br />
              <a href="Careers-Detail" className="underline" target="_blank">
                <span>
                  Career Detail <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
