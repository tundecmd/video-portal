import React from "react";

import Rows from "./Rows";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Rows />
    </div>
  );
};

export default Homepage;
