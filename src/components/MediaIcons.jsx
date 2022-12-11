import React from "react";
import Fade from "react-reveal/Fade";

const MediaIcons = () => {
  return (
    <div className="col-md-5 d-flex justify-content-between flex-wrap">
      <Fade left delay={700}>
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-primary rounded-circle d-flex align-items-center justify-content-center media-icon"
        >
          <i className="fa-brands fa-facebook fw-bold fa-2x text-white"></i>
        </a>
      </Fade>

      <Fade left delay={500}>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-primary rounded-circle d-flex align-items-center media-icon justify-content-center"
        >
          <i className="fa-brands fa-twitter fw-bold fa-2x text-white"></i>
        </a>
      </Fade>

      <Fade left delay={300}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-primary rounded-circle d-flex align-items-center media-icon justify-content-center"
        >
          <i className="fa-brands fa-instagram fw-bold fa-2x text-white"></i>
        </a>
      </Fade>
      <Fade left delay={100}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-primary rounded-circle d-flex align-items-center media-icon justify-content-center"
        >
          <i className="fa-brands fa-youtube fw-bold fa-2x text-white"></i>
        </a>
      </Fade>
    </div>
  );
};

export default MediaIcons;
