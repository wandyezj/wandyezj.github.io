# RSS Feed Site

Static pure client side Website that can aggregate RSS feeds while respecting freedom and privacy.

Displays the feed in a pleasing way, allows filtering, allows marking as read or ignore.

Create a free Open Source RSS reader.

## Problem

There is not a good Open Source web based RSS reader that can bue continually built on.

[RSS](https://en.wikipedia.org/wiki/RSS)

RSS feeds are useful for many purposes. Commonly used for web comics, news sites, and blogs.

## Example RSS feeds

Sites with RSS feeds

- [SlashDot](https://rss.slashdot.org/Slashdot/slashdotMain)
- [Ars Technica](https://arstechnica.com/feed/)
- [Tech Crunch](https://techcrunch.com/feed/)
- [XKCD](https://xkcd.com/rss.xml)
- [wandyezj GitHub Blog](https://wandyezj.github.io/feed)

## Technology

- NPM
- Node
- TypeScript
- webpack
- Playwright
- Static GitHub site
- HTML
- CSS

## Design

- Configuration and state is a JSON object
    - Specific feeds to query
    - filtering information
    - already read items

- Parsing RSS XML into items

- UI Display and interaction with the webpage

### Browser Storage

[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

[Indexed DB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

### XML Parsing

[DOM Parser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)