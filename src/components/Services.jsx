import React from "react";
import { AboutUsCard } from "../common";

const Services = () => {
  const data = [
    {
      title: "Digital Strategy",
      content:
        "Developing a blueprint and laying out a digital strategy template can help to see the bigger picture, to pinpoint where digital options can be applied to harness efficiency and effectiveness. This plan can be utilized to reduce waste, keep departments on track, monitor progress and make necessary adjustments.",
      delay: 300,
      icon_class: "fa-solid fa-chart-line",
    },
    {
      title: "UI Design",
      content:
        "Rebrand your business? Packaging ? we have it all, Count on us to curate a design that shall accurately reflect your goals and intentions to your consumers",
      delay: 500,
      icon_class: "fa-solid fa-pen-ruler",
    },
    {
      title: "Content Writing",
      content:
        "Rebrand your business? Packaging ? we have it all, Count on us to curate a design that shall accurately reflect your goals and intentions to your consumers",
      delay: 700,
      icon_class: "fa-solid fa-file-pen",
    },
    {
      title: "Marketing Strategy",
      content:
        "Our marketing strategy allows organizations to focus limited resources on best opportunities to increase sales and achieve a competitive advantage in the market.",
      delay: 900,
      icon_class: "fa-regular fa-bullhorn",
    },
    {
      title: "Web Development",
      content:
        "Our web design encompasses many different skills and disciplines in creating and maintaining websites. The different areas of web design include web graphic design; UI design; authorship, including standardized codes and proprietary software; user experience design; and search engine",
      delay: 1000,
      icon_class: "fa-solid fa-code",
    },
    {
      title: "Social Media management",
      content:
        "Boost your efficiency, using social media platforms and websites to push a product or service. though the terms e-marketing and digital marketing are still dominant in academia, social media marketing is turning into additional common for each practitioners and researchers",
      delay: 1000,
      icon_class: "fa-solid fa-circle-nodes",
    },
  ];

  const displayItems = data.map((item, index) => {
    return (
      <AboutUsCard
        title={item.title}
        content={item.content}
        delay={item.delay}
        key={index}
        icon_class={item.icon_class}
      />
    );
  });
  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center about-container">
        <div className=" col-md-12 ">
          <div className="col-md-12">
            <div className="text-center">
              <h3 className="fw-bold text-black mb-4 header-title about-title">
                Services
              </h3>
            </div>
            <div className="d-flex justify-content-between about-cards col-md-12 flex-wrap">
              {displayItems}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
