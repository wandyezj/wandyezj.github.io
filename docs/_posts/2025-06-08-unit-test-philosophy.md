---
layout: post
title: "Unit Test Philosophy"
date: 2025-06-28 00:00:00 -0700
tags: software
---

Why are we writing unit tests?

I write unit test to verify functionality.

Sometimes code is complex enough that it's difficult to verify simply by looking at it. Having specific input and output cases can help increase my confidence in the code I wrote. Typical targets for this type of testing are: state machines, mathematical functions, regex, and paired functions like encrypt/decrypt or compress/decompress.

I write unit tests to prevent regressions.

Specifically, I want to make sure a contract is enforced. Certain values in should yield certain values out. I want to be able to change how underlying code works when I add new features without breaking an existing contract. Typically the target for this type of testing are APIs or critical high level customer scenarios.






