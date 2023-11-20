const friend = require("./friend.json");

// friends[0].friends.forEach((friend) => {
//   console.log(friend);
// });

const breadthFirstSearch = (friend) => {
  const queue = [];
  queue.push(friend[0]);

  while (queue.length > 0) {
    // get the first friend from the queue
    const currentFriend = queue.shift();
    console.log(currentFriend.name);

    // check if the current friend is a mango seller
    if (currentFriend.mangoSeller === true) {
      console.log(`${currentFriend.name} is a mango seller!`);
      return;
    }

    // they are not so add their friends to the queue
    currentFriend.friends.forEach((friend) => {
      queue.push(friend);
    });
  }
  console.log("no mango seller found");
};

breadthFirstSearch(friend);
