# Xebia Assignment

### How do I get set up? ###

* Clone the repo to your local machine.

### Build Setup ###

``` bash
# install dependencies
npm install

# start development server at localhost:3000
npm start

# for testing
npm test

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Linting ###

You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to this project's style guide. This project uses the base Airbnb JS style guide.

> Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base.

To use linting, please ensure that you have all the dev-dependencies installed for this project.
* VS Code - Install the ESLint plugin by Dirk Baeumer.
* Sublime Text 3 - https://github.com/roadhump/SublimeLinter-eslint
* Manually: 
``` bash
npm run lint
```

> Please do not push code with any linting errors.

### Contribution guidelines ###

* General guidelines
  1. Never push to master branch.
  2. Run tests and ensure your code passes all the tests before pushing.
  3. Please use ESLint to ensure your code conforms to the standards.
  4. Indent code with 2 spaces.

* Naming conventions
  1. All folders to have lowercase naming. This is to avoid case-sensitive issues between Linux and Windows environments.
  2. Following [Airbnb style guide](https://github.com/airbnb/javascript).
  3. Give proper names to JS variables. Avoid using abbreviations like ou, dn as variable names. Use orgUnit, domain instead. All boolean variables to start with is, can. e.g.: isLoading, canEdit, isEditable.

* Commenting
  1. Please comment your code thoroughly, so that it is easily maintainable.
  2. Follow JSDocs commenting patterns.
  3. If something is broken and you want it fixed, comment it with FIXME prefix.
  4. If something needs to be implemented later, please add a TODO prefix in the comment.
  5. Use @author tag to mark code written by you.
  6. Have a look at JSDoc style guide here https://github.com/shri/JSDoc-Style-Guide.