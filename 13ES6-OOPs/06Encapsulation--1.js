// Encapsulation: Protected Properties and Methods


class Account {
    constructor(owner,currency, pin,){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language
    }

    //Public Interfaces
    deposit(val){
        this._movements.push(val)
    }
    withdraw(val){
        this.deposit(-val)
    }

    _approveLoan(){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan){
            this.deposit(val)
        }
    }
}

const acc1 = new Account('Sandeep', 'INR', 1111);
acc1.deposit(450)
acc1.withdraw(200)
acc1.requestLoan(500)
acc1._approveLoan();

acc1._movements.push(500);

console.log(acc1._pin)

console.log(acc1)  // Use browser to run