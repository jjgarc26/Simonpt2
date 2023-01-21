import React, { useEffect, useRef, useState } from "react";
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
  let [compPick, setCompPick] = useState("");
  let [listOfColor, setListOfColor] = useState(defaultList);
  let [blueBtnColor, setBlueBtnColor] = useState("blue");

  let { current: myArray } = useRef([]);

  useEffect(() => {
    computersTurn();
    setBlueBtnColor(listOfColor[0]);
    console.log(`color: ${listOfColor}`);
  }, [blueBtnColor]);

  function computersTurn(): void {
    // computers turn
    let newArr: string[] = [];
    let newClick: string = GenerateNewNumber(computerChoice);
    setComputerChoice((prevArray) => [...prevArray, newClick]);
    newArr = setColorPattern(computerChoice);
    console.log("newArr:", newArr);

    // computerChoice.forEach((color) => {
    //   newArr.push(setColorPattern(color));
    // });
    // console.log(newArr);
    // console.log("testarr", arrTest);
    setListOfColor(newArr);
    //setBlueBtnColor(newArr[0]);
  }
  console.log("outsside:", computerChoice);
  console.log(`color: ${listOfColor}`);

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
