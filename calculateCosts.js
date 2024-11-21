export function calculateCosts(data) {
  console.log("Calculating costs...");
  console.log({ data });

  let LevelCost = {
    basic: 13.5,
    advanced: 15.5,
  };

  let costPerHour = LevelCost[data.userLevel];
  let totalCost = costPerHour * data.userHours.toFixed(2);

  const output = {
    totalCost,
    userEmail: data.userEmail,
    userHours: data.userHours,
    userLevel: data.userLevel,
  };

  return output;
}
//   if (data.userLevel === "basic") {
//     console.log("Basic user");

//     let totalCost = 12.25 * data.userHours;

//     return {
//       totalCost,
//     };
//   }
//
