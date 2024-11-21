export function displayResults(output) {
  console.log("Displaying the final results...");

  let results = document.querySelector("#results");

  results.innerHTML = `
  <dl>


    <dt>Email</dt>
    <dd>${output.userEmail}</dd>
    <dt>User level:</dt>
    <dd>${output.userLevel}</dd>
    <dt>Hour(s) selected:</dt>
    <dd>${output.userHours}</dd>
    <dt>Total Cost:</dt>
    <dd>${output.totalCost}</dd>

  </dl>
`;
}
