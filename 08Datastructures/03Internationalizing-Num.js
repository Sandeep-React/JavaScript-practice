// const num = 33543434.23
// console.log(num)

// console.log(" For US ",new Intl.NumberFormat('en-US').format(num))
// console.log(" For Germany ",new Intl.NumberFormat('de-ge').format(num))
// console.log(" For Syria ",new Intl.NumberFormat('ar-sy').format(num))


const num = 33543434.23
console.log(num)

const options = {
    style: "unit",
    unit: "mile-per-hour"
}

console.log(" For US ",new Intl.NumberFormat('en-US',options).format(num))
console.log(" For Germany ",new Intl.NumberFormat('de-ge',options).format(num))
console.log(" For Syria ",new Intl.NumberFormat('ar-sy',options).format(num))