// _______________________________Growing Plants part 1__________________

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; // Area of the circular garden
const plantSpace = 0.8; // Each plant requires 0.8 square meters
const initialPlants = 20; // Starting number of plants

// Maximum capacity based on the area and the space required per plant
const maxCapacity = Math.floor(area / plantSpace);

// Predict growth for 1 week
let weeks = 1;
let plantCount = initialPlants * Math.pow(2, weeks); // Plants double every week
console.log(`After ${weeks} week(s), there will be ${plantCount} plants.`);
if (plantCount > 0.8 * maxCapacity) {
  console.log("Prune the plants to prevent overcrowding.");
} else if (plantCount > 0.5 * maxCapacity) {
  console.log("Monitor the growth, plants are growing at an acceptable rate.");
} else {
  console.log("There is room to plant more plants.");
}

// Predict growth for 2 weeks
weeks = 2;
plantCount = initialPlants * Math.pow(2, weeks); // Plants double every week
console.log(`After ${weeks} week(s), there will be ${plantCount} plants.`);
if (plantCount > 0.8 * maxCapacity) {
  console.log("Prune the plants to prevent overcrowding.");
} else if (plantCount > 0.5 * maxCapacity) {
  console.log("Monitor the growth, plants are growing at an acceptable rate.");
} else {
  console.log("There is room to plant more plants.");
}

// Predict growth for 3 weeks
weeks = 3;
plantCount = initialPlants * Math.pow(2, weeks); // Plants double every week
console.log(`After ${weeks} week(s), there will be ${plantCount} plants.`);
if (plantCount > 0.8 * maxCapacity) {
  console.log("Prune the plants to prevent overcrowding.");
} else if (plantCount > 0.5 * maxCapacity) {
  console.log("Monitor the growth, plants are growing at an acceptable rate.");
} else {
  console.log("There is room to plant more plants.");
}

// _____________________________________________ Part 2 __________________________

const initialPlants2 = 100;
const weeks2 = 10;
let plantCount2 = initialPlants2 * Math.pow(2, weeks2); // Plants double every week
let requiredArea = plantCount2 * plantSpace; // Total space needed for all plants
console.log(
  `After ${weeks2} weeks without pruning, the garden will need ${requiredArea.toFixed(
    2
  )} square meters of space.`
);

let expandedRadius = Math.sqrt(requiredArea / PI); // Calculate the new radius of the circular garden
console.log(
  `The new radius of the expanded garden should be approximately ${expandedRadius.toFixed(
    2
  )} meters.`
);

// __________________________________________Part 3__________________________

// The scientists decided to start with 100 plants in the original 5-meter-radius garden
const startingPlants = 100;

try {
  // Calculate how much space the starting plants require
  const requiredSpaceForStartingPlants = startingPlants * plantSpace; // Total space needed
  console.log(
    `The required space for ${startingPlants} plants is ${requiredSpaceForStartingPlants.toFixed(
      2
    )} square meters.`
  );

  // Check if required space exceeds the available area of the garden
  if (requiredSpaceForStartingPlants > area) {
    throw new Error(
      `The required space (${requiredSpaceForStartingPlants.toFixed(
        2
      )} square meters) exceeds the available space (${area.toFixed(
        2
      )} square meters) in the garden.`
    );
  }

  // If no error is thrown, log that the space is sufficient
  console.log("The garden has enough space for the starting number of plants.");
} catch (error) {
  console.error("Error:", error.message); // Log the error message
}
