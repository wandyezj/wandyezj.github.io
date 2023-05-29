---
layout: post
title: "Node Exports"
date: 2023-03-25
 00:00:00 -0700
tags: software node programming
---
How to split a node script into multiple files:

```js
// hello.js
function hello() {
    console.log("hello")
}

module.exports = {hello};
```

```js
// test.js
const { hello } = require("./hello");
hello();
```

Run test.js

> node test.js

`hello.js` contains the functions to export.

`test.js` imports the functions from `hello.js`

_note_: the `require` path needs to path to the file that contains the export.

_note_: `require` is a node specific construct - do not expect this to work in the browser.
