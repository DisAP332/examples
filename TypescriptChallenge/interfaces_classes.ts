interface IBurger {
  Ingredients: Array<string>;
  Name: string;
  Cost: number;
}

const burger: IBurger = {
  Ingredients: ["meat", "cheese", "buns"],
  Name: "Plain Jane",
  Cost: 3.0,
};

interface ISalad {
  Ingredients: Array<string>;
  readonly Name: string;
  Cost?: number;
}

class Salad implements ISalad {
  Ingredients: Array<string>;
  Name: string;

  constructor(Ingredients: Array<string>, Name: string) {
    this.Ingredients = Ingredients;
    this.Name = Name;
  }
}

const tomatoSalad = new Salad(["lettuce", "tomato"], "tomato salad");

console.log(tomatoSalad);

class Taco {
  name: string;
  ingredients: Array<string>;

  constructor(name: string, ingredients: Array<string>) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

const meatTaco = new Taco("meat taco", ["tortilla", "salsa"]);

console.log(meatTaco);

class Fruit {
  static squeeze(juice: { type: string; pulp: boolean }) {
    return { type: juice.type, pulp: juice.pulp };
  }
}

const orangeJuice = Fruit.squeeze({ type: "orange", pulp: true });

console.log(orangeJuice);

