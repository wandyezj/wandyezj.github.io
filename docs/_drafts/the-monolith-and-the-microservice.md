---
layout: post
title:  "The Monolith and The Microservice"
date:   2021-08-24 20:00:00 -0700
categories: software architecture
---

Microservice just fashion?

https://en.wikipedia.org/wiki/Microservices
- processes over a network
- independently deployable
- only have to rebuild one piece of the application
- idea being able to scale individual pieces of the application

https://en.wikipedia.org/wiki/Monolithic_application

Idea of components and how those components are deployed and updated.

In the Monolith all components are deployed together.

- No N-1 N+1 problems
- Interfaces do not need to be well defined and can be adjusted easily between versions

- Everything must update at once
- Requires shifting over
- larger deployments


In the Microservice components can be deployed individually.

- Interfaces must be well defined
- N+1 or N-1 problems
- complex testing scheme


Replicatable on the web and in packeged software

Java or .Net or C++ relying on preinstalled libraries or sharing libraries verses installing all dependencies and relying on those dependencies

- Risk of library update causing regression
- save space by sharing libraries