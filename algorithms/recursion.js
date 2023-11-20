const boxes = require("./boxes.json");

function findKey(boxes) {
  for (const box of boxes) {
    // Check if the box contents contains the key
    // this is the base condition
    for (const item of box.contents) {
      if (item === "key") {
        return `${box.name} contains the key.`;
      }
    }

    // If the box contains other boxes, we will search them recursively
    // this is the recursive case
    const boxesInside = box.contents.filter((item) => typeof item === "object");
    // if any of the contens is a object, we will search it.
    if (boxesInside.length > 0) {
      const result = findKey(boxesInside);
      if (result) {
        return result;
      }
    }
  }
  // If the key is not found in any boxes
  return "The key was not found in any boxes.";
}

console.log(findKey(boxes));

