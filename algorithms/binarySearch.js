const names = require("./names.json");

function binarySearch(array, target) {
  let i = 0;
  let left = 0;
  let right = array.length - 1;
  if (array.length === 0) return console.log("No array provided");
  if (target > array.length) return console.log("target is too high");
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === mid || right === target || left === target) {
      console.log(`found in ${i} iterations. Name: ${array[target - 1].name}`);
      return;
    }
    if (target < mid) {
      right = mid - 1;
      i++;
    } else if (target > mid) {
      left = mid;
      i++;
    }
    console.log(`${right}:${left}`);
  }
}

binarySearch(names, 22);
