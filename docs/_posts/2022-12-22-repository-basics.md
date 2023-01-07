---
layout: post
title: "Repository Basics"
date: 2022-12-22
 00:00:00 -0700
tags: software architecture repository
---

A set of best practices for code repositories.

Repositories should be set up to ease development of quality code.

A prioritized list of standard repository features.

- [Source Control](#source-control)
- [Integrated Development Environment](#integrated-development-environment)
- [README.md](#readme)
- [Build](#build)
- [Debug](#debug)
- [Pipeline](#pipeline)
- [Package System](#package-system)
- [Test](#test)
- [Code Formatter](#code-formatter)
- [Spell Checker](#code-formatter)
- [Linter](#linter)
- [Component Documentation](#component-documentation)
- [Auto Add Reviewers](#auto-add-reviewers)
- [Code Review Guidelines](#code-review-guidelines)



What do these features look like and why have them?

## Features

### Source Control

Every modern piece of software should be using a source control system that eases sharing and collaboration.

The current standard source control tool is [git](https://en.wikipedia.org/wiki/Git).

- git
- GitHub

### Integrated Development Environment

An Integrate Development Environment provides many features to ease development.

- IntelliSense
- Autocomplete

### README

`README.md` in the root of the repository that describes the contents, owner, and development process.

This file is important for people to quickly understand the purpose of the repository, who to contact for help, and how to get started with the repository.

### Build

Process to build the repository. Ideally build is a single command that can be run. Any setup steps to get working in the repository such as tool dependencies should be described.

Builds should be reproducible. Meaning that the same build output is generated for the same build input every time.


### Debug

Process to debug the program.

Debugging should allow setting and hitting break points.

Breakpoint debugging significantly increases the speed of development. Having debugging set up for people using the repository makes things much easier.

### Pipeline

A Continuous Integration pipeline runs quality checks on every Pull Request and before every merge to keep the main branch building and free of common issues.

Pipelines can automate publishing of libraries and application deployment.

Pipelines are key for rep

### Package System

Large projects typically consume pieces of code developed in other repositories. Projects many also export piece of code to be used in other repositories.

- [NPM](https://en.wikipedia.org/wiki/Npm_(software))
- [NuGet](https://en.wikipedia.org/wiki/NuGet)

The alternative of a package system is to copy and paste code between repositories.

### Test

Test harness for unit testing and end to end testing.

How to add new tests for new components.

- jest
- playwright

### Code Formatter

Format everything consistently. Avoid style arguments and common Code Review comments.

- prettier
- clang format

### Spell Checker

Eliminate common spelling mistakes before code reviews, make it easy to find things in code.

### Linter

Automatically discover and eliminate common mistakes.

Example: In JavaScript the use of `==` verses `===` can be a source of bugs.

- eslint
- clang-tidy

### Component Documentation

Documentation on the purpose and use of components and exported interfaces.

This documentation can often be automatically generated.

- [API Extractor](https://api-extractor.com/pages/setup/generating_docs/)

### Auto Add Reviewers

Automatically add the right reviewers to reviews specific sections of code. It can be difficult to know the appropriate people to review code, automating adding reviews is a way to cut down on this time.

### Code Review Guidelines

Code Review Guidelines that explain the repositories standards. The guidelines help form common expectations around code reviews.
