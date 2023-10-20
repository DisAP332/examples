var pokemon = /** @class */ (function () {
    function pokemon(name, inPokeball, id) {
        this.name = name;
        this.inPokeball = inPokeball;
        this.id = id;
    }
    pokemon.prototype.PokeBall = function () {
        if (this.inPokeball === false) {
            this.inPokeball = true;
        }
        else {
            this.inPokeball = false;
        }
        console.log(this.inPokeball);
    };
    return pokemon;
}());
var pikachu = new pokemon("pikachu", false, 3);
pikachu.PokeBall();
