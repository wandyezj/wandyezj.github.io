---
layout: post
title: "Tabs, Spaces, and Braces"
date: 2023-01-12
 00:00:00 -0700
tags: software style
---

T


## Personal Preference

I prefer to follow published style guides for languages that can be enforced with a code formatter.

- Python [PEP8](https://peps.python.org/pep-0008/)
- JavaScript / TypeScript [Prettier](https://prettier.io/)
- C++ [Core Guidelines](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
- C# [Microsoft Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)

General personal preferences:

- four spaces for statements under a block.
- all if statements have a pair of braces even if there is a single statement in the block (consistency)

## Draft


Good question about brackets. Brackets are a hot topic. For brackets, from a technical perspective what's most important is consistency. allman or K&R shrugs they are both fine. Indentation style - Wikipedia note: C++ core guidelines recommend K&R C++ Core Guidelines (isocpp.github.io) similarly JavaScript tends to use K&R ish example: Loops and iteration - JavaScript | MDN (mozilla.org). I've kind of given up on bracket style and just let the styler do it for me since it's easy enough to read both.  The reason the styler in standard package is set to K&R is because that's the style of most JavaScript programs. Other JavaScript developers will view it as weird if you do something else, since they expect K&R ish).

Bracket style touches on a broader topic about conventions and standards. Generally, any standard will be suboptimal for some cases, but there is often greater value generated by having that standard than by not having one. i.e. there is more value is everyone following a single bracket style than having everyone have their own style, since once you understand that style you can easily read other code even if it's not your preferred standard. Thankfully there are only two mainstream bracket styles, and people mostly don't use the other ones (note: you might encounter code bases that do their own bracket thing, it's quite difficult to convince people to change especially when they are used to what they know, they will probably insist you change and adopt their style in their codebase) The people friendly thing to do ask what they do and why they do it the way they do and if they have considered using a more mainstream style (from experience, don't engage in a debate about style with them it annoys them )

C# does my more preferred bracket style (I agree with you about allman being preferable for multiple reasons): https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions, but that's C#, different languages have different conventions, most C# developers would think it weird if you did a different style in that language.