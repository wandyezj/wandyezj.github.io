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

I don't think it is likely a new big tech company will emerge. I think it is more likely (although still unlikely) one of these companies could stumble and become less significant. In my opinion Apple is the most likely to stumble as it is overly reliant on a single product line in which it has a minority market share, is too engrossed in its own ecosystem, and does not work well with its competitors. The main think keeping Apple alive is the incompetence of its competitors management teams, and its brand reputation. As Apples competitors realign and its main product line becomes a commodity, Apple will need to find new market segments - however this will be a difficult transition since it is a company designed to produce and align on a single product. That said, Apple has a ton of cash and can choose which new market segments to enter - it will just be difficult given its focus on a single product line.

Each of these companies plays in both consumer and business segments and has developed their own membership programs that make it easy to use their services. The compatibility between ecosystems isn't so great as nearly all assets are stored in incompatible clouds.

Each of these companies is massive and can leverage more capital than smaller companies. Small companies can still compete effectively in niche segments since they have a singular focus which these larger companies lack. However, these large companies can afford to invest over decades without turning any profit - something that is difficult for smaller competitors.

### Business Segments

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

### Major Business Segment Breakdown by company

| Company   | Software Development | Cloud Services | Hardware    | Office    | Search        |
| ---       | ---                  | ---            | ---         | ---       | ---           |
| Google    | ✓                    | ✓ minor       | ✓ leader    | ✓ leader  | ✓ leader   |
| Microsoft | ✓ leader             | ✓ 2nd         | ✓ leader    | ✓ leader  | ✓ minor    |
| Amazon    | ✓                    | ✓ leader      | ✓ leader    |            |              |
| Apple     | ✓                    |               | ✓ leader    |            |              |

- Google
    - Leader: Search, Browser, Phone, Office
    - Emerging: AI
- Microsoft
    - Leader: Cloud, Desktop, Office, Business and Industrial software development tools.
    - Emerging: AI
- Amazon
    - Leader: Cloud, Store (Physical and digital goods)
    - Emerging: Industrial Robotics, Affordable Consumer Hardware
- Apple
    - Leader: Phone, Consumer Hardware
    - Emerging: Health

### Competition

As large companies dominate market positions, there is increasing pressure (from smaller companies and each other) on governments to pass laws that limit 'anti-competitive' practices and curb abuse.

Potential abuses of market position:

_note_: I use _potential_ because it is ultimately public opinion that determines what constitutes 'abuse'.

- Requiring customers to purchase everything from a single App Store, and not allowing 3rd party app stores.
    - Apple App Store.
    - Kindle reader store.
- Charging competitors exorbitant fees for sales through mobile apps when the equivalent sale on the browser has no fees.
    - Apple App Store, and Google App Store
- Using market power to enforce restrictive contracts
    - Google forced bundling of Play Services with Android
    - Amazon restricted contracts on sellers between business segments, requiring warehouse usage fees.
    - Amazon did not allow sellers to charge less on other sites.
- Locking out competitors
    - Amazon did not allow Walmart to sell their products through Amazon.
- Monopolizing defaults
    - Apple uses its hardware/software platform to advertise its own services.
    - Google purchased the right to be the default search engine in all major browsers.
- Creation of 1st party internal APIs that give an advantage to unrelated business segments.
- Deliberately making a competitor's solution worse through incompatibility to increase market share.
    - Apple iMessage is deliberately incompatible with Android in order to degrade the Android experience with iPhone. Per Tim Cook (CEO of Apple), the solution to this deliberately introduced incompatibility is to buy an iPhone.

Competition can be increased by enforcing compatibility and allow 3rd parties to develop solutions that hook into dominant platforms. In the case where monopolies naturally exist, it makes sense to regulate.

Breaking up large tech companies probably won't happen. There are significant benefits large tech companies provide for businesses and consumers. Additionally, they are all American companies and it is easier for the government to track and regulate big companies verses many smaller ones.

If the playing field were leveled, smaller niche companies could force large companies to invest further in their own services to stay competitive. However, it is not possible to level the playing field entirely. Large companies will always retain the advantage of scale, especially with the more capital-intensive parts of the business, like hardware. They can use those excess profits to invest in research and development for future products, while knowing that not all efforts lead to successes. They can also choose to buy out the competition, or invest the extra funds in copying the successful features of other companies. Such risks and rewards are inaccessible to smaller players.

### Security

The demand for increased security in software applications increases the cost to develop and maintain software. As software is increasingly used for everything, it is a prime target for criminals and state actors. Increasing attacks prompt concern by the public and thus prompt government action. Consumers and businesses will want to get their software from companies they feel are secure. This creates a large advantage for large tech companies that can afford to develop extensive security processes and practices and have the capacity to handle PR incidents.

## Browser First Applications

The browser as a runtime allows applications to be written once for all platforms. The browser offers compatibility across the complex operating systems {Android, iOS, macOS, Windows, Linux} and hardware ecosystem { x64, ARM, RISC-V} reducing development cost. The browser acts as a common VM like the [JRE](https://en.wikipedia.org/wiki/Java_(software_platform)

Most applications can be handled by the browser, and the browser is being further developed to handle other cases as well.

Browser engines are also becoming consolidated. It doesn't make business sense to develop a new engine and a successful new engine hasn't been developed since Chromium.

Browser Engines

- [Webkit](https://en.wikipedia.org/wiki/WebKit) - Safari (Apple) - 1998
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software))  - Firefox (Mozilla) - 1997
- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) - Chromium (Google) -  2013 WebKit fork

Notably, all of these engines are open source. It is easier to fork an existing engine than it is to develop a new one from scratch. A new browser that adheres to web standards and works with most websites would be incredibly expensive to develop. Even in 2013, it was too expensive, and Google ended up forking an existing engine and building on it.

Chromium has become the default engine used in application development. Chromium browsers have about 70% of the market. Indeed, iOS is the only commonly-used platform where Chromium is not the default, due to Apple's monopolistic restriction of other browser engines on its platform.

Chromium has become the standard library and browser. New web features are typically developed and experimented with in Chromium first. With the backing of two major tech companies (Google and Microsoft) using it as their primary engine, Chromium has the largest developer community. This ensures that Chromium is the most compatible and innovative browser. Since Chromium is the default where innovation happens, other browser developers are constantly in catchup, and are not nearly so well funded. There isn't a strong business case for most companies to develop their own browser engines or to pick a secondary browser that will be less compatible.

There already exists a standard browser that is freely available and consistently maintained that can be used to package and run any application across platforms. Why create another? This is great news for every developer who wants to write applications once that run everywhere.
