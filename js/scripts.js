// Account business logic
function Account() {
  this.userName = "userName";
  this.balance = 0;
}

Account.prototype.deposit = function(depositAmt) {
  this.balance = this.balance + depositAmt;
}

Account.prototype.withdraw = function(withdrawalAmt) {
  this.balance = this.balance - withdrawalAmt;
}

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

function handleTransfer(e) {
  e.preventDefault();

  const transferDiv = document.getElementById("transfer-form");
  const resultMsg = document.createElement("p");
  transferDiv.append(resultMsg);

  const valueToDeposit = document.getElementById("deposit").value;
  const valueToWithdraw = document.getElementById("withdraw").value;

  if (valueToDeposit !== "" && valueToWithdraw !== "") {
    resultMsg.innerText = "Please fill out only one field."
    resultMsg.style.color = "red";
  } else if (valueToDeposit !== "") {
    newAccount.balance = parseInt(newAccount.balance) + parseInt(valueToDeposit);
    document.querySelector("span#user-balance").innerText = newAccount.balance;
    resultMsg.innerText = "Transfer successful."
    resultMsg.style.color = "green";
  } else if (valueToWithdraw !== "" && (newAccount.balance - valueToWithdraw > 0)) {
    newAccount.balance = parseInt(newAccount.balance) - parseInt(valueToWithdraw);
    document.querySelector("span#user-balance").innerText = newAccount.balance;
    resultMsg.innerText = "Transfer successful."
    resultMsg.style.color = "green";
  } else if (newAccount.balance - valueToWithdraw <= 0) {
    resultMsg.innerText = "Withdrawal amount too high."
    resultMsg.style.color = "red";
  }
  document.querySelector("form#transfer-form").addEventListener("submit", function() {
    resultMsg.remove();
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#registration-form").addEventListener("submit", handleRegistration);
  document.querySelector("form#transfer-form").addEventListener("submit", handleTransfer);
});