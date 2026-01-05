---
layout: post
title: "Frictionless Chat"
date: 2025-06-28 00:00:00 -0700
tags: software
---

How can we create an Psudonym Chat?



Why enforce unique user names?

We want people in chat to be able to identify each other.

Don't want to store any private data on the server.

`Public Key`, `Private Key`, `Pseudonym`

Message: {message: {ps}, pseudonym: string, 


- [SubtleCrypto.generateKey](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey)
- [SubtleCrypto.digest](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
- [SubtleCrypto.sign](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign)
- [SubtleCrypto.verify](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/verify)

What about using GPG Keys?

Protocol

- Claim Pseudonym
    - Client: Generate Key Pair
    - Client -> Server: Get Pseudonym - Assigned by server - signed to show that it's from the server, returns the pseudonym
    - Client: Sign Pseudonym
    - Client -> Server : Claim Pseudonym - Upload Signed Pseudonym and Public Key
- Get Pseudonyms
- Post Message
- Get Messages
