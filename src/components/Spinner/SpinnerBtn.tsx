import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

interface NextButtonProps {
  nextButtonClick?: () => void;
  isSpinning: boolean;
}

export const SpinnerBtn = ({
  nextButtonClick,
  isSpinning,
}: NextButtonProps) => {
  return (
    <div
      onClick={nextButtonClick}
      className=" bg-tonic-base hover:bg-tonic-baseDark  text-white   cursor-pointer text-sm h-12 flex items-center justify-center   w-full "
    >
      {isSpinning ? (
        <div className=" h-12 flex items-center justify-center ">
          <BeatLoader color="white" loading={true} size={7} />
        </div>
      ) : (
        <div className="  h-12 flex items-center ">WHO'S UP NEXT?</div>
      )}
    </div>
  );
};
