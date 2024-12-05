---
layout: post
title: "API Design Accessibility Principles"
date: 2024-11-11 00:00:00 -0700
tags: software API
---

## Abstract

What is an Application Programming Interface (API)?

> An API is "a set of clearly defined methods of communication among various components" per [Wikipedia's article on Application Programming Interface][API Wikipedia].

> "An API is the interface to implemented functionality that developers can access to perform various tasks." per [What makes APIs Hard to learn? Answers from Developers][What makes APIs Hard to learn? Answers from Developers]

What is the purpose of an API?

> The purpose of an API is to make knowledge accessible.

What is knowledge in the context of an API?

> Knowledge in the context of an API is functionality to perform programming tasks.

What is accessible knowledge?

> Knowledge that is accessible is discoverable and usable by others with minimal effort.

## Paper Structure

An Application Programming Interface (API) is a way to access functionality. One consideration of accessing functionality is ease of use: being able to quickly discover, understand, and apply the provided functionality. This paper will examine considerations for designing an accessible API.

This paper will examine accessibility Principles in four API aspects:

- [Model](#model),
- [Behavior](#behavior),
- [Structure](#structure), and,
- [Documentation](#documentation).

Each API aspect will describe itself, then explore its __Purpose__, and two related __Principles__:

- __Purpose__ is what role the API aspect serves in design,
- __Principles__ are high level direction towards accessible design considerations.

The API Aspects and explored Principles are:

- [Model](#model)
    - [Employ Existing](#employ-existing)
    - [Minimal](#minimal)
- [Behavior](#behavior)
    - [Positive](#positive)
    - [Concise](#concise)
- [Structure](#structure)
    - [Form Follows Function](#form-follows-function)
    - [Constrain Use](#constrain-use)
- [Documentation](#documentation)
    - [Explain Concepts](#explain-concepts)
    - [Show Intent](#show-intent)

The paper concludes with a summary of the principles and a [reference section](#reference) of material which guided this topic.

References have hyperlinks for easy access, and summaries of key takeaways that guided the construction of the principles. Every reader is encouraged to read all reference material for more details.

## Aspects

### Model

The model of an API is its underlying paradigm. The model consists of both a __Technical Model__ and __Mental Model__.

The __Technical Model__ is how the API is implemented and imposes constraints on design.

Some well known __Technical Models__ include:

- [Instruction Set Architectures](#instruction-set-architectures) such as: x86, AMD64, and ARM.
- [Relational Model](#relational-model) that backs many modern databases.
- [Hypertext Transfer Protocol](#hypertext-transfer-protocol)
- Language Models: C, C++, JavaScript, TypeScript, Block programming etc...
    - Languages generally provide specific means to accomplish various programming tasks and generally come with a standard set of conventions.

The __Technical Model__ provides the foundation on which an API is based, and comes with a certain set of expectations about how features in the model are used.

The __Mental Model__ is the user's map of what API represents, and how the API pieces fit together to accomplish tasks. See [The Design of Everyday Things by Don Norman](#the-design-of-everyday-things-by-don-norman) chapter 1 for a good explanation of mental models.

#### Model Purpose

The purpose of the __Technical Model__ is to ground the API in a technical implementation. The __Technical Model__ constrains the APIs implementation and how it is exposed.

The purpose of the __Mental Model__ is to provide an overall model for what the API represents and how it can be interacted with.

Together the __Technical Model__ and __Mental Model__ provide the platform on which to build the API.

#### Model Principles

##### Employ Existing

Employing a known __Mental Model__ and __Technical Model__  significantly reduces the amount of learning required to be able to use the API. When using an existing model it's best to follow the model as closely as possible since any deviation can surprise users and lead to mistakes in code.

##### Minimal

Fewer concepts generally takes less time to understand. Employing a __Mental Model__ and __Technical Model__ that have as few steps or few pieces as possible will generally make it easier to grasp.

### Behavior

The behavior of an API includes all the effects that it has. API behavior includes both success and error cases.

What can it do and what should it be allowed to do?

#### Behavior Purpose

The purpose of an API's behavior is to accomplish its assigned task and provide feedback on that task's status and the current state of the model.

The API's behavior is a description of what it __should__ do (the positive description) and what it should __not__ do (the negative description).

#### Behavior Principles

##### Positive

The positive description is what the API should do. The API should only do what is described and nothing more.

The negative description of what an API should __not__ do is infinite. The positive description is constrained to what is described.

Using the positive descriptions for an API's behavior is more descriptive than the negative description.

Positive descriptions are generally easier to understand than a combination of positive and negative descriptions.

##### Concise

Succinct explainable behavior is easier to understand than more complex behavior. Every additional special case or feature adds to mental overhead which makes things harder to understand.

### Structure

The structure of an API is the interface for interaction. The structure is based in the __Technical Model__ and can help shape the desired __Mental Model__ for the user. The structure specifics are dependent on the __Technical Model__, but usually consists of the methods, classes, and interfaces available to the user.

#### Structure Purpose

The purpose of API structure is to provide the concrete blocks of interaction the user can access. The structure suggests allowed behavior, shapes the user's __Mental Model__ of the API, and enhances the readability of the final sequence of interaction blocks.

#### Structure Principles

##### Form Follows Function

The form of the API should represent its function. Having the same structure represent the same concept is easier to understand and remember.

Making the elements of the API (i.e. names, types, functions, and parameters) describe the encapsulated behavior helps developers identify the correct API to use. For example, a function that performs a matrix transpose is better called `matrix_transpose()`, and not `foo()`.

##### Constrain Use

The structure should constrain the use of the API to make correct usage of the API easy, and wrong usage of the API hard. Similarly, the intended use of the API should look correct, and unintended use should look incorrect.

See [The Little Manual of API Design](#the-little-manual-of-api-design) Principle of "hard to misuse".

### Documentation

Documentation explains to the user how to effectively interact with the API.

Documentation generally:

- explains the __Technical Model__ employed,
- describes the __Mental Model__ the API represents,
- provides examples of correct usage, and
- catalogues available functionality.

Note: Available functionality can include API behavior limitations (such as performance) that are not captured by the structure.

#### Documentation Purpose

The purpose of documentation is to explain how to effectively interact with the API at both a higher and finer level.

#### Documentation Principles

##### Explain Concepts

Documentation should be used to explain the concepts required to use the API. Understanding the high-level concepts of the API helps others use the API more effectively.

Understanding "overall architecture" was cited as key need for developers to do more than the basics in [What Makes APIs Hard to Learn](#what-makes-apis-hard-to-learn).

##### Show Intent

Having documentation show intent, for example by providing examples of intended use, allows consumers of the API to model and constrain their usage to the intended uses.

## Conclusion

Model, Behavior, Structure, and Documentation can all work together to facilitate API accessibility.

Following the principles outlined for each concept can help transfer the desired model from the mind of the author to that of the user, thus making an API more accessible.

- [Model](#model)
    - [Employ Existing](#employ-existing)
    - [Minimal](#minimal)
- [Behavior](#behavior)
    - [Positive](#positive)
    - [Concise](#concise)
- [Structure](#structure)
    - [Form Follows Function](#form-follows-function)
    - [Constrain Use](#constrain-use)
- [Documentation](#documentation)
    - [Explain Concepts](#explain-concepts)
    - [Show Intent](#show-intent)


## Implications

The concepts of Minimal and Employ Existing when combined support the API begin consistent within itself and with other APIs. To be Minimal an API must refrain from introducing new concepts instead it should Employ Existing concepts when possible.


## Reference

### McKeachie's Teaching Tips

[McKeachie's Teaching Tips: Strategies, Research, and Theory for College and University Teachers]: https://www.amazon.com/McKeachies-Teaching-Tips-Wilbert-McKeachie/dp/1133936792

[McKeachie's Teaching Tips: Strategies, Research, and Theory for College and University Teachers][McKeachie's Teaching Tips: Strategies, Research, and Theory for College and University Teachers]

### API Wikipedia

[API Wikipedia]: https://en.wikipedia.org/wiki/Application_programming_interface

[Wikipedia: API][API Wikipedia]

> an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.

### API Design and Why it matters

[API Design and Why it matters]: https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/32713.pdf "API Design and Why it matters"

[API Design and Why it matters][API Design and Why it matters]

- Successful Public APIs capture customers
- Bad APIs result in support calls
- Public APIs are forever
- Thinking in terms of APIs improves code quality

### API Design Matters

[API Design Matters]: https://queue.acm.org/detail.cfm?id=1255422 "API Design Matters"

[API Design Matters][API Design Matters]

Why:

- Poor APIs are difficult to program with and often require additional code to be written
- Poor APIs are harder to understand and more difficult to work with than good ones
- Poor APIs often require not only extra code, but also more complex code that provides more places where bugs can hide
- Poor APIs Increase the cost to develop software
    - Time to Understand
    - Time to Write
    - Time to test
    - Time to fix bugs
- Poor APIs cost everyone time.

### The Little Manual of API Design

[The Little Manual of API Design]: http://people.mpi-inf.mpg.de/~jblanche/api-design.pdf "The Little Manual of API Design"

[Blanchette, Jasmin. "The little manual of API design." Trolltech, Nokia (2008).][The Little Manual of API Design]

- consistent naming conventions and patterns
- predictability - lack of surprise
- avoid boilerplate
- leads to readable code
- hard to misuse
- eliminate redundancy in users code
- Naming
    - recycle names from the existing models if applicable
    - Don't be creative
    - understand the audience
    - use unambiguous names for related things
    - should be able to map names to concepts with ease
    - avoid abbreviations
- parameters
    - avoid boolean parameters, prefer enums
    - choose reasonable defaults
    - have parameters do one simple thing and be used one way
    - Avoid too many options
- edge cases matter

> If you hear a colleague in the hallway say “It doesn’t matter, it’s just a corner case”, please slap them in the face.


### The World and The Machine

[The World and The Machine]: https://courses.cs.washington.edu/courses/csep503/19wi/schedule/papers/TheWorldAndTheMachine.pdf "The World and The Machine"

[Jackson, Michael. "The world and the machine." 1995 17th International Conference on Software Engineering. IEEE, 1995.][The World and The Machine]

> Software development is engineering because it is concerned to make useful physical devices to serve practical purposes in the world.

> The requirement — that is, the problem — is in the world. The machine is the solution we construct

### Measuring API Usability

[Measuring API Usability]: http://www.drdobbs.com/windows/measuring-api-usability/184405654 "Measuring API Usability"

[Measuring API Usability][Measuring API Usability]

- Scenario-based approach
- Evaluate actual users attempting to accomplish tasks

### What makes APIs Hard to learn

[What makes APIs Hard to learn? Answers from Developers]: https://www.cs.mcgill.ca/~martin/papers/software2009a.pdf "What makes APIs Hard to learn? Answers from Developers"

[Robillard, Martin P. "What makes APIs hard to learn? Answers from developers." IEEE software 26.6 (2009): 27-34.][What makes APIs Hard to learn? Answers from Developers]

- APIs Structure
- API learning resources - most important for learning an API
    - Documentation
    - Code Examples
    - Experimentation
    - Articles
    > efforts to improve the usability of an API’s structure need to be complemented by efforts to improve the resources available to learn them
- API Documentation Must
    - include good examples
    - be complete
    - support many complex usage scenarios
    - be conveniently organized
    - include relevant design elements
- Understanding Design Aspects and Rationale
    - Understanding APIs high level design
- Working with Code Examples
    - snippets - basic API functionality
    - tutorials - complete application
    - applications - samples, and open source projects

### An Empirical Study of API Usability

[An Empirical Study of API Usability]: https://bugcounting.net/pubs/esem13.pdf "An Empirical Study of API Usability"

[Piccioni, Marco, Carlo A. Furia, and Bertrand Meyer. "An empirical study of API usability." 2013 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement. IEEE, 2013.][An Empirical Study of API Usability]

> usable  APIs are  more  intuitive,  require  less  documentation  browsing,  and encourage reuse, thus increasing developers’ productivity

> cognitive dimensions: elements that characterize the expectations of users and what an API actually provides

> Finding descriptive, non-ambiguous names for API features is problematic given that programmers may be used to different terminologies.

> Discovering relations between API types (classes)  requires significant effort; simple designs are beneficial, especially to less experienced programmers.

> Accurate and complete documentation is a crucial issue for API usability; all the major usability flaws discovered in our study trace back to unsatisfactory documentation.

> Flexibility is a double-edged sword in API design: experienced programmers can take advantage of it, but it may confuse those with less practice

usability tokens - tokens are negatives in the API design

- surprise - API performs in a way that is not as the developer expected
- choice - requires understanding options slowing implementation
- missed - feature was there to aid implementation but developer did not see it
- incorrect - developer uses API incorrectly
- unexpected - API used in way not designed for

### Intelligent Code Completion

[Intelligent Code Completion]: https://en.wikipedia.org/wiki/Intelligent_code_completion

[Wikipedia: Intelligent Code Completion][Intelligent Code Completion]

### The Design of Everyday Things by Don Norman

[The Design of Everyday Things by Don Norman]: http://www.nixdell.com/classes/HCI-and-Design-Spring-2017/The-Design-of-Everyday-Things-Revised-and-Expanded-Edition.pdf "The Design of Everyday Things by Don Norman"

[Norman, Don. The design of everyday things: Revised and expanded edition. Basic books, 2013.][The Design of Everyday Things by Don Norman]

- The idea of a mental model distinct from the underlying technical

- Knowing What to Do: Constrains, Discoverability, Feedback
- Human Error? No, Bad Design

### Instruction Set Architectures

[Instruction Set Architectures]: https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction Set Architectures"

[Wikipedia: Instruction Set Architectures][Instruction Set Architectures]

- communicate with the CPU
- often have very specific behaviors and complex interactions
- many features

### Hypertext Transfer Protocol

[Hypertext Transfer Protocol]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"

[Wikipedia: Hypertext Transfer Protocol][Hypertext Transfer Protocol]

- Request Response protocol
- Contains status information about the request in the response

### Relational Model

[A Relation Model of Data form Large Shared Data Banks]: https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf "A Relation Model of Data form Large Shared Data Banks - E. F. Codd"

[Codd, Edgar F. "A relational model of data for large shared data banks." Communications of the ACM 13.6 (1970): 377-387.][A Relation Model of Data form Large Shared Data Banks]

- Presents a Model of Relational Algebra for use in querying a database.

### As We May Think

[Wikipedia As We May Think]: https://en.wikipedia.org/wiki/As_We_May_Think

[Wikipedia: As We May Think][Wikipedia As We May Think]

[As We May Think]: https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/

[Bush, Vannevar, and As We May Think. "The atlantic monthly." As we may think 176.1 (1945): 101-108.][As We May Think]

- Knowledge is becoming increasing specialized and detailed, how can this knowledge be shared?
- Machines can store this knowledge for us to be assessed by anyone

- The API can be thought of as an access to functionality

### An Introduction to Software Architecture

[An Introduction to Software Architecture]: https://courses.cs.washington.edu/courses/csep503/19wi/schedule/papers/IntroSA.pdf "An Introduction to Software Architecture"

[Garlan, David, and Mary Shaw. "An introduction to software architecture." Advances in software engineering and knowledge engineering. 1993. 1-39.][An Introduction to Software Architecture]

> it is important to be able to recognize common paradigms so that high-level relationships among systems can be understood

- Common patterns aid understanding
- Understanding high level relationships is important to understand the system as a whole.

Abstract Data Types

- software structure
- specifications
- language issues (modules, scope, types)
- invariant data structures
- information hiding

Architectural Styles

- Pipes and Filters
- Object Oriented
- Event Based
- Layered
- Repositories
- Interpreter
- Heterogenous

### C++ Core Guidelines

[C++ Core Guidelines]: http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines "C++ Core Guidelines"

[C++ Core Guidelines][C++ Core Guidelines]

- Conventions to follow for C++ code

Philosophy

- Express ideas directly in code
- Express intent
- type safe
- compile time check then run time check
- don't waste time or space
- prefer immutable data to mutable data
- encapsulate messy constructs
- use supporting tools as appropriate

### JavaScript Style Guide and Coding Conventions

[JavaScript Style Guide and Coding Conventions]: https://www.w3schools.com/js/js_conventions.asp "JavaScript Style Guide and Coding Conventions"

[JavaScript Style Guide and Coding Conventions][JavaScript Style Guide and Coding Conventions]

Why?

- improves code readability
- improve maintenance

Suggestions:

- variable names
- spaces
- indentation
- naming conventions
- initialize variables
- be aware of automatic type conversion
- be aware of defaults

### Software Testing: A Research Travelogue (2000–2014)

[Software Testing: A Research Travelogue (2000–2014)]: https://courses.cs.washington.edu/courses/csep503/19wi/schedule/papers/SoftwareTestingTravelogue.pdf "Software Testing: A Research Travelogue (2000–2014)"

[Orso, Alessandro, and Gregg Rothermel. "Software testing: a research travelogue (2000–2014)." Proceedings of the on Future of Software Engineering. ACM, 2014.][Software Testing: A Research Travelogue (2000–2014)]

- It's much easier to test a system when it's behavior is well defined.

### An Overview of Formal Methods Tools and Techniques

[An Overview of Formal Methods Tools and Techniques]: https://courses.cs.washington.edu/courses/csep503/19wi/schedule/papers/AnOverviewOfFormalMethodsToolsAndTechniques.pdf "An Overview of Formal Methods Tools and Techniques"

[An Overview of Formal Methods Tools and Techniques][An Overview of Formal Methods Tools and Techniques]

- Formal methods at the moment are too costly to implement in most software development practices.
- Formal methods are not currently capable to handling the massive dependency trees present in current software.

### API Design Reviews at Scale

[API Design Reviews at Scale]: https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45294.pdf "API Design Reviews at Scale"

[Macvean, Andrew, Martin Maly, and John Daughtry. "API design reviews at scale." Proceedings of the 2016 CHI Conference Extended Abstracts on Human Factors in Computing Systems. ACM, 2016.][API Design Reviews at Scale]

- Peer reviews are more efficient that usability tests, however usability tests are much more effective.
- Consolidate knowledge of API design and patterns into the review team

> Samples of end user source code is essential, as it allows reviewers to see in pracice how the API is used

> key in any review process is consistency in advice and guidance

- when one reviewer identifies a usability issue it is centrally documented so design teams can avoid the same pitfall and other reviewers can offer the same advice.

### How to write a technical paper

[How to write a technical paper]: https://homes.cs.washington.edu/~mernst/advice/write-technical-paper.html "How to write a technical paper"

[How to write a technical paper][How to write a technical paper]

> know your message, and stay on message

> The goal of writing a paper is to change people's behavior

Naming

> It is better to name a technique (or a paper section, etc.) based on what it does rather than how it does it

> Use terms consistently and precisely.

> Do not use a single term to refer to multiple concepts.

> Get feedback!

> When readers misunderstand the paper, that is always at least partly the author's fault!

### Robust De-anonymization of Large Datasets

[Robust De-anonymization of Large Datasets]:https://courses.cs.washington.edu/courses/csep503/19wi/schedule/papers/deanonymization.pdf "Robust De-anonymization of Large Datasets"

[Narayanan, Arvind, and Vitaly Shmatikov. "Robust de-anonymization of large sparse datasets." 2008 ieee symposium on security and privacy. IEEE, 2008.][Robust De-anonymization of Large Datasets]

- It's possible that any exposed data can be correlated with the data sets and individual users revealed


### Saltzer and Schroeder Design Principles

[The protection of information in computer systems]: http://web.mit.edu/Saltzer/www/publications/protection/Basic.html "The protection of information in computer systems"

[Saltzer, Jerome H., and Michael D. Schroeder. "The protection of information in computer systems." Proceedings of the IEEE 63, no. 9 (1975): 1278-1308.][The protection of information in computer systems]

- Economy of mechanism: Keep the design as simple and small as possible.
- Fail-safe defaults: Base access decisions on permission rather than exclusion.
- Complete mediation: Every access to every object must be checked for authority.
- Open design: The design should not be secret.
- Separation of privilege: Where feasible, a protection mechanism that requires two keys to unlock it is more robust and flexible than one that allows access to the presenter of only a single key.
- Least privilege: Every program and every user of the system should operate using the least set of privileges necessary to complete the job.
- Least common mechanism: Minimize the amount of mechanism common to more than one user and depended on by all users.
- Psychological acceptability: It is essential that the human interface be designed for ease of use, so that users routinely and automatically apply the protection mechanisms correctly.
- Work factor: Compare the cost of circumventing the mechanism with the resources of a potential attacker.
- Compromise recording: It is sometimes suggested that mechanisms that reliably record that a compromise of information has occurred can be used in place of more elaborate mechanisms that completely prevent loss.

On fail safe defaults:

"Base access decisions on permission rather than exclusion"

"The alternative, in which mechanisms attempt to identify conditions under which access should be refused, presents the wrong psychological base for secure system design"


## The Elements of Style


[The elements of style]: https://gutenberg.org/ebooks/37134 "The elements of style"

[Strunk, William. The elements of style.][The elements of style]


- Put statements in positive form

"Consciously or unconsciously, the reader is dissatisfied with being told what is not; he wishes to be told what is. Hence, as a rule, it is better to express even a negative in positive form"

- use definitive, specific, concrete language

## Intent

The intent of this paper is to build a mental model of the purpose and pieces of an API in the readers mind.

Ideally the readers mind should come away shaped to think about API's as a way to share knowledge with others.

Calling out each aspect of the API is meant to encourage the reader to think about each aspect independently but also in context of the other aspects.

The principles are meant to guide thought by providing a place to start when designing an API. By no means are the principles exhaustive.

The references section with its summaries of material are meant to encourage the reader to do their own exploration of the topic.

Hope you enjoyed the paper! I hope to have a video up soon that explores the topic in a more dynamic way.

`-wandyezj`
