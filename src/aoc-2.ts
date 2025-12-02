//* Getting the input from https://adventofcode.com/2025/day/2/input
const input = await Deno.readTextFile("input/aoc-2.txt");

const ranges = input.split(",");

let result1 = 0;
let result2 = 0;

for (const range of ranges) {
  const [lower, upper] = range.split("-").map(i => parseInt(i));

  for (let i = lower; i <= upper; i++) {
    const stringified = i.toString();
    if (stringified.length % 2 != 0) continue;
    const left = stringified.slice(0, stringified.length / 2);
    const right = stringified.slice(stringified.length / 2);
    if (left === right) {
      result1 += i;
    }
  }



  for (let i = lower; i <= upper; i++) {
    const stringified = i.toString();
    for (let j = 2; j <= stringified.length; j++) {
      if (stringified.length % j != 0) continue;
      const length = stringified.length / j;
      const splitts: string[] = [];
      for (let k = 0; k < stringified.length; k += length) {
        splitts.push(stringified.slice(k, k + length));
      }
      if (splitts.every(s => s === splitts[0])) {
        result2 += i;
        break;
      }
    }
  }
}


console.log("Solution Part 1: ", result1);
console.log("Solution Part 2: ", result2);