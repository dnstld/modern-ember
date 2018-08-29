# modern-ember

## Steps

1. Installing the latest Ember features 
```
npm install -g https://github.com/ember-cli/ember-cli.git
```
Result:
```
ember -v
ember-cli: 3.4.0-beta.3
node: 8.10.0
os: darwin x64
```

2. Creating a new Ember app with flags for “module unification”
```
MODULE_UNIFICATION=true EMBER_CLI_MODULE_UNIFICATION=true ember new modern-ember
```
Result:
```
Success =)
```

3. Setting up some NPM scripts
```
MODULE_UNIFICATION=true EMBER_CLI_MODULE_UNIFICATION=true ember new modern-ember
```
Result:
```
npm WARN lifecycle The node binary used for scripts is /Users/denistoledo/.asdf/shims/node but npm is using /Users/denistoledo/.asdf/installs/nodejs/8.10.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.

> modern-ember@0.0.0 start /Users/denistoledo/Documents/workspace/online/_studies/modern-ember
> EMBER_CLI_MODULE_UNIFICATION=true ember serve


Build successful (9104ms) – Serving on http://localhost:4200/
```

4. Adding addons
```
ember install ember-decorators
ember install ember-auto-import
```
Result:
```
npm: Installed ember-decorators
installing ember-decorators
  install package babel-eslint
npm: Installed babel-eslint@^8.0.0
  install addon @ember-decorators/babel-transforms@^2.0.0
npm: Installed @ember-decorators/babel-transforms@^2.0.0
Installed addon package.

npm: Installed ember-auto-import
Installed addon package.
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd modern-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
