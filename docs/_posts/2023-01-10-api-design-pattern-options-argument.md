---
layout: post
title: "API Design Pattern Options Argument"
date: 2023-01-10
 00:00:00 -0700
tags: software API architecture design pattern
---

The Options Argument Pattern:

- Is best used when a function has independent optional arguments.
- Uses the last parameter in a function to bundle together optional parameters into an options object.
- Allows optional arguments to be specified without having to specify preceding optional arguments.

An alternative to the Options Argument is Inline Options.

The following samples demonstrate the two patterns using a sample function in TypeScript:

- [Example Options Argument](#example-options-argument)
- [Example Inline Options](#example-inline-options)

Each sample uses a function `f` with two required arguments {`one`, `two`} and three optional arguments {`switchOne`, `switchTwo`, `override`} to demonstrate both function definitions.

Example calls to function `f` are then provided for the following scenarios:

- no optional arguments
- only one optional argument `switchOne`
- only one optional argument `switchTwo`
- only one optional argument `override`
- all three optional arguments { `switchOne`, `switchTwo`, `override`}

## Example Options Argument

```typescript
// options argument
declare function f(one: string, two: string,
    options?: Partial<{
        switchOne: boolean;
        switchTwo: boolean;
        override: string
    }>): void;

// Example Usage
f("one", "two");
f("one", "two", { switchOne: true });
f("one", "two", { switchTwo: true });
f("one", "two", { override: "three" });
f("one", "two", { switchOne: true, switchTwo: true, override: "three" });
```

## Example Inline Options

```typescript
// inline options
declare function f(one: string, two: string, switchOne?: boolean, switchTwo?: boolean, override?: string): void;

// Example Usage
f("one", "two", true);
f("one", "two", undefined, true); // switchOne must be specified (using undefined to use the default value) before switchTwo can be specified.
f("one", "two", undefined, undefined, "three"); // both switchOne and switchTwo must be specified before override can be specified.
f("one", "two", true, true, "three");
```

## Consider

1. Which option is easier to comprehend?
1. Which option is easier to use?
1. Which option is easier to modify?
