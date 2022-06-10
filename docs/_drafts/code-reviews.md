# Code Reviews

## Purpose

- Improve Quality
- Share Knowledge

## How

### Preparing a Review

- [ ] Open a draft pull request
- [ ] Write up a description of the change
    - Motivation - why is this change being made?
    - Changelog stye summary of changes.ak

Preferable for a single person other than the author to be the primary reviewer, for complex pieces of code where knowledge is split between people individual people can review the specific pieces they are knowledgeable about.

Choose suitable reviewers

### Reviewing a Change

- [ ] start review promptly
    - promptly means the same day you get the review.
    - if unavailable to promptly do the review, redirect to another available reviewer, if there is no other appropriate reviewer provide an time frame.
- [ ] seek context
    - What is this change for?
- provide high level feedback early on
- suggestions, and questions
- scale out, provide high level and delegate details


## Who

Code Review is not a substitute for automated tests, which should occur in a pipeline

Review by an experienced person who understands the code

Know who expereinced people are

List of all code owners and reviewers, will need to keep the list up to date. Goal is to increase the number of people who can sigh

Only one requestor of the review and one reviewer, optionally one person who is learning the area. Requestor and learner can be the same person

Requestors goal is to make sure their code is correct

Reviewers goal is to make sure the code is correct, check for any unknowns and to sign off on the review, check for tests

Learners goal is to learn the area so they can become an expert reviewer, they should not sign off on the review, they should also questions


reviewer tends to be at a disadvantage since they didn't write the code and are not as devoted to the review as teh person asking for the review.