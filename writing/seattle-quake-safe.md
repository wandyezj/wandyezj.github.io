# Seattle Quake Safe

## Background

Seattle sits on te Cascadia Subduction Zone, which is prone to massive earthquakes. Many buildings in Seattle are not safe in the advent of an earthquake. Serious injury or death are possible from things falling from buildings or from potential collapse.

- URM list, not easy to look up
- difficult to inform the public
- not a good experience

## Goals

- raise public awareness
- notify the public about which buildings are safe for people that care about the issue.
- allow building owners that care about the issue to take action.

## Idea

Instead of denoting which buildings are unsafe instead denote which buildings are safe.

Allows people to make an informed choice about where they live.

Certification that a building is safe for earthquakes

Various ratings of safety

Building owners can pay the city to inspect their building. This allows the program to be self funding.

Building owners receive a nice metal plaque with their rating they can proudly display in their office.

Certificates are given a number in increasing order of when the plaques were given out. Lower numbers mean the building owner cares more (good for early adoption)

Plaque contains the number which can be used to look up the building.


A Website allows people to look up the official inspection certificate so it can't be easily forged.

A QR code that can be used to look up the building.
Could also include an official block chain for certifications to further reduce forgery.

Website is pretty simple:

JSON file for each building `<number>.json` and a picture of the building. certificate can be looked up with`<url>?certificate=<number>`,  an QR code can be printed for a specific building (QR code can contain 4296 characters).






