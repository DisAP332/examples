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

function Smoothie<F extends Fruit, M>(fruit: F, milk: M): string {
  let outcome = { fruit, milk };
  return outcome.toString();
}

const bananaSmoothie = Smoothie({ amount: 3, name: 4, tart: false }, ["almond"]);


