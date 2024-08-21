// Creating a simple Promise Object

// const lotteryPromise = new Promise(function(resolve, reject){
//     if(Math.random() > 0.5){
//         resolve('You won')
//     }else{
//         reject('you lost your money')
//     }
// })

// lotteryPromise.then (res => console.log(res))
// .catch(err => console.log(err))

const lotteryPromise = new Promise(function(resolve, reject){
    console.log("Lottery Draw is taking place")

 setTimeout(() =>{
    if(Math.random() > 0.5){
        resolve('You won')
    }else{
        reject('you lost your money')
    }
 },2000)
})

lotteryPromise.then (res => console.log(res))
.catch(err => console.log(err))

// Promisify setTimeout

const wait = function(second){
    return new Promise(function(resolve){
        setTimeout(resolve, second * 1000)
    })
}

wait(2).then(() =>{
    console.log('2 seconds passed')
    return wait (1)
}).then(() => {
    console.log('1 second passed')
})