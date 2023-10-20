var fruits = [];
function identityOne(val) {
    var stringOrBool = val.toString();
    return stringOrBool;
}
function identityTwo(val) {
    return val;
}
// interface Fruit {
//   amount: number;
//   name: string;
// }
function Smoothie(fruit, milk) {
    var outcome = { fruit: fruit, milk: milk };
    return outcome.toString();
}
// const bananaSmoothie = Smoothie({ amount: 3, name: 4, tart: false }, ["almond"]);
