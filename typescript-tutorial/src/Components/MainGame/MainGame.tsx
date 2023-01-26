import React, { useCallback, useEffect, useState } from "react";
import backgroundColors from "../utils/types";
import style from "../Styles/MainGame.module.css";
import setColorPattern from "../functions/setColorPattern";
import GenerateNewNumber from "../functions/ComputersTurn";

// this will let us know which button will light up
// we need to store that number in a list
// we will iterate over the list an change the color of the
// button depending on the id
// we need user to then click the button

let defaultList: string[] = [];

function MainGame() {
  let [computerChoice, setComputerChoice] = useState(defaultList);
  let [turnNum, setTurnNum] = useState(0);
  let [listOfColor, setListOfColor] = useState(defaultList);
  let [btnColors, setBtnColors] = useState(backgroundColors);

  const memorizedFunc = useCallback(() => {
    listOfColor.forEach((color) => {
      onClickColorUpdate(color);
    });
  }, [listOfColor]);

  useEffect(() => {
    memorizedFunc();
  }, [turnNum]);

  function computersTurn(): void {
    // computers turn
    let updatedColorList: string[] = [];

    let colorPicked: string = GenerateNewNumber(computerChoice);

    setComputerChoice((prevArray) => [...prevArray, colorPicked]);

    updatedColorList = setColorPattern(computerChoice);

    setListOfColor(updatedColorList);

    console.log("listofColor = ", listOfColor);
    setTurnNum((turnNum += 1));
  }

  function onClickColorUpdate(color: string): void {
    switch (color) {
      case "blue":
        setBtnColors({ ...btnColors, blue: "grey" });
        setTimeout(() => {
          setBtnColors({ ...btnColors, blue: "blue" });
        }, 1000);
        break;
      case "red":
        setBtnColors({ ...btnColors, red: "grey" });
        setTimeout(() => {
          setBtnColors({ ...btnColors, red: "red" });
        }, 1000);
        break;
      case "green":
        setBtnColors({ ...btnColors, green: "grey" });
        setTimeout(() => {
          setBtnColors({ ...btnColors, green: "green" });
        }, 1000);
        break;
      default:
        setBtnColors({ ...btnColors, yellow: "grey" });
        setTimeout(() => {
          setBtnColors({ ...btnColors, yellow: "yellow" });
        }, 1000);
    }
  }

  console.log("outside:", computerChoice);
  console.log(`outside log colorlist: ${listOfColor}`);
  console.log(`outside log colors: ${btnColors["blue"]}`);

  return (
    <div>
      <div>
        <label>Round</label>
        {turnNum}
      </div>
      <div
        className={style.blueButton}
        style={{ backgroundColor: btnColors["blue"] }}
        onClick={() => {
          onClickColorUpdate("blue");
        }}
      >
        Blue
      </div>
      <div
        className={style.redButton}
        style={{ backgroundColor: btnColors["red"] }}
        onClick={() => {
          onClickColorUpdate("red");
        }}
      >
        Red
      </div>
      <div
        className={style.greenButton}
        style={{ backgroundColor: btnColors["green"] }}
        onClick={() => {
          onClickColorUpdate("green");
        }}
      >
        Green
      </div>
      <div
        className={style.yellowButton}
        style={{ backgroundColor: btnColors["yellow"] }}
        onClick={() => {
          onClickColorUpdate("yellow");
        }}
      >
        Yellow
      </div>
      <div>
        <button onClick={computersTurn}>Click to start game</button>
      </div>
    </div>
  );
}

export default MainGame;
