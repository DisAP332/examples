var burger = {
    Ingredients: ["meat", "cheese", "buns"],
    Name: "Plain Jane",
    Cost: 3.0,
};
var Salad = /** @class */ (function () {
    function Salad(Ingredients, Name) {
        this.Ingredients = Ingredients;
        this.Name = Name;
    }
    return Salad;
}());
var tomatoSalad = new Salad(["lettuce", "tomato"], "tomato salad");
console.log(tomatoSalad);
var Taco = /** @class */ (function () {
    function Taco(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
    return Taco;
}());
var meatTaco = new Taco("meat taco", ["tortilla", "salsa"]);
console.log(meatTaco);
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    Fruit.squeeze = function (juice) {
        return { type: juice.type, pulp: juice.pulp };
    };
    return Fruit;
}());
var orangeJuice = Fruit.squeeze({ type: "orange", pulp: true });
console.log(orangeJuice);
