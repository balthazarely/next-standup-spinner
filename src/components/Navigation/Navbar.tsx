import React from "react";
import DarkModeBtn from "../../hooks/useDarkMode";
import Link from "next/link";
import Image from "next/image";

import { HiOutlineCog, HiOutlineShare } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className="w-100 h-20  dark:bg-tonic-light bg-tonic-grey transition-all duration-200 ">
      <div className="container mx-auto flex justify-between px-4 ">
        {/* <Link href="/spinner"> */}
        <div className="logo text-black w-24 pt-5 cursor-pointer">
          <Image
            src="/tonic-logo.png"
            alt="tonic__logo"
            width={500}
            height={500}
          />
        </div>
        {/* </Link> */}
        <div className="flex gap-2 mb-1 items-center text-tonic-base">
          {/* <Link href="/spinner"> */}
          <div className="text-tonic-base hover:text-tonic-baseLight text-xl font-bold cursor-pointer">
            Spinner
          </div>
          {/* </Link> */}
          <HiOutlineShare className="text-tonic-base  hover:text-tonic-baseLight  text-3xl cursor-pointer " />
          {/* <Link href="/settings"> */}
          <HiOutlineCog className="text-tonic-base  hover:text-tonic-baseLight  text-3xl cursor-pointer" />
          {/* </Link> */}
          {/* <DarkModeBtn /> */}
        </div>
      </div>
    </div>
  );
};
