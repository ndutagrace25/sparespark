import React from "react";
import { Navbar } from "../common";
import { Header, AboutUs, Services } from ".";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
