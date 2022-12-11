import React, { Fragment } from "react";
import { x_tra_time, sparespark_logo } from "../images";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import { WorkModal } from "../common";
import { Testimonials, News } from ".";

const Works = () => {
  const data = [
    {
      image: x_tra_time,
      delay: 300,
      margin_right: "me-3",
      content:
        "Xtratime is a subsidiary of Gordian Knotz Limited. It was conceived...",
      title: "X-TRATIME",
      about:
        "Xtratime is a subsidiary of Gordian Knotz Limited. It was conceived in 2019.X-tratime’s is a service that allows the end users to get talk time for free.We offer a novel mobile advertising product that can simultaneously allow mobile users to gain free talk time and finish their conversations uninterrupted.",
      overview:
        "ExtraTime is a Software-as-a-Service (SaaS) product that was designed to enhance your experience while talking on your mobile phone. With ExtraTime you are now able to continue talking with your loved one’s on your mobile device without the fear that you might run out of talk time.",
    },
    {
      image: sparespark_logo,
      delay: 500,
      margin_right: "",
      content:
        "Sparespark is an online retailer of car parts. Its product portfolio includes various...",
      title: "SPARESPARK",
      about:
        "Sparespark is an online retailer of car parts. Its product portfolio includes various types of car, truck and motorcycle parts. Sparespark's strong customer focus is evidenced through its various social media platforms.",
      overview:
        "Sparespark’s core function is to serve as an ecommerce platform creating a tree branching from various spare part retailers selling to consumers via Sparespark. Additionally, Sparespark also can work as a medium to advertise mechanics, panel beaters, electricians. It aims to be a one stop solution to any of your mechanical needs.",
    },
  ];

  const displayItems = data.map((item, index) => {
    return (
      <Fragment key={index}>
        <WorkModal
          id={`work_${index}`}
          title={item.title}
          about={item.about}
          overview={item.overview}
        />
        <Fade delay={item.delay} left>
          <div
            className={classNames(
              item.margin_right,
              "shadow rounded mt-2 p-3 bg-white col-md-4"
            )}
          >
            <img
              src={item.image}
              height="300"
              className="img-fluid"
              alt="work"
            />
            <div
              style={{ cursor: "pointer" }}
              className="text-wrap mt-3"
              data-bs-toggle="modal"
              data-bs-target={`#work_${index}`}
            >
              <span className="about-text">
                {item.content}
                <span className="badge badge-info bg-success">Read more</span>
              </span>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  });
  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center about-container">
        <div className=" col-md-12 ">
          <div className="col-md-12">
            <div className="text-center">
              <h3 className="fw-bold text-black mb-4 header-title about-title">
                Our Works
              </h3>
            </div>
            <div className="d-flex justify-content-center about-cards col-md-12 flex-wrap">
              {displayItems}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <News />
    </section>
  );
};

export default Works;
