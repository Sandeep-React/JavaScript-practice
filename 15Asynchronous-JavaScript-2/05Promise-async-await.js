// Consuming Promises with async/wait 

const whereAmI = async function name() {
    console.log("This id from async function")
    const res = await fetch(`https://api.github.com/users/Sandeep-React`)
    const data = await res .json();
    console.log(data)
}

whereAmI()
console.log("first log")
