// script.js

function getJoke() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Configure it: GET-request for the URL /random joke
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
  
    // Set the function to call when the request is complete
    xhr.onload = function() {
      if (xhr.status == 200) {
        // Parse the JSON response
        var response = JSON.parse(xhr.responseText);
  
        // Extract the joke from the response
        var joke = response.value;
  
        // Display the joke in the joke-container div
        document.getElementById('joke-container').innerText = joke;
      } else {
        // Handle error
        document.getElementById('joke-container').innerText = 'Error fetching joke';
      }
    };
  
    // Send the request
    xhr.send();
  }
  