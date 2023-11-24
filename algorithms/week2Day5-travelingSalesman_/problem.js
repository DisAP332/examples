function toRad(x) {
  return (x * Math.PI) / 180;
}

function getDistance(lat1, lon1, lat2, lon2) {
  let R = 6371; // km
  let x1 = lat2 - lat1;
  let dLat = toRad(x1);
  let x2 = lon2 - lon1;
  let dLon = toRad(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return d;
}

const cities = new Map();
cities.set("New York", { lat: 40.7128, lon: 74.006 });
cities.set("Los Angeles", { lat: 34.0522, lon: 118.2437 });
cities.set("Chicago", { lat: 41.8781, lon: 87.6298 });
cities.set("Houston", { lat: 29.7604, lon: 95.3698 });
cities.set("Phoenix", { lat: 33.4484, lon: 112.074 });

function travelingSalesman(cities) {
  const visitedCities = new Set();
  let startingPoint;
  let nextShortestCity;
  let totalDistance = 0;

  function newStartingPoint(city) {
    startingPoint = cities.get(city);
    visitedCities.add(city);
    cities.delete(city);
  }

  // we are choosing between 4 cities. We will make it easy pick the first city.
  newStartingPoint("New York");

  // first we will get the distances between each city.
  while (cities.size > 0) {
    let shortestDistance = Infinity;

    for (const [city, values] of cities) {
      const distance = getDistance(
        startingPoint.lat,
        startingPoint.lon,
        values.lat,
        values.lon
      );
      if (distance < shortestDistance && !visitedCities.has(city)) {
        shortestDistance = distance;
        nextShortestCity = city;
      }
    }
    totalDistance += shortestDistance;
    visitedCities.add(nextShortestCity);
    newStartingPoint(nextShortestCity);
  }
  return { totalDistance, visitedCities };
}
console.log(travelingSalesman(cities));
