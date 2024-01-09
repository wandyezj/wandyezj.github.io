---
layout: post
title: "Code Best Practice - do not use language keywords as identifiers"
date: 2021-12-03 00:00:00 -0700
tags: best-practice code
---

Coding languages often have keywords:  `if`, `null`, `None`, etc..

In Python for example `if`, `True` and `False` are keywords.

Coding languages often allow identifiers for variable names, class names, struct names, method names, function names, and property names.

Language keywords should only be used for their specified purpose in the language. Keyword should not be used as identifiers.

It would be convenient if by default programming languages disallowed the use of keywords as identifiers. There may be some edge cases where it makes sense to use keywords as identifiers, however enabling this behavior should be a deliberate choice on the part of the programmer.

Why?

- Keywords have special meaning using them as identifiers adds confusion to those reading the code.
- In some languages some keywords can be overwritten which can change the commonly understood meaning.
- Syntax highlighting tools often specially highlight keywords, using keywords as identifiers often results in these identifiers being highlighted as keywords instead of as identifiers. This can be confusing to look at.

