// var number = +prompt("Sonni kiriting", 0);
// if (number % 3 == 0) {
//   console.log("${number} 3 GA BOLINADI");
// }
// if (number % 5 == 0) {
//   console.log("${number} 5 GA HAM BOLINADI");
// }

// Agar text bo'lsa raqam kiriting

let elForm = document.querySelector(".form");
let userFirstName = document.getElementById("userFirstName");
let userLastName = document.getElementById("userLastName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userConfirmPassword = document.getElementById("userConfirmPassword");
let elResult = document.querySelector(".result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(
    "User-first-name:" +
      " " +
      userFirstName.value +
      "\n" +
      "User-last-name:" +
      " " +
      userLastName.value +
      "\n" +
      "User-email:" +
      " " +
      userEmail.value +
      "\n" +
      "User-password:" +
      " " +
      userPassword.value +
      "\n" +
      userConfirmPassword.value
  );
  elResult.textContent = userFirstName;
});
