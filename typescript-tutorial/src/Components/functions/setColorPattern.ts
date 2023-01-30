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
export default colorChoice;
