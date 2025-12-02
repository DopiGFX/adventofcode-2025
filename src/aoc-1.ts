//* Getting the input from https://adventofcode.com/2025/day/1/input
const input = await Deno.readTextFile("input/aoc-1.txt");



let currentPosition = 50;
let result1 = 0;
let result2 = 0;

function rotate(direction: "L" | "R", distance: number, currentPosition: number): number {
  for (let i = 0; i < distance; i++) {
    direction == "R" ? currentPosition++ : currentPosition--;
    if (currentPosition < 0) currentPosition += 100;
    else if (currentPosition > 99) currentPosition -= 100;
    if (currentPosition == 0) result2++;
  }
  if (currentPosition == 0) result1++;
  return currentPosition;
}

input.split("\n").forEach(i => {
  const direction: "L" | "R" = i.charAt(0) as "L" | "R";
  const distance: number = parseInt(i.slice(1));
  currentPosition = rotate(direction, distance, currentPosition);
})


console.log("Solution Part 1: ", result1);
console.log("Solution Part 2: ", result2);