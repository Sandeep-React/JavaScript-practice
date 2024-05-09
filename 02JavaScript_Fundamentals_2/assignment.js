/* 
Write a code using switch statements, which do the below things -
1) If red, green, or blue color is passed then the console log "Color is red, green or blue"
2) If purple, yellow, or pink color is passed then the console log "Color is purple, yellow or pink"
3) Default case of console log "No color matched" 

*/
// Solution to question 1
let color = "blue";

switch (color) {
    case "red":
    case "green":
    case "blue":
        console.log("Color is red, green or blue")
        break;
    case "purple":
    case "yellow":
    case "pink":
        console.log("Color is purple, yellow or pink")
        break;
    default:
        console.log("No color matched")
        break;
}