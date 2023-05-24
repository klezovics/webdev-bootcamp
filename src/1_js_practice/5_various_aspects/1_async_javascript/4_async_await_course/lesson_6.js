fetch = require("node-fetch");
const showGitHubUser = async (handle) => {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);

    //If the promise is rejected, the await keyword throws an exception
    const body = await response.json();

    // If an issue arrises we can throw an error
    if (response.status !== 200) {
        throw Error(body.message);
    }

    return body;
}

showGitHubUser('notexistinguser')
    .then(user => {
        // Will print 'undefined' because the user does not exist
        console.log(user.name);
        console.log(user.location);
    }).catch(err => {
        // A thrown exception automatically results in the promise being rejected
        console.log("Error: ", err.message);
    }
)