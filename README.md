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
```


