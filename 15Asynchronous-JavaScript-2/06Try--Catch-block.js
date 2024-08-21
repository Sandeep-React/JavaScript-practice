// Handling Errors with try...catch Block



const whereAmI = async function () {

    try{

        
        const res = await fetch(`https://api.github.com/users/Sandeep-React`)
        const data = await res .json();
        console.log(data)
    }catch(err){
        console.err(err.message);
        console.log('Where am i error', error)
        
    }
    
}

whereAmI()
console.log("first log")

// try{
//     let y = 1
//     const x = 4
//     x=3;
// } catch (err){
//     console.log(err.message)
// }
