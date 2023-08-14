// Import the API into your JavaScript file.
var xhr = new XMLHttpRequest();

// Make the API request.
xhr.open('GET', 'https://api.github.com/users/octocat');

// Get the response from the API.
xhr.send();

// Parse the response from the API.
var response = JSON.parse(xhr.responseText);

// Use the response from the API.
console.log(response.name);