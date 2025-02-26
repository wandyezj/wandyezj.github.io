---
layout: post
title:  "Projecting Software Feature Maintenance Costs"
date:   2022-07-14 12:00:00 -0700
tags: software
---

Each new software feature implemented comes with an ongoing maintenance cost.

The maintenance of software consistently consumes developer resources.

Understanding a features maintenance cost is important for determining the lifecycle cost for a feature.

It is desirable to understand the lifecycle cost of a feature so it can be planned for and used to assess the financial tradeoffs of a feature.

## What leads to maintenance costs?

Change.

## What causes the need for change?

- [Dependencies](#dependencies)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Changing Requirements](#changing-requirements)

### Dependencies

Graph of software dependencies:

`upstream components -> component -> downstream components`

Change

- Dependencies by the component on upstream software that is subject to change.
- Dependencies taken on the component by downstream dependencies.
- Security vulnerabilities.
- Bugs discovered through usage.
- Requests for new features.
- Change of requirements.

### Security Vulnerabilities

Modern software systems are linked to many physical systems. Actors are always trying to exploit software to have it work in their favor. As new threats are discovered software must be updated to patch these exploits.

### Changing Requirements

Software is used by people in the world. Peoples needs change as the world changes.

When people use the software they often begin to better understand their own requirements and want to change the software to fit those new requirements.


## What factors increase the cost of change?

- Lack of expertise
    - People have to implement software - people with less expertise take significantly more time.
    - Difficulty learning how to maintain a piece of softwares increases the costs.
    - Expertise includes knowledge of the specific software stack and tools used to implement the software, as well as knowledge about how the overall system is composed.
- Lack of documentation
- Lack of tests
    - A lack of tests can cause a change to unknowingly break previous functionality. When existing functionality breaks and is shipped to customers this can cause a fire drill which consumed time to investigate, debug, and fix, that would otherwise go towards development.
- Lack of well specified interfaces
- Complex code

## Why is projecting software feature maintenance cost difficult?

Difficulty in predicting:

- [Usage](#usage)
- [Dependency Changes](#dependency-changes)
- [Future Needs](#future-needs)

Leads to total costs being hard to predict.

### Usage

Increasing usage can increase:

- The number of edge case behaviors encountered.
- The number of changes people want to adapt the software to their needs.

### Dependency Changes

It can be hard to predict the long term future of dependencies.

- Will the dependency by maintained long term?
- How vulnerable is the dependency to security exploits?
- Are there alternative dependencies that can be used instead?
- What is the cost to swap out the dependency for an alternative one?

### Future Needs

What are the potential future needs of people using the software?

What is the cost to adapt the software to these future needs?


## What can we do to reduce the long term maintenance cost?

Build software for long term support and consider the life cycle cost of design and implementation decisions.
