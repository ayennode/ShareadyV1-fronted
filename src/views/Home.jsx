import React from "react";
import Navbar from "../components/navbar/Navbar";
import SignUpBox from "../components/home/SignUpBox";
import WhatBox from "../components/home/WhatBox";
import WhyBoX from "../components/home/WhyBox";
import CreatorBox from "../components/home/CreatorBox";

const Home = () => {
  return (
    <>
      <SignUpBox />
      <WhatBox />
      <WhyBoX />
      <CreatorBox />
    </>
  );
};

export default Home;
