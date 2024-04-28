---
layout: post
title: "Code Style Tips"
date: 2023-09-08 00:00:00 -0700
tags: code
---

- [Avoid Ternaries within Ternaries](#avoid-ternaries-within-ternaries)
- [CamelCase Acronyms in Identifiers](#camelcase-acronyms-in-identifiers)
- [Place default last in a switch statement](#place-default-last-in-a-switch-statement)
- [Define functions before use](#define-functions-before-use)
- [Automatically run pipelines against any dependency changes](#enable-typescript-rules)
- [Enable TypeScript Rules](#enable-typescript-rules)

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

## Place default last in a switch statement

```typescript
// Good
switch(item) {
  case "a":
    break;
  default:
    break;
}
```

```typescript
// Avoid
switch(item) {
  default:
    break;
  case "a":
    break;
}
```

## Define functions before use

This helps avoid issues where a function accesses a constant that is defined after the function call, since this results in an error.

```typescript
// Good
function f() {
}

f();
```

```typescript
// Avoid
f();

function f() {
}
```

```typescript
f(); // Error: Cannot access 'x' before initialization 

const x = "x";

function f() {
  console.log(x);
}
```


## Automatically run pipelines against any dependency changes

Pipelines should be automatically run against PRs that impact their dependencies. This helps ensure that the pipeline is passes for any checked in changes and continues to work.

## Enable TypeScript Rules

[No Property Access From Index Signature](https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature)

- any is forbidden

[TypeScript](https://typescript-eslint.io/rules/?supported-rules=recommended-typeInformation)