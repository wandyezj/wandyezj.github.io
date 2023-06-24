---
layout: post
title: "TypeScript Exports"
date: 2023-06-24
 00:00:00 -0700
tags: typescript
---

There are different ways to export and import names[^name-identifier] in TypeScript. This post give a recommendation on how to import and export for general cases.

## Recommendation

- Apply `export` directly to each function, class, interface, constant, or enum to be exported from a file.
- Have single export per file and name the file using exactly same name as that export since it eases code navigation.
- Avoid default export since it makes code harder to maintain.
- Avoid exporting namespaces.
- Imports should all be at the top of the file.
- Avoid renaming imports.

### Example Recommended Export

note: single export per file.

```typescript
// f.ts
export function f() {
}
```

### Example Recommended Imports

Most code should use the following import style.

```typescript
import { f } from "./f";

f();
```

When using libraries, it's possible the same name is claimed by multiple libraries but both pieces of functionality are needed in the same file scope. Since a name can only refer to one thing in a scope, different names need to be assigned.

If only one or two names clash then use `as` to rename an external libraries name. Generally, it's convenient to preserve names used inside of a library to keep things consistent.

```typescript
import { f } from "./f";
import { f as externalLibraryF } from "./externalLibrary";
import { f as externalLibraryOtherF} from "./externalLibraryOther";

f();
externalLibraryF();
externalLibraryOtherF();
```

An alternative if multiple names are used is to assign a namespace to the external libraries import. This make it easy to use multiple names and avoid clashes.

```typescript
import { f } from "./f";
import * as externalLibrary from "./externalLibrary";
import * as externalLibraryOther from "./externalLibraryOther";

f();
externalLibrary.f();
externalLibraryOther.f();
```



## Avoid Default Export

- Default exports encourage names that refer to the same thing to change throughout the program. Using different names to refer to the same concept makes a program more difficult to read.
- For most typical usage, there isn't a good reason to use default exports. If renaming is necessary it can be done with `as`
- The default keyword adds more typing and takes up valuable line space.
- default exports make it more difficult to write automatic refactor scripts and inhibit code search making code less maintainable.

### Example Default Export

```typescript
// f.ts
export default function f() {
}
```

```typescript
import preferredName from "./f";
preferredName();
```


## Notes

[^name-identifier]: To make this post more accessible, I'm using `name` in place of [`identifier`](https://en.wikipedia.org/wiki/Identifier_(computer_languages)).
