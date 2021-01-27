# API Design Breaking Changes

What is considered a breaking change?

What is considered breaking depends on the support contract given by the API.

Generally, API contracts are not particularly explicit about defining what is a breaking and what is a non-breaking change.

However, usually there is an expectation that once a dependency is taken on an API it will continue to behave as before.

From a purely technical perspective almost any change to an existing API could be breaking. Whether a change actually breaks dependencies is dependent on what dependencies were take on the API.

Possible changes

- signature
- behavior
- new parameters
- parameter overloads
- parameter defaults
- performance
- error codes
- removal of methods
- addition of methods
- binary size
- amount of data returned
- memory consumption

## What causes breaking changes?

- Changes to the API
- Changes to dependencies the API may rely on
- Changes in tooling that builds and deploys the API

## Why change an API?

- security
- features
- maintainance

Change to any long lived API is difficult to avoid as APIs often outlast their original implementations.

## What can be done to prevent breaking changes?

- avoid changes
- explicit contracts
- continual verification of explicit contract
- expectations of usage to prevent unintended dependencies

Almost all work to prevent future breaking changes must be done when the API is originally designed, implemented, and documented. By the time the API has shipped it's almost always to late to tighten the API signature. From an organization perspective it's incredibly difficult to justify expenses on creating better tests for existing APIs, after all the APIs works and no one is complaining, months or years later when a change is made that breaks dependencies on the API it is only once the change is shipped that it is discovered that software that depends on the API is broken. Essentially, since the signature is not explicitly defined with tests the actual signature of the API is unknown.

### Explicit contracts

- define all behavior cases
- define error codes
- define and continually test expected performance

## What can be done to mitigate breaking changes?





- Is the change directed towards a documented bug? If so consumers are likely to expect the change.
- How old is the API? The longer the API has been around the more likely consumers have built around the current behavior.
- How broken is the API? Is the behavior is so broken that consumers can't use the API then it's probably not breaking.
- How much is the API being used?
- What is the downside of making the change?
- Does the behavior align with the documentation? If the behavior is being adjusted to align with the documentation or intended behavior then the change is less breaking.
- Is there a behavior difference across platforms? If so then the difference should be documented.