const fruits: Array<string | number> = [];

function identityOne(val: boolean | number): string {
  let stringOrBool = val.toString();
  return stringOrBool;
}

function identityTwo(val: any): any {
  return val;
}

interface Fruit {
  amount: number;
  name: string;
}

function Smoothie<Fruit, M>(fruit: Fruit, milk: M): string {
  let outcome = { fruit, milk };
  return outcome.toString();
}

const bananaSmoothie = Smoothie({ amount: 3, name: "banana", tart: false }, [
  "almond",
]);

console.log(Smoothie({ amount: 3, name: "banana", tart: false }, ["almond"]));
