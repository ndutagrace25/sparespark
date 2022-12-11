import React, { useState, Fragment } from "react";
import classNames from "classnames";
import Fade from "react-reveal/Fade";

const AboutUsCard = ({ title, content, icon_class, delay, key }) => {
  const [bgColor, setBgColor] = useState("bg-white text-black");
  const [textIcon, setIconColor] = useState("text-success");
  const [titleColor, setTitleColor] = useState("text-black");
  return (
    <Fragment key={key}>
      <Fade bottom delay={delay}>
        <div
          className={classNames(bgColor, "shadow rounded p-3 about-card mt-3")}
          onMouseEnter={() => {
            setBgColor("bg-success text-white");
            setIconColor("text-white");
            setTitleColor("text-white");
          }}
          onMouseLeave={() => {
            setBgColor("bg-white text-black");
            setIconColor("text-success");
            setTitleColor("text-black");
          }}
        >
          <div className="d-flex justify-content-center py-2">
            <i
              className={classNames(icon_class, textIcon, "fw-bold fa-2x")}
            ></i>
          </div>
          <div
            className={classNames(
              titleColor,
              "d-flex fw-bold justify-content-center pb-2 text-capitalize about-sub-title"
            )}
          >
            {title}
          </div>
          <div className="text-justify about-text">{content}</div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default AboutUsCard;
