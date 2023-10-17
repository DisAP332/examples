// here we have global scope
let global = "global";

local();

console.log(globe);

function local() {
  let localScope = "im local!";
  globe = "global!"; // im automatically
  // set to be global because im not given
  // a declaration. but only after my function
  // is called
}
