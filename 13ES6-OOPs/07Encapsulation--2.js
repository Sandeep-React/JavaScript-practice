// Encapsulation:Private Class fields and Methods

/* 

1. Public Fields
2. Private Fields
3. Public Methods
4. Private methods

*/

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
    }
    withdraw(val){
        this.deposit(-val)
    }

    #approveLoan(){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan){
            this.deposit(val)
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

console.log(acc1)  // Use browser to run