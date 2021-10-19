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

export const SpinnerWrapper = () => {
  const [staticNameArray, setStaticNameArray] = useState<string[]>([]);
  const [nameArray, setNameArray] = useState<string[]>([]);
  const [whoHasGoneArray, setWhoHasGoneArray] = useState<string[]>([]);

  // Game Variables
  const [rotations, setRotations] = useState<number>(30);
  const [duration, setDuration] = useState<number>(2);
  const [currentName, setCurrentName] = useState<string | undefined>();
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  let moveDistance: number | undefined;
  let selectedName: string | undefined;

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
    if (nameArray.length === 1) {
      setGameOver(true);
    }
  };

  const nextButtonClick = () => {
    if (!gameOver && !gsap.isTweening(".box")) {
      setGameActive(true);
      checkIfCompleted();
      pickRandomName();
      setIsSpinning(true);
      const tl = gsap.timeline();
      tl.to(".box", duration, {
        ease: "power4.inOut",
        y: `+=${moveDistance}`,
        modifiers: {
          y: (y: any) => (parseFloat(y) % (staticNameArray.length * 50)) + "px",
        },
      }).call(() => {
        setIsSpinning(false);
        setWhoHasGoneArray([...whoHasGoneArray!, selectedName!]);
      });
    }
    if (gameOver) {
      setCurrentName("GAME OVER");
    }
  };

  async function getPeople() {
    let response = await axios.get<any>(
      "http://wheelofstandup-api-dev.azurewebsites.net" + "/People"
    );
    console.log(response);

    let people = await response.data
      .filter((person: any) => person.isEnabled)
      .map((person: any) => person.name);
    let peopleMultiplied = duplicateArr(people);
    setNameArray(people);
    setStaticNameArray(peopleMultiplied);
    setCurrentName(peopleMultiplied[5]);
  }

  const resetGame = () => {
    setGameOver(false);
    getPeople();
    setWhoHasGoneArray([]);
  };

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    gsap.set(".box", {
      y: (i: number) => i * 50,
    });
  }, [staticNameArray]);

  const spinnerDimensions = {
    height: "450px",
  };

  return (
    <>
      <div className=" md:flex-row flex-col flex ">
        <div
          className="border-red-400 border-2 flex-1 w-full h-full flex flex-col items-center justify-center  overflow-hidden relative"
          style={spinnerDimensions}
        >
          <Spinner
            staticNameArray={staticNameArray}
            currentName={currentName!}
          />
        </div>
        {/* <button onClick={() => resetGame()}>reset</button> */}
        <InfoPannel
          isSpinning={isSpinning}
          gameActive={gameActive}
          nextButtonClick={nextButtonClick}
          currentName={currentName!}
          nameArray={nameArray}
          whoHasGoneArray={whoHasGoneArray}
        />
      </div>
    </>
  );
};
