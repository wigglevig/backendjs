require('dotenv').config()

const express = require('express')

const app = express()
const githubData = {
  "login": "wigglevig",
  "id": 100429023,
  "node_id": "U_kgDOBfxs3w",
  "avatar_url": "https://avatars.githubusercontent.com/u/100429023?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/wigglevig",
  "html_url": "https://github.com/wigglevig",
  "followers_url": "https://api.github.com/users/wigglevig/followers",
  "following_url": "https://api.github.com/users/wigglevig/following{/other_user}",
  "gists_url": "https://api.github.com/users/wigglevig/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/wigglevig/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/wigglevig/subscriptions",
  "organizations_url": "https://api.github.com/users/wigglevig/orgs",
  "repos_url": "https://api.github.com/users/wigglevig/repos",
  "events_url": "https://api.github.com/users/wigglevig/events{/privacy}",
  "received_events_url": "https://api.github.com/users/wigglevig/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Vignesh Pandi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I am a student of Army Institute of Technology. I am Competitve Programming enthusiast and Passionate about learning new technologies. To know more contact me:)",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2022-02-25T15:29:23Z",
  "updated_at": "2024-08-19T11:40:16Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send('vigneshdotcom');
})
app.get('/github',(req,res) => {
  res.json(githubData);
})
app.get('/login',(req,res) => {
  res.send('<h1>Login at Chai aur Code</h1>');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`)
})
  