import setColorPattern from "./setColorPattern";

function GenerateNewNumber(listOfPushes: string[]): string {
  let newPush: number = Math.floor(Math.random() * 3) + 1;
  console.log(`Comp Choice: ${newPush}`);
  let newPushToString: string = newPush.toString();

  return newPushToString;
}

export default GenerateNewNumber;
