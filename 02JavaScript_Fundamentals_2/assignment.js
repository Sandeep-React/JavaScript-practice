/* 
Write a code using switch statements, which do the below things -
1) If red, green, or blue color is passed then the console log "Color is red, green or blue"
2) If purple, yellow, or pink color is passed then the console log "Color is purple, yellow or pink"
3) Default case of console log "No color matched" 

*/
// Solution to question 1
let color = "purple";

switch (color) {
    case "red":
        console.log("Color is red")
        break;
    case "green":
        console.log("Color is green")
        break;
    case "blue":
        console.log("Color is blue")
        break;
    case "purple":
        console.log("Color is purple")
        break;
    case "yellow":
        console.log("Color is yellow")
        break;
    case "pink":
        console.log("Color is pink")
        break;

    default:
        console.log("No color matched")
        break;
}