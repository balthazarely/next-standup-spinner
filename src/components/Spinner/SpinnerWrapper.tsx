import React from "react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { Spinner } from "./Spinner";
import { InfoPannel } from "./InfoPannel";
import {
  calculateSpinnerDistance,
  duplicateArr,
  getRandomInt,
} from "../Utilities/Utilities";
import { SpinnerTarget } from "./SpinnerTarget";
import { SpinnerBtn } from "./SpinnerBtn";
import { SpinnerInfo } from "./SpinnerInfo";

export const SpinnerWrapper = () => {
  const [staticNameArray, setStaticNameArray] = useState<string[]>([]);
  const [nameArray, setNameArray] = useState<string[]>([]);
  const [whoHasGoneArray, setWhoHasGoneArray] = useState<string[]>([]);

  // Game Variables
  const [rotations, setRotations] = useState<number>(10);
  const [duration, setDuration] = useState<number>(2);
  const [ease, setEase] = useState<string>("power4.inOut");
  const [currentName, setCurrentName] = useState<string | undefined>();
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  // non-state variables
  let moveDistance: number | undefined;
  let selectedName: string | undefined;
  let stopSpinner: boolean = false;

  // Game Logic
  const pickRandomName = () => {
    let randomInt = getRandomInt(nameArray.length);
    selectedName = nameArray[randomInt];

    setNameArray(nameArray.filter((name) => name !== selectedName));
    moveDistance = calculateSpinnerDistance(
      currentName,
      selectedName,
      rotations,
      staticNameArray
    );
    setCurrentName(selectedName);
  };

  const checkIfCompleted = () => {
    if (nameArray.length === 0) {
      setGameActive(false);
      setGameOver(true);
      stopSpinner = true;
    }
  };

  const nextButtonClick = () => {
    checkIfCompleted();
    if (stopSpinner) {
      return;
    }
    if (!gameOver && !gsap.isTweening(".box")) {
      setGameActive(true);
      pickRandomName();
      setIsSpinning(true);
      const tl = gsap.timeline();
      tl.to(".box", duration, {
        ease: ease,
        y: `+=${moveDistance}`,
        modifiers: {
          y: (y: any) => (parseFloat(y) % (staticNameArray.length * 50)) + "px",
        },
      }).call(() => {
        console.log("hitting timline");
        setIsSpinning(false);
        setWhoHasGoneArray([...whoHasGoneArray!, selectedName!]);
        // checkIfCompleted();
      });
    }
  };

  async function getPeople() {
    let response = await axios.get<any>(
      "http://wheelofstandup-api-dev.azurewebsites.net" + "/People"
    );

    let people = await response.data
      .filter((person: any) => person.isEnabled)
      .map((person: any) => person.name);
    //TODO: change these 2 lines
    let peopleMultiplied = duplicateArr(people);
    setNameArray(people);
    setStaticNameArray(peopleMultiplied);
    setCurrentName(peopleMultiplied[7]);
  }

  const resetGame = () => {
    setGameOver(false);
    getPeople();
    setWhoHasGoneArray([]);
  };

  useEffect(() => {
    const settings = localStorage.getItem("TonicSpinnerSettings");
    if (settings) {
      let parsedSettings = JSON.parse(settings);
      if (parsedSettings.spinnerDuration) {
        setDuration(Number(parsedSettings.spinnerDuration));
        setRotations(Number(parsedSettings.spinnerSpped));
        setEase(parsedSettings.ease[0]);
      }
    }
  }, []);

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    gsap.set(".box", {
      y: (i: number) => i * 50,
    });
  }, [staticNameArray]);

  const spinnerDimensions = {
    height: "650px",
  };

  return (
    <div className="">
      <div className=" md:flex-row flex-col flex gap-10  ">
        <div className="flex-1 w-full h-full ">
          <SpinnerBtn nextButtonClick={nextButtonClick} />
        </div>
        <div className="flex-1 w-full h-full "> </div>
      </div>
      <div className=" md:flex-row flex-col flex gap-10  ">
        <div
          className="flex-1 w-full h-full flex flex-col items-center justify-center  overflow-hidden relative"
          style={spinnerDimensions}
        >
          <Spinner
            staticNameArray={staticNameArray}
            currentName={currentName!}
            whoHasGoneArray={whoHasGoneArray}
          />
        </div>

        {/* <button onClick={() => resetGame()}>reset</button> */}
        <SpinnerInfo
          gameOver={gameOver}
          isSpinning={isSpinning}
          gameActive={gameActive}
          currentName={currentName!}
          nameArray={nameArray}
          whoHasGoneArray={whoHasGoneArray}
        />
      </div>
      {/* <InfoPannel
        isSpinning={isSpinning}
        gameActive={gameActive}
        currentName={currentName!}
        nameArray={nameArray}
      /> */}
    </div>
  );
};
