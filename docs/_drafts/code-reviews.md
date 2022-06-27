# Code Reviews

## Purpose

- Improve Quality
- Share Knowledge

### How can code reviews contribute to code quality?

Code review can help enforce team quality standards.
People are great at checking design assumptions or making sure all steps in the process are followed.

### How can code reviews share knowledge?

Code reviews provide a forum for knowledge to flow among people.
The people reviewing the code have a change to understand the specific change.
The person having the code reviewed can learn from others expertise and insight.
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

It is preferable for a single person other than the author to be the primary reviewer that signs off on the review. For complex pieces of code where knowledge is split between people, individual people can review the specific pieces they are knowledgeable about.

Choose suitable reviewers. The best reviewers are those with in depth experience in the specific technologies being used, and with existing expertise in the codebase. One reviewer who goes in depth into the review is preferable to multiple shallow reviewers. It's best to choose reviewers before the change is made and to include the reviewers on 

## Reviewing a Change

- [ ] start review promptly
    - promptly means the same day you get the review.
    - if unavailable to promptly do the review, redirect to another available reviewer, if there is no other appropriate reviewer provide an time frame.
- [ ] seek context
    - What is this change for?

- Ideally, read code in entirety before leaving comments (unfortunately, most review platforms don't allow draft comments)
- It can be helpful to clone the branch with the change to poke the code and try it out for yourself
- provide high level feedback early, before moving to nit comments
- Ask questions about any changes you don't understand. Before signing off on a review you should understand the code in its entirety.

- suggestions, and questions
- scale out, provide high level and delegate details


## Errata

Code Review is not a substitute for automated tests, which should occur in a pipeline. Code review is a great way to enforce that changes have tests.

Review by an experienced person who understands the code

Know who expereinced people are

List of all code owners and reviewers, will need to keep the list up to date. Goal is to increase the number of people who can sigh

Only one requestor of the review and one reviewer, optionally one person who is learning the area. Requestor and learner can be the same person

Requestors goal is to make sure their code is correct

Reviewers goal is to make sure the code is correct, check for any unknowns and to sign off on the review, check for tests

Learners goal is to learn the area so they can become an expert reviewer, they should not sign off on the review, they should also questions


reviewer tends to be at a disadvantage since they didn't write the code and are not as devoted to the review as teh person asking for the review.

Requiring multiple sign offs on reviews combined with resetting votes on any change:
    - Significantly slows down how quickly changes can be made.
    - Reduces the incentive to fix nit comments, since it resets all reviewers
    - Increases the incentive 