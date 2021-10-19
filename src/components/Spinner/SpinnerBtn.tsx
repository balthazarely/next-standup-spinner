import React from "react";

interface NextButtonProps {
  nextButtonClick?: () => void;
}

export const SpinnerBtn = ({ nextButtonClick }: NextButtonProps) => {
  return (
    <div
      onClick={nextButtonClick}
      className=" bg-blue-500 text-white px-4 py-2 text-center cursor-pointer text-lg w-28 rounded-md "
    >
      Spin
    </div>
  );
};
