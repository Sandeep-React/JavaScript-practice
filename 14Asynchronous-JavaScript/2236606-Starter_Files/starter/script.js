"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function(data, className = ""){

  const html = `
     <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)} Mil People</p>
            <!-- <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>  -->
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;

    
}
  
//   const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     // console.log(JSON.parse(this.responseText))
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data)

    
//   });
// };

// getCountryData('india')
// getCountryData('usa')
// getCountryData('germany')

//function of getting countries along with the neighbor

// call back hell 


const getCountryAndNeighbour = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener("load", function () {
      // console.log(JSON.parse(this.responseText))
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data)

      // get neighbour data 

      const [neighbor] = data.borders;
      console.log(neighbor)

      // Ajax call for neighbor 

      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
      request2.send()
      request2.addEventListener('load', function(){
        console.log(JSON.parse(this.responseText))
        const [data2] = JSON.parse(this.responseText)
        renderCountry(data2, 'neighbour')
      })
  
      
    });
  };
  getCountryAndNeighbour('india')

  // Example of simple Callback hell

  // setTimeout(() => {
  //   console.log("1 Second Passed")
  //     setTimeout(() => {
  //       console.log(" 2 Second Passed")
  //       setTimeout(() => {
  //         console.log("3 Second Passed")
  //           setTimeout(() => {
  //             console.log(" 4 Second Passed")
  //             setTimeout(() => {
  //               console.log(" 5 Second Passed")
  //           },1000)
  //         },1000)
  //       },1000)
  //   },1000)
  // },1000)

    // AJAX request
  // const request = new XMLHttpRequest();
  // request.open("GET", `https://restcountries.com/v3.1/name/india`);
  // request.send();

  // Using Fetch 
  const request = fetch('https://restcountries.com/v3.1/name/india')
  console.log(request) // We get promise

  // Promise is an object container for a future request.
  // Chain promise --
  
  // Pending  - Initiated but nothing happend
  // Settled  - We have received the result

  // Fulfilled - Completed
  // Rejected - An error occured
  