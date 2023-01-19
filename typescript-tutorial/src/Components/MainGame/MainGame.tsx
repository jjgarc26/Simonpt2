import React, { useEffect, useState } from "react";
import style from "../Styles/MainGame.module.css";
import setColorPattern from "../functions/setColorPattern";
import ComputersTurn from "../functions/ComputersTurn";

// this will let us know which button will light up
// we need to store that number in a list
// we will iterate over the list an change the color of the
// button depending on the id
// we need user to then click the button

let defaultList: string[] = [];

function MainGame() {
  let [gameStatus, setGameStatus] = useState("play");
  let [computerChoice, setComputerChoice] = useState(defaultList);
  let [userChoice, setUserChoice] = useState(defaultList);
  let [runNum, setRunNum] = useState(1);
  let [compPick, setCompPick] = useState("");
  let [blueBtnColor, setBlueBtnColor] = useState("blue");
  let newBtnChoice: string;
  // let compTurn: string;
  let newRun: number;

  useEffect(() => {
    runGame();
    console.log(computerChoice);
  }, []);

  let runGame = (): string => {
    // computers turn

    let newClick: string = ComputersTurn(computerChoice);
    setComputerChoice((prevArray) => [...prevArray, newClick]);
    computerChoice.forEach((btn) => {
      setColorPattern(btn);
    });
    // newRun = runNum += 1;
    // setRunNum(newRun);
    return "";
  };
  console.log("outside:", computerChoice);

  return (
    <div>
      <div
        className={style.blueButton}
        style={{ backgroundColor: blueBtnColor }}
        id="0"
      >
        Blue
      </div>
      <div className={style.redButton} id="1">
        Red
      </div>
      <div className={style.greenButton} id="2">
        Green
      </div>
      <div className={style.yellowButton} id="3">
        Yellow
      </div>
    </div>
  );
}

export default MainGame;
