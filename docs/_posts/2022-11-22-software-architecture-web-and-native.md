---
layout: post
title: "Software Architecture Web and Native"
date: 2022-11-22 00:00:00 -0700
tags: software architecture
---

What are the advantages and drawbacks of a website that runs in the browser verses a native application?

## Definitions

Native Application - iOS Application, Android Application, Windows Application, Mac Application etc..

Web Applications - a website accessed through a browser Native Application.


## Launch

The end to end of discovering, setting up, to opening an application.

## Delivery

Web Applications are delivered via CDN. Each time the browser loads it downloads files from the CDN sometimes it can store files in a local cache to reduce load time. Large applications have increased load times and much effort is spent to optimize load times. Websites load speed is controlled by both the side of the website and and bandwidth of the connection.


Native applications are typically downloaded and installed from a website or by another application (App Store).

## Setup Time

The time it takes an application to be ready to open. This includes installation time. For example, downloading and installing the chrome web browser.

- Web Applications
    - The time it takes to navigate to the right URL in the browser. Possible to add shortcuts to access the site with a single click.
    - Example: accessing google.com

- Native Applications
    - when preinstalled - no setup time. Example: Chrome on Android.
    - otherwise - the time it takes to find the application online or in an app store and then download and install it. Example: Chrome on Mac OS.
    - note: installation can take time as data is downloaded or if popups like security warnings get in the way of installation. In IT managed systems people may not have permissions to install applications.



There is tremendous advantage to being one click away in the web browser or desktop.

## Setup Barriers

Barriers to setting up the application to be ready to open.

- Web Applications
    - internet can be slow or out
    - urls can be blocked by firewalls.
    - search websites can be attacked
    - search websites can be down for maintainance

- Native Applications
    - internet can be slow or out
    - urls can be blocked by firewall
    - installation can be blocked by Anti Virus or IT policy
    - Incompatibilities - doesn't work with specific OS, CPU architecture

## Open Time

The time it takes the application to open once setup.

Web Applications - The time it takes to open the site and start interacting once the url is discovered.

Native Applications - The time it takes to open the application from when it is clicked.

## Open Barriers

- Web Applications
    - internet can be slow or out
    - urls can be blocked by firewalls.
    - websites can be attacked
    - websites can be down for maintainance

## Sharing

How are applications organically shared and adopted?

Web Application URLs are easily spread through social media, it's easy for people to click a URL to try things out.

Native Applications if not preinstalled present a barrier for trial since they need to be discovered and then installed.

## Deployment Cadence

## Cost

Where is the application served from, who is paying for it?

Where is the application performing its computation, who is paying for it?



## Performance

## Security

Browser is a well studied sandbox.

Domains can be haijacked.

Android and iOS sandbox applications, however these are less well studied than browsers. Other Native applications can have different levels of sandbox. 

## Updates

## Common applications

Light Applications

- Lists
- Presentations
- Video Editing
    - ClipChamp
- Individual Photo Editing
- Surveys
- Text Chat
- Video Chat
- Voice Chat
- Basic Spreadsheets
- Gaming

Most light to medium applications can be run in the browser entirely on the client.

Heavy Applications

- Rendering
    - Web GPU can be accessed from the browser
    - Requires hardware support
- Torrenting

What kinds of applications are better as native applications?

- Computationally Expensive Applications
    - Applications that require lots of CPU or GPU and where performance is a large competitive edge.
- Data Expensive Applications
    - Applications that need to access and manipulate lots of data and where the final result is a large set of data.

In both of these cases specific hardware is required to perform this task, so who pays for the hardware? Does the customer pay for this hardware up front or do they rent this hardware?


Where does it make sense to have a native application? Very few places. Where you have the computation high iteration and low latency. Large CAD models. GPU intensive rendering workloads. Things that need peripherals. 

, the alterative is to pay the cost of this computation yourself



## Business Models


