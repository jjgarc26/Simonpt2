import setColorPattern from "./setColorPattern";

function ComputersTurn(listOfPushes: string[]): string {
  let newPush: number = Math.floor(Math.random() * 3) + 1;
  console.log(`Comp Choice: ${newPush}`)
  let newPushToString: string = newPush.toString();

  //   listOfPushes.push(newPushToString);
  //   listOfPushes.forEach(btn => {
  //     setColorPattern(btn)
  //   })

  return newPushToString;
}

export default ComputersTurn;
