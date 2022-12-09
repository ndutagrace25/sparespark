import React from "react";
import { Navbar } from "../common";
import { Header, AboutUs } from ".";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
};

export default Home;
