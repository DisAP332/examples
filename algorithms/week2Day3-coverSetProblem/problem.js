// use a hash map for the radio stations.
const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = new Map();
stations.set("kone", new Set(["id", "nv", "ut"]));
stations.set("ktwo", new Set(["wa", "id", "mt"]));
stations.set("kthree", new Set(["or", "nv", "ca"]));
stations.set("kfour", new Set(["nv", "ut"]));
stations.set("kfive", new Set(["ca", "az"]));

function setCover() {
  const selectedStations = [];

  while (statesNeeded.size > 0) {
    let bestStationName;
    let bestStationCoverage = new Set();
    for (const [station, values] of stations) {
      // this will show how many uncovered states will be covered by this station.
      const covered = new Set([...statesNeeded].filter((x) => values.has(x)));

      // if the amount of states covered is greater than the current best station, change it.
      if (covered.size > bestStationCoverage.size) {
        bestStationCoverage = new Set(values);
        bestStationName = station;
      }
    }
    // a station has been selected
    // add the station to the selected stations.
    selectedStations.push(bestStationName);

    // remove the state from the states needed.
    stations.get(bestStationName).forEach((state) => {
      statesNeeded.delete(state);
    });

    // remove the station from the stations.
    stations.delete(bestStationName);
  }
  return selectedStations;
}

console.log(setCover());
