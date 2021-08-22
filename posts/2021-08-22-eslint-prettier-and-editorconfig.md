---
title: ESLint, Prettier and editorConfig
description: Using ESLint, Prettier and editorConfig in a NodeJS application
date: 2021-08-22 12:23:48
thumbnail: assets/img/node-js.png
category: js
background: "#D6BA32"
---
Using ESLint, Prettier and editorConfig in a NodeJS application is great even if you're working alone in a project. It helps you keep a standard code as you write it.

Now, if you're working with a team, it's essential to keep a standard code as people come and go in projects.

## So, what is ESLint, Prettier and editorConfig?

### ESLint

To keep it short, it's a [pluggable JavaScript linter and it find and fix problems in your JavaScript code](https://eslint.org) as said in their website.

> Linter resources: [English](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) and [Portuguese](https://willianjusten.com.br/analisando-seu-codigo-js-com-linter)

Basically, ESLint helps you a lot!

### Prettier

As their [documentation](https://prettier.io/) say, Prettier is:

* An opinionated code formatter
* Supports many languages
* Integrates with most editors
* Has few options

### editorConfig

According to their [doccumentation](https://editorconfig.org/), editorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

## How to configure them in your NodeJS application?

Now that we see their benefits, let's configure them in our node application!

1. Choose a directory in your machine. Mine is `nodejs-with-eslint-prettier-and-editorconfig`. Now open this directory in your preferred code editor. I'm using [VS Code](https://code.visualstudio.com). Type in `npm init -y` in the integrated terminal to initialize you NodeJS app. It should create a `package.json` file.

![](assets/img/screenshot_1.png)

2. Just for the sake of this tutorial, I'm gonna install and configure express, so we have more code to work on and you can write whatever routes you want. I'm just gonna have the / route that'll display a classic "Hello World" message.

![](assets/img/screenshot_2.png)

3. Now we're going to install ESLint as a dev dependency:

`npm install eslint --save-dev`

4. After the installation is done, we're going to initialize the configuration process and chose the "To check syntax, find problems, and enforce code style" option:

`npx eslint --init`

![](assets/img/screenshot_3.png)

5. Choose the "Javascript modules (import/export)" option:

![](assets/img/screenshot_4.png)

6. For this example, choose the "None of these" option, because we're just using Node:

![](assets/img/screenshot_5.png)

7. Choose "No" because we're not using TypeScript right now:

![](assets/img/screenshot_6.png)

8. Choose the "Node" option:

![](assets/img/screenshot_7.png)

9. Select the "Use a popular style guide" option:

![](assets/img/screenshot_8.png)

10. Then, select the "Airbnb" option:

![](assets/img/screenshot_9.png)

10. Finally, select the JavaScript option for your config file format:

![](assets/img/screenshot_10.png)

After all of these choices, you can install all the dependencies. with npm and the \`.eslintrc.js\` file was created for us. This is the file we're going to make our main configuration, such as the rules and plugins.

## ESLint plugin configuration on VS Code

After the installation before, if you open the `src/app.js` file, you'll notice it'll yell at you with some "errors". That's because the Airbnb style guide, you need a `;` at the end of the instructions.

So now let's type in VS Code the shortcut `F1` and type `json:`

![](assets/img/screenshot_11.png)

Then add the following lines:

`// ...`

`"eslint.codeActionsOnSave.mode": "all",`

`"eslint.validate": [`

`"javascript",`

`"javascriptreact",`

`"typescript",`

`"typescriptreact",`

`"html",`

`],`

`// ...`

``

After that, everytime we same a file and there are any mistakes, they'll be automatically fixed :)

But wait! There's a few more thing we need to do...

The first thing is to edit the `.eslintrc.js` file with these lines:

`rules: {`

`'class-methods-use-this': 'off', // deactivate a rule that says that every method of a class needs the word this`

`'no-param-reassign': 'off', // deactivate a rule that says that it's not allowed to recive a parameter and change it`

`},`

> There's no rule that says we can't deactivate those rules. It's up to the team to do so.

## Install and configure Prettier

The next step is to install Prettier and the additional ESLint plugins:
`npm install eslint-config-prettier eslint-plugin-prettier --save-dev`

After that install, we should add "prettier" in `extends` inside the `.eslintrc.js`file, so the file would be like this:

`module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off', // deactivate a rule that says that every method of a class needs the word this
    'no-param-reassign': 'off', // deactivate a rule that says that it's not allowed to recive a parameter and change it
  },
};`