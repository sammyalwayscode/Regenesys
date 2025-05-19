import React from "react";
import { BeatLoader } from "react-spinners";
import "./Loading.css";

const LoadingComp = () => {
  return (
    <div className="container">
      <BeatLoader size={20} />
    </div>
  );
};

export default LoadingComp;
