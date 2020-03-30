# Developing a TypeScript NPM library

Developing a TypeScript NPM library on GitHub.

- Develop
- Test
- Document
- Publish
- Consume

## Tooling

[GitHub](https://github.com/)

[GitHub Desktop](https://desktop.github.com/)

[Node](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/)

[Visual Studio Code](https://code.visualstudio.com/)

[TypeScript](https://www.typescriptlang.org/)

[Prettier](https://prettier.io/)

[Jest Testing Framework](https://jestjs.io/)

[API Extractor](https://api-extractor.com/)

[API Documenter](https://rushstack.io/pages/api/api-documenter/)

[Visual Studio Code - Extension - Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)


## Steps

### Setup

1. Install Node
1. Install NPM
1. Install Visual Studio Code
1. Install GitHub Desktop

### Create a new GitHub repository

1. Start GitHub Desktop
1. Log into GitHub
1. Create a new empty repository
1. Open the new repository from Visual Studio Code
1. npm init
1. edit package.json
    - `name` : name the package should be the same as the repository
    - `version` : `0.0.0`
    - `main` : `dist/index.js`
    - `types` : `dist/index.d.ts`
    - `files` : to the dist folder
    - `author` : your GitHub user name
    - `repository` : set the type to get and the URL to GitHub url
    - `license` : `Unlicense`
1. npm install --save-dev typescript prettier jest @types/jest ts-jest @microsoft/api-extractor @microsoft/api-documenter


## Useful Scripts

- `prettier`
    - run prettier and format code
- `prettier-check`
    - check that everything is formatted
- `clean`
    - clean build output
- `build`
    - build the package
- `test`
    - run tests
- `api-extractor`
    - extract APIs from typescript build
- `api-documenter`
    - generate documentation from extracted data

- `manual` 
    - it can be helpful to be able to run manually written especially for debugging




## Repository Layout

/dist
/src
/tests
/documentation
.gitignore
README.md
tsconfig.json
jest.config.js

Optional:
.markdownlint.json
.prettierrc


## Testing


## build

> npm run build

## publish


1. > npm version `patch`
    * update the {patch, major, minor} version of the package

1. > npm run build

1. > npm login

1. > npm publish -access=public --otp=`one time pass`

    * `-access=public` is requires to publish the package under the scope

1. [deprecate old versions](#deprecate)

1. > npm logout

1. > git tag `version`
    * `version` the version of the package
1. > git push



## unpublish

> npm login

> npm unpublish --force `package name` --otp=`one time pass`

* `package name` is the name of the package to unpublish
* `one time pass` authentication code from the authenticator app

> npm logout

## deprecate

> npm deprecate @wandyezj/standard-node@"< `0.0.2`" "please update to the latest version" --otp=`one time pass`

* deprecate older versions upon every publish
