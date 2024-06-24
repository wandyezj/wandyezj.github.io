# Open Social Media

## Design Goal

Create an open social network.

- Zero server maintenance cost.
- Any peer can offer any functionality and pay the associated computation cost.

### Trust

How to establish trust with peers?

The foundation of trust is in the real world.

Establishing real world origin or information is key for trust. We want to know that information comes from a specific person or is vetted by some organization


## Requirements

- Work across all major operating systems and devices: iOS, Android, Windows, Mac, Ubuntu (Ideally work in the browser without anything installed)


## Notes

[a peer to peer social network](./a-peer-to-peer-social-network.md)

Technical challenge, is it possible to build a completely open source social media network?

Is it possible create a network without any centralized authority other than base software development and distribution?

How can servers be eliminated? How can privacy be preserved?

Does the network layer support?

Are IP addresses assigned permanently to devices? Or near permanent? Is the refresh rate low enough for the network to be preserved?

How to have a good enough user experience where it is an adequate substitute for other applications?

## Use Experience

## Existing Technology

## Server Elimination


## Tech Design

Overall the architecture relies on individual devices hosting a client which connects to other clients to share items.

Each client has the capability to create new items 

The client is used to read and write items.


Is the fundamental technology a distributed store based on tags?

Content discovery, local peers can recommend content based on what people filter. Algorithm to show content, then if you like the content it trusts that peers recommendations more.

- Pre download all content - don't try to look things up.

## UX Design

Scrolling gallery of content.

content generally being lightweight:
    - images
    - text
    - video
    - link
    - pdf?


- Content is pre downloaded so eventually the scroll comes to an end

- Curate (save) content to look back on.
    - unsaved content is deleted and not picked back up after a certain time. 
    - Thus every consumer of content reinforces what content remains and is propagated through the network

- Tags
    - content is tagged - this allows searching of content via tag
    - tags can be digitally signed to indicate who put them there this allows trusted taggers
    - Creator / Origin is also a tag enforced by digital signature.

- Add friends to easily share content - see what they are looking at as well

- Curate galleries and share with others.


## Growth Design

How to achieve rapid growth?

- Easy of use
- Useful
- Fun features

- No sign up process.
    - Read requires no account.
    - Write required no account.
        - Might want an alias however.

Difference between an account and a peer

Need to target a specific community
- Research
