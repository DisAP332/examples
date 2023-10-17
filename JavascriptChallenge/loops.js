// for (i = 1; i <= 3; i++) {
//   console.log(i);
// }

// let i = 0;
// let array = [];
// do {
//   i += 1;
//   array.push(i);
//   console.log(array);
// } while (array.length <= 3);

// let x = 0;
// while (x != 3) {
//   x++;
//   console.log(x);
// }

// let x = 0;
// myCustomLabel: while (x != 5) {
//   x++;
//   if (x === 4) {
//     break myCustomLabel;
//   }
//   if (x < 3) {
//     continue;
//   }
//   console.log(x);
// }

// const bees = { a: 1, b: 2, c: 3 };
// for (let bee in bees) {
//   bees[bee] = bees[bee] + " bee";
// }
// console.log(bees);

const bees = { a: 1, b: 2, c: 3 };
for (let [key, val] of Object.entries(bees)) {
  console.log({ key, val });
}
console.log(bees);
