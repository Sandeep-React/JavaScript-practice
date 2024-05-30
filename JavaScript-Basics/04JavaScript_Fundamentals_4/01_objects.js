// Introductions to Objects


// Everything in JavaScript is an objects

const obj = {
    name: "JavaScript",
    engine: "V8",
    type: 'programming',
    arr:[12, 13, 46]
}


console.log(obj)

// Access the value using dot (.) notation
console.log(obj.name)
console.log(obj.engine)
console.log(obj.type)

console.log(obj.arr)
console.log(obj.arr[2])

const obj2 ={
    name: 'Sandeep',
    role: "Software Developer",
    company:{
        company_name: "Abc Company",
        tech:["HTML", "CSS", "JavaScript", "React"]
    }
}

// access JavaScript

console.log(obj2.company.tech[2])