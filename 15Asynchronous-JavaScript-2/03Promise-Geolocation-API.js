// Using Promise to work with Geolocation API

// TODO: Use browser to see the output
//------------------------------------------

// navigator.geolocation.
// getCurrentPosition(pos => console.log(pos), 
// err => console.log(err))

const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

getPosition().then(pos => console.log(pos))