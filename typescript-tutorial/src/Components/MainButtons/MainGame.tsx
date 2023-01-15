import React from "react";
import style from "../Styles/MainGame.module.css";

// need to randomly pick a number from 0-3
// this will let us know which button will light up
// we need to store that number in a list 
// we will iterate over the list an change the color of the 
// button depending on the id
// we need user to then click the button

function MainGame() {
  return (
    <div>
      <div className={style.blueButton} id="0">
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
