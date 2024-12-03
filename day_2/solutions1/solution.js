const puzzleInput = require("../puzzleInput2");

const isAscending = (arr) => {
  return arr.slice(1).every((num, i) => num > arr[i]);
};

const isDesceding = (arr) => {
  return arr.slice(1).every((num, i) => num < arr[i]);
};

const correctDelta = (arr) => {
  return arr.slice(1).every((num, i) => {
    const delta = num - arr[i];
    if (delta >= -3 && delta <= 3) {
      return true;
    }
    return false;
  });
};

const safeReports = () => {
  const puzzleArray = JSON.parse(JSON.stringify(puzzleInput));

  const safeAsc = puzzleArray.filter((arr) => isAscending(arr));
  const safeDesc = puzzleArray.filter((arr) => isDesceding(arr));

  const safeLineairReports = [...safeAsc, ...safeDesc];
  const safeReports = safeLineairReports.filter((arr) => correctDelta(arr));
  return safeReports;
};

const score = safeReports();
console.log("score", score.length);
