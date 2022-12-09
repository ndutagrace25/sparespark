import React from "react";
import { world } from "../images";

const Header = () => {
  return (
    <div className="d-flex my-5  pb-5 justify-content-between align-items-center flex-row header-container">
      <div className="mobile-view-header">
        {/* <img src="https://gordianknotz.tech/wp-content/uploads/2022/11/ezgif.com-gif-maker.gif" alt="header"/> */}
        <img src={world} alt="header" className="header-img" />
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center col-md-6">
        <div className="fw-bold text-black header-title text-capitalize">
          Fourth industrial Revolution Begins Here
        </div>
        <div className="mt-2 header-text">
          Innovation is the heart of success in any business that drives major
          economies and great companies around the world.{" "}
        </div>
        <div className="mt-3">
          <button className="btn btn-light btn-outline-success px-5">
            GETTING STARTED
          </button>
        </div>
      </div>
      <div className="desktop-view-header">
        {/* <img src="https://gordianknotz.tech/wp-content/uploads/2022/11/ezgif.com-gif-maker.gif" alt="header"/> */}
        <img src={world} alt="header" className="header-img" />
      </div>
    </div>
  );
};

export default Header;
