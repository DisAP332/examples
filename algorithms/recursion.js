const boxes = require("./boxes.json");

function findKey(boxes) {
  for (const box of boxes) {
    // Check if the box contains the key directly
    // if (box.contents.includes("key")) {
    //   return `${box.name} contains the key.`;
    // }
    for (const item of box.contents) {
      if (item === "key") {
        return `${box.name} contains the key.`;
      }
    }

    // If the box contains other boxes, we search them recursively
    const boxesInside = box.contents.filter((item) => typeof item === "object");
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
