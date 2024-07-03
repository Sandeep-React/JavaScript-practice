 
// 11.Working with Strings in JavaScript

/* 
TODO: Question 1: Write a function called reverseString that takes in a string as an argument and returns the reversed
version of the string.
For example, reverseString("hello") should return "olleh".
*/

function reverseString(str){

    // let charArray = str.split('');
    // charArray.reverse();

    // let reversedStr = charArray.join('');
    
    // return reversedStr;

    // using method chaining
    return str.split('').reverse().join('');
    
}

console.log(reverseString("hello"))

/* TODO: Question 2: 
Reverse the order of words in a sentence
Write a program that takes a sentence as input and outputs the sentence with the order of words reversed. 
For example, if the input sentence is "The quick brown fox jumps over the lazy dog", 
the output should be "dog lazy the over jumps fox brown quick The".
 */

function reversedSentense(words){
    return words.split(' ').reverse().join(' ');
}

// console.log(reversedSentense("The quick brown fox jumps over the lazy dog"))

// userInput program

const readline = require('readline');

// Create an interface to read input from the command line
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reversedWords(words){
    return words.split(' ').reverse().join(' ');
}

// Ask the user for a sentence
r1.question("Please enter a sentence: ", function(userInput){
    //reverse the order of words in the user input
let reversedSentense = reversedWords(userInput);

// print the reversed sentence
console.log("Reversed sentence", reversedSentense);
r1.close();

});


/* TODO: Question 3: 
Write a program that takes a string as input and finds the first non-repeated character in the string. 
For example, if the input string is "hello world", the output should be "h". */

// Function to find the first non-repeated character in a string

function findFirstNonRepeatedChar(str) {
    const charCount = {};

    // Count the frequency of each character in the string
    for (let char of str) {
        if (char !== ' ') {  // Skip spaces
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    // Find the first character with a frequency of 1
    for (let char of str) {
        if (char !== ' ' && charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example string
const exampleString = "hello world";

// Find and print the first non-repeated character
const nonRepeatedChar = findFirstNonRepeatedChar(exampleString);
if (nonRepeatedChar) {
    console.log("The first non-repeated character is:", nonRepeatedChar);
} else {
    console.log("There are no non-repeated characters in the string.");
}


/* 
TODO: Question 4: Write a program that takes a sentence as input and counts the number of words in the sentence. 
For example, if the input sentence is "The quick brown fox jumps over the lazy dog", the output should be 9.
*/

function countWords(sentence){
    const words = sentence.trim().split(/\s+/); // Use of regular expression  

    return words.length;
}

const exampleSentence = "The quick brown fox jumps over the lazy dog";

const wordCount = countWords(exampleSentence);
console.log("The number of words in the sentence is:", wordCount)

/* 
TODO: Question 5: Write a program that takes a string and a character as input and returns the index of the first 
occurrence of the character in the string. If the character is not found, the program should return -1. 
For example, if the input string is "hello world" and the character is "o", the output should be 4.
*/

function findFirstOccurrence(str, char){
    return str.indexOf(char);
}

const exampleStr = "Hello World"
const characterToFind = "d";

const index = findFirstOccurrence(exampleString, characterToFind);
if (index !== -1){
    console.log(`The first occurrence of '${characterToFind}' is at index:`, index);
} else {
    console.log(`The character '${characterToFind}' is not found in the string.`);
}