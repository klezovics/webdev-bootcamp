const fetch = require("node-fetch");

// Async works with any way to declare a function
const showGitHubUser = async (handle) => {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);

    const user = await response.json();
    return user;
}


// If you want to call an async function on the main thread, you need to do a trick like this
// (async () => {
//     // can use await only in async function and not on the main thread
//     const user = await showGitHubUser('mariusschulz')
//     console.log(user.name);
//     console.log(user.location)
// })();

// Can create an async method
class GitHubApiClient {
    async fetchUser(handle) {
        return await showGitHubUser(handle)
    }
}

const c = new GitHubApiClient();
(
    async () => {
        const user = await c.fetchUser('mariusschulz')
        console.log("== Fetch user name from class:",user.name);
    }
)();

