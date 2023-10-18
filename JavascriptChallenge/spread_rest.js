const cities = ["cincinnati", "columbus", "athens"];
const moreCities = [...cities, "Dayton"];

console.log(moreCities);

function weNeed(item1, item2, item3) {
  console.log(
    `We will need the following ingredients ${item1}, ${item2}, ${item3}`
  );
}
const ingredients = ["pasta", "sauce", "meat"];
weNeed(...ingredients);

function rest(item1, item2, ...otherItems) {
  console.log(otherItems);
}
rest("first", "second", "third", "fourth");

