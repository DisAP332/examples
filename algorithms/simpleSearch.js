const names = require("./names.json");

function simpleSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i].name === value) {
      console.log(`found in ${i} iterations. Name: ${array[i].name}`);
      return { index: i, name: array[i].name };
    }
  }
  return -1;
}

simpleSearch(names, "Peter");
