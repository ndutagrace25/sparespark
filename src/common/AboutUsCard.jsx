import React, { useState } from "react";
import classNames from "classnames";

const AboutUsCard = ({ title, content, icon_class }) => {
  const [bgColor, setBgColor] = useState("bg-white text-black");
  const [textIcon, setIconColor] = useState("text-success");
  const [titleColor, setTitleColor] = useState("text-black");
  return (
    <div
      className={classNames(
        bgColor,
        "col-md-4 shadow rounded p-3 mx-2 about-card"
      )}
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
        <i className={classNames(icon_class, textIcon, "fw-bold fa-2x")}></i>
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
  );
};

export default AboutUsCard;
