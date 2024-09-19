import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layouts/Layout";
import GridGallery from "@components/shared/GridGallery/GridGallery";
import SortingCheckboxes from "@components/shared/Dropdown/Dropdown";
const CaseStudies = () => {
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
      title: "Placeholder Title",
      description: "This is some placeholder content for the first post.",
      imageUrl: "https://picsum.photos/480/480?random=3",
      meta: "test, test",
      linkUrl: "CaseStudy",
    },
    {
      id: 4,
      title: "Placeholder Title",
      description: "This is some placeholder content for the first post.",
      imageUrl: "https://picsum.photos/480/480?random=4",
      meta: "test, test",
      linkUrl: "CaseStudy",
    },
  ];
  return (
    <Layout>
      <section id="section1" className="pt-6">
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

              <h1>Case Studies</h1>
              <p>
                I&apos;ve never seen a wild thing feel sorry for itself. A bird
                will fall frozen dead from a bough without ever having felt
                sorry for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <SortingCheckboxes />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <GridGallery cards={cardsData} numColumns={2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
