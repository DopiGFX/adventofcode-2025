//* Getting the input from https://adventofcode.com/2025/day/3/input
const input = await Deno.readTextFile("input/aoc-3.txt");

let result1 = 0;
let result2 = 0;

function getHighestIndex(batteries: number[]): number {
  let highestIndex = 0;
  batteries.forEach((b, i) => {
    if (b > batteries[highestIndex]) highestIndex = i;
  });
  return highestIndex;
}

const banks = input.split("\n").map(bank => bank.split("").map(battery => parseInt(battery)));

for (const bank of banks) {
  const left = getHighestIndex(bank.slice(0, bank.length - 1));
  const right = getHighestIndex(bank.slice(left + 1));
  result1 += 10 * bank[left] + bank[left + 1 + right];
}

for (let bank of banks) {
  let batteryMax = 0;
  let currentHighestIndex = 0;
  for (let i = 1; i <= 12; i++) {
    currentHighestIndex = getHighestIndex(bank.slice(0, bank.length - 12 + i));
    batteryMax += bank[currentHighestIndex] * Math.pow(10, 12 - i);
    bank = bank.slice(currentHighestIndex + 1);
  }
  console.log(batteryMax)
  result2 += batteryMax;
}


console.log("Solution Part 1: ", result1);
console.log("Solution Part 2: ", result2);