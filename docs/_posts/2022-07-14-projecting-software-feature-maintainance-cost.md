---
layout: post
title:  "Projecting Software Feature Maintainance Costs"
date:   2022-07-14 12:00:00 -0700
tags: software
---

When new software features are implemented they come with an ongoing maintainance cost.

The maintainance of software consistently consumes developer resources.

Understanding the maintainance cost is important for determining the lifecycle cost for a feature.


## What leads to maintainance costs?

Change.

## What cause the need for change?

- Dependencies
- Security Vulnerabilities
- Changing Requirements

### Dependencies

Graph of software dependencies

upstream components -> component -> downstream components


Change

- Dependencies on other upstream software that is subject to change.
- Dependencies taken on software by downstream dependencies
- Security vulnerabilities.
- Bugs discovered through usage.
- Request for new features
- change of requirements

## What factors increase the cost of change?

- lack of expertise
    - people have to implement software people with expertise take significantly less time
- lack of documentation
- lack of tests
- lack of well specified interfaces
- complex code

Why is projecting software feature maintainance difficult?

- Difficulty in predicting
- usage
- changes in dependencies
- Difficulty in assessing how 


Leads to costs being unpredictable