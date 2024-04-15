"use client";

import NoSsr from "@/components/noSsr/NoSsr";
import VideoDashboard from "@/components/video/Video";
import React from "react";

const Video = () => {
  return (
    <NoSsr>
      <VideoDashboard />
    </NoSsr>
  );
};

export default Video;
