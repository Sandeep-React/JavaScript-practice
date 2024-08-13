// Assignment Solution
// Step1:- Define the Account class using constructor functions with protected properties and methods
// Step2:- Define the SavingsAccount class as a subclass of Account using ES6 class syntax with private properties and methods
// Step3:- Define the CurrentAccount class as a subclass of Account using Object.create with private properties and methods

// Define the Account class using constructor functions with protected properties and methods
function Account(number, holder, balance) {
    this._number = number;
    this._holder = holder;
    this._balance = balance;
    this._history = [];
  }
   Account.prototype._updateBalance = function(amount) {
    this._balance += amount;
    this._history.push({ type: "update", amount });
    return this;
  };
   Account.prototype._canWithdraw = function(amount) {
    return this._balance >= amount;
  };
   Account.prototype.deposit = function(amount) {
    this._updateBalance(amount);
    return this;
  };
   Account.prototype.withdraw = function(amount) {
    if (this._canWithdraw(amount)) {
      this._updateBalance(-amount);
    } else {
      console.log("Insufficient balance.");
    }
    return this;
  };
   Account.prototype.getBalance = function() {
    return this._balance;
  };
   Account.prototype.getHistory = function() {
    return this._history;
  };
   // Define the SavingsAccount class as a subclass of Account using ES6 class syntax with private properties and methods
  class SavingsAccount extends Account {
    #interestRate;
     constructor(number, holder, balance, interestRate) {
      super(number, holder, balance);
      this.#interestRate = interestRate;
    }
     #calculateInterest() {
      const interest = this._balance * this.#interestRate;
      this._updateBalance(interest);
      this._history.push({ type: "interest", amount: interest });
      return this;
    }
     deposit(amount) {
      this._updateBalance(amount);
      return this;
    }
     withdraw(amount) {
      if (this._canWithdraw(amount)) {
        this._updateBalance(-amount);
      } else {
        console.log("Insufficient balance.");
      }
      return this;
    }
     calculateInterest() {
      this.#calculateInterest();
      return this;
    }
  }
   // Define the CurrentAccount class as a subclass of Account using Object.create with private properties and methods
  const CurrentAccount = Object.create(Account.prototype);
  CurrentAccount.constructor = function(number, holder, balance, overdraft) {
    Account.call(this, number)
  }


