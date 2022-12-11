import React from "react";
import { MediaIcons } from ".";
import { Footer } from "../common";

const Contact = ({
  myRef,
  scrollToAbout,
  scrollToServices,
  scrollToWorks,
  scrollToContact,
  scrollToHome,
}) => {
  return (
    <section ref={myRef}>
      <div className="contact-container">
        <div className="py-5 d-flex justify-content-center flex-column align-items-center">
          <MediaIcons />
          <div className="header-title fw-bold fs-3 my-5">
            Have any projects in mind?
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#register"
            className="btn btn-light btn-outline-success px-5"
          >
            GET STARTED
          </button>
        </div>
        <Footer
          scrollToAbout={scrollToAbout}
          scrollToServices={scrollToServices}
          scrollToWorks={scrollToWorks}
          scrollToContact={scrollToContact}
          scrollToHome={scrollToHome}
        />
      </div>
    </section>
  );
};

export default Contact;
