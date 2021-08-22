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

Choose a directory in your machine. Mine is `nodejs-with-eslint-prettier-and-editorconfig`. Now open this directory in your prefered terminal. I'm using [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab). Type in `npm init -y` to initialize you NodeJS app. It should create a `package.json` file.



![](assets/img/screenshot_1.png)



Just for the sake of this tutorial, I'm gonna install and configure express, so we have more code to work on and you can write whatever routes you want. I'm just gonna have the / route that'll display a classic "Hello World" message.