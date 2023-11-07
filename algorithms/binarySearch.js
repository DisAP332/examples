const names = require("./names.json");

function binarySearch(array, target) {
  // initialize variables
  let i = 0;
  let left = 0;
  let right = array.length - 1;
  // error catching
  if (array.length === 0) return console.log("No array provided");
  if (target > array.length) return console.log("target is too high");
  // begin the actual search!
  while (left <= right) {
    // find the middle of the array
    let mid = Math.floor((left + right) / 2);
    // if the target is found, return the index
    if (target === mid || right === target || left === target) {
      console.log(`found in ${i} iterations. Name: ${array[target - 1].name}`);
      return;
    }
    // if the target is less than the middle, search the left half
    if (target < mid) {
      right = mid - 1;
      i++;
      // if the target is greater than the middle, search the right half
    } else if (target > mid) {
      left = mid;
      i++;
    }
    console.log(`${right}:${left}`);
  }
}

binarySearch(names, 22);
