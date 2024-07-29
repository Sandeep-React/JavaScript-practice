

const future = new Date(2028, 10, 19, 15, 45)
console.log(+future)

const calcDaysPassed = (date1, date2) =>
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24)

const daysPassed = calcDaysPassed(new Date(2028, 10, 19), new Date (2028, 10, 29))
console.log(daysPassed)