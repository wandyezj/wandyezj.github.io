---
layout: post
title: "TypeScript Exports"
date: 2023-06-24
 00:00:00 -0700
tags: software typescript
---

There are multiple ways to export and import names[^name-identifier] in TypeScript. This post give a recommendation on how to import and export for general cases.

## Recommendation

- Apply `export` directly to each function, class, interface, constant, or enum to be exported from a file.
- Have single export per file and name the file using exactly same name as that export to ease code navigation.
- Place all imports at the top of the file.
- Avoid default export since it makes code harder to maintain.
- Avoid exporting namespaces.
- Avoid renaming imports.

### Example Recommended Export

```typescript
// f.ts
export function f() {
}
```

_note_: single export per file.

### Example Recommended Imports

Most code should use the following import style.

```typescript
import { f } from "./f";

f();
```

When using libraries, it's possible different libraries use the same name to refer to different concepts. When multiple concepts with the same name need to be used in the same file scope different names need to be assigned.

If only one or two names clash then use `as` to rename an external libraries name. Generally, it's convenient to preserve names used inside of a library to keep things consistent.

```typescript
import { f } from "./f";
import { f as externalLibraryF } from "./externalLibrary";
import { f as externalLibraryOtherF} from "./externalLibraryOther";

f();
externalLibraryF();
externalLibraryOtherF();
```

If multiple names clash, and alternative is to assign a namespace to the external libraries import. This make it easy to use multiple names and avoid clashes.

```typescript
import { f } from "./f";
import * as externalLibrary from "./externalLibrary";
import * as externalLibraryOther from "./externalLibraryOther";

f();
externalLibrary.f();
externalLibraryOther.f();
```

_note_: make sure to use the same namespace name for the same library throughout the code.

## Avoid Default Export

- Default exports encourages multiple names to refer to the same concept in code. Using multiple names to refer to the same concept makes a program more difficult to read.
- For typical usage, there isn't a good reason to use default exports. Renaming is handled with `as`.
- The default keyword takes longer to type and takes up valuable line space.
- Default exports makes it more difficult to write automatic refactor scripts and inhibits code search, making code less maintainable.

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
