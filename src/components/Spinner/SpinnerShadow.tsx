import React from "react";

const shadowDimensions = {
  width: "250px",
  height: "200px",
  marginTop: " -50px",
  marginBottom: " -50px",
};

export const SpinnerShadow = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-tonic-dark absolute top-0 z-50 opacity-70"
        style={shadowDimensions}
      ></div>
      <div
        className="bg-gradient-to-t from-tonic-dark  absolute bottom-0 z-50 opacity-70"
        style={shadowDimensions}
      ></div>
    </div>
  );
};
