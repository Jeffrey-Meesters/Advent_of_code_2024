const listData = require("../listInputData");
const occurrensesInRightList = countOccurrences(listData.rightList);

function countOccurrences(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}

function simalarityScore() {
  const { leftList } = listData;

  const scores = leftList.map((num) => {
    if (occurrensesInRightList[num]) {
      return num * occurrensesInRightList[num];
    }
    return 0;
  });

  const score = scores.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log("score", score);
  return score;
}

console.log(`similarityScore is ${simalarityScore()}`);
