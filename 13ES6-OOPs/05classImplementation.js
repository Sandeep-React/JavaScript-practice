// Another Example of Class Implementation

class Account {
    constructor(owner,currency, pin,){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language
    }

    //Public Interfaces
    deposit(val){
        this.movements.push(val)
    }
    withdraw(val){
        this.deposit(-val)
    }

    approveLoan(){
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

console.log(acc1)  // Use browser to run