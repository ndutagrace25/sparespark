import React from "react";
import { logo } from "../images";

const Footer = ({
  scrollToAbout,
  scrollToServices,
  scrollToWorks,
  scrollToContact,
  scrollToHome,
}) => {
  return (
    <footer className="d-flex footer flex-column">
      <div className="border-top border-bottom my-3 d-flex justify-content-between py-3 col-md-12 footer-items">
        <div className="col-md-3 footer-text">
          <div>
            <img
              alt="logo"
              src={logo}
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToHome()}
            />
          </div>
          <div className="my-2">
            The Fourth Industrial Revolution Begins Here
          </div>
        </div>
        <div className="col-md-3">
          <div className="fw-bold fs-5">Services</div>
          <div className="footer-text my-1">UI Design</div>
          <div className="footer-text my-1">Digital Strategy</div>
          <div className="footer-text my-1">Social Media</div>
          <div className="footer-text my-1">Content Writing</div>
        </div>
        <div className="col-md-3">
          <div className="fw-bold fs-5">Quick Links</div>
          <div
            className="footer-text my-1"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToHome()}
          >
            Home
          </div>
          <div
            className="footer-text my-1"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToAbout()}
          >
            About Us
          </div>
          <div
            className="footer-text my-1"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToServices()}
          >
            Services
          </div>
          <div
            className="footer-text my-1"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToWorks()}
          >
            Works
          </div>
          <div
            className="footer-text my-1"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToContact()}
          >
            Contacts
          </div>
        </div>
        <div className="col-md-3">
          <div className="fw-bold fs-5">Contact</div>
          <div className="footer-text my-1">
            Kirichwa RD, Kilimani Business Center, 2nd Floor
          </div>
          <div className="footer-text my-1">0115 466110</div>
          <div className="footer-text my-1">support@gordianknotz.tech</div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-3 copyright">
        <div className="footer-text">
          Copyright © 2022. All rights reserved by GordianKnotz
        </div>
        <div className="col-md-4 d-flex justify-content-between footer-icon">
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-facebook fw-bold  text-white"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-twitter fw-bold text-white"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-instagram fw-bold text-white"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fa-brands fa-youtube fw-bold text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
