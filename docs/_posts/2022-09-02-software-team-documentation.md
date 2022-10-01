---
layout: post
title:  "Software Team Documentation"
date:   2022-09-02 12:00:00 -0700
tags: software documentation management
---

A common question in the software industry is "Where is the documentation?". The question is a good joke. 😀 There frequently isn't any! It is common for software teams to place documentation low on the priority list.

In the absence of clear documentation, software engineers resort to: poking the software, staring for hours or days at a screen puzzling through complex code, attempting to find and get ahold of someone who can answer their questions, or making changes unsure of the downstream impact - hoping nothing breaks.

The benefits of writing documentation when writing the software are not immediately obvious, after all, the person who wrote the code usually understands how it works at the time they wrote it. If anyone has any questions, they can just ask! Unfortunately, in long lived software projects others frequently can't ask, since code often outlives peoples presence on the team or their memory of what the software does.

The difference in perspective of people writing the code and the people maintaining the code is a challenge. This challenge shows in the amusing contradiction of people asking for documentation for someone elses work, while providing little for their own.

Compounding the difficulty:

- Good documentation, like all writing, takes time to write well.
- When software changes, documentation must also change to present an accurate picture.
- Documentation must be organized and searchable for answers.
- Most Engineers are not trained in technical writing.

Considering the cost and the challenges, what documentation is most valuable and why?


Documentation can be thought of as fulfilling scenarios, just as software fulfills customer scenarios.

Common development scenarios:

- How is the documentation organized?
- How do I contribute to a project?
    - What does the end to end workflow look like?
    - Where is the code?
    - What tools need to be installed to support development? How do I install those tools?
    - How do I build the code?
    - How do I test the code?
    - How do I submit a pull request?
    - Who is important to add to specific pull requests?
    - What is expected in Code Review?
    - How is the code deployed?
    - How do I learn to use the tools used by the project?
- Where should I ask questions?
- Who should I contact for specific questions?
- What dependencies does the project have?
    - Important from a security perspective when those dependencies need to be updated.
    - What code depends on this code downstream?
- What is the overall context for the project?
    - What is the overall scenario for the code?
    - How does the project fit into the constellation of other projects and the broader ecosystem?
- How do I use the project to do something?
- How do I use a specific API?
    - What constraints does the API have?
    - What assumptions does the API make?
- How is the project organized?


In large complex pieces of software, where people update and add new code all the time, it quickly becomes impossible to know all the technical details. What details are important to know? What is the mechanism to keep track of those details? How team facilitate knowledge exchange and coordination?

One way to ease finding information is to place it in a consistent place in an consistent format.

One way to ease updating information is to place it next to the thing that necessitates the information being updated. A common practice is to place technical design and overview documents in markdown files and check them in and update them with the code.

## Articles

[Slashdot - Facebook engineers: have no idea where we keep all your personal data](https://tech.slashdot.org/story/22/09/07/2114208/facebook-engineers-we-have-no-idea-where-we-keep-all-your-personal-data)

> "I'm just trying to understand at the most basic level from this list what we're looking at"

> "I don't believe there's a single person that exists who could answer that question"

> "Someone must have a diagram that says this is where this data is stored"

> "We have a somewhat strange engineering culture compared to most where we don't generate a lot of artifacts during the engineering process. Effectively the code is its own design document often."
> "For what it's worth, this is terrifying to me when I first joined as well."
