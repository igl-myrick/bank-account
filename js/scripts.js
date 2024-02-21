// Account business logic
function Account(userName, initialDeposit) {
  this.userName = userName;
  this.balance = initialDeposit;
}

Account.prototype.deposit = function(depositAmt) {
  this.balance = this.balance + depositAmt;
}

Account.prototype.withdraw = function(withdrawalAmt) {
  this.balance = this.balance - withdrawalAmt;
}