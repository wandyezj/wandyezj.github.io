---
layout: post
title: "API Design Pattern Options Argument"
date: 2023-01-10
 00:00:00 -0700
tags: software architecture api design pattern
---

The Options Argument Pattern uses the last parameter in a function to bundle together optional parameters into an options object.

The Options Argument Pattern is best used when a function has independent optional arguments. Independent optional arguments meaning that the arguments can be specified independently.

The Options Argument Pattern allows optional arguments to be specified without having to specify preceding optional arguments.

An alternative to the Options Argument is Inline Options.

Carefully examine the following samples:

- [Example Options Argument](#example-options-argument)
- [Example Inline Options](#example-inline-options)

## Example Options Argument

```typescript
// options argument
declare function f(one: string, two: string, 
    options?:Partial<{ 
        switchOne: boolean;
        switchTwo: boolean;
        override: string
    }>);

// Example Usage
f("one", "two");
f("one", "two", {switchOne: true});
f("one", "two", {switchTwo: true});
f("one", "two", {override: "three"});
f("one", "two", {switchOne: true, switchTwo: true, override: "three"});
```

## Example Inline Options

```typescript
// Inline options
declare function f(one: string, two: string, switchOne?: boolean, switchTwo?: boolean, override?: string);

// Example Usage
f("one", "two", true);
f("one", "two", undefined, true);
f("one", "two", undefined, undefined, "three");
f("one", "two", true, true, "three");
```

## Conclusion

1. Which option is easier to understand?
1. Which option is easier to use?
1. Which option is easier to extend or modify?

