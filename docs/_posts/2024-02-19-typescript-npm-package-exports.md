---
layout: post
title: "TypeScript NPM Package Exports"
date: 2024-02-19 00:00:00 -0700
tags: typescript
---

How should NPM packages exported things?

I structure npm packages in the same way following my standard package layout[^wandyezj-package].

## Layout

This layout places all exports in a single index file: `src\index.ts`. The index.ts file explicitly exports the name of everything exported.

Example src\index.ts that exports something:

```typescript
export { something } from "./something.ts" 
```

Only items explicitly exported by name from the index file are considered public exports. Only public exports should be used by consumers of the package.

## Values

The structure described in the layout is informed by the following values:

- Optimize for the reader over the writer. Software will be read and reviewed more times than it is written.
- Optimize for consumption. Packages are intended for consumption in other pieces of software so they should be optimized for their intended purpose.
- Optimize for maintenance. Packages often need to be updated, make it easy to update the package for the consumer of the package.


## Scenarios

These are scenarios that occur during package development and consumption.

- What does the package export? How do I get a full list of everything that I should be able to publicly consume from the package?
- Have the package exports changed? How do I tell if and when the package exports have changed?
- If I need to import specific piece from the package where are those files with those pieces?
- If I need to refactor the package and move files around how do I make sure the same things are exported?



[^wandyezj-package]: [GitHub wandyezj/package](https://github.com/wandyezj/package)

[^wikipedia-poka-yoke]: [Wikipedia Poka-yoke](https://en.wikipedia.org/wiki/Poka-yoke)
