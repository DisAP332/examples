function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Choosing the middle element as pivot
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr[pivotIndex];
  var left = [];
  var right = [];
  var same = [];

  // Partitioning the array
  for (var i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      same.push(arr[i]);
    }
  }

  // Recursively apply quicksort to the partitions and concatenate
  return quicksort(left).concat(pivot, same, quicksort(right));
}

let sorted = quicksort([5, 3, 7, 6, 4, 8, 1, 9, 2]);
console.log(sorted);
