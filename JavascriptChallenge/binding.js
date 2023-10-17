// const chips = {
//   amount: 10,
//   eatOne: function () {
//     this.amount -= 1;
//     return this.amount;
//   },
// };

// const unboundEat = chips.eatOne;
// console.log(unboundEat());
// const bindAndEat = unboundEat.bind(chips);
// console.log(bindAndEat());

// function chipTypes(...args) {
//   console.log(this);
//   console.log(...args);
// }
// const bindChipTypes = chipTypes.bind(
//   "Chip types:",
//   "ruffle",
//   "baked",
//   "steamed"
// );

// chipTypes();

const bear = {
  type: "polar",
  size: "massive!",
};

function bearInfo(emotion) {
  console.log(`type: ${this.type} bear, size: ${this.size}`);
  console.log(`it was ${emotion}!`);
}

bearInfo.call(bear, "angry");

const bearDetails = bearInfo.bind(bear, "happy!");
bearDetails();
