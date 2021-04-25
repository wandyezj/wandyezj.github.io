# Software Documentation

## Background

Modern engineered systems are complex entities tied to the organizations that create and sustain them. All systems exist only in the minds of the people gathered in organizations that create and sustain them. People knowledge is the most important component of modern engineered systems.

Aside: The value of people is recognized in the doctrine of Mutually Assured Destruction. The Mutual Assured Destruction doctrine counted people as the most worthy assets of a organization to target. Destruction of an organizations people is an effective way to destroy the knowledge that sustains the organization and in turn cripple the systems that organization maintains.

Modern engineered system are sustained by the organization knowledge and skills of the people that maintain it. In order for an organization to sustain itself long term and in turn sustain its systems it must preserve its knowledge.

 system exists outside of the minds of the people that create and sustain it.

Systems consist of both 'physical' machines and organic 'people' tha make up the system. The machines are sustained only through dedicated effort of people who maintain them. Machines are artifacts 

Software fundamentally exists in the minds of the people who build it. Natural attrition in systems builder knowledge pool means knowledge of a system is lost over time unless something is done to maintain the knowledge pool.



## Purpose of Documentation


Software as temporary and disposable or software as sustained.

The purpose of documentation is to aid explanation and understanding of system.

Documentation is important during system definition, implementation, and maintenance.

As software becomes ever more complex and system grow and age it becomes increasingly difficult to explain how they work.



 purpose and implementation is lost 

## Levels of Documentation

- Purpose
    - The fundamental goals of a piece of software, what it is meant to accomplish.
- System
    - Components of a system and how they interact with each other.
- Implementation
    - Specific details about how the system is implemented.

Software Components

- Repository
- Code
- Build
- Test




## Scratch

What issues exist in documentation today?

What is the value of documentation?

What is documentations role in development?

How do people use documentation?

Where should the documentation go?

Path traveled the most

What is the incentive to provide documentation?

Consensus on what is expected

System level - architecture documentation
components and main functionality
appropriate level for that map?

Target audiance?


I already know how it works so why do I need to explain it?

how to enforce? Cultural expectation, new people to the project component in wide use.

Where should the documentation go? Single place?

inner team communication

developer mobility

What has worked in the past?

expectation of what is presented to leadership.

Checklist does the feature require documentation? To what extent? Reported priority. Helps teams think about it as a group initiative. Hard to start on individual teams since it's hard to spread throughout the organization.

Guidance for documentation.

documetnation as knowledge pool


documentation as a force multiplier for key architects.

Generally knowledge lies in the heads of a few key technical people. These people are the goto people for their area. Many of the questions directed their way could be answered by documentation.

Priority of Documentation

- repository location
- setup, build, test, run
- intent
- component overview
- contribution to larger architecture

## Papers

### Laser 2021

[Architectural Archipelagos: Technical Debt in Long-Lived Software Research Platforms](https://arxiv.org/pdf/2104.08432.pdf)

Laser, Marcelo Schmitt, Duc Minh Le, Joshua Garcia, and Nenad Medvidović. "Architectural Archipelagos: Technical Debt in Long-Lived Software Research Platforms." arXiv preprint arXiv:2104.08432 (2021).

- Incentive structure isn't to build reusable tools
- Wide contributor base with lack of standards leads to islands of code that can't be recycled
- "archipelagos fall into disuse as
students perceive that building new capabilities from scratch
is easier than trying to refactor and reuse existing capabilities"
- temporary project contributors lack incentive to look over long term
- funded projects limited in duration
- no enforced architectural constrains except existing APIS
    - "This leads to architectural dissimilarities between
software islands that range from the code level, such as naming
conventions and design patterns used, to the architectural level,
such as architectural styles followed and connector types used."
    - "Extensions may even be created using different technology,
such as a new programming language, with little consideration
given to the complexity of managing such a project."
    - "Technical debt is accumulated
rapidly, and the combined lack of (1) focus on development
and (2) cohesion between team members means it is extremely
difficult to repay it. Eventually, the amount of technical debt
exceeds the benefits of extending the archipelago, at which
point the archipelago stagnates and is often discarded."

No enforcement ->  people do whatever

### de Almeida 2021

[Beyond tight deadlines: what are the business causes for technical debt?](https://arxiv.org/pdf/2104.09330.pdf)

de Almeida, Rodrigo Rebouças, Christoph Treude, and Uirá Kulesza. "Beyond tight deadlines: what are the business causes for technical debt?." arXiv preprint arXiv:2104.09330 (2021).

## To Read

M. Shaw, D. Garlan et al., Software architecture. Prentice Hall
Englewood Cliffs, 1996.

 L. Bass, P. Clements, and R. Kazman, Software architecture in practice.
Addison-Wesley Professional, 2003