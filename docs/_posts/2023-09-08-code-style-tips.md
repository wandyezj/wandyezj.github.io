---
layout: post
title: "Code Style Tips"
date: 2023-09-08
 00:00:00 -0700
tags: code
---

## Avoid Ternaries within Ternaries

Avoid nesting ternaries. Instead of nesting ternaries use if statements.

```typescript
// Good
const x = condition ? "a" : "b";

```

```typescript
// Avoid
const x = conditionA ? "a" : conditionB ? "b" : "c";
```

```typescript
// Instead
let x = "c";
if (conditionA) {
  x = "a";
} else if (conditionB) {
  x = "b";
}
```

## CamelCase Acronyms in Identifiers

Generally, acronyms should be considered a single word. This makes things easier to read. Most spell check tooling is designed for camel case, so this helps avoid awkward underlines.

```typescript
// Good
const abcdThing = "a";
```

```typescript
// Avoid
const ABCDThing = "a";
```


## Enable TypeScript Rules

[No Property Access From Index Signature](https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature)

- any is forbidden

[TypeScript](https://typescript-eslint.io/rules/?supported-rules=recommended-typeInformation)