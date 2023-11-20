// create the graph
const graph = new Map();

// set the nodes
graph.set("start", new Map());
graph.set("a", new Map());
graph.set("b", new Map());

// set the edges
graph.get("start").set("a", 6);
graph.get("start").set("b", 2);

graph.get("a").set("fin", 1);

graph.get("b").set("a", 3);
graph.get("b").set("fin", 5);

// set the final node
graph.set("fin", new Map());

// create the costs table
const costs = new Map();
costs.set("a", 6);
costs.set("b", 2);
costs.set("fin", Infinity);

// create the parents table
const parents = new Map();
parents.set("a", "start");
parents.set("b", "start");
parents.set("fin", null);

// create the processed array
const queue = [];

function dijkstrasAlgorithm(startNode) {
  if (startNode === "fin") {
    console.log("costs", costs);
    console.log("parents", parents);
    return;
  }
  // we will get the node in the graph and go over each of its neighbors
  graph.get(startNode).forEach((value, node) => {
    // if the neighbors value is less than the current cost of the node in the costs table
    // then we will update the costs table and the parents table
    if (value < costs.get(node)) {
      costs.set(node, value);
      parents.set(node, startNode);
    }
    // add the node to the queue.
    queue.push(node);
  });
  // rerun the algorithm with the next node in the queue
  dijkstrasAlgorithm(queue.shift());
}

console.log(dijkstrasAlgorithm("start"));
