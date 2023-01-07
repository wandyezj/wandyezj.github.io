---
layout: post
title: "Intent Capture"
date: 2022-12-04
 00:00:00 -0700
tags: software architecture
---

Application automation can increase productivity.

Instead of an Application requiring all tasks to be done through a Graphical User Interface ([GUI](https://en.wikipedia.org/wiki/Graphical_user_interface)), an application can provide an Application Programming Interface ([API](https://en.wikipedia.org/wiki/API)) to access functionality through code. Complex or repetitive tasks can then be described in code and executed with a single button click.

However, not everyone is proficient at writing code, and, it can be difficult to discover what API to use for a specific action.

How can we make building automation easier?

## Macro Recording

One concept is a [Macro Recorder](https://en.wikipedia.org/wiki/Macro_recorder) that tracks a users actions and turns them into code that can replay those actions on demand.

A macro recording program receives UI actions as events that are interpreted as a set of intents that can be represented by code.

> Event -> Intent -> Code

Some examples of this model are:

- Excel VBA Macro Recorder
- Google Sheet Macro Recorder

In both of these models - once the recorder is started - when UI actions are taken the recorder shows a text summaries of the action detected - when recording stops the code representing the macro can be edited to fill in any gaps.

A challenge of macro recording is following UI actions can only capture so much of intent. Determining complete intent from action alone is incredibly difficult as pointed out by Don Norman and decades of Ubiquitous Computing research.

Macro recording is inherently linear and it is difficult to capture loop like intents. Similarly it difficult to differentiate the intent of performing an action for a specific named item verses a selected item verses a relative item.

There are clear benefits to macro recording, it provides a clear mapping between UI action and APIs aiding discovery, it can also provide a sketch of code that can then be modified to better capture the intent.

In most cases recorded macros as used a a starting point, or used to generate snips to be incorporated into larger macros.

## Natural Language

An alternative to macros recording is translating natural language to intent.

Natural language is more free form and can thus potentially capture more of the intent.

The challenge is in translation, communication of how something is understood, and correction when the translation does not go as planned.

## Architecture

Developing Programmable Applications is easier when all modification and access to underlying data model are done through a common API.

> GUI or Code -> API -> data model

When an API provides all access to data it becomes easier to:

1. test the underlying applications modifications to the data model
1. map UI actions to Code, (the UI calls the same APIs as code)
1. swap out UI elements
1. implement undo and redo stacks

## Related Topics

- Experimentation with code
- Correction and refinement
- Block Programming
- How do novices to programming understand code?
