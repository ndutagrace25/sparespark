import React from "react";
import { about } from "../images";
import { AboutUsCard } from "../common";
import Bounce from "react-reveal/Bounce";

const AboutUs = ({myRef}) => {
  return (
    <section className="" ref={myRef}>
      <div className="d-flex justify-content-between align-items-center about-container">
        <Bounce delay={300}>
          <div className="col-md-4 about-img">
            <img alt="about" src={about} className="header-img" />
          </div>
        </Bounce>
        <div className=" col-md-8 ">
          <div className="col-md-12">
            <div className="text-center">
              <h3 className="fw-bold text-black mb-4 header-title about-title">
                About Us
              </h3>
            </div>
            <div className="d-flex justify-content-between about-cards col-md-12">
              <AboutUsCard
                icon_class="fa-regular fa-paper-plane"
                title="Future Concept"
                content="Providing technology support for businesses and individuals. We provide
        services for many industry vendors that you are most likely familiar
        with."
                delay={300}
              />
              <AboutUsCard
                icon_class="fa-solid fa-globe"
                title="The Big Ideas"
                delay={500}
                content="YouTube began as a failed video-dating site. Twitter was a failed music service. In each case, the founders continued to try new concepts when their big ideas failed. They often worked around the clock to try to overcome their failure before all their capital was spent. Speed to fail gives a startup more runway to pivot and ultimately succeed."
              />
              <AboutUsCard
                icon_class="fa-solid fa-lightbulb"
                title="Creative Solutions"
                delay={700}
                content={
                  <div>
                    "The best creative solutions don’t come from finding good
                    answers to the questions that are presented… They come from
                    inventing new questions!” ~ Seth Godin
                    <div className="pt-2">
                      Gordian Knotz takes this approach to use software as a
                      solution to create solutions
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
