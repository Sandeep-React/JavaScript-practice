/* Create code for a converter app that performs three conversions.
First, change Celsius to Fahrenheit. Second, change kilograms to pounds. And third, change feet to centimeters.

Use JavaScript functions to create this app. The function call is to a single function called converter(),
in which you pass the parameters of Celsius, Kilograms, and feet. This function should internally call 
three helper functions to convert these things and log it. All three helper functions should be of 
different types: one should be a function declaration, the other a function expression, and the last an arrow function. */

function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

const kilogramsToPound = function(kilograms){
    return kilograms * 2.20462
}

const feetToCentimeters = feet => feet * 30.48

function converter(celsius, kilograms, feet ){

    const fahrenheit = celsiusToFahrenheit(celsius)
    const pound = kilogramsToPound(kilograms)
    const centimeters = feetToCentimeters(feet)

    console.log(`${celsius} celsius is ${fahrenheit} fahrenheit`)
    console.log(`${kilograms} kilograms is ${pound} pound`)
    console.log(`${feet} feet is ${centimeters} kilograms`)
}

converter(25, 70, 5);