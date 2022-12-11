import React from "react";
import { world } from "../images";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Header = () => {
  return (
    <section className="d-flex justify-content-between align-items-center flex-row header-container">
      <Bounce delay={300}>
        <div className="mobile-view-header col-md-12 col-sm-12">
          <img src={world} alt="header" className="header-img-mobile img-fluid" />
        </div>
      </Bounce>

      <div className="d-flex justify-content-center flex-column align-items-center col-md-5">
        <Zoom when={true} in={true}>
          <div className="fw-bold text-black header-title text-capitalize">
            Fourth industrial Revolution Begins Here
          </div>
        </Zoom>
        <Zoom>
          <div className="mt-2 header-text">
            Innovation is the heart of success in any business that drives major
            economies and great companies around the world.
          </div>
        </Zoom>
        <Fade bottom>
          <div className="mt-3">
            <button
              className="btn btn-light btn-outline-success px-5"
              data-bs-toggle="modal"
              data-bs-target="#register"
            >
              GET STARTED
            </button>
          </div>
        </Fade>
      </div>
      <Bounce delay={300}>
        <div className="desktop-view-header">
          <img src={world} alt="header" className="header-img" />
        </div>
      </Bounce>
    </section>
  );
};

export default Header;
