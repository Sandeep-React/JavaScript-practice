// Exploring Promise Combinator: race, allSettled and any

const getJSON = function(url, errorMsg = "Something went wrong") {
    return fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json(); // Convert response to JSON
      });
  };

// (async function (){
//     const res = await Promise.race([
//         getJSON(`https://api.github.com/users/mojombo`),
//         getJSON(`https://api.github.com/users/wycats`),
//         getJSON(`https://api.github.com/users/pjhyett`)
//     ])
//     console.log(res)
// })()

// const timeOut = function(sec){
//     return new Promise(function(_,reject){
//         setTimeout(()=>{
//             reject(new Error ('request took too long'))
//         }, sec * 1000)
//     })
// }

// Promise.race([
//     getJSON(`https://api.github.com/users/mojombo`),
//     timeOut(1)
// ]).then(res => console.log(res))
// .catch(err => console.log(err))

// TODO:  allSettled

//   Promise.allSettled([
//     Promise.resolve("Success"),
//     Promise.reject('Error'),
//     Promise.resolve('Another Success')
//   ]).then(res => console.log(res))

  // Difference with all

//   TODO:  all

//   Promise.all([
//     Promise.resolve("Success"),
//     Promise.reject('Error'),
//     Promise.resolve('Another Success')
//   ]).then(res => console.log(res)).catch(err => console.log(err))

// TODO: Any

Promise.any([
    Promise.reject('Error'),
    Promise.resolve("Success"),
    Promise.resolve('Another Success')
  ]).then(res => console.log(res)).catch(err => console.log(err))




