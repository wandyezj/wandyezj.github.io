---
layout: post
title: "Build Add-In"
date: 2025-12-14 00:00:00 -0700
tags: software
---

Why did I make the [Build Add-In](https://github.com/wandyezj/build-add-in)? Where do I see it going?

Full disclosure, I work at Microsoft on the Office Extensibility team. All views expressed are my own. I am the current maintainer of Script Lab. Over the last five years: I've developed the current office.js API design and review process, reviewed and approved many of the new office.js API shapes and designs, and developed Office Scripts API design and core architecture.

The Build Add-In is my toy - exclusively developed by me, _for my amusement_.

I made the first commit to the Build Add-In repository on GitHub on March 1st 2024.

It's been a little over a year since I started the project, so I thought now would be good time to pause and reflect on my motivations and the development journey so far.

I started the Build Add-In project out of my frustrations with Script Lab.

I fell in love with Script Lab on first use about six years ago when I joined the Office Platform Extensibility team. The ability to easily make small extensions to Word, Excel, PowerPoint, and Outlook, was SO cool!

Script Lab made it easy to try out Office JavaScript (office-js) APIs - essential given the bizarre core _context.sync_ design. The overall design of the office-js API architecture is unintuitive to learn for both novices and experienced developers. There have been multiple attempts to revise the design, unfortunately it is expensive to implement and the business case is unclear. The closest thing to a revision is Office Scripts which shims over office-js. Given AI can now write code from natural language prompts - it's unlikely the core API layer will ever be revised. We are likely stuck with the office-js API shape forever.

I also appreciated how Script Lab eased extending Office with snippets without having to publish a full Add-In - which is a ridiculous amount of work as I learned from [Word Rhyme](https://marketplace.microsoft.com/en-us/product/office/WA200000398?tab=Overview) the first Add-In I published. Generally, I  don't want to publish every single simple extension publicly - for example I have a snippet called "Portfolio Balance" that helps me decide where to invest.

I can't emphasize enough how much I love the idea of Script Lab - I really feel the core idea is excellent.

About two years ago I became the maintainer of Script Lab (first commit [February 2023](https://github.com/OfficeDev/script-lab/pulls?q=is%3Apr+is%3Aclosed+author%3Awandyezj)). I quickly discovered the implementation was a maintenance nightmare.

Before joined the Office Extensibility team I spent two years working in Windows Update, followed by two years in Windows Compatibility. My experience in these organizations gave me a deep appreciation of design for maintainance - and how critical software maintainance is for so many people and organizations. Generally, most people care more about what they have continuing to work and verses a new feature. Put another way - people are _really_ upset when you break their personal workflows, or disrupt their critical organizational processes.

Historically, Windows was not designed for maintainance. In fact there are two separate teams, a massive team that designs and builds the new version and adds new features, and another team that provides long term support customers deeply care about - like critical security updates (or fixing all the critical bugs in the _"new and improved"_ version). The team that designs and builds new features - generally gives little thought to how that version would be maintained for the following decades of maintenance. Maintainance extends through all parts of the software stack: build system, deployment, testing, documentation, etc...

Why was Script Lab such a maintenance nightmare? I won't go into details - after all, it's relatively obvious by reading through and comparing the Script Lab and Build Add-In repositories.

Suffice to say, I had a chat with my manager and pointed out we could re-write the entire Script Lab Add-In and make it both a better experience and cheaper to maintain. This proposal was reject of course - reasonably. For one, I found out my manager had been bitten by the previous re-write that had left Script Lab in it's current state. Additionally there were risks - cost, changes to the UX, and - are you sure that it will fit within the our time constrained budget for Script Lab maintenance? Of course I was fairly sure - I don't propose things until I've read through all the details - I'm highly risk adverse when it comes to technical design. My manager is also risk adverse, and it's much less risky to try to maintain the current thing - even if it costs more in the short term and long term.

Could I be wong? I love being wrong - it means I get to learn something!

To Be Continued...
