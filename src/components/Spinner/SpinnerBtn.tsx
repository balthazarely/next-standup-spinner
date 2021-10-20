import React from "react";

interface NextButtonProps {
  nextButtonClick?: () => void;
}

export const SpinnerBtn = ({ nextButtonClick }: NextButtonProps) => {
  return (
    <div
      onClick={nextButtonClick}
      className=" bg-tonic-base hover:bg-tonic-baseDark  text-white px-4 py-2  cursor-pointer text-sm h-12 flex items-center justify-center   w-full "
    >
      WHO'S UP NEXT?
    </div>
  );
};
