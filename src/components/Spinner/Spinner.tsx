import React from "react";
import { SpinnerBox } from "./SpinnerBox";
import { SpinnerShadow } from "./SpinnerShadow";
import { SpinnerTarget } from "./SpinnerTarget";

const spinnerDimensions = {
  width: "250px",
  height: "650px",
  marginTop: " -100px",
};

interface SpinnerProps {
  staticNameArray: any[];
  currentName: string;
  whoHasGoneArray: any[];
}

export const Spinner = ({
  staticNameArray,
  currentName,
  whoHasGoneArray,
}: SpinnerProps) => {
  return (
    <div className="relative">
      <SpinnerTarget />
      <SpinnerShadow />
      <div style={spinnerDimensions} className=" z-40">
        {staticNameArray.map((name, i) => (
          <SpinnerBox
            key={i}
            name={name}
            currentName={currentName}
            whoHasGoneArray={whoHasGoneArray}
          />
        ))}
      </div>
    </div>
  );
};
