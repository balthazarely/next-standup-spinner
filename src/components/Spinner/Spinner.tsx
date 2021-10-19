import React from "react";
import { SpinnerBox } from "./SpinnerBox";

const spinnerDimensions = {
  width: "250px",
  height: "450px",
  marginTop: " -100px",
};

interface SpinnerProps {
  staticNameArray: any[];
  currentName: string;
}

export const Spinner = ({ staticNameArray, currentName }: SpinnerProps) => {
  return (
    <div style={spinnerDimensions}>
      {staticNameArray.map((name, i) => (
        <SpinnerBox key={i} name={name} currentName={currentName} />
      ))}
    </div>
  );
};
