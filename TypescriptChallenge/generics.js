var fruits = [];
function identityOne(val) {
    var stringOrBool = val.toString();
    return stringOrBool;
}
function identityTwo(val) {
    return val;
}
function Smoothie(fruit, milk) {
    var outcome = { fruit: fruit, milk: milk };
    return outcome.toString();
}
var bananaSmoothie = Smoothie({ amount: 3, name: "banana", tart: false }, [
    "almond",
]);
console.log(Smoothie({ amount: 3, name: "banana", tart: false }, ["almond"]));
