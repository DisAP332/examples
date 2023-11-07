const array = [5, 3, 6, 2, 10];
const sortedArray = [];

function selectionSort(arr) {
  let lowest = { value: arr[0], index: 0 };
  // while the array is not empty
  while (arr.length > 0) {
    // find the lowest value in the array
    lowest = { value: arr[0], index: 0 };
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      // if the current value is lower than the lowest value,
      // set the lowest value to the current value
      if (arr[i] < lowest.value) {
        lowest = { value: arr[i], index: i };
      }
    }
    // add the lowest value to the sorted array
    // remove the lowest value from the original array
    sortedArray.push(arr.splice(lowest.index, 1)[0]);
    console.log(`added ${lowest.value} to sortedArray`);
  }
}

selectionSort(array);
console.log(sortedArray);
