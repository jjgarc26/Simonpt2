import React, { useCallback, useEffect, useState } from "react";
import backgroundColors from "../utils/types";
import style from "../Styles/MainGame.module.css";
import colorChoice from "../functions/setColorPattern";
import GenerateNewNumber from "../functions/ComputersTurn";

// this will let us know which button will light up
// we need to store that number in a list
// we will iterate over the list an change the color of the
// button depending on the id
// we need user to then click the button

let defaultList: string[] = [];

function MainGame() {
  // game settings
  let [turnNum, setTurnNum] = useState(0);
  let [btnColors, setBtnColors] = useState(backgroundColors);

  // computer settings
  let [computerChoice, setComputerChoice] = useState(defaultList);
  let [listOfColor, setListOfColor] = useState(defaultList);

  // user settings
  let [userChoice, setUserChoice] = useState(defaultList);

  const memorizedFunc = useCallback(() => {
    listOfColor.map((color) => {
      onClickColorUpdate(color);
    });
  }, [listOfColor]);

  useEffect(() => {
    memorizedFunc();
  }, [computerChoice, listOfColor, turnNum]);

  function computerPicksNewColor(): void {
    let colorPicked: string = GenerateNewNumber(computerChoice);
    console.log(`coloPicked ${colorPicked}`);

    setComputerChoice((prevArray) => {
      return [...prevArray, colorPicked];
    });
    updateColorPatterns(colorPicked);
  }

  function updateColorPatterns(colorPicked: string): void {
    let idToString: number = parseInt(colorPicked);
    let color: string = colorChoice(idToString);
    setListOfColor((prevArray) => {
      return [...prevArray, color];
    });
    setTurnNum((turnNum += 1));
  }

  console.log(`compChocot: ${computerChoice}`);
  console.log("listofColorOt = ", listOfColor);

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
        <button onClick={computerPicksNewColor}>Click to start game</button>
      </div>
    </div>
  );
}

export default MainGame;
