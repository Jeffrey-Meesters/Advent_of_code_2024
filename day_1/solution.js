const listData = require("./listInputData");

const sortedLeftList = listData.leftList.sort((a, b) => a - b);
const sortedRightList = listData.rightList.sort((a, b) => a - b);

const distanceNumbers = [];

const calculateDistances = () => {
  if (sortedLeftList.length && sortedRightList.length) {
    const distance = sortedRightList[0] - sortedLeftList[0] < 0 ? sortedLeftList[0] - sortedRightList[0] : sortedRightList[0] - sortedLeftList[0];
    distanceNumbers.push(distance);
    sortedRightList.shift();
    sortedLeftList.shift();
    calculateDistances();
  } else {
    const calculatedDinstance = calculateAnswer();
    console.log(`The distance is ${calculatedDinstance}`);
  }
}

calculateDistances();

function calculateAnswer() {
  return distanceNumbers.reduce((acc, curr) => {
    return acc + curr;
  });
}