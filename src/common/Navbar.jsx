import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../images";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} className="image-fluid logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold fs-6 text-uppercase text-black"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-black">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-success bg-black text-white text-uppercase fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#register"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
