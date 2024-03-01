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

  const registrationForm = document.getElementById("registration-form");
  const resultMsg = document.createElement("p");
  registrationForm.append(resultMsg);

  const userName = document.getElementById("name").value;
  const initialDeposit = parseInt(document.getElementById("initial-deposit").value);
  if (initialDeposit <= 0) {
    resultMsg.innerText = "Please enter a valid amount to deposit."
    resultMsg.style.color = "red";
  } else {
    newAccount.userName = userName;
    newAccount.balance = initialDeposit;
    document.querySelector("span#user-name").innerText = userName;
    document.querySelector("span#user-balance").innerText = initialDeposit;
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(function(element) {
      element.classList.remove("hidden")
    });
    const registrationDiv = document.getElementById("registration")
    registrationDiv.remove();
  }
  registrationForm.addEventListener("submit", function() {
    resultMsg.remove();
  })
}

function appendTransfer(transaction, transactionType) {
  const transactionHistoryDiv = document.getElementById("transaction-history");

  const newTransactionWrapperDiv = document.createElement("div");
  newTransactionWrapperDiv.classList.add("new-transaction", "col-md-2");
  const transactionText = document.createElement("p");
  const transactionTime = new Date();
  transactionText.append(transactionType + " of $" + transaction + " at " + transactionTime.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }));
  newTransactionWrapperDiv.append(transactionText);
  transactionHistoryDiv.append(newTransactionWrapperDiv);
}

function handleTransfer(e) {
  e.preventDefault();

  const transferForm = document.getElementById("transfer-form");
  const resultMsg = document.createElement("p");
  transferForm.append(resultMsg);

  const valueToDeposit = document.getElementById("deposit").value;
  const valueToWithdraw = document.getElementById("withdraw").value;

  if (valueToDeposit !== "" && valueToWithdraw !== "") {
    resultMsg.innerText = "Please fill out only one field."
    resultMsg.style.color = "red";
  } else if (parseInt(valueToDeposit) <= 0 || parseInt(valueToWithdraw) <= 0) {
    resultMsg.innerText = "Please enter a valid number."
    resultMsg.style.color = "red";
  } else if (valueToDeposit !== "") {
    newAccount.balance = parseInt(newAccount.balance) + parseInt(valueToDeposit);
    document.querySelector("span#user-balance").innerText = newAccount.balance;
    resultMsg.innerText = "Transfer successful."
    resultMsg.style.color = "green";
    appendTransfer(valueToDeposit, "Deposit");
  } else if (valueToWithdraw !== "" && (newAccount.balance - valueToWithdraw > 0)) {
    newAccount.balance = parseInt(newAccount.balance) - parseInt(valueToWithdraw);
    document.querySelector("span#user-balance").innerText = newAccount.balance;
    resultMsg.innerText = "Transfer successful."
    resultMsg.style.color = "green";
    appendTransfer(valueToWithdraw, "Withdrawal");
  } else if (newAccount.balance - valueToWithdraw <= 0) {
    resultMsg.innerText = "Withdrawal amount too high."
    resultMsg.style.color = "red";
  }
  transferForm.addEventListener("submit", function() {
    resultMsg.remove();
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#registration-form").addEventListener("submit", handleRegistration);
  document.querySelector("form#transfer-form").addEventListener("submit", handleTransfer);
});