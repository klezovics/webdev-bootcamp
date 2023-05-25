// You can resolve multiple promises sequentially or in parallel

const fetch = require("node-fetch");

async function fetchFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function showUserAndRepos(handle) {
    const userPromise =  fetchFromGithub(`/users/${handle}`);
    const reposPromise =  fetchFromGithub(`/users/${handle}/repos`);

    // Now both requests are in flight at the same time

    // The time it takes to complete both requests is the time it takes to complete the slower request
    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`)
}

showUserAndRepos("mariusschulz");