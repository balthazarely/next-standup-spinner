import React from "react";
import { SpinnerBtn } from "./SpinnerBtn";

interface InfoPannelProps {
  isSpinning: boolean;
  gameActive: boolean;
  currentName: string;
  whoHasGoneArray: string[];
  nameArray: string[];
  gameOver: boolean;
}

const borderStyle = {
  borderBottom: "1px solid white",
  height: "30px",
};

export const SpinnerInfo = ({
  isSpinning,
  gameActive,
  currentName,
  whoHasGoneArray,
  nameArray,
  gameOver,
}: InfoPannelProps) => {
  return (
    <div className="text-5xl flex-1 text-white font-extrabold  md:-mt-12 mt-12 ">
      <div className="">
        <div
          className="text-base font-light text-white mb-1 pl-1"
          style={borderStyle}
        >
          Who Has Gone
        </div>

        <div className="">
          {whoHasGoneArray.map((name) => (
            <div
              key={name}
              className={`text-base font-light py-0.5 px-2 flex items-center justify-between  ${
                currentName === name && !gameOver
                  ? "bg-tonic-base "
                  : "text-white"
              }`}
            >
              <div>{name}</div>
              <div>{currentName === name && !gameOver ? "Up now" : ""}</div>
            </div>
          ))}
        </div>
        {gameOver && <div className="text-3xl mt-3 ">Enjoy your weekend!</div>}
      </div>
    </div>
  );
};
