const array = [{ item: "item1" }, { item: "item2" }, { item: "item3" }];

array[5] = { item: "item5" };

console.log(array);

console.log(array["1"]);

array.length = 10;

console.log(array);
