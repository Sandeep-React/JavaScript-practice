/* 
5.Coding Challenge
Challenge: Create a function called getUserData that takes in a username string as a parameter and returns a Promise
that resolves to an object containing information about that user.

The function should make a GET request to the following endpoint: 
https://api.github.com/users/{username} where {username} is the username passed into the function.

The Promise should resolve to an object with the following properties:

username: The username passed into the function
name: The user's name (if available)
avatarUrl: The URL to the user's avatar image
reposCount: The number of public repositories the user has
If the request fails, the Promise should reject with an error message.

Here's some code to get you started:

javascript

function getUserData(username) { return new Promise((resolve, reject) => { 
    // Make GET request to https://api.github.com/users/{username} 
    // Resolve with object containing user data or reject with error message }); }

Good luck! */

/* Solution */
//===========

function getUserData(username) {
    return new Promise((resolve, reject) => {
      // Construct the URL with the provided username
      const url = `https://api.github.com/users/${username}`;
  
      // Make the GET request to the GitHub API
      fetch(url)
        .then(response => {
          // Check if the response is ok (status code 200-299)
          if (!response.ok) {
            throw new Error(`Error fetching data for user ${username}: ${response.statusText}`);
          }
          // Parse the response as JSON
          return response.json();
        })
        .then(data => {
          // Resolve the promise with the user data object
          resolve({
            username: username, // GitHub username
            name: data.name, // Full name of the user
            avatarUrl: data.avatar_url, // URL of the user's avatar image
            reposCount: data.public_repos // Number of public repositories
          });
        })
        .catch(error => {
          // Reject the promise with an error message
          reject(`Failed to fetch user data: ${error.message}`);
        });
    });
  }
  
  // Example usage:
  getUserData('Sandeep-React')
    .then(userData => {
      // Log the user data to the console
      console.log(userData);
    })
    .catch(error => {
      // Log any errors to the console
      console.error(error);
    });
  
