const fs = require("fs");
const fileName = "day_3/solution2/puzzleInput3.txt";
// const fileName = "day_3/puzzleInput.txt";
const fileData = fs.readFileSync(fileName, "utf8").toString();

const reg = /mul\(\d{1,3},\d{1,3}\)/gim;

const getAllMuls = fileData.match(reg);

const calcArray = [];
function mul([x, y]) {
  const multy = x * y;
  calcArray.push(multy);
}

for (let i = 0; i < getAllMuls.length; i++) {
  mul(
    getAllMuls[i]
      .replace("mul", "")
      .replace("(", "")
      .replace(")", "")
      .split(","),
  );
}

console.log(calcArray);

const sum = calcArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
