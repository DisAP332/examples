// let answer;

// function findFarmSquareFootSize(top, side, square) {
//   console.log(square);
//   console.log(`${top / square} ${side / square}}`);
//   if (!Number.isInteger(top / square) || !Number.isInteger(side / square)) {
//     console.log("top and side are not divisible by square");
//     findFarmSquareFootSize(top, side, square + 1);
//   } else {
//     answer = `divisable by ${square}. ${
//       ((top / square) * side) / square
//     }} square feet`;
//   }
//   return answer;
// }

// console.log(findFarmSquareFootSize(1680, 640, 25));

// this is an example of euclidean algorithm
let div;
let answer;

function bestFarmSize(top, side) {
  // exit condition
  if (Number.isInteger(top / side) || Number.isInteger(side / top)) {
    answer = `${top} ${side}`;
  }
  if (top > side) {
    console.log(`${top} > ${side}`);
    div = Math.floor(top / side);
    bestFarmSize(top - side * div, side);
  }
  if (top < side) {
    console.log(`${top} < ${side}`);
    div = Math.floor(side / top);
    bestFarmSize(top, side - top * div);
  }
  return answer;
}

console.log(bestFarmSize(1680, 640));
