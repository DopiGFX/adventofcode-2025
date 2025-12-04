//* Getting the input from https://adventofcode.com/2025/day/4/input
const input = await Deno.readTextFile("input/aoc-4.txt");

let inputMatrix = input.split("\n").map(r => r.split(""));
const maxRowIndex = inputMatrix.length - 1;
const maxColIndex = inputMatrix[0].length - 1;


let result1 = 0;
let result2 = 0;

inputMatrix.forEach((row, i) => {
  row.forEach((entry, j) => {
    if (entry == ".") return;
    let adjecentPaperCount = 0;
    for (let k = i - 1; k <= (i + 1); k++) {
      for (let l = j - 1; l <= (j + 1); l++) {
        if (k < 0 || k > maxRowIndex) continue;
        if (l < 0 || l > maxColIndex) continue;
        if (k == i && l == j) continue;
        if (inputMatrix[k][l] == "@") adjecentPaperCount++;
      }
    }
    if (adjecentPaperCount <= 3) {
      result1++;
    };
  });
});

console.log("Solution Part 1: ", result1);


let currentResult2 = result2;
do {
  currentResult2 = result2;
  inputMatrix.forEach((row, i) => {
    row.forEach((entry, j) => {
      if (entry == ".") return;
      let adjecentPaperCount = 0;
      for (let k = i - 1; k <= (i + 1); k++) {
        for (let l = j - 1; l <= (j + 1); l++) {
          if (k < 0 || k > maxRowIndex) continue;
          if (l < 0 || l > maxColIndex) continue;
          if (k == i && l == j) continue;
          if (inputMatrix[k][l] == "@" || inputMatrix[k][l] == "x") adjecentPaperCount++;
        }
      }
      if (adjecentPaperCount <= 3) {
        inputMatrix[i][j] = "x";
        result2++;
      };
    });
  });
  inputMatrix = inputMatrix.map(r => r.map(e => e == "x" ? "." : e));
} while (currentResult2 != result2);



console.log("Solution Part 2: ", result2);