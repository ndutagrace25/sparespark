import React from "react";
import { Navbar } from "../common";
import { Header, AboutUs, Services, Works, Contact, Register } from ".";

const Home = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <Navbar />
        <Register/>
        <Header />
        <AboutUs />
        <Services />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
