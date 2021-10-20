import React, { useState, useEffect } from "react";

const boxDimensions = {
  width: "250px",
  height: "50px",
};

interface SpinnerBoxProps {
  name: string;
  currentName: string;
  whoHasGoneArray: any[];
}

export const SpinnerBox = ({ name, whoHasGoneArray }: SpinnerBoxProps) => {
  const [hasNameBeenCalled, setHasNameBeenCalled] = useState<boolean>(false);

  useEffect(() => {
    let doesMatch = whoHasGoneArray.find((item) => item === name);
    if (doesMatch) {
      setHasNameBeenCalled(true);
    }
  }, [whoHasGoneArray]);

  return (
    <div
      className={`box absolute z-10 border-r-2 border-l-2 border-white border-opacity-50  text-gray-300 font-light text-2xl flex items-center justify-center 
      ${hasNameBeenCalled ? "line-through" : ""} `}
      style={boxDimensions}
    >
      {name}
    </div>
  );
};
