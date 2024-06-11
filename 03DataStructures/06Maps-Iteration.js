// Quiz application using maps
const questions = new Map([
    ['question','What is the best programming language in the world'],
    [1, 'C'],
    [2,"Java"],
    [3,'Javascript'],
    ["Correct", 3],
    [true, "Correct Answer 🎁"],
    [false,"Try Again🐸"]
])

console.log(questions.get('question'))
for (const [key,value] of questions){
    if(typeof key == 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
}

const answer = 4;
console.log(answer);
console.log(questions.get(questions.get("Correct") === answer))


// Convert a map to array
console.log(...questions)
console.log([...questions.keys()])
console.log([...questions.values()])
    