import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        background: "rgba(128, 0, 128, 0.3)",
      }}
      className=" w-screen h-screen fixed flex justify-center items-center"
    >
      <FadeLoader color="#7e22ce" />
    </div>
  );
};

export default Loading;
