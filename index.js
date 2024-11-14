// javascript

console.log("Java Script has loaded successfully");
// Beginners 5 hours per week.
// Advanced 10 hours per week.
// Won't input form unless  1 hour is selected.
//Show a summary of the cost- I am thinking of adding a text box, that will change based upon the selected level.
//Show a summary of the order.  A separate box, which acts a receipt would work.
//Currency is in GBP
//Hours aren't negative
//Show correct costs for the level

//Main task to validation rules such as ensure that the input is valid. Email check, selected hours are correct.

// Display a form to the user
// Include input fields for the user's email address, level, and hours of study

//Present  check
// Validation that hours are correct for the level

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Store the user's email address as userEmail (string/text)
  // Capture user's input on form submission

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;

  // Store the user's hours of study as userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  console.log({ userEmail, userLevel, userHours });
});

// Validate the user's input
// Check if the user has selected a level
// Check if the user has provided an email address
// Check if the user has specified at least one hour of study
// Check if the number of hours requested is within the allowed range
// Calculate the total cost
// Display the total cost to the user

// Capture user's input on form submission
// Validate the user's input
// Calculate the total cost
// Display the total cost to the user
