// enum ColorOptions {
//   "blue" = 0,
//   "red" = 1,
//   "green" = 2,
//   "yellow" = 3,
// }

function setColorPattern(btnId: string[]): string[] {
  console.log(`btnID: ${btnId}`);
  let arrTest: string[] = [];
  arrTest = btnId.map((compChoice) => {
    let btnIdAsNum: number = parseInt(compChoice);
    let selectedColor = colorChoice(btnIdAsNum);
    console.log(`selesctedColor:${selectedColor}`);
    return selectedColor;
    //arrTest.push(selectedColor)
  });
  console.log(`artests ${arrTest}`);
  return arrTest;
}

function colorChoice(id: number): string {
  switch (id) {
    case 0:
      return "blue";
    case 1:
      return "red";
    case 2:
      return "green";
    case 3:
      return "yellow";
    default:
      return "black";
  }
}
export default setColorPattern;
