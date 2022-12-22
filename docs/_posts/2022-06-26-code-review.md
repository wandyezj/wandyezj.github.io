---
layout: post
title:  "Code Review"
date:   2022-06-26 12:00:00 -0700
tags: software
---
## Purpose

- Improve Quality
- Share Knowledge

### How can code reviews contribute to code quality?

Code review can help enforce team quality standards.

People can check design assumptions and check all steps in the process are followed.

### How can code reviews share knowledge?

Code reviews provide a forum to share knowledge.
The reviewers have a change to understand the specific change.
The reviewee can learn from others expertise and insight.
Code reviews can also prompt discussion on team standards, that once decided on can be written up for broader distribution.

## Preparing a Change

It's easier to review changes that are: small, focused, and targeted. It's also easier to avoid merge conflicts. Packing multiple disparate changes into the same review makes it harder for reviewers to know what changes contribute to which piece.

Avoid large all at once refactors. It's much easier to review small incremental changes that change code in a auditable way.

### Preparing a Review

- [ ] Open a draft pull request
- [ ] Write up a description of the change
    - Motivation - why is this change being made?
    - Changelog style summary of changes
        - [keep a changelog](https://keepachangelog.com/en/1.0.0/)
        - [Common Changelog](https://common-changelog.org/)

## Who

Prefer a single person, other than the author, be the primary reviewer that signs off on the review. For complex pieces of code where knowledge is split between people, individual people can review the specific pieces they are knowledgeable about. _note_: Multiple reviewers adds significant overhead in explaining the change.

Choose suitable reviewers. The best reviewers are those with in depth experience in the specific technologies being used, and with existing expertise in the codebase. One reviewer who goes in depth into the review is preferable to multiple shallow reviewers. It's best to choose reviewers before the change is made and to include the reviewers in design discussions.

If you are added to a review you don't have time or believe you are qualified for, you should decline the review and explain why.

## Reviewing a Change

- [ ] start review promptly
    - promptly means the same day you get the review.
    - if unavailable to promptly do the review, redirect to another available reviewer, if there is no other appropriate reviewer provide an time frame.
- [ ] seek context
    - What is this change for?
- [ ] documentation
    - Is there a written explanation of the feature others will be able to refer to later outside of the review?
    - Is there a written explanation of the change and how it is implemented?
    - How is the change architected?
- [ ] architecture
    - Does the change fit into the existing architecture?
- [ ] test
    - What tests offer evidence the change works as designed?
    - What tests help ensure the change will continue to work?
    - how is the

- Ideally, read code in entirety before leaving comments (unfortunately, most review platforms don't allow draft comments)
- It can be helpful to clone the branch with the change to poke the code and try it out for yourself
- Provide high level feedback early, before moving to nit comments.
- Ask questions about any changes you don't understand. Before signing off on a review you should understand the code in its entirety.

- suggestions, and questions
- scale out, provide high level and delegate details


## Errata

- Code Review is not a substitute for automated tests, which should occur in a pipeline. Code review is a great way to enforce that changes have tests.

- Get reviewed by an experienced person who understands the code.

- Know who experienced people are, managing team knowledge.

List of all code owners and reviewers, will need to keep the list up to date. Goal is to increase the number of people who can sigh

Only one requestor of the review and one reviewer, optionally one person who is learning the area. Requestor and learner can be the same person

Requestors goal is to make sure their code is correct

Reviewers goal is to make sure the code is correct, check for any unknowns and to sign off on the review, check for tests

Learners goal is to learn the area so they can become an expert reviewer, they should not sign off on the review, they should also questions

reviewer tends to be at a disadvantage since they didn't write the code and are not as devoted to the review as the person asking for the review.

Requiring multiple sign offs on reviews combined with resetting votes on any change:
    - Significantly slows down how quickly changes can be made.
    - Reduces the incentive and cost to fix nit comments, since it resets all reviewers
    - Increases the incentive to sign off without through review, since presumably the other person is reviewing it (I just need one more sign off).
    - Places less significance on a sign off.


When reviews take a long time to close it incentivizes placing a large number of changes in a single review. This makes changes more difficult to understand. To avoid this make reviews quick and easy.

What does sign off on a code review mean?