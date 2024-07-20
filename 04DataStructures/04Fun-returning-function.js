const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

// const greetHey = greet("hello");
// greetHey("Sandeep")
// greetHey("Arijit")

greet("Hello")("Sandeep")


const greetArr = greeting => name =>console.log(`${greeting} ${name}`)

greetArr("Howdy!")("Sandeep")