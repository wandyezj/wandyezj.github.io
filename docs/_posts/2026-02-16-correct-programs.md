---
layout: post
title: "Correct Programs"
date: 2026-02-16 00:00:00 -0700
tags: software
mermaid: true
---


What does it mean for a program to be 'correct'?

First, we need to define correct.

Let's start with compilers.

A compiler translates a source language to a target language.

```mermaid
flowchart LR
    Source -- compile --> Target
```

For example we might want to translate __c__ into ARM assembly:

__C__

```c
int a = 1;
int b = 2;
int c = a + b;
```

__ARM assembly__

```arm
mov x0, #3 // Load the value 3 into a register
```

How do we know our compiler did it's job correctly?

## By Definition

One option is _by definition_. We simply say that whatever the compiler does is correct. This probably isn't what most people are looking for.

A benefit of definition is what you see is what you get. The challenge is the definitions can be complex to understand.

A drawback of definition is what happens when there are different targets?

By definition doesn't tell you how different targets will behave for the same input.

```mermaid
flowchart LR
    source[Source]
    target_a[Target A]
    target_b[Target B]

    input[Input]
    output_a[Output A]
    output_b[Output B]
    


    source -- compile --> target_a
    source -- compile --> target_b

    input -- Target A --> output_a
    input -- Target B --> output_b
```

## Equivalence

Generally for a compiler, what is useful is a definition of equivalence for the Source and Target.

I'd like to know for any sequence of input the output is the same for both source and target.


```mermaid

flowchart LR
    input[Input]
    output[Output]

    input -- Source --> output

    input -- Target --> output
```


This definition of equivalence is often seen as the minium bar for compilers. It's difficult enough to prove, as source and target languages can be quite complex and have a lot of nuance.

Generally, this idea of behavioral equivalence is what is used for [Compiler Correctness](https://en.wikipedia.org/wiki/Compiler_correctness)

- [CompCert](https://en.wikipedia.org/wiki/CompCert)
- [CakeML](https://cakeml.org/)


## Key Point

To determine if something is 'correct' you need to specifically define what 'correct' means.
