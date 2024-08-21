// Event Loop implementation 

// console.log("Test start");
// setTimeout(() => {
//     console.log("0 second timer");
// },0)

// Promise.resolve("Resolved Promise 1").then(res => console.log(res));
// console.log("test end");

/* Output
---------
Test start
test end
Resolved Promise 1
0 second timer
*/

console.log("Test start");
setTimeout(() => {
    console.log("0 second timer");
},0)

Promise.resolve("Resolved Promise 1").then(res => console.log(res));

Promise.resolve("Resolved Promise 2").then( res => {
    for(i = 0; i < 1000000; i++){}
    console.log(res)
})

console.log("test end");

/* Output
----------
Test start
test end
Resolved Promise 1
Resolved Promise 2
0 second timer
*/
