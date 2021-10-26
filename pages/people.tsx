import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { PageWrapper } from "../src/components/Layout/PageWrapper";
import { peopleArray } from "../src/components/people";
import { HiXCircle } from "react-icons/hi";

const People: NextPage = () => {
  const [people, setPeople] = useState<string[]>([]);
  const [newPerson, setNewPerson] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const fetchPeople = () => {
    const savedPeople = localStorage.getItem("savedNameArray");
    if (savedPeople) {
      let parsedPeople = JSON.parse(savedPeople);
      setPeople(parsedPeople);
    } else {
      setPeople(peopleArray);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const removeName = (selectedName: string) => {
    let newArray = people.filter((name) => name !== selectedName);
    console.log(newArray);
    setPeople(newArray);
    localStorage.setItem("savedNameArray", JSON.stringify(newArray));
  };

  const resetName = () => {
    localStorage.removeItem("savedNameArray");
    fetchPeople();
    setShowError(false);
  };

  const clearNames = () => {
    setPeople([]);
    setShowError(false);
    localStorage.setItem("savedNameArray", JSON.stringify([]));
  };

  const addName = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      } else if (people.includes(e.target.value)) {
        console.log("please use a unique name");
        setShowError(true);
        return;
      } else {
        setShowError(false);
        let newArray = [...people, e.target.value];
        setPeople(newArray);
        localStorage.setItem("savedNameArray", JSON.stringify(newArray));
        setNewPerson("");
      }
    }
  };

  return (
    <PageWrapper>
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-1 flex flex-wrap    ">
          {people.map((name, i) => (
            <div key={i} className=" relative">
              <div className="top-0 right-0 absolute">
                <HiXCircle
                  onClick={() => removeName(name)}
                  className="text-white hover:text-gray-200 text-xl cursor-pointer "
                />
              </div>
              <button className="bg-gray-600 m-2 px-4 py-1 rounded-box shadow-md">
                {name}
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1 flex-col flex">
          <div className="text-2xl text-gray-300">Add a Person</div>
          <input
            type="text"
            placeholder="name"
            className="input w-72 mt-2"
            value={newPerson}
            onInput={(e: any) => setNewPerson(e.target.value)}
            onKeyDown={(e: any) => addName(e)}
          />
          <div className="warning text-red-300 h-6 mt-2">
            {showError ? "This name already exisits" : ""}
          </div>
          <div className="flex gap-3 mt-2">
            <button
              onClick={resetName}
              className="bg-tonic-base hover:bg-tonic-baseDark py-2 px-4"
            >
              Reset Names
            </button>
            <button
              onClick={clearNames}
              className="bg-tonic-base hover:bg-tonic-baseDark py-2 px-4"
            >
              Clear Names
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default People;
