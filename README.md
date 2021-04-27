# Lapisian

# Generate buildable and publishable libs
https://nx.dev/latest/angular/structure/buildable-and-publishable-libraries
```
nx g @nrwl/node:library --name=vault-env-config \
--linter=eslint --unitTestRunner=jest \
--publishable --buildable \
--importPath=@lapis-it/vault-env-config \
--testEnvironment=jsdom --no-interactive --dry-run

```
Name already taken:
* https://github.com/faradayio/vault-env-js
* https://www.npmjs.com/package/vault-env

# Publish using GitHub action
https://tane.dev/2020/05/publishing-npm-libraries-using-nx-and-github-actions/
https://docs.npmjs.com/cli/v6/commands/npm-publish
https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user#install-npmrc
```
npm i npmrc -g

npmrc -c lapis
npm config set registry https://svgitlab.spatialvision.com.au/api/v4/packages/npm/

npmrc -c open-source
npm config set registry https://registry.npmjs.org/

npmrc lapis
```
# Secret for Lapis npm tokens
https://github.com/organizations/LapisIT/settings/secrets/actions
https://www.npmjs.com/settings/lapis-it/packages



## Target
https://www.npmjs.com/settings/lapis-it/members
https://github.com/LapisIT/lapisian


## GitHub actions
https://github.com/marketplace/actions/nrwl-nx


## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
