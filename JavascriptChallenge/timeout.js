setTimeout(() => console.log("we waited a second!"), 1000);

function player(name, health) {
  console.log("player: " + name + " health: " + health);
}

setTimeout(player, 1000, "Jeff", 100);

const sayHi = setTimeout(() => console.log("hi"), 1000);

clearTimeout(sayHi);

const beAnnoying = setInterval(() => console.log("HIHIHIHIHI"), 100);

setTimeout(() => clearInterval(beAnnoying), 1000);

const customIntervals = setTimeout(() => {
  console.log("1 second");
  setTimeout(() => {
    console.log("2 second");
  }, 1000);
}, 1000);
