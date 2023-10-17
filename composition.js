const health = {
  takeHealthPotion(totalHP, addedHP) {
    return totalHP + addedHP;
  },
  loseHealth(totalHP, lostHP) {
    return totalHP - lostHP;
  },
};

const killPlayer = {
  kill(health) {
    this.health = 0;

    return 0;
  },
};

const character = {
  name: "player1",
};

const PlayerControl = function (character, HP, killPlayer) {
  const player = Object.create(character);
  const hp = Object.create(HP);
  const kill = Object.create(killPlayer);
  const props = {
    currentHP: 100,
    name: player.name,
  };
  return {
    set(operation, value) {
      props[operation] = value;
    },
    get(operation) {
      return props[operation];
    },
    isDead() {
      if (props["currentHP"] <= 0) {
        return "is dead";
      } else {
        return "not dead";
      }
    },
    killPlayer() {
      props.currentHP = kill.kill(props.currentHP);
    },
    raiseHP(name, amount) {
      props.character = hp.takeHealthPotion(props.currentHP + hp);
    },
  };
};

const Player1 = PlayerControl(character, health, killPlayer);

console.log(Player1.get("name"));
console.log(Player1.isDead());
Player1.killPlayer();
console.log(Player1.isDead());
console.log(Player1);
