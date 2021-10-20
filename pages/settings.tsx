import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { PageWrapper } from "../src/components/Layout/PageWrapper";

const Settings: NextPage = () => {
  const [state, setState] = useState({
    spinnerSpped: "10",
    spinnerDuration: "1",
    ease: "power4.inOut",
  });

  const setLocalStorage = (e: any, value: string) => {
    setState({
      ...state,
      [value]: [e.currentTarget.value],
    });
  };

  useEffect(() => {
    const settings = localStorage.getItem("TonicSpinnerSettings");
    if (settings) {
      let parsedSettings = JSON.parse(settings);
      if (parsedSettings.spinnerDuration) {
        setState({
          ...state,
          spinnerDuration: parsedSettings.spinnerDuration,
          spinnerSpped: parsedSettings.spinnerSpped,
          ease: parsedSettings.ease,
        });
      }
    } else {
      localStorage.setItem("TonicSpinnerSettings", JSON.stringify(state));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TonicSpinnerSettings", JSON.stringify(state));
  }, [state]);

  return (
    <PageWrapper>
      <div className="text-4xl">Settings</div>
      <div className="settings__container mt-10">
        <div className="mb-4 flex items-center ">
          <div className="text-gray-300 w-32 ">Spinner Speed</div>
          <select
            value={state.spinnerSpped}
            onChange={(e) => setLocalStorage(e, "spinnerSpped")}
            className="select select-bordered w-28 max-w-xs ml-3"
          >
            <option value="1">1</option>
            <option value="5">10</option>
            <option value="10">20</option>
            <option value="20">30</option>
            <option value="30">40</option>
          </select>
        </div>
        <div className="flex mb-4 items-center">
          <div className="text-gray-300  w-32 ">Spinner Duration</div>
          <select
            value={state.spinnerDuration}
            onChange={(e) => setLocalStorage(e, "spinnerDuration")}
            className="select select-bordered w-28 max-w-xs ml-3 "
          >
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="mb-4 flex items-center ">
          <div className="text-gray-300 w-32 ">Ease</div>
          <select
            value={state.ease}
            onChange={(e) => setLocalStorage(e, "ease")}
            className="select select-bordered w-28 max-w-xs ml-3"
          >
            <option value="power4.inOut">Normal</option>
            <option value="back.inOut(0.7)">Snappy</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Settings;
