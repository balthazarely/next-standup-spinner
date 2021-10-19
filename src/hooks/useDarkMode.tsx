import React, { useState, useEffect } from "react";
import { HiLightBulb, HiOutlineMoon } from "react-icons/hi";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const storedData = localStorage.getItem("tonicDarkMode");
    setDarkMode(storedData === "true" ? true : false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("tonicDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("tonicDarkMode", "false");
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div data-tip="dark mode" className="tooltip ">
      <button onClick={onClick}>
        {darkMode ? (
          <HiLightBulb className="text-tonic-base text-3xl" />
        ) : (
          <HiOutlineMoon className="text-tonic-base text-3xl" />
        )}
      </button>
    </div>
  );
};

export default DarkModeBtn;
