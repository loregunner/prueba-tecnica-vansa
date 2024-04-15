"use client";

import { InfoDashborad } from "@/components/info/Info";
import NoSsr from "@/components/noSsr/NoSsr";
import React from "react";

const Info = () => {
  return (
    <NoSsr>
      <InfoDashborad />
    </NoSsr>
  );
};

export default Info;
