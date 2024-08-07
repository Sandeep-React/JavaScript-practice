const account1 = {
    owner : "Sandeep Kumar Das",
    movements: [200, -450, 400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
}

const account2 = {
    owner: "Emily Johnson",
    movements: [-300, 50, -20, 500, -100, 750, -30],
    interestRate: 1.5,
    pin: 2468
};

const account3 = {
    owner: "John Smith",
    movements: [1000, -500, 800, -300, 600, -200],
    interestRate: 1.0,
    pin: 7890
};


const account4 = {
    owner: "Alice Brown",
    movements: [600, -100, 300, -200, 100, -50, 400],
    interestRate: 1.8,
    pin: 4321
};

const accounts = [account1, account2, account3, account4];


const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movement')

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUser = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')


const displayMovements = function(movements){
    console.log(movements)
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit': 'withdrawal';
        const html = `<div class="movement__row">
            <div class="movement__type movement__type--${type}">${i+1} ${type}</div>
            <div class="movement__value">${mov}</div>
            </div>`
            containerMovements.insertAdjacentHTML('afterbegin' ,html)
        })
}

displayMovements(account1.movements)