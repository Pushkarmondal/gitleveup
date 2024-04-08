const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Pushkarmondal",
  id: 116779860,
  node_id: "U_kgDOBvXrVA",
  avatar_url: "https://avatars.githubusercontent.com/u/116779860?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Pushkarmondal",
  html_url: "https://github.com/Pushkarmondal",
  followers_url: "https://api.github.com/users/Pushkarmondal/followers",
  following_url:
    "https://api.github.com/users/Pushkarmondal/following{/other_user}",
  gists_url: "https://api.github.com/users/Pushkarmondal/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Pushkarmondal/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Pushkarmondal/subscriptions",
  organizations_url: "https://api.github.com/users/Pushkarmondal/orgs",
  repos_url: "https://api.github.com/users/Pushkarmondal/repos",
  events_url: "https://api.github.com/users/Pushkarmondal/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Pushkarmondal/received_events",
  type: "User",
  site_admin: false,
  name: "Pushkar Mondal",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "pushkarmondal79",
  public_repos: 46,
  public_gists: 0,
  followers: 4,
  following: 19,
  created_at: "2022-10-27T03:38:35Z",
  updated_at: "2024-02-25T05:46:05Z",
};

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/githubProfile", (req, res) => {
  res.json(githubData);
});

app.get("/Github", (req, res) => {
  res.send("Pushkarmondal79");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Please follow me on Twitter</h1>");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
