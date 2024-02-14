window.onload = function () {
  // Hardcode the birth year
  var birthYear = 1999;
  // Calculate the age
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  // Update the age in the HTML
  document.getElementById("age").innerText = age;
};
