"use client";

import React from "react";
import HomeInfo from "@/components/home/Home";
import NoSsr from "@/components/noSsr/NoSsr";

const Home = () => {
  return (
    <NoSsr>
      <HomeInfo />
    </NoSsr>
  );
};

export default Home;
