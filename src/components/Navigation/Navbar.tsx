import React from "react";
import DarkModeBtn from "../../hooks/useDarkMode";
import { HiOutlineCog, HiOutlineShare } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className="w-100 sm:h-24 h-20 dark:bg-tonic-light bg-tonic-grey transition-all duration-200">
      <div className="container mx-auto flex justify-between px-2 sm:px-0">
        <img
          src="/tonic-logo.png"
          alt="tonic__logo"
          className=" pt-3 md:w-32 w-28"
        />
        <div className="sm:h-24 h-20 flex gap-3 items-center pt-12 text-tonic-base">
          <div data-tip="share" className="tooltip ">
            <HiOutlineShare className="text-tonic-base text-3xl " />
          </div>
          <div data-tip="edit" className="tooltip ">
            <HiOutlineCog className="text-tonic-base text-3xl" />
          </div>
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
};
