# Demo

```
// admin user  ( access to http://localhost:4200/admin )
dady@gmail.com/123
// non admin user ( No http://localhost:4200/admin )
kid@gmail.com/123
```

# Play with environment

```
ng serve --prod // bg color would be green and app name would be 'Prod Env'
ng serve -o // bg color would be gray and app name would be 'Dev Env'

// Create custom env
// update .angular-cli.json
"environments": {
  "test": "environments/environment.test.ts"
}
// Serve test env
ng serve --environment=test
```

## Linting

```
ng lint
ng lint --fix

// Using vscode
Command + Shit + p
-> TSLint: fix all auto fixable problems
```

## Deployment

```
// Github Pages
npm i -g angular-cli-ghpages
// ng build --prod --base-href="https://<username>.github.io/reponame/"
ng build --prod --base-href="https://hs950559.github.io/ng5frontend/"
sudo ngh
// or configure package.json `yarn run deploy:gh`
Demo - https://hs950559.github.io/ng5frontend/

// Firebase Deployment
// step 1 -create project
https://console.firebase.google.com/u/1/?pli=1

// step 2
npm i -g firebase-tools

// Step 3 - from terminal
firbase login
firbase init // from project root, create 2 files
1. firebase.json
2. .firbaserc

// Step 4 - update firebase.json
{
  "hosting": {
    "public": "dist",
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}

// Step 5
ng build --prod
firebase deploy

// Or update package.json
yarn run deploy:firebase

// Done
Project Console: https://console.firebase.google.com/project/ng4app/overview
Demo URL: https://ngapp-6e5f4.firebaseapp.com/

// Heroku Deployment
// Step 1 - login to heroku & create app
https://id.heroku.com/login

// Step 2 - Create `Procfile`
web: node server.js

// server.js
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.all('*', (req, res) => {
	res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
	console.log("app running on " + port);
});


// Step 3 - Install heroku cli than
heroku login // from dist folder
git init
heroku git:remote -a ng5demo
git add -A
git commit -m "ur message"
git push heroku master

Demo - https://ng5demo.herokuapp.com/
```


