class pokemon {
  name: string;
  inPokeball: boolean;
  id: number;

  constructor(name: string, inPokeball: boolean, id: number) {
    this.name = name;
    this.inPokeball = inPokeball;
    this.id = id;
  }

  PokeBall() {
    if (this.inPokeball === false) {
      this.inPokeball = true;
    } else {
      this.inPokeball = false;
    }
    console.log(this.inPokeball);
  }
}

const pikachu = new pokemon("pikachu", false, 3);

pikachu.PokeBall();
