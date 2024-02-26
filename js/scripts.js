// Account business logic
function Account() {
  this.userName = "";
  this.balance = 0;
}

Account.prototype.deposit = function(depositAmt) {
  this.balance = this.balance + depositAmt;
}

Account.prototype.withdraw = function(withdrawalAmt) {
  this.balance = this.balance - withdrawalAmt;
}

// business logic
let newAccount = new Account();

// ui logic
function handleRegistration(e) {
  e.preventDefault();

  const userName = document.getElementById("name").value;
  const initialDeposit = document.getElementById("initial-deposit").value;
  newAccount.userName = userName;
  newAccount.balance = initialDeposit;

  document.querySelector("span#user-name").innerText = userName;
  document.querySelector("span#user-balance").innerText = initialDeposit;

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(function(element) {
    element.classList.remove("hidden")
  });

  const registrationForm = document.getElementById("registration")
  registrationForm.remove();
}

window.addEventListener("load", function() {
  document.querySelector("form#registration-form").addEventListener("submit", handleRegistration);
});