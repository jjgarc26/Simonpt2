enum ColorOptions {
  "blue" = 0,
  "red" = 1,
  "green" = 2,
  "yellow" = 3,
}

function setColorPattern(btnId: string[]): string[] {
  let arrTest: string[] = [];
  arrTest = btnId.map((compChoice) => {
    let btnIdAsNum = parseInt(compChoice);
    let selectedColor: string = ColorOptions[btnIdAsNum];
    console.log("selectedColor", selectedColor);
    return selectedColor;
    //arrTest.push(selectedColor)
  });
  return arrTest;

  // console.log(btnId);
  // let btnIdAsNum = parseInt(btnId);
  // let selectedColor: string = ColorOptions[btnIdAsNum];

  // return selectedColor;
}
export default setColorPattern;
