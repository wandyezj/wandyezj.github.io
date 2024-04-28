---
layout: post
title: "Permission Granted"
date: 2024-04-28 00:00:00 -0700
tags: software
---

This paper explores the client-server API access token model and provides suggestions to increase security.

The client-server architecture [^wikipedia-client-server] is fundamental to the web.

The client wants to call APIs available on the server to access resources. Servers typically want to control access to resources.

One way servers can control access to resources is by distributing tokens with specific permissions.

Server APIs are called with parameters and include a token. Before the server executes the API call, it checks that the token includes the appropriate permissions for the call to be made.

When a server has multiple clients it is desireable to provide the minimum set of permissions required for the client to do it's job.

Providing the minimum set of permissions prevents clients from making mistakes by allowing them to only do what they are designed for. From a security standpoint if a client is compromised the potential damage is limited.

I'll skip how these clients are registered, authenticated and how these tokens are verified. I want to focus on the API permissions model.

When a client is registered it can declare the permission it needs.

## Permissions in Current Practice

In practice permissions categories are broad. Often limited to `read`, or `read-write`, on large groups of APIs. For example if a client only needs access to a single API call it will often get permissions to many other APIs.

When registering a client application, developers often struggle to figure out the appropriate permissions to request. Categories are broad, abstract, and it hard to tell which APIs link to a specific permission. Let alone find the right switch to click on a UI portal. Developers often end up frustrated and wanting to develop will simply keep adding permissions until things work.

Broad permission categories and confusing registration result in creation of permission tokens that are more powerful than strictly necessary for a client. These overly broad tokens increase the risk to the server.

## Well Defined Permissions

Re-imagining permission declaration. There is opportunity to have a more secure model that's easier to use.

Have registration list out every API call combination and adjust the tokens permissions as necessary. This allows permissions to be adjusted on the fly to more restrictive or broader as software adapts, it also allows alerting to the client if something is being done in an unauthorized way via logging.

Instead of broad category checkboxes during registration.

Registration can specify every API call including restrictions on parameter values. The specific set of required permissions can be generated from this set of declarations.

For example there may be a general API to read files on a server. The client may only ever read a specific file in a specific directory with a specific name. The registration could clearly specify this behavior.

Once this behavior is specified the server can restrict permissions to the best of its capabilities. This means when finer-grain controls are introduced the permission token can be updated with this more restricted set of permissions.

Additionally, clear specification of what the API does allows detection of anomalies in the use of the API. For example if permissions are general, but the specification is specific, and it's detected that permissions are being used beyond what is specified an alert can be triggered. Either the specification needs to be updated or there is potential abuse of the clients token.

A clear specification also allows review of all clients full permissions and allows prioritization of permission access features to further restrict permissions.


[^wikipedia-client-server]: [Wikipedia - Client Server Model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

[Wikipedia - Security Token](https://en.wikipedia.org/wiki/Security_token)
