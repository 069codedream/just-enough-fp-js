// 局部应用/偏函数应用 Partial Application

// 固定部分参数作为预设，接受剩余的参数。
// 当一个curry过的函数有一些但不是全部的函数被调用时，就会发生局部应用。

// 简单示例：原生的bind函数
const sum = (a, b) => a + b;

const partial = sum.bind(null, 40);

partial(2); // 42

//请求api的示例，把公共的参数作为预设，创建了可重用的函数。
const fetch = require('node-fetch-npm');

const getFromAPI = baseURL => endpoint => cb =>
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      console.log(err.message);
    });

const getGithub = getFromAPI('https://api.github.com');

const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

getGithubUsers(data => {
  console.log(data.map(user => user.login));
});

getGithubRepos(data =>
  data.forEach(repo => {
    console.log(`Repo: ${repo.name}`);
  })
);

const getGithubOrgs = getGithub('/organizations');
getGithubOrgs(data =>
  data.forEach(org => {
    console.log(`Org: ${org.login}`);
  })
);

const getReddit = getFromAPI('https://reddit.com');

const getRedditAww = getReddit('/r/aww.json');

imageURLs = getRedditAww(payload =>
  payload.data.children.forEach(child => {
    console.log(child.data.preview.images[0].source.url);
  })
);
