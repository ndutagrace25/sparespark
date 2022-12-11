import React from "react";
import { testify } from "../images";
import { AboutUsCard } from "../common";
import Bounce from "react-reveal/Bounce";

const Testimonials = () => {
  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center about-container">
        <Bounce delay={300}>
          <div className="col-md-4 about-img">
            <img alt="about" src={testify} className="header-img" />
          </div>
        </Bounce>
        <div className=" col-md-8 ">
          <div className="col-md-12">
            <div className="text-center">
              <h3 className="fw-bold text-black mb-4 header-title about-title">
                Testimonials
              </h3>
            </div>
            <div className="d-flex justify-content-between about-cards col-md-12">
              <AboutUsCard
                icon_class="fa-solid fa-quote-left"
                content={
                  <span className="fst-italic">
                    “I don’t know what else to say. We’ve used web development,
                    consulting, griotic design for the last five years.”
                  </span>
                }
                delay={300}
              />
              <AboutUsCard
                icon_class="fa-solid fa-quote-left"
                delay={500}
                content={
                  <div className="fst-italic">
                    <div>
                      “Web development, consulting, graphic design impressed me
                      on multiple levels. Thanks guys, keep up the good work! I
                      would be lost without web development, consulting,
                      neumorphic design. If you want real marketing that works
                      and effective implementation – web development,
                      consulting, neumorphic design’s got you covered.”
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                      ~Consultant
                    </div>
                  </div>
                }
              />
              <AboutUsCard
                icon_class="fa-solid fa-quote-left"
                delay={700}
                content={
                  <div className="fst-italic">
                    <div>
                      “I made back the purchase price in just 48 hours! Teaching
                      web has got everything I need. The best on the net!”
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                      ~Programmer
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

export default Testimonials;
