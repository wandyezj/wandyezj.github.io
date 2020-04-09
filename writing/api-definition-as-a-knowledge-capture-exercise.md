# API Definition as a knowledge capture exercise

The purpose of defining APIs is to capture as much information as possible as to how they should behave.

API Designs that are useful, intuitive, and testable are time consuming to produce but the results are worth it.

## Vision

Provide a process for API design to Maximize the benefit of the design process.

### Universal API

An API should be thought of as a standard.

Where possible APIs should be made abstract enough to apply across applications to common scenarios so the same API pattern can be directly taken to new areas with only implementation details changing.

Developers should only have to learn a pattern once for it to be widely applicable.

Allowing the same API structure allows all the thought that went into the design, documentation, and tests to be taken to the new implementation. This frees developers to focus on the  specific implementation and to innovate in new areas.

## The Exercise

API design is an iterative process that should happen **before** implementation, constrained by implementation details.

Throughout the exercise the proposed design should be made available for review and iterated on as needed.

None of the design steps are do once, instead the design process goes between steps as needed, although changes in previous design steps will impact later steps.

### Scenarios

First, API scenarios are defined: What should consumers of the API be able to do?

Scenarios should

- define a real world use case where the API is immediately useful

### Shape

Next, the API shape is defined: interfaces, classes, enums, methods.

Shape should:

- make intuitive sense to many people without extensive background or documentation

### Documentation

Next, the the various shapes are documented.

Documentation should:

- cover the specific behavior of the API
- give examples of how the API is used

### Units

Next, the documentation is turned into unit tests that should exercise all aspects of the API, including error conditions.

Units should:

- be specific
- easy to understand
- runnable tests
- cover edge cases

### Mocks

Next, the defined scenarios are mocked up with the API to show that the API meets the scenario requirements.

Mocks should:

- show that the API accomplishes the defined scenario
- show at a high level that the API interacts well with existing APIs
