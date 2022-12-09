import React from "react";
import { Navbar } from "../common";
import { Header, AboutUs, Services } from ".";

const Home = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <Navbar />
        <Header />
        <AboutUs />
        <Services />
      </div>
    </div>
  );
};

export default Home;
