const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);

    const user = await response.json();
    return user;
}

showGitHubUser('mariusschulz')
    .then(user => {
        console.log("hello from then!");
        console.log(user.name);
        console.log(user.location);
    })