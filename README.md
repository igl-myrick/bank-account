# _Bank Account_

#### By _**India Lyon-Myrick**_

#### _A bank account program._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A homepage for a user account of a bank or credit union. A user can register with a username and an initial deposit. Afterwards, they will be shown a page with their balance, a form for withdrawals and deposits, and a history of past transfers._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/bank-account`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _None_

## License

MIT:

Copyright (c) _3/1/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

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

Describe: Account.prototype.withdraw

Test: It should remove an amount from the balance value.
Code: 
let newAccount = new Account("John", 100);
newAccount.withdraw(10);
Expect: newAccount.balance = 90;