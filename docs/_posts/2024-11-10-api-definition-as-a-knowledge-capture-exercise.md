---
layout: post
title: "API Definition as a knowledge capture exercise"
date: 2024-11-10 00:00:00 -0700
tags: software
---

The purpose of defining APIs is to capture as much information as possible as to how they should behave.

API Designs that are useful, intuitive, and testable are time consuming to produce, but the results may be worth it.

## Vision

Provide a process for API design to maximize the benefit of the design process.

### Universal API

An API should be thought of as a standard.

Where possible APIs should be made abstract enough to apply across applications to common scenarios so the same API pattern can be directly taken to new areas with only implementation details changing.

Developers should only have to learn a pattern once for it to be widely applicable.

Allowing the same API structure allows all the thought that went into the design, documentation, and tests to be taken to the new implementation. This frees developers to focus on the specific implementation and to innovate in new areas.

## The Exercise

API design is an iterative process that should happen **before** implementation, constrained by implementation details.

Throughout the exercise the proposed design should be made available for review and iterated on as needed.

None of the design steps are do once, instead the design process goes between steps as needed, although changes in previous design steps will impact later steps.

Steps

1. [Scenarios](#scenarios)
2. [Shape](#shape)
3. [Documentation](#documentation)
4. [Units](#units)
5. [Mocks](#mocks)

### Scenarios

First, API scenarios are defined: What should consumers of the API be able to do?

Scenarios should:

- Define a real world use case where the API is immediately useful.

### Shape

Second, the API shape is defined: interfaces, classes, enums, methods.

Shape should:

- make intuitive sense to many people without extensive background or documentation.
- facilitate how people will use the API to accomplish the scenario.

### Documentation

Third, the the various shapes are documented.

Documentation should:

- cover the specific behavior of the API
- give examples of how the API is used

### Units

Fourth, the shape, and documentation are used to define unit tests that should exercise all aspects of the API, including error conditions.

Units should:

- be specific
- easy to understand
- runnable tests
- cover edge cases

### Mocks

Fifth, the defined scenarios are mocked up with the API to show how the API meets the scenario requirements.

Mocks should:

- show that the API accomplishes the defined scenario
- show at a high level that the API interacts well with existing APIs
