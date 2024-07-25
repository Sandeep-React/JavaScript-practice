
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

const movements = [200, -450, 400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => {
    return mov < 0 
});

console.log(firstWithdrawal)

// console.log(accounts)

const account = accounts.find((acc) =>{
    return acc.owner === "Sandeep Kumar Das"
})

console.log(account)