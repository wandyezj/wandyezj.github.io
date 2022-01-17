---
layout: post
title:  "Claims and Proofs"
date:   2022-01-16 12:00:00 -0700
tags: software
---

Software program descriptions often make claims about functionality. Some claims of recent interest are those around data privacy, data security, and data integrity.

Claims are good, but proof is better. How can software provide evidence for its claims?

In the essay "Reflections on Trusting Trust" Ken Thompson states:

> You can't trust code that you did not totally create yourself.

>No amount of source-level verification or scrutiny will protect you from using untrusted code.

A main point of Thompson's essay is that you must trust the people who write the software (presumably people trust themselves and thus why you can trust code you wrote; a dubious claim).

Considering most of use will continue to use software created by others in our daily lives, how can we increase our trust in the software we use?

- Can we choose who to trust?
- Can we reduce the amount of trust we need to have?
- Can software provide evidence for its claims?

## Choosing who to trust

Most widely deployed and used software in the modern world is not written by a single developer. Critical software development tools (compilers, source control, build tool chains, scripts, integrated development environments, fundamental libraries, operating systems) combine the work of hundreds and sometimes thousands of unique individual contributors over time. These critical development tools are used to support the construction of other programs: Browsers, Office Software, Games, and the thousands of other applications people use daily.

There is no single individual that we can trust; we must trust organizations.

## Can we reduce the amount of trust we need to have?

Having to trust large organizations and each of the thousands of individuals may have us wish we could trust a smaller subset of individuals or perhaps a smaller subset of code.

Open Source software is a way to increase trust by letting everyone see the source code that defines what the program is supposed to do.

More scrutiny of widely used software is another way to increase trust. More scrutiny by security researchers or other concerned individuals means issues are more likely to be discovered.

Organizations often have code review policies which require that more than one developer sign off on changes to software. Review by multiple developers familiar with the software can increase the likelihood software holds up to its claims.


## Can software provide evidence for its claims?

Much work has been done on allowing software to present evidence for its claims.

One example is requiring applications to show  required permissions to people before installation. In Android and iOS, software developers write a manifest that requests the permissions the application needs and the operating system that runs the application only allows the application to use the permissions it has requested.

Another example is techniques that provide evidence for specific behavior. In "Countering trusting trust through diverse double-compiling." David Wheeler explores a technique to provide evidence that a compiler is not bugged and that the source code for the compiler is likely the source of the compilers code. (_Note_: Contrary to the essays title it does not 'counter' trusting trust and misses Thompson's broader point about trust in software.)

## Reference

- Thompson, Ken. "Reflections on trusting trust." In ACM Turing award lectures, p. 1983. 2007.

- Wheeler, David A. "Countering trusting trust through diverse double-compiling." In 21st Annual Computer Security Applications Conference (ACSAC'05), pp. 13-pp. IEEE, 2005.