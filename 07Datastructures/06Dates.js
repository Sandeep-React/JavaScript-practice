
//Dates

const now = new Date();
console.log(now)

console.log(new Date(0))

console.log(new Date('Aug 02 2020 18:15:40'));
console.log(new Date('December 24, 2015'))

console.log(new Date(2028, 10, 19, 15, 23, 5));
console.log(new Date(2028, 10, 33))


console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000))

// Operations on Dates

const future = new Date(2028, 10, 19, 15, 45);
console.log(future)

console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())