const fetch = require("node-fetch");

// Instead of using .then() we can use async/await
// This creates more readable code
async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);

    const user = await response.json();
    console.log(user.name);
    console.log(user.location);
}

// Implementing the same function with .then()
// We wait for async functions to complete in both cases
// In the async version the code is a bit nicer
function showGitHubUserOld(handle) {
    const url = `https://api.github.com/users/${handle}`;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log('New function!!')
            console.log(user.name);
            console.log(user.location);
        });
}

const handle = "mariusschulz";

console.log('Starting!!!');
showGitHubUser(handle);
console.log('=======')
showGitHubUserOld(handle)
console.log('Done!!!');