enum ColorOptions {
  "blue" = 0,
  "red" = 1,
  "green" = 2,
  "yellow" = 3,
}

async function setColorPattern(btnId: string): Promise<string> {
  let btnIdAsNum = parseInt(btnId);
  let selectedColor: string = ColorOptions[btnIdAsNum];

  return "";
}
export default setColorPattern;
