---
layout: post
title: "TypeScript Optional and Undefined"
date: 2023-04-20
 00:00:00 -0700
tags: typescript
---

There is a slight difference between `property?: string` and `property: string | undefined`.

- `property?: string` says the property _may not_ exist, and may have the value undefined.
- `property: string | undefined` says the property _will_ exist, and may have the value of undefined.

Use `property: string | undefined` to make sure a property is always included and deliberately set to undefined This may be useful to make sure a property isn't accidentally forgotten.

## Example

[Open Example in TypeScript Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgILIN4Chm+QBygHt9owBPAfgC5kQBXAWwCNoBuLAXyy1ElkQoAQphx5CJMuVoMW0ZAB9k9EABMIMUBFVceAej1YDaZBAAecRvgA2EI4YREQAZzDI41dAF5RnDlkcXNzgAJlpvUTwCYlIoCloVdU0QbS5-A3tkEXNLGzsMzIBJEAA3OGtgHQNA12RmWhEfbAM-Hhq3ZmQmsVwJWPjlNQ0tHVaeAKdnIlsAOmsiAHMACjgASjZkYwxuGumIOcWl5nXNvUwAIj6pc4Sh5O1OIA)

```typescript
interface A {
    property?: number;
}

interface B {
    property: number | undefined
}

//
// A example
//
const a:A = {
};

const a2: A = {
    property: undefined
};

//
// B example
//

// Invalid
//const b: B = {
//};

const b = {
    property: undefined
};



console.log(a); // {}
console.log(b); // {"property": undefined}
```


## Reference

[TypeScript Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)