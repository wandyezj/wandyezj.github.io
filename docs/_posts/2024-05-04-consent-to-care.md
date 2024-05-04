---
layout: post
title: "Consent to Care"
date: 2024-05-04 00:00:00 -0700
tags: software
---

When I use a new software program for the first time, I'm typically prompted by a "consent dialog" presenting a wall of text. I have a choice of agree and use the software or not to use the software. I don't bother reading the text, and I click agree. I want to use the software. What exactly did I agree to?

## The Relationship between Developer and Consumer

The relationship between software developers and consumers is unequal.

Consumers want to use software, and typically lack the ability to assess or limit the software to only do what they want. Developers can pretty much do whatever they want in software, as long as it's useful - and isn't obviously bad - people will use it.

It's difficult to assess softwares:

- Trustworthiness
- Security
- Privacy
- Accessibility
- Robustness
- Support

This lack of transparency makes it easy for developers to place a low priority on these concerns.

### An Example

I recently published the [Build Add-In](https://github.com/wandyezj/build-add-in) an Add-In for Microsoft Office.

Pretending I didn't write this software, how could I assess the features above?

I can read statements provided by the developer.

[End User License Agreement](https://wandyezj.github.io/build-add-in/statements/eula.html)

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND

> wandyezj reserves the right, at any time and from time to time, to update, revise, supplement, and otherwise modify this Agreement and to impose new or additional rules, policies, terms, or conditions on your use of the Build Add-In.

[Privacy Statement](https://wandyezj.github.io/build-add-in/statements/privacy.html)

> The Build Add-In code does not collect any information.

[Support Statement](https://github.com/wandyezj/build-add-in/blob/main/statements/support.md)

> The Build Add-In is provided as is with no guarantee of quality or support.


For the Build Add-In these statements guarantee nothing - the EULA even says it can be updated on demand without notification!!!

Even if there was an expressed guarantee, I as a consumer have no way of assessing if these statements are true, or enforcing these statements.

In terms of the privacy statements, I have specified it as the `Build Add-In code` - an ambiguous term.

Even developers are consumers of other developers software and subject to the same unequal relationship.

I as the developer, don't have a way to easily verify information of some kind isn't collected by something I take a dependency on.

The Build Add-In depends on the office.js library published and hosted by Microsoft. Since as an independent developer, I don't control this dependency, there isn't a way for me to make a reliable statement about what it does or might do.

## From Consent to Care

Is the current consent model really consent?

Few consumers can understand what they are consenting to. Developers when they take dependencies are consumers - and also don't know what they are consenting to.

Instead of a consent based model, it might be better to adopt a care based model, where developers try to write their software in a way that cares for their customer.

We try to do our best with care, but we don't always succeed in caring for the customer in the way they want to be cared for.

With the Build Add-In, I try to care about the customer, however, it's really challenging to develop software that cares about everything the customer cares about - everything is a series of compromises. I try to be as up front as possible about the softwares limitations, I have to hope that's enough.

