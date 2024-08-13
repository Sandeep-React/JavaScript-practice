// Method chaining


class Account {
    // Public Fields
    locale = navigator.language

    // Private Fields
    #pin;
    #movements = []

    constructor(owner,currency, pin,){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._pin = pin;
        // this._movements = [];
        // this.locale = navigator.language
    }
    
    getPin(){
        console.log(this.#pin)
    }
    //Public Interfaces
    deposit(val){
        this.#movements.push(val)
        return this
    }
    withdraw(val){
        this.deposit(-val)
        return this
    }

    #approveLoan(){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan){
            this.deposit(val)
            return this
        }
    }
}

const acc1 = new Account('Sandeep', 'INR', 1111);
acc1.deposit(450)
acc1.withdraw(200)
acc1.requestLoan(500)
// acc1.#approveLoan();

// acc1.#movements.push(500);

// console.log(acc1.#pin)

// Method chaining
acc1.deposit(400).withdraw(200).deposit(1000).requestLoan(500).withdraw(1000)

console.log(acc1)  // Use browser to run