Describe: Account

Test: It should create a new Account object, with a userName value and a balance value.
Code: let newAccount = new Account("John", 100);
Expect: newAccount = { userName: "John", balance: 100 }

Describe: Account.prototype.deposit

Test: It should add an amount to the balance value.
Code: 
let newAccount = new Account("John", 100);
newAccount.deposit(10);
Expect: newAccount.balance = 110;