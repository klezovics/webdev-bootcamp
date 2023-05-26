const fetch = require("node-fetch");

// This function is async -> returns a promise
async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);

  const user = await response.json();
  return user;
}

// You can call then() on a promise
showGitHubUser("mariusschulz").then((user) => {
  console.log("hello from then!");
  console.log(user.name);
  console.log(user.location);
});
