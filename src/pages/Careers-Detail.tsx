import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="py-5 mt-5">
        <div className="hero-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <div className="grow-line-box center">
                    <div
                      className="grow-line grad-vert-pink-green"
                      data-aos="grow-animation"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                    />
                  </div>
                  <h1> Business Analyst </h1>
                  <p>
                    Collaborate with amazing individuals, and make a meaningful
                    impact.
                  </p>
                  <a href="#" className="btn btn-primary mx-1">
                    Apply Now
                  </a>{" "}
                  <a href="#details" className="btn btn-outline mx-1">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="details">
        <div className="hero-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <section>
                  <hr />
                  <h3 className="mt-5">About the Role</h3>
                  <p>
                    We are seeking a motivated and detail-oriented{" "}
                    <strong>Business Analyst</strong> to join our dynamic team.
                    In this role, you will bridge the gap between IT and the
                    business, ensuring that technical solutions meet business
                    needs. As a Business Analyst, you will work closely with
                    stakeholders to gather, analyze, and document requirements,
                    and play a key role in the successful implementation of
                    various projects.
                  </p>{" "}
                  <h3 className="mt-5">Key Responsibilities</h3>
                  <ul>
                    <li>
                      Collaborate with stakeholders to identify business needs
                      and translate them into technical solutions.
                    </li>
                    <li>
                      Conduct in-depth analysis of business processes and
                      workflows, identifying areas for improvement.
                    </li>
                    <li>
                      Gather, document, and manage requirements throughout the
                      project lifecycle.
                    </li>
                    <li>
                      Facilitate meetings and workshops with cross-functional
                      teams to ensure clear communication of business
                      objectives.
                    </li>
                    <li>
                      Support the development and implementation of solutions by
                      collaborating with development teams and stakeholders.
                    </li>
                    <li>
                      Ensure solutions meet business goals and are delivered on
                      time and within scope.
                    </li>
                    <li>
                      Conduct testing and validation to ensure quality and
                      functionality of solutions.
                    </li>
                    <li>
                      Provide ongoing support and training to users as needed.
                    </li>
                  </ul>{" "}
                  <h3 className="mt-5">Qualifications</h3>
                  <ul>
                    <li>
                      Bachelor’s degree in Business, Information Technology, or
                      a related field.
                    </li>
                    <li>
                      [Insert Number of Years] years of experience as a Business
                      Analyst or in a similar role.
                    </li>
                    <li>
                      Strong understanding of business processes, data analysis,
                      and project management methodologies.
                    </li>
                    <li>
                      Excellent communication and interpersonal skills, with the
                      ability to work with both technical and non-technical
                      stakeholders.
                    </li>
                    <li>
                      Experience with [Insert relevant tools/software such as
                      SQL, Excel, Tableau, Jira, etc.].
                    </li>
                    <li>
                      Proven problem-solving skills and attention to detail.
                    </li>
                    <li>
                      Experience in [Insert relevant industry if applicable,
                      e.g., healthcare, finance, etc.] is a plus.
                    </li>
                  </ul>{" "}
                  <h3 className="mt-5">Why Join Us?</h3>
                  <ul>
                    <li>
                      Be part of a collaborative and forward-thinking team that
                      is committed to continuous improvement.
                    </li>
                    <li>
                      Opportunities for career growth and professional
                      development.
                    </li>
                    <li>
                      [Insert perks: Competitive salary, health benefits,
                      flexible work environment, etc.]
                    </li>
                    <li>
                      Work on exciting projects that have a real impact on our
                      business and customers.
                    </li>
                  </ul>
                  <h3 className="mt-5">How to Apply</h3>
                  <p>
                    Please submit your resume and cover letter to{" "}
                    <a href="mailto:#" className="underline">
                      <span>jobs@enqbator.com</span>
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
