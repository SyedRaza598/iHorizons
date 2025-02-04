import React from "react";
import { iBannerProps } from "../types/app";

const Banner: React.FC<iBannerProps> = ({ heading }) => {
  return (
    <div className="banner">
      <h1>{heading}</h1>
    </div>
  );
};

export default Banner;
