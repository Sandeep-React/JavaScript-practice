 // Using Async Functions to Return Values
const getGitHubUser = async function () {

    try{
        const res = await fetch(`https://api.github.com/users/Sandeep-React`)
        const data = await res .json();
        // console.log(data)
        return data
    }catch(err){
        console.err(err.message); 
    }    
};

// const users = getGitHubUser();
// // console.log("first log")
// users.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.error(err.message)
// }).finally(()=>{
//     console.log("Finished getting data from the function")
// });

// (function(){
//     console.log("This is IEF")
// })()


(async function(){
    // then
    try {
        const user = await getGitHubUser();
        console.log(user)
    } catch (error) {
        console.error(error.message)
    }
    // finally
    console.log("Finished getting user")
})()
