/* 
Assignment
Write a JavaScript program to implement a banking system with account types of savings account and current account. 
The savings account class uses ES6 class syntax with private properties and methods, and the current account class 
uses Object.create with private properties and methods.

The program defines the Account class with protected properties and methods for common functionality. The savings 
account class extends the Account class and adds a calculateInterest method for calculating interest on the account balance. 
The current account class is created by cloning the Account prototype and adding an overdraft limit property.

The program allows users to create new savings or current accounts, deposit or withdraw funds, and calculate interest 
(for savings accounts). It also allows users to view their account balance and transaction history.
*/

// Solution

class Account {
    #balance = 0;
    #transactionHistory = [];

    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error('Deposit amount must be positive');
        this.#balance += amount;
        this.#transactionHistory.push(`Deposited: ${amount}`);
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error('Withdrawal amount must be positive');
        if (amount > this.#balance) throw new Error('Insufficient funds');
        this.#balance -= amount;
        this.#transactionHistory.push(`Withdrew: ${amount}`);
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionHistory() {
        return this.#transactionHistory;
    }
}

class SavingsAccount extends Account {
    #interestRate;

    constructor(accountNumber, interestRate) {
        super(accountNumber);
        this.#interestRate = interestRate;
    }

    calculateInterest() {
        const interest = this.getBalance() * this.#interestRate;
        this.deposit(interest); // Add interest to the balance
        return interest;
    }
}

const AccountPrototype = {
    deposit(amount) {
        if (amount <= 0) throw new Error('Deposit amount must be positive');
        this._balance += amount;
        this._transactionHistory.push(`Deposited: ${amount}`);
    },

    withdraw(amount) {
        if (amount <= 0) throw new Error('Withdrawal amount must be positive');
        if (amount > this._balance + this._overdraftLimit) throw new Error('Insufficient funds');
        this._balance -= amount;
        this._transactionHistory.push(`Withdrew: ${amount}`);
    },

    getBalance() {
        return this._balance;
    },

    getTransactionHistory() {
        return this._transactionHistory;
    }
};

function createCurrentAccount(accountNumber, overdraftLimit) {
    const account = Object.create(AccountPrototype);
    account._balance = 0;
    account._transactionHistory = [];
    account._overdraftLimit = overdraftLimit;
    account.accountNumber = accountNumber;
    return account;
}

// Create a SavingsAccount
const savings = new SavingsAccount('SA001', 0.03);
savings.deposit(1000);
console.log(`Savings Balance: ${savings.getBalance()}`); // 1000
console.log(`Interest Earned: ${savings.calculateInterest()}`); // 30
console.log(`Savings Balance after Interest: ${savings.getBalance()}`); // 1030
console.log(`Transaction History: ${savings.getTransactionHistory()}`);

// Create a CurrentAccount
const current = createCurrentAccount('CA001', 500);
current.deposit(1000);
console.log(`Current Balance: ${current.getBalance()}`); // 1000
current.withdraw(1200);
console.log(`Current Balance after Withdrawal: ${current.getBalance()}`); // -200 (within overdraft limit)
console.log(`Transaction History: ${current.getTransactionHistory()}`);
