---
layout: post
title: "Trends in Computing"
date: 2023-11-04 00:00:00 -0700
tags: business
---

This post focuses on what I see as trends in computing.

- [Open Source](#open-source)
- [System on a Chip](#system-on-a-chip)
- [Specialized Hardware](#specialized-hardware)
- [Big Tech Dominance](#big-tech-dominance)
- [Browser First Applications](#browser-first-applications)


## Open Source

Open Source is becoming the dominate way to develop fundamental libraries.

These fundamental libraries are developed by communities and as they are integrated into large companies products are further contributed to by these companies. Businesses and can gain significant benefits from these libraries and can also afford to dedicate resources to maintaining and improving them. Businesses need permissive licensing terms in order to use these libraries, this means there is an advantage for open source libraries to have permissive licensing terms.

- [FFmpeg](https://en.wikipedia.org/wiki/FFmpeg) - GNU Lesser General Public License -  Video encoding
- [libarchive](https://en.wikipedia.org/wiki/Libarchive) - New BSD License - archive file formats
- [Node.js](https://en.wikipedia.org/wiki/Node.js) - MIT License - JavaScript execution
- [OpenCV](https://en.wikipedia.org/wiki/OpenCV) - [Apache License](https://en.wikipedia.org/wiki/Apache_License)
- [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) - Apache-2.0
- [zlib](https://en.wikipedia.org/wiki/Zlib) - [Zlib License](https://en.wikipedia.org/wiki/Zlib_License)
- [libtorrent](https://en.wikipedia.org/wiki/Libtorrent) - BSD-3-Clause

There is also a new trend to Open Source computational hardware. [RISC-V](https://en.wikipedia.org/wiki/RISC-V) is an open source ISA, that hardware can be developed around. This is potentially the start of sharing fundamental hardware blocks between companies. However since hardware currently has a significant cost to build and the tools are highly specialized it will likely take longer for it to become mainstream unless companies decide to pool resources on components that do not confer a competitive advantage. An example of a relatively open source chip and operating system for IoT devices is the [Azure Sphere](https://en.wikipedia.org/wiki/Azure_Sphere).


## System on a Chip

Computer hardware is becoming more integrated into single chips that have all hardware necessary for a computer.

Eventually I see most devices using single standardized chipsets.

This can be seen in the following chip releases:

- Qualcomm mobile chipsets
- Apple M1

The following hardware features are already integrated:

- Graphics
- Communication {bluetooth, LTE, wifi}
- AI hardware
- Security kernels

Finally, [Chiplets](https://en.wikipedia.org/wiki/Chiplet) offers a new way combine small chips to produce custom packages, increasing yields, and simplifying manufacturing assembly.

## Specialized Hardware

Increasingly I see a golden age for computer hardware development. Every application is power constrained. On mobile lower power usage means less battery is required or running for longer without charging, either saving money or a competitive advantage. In the cloud race to the bottom cost, lower power, reduces costs and increases profit for the same services.

As workloads become more specialized and are delivered at scale it makes more sense to develop custom hardware.

Examples of custom hardware at scale used in on mobile and data centers

- Search Engines
- Networking
- Video Compression (Youtube)
- Graphics Processing
- AI

As Privacy becomes more of a concern and privacy laws become more complex and server loads become more expensive, more software workloads are likely to shift to the client.

## Big Tech Dominance

As computation matures as a sector, a small number of large tech companies will compete with each other and dominate most major market segments. Increasingly tech companies will succeed based on how well their products work within their own ecosystems and integrate with major competitors.

Key Tech companies

- Google
- Microsoft
- Amazon
- Apple

I don't think it's likely a new big tech company will emerge, I think it's more likely (although still unlikely) one of these companies could stumble and become less significant. In my opinion Apple is the most likely to stumble as it is overly reliant on a single product line in which it has a minority market share, is too engrossed in its own ecosystem, and does not work well with it's competitors. The main think keeping Apple alive is the incompetence of it's competitors management teams, and it's brand reputation. As Apples competitors realign and it's main product line becomes a commodity, Apple will need to find new market segments - however this will be a difficult transition since it is a company designed to produce and align on a single product. That said, Apple has a ton of cash and can choose which new market segments to enter - it will just be difficult given it's focus on a single product line.

Each of these companies plays in both consumer and business segments and has developed their own membership programs that make it easy to use their services. The compatibility between ecosystems isn't so great as nearly all assets are stored in incompatible clouds.

Each of these companies is massive and can leverage for more capital from their successful businesses than smaller companies. Small companies can still compete effectively in niche segments since the have a singular focus which these larger companies lack, but the ability of these large companies to invest over decades without turning any profit in a segment is hard for smaller competitors to do.

Business Segments

- Software Development (IDEs, Languages)
- Operating Systems (Mobile, Desktop, Cloud)
- Hardware endpoints (Phones, PCs, Tablets, readers)
- Computation on Demand Services (Specialized Cloud Services)
- Identity
- Cloud Storage
- Office Software (notes, spreadsheets, presentations, writing, photo editing, sound editing, video editing)
- Stores (digital, physical)
- Search
- Consumer Consumption Digital Services (music, video, books, news, games)
- Banking

Major Business Segment Breakdown by company

| Company   | Software Development | Cloud Services | Hardware    | Office    | Search        |
| ---       | ---                  | ---            | ---         | ---       | ---           |
| Google    | ✓                    | ✓ minor       | ✓ leader    | ✓ leader  | ✓ leader   |
| Microsoft | ✓ leader             | ✓ 2nd         | ✓ leader    | ✓ leader  | ✓ minor    |
| Amazon    | ✓                    | ✓ leader      | ✓ leader    |            |              |
| Apple     | ✓                    |               | ✓ leader    |            |              |

- Google
    - Leader: Search, Browser, Phone, Office
- Microsoft
    - Leader: Cloud, Desktop, Office, Business and Industrial software development tools.
    - Emerging: AI
- Amazon
    - Leader: Cloud, Store (Physical and digital goods)
    - Emerging: Industrial Robotics, Affordable Consumer Hardware
- Apple
    - Leader: Phone, Consumer Hardware
    - Emerging: Health

Competition

As these large companies have dominant market positions there will be increased pressure from smaller companies and from each other on government to pass laws to ban 'anti-competitive' practices and force compatibility to increase competition.

There are many smaller companies with niche products that serve their customers well that if the playing field were leveled through compatible standards would force these large companies to invest further in their own services to stay competitive. Ultimately there is diminishing returns for the smaller companies through since at some point since the larger companies have the capability to invest massive resources to implement any innovative feature given enough time and they have the ability to run their services cheaper thanks to hardware at scale.

Security

The demand for increased security in software applications increases the cost to develop software and places a continual cost to keep software secure. As software becomes used increasingly for everything that matters this makes it a prime target for criminals and state actors. Increased risk and attacks without mitigation will prompt increased concern by the public and thus prompt government action. Consumers and businesses will want to get their software from companies they can trust with their security. This creates a large advantage for large tech companies that can afford to develop extensive security processes and practices.


## Browser First Applications

The browser as a runtime offers compatibility across all Operating Systems and allows instant updates. There are currently multiple platforms in use {Android, iOS, macOS, Windows, Linux} powered by a variety of hardware. the browser provides a common VM (a better [JRE](https://en.wikipedia.org/wiki/Java_(software_platform))) that allows easy targeting of all platforms in a standardize runtime combining UI with execution.

Most applications can be handled by the browser, and the browser is being further developed to handle other cases as well.

Browser engines are also becoming consolidated, a successful new engine hasn't been developed and it doesn't make sense to develop a new one.

Browser Engines

- [Webkit](https://en.wikipedia.org/wiki/WebKit) - Safari (Apple) - 1998
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software))  - Firefox (Mozilla) - 1997
- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) - Chromium (Google) -  2013 WebKit fork

Notably all of these engines are Open Source - this means it's easier to fork an exiting engine than it is to develop a new one from scratch. A new browser that adheres to web standards and works with most websites would be incredibly expensive to develop, even in 2013 it was too expensive and Google ended up forking an existing engine and building on it.

Chromium has become the default engine used in application development, Chromium browsers have about 70% of the market, the only major exception is WebKit which has 15% however this is only due to Apples imposing a monopoly on their hardware products that prevents use of other engines.

Chromium has become the standard library and browser. New web features are typically developed and experimented with in Chromium first. Chromium has the largest developer community, and has two Major tech companies using it as their primary engine (Google & Microsoft) this essentially ensures that chromium is the most compatible and innovative browser. Since Chromium is the default where innovation happens, other browser developers are constantly in catchup, and are not nearly so well funded. There isn't a strong business case for most companies to develop their own browsers engines or to pick a secondary browser that will be less compatible.

What this means is there is a standard browser that is readily available that can be used to package and run any application across platforms. (Truly an Open Source success story).