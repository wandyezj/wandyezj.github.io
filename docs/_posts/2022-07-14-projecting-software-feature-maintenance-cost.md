---
layout: post
title:  "Projecting Software Feature Maintenance Costs"
date:   2022-07-14 12:00:00 -0700
tags: software
---

When new software features are implemented they come with an ongoing maintenance cost.

The maintenance of software consistently consumes developer resources.

Understanding the maintenance cost is important for determining the lifecycle cost for a feature.


## What leads to maintenance costs?

Change.

## What cause the need for change?

- Dependencies
- Security Vulnerabilities
- Changing Requirements

### Dependencies

Graph of software dependencies

upstream components -> component -> downstream components


Change

- Dependencies by the component on upstream software that is subject to change.
- Dependencies taken on the component by downstream dependencies.
- Security vulnerabilities.
- Bugs discovered through usage.
- Request for new features
- change of requirements

## What factors increase the cost of change?

- lack of expertise
    - people have to implement software people with less expertise take significantly more time.
    - Difficulty learning how to maintain a piece of softwares increases the costs.
- lack of documentation
- lack of tests
- lack of well specified interfaces
- complex code

Why is projecting software feature maintenance cost difficult?

Difficulty in predicting:

- usage
- changes in dependencies
- Difficulty in assessing how it will change.


Leads to total costs being hard to predict.