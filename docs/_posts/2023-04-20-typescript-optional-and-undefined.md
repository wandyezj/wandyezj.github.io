---
layout: post
title: "TypeScript Optional and Undefined"
date: 2023-04-20
 00:00:00 -0700
tags: typescript
---

There is a slight difference between `property?: string` and `property: string | undefined`.[^typescript-optional-properties] [^3] [^4]

- `property?: string` says the property _may not_ exist, and - if the exactOptionalPropertyTypes flag [^2] is not set - may have the value undefined.
- `property: string | undefined` says the property _will_ exist, and may have the value of undefined.
- `property?: string | undefined` says the property _may not_ exist, and may have the value of undefined.

## Best Practice

Enable the exactOptionalPropertyTypes flag.

Use `property: string | undefined` to make sure a property is always included and deliberately set to undefined This may be useful to make sure a property isn't accidentally forgotten.

This is especially important for libraries to communicate how they check a property is undefined. For example `o.x === undefined` or `Object.hasOwn(o, "x")`[^object-has-own] or  `Object.prototype.hasOwnProperty(o, "x")`[^object-has-own-property]



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

[^typescript-optional-properties]: [TypeScript Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)

[^2]: [TypeScript Exact Optional Property Types](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes)

[^3]: [Distinguish missing and undefined](https://github.com/microsoft/TypeScript/issues/13195)

[^4]: [Strict optional properties](https://github.com/microsoft/TypeScript/pull/43947)

[^object-has-own]: [Object.hasOwn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)

[^object-has-own-property]: [Object.prototype.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)