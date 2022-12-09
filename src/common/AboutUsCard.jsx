import React from "react";
import classNames from "classnames";

const AboutUsCard = ({ title, content, icon_class }) => {
  return (
    <div className="col-md-4 shadow rounded p-3 mx-2">
      <div className="d-flex justify-content-center py-2">
        <i
          className={classNames(
            icon_class,
            "text-success fw-bold fa-2x"
          )}
        ></i>
      </div>
      <div className="d-flex text-black fw-bold justify-content-center pb-2 text-capitalize about-sub-title">
        {title}
      </div>
      <div className="text-justify about-text">
        {content}
      </div>
    </div>
  );
};

export default AboutUsCard;
