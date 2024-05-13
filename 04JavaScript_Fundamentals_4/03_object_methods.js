// method are functions in JavaScript


const myObject = {
    name: "JavaScript",

    adds: function(){
        console.log("Hey i am " + this.name)
    }
}

myObject.adds()