# Code Review

- Performance
- Integration with rest of the code base
- Tests


Keep Quality of Code Base High, Avoid accruing technical debt

- Start review prombptly
- redirect if not able to do review
- proovide high level feedback early on
- suggestions, directivesm and questions
- scale out, provde high level and delegate details


- right reviewer
- preview change to involve reviewer early
- privide overview of change in the description
- don't take comments personally
- break large changelists ito small ones

- respect each other
- use face to face
- avoid fame wars


Quick Checks
- cofors to codign guidelines
- has tests
- reviews must have code context with surroundign code
- broken into righ tside changes

big picture
- right change
- don ein right place
- solves the right problems
- actualy soves the problem
- worthwhile investment

Design / architecture
- simple and extensible
    - avoid speculative implementation
    - keep choices open

carve out appropriate components
    - loose couping and minimal interfaces
    - appropriate layering
    - separate concerns
    - enables independent testing of components via mocks

- leverages
    - update rpdiendly data sctureuts if appropriate
    - right buildig blocks

- hindles istributes system issues
    - failure resiliant
    - scalre out not scale up
    - built in monitoring

backward compatibl
no cascading dependency failures


Interface design
    - self explanatory - named intuitively , consistent, easy to use, hard to misuse
    - minimal - focused, not leak impementation, miniize conceptual weight, when in doubt leave it out
    - sufficient - used without looking at implementatin
    - appropriatly extensible in the future

Accompanyng tests shoud exemplify the use of the public interface

Documentation for main interface should be in the code
    - main data scturecutres
    - preconditions, post conditions
    - side effects, thread safety
    - performance characteristics

Coding Standards
    - proper use of concat
    - input and output variables
    - member variables

[How To Design A Good API and Why it Matters - Joshua Bloch](https://www.youtube.com/watch?v=-av6cz9upO0)

- 
- break up parapmeter lists if too long

Testing
- every reivew should have associated tests withotu exception
- when refactoring code also refactor tets

Test cases
    - side effect free - executabel in parallel
    - focused - use mocks where ever possible

New code should be tes friendly: Warnign sights
    - large constructors
    - too much coupling
    - global states
    - big classes

unit tests, integration, performance, compatibility

[Guide: Writing Testable Code by Misko Hevery](http://misko.hevery.com/attachments/Guide-Writing%20Testable%20Code.pdf)

Live Site / Reliability

- Expose control
    - new features should be off by default
- Testing in production and canary tests
    - allow test data / traffic to propogate without impacting production
- is the change backwards compatible
    - what adjacent componets are impacted

Performance

- small changes can have large performance impacts
    - excessive logging

- for performance critical components require performance tests
    - micro benchmarks
    - load tests
    - production capacity tests

- watch our for premature optimization
    - do not use to justify ugly code

Config changes
- bad config changes can cuase outages
- have every configu change be code reviewed
    - look for flag differences
- separate config and cde changes documet how t enabel and turn off features in the code
- have every change be reviewed no matter how small

build on blocks
- do not reinvent stuff

- do nto abuse current design

code is read more times than written, code should be readable years from now

do not use arcane abbreviations

minimize coupling


